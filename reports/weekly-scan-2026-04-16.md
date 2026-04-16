# Weekly Competitive + Keyword Scan — 2026-04-16

## Competitor activity

All competitor sites were unreachable during this scan (bot-protection 403s or ECONNREFUSED).
Attempted: `/blog`, `/resources`, `/news`, `/insights`, and root domain for each.

- **Roboworx** (roboworx.com): HTTP 403 on root and `/blog` — Cloudflare bot protection blocking crawler. No new activity detectable.
- **Reliance Robotics** (reliance-robotics.com): ECONNREFUSED on root and `/blog` — site may be down or domain not resolving. No activity detectable.
- **Formic** (formic.co): HTTP 403 on `/blog` and `/resources` — bot protection active. No new activity detectable.
- **Path Robotics** (path-robotics.com): HTTP 403 on `/blog` and `/news` — bot protection active. No new activity detectable.
- **Rapid Robotics** (rapidrobotics.com): ECONNREFUSED on root — domain may be inactive or redirected. No activity detectable.

> **Note:** Zero confirmed competitor posts this week — not zero activity. These sites actively block automated fetches. Recommended mitigation: manual spot-check of competitor LinkedIn pages (where new content is typically cross-posted) or RSS-to-email subscriptions if available.

## Keyword gaps (topics NOT yet in src/data/blogPosts.ts)

The following 15 target keywords were audited against 22 existing blog slugs. 10 are already covered. Three high-priority gaps remain:

1. **"AR in field service"** — Augmented reality for guided repair is a rapidly growing adjacent market (PTC Vuforia, Scope AR, Teamviewer Frontline all publishing heavily). Farhand's AI-guided workflow story pairs naturally; no slug exists for this. High search volume, high differentiation potential.

2. **"OT security for field technicians"** — As OT/IT networks converge in smart factories, every service visit is a potential attack vector. Zero coverage in current blog. Directly relevant to Farhand's field access model and a growing procurement concern for robotics/semiconductor OEM customers.

3. **"dispatch AI voice agents"** — Farhand's core differentiator is AI-guided workflows at the point of repair; voice-agent dispatch is the logical upstream complement. No dedicated post exists. High purchase-intent keyword for OEMs evaluating next-gen service operations.

**Partially covered (no dedicated post):**
- "outcome-based service contracts" — mentioned in `field-service-trends-2026` but no standalone deep-dive
- "spare parts logistics" — no coverage; high-intent for OEM service managers
- "CNC downtime cost" — no coverage; adjacent to `industrial-robot-downtime-cost` but distinct buyer

## Recommended actions

- **Manual LinkedIn check** for Roboworx, Formic, and Path Robotics — confirm whether the 403s represent genuine zero-activity or just crawler blocking. Takes <10 min.
- **Publish "AR in Field Service"** next — pairs with existing AI-guided content, builds topical authority, and no competitor could be confirmed publishing it this week (first-mover window possible).
- **Queue "OT Security for Field Technicians"** as the second blog — rising urgency given CISA ICS advisories; differentiates Farhand as security-aware in industrial accounts.
- **Queue "Dispatch AI Voice Agents"** as the third — product-aligned, high conversion intent for OEM prospects already evaluating AI tools.
- **Add RSS/email subscriptions** to Formic and Path Robotics blog feeds (if they exist) to supplement the automated scan when sites block crawlers.
- **Set up LinkedIn company-page monitoring** for all five competitors (manual or via a LinkedIn monitoring tool like Mention or Brandwatch) to ensure no content goes undetected.
