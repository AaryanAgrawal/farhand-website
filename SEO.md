# Farhand SEO Dashboard

Living status doc. Last updated: 2026-04-13.

This is the single source of truth for on-site + off-site SEO state. If a pillar's row changes, update it here and commit alongside the code change that changed it.

---

## Status at a glance

| Pillar | Status | Evidence |
|---|---|---|
| Programmatic landing pages (525 URLs) | ✅ shipped | `src/app/services/[machine]/[city]/page.tsx`, `src/data/cities.ts`, `src/data/machineTypes.ts` |
| Schema.org markup (Article, Service, Breadcrumb, Organization) | ✅ shipped | `src/lib/schema.ts`, `src/components/ArticleSchema.tsx`, `src/app/layout.tsx` |
| Sitemap + image extensions | ✅ shipped | `src/app/sitemap.ts` |
| RSS 2.0 feed + discovery link | ✅ shipped | `src/app/rss.xml/route.ts`, `src/app/layout.tsx` |
| Blog (15 posts, canonical registry) | ✅ shipped | `src/data/blogPosts.ts`, `src/app/blog/*/page.tsx` |
| Syndication pipeline (Dev.to, Hashnode, Medium, Tumblr, Telegraph) | ✅ shipped | `scripts/syndicate.ts`, `scripts/content-pipeline.ts` |
| Cover image generation (DALL-E + Unsplash) | ✅ shipped | `scripts/content-pipeline.ts` (`generate-images`, `generate-all-images`) |
| GBP claim + review-monitoring runbook | ✅ documented | `docs/GBP_SETUP.md` |
| Newsletter signup (UI + placeholder API) | ✅ shipped | `src/components/NewsletterSignup.tsx`, `src/app/api/newsletter/route.ts` |
| Search Atlas OTTO (client-side) | ✅ live | `src/app/layout.tsx` (UUID `c3ddc202-592a-4afa-b651-4fdef43e7e20`) |
| Search Atlas API / MCP automation | 🟡 partial | scaffolded, not wired — see below |
| `robots.txt` | ⬜ missing | — |
| FAQ JSON-LD | ⬜ not started | `src/data/faqs.ts` exists, markup not emitted |
| Per-post OG cover images | ⬜ not started | pipeline ready, no credentials populated |
| GA4 measurement ID | ⬜ placeholder | `src/app/layout.tsx` still says `G-XXXXXXXXXX` |
| Google Analytics CLI / data access | ⬜ not started | — |
| Visitor identification (Clearbit / Snitcher) | ⬜ not started | — |
| Backlink outreach plan | ⬜ not started | — |
| Real newsletter provider (Loops / Resend / Mailchimp) | ⬜ not started | endpoint is placeholder that `console.log`s |

---

## On-site SEO

### Shipped

- **525 programmatic landing pages.** Every combination of 7 machine types × 75 cities at `/services/{machine}/{city}`. Dynamic route at `src/app/services/[machine]/[city]/page.tsx` with `generateStaticParams` so each URL ships as static HTML. Per-page title, meta description, canonical, and OG metadata generated in `generateMetadata`. Service + Breadcrumb JSON-LD injected inline. Source data: `src/data/cities.ts`, `src/data/machineTypes.ts`.
- **Schema.org helpers** in `src/lib/schema.ts`: `articleSchema`, `productSchema`, `breadcrumbSchema`. Organization JSON-LD lives directly in `src/app/layout.tsx` and is always present site-wide.
- **Article JSON-LD on every blog post.** `src/components/ArticleSchema.tsx` reads the canonical blog registry at `src/data/blogPosts.ts` and renders `<script type="application/ld+json">`. Wired into all 15 `src/app/blog/*/page.tsx` files.
- **Sitemap** at `src/app/sitemap.ts` — emits root, 7 service pages, 525 programmatic pages, 4 stakeholder pages, blog index, all 15 blog posts, `/faq`, `/terms`, `/privacy`. Homepage entry carries `image:image` extensions for `us-map.png`, `relay-platform.png`, `logo-w-type-dark.png`.
- **RSS 2.0 feed** at `src/app/rss.xml/route.ts`. Sorted by date, proper RFC 822 timestamps, `application/rss+xml` content-type, 1h cache + SWR. Discovery `<link rel="alternate">` in `src/app/layout.tsx`.
- **Blog registry** at `src/data/blogPosts.ts` — single source of truth for slug, title, excerpt, date, category. Used by the blog index, RSS feed, and `ArticleSchema`.

