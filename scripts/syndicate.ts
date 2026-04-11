#!/usr/bin/env npx tsx
/**
 * Content Syndication Tool for Farhand
 *
 * Publishes blog articles to multiple platforms with canonical URLs
 * pointing back to farhand.live for SEO.
 *
 * Usage:
 *   npx tsx scripts/syndicate.ts <slug>              # syndicate one article
 *   npx tsx scripts/syndicate.ts --all                # syndicate all articles
 *   npx tsx scripts/syndicate.ts --list               # list available articles
 *   npx tsx scripts/syndicate.ts <slug> --platform devto  # single platform
 *
 * Setup:
 *   Copy scripts/.env.syndication.example to scripts/.env.syndication
 *   Fill in API keys for each platform
 */

import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve, join } from 'path';

// ── Config ────────────────────────────────────────────────────────────
const BASE_URL = 'https://farhand.live';
const ORG_NAME = 'Farhand';

interface Article {
  slug: string;
  title: string;
  markdown: string;
  tags: string[];
  canonicalUrl: string;
}

interface EnvConfig {
  DEVTO_API_KEY?: string;
  HASHNODE_TOKEN?: string;
  HASHNODE_PUBLICATION_ID?: string;
  MEDIUM_TOKEN?: string;
  TUMBLR_CONSUMER_KEY?: string;
  TUMBLR_CONSUMER_SECRET?: string;
  TUMBLR_TOKEN?: string;
  TUMBLR_TOKEN_SECRET?: string;
  TUMBLR_BLOG_NAME?: string;
}

