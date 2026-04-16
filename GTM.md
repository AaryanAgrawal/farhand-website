# Farhand GTM & Outreach Dashboard

Living doc for all go-to-market, outreach, lead generation, and content distribution.
Separate from `SEO.md` (which covers search optimization). **Last updated: 2026-04-15.**

---

## Revenue channels (ordered by near-term impact)

### 1. Gig monitoring — Daily Lead Monitor agent
**Status:** ✅ Scheduled agent created (weekdays 7am PT)

The agent reads Google Alert emails from Gmail, scores leads 1-5, drafts personalized responses, and stores everything in the Notion "Outreach Opportunities" database. You review Notion each morning (~5 min), copy-paste responses to reply.

**How it works:**
```
Google Alerts → emails arrive at aaryan@farhand.live
                    ↓
        Daily Lead Monitor agent (7am PT)
        reads Gmail via Gmail MCP
                    ↓
        Scores each lead 1-5
        Drafts personalized response
                    ↓
        Writes to Notion "Outreach Opportunities" DB
        Creates Gmail drafts for high-score leads
                    ↓
        You review each morning, click Send
```

**Google Alerts to set up** (5 alerts, routed to aaryan@farhand.live):
1. `"need" "field service technician" robot OR automation OR PLC`
2. `"looking for" "service tech" industrial OR robot OR equipment`
3. `"contract technician" automation OR robotics OR maintenance`
4. `"short term" "technician needed" install OR repair OR commission`
5. `"system integrator" "need help" OR "need technician" OR "subcontractor"`

Go to https://www.google.com/alerts and create each one. Set frequency to "As-it-happens" or "Once a day."

**Notion database:** Outreach Opportunities (under Sales & Marketing)
- Properties: Post, Platform, City, Link, Score, Draft Response, Status, Found, Notes
- View: filter by Status = "New", sort by Score descending

**Scoring:**
- 5: Direct service opportunity ("Need someone to install/repair X at Y")
- 4: Likely opportunity (system integrator posting for contract help)
- 3: Maybe relevant (industrial maintenance contractor needed)
- 2: Unlikely (full-time job posting, wrong industry)
- 1: Not relevant

**Limitations:**
- Craigslist and Indeed block cloud IPs — can't fetch RSS directly
- Google Alerts is the primary signal source (free, works from any IP)
- Upgrade path: add Exa API ($10/mo) for direct web search when ready

### 2. Direct outreach to system integrators
**Status:** ⬜ Manual process, no automation yet

**ICP:** Companies tagged "system integrator" + "robotics" or "automation" in the US. These companies constantly need contract technicians for overflow work, peak periods, and geographic gaps.

**Approach:**
1. Use Apollo (MCP connected) to search for system integrators
2. Find decision-makers (VP Ops, Service Manager, Owner)
3. Send personalized email with UTM-tracked link to relevant `/for/*` page
4. Track in Notion "Outreach Opportunities" DB with Source = "cold"

**Template:**
```
Subject: On-demand field techs for [their company name]

Hi [name] — I run Farhand, an AI-guided field service network. We provide
contract technicians across the US for robot/automation installs and repairs.

If you ever need extra hands for a project or coverage in a geography you
don't staff, happy to chat about rates and availability.

More about us: farhand.live/for/oems?utm_source=email&utm_medium=cold&utm_campaign=integrators

— Aaryan
```

### 3. Marketplace listings
**Status:** ⬜ Not started

**Platforms to list on:**
- **Joiner Services** (joinerservices.io) — contract robot programmer marketplace. Direct competitor but also a channel. List as a provider.
- **Thomasnet** (thomasnet.com) — industrial supplier directory. Free listing for service companies.
- **MFG.com** — manufacturing services marketplace
- **Kompass** — industrial B2B directory
- **Google Business Profile** — "robot repair service" local searches. Needs to be claimed at business.google.com.