### Next

1. **`public/robots.txt`** — explicit `Sitemap:` pointer plus `User-agent: *` allow. Prevents default Next.js behavior from leaking `/api/*` to crawlers.
2. **FAQ JSON-LD** on `/faq` using `src/data/faqs.ts` — adds a new `faqSchema` helper to `src/lib/schema.ts` and emits it from `src/app/faq/page.tsx`. Triggers FAQ rich results.
3. **Per-post cover images.** Run `npx tsx scripts/content-pipeline.ts generate-all-images` once `OPENAI_API_KEY` or `UNSPLASH_ACCESS_KEY` is populated in `scripts/.env.syndication`. Updates `coverImage` on each `ArticleRecord`, populates `public/blog/{slug}.jpg`, and feeds into both the Next.js OG tags (once we read from the registry) and the syndication publishers (already wired).
4. **Static root OG image.** Single branded 1200×630 at `public/og-default.jpg` referenced from `src/app/layout.tsx` metadata. Right now the root has no OG image at all.
5. **Programmatic pages OG images.** City × machine pages fall back to the site default; consider a dynamic OG route (`src/app/api/og/[machine]/[city]/route.tsx`) using `next/og` for per-page social cards.

---

## Off-site SEO

### Shipped

- **Syndication pipeline.** `scripts/content-pipeline.ts` + `scripts/syndicate.ts` push blog posts to Dev.to, Hashnode, Medium, Tumblr, Telegraph with canonical URLs back to `farhand.live`. Rate-limit aware (Dev.to 150s spacing, retry on 429). Each platform receives the post's cover image (`main_image` on Dev.to, `coverImageOptions.coverImageURL` on Hashnode, first-node figure on Telegraph).
- **Cover image providers.** OpenAI DALL-E 3 (hd, 1792×1024, branded prompt template) preferred; Unsplash (topic-aware query mapping, 1200×630 crop) as free fallback. Saves to `public/blog/{slug}.jpg` and persists the relative URL on `ArticleRecord.coverImage`.
- **GBP runbook.** `docs/GBP_SETUP.md` covers listing claim, service-area declaration, review monitoring via the Search Atlas MCP, response workflow, and ongoing hygiene cadence.
- **Newsletter signup surface.** `src/components/NewsletterSignup.tsx` rendered on `/` and `/blog`. Client-side validation + submission to `src/app/api/newsletter/route.ts`.

### Next

