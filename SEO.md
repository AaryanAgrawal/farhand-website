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
| Search Atlas REST API pipeline | ✅ shipped | `scripts/content-pipeline.ts` — `sa-status`, `sa-issues`, `sa-recrawl`, `sa-snapshot` |
| Search Atlas MCP (keywords, GBP, content scoring, backlinks) | ✅ installed | `~/.claude/settings.json` → `searchatlas` server; 16 tools available in Claude sessions |
| OTTO widget **active** (pushing live fixes) | ⚠️ NOT active | API returns `is_active: false`. Toggle "Activate" in Search Atlas dashboard. |
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

## Search Atlas — ✅ wired, ⚠️ one toggle pending

| Piece | Status | Notes |
|---|---|---|
| Client-side OTTO dynamic optimization | ✅ live | `src/app/layout.tsx` loads `dashboard.searchatlas.com/scripts/dynamic_optimization.js` with UUID `c3ddc202-592a-4afa-b651-4fdef43e7e20`. |
| OTTO widget engaged (`pixel_tag_state`) | ✅ | API confirms `installed` + "OTTO AI SEO is Engaged". |
| `searchatlas-mcp-server` in `~/.claude/settings.json` | ✅ installed | 16 MCP tools available from any Claude session (`searchatlas_orchestrator`, `searchatlas_otto_seo`, `searchatlas_content`, `searchatlas_site_explorer`, `searchatlas_gbp`, `searchatlas_authority_building`, `searchatlas_llm_visibility`, `searchatlas_keywords`, `searchatlas_ppc`, `searchatlas_website_studio`, plus 6 management tools). |
| REST API pipeline commands | ✅ shipped | `scripts/content-pipeline.ts` exposes `sa-status`, `sa-issues`, `sa-recrawl`, `sa-snapshot`. All auth via `x-api-key` header against `https://sa.searchatlas.com/api/v2/`. |
| `SEARCHATLAS_API_KEY` in `.env.syndication` | ✅ documented | Pull from `~/.claude/settings.json` or the Search Atlas dashboard. |
| Site health baseline | ✅ captured | 917 / 1000 as of last crawl. Pre-merge baseline: 3 pages, 2 sitemap URLs. Post-merge recrawl triggered 2026-04-13 — will include all 562 pages once push lands. |
| Open issue groups tracked | ✅ visible | 11 open groups. Top four by `health_to_gain`: Page Title (+21), Images (+20), Content (+18), Page Headers (+13). Run `sa-issues` for the live list. |
| **OTTO `is_active`** | ⚠️ **false** | Widget is engaged but not activating fixes. **One-click toggle in the Search Atlas dashboard** — until that flips, OTTO reads the site but doesn't push DOM patches. Blocks the actual on-page optimization lift. |
| Keyword research automated | 🟡 MCP-only | No documented REST endpoint. Use the `searchatlas_keywords` MCP tool from Claude instead. |
| GBP review monitoring | 🟡 MCP-only | No documented REST endpoint. Use `searchatlas_gbp` MCP tool from Claude. |
| Content scoring per URL | 🟡 MCP-only | Use `searchatlas_content` MCP tool. |
| Backlink / competitor analysis | 🟡 MCP-only | Use `searchatlas_site_explorer` MCP tool. |
| LLM visibility tracking | 🟡 MCP-only | Use `searchatlas_llm_visibility` MCP tool. |

### What the REST API currently exposes

Only four endpoint families are stable enough on the public REST surface to automate from CI:

- `GET  /api/v2/otto-projects/{uuid}/` — project detail (domain rating, refdomains, backlinks, pixel state, ROI, last crawl)
- `GET  /api/v2/site-audit/{id}/` — site audit detail (site health, pages crawled, sitemap coverage, CMS detection, JS rendering flag)
- `GET  /api/v2/site-audit/{id}/issues/` — issue groups with `health_to_gain`, severity counts
- `POST /api/v2/site-audit/{id}/recrawl/` — trigger a fresh crawl

Everything else (keywords, GBP, backlinks, content scoring, LLM visibility) is **MCP-only**. Call those from a Claude session — the MCP server runs from `~/.claude/settings.json` and all 16 tools load automatically.

### Pipeline commands

```bash
# OTTO project + site audit overview
npx tsx scripts/content-pipeline.ts sa-status

# Open issue groups, ranked by health_to_gain (biggest SEO wins at the top)
npx tsx scripts/content-pipeline.ts sa-issues

# Kick off a fresh site audit crawl (should_repoll flips true, audit_started_at updates)
npx tsx scripts/content-pipeline.ts sa-recrawl

# Dump project + audit + issues JSON to scripts/.content-data/seo-snapshots/{ISO}.json
# Run weekly to track site health trends over time
npx tsx scripts/content-pipeline.ts sa-snapshot
```

### Remaining Search Atlas work

1. **Flip `is_active` to true** in the Search Atlas dashboard. This is a one-click toggle under the OTTO project settings and is the single biggest blocker to on-page optimization actually taking effect.
2. **Wait for the 2026-04-13 recrawl to finish** — it was triggered as part of this work. The pre-merge audit saw only 3 pages; the post-merge recrawl will include all 562.
3. **Schedule `sa-snapshot` weekly** (cron or GitHub Action) so we get a trend file per week under `scripts/.content-data/seo-snapshots/`.
4. **Route keyword research + GBP polling through the MCP tools** in a Claude session — they're available, no new code needed.

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