### 4. Event / expo outreach
**Status:** ✅ QR code + /oem page live

**Assets available:**
- QR code: `public/oem-qr.png` (1200px) + `public/oem-qr.svg` → points to `/oem`
- Lead capture: `/oem` form → company + name → Notion "Website Leads" DB
- Pitch page: `/pitch` (trackable one-pager, replaces PDF)
- Digital business card: `/connect`

**UTM link for expos:**
```
farhand.live/oem?utm_source=qr&utm_medium=expo&utm_campaign=EVENT-NAME
```

**Upcoming expos (field service / robotics / automation):**
- Automate (Detroit, May 2026)
- IMTS (Chicago, Sep 2026)
- Pack Expo (Chicago, Oct 2026)
- Field Service USA (Palm Springs, Apr 2026 — may have passed)
- RoboBusiness (Santa Clara, Oct 2026)

---

## Content distribution

### Blog posts (22 live)
Published on farhand.live/blog/. Weekly new post via Claude scheduled agent (Monday 9am PT).

### Syndication status
| Platform | Status | Action needed |
|---|---|---|
| Telegraph | ✅ token set | 5/22 posts syndicated |
| Dev.to | ⬜ needs API key | Sign up: dev.to/settings/extensions → Generate API Key |
| Hashnode | ⬜ needs API key + pub | Sign up: hashnode.com/settings/developer |
| Medium | ❌ deprecated | Skip |
| Tumblr | ❌ abandoned | Skip |

### LinkedIn posting
**Strategy:** Claude drafts 2-3 LinkedIn posts from each new blog post. You copy-paste to LinkedIn (personal profile). LinkedIn algorithm rewards manual posting — do NOT automate.

**Cadence:** Mon/Wed/Fri mornings. Personal profile > company page (10x reach).

**Post format:**
- Hook in first line (stat or question)
- 150-300 words
- One insight from the blog post
- End with question or soft CTA
- No external links in the post body (LinkedIn suppresses them) — put link in first comment

---

## Trackable collateral (website replaces PDFs)

### UTM link pattern
```
https://farhand.live/{page}?utm_source={source}&utm_medium={medium}&utm_campaign={campaign}&utm_content={prospect}
```

### Common links
| Use case | URL |
|---|---|
| Cold email to Japanese OEM | `farhand.live/for/japanese-oems?utm_source=email&utm_medium=cold&utm_campaign=q2-2026&utm_content=fanuc` |
| Cold email to European OEM | `farhand.live/for/european-oems?utm_source=email&utm_medium=cold&utm_campaign=q2-2026&utm_content=kuka` |
| Expo QR (generic) | `farhand.live/oem?utm_source=qr&utm_medium=expo&utm_campaign=EVENT-NAME` |
| LinkedIn DM | `farhand.live/pitch?utm_source=linkedin&utm_medium=dm&utm_campaign=q2-2026` |
| Business card QR | `farhand.live/connect?utm_source=qr&utm_medium=card` |
| Investor pitch | `farhand.live/pitch?utm_source=email&utm_medium=fundraise&utm_campaign=preseed` |

GA4 captures all UTM parameters automatically.

---

## Lead pipeline (two Notion databases)

### Website Leads (passive — form submissions + reverse IP)
- Database: `5cdd1ffc-ad60-4165-874d-3344d9bcced8`
- Source: `/oem` form, reverse IP middleware, manual adds
- Properties: Company, Contact, Status, Source, Domain, Industry, Employees, Revenue, HQ, LinkedIn, Description, Top Contacts, Notes, Visit Count, Last Visit

### Outreach Opportunities (active — gig monitoring + cold outreach)
- Database: `40dbe6761cde47deb6b51983290630d7`
- Source: Daily Lead Monitor agent (Google Alerts), manual adds from LinkedIn/Facebook
- Properties: Post, Platform, City, Link, Score, Draft Response, Status, Found, Notes

---

