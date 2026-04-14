import { NextRequest } from 'next/server';
import { enrichViaApollo, storeInNotion } from '@/lib/notion';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const company = typeof payload?.company === 'string' ? payload.company.trim() : '';
    const contactName = typeof payload?.name === 'string' ? payload.name.trim() : '';

    if (!company || company.length > 200) {
      return new Response(JSON.stringify({ error: 'Invalid company' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (contactName.length > 200) {
      return new Response(JSON.stringify({ error: 'Invalid name' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const meta = {
      source: String(payload?.source || 'qr-oem'),
      referrer: String(payload?.referrer || ''),
      userAgent: String(payload?.userAgent || ''),
    };

    const enrichment = await enrichViaApollo(company);
    const storage = await storeInNotion(company, contactName, enrichment, meta);

    console.log(
      '[oem-lead]',
      JSON.stringify({
        company,
        contactName,
        enrichmentSource: enrichment.source,
        orgMatch: enrichment.org?.name,
        peopleFound: enrichment.topPeople.length,
        stored: storage.stored,
        ...meta,
      }),
    );

    return new Response(
      JSON.stringify({
        ok: true,
        enriched: enrichment.source === 'apollo',
        stored: storage.stored,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (err) {
    console.error('[oem-lead] error:', err);
    return new Response(JSON.stringify({ error: 'Bad request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