1. **Execute the GBP runbook.** The doc exists; the listing still needs to be claimed at [business.google.com](https://business.google.com) using `aaryan@farhand.live`. Service-area configuration, photos, and Q&A seed list per `docs/GBP_SETUP.md`.
2. **Real newsletter provider.** `src/app/api/newsletter/route.ts` currently just logs the email and returns `{ok:true}`. Pick Loops / Resend / Mailchimp, add provider-specific API call, keep the placeholder validation in place.
3. **Run the image pipeline for existing posts.** Needs `OPENAI_API_KEY` (~$0.08/image hd × 15 posts ≈ $1.20) or free Unsplash. Once run, downstream syndicators pick up the `coverImage` automatically.
4. **Backlink outreach.** No plan written yet. Candidates: guest posts on Modern Machine Shop, Automation.com, Field Service Digital, Assembly Magazine; partnerships with OEMs we service; listings in Robotics Business Review directory.
5. **Syndicate the 10 new posts.** Run `npx tsx scripts/content-pipeline.ts seed-existing` (needs an update to include the new posts) then `syndicate-all`.

---

## Search Atlas — 🟡 partial

| Piece | Status | Notes |
|---|---|---|
| Client-side OTTO dynamic optimization | ✅ live | `src/app/layout.tsx` loads `dashboard.searchatlas.com/scripts/dynamic_optimization.js` with UUID `c3ddc202-592a-4afa-b651-4fdef43e7e20`. On-page optimization runs automatically. |
| `searchatlas-mcp-server` in `.claude/settings.json` | ⬜ not installed | Separate task — touches `.claude/settings.json`. |
| `SEARCHATLAS_API_KEY` populated | ⬜ empty | Declared in `scripts/content-pipeline.ts` and `scripts/.env.syndication.example` but no real value. No code path actually calls Search Atlas APIs yet. |
| Keyword research workflow automated | ⬜ not started | Currently we're hand-picking keywords. |
| Site audit / content scoring loop | ⬜ not started | OTTO is running but we don't read its recommendations programmatically. |
| GBP review monitoring via MCP | ⬜ not started | Runbook in `docs/GBP_SETUP.md` but not executed. |
| LLM visibility tracking (ChatGPT / Perplexity citations) | ⬜ not started | — |

**Short answer: Search Atlas is NOT complete.** Client-side OTTO is running, which means on-page optimization happens automatically on every pageview. Everything else — keyword research, audits, rank tracking, GBP review monitoring, backlink analysis — is documented but not wired.

**To complete it:**

1. Install the MCP server: add to `.claude/settings.json`:
   ```json
   "searchatlas": {
     "command": "npx",
     "args": ["searchatlas-mcp-server"],
     "env": { "SEARCHATLAS_API_KEY": "<key>" }
   }
   ```
2. Populate `SEARCHATLAS_API_KEY` in `scripts/.env.syndication`.
3. Add MCP-driven commands to `scripts/content-pipeline.ts`: `audit-site`, `research-keywords <vertical>`, `score-post <slug>`, `poll-gbp-reviews`.
4. Wire the GBP runbook steps from `docs/GBP_SETUP.md` into an actual scheduled task.

---

## Analytics — ⬜ not started

- **GA4.** `src/app/layout.tsx` has a placeholder script pointing at `G-XXXXXXXXXX`. Real measurement ID needs to be created in GA4 admin and swapped in.
- **Google Analytics CLI** (`google-analytics-cli` npm package) — not installed. Blocks CLI-driven traffic reports.
- **Visitor ID.** No Clearbit Reveal, Snitcher, or equivalent. Start with Clearbit free tier (50 reveals/month).

---

## Content registry

Source of truth: `src/data/blogPosts.ts` (15 entries). Sitemap + RSS + blog index all read from here. When adding a new post:

1. Create `src/app/blog/{slug}/page.tsx` importing `BlogPost` and `ArticleSchema`.
2. Append to `blogPosts` array at the top of `src/data/blogPosts.ts`.
3. Append slug to `blogPosts` array in `src/app/sitemap.ts`.

### Next 10 topics (prioritized by search volume × topical fit)

1. "How much does industrial robot maintenance cost?" — cost calculator angle
2. "ABB robot error codes explained" — ABB equivalent of the FANUC guide
3. "KUKA robot service: maintenance schedule and common failures"
4. "Field service KPIs: what top teams actually measure"
5. "Warehouse robot maintenance guide (AMRs, AGVs, ASRS)"
6. "AI agents in field service: separating hype from ROI"
7. "Medical device field service compliance: FDA, IEC 60601, and beyond"
8. "How to build a field service SLA customers will actually sign"
9. "The on-demand technician model: what's changed in 2026"
10. "Robot calibration service: when to call, what it costs, what to expect"

---

## Operational checklist

Before shipping any SEO change:

```bash
npx tsc --noEmit                     # must be clean
npx next build                       # must show "Compiled successfully"
# 562+ routes expected (15 blog + 525 programmatic + the rest)
```

Live smoke test (dev or preview):

```bash
curl -sI   http://localhost:PORT/rss.xml                              # 200, application/rss+xml
curl -s    http://localhost:PORT/sitemap.xml | grep -c '<url>'        # 562+
curl -s    http://localhost:PORT/blog/field-service-roi-calculator \
  | grep -c '"@type":"Article"'                                       # 1
curl -s    http://localhost:PORT/services/robots/new-york \
  | grep -c '"@type":"Service"'                                       # 1
```

When adding a new schema type, add a corresponding `grep -c` line above.