## Scheduled agents (4 total on Claude Max plan)

| Agent | When | What it does |
|---|---|---|
| Weekly Blog Post | Mon 9am PT | Writes + publishes new blog post to farhand.live |
| Weekly Competitor Scan | Thu 10am PT | Checks competitor blogs, identifies keyword gaps, writes report |
| Monthly Page Expansion | 1st of month 10am PT | Adds 10 new US cities (+70 programmatic pages) |
| Daily Lead Monitor | Weekdays 7am PT | Reads Google Alerts from Gmail, scores leads, drafts responses, writes to Notion |

Manage all: https://claude.ai/code/scheduled

---

## Backlink strategy

### HARO / Featured (highest priority)
- **Status:** ⬜ Not signed up
- **Action:** Sign up at https://www.featured.com → create expert page
- **Cadence:** Review daily digest, respond to 1-2 queries per day
- **Expected ROI:** 5-15 real press backlinks in 90 days

### Alternative: Qwoted
- https://www.qwoted.com — B2B tech journalist focus
- Cleaner interface than HARO

### Directory listings
- Thomasnet (free)
- Robotics Business Review directory
- Manufacturing.net contributor

### Guest posts (when ready)
- Modern Machine Shop
- Automation.com
- Field Service Digital
- Assembly Magazine

---

## Tools & integrations

### Active (no action needed)
| Tool | Purpose |
|---|---|
| GA4 (`G-CMC24D7416`) | Traffic analytics, UTM tracking |
| Google Search Console | Indexing, search performance |
| Bing Webmaster Tools | Bing indexing |
| Vercel Analytics + Speed Insights | Core Web Vitals, real-time traffic |
| Notion (Website Leads + Outreach Opportunities) | CRM |
| Gmail MCP | Lead monitor reads alerts, creates drafts |
| Apollo MCP | Company enrichment (when API key added) |

### Stubbed (code deployed, needs env var to activate)
| Tool | Env var needed | Purpose |
|---|---|---|
| Apollo enrichment | `APOLLO_API_KEY` | Auto-enrich leads with LinkedIn/industry/contacts |
| IPinfo reverse IP | `IPINFO_TOKEN` ($49/mo) | Identify anonymous corporate visitors |
| LinkedIn Insight Tag | `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | LinkedIn retargeting ads |
| Meta Pixel | `NEXT_PUBLIC_META_PIXEL_ID` | Facebook/Instagram retargeting |

### Recommended additions (later)
| Tool | Cost | Purpose |
|---|---|---|
| Exa API | $10/mo | Web search from cloud (bypasses Craigslist/Indeed blocks) |
| Resend | Free | Programmatic email sending from farhand.live |

---

## TODO (ordered by revenue impact)

### This week
1. ⬜ Set up 5 Google Alerts (see queries above) — enables the Daily Lead Monitor
2. ⬜ Sign up for HARO/Featured — highest-ROI backlink strategy
3. ⬜ Claim Google Business Profile — inbound local searches
4. ⬜ Send 10 outreach emails to system integrators (use Apollo to find them)
5. ⬜ List on Thomasnet (free industrial directory)

### This month
6. ⬜ Add Apollo API key — enriches every lead automatically
7. ⬜ Add Dev.to API key — syndicate blog posts for backlinks
8. ⬜ List on Joiner Services (contract robot programmer marketplace)
9. ⬜ Print QR codes for business cards + expo materials
10. ⬜ Write first case study (Boschert USA)

### Ongoing (automated)
11. ✅ Weekly blog post (Claude agent)
12. ✅ Weekly competitor scan (Claude agent)
13. ✅ Monthly page expansion (Claude agent)
14. ✅ Daily lead monitor (Claude agent)
15. ✅ Auto-deploy on push (GitHub Actions)
16. ✅ IndexNow pings after every deploy (GitHub Actions)
17. ✅ Weekly Lighthouse checks (GitHub Actions)