// ── Load env ──────────────────────────────────────────────────────────
function loadEnv(): EnvConfig {
  const envPath = resolve(__dirname, '.env.syndication');
  if (!existsSync(envPath)) {
    console.error('Missing scripts/.env.syndication — copy from .env.syndication.example');
    process.exit(1);
  }
  const lines = readFileSync(envPath, 'utf-8').split('\n');
  const env: Record<string, string> = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    env[key.trim()] = rest.join('=').trim().replace(/^["']|["']$/g, '');
  }
  return env as EnvConfig;
}

// ── Article Registry ──────────────────────────────────────────────────
const articles: Record<string, Omit<Article, 'slug'>> = {
  'ai-guided-field-service-robots': {
    title: 'AI-Guided Field Service for Robots: Why the Old Model is Broken',
    tags: ['robotics', 'fieldservice', 'ai', 'maintenance', 'automation'],
    canonicalUrl: `${BASE_URL}/blog/ai-guided-field-service-robots`,
    markdown: `
There are **4.66 million robots** in operation worldwide. The market for robot preventive maintenance is **$8.2 billion** today and growing to **$22 billion by 2035**. Yet the way we service these machines hasn't fundamentally changed in decades.

## The numbers are damning

According to Aquant's 2025-2026 benchmarks, **1 in 7 onsite service visits is completely unnecessary**. That's 14% of truck rolls that could have been avoided entirely. A failed first visit doesn't just waste one trip — it adds 2 more visits and 14 extra days to resolution.

The cost? Siemens estimates **$1.4 trillion in unplanned downtime annually** across industries.

## Why traditional field service fails robots

Robots are fundamentally different from traditional industrial equipment. They're software-defined, highly configurable, and their failure modes combine mechanical, electrical, and software issues.

The traditional model — travelling or regional technicians, OEM service contracts, in-house specialists — doesn't scale.

## AI changes the equation

AI-guided service means loading the **full manual into context** — SOPs, wiring diagrams, error codes, firmware changelogs, repair history. No chunking. No retrieval errors. No missed context.

The results: **39% faster resolution time**, **21% increase in accuracy**, and first-time fix rates jumping from 53% to 86%.

AI is the #1 investment area for service leaders — 68% plan to implement AI-guided workflows. The question isn't whether to adopt AI-guided service. It's how fast you can deploy it.

---

*[Farhand](${BASE_URL}) provides AI-guided field service technicians for robots and industrial machinery. [Learn more](${BASE_URL}/services/robots).*

*Sources: Aquant 2025-2026 Benchmarks, IFR World Robotics, Siemens True Cost of Downtime 2024.*
    `.trim(),
  },

  'field-service-skills-gap': {
    title: 'The Field Service Skills Gap Is Costing You Millions',
    tags: ['fieldservice', 'ai', 'workforce', 'manufacturing', 'automation'],
    canonicalUrl: `${BASE_URL}/blog/field-service-skills-gap`,
    markdown: `
Here's a number that should alarm every service leader: **bottom-performing technicians cost 97% more than top performers**. Not 10% more. Not 20% more. Nearly double.

## The gap is real — and it's widening

The skills gap between the best and worst teams is **2.9 points for top teams vs. 10 points for the worst**. Top teams achieve an **86% first-time fix rate**. Bottom teams? Just **53%**.

That 33-point gap translates directly to cost. Failed visits account for **44% of total service costs** for bottom performers.

## Why the gap exists

Knowledge lives in people's heads. Your senior tech with 15 years of experience knows every quirk of every machine. But that knowledge isn't written down, isn't searchable, and walks out the door when they retire.

Top companies retain **87% of employees** vs. just **66% for underperformers**.

## AI closes the gap — permanently

The solution isn't better hiring. It's better knowledge infrastructure. When your documentation and tribal knowledge are loaded into an AI platform, every technician gets guidance from your best expert.

**Boosting your bottom 25% to average saves ~17% in service costs.** Scale that across your entire workforce: **up to 26% service cost savings**.

---

*[Farhand](${BASE_URL}) combines AI with on-demand technicians to close the skills gap. [Schedule a call](${BASE_URL}/#schedule).*

*Sources: Aquant 2025-2026 Field Service Benchmark Reports.*
    `.trim(),
  },

  'remote-resolution-field-service': {
    title: '1 in 3 Service Issues Can Be Resolved Without Sending Anyone',
    tags: ['fieldservice', 'remotework', 'ai', 'efficiency', 'robotics'],
    canonicalUrl: `${BASE_URL}/blog/remote-resolution-field-service`,
    markdown: `
**1 in 5 cases could be resolved remotely but still get a truck roll.** That's a fifth of all service dispatches that didn't need to happen.

## The cost of unnecessary truck rolls

Every truck roll costs hundreds of dollars — fuel, labor, opportunity cost, customer downtime. When **14% of onsite visits are completely unnecessary**, you're burning cash on logistics that add zero value.

## How AI enables remote resolution

The key to remote resolution is **accurate diagnosis without physical presence**. That requires knowing the exact machine, its configuration, its history, and its current symptoms.

With AI-guided service, the diagnostic knowledge is always available. **1 in 3 service queries can be resolved this way.** AI + phone = fixed.

## When you do need to send someone

Remote resolution handles the easy-to-medium cases. But when you need boots on the ground, AI still helps. The remote triage has already identified the problem, the likely root cause, and the parts needed. First-time fix rates jump to **86%**.

---

*[Farhand](${BASE_URL}) starts every service request with remote triage. [Learn more](${BASE_URL}/services/robots).*

*Sources: Aquant 2025-2026 Field Service Benchmark Reports.*
    `.trim(),
  },

  'knowledge-preservation-field-service': {
    title: "Your Senior Tech Is Retiring. Is Their Knowledge Retiring Too?",
    tags: ['fieldservice', 'knowledgemanagement', 'ai', 'workforce', 'manufacturing'],
    canonicalUrl: `${BASE_URL}/blog/knowledge-preservation-field-service`,
    markdown: `
Every field service organization has that one person. The senior tech who's been there 15 years. Who knows every quirk of every machine. When they retire, **decades of institutional knowledge walk out the door**.

## The retention crisis

Top-performing service companies retain **87% of their employees**. Underperformers retain just **66%**. Every departure takes knowledge with it. Every new hire starts from scratch.

**1 in 4 service leaders say improving frontline onboarding is their most urgent AI challenge.**

## Knowledge preservation isn't documentation

Traditional documentation captures the formal knowledge. But the most valuable knowledge is informal: the workarounds, the gotchas, the tips that never make it into any manual.

AI-guided service captures both. Every repair generates data. Every voice debrief adds context. Every resolution becomes searchable.

## New tech, veteran performance

When your entire service history and tribal knowledge is loaded into an AI platform, a new technician doesn't need months of shadowing. **New tech performs like a 10-year veteran on day one.**

---

*[Farhand's Relay platform](${BASE_URL}/#relay) captures and distributes knowledge automatically. [Schedule a call](${BASE_URL}/#schedule).*

*Sources: Aquant 2025-2026 Benchmarks, Service Council 2025 State of AI.*
    `.trim(),
  },

  'first-time-fix-rate-ai': {
    title: 'How AI Pushes First-Time Fix Rates from 53% to 86%',
    tags: ['ai', 'fieldservice', 'metrics', 'robotics', 'automation'],
    canonicalUrl: `${BASE_URL}/blog/first-time-fix-rate-ai`,
    markdown: `
First-time fix rate is the single most important metric in field service. Fix it the first time: customer is happy, costs contained. Miss it: **2 more visits, 14 extra days, and a frustrated customer**.

## The 33-point gap

**Top teams: 86% first-time fix rate. Bottom teams: 53%.** That's a 33-point gap — explained by **knowledge access**, not better tools.

Failed visits account for **44% of total service costs** for bottom performers.

## What AI actually does

**Before the visit:** AI analyzes symptoms against service history, documentation, and known failure patterns. Identifies the likely root cause and parts needed.

**During the visit:** Step-by-step instructions specific to this exact machine, this exact issue. No guesswork.

**After the visit:** The resolution is captured, enriching the knowledge base.

The numbers: **39% faster resolution. 21% accuracy improvement. 96% AI accuracy in guided troubleshooting.**

## The ROI is immediate

Companies deploying AI-guided service see **3x ROI within the first year**. A **20% reduction in escalations**. **13% more work orders resolved without parts**.

---

*[Farhand](${BASE_URL}) delivers AI-guided technicians for [robots](${BASE_URL}/services/robots), [industrial machinery](${BASE_URL}/services/industrial-machinery), and [medical equipment](${BASE_URL}/services/medical-equipment). [Get started](${BASE_URL}/#schedule).*

*Sources: Aquant 2025-2026 Benchmarks, Neuron7 2026 Service AI Report.*
    `.trim(),
  },
};

// ── Platform Publishers ───────────────────────────────────────────────

async function publishDevTo(article: Article, apiKey: string): Promise<string> {
  const res = await fetch('https://dev.to/api/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
    body: JSON.stringify({
      article: {
        title: article.title,
        body_markdown: article.markdown,
        published: true,
        canonical_url: article.canonicalUrl,
        tags: article.tags.slice(0, 4),
        organization_id: undefined,
      },
    }),
  });
  if (!res.ok) throw new Error(`Dev.to: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data.url;
}

async function publishHashnode(article: Article, token: string, publicationId: string): Promise<string> {
  const query = `
    mutation PublishPost($input: PublishPostInput!) {
      publishPost(input: $input) {
        post { url }
      }
    }
  `;
  const res = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: token },
    body: JSON.stringify({
      query,
      variables: {
        input: {
          title: article.title,
          contentMarkdown: article.markdown,
          publicationId,
          tags: article.tags.map((t) => ({ slug: t, name: t })),
          originalArticleURL: article.canonicalUrl,
        },
      },
    }),
  });
  if (!res.ok) throw new Error(`Hashnode: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data?.data?.publishPost?.post?.url || 'published';
}

async function publishMedium(article: Article, token: string): Promise<string> {
  // Get user ID first
  const meRes = await fetch('https://api.medium.com/v1/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!meRes.ok) throw new Error(`Medium /me: ${meRes.status}`);
  const me = await meRes.json();
  const userId = me.data.id;

  const res = await fetch(`https://api.medium.com/v1/users/${userId}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      title: article.title,
      contentFormat: 'markdown',
      content: article.markdown,
      canonicalUrl: article.canonicalUrl,
      tags: article.tags.slice(0, 5),
      publishStatus: 'draft', // publish as draft for review
    }),
  });
  if (!res.ok) throw new Error(`Medium: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return data.data.url;
}

async function publishTumblr(article: Article, env: EnvConfig): Promise<string> {
  // Tumblr OAuth 1.0a is complex — use v2 API with OAuth2 if available
  const blogName = env.TUMBLR_BLOG_NAME;
  if (!blogName) throw new Error('TUMBLR_BLOG_NAME not set');

  // Using NPF (Neue Post Format) via API v2 with API key
  const res = await fetch(`https://api.tumblr.com/v2/blog/${blogName}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.TUMBLR_TOKEN}`,
    },
    body: JSON.stringify({
      type: 'text',
      state: 'published',
      title: article.title,
      body: article.markdown,
      format: 'markdown',
      tags: article.tags.join(','),
      source_url: article.canonicalUrl,
    }),
  });
  if (!res.ok) throw new Error(`Tumblr: ${res.status} ${await res.text()}`);
  const data = await res.json();
  return `https://${blogName}.tumblr.com/post/${data?.response?.id || 'published'}`;
}

// ── Main ──────────────────────────────────────────────────────────────

async function syndicateArticle(slug: string, env: EnvConfig, platform?: string) {
  const articleData = articles[slug];
  if (!articleData) {
    console.error(`Article not found: ${slug}`);
    console.error('Available:', Object.keys(articles).join(', '));
    process.exit(1);
  }

  const article: Article = { slug, ...articleData };
  console.log(`\n📄 Syndicating: ${article.title}\n`);

  const platforms: { name: string; fn: () => Promise<string>; enabled: boolean }[] = [
    {
      name: 'Dev.to',
      fn: () => publishDevTo(article, env.DEVTO_API_KEY!),
      enabled: !!env.DEVTO_API_KEY && (!platform || platform === 'devto'),
    },
    {
      name: 'Hashnode',
      fn: () => publishHashnode(article, env.HASHNODE_TOKEN!, env.HASHNODE_PUBLICATION_ID!),
      enabled: !!env.HASHNODE_TOKEN && !!env.HASHNODE_PUBLICATION_ID && (!platform || platform === 'hashnode'),
    },
    {
      name: 'Medium',
      fn: () => publishMedium(article, env.MEDIUM_TOKEN!),
      enabled: !!env.MEDIUM_TOKEN && (!platform || platform === 'medium'),
    },
    {
      name: 'Tumblr',
      fn: () => publishTumblr(article, env),
      enabled: !!env.TUMBLR_TOKEN && !!env.TUMBLR_BLOG_NAME && (!platform || platform === 'tumblr'),
    },
  ];

  for (const p of platforms) {
    if (!p.enabled) {
      if (!platform) console.log(`  ⏭  ${p.name} — skipped (no API key)`);
      continue;
    }
    try {
      const url = await p.fn();
      console.log(`  ✅ ${p.name} — ${url}`);
    } catch (err: any) {
      console.error(`  ❌ ${p.name} — ${err.message}`);
    }
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--list')) {
    console.log('\nAvailable articles:\n');
    for (const [slug, art] of Object.entries(articles)) {
      console.log(`  ${slug}`);
      console.log(`    ${art.title}\n`);
    }
    return;
  }

  const env = loadEnv();
  const platformFlag = args.find((a) => a.startsWith('--platform='))?.split('=')[1]
    || (args.indexOf('--platform') >= 0 ? args[args.indexOf('--platform') + 1] : undefined);

  if (args.includes('--all')) {
    for (const slug of Object.keys(articles)) {
      await syndicateArticle(slug, env, platformFlag);
    }
    return;
  }

  const slug = args.find((a) => !a.startsWith('--'));
  if (!slug) {
    console.log('Usage: npx tsx scripts/syndicate.ts <slug> [--platform devto|hashnode|medium|tumblr]');
    console.log('       npx tsx scripts/syndicate.ts --all');
    console.log('       npx tsx scripts/syndicate.ts --list');
    return;
  }

  await syndicateArticle(slug, env, platformFlag);
}

main().catch(console.error);
