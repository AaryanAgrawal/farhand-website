import { NextRequest } from 'next/server';
import { lookupCompanyByIp } from '@/lib/ip-lookup';
import {
  enrichViaApollo,
  findLeadByCompany,
  bumpLeadVisit,
  storeInNotion,
} from '@/lib/notion';

/**
 * Passive visitor identification endpoint.
 *
 * Called fire-and-forget by src/middleware.ts on every top-level page load.
 * Protected by VISIT_SECRET header so external parties can't spoof visits.
 *
 * Pipeline:
 *   1. Validate secret header
 *   2. Reverse IP → company (IPinfo, graceful no-op without token)
 *   3. Filter out ISPs, hosting IPs, unknowns
 *   4. Dedup against existing Notion rows (bump Visit Count if found)
 *   5. Enrich new leads via Apollo
 *   6. Store new lead in Notion
 */
export async function POST(req: NextRequest) {
  try {
    const expected = process.env.VISIT_SECRET;
    if (!expected) {
      // No secret configured → feature disabled; silently succeed.
      return new Response(JSON.stringify({ ok: true, disabled: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const provided = req.headers.get('x-visit-secret');
    if (provided !== expected) {
      return new Response(JSON.stringify({ error: 'forbidden' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const payload = await req.json();
    const ip = typeof payload?.ip === 'string' ? payload.ip : '';
    const path = typeof payload?.path === 'string' ? payload.path : '';
    const ua = typeof payload?.ua === 'string' ? payload.ua : '';
    const referrer = typeof payload?.referrer === 'string' ? payload.referrer : '';

    if (!ip) {
      return new Response(JSON.stringify({ ok: true, skipped: 'no ip' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const lookup = await lookupCompanyByIp(ip);
    if (lookup.source === 'none' || !lookup.companyName) {
      console.log('[visit]', JSON.stringify({ ip: ip.replace(/\d+$/, 'x'), path, skipped: 'no ipinfo' }));
      return new Response(JSON.stringify({ ok: true, skipped: 'no company' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Filter: only real companies, not ISPs or hosting providers
    if (lookup.type !== 'business' && lookup.type !== 'education' && lookup.type !== 'government') {
      console.log(
        '[visit]',
        JSON.stringify({
          ip: ip.replace(/\d+$/, 'x'),
          path,
          skipped: `type=${lookup.type}`,
          company: lookup.companyName,
        }),
      );
      return new Response(JSON.stringify({ ok: true, skipped: `type=${lookup.type}` }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Dedup: if company already in Notion, just bump the visit counter
    const existing = await findLeadByCompany(lookup.companyName);
    if (existing.exists && existing.pageId) {
      await bumpLeadVisit(existing.pageId, existing.visitCount || 0);
      console.log(
        '[visit]',
        JSON.stringify({
          ip: ip.replace(/\d+$/, 'x'),
          path,
          dedup: 'notion-exists',
          company: lookup.companyName,
        }),
      );
      return new Response(JSON.stringify({ ok: true, dedup: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // New lead → enrich + store
    const enrichment = await enrichViaApollo(lookup.companyName);
    const storage = await storeInNotion(lookup.companyName, '', enrichment, {
      source: 'website',
      referrer,
      userAgent: ua,
      path,
    });

    console.log(
      '[visit]',
      JSON.stringify({
        ip: ip.replace(/\d+$/, 'x'),
        path,
        company: lookup.companyName,
        type: lookup.type,
        enrichment: enrichment.source,
        stored: storage.stored,
      }),
    );

    return new Response(
      JSON.stringify({
        ok: true,
        company: lookup.companyName,
        stored: storage.stored,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (err) {
    console.error('[visit] error:', err);
    return new Response(JSON.stringify({ error: 'bad request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
