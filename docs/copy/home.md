# Home page copy

Edit this file to polish the homepage copy. When you're happy, I'll wire each section back into its source component. Sections are listed in scroll order.

**Current page flow** (already in `src/app/page.tsx`):
`Navigation → Hero → Featured On → Coverage Map → Challenges (Problem) → Relay → Stats Strip → FAQ → Newsletter → Footer`

**Target flow** (pending your go-ahead on two open questions):
`Navigation → Hero → Featured On → Challenges → Relay → Coverage Map + 2,100+ stat → FAQ → Footer`
— remove: Newsletter Signup, Stats Strip, footer world map.
— open: where does Coverage Map sit (before or after Relay?); keep dot pulse on the map?

---

## 1. Navigation

**Source:** `src/components/Navigation.tsx`

Farhand (logo)  ·  Relay  ·  For Labs  ·  **Schedule**

> Notes: "Schedule" used to be "Schedule a Call". Recently shortened for space. Say if you want it back.

---

## 2. Hero

**Source:** `src/components/Hero.tsx`

- Background: looping video `public/Farhand website.mp4`
- Headline (serif italic):
  > Your field service partner
- Subhead:
  > Our AI-guided technicians install & service your robots & machinery at your client sites.
- CTA button: `Deploy smarter` → anchors to `#schedule`

> Alternatives to consider:
> - Headline: "Your robotics service partner." / "AI-guided techs. Every robot. Every zip code."
> - Subhead (shorter): "AI-guided technicians install and service your robots at every client site."

---

## 3. Featured On

**Source:** `src/components/FeaturedOn.tsx`

- Label: `FEATURED ON`
- Logos: ARM Institute, Field Service Next West

> Next candidates to add when we have assets: ArcBest, Robotic Crew, any customer logos.

---

## 4. Challenges

**Source:** `src/components/Problem.tsx`

- Headline:
  > You've built a next-gen machine. Don't run it on last-gen ops.
- Three cards:
  1. Traveling or regional technicians don't scale
  2. Outsourced service contracts are slow and expensive
  3. Only your senior guy knows some repairs

> Sharpen ideas:
> - Card 2 → "Outsourced service contracts are expensive and thin."
> - Card 3 → "Only your senior tech knows the weird repairs."

---

## 5. Relay

**Source:** `src/components/Relay.tsx`

### 5a. "There's a better model" block (bordered card)
- Eyebrow: `There's a better model`
- Headline:
  > On-demand technicians guided by AI to service your machines like your own guys
- Subhead: `Every zip code in the US`

### 5b. Relay product intro
- Heading: `Farhand Relay™`
- Subhead: `Our AI platform that becomes your senior technician.`

### 5c. Three cards
1. **Learns** — your documentation
2. **Guides** — technicians during repairs
3. **Improves** — by text and voice debriefs

> Alt single-line version (matches the one on `/relay`):
> "Learns your robots. Guides your techs. Every call logs back."

---

## 6. Coverage Map + 2,100+ stat

**Source:** `src/components/CoverageMap.tsx` (to be extended with the stat block beside the map)

- Headline:
  > Robots everywhere. **People everywhere.**
- Subhead (current):
  > Every US zip code. 1,700+ field techs.
- Subhead (new, per your direction):
  > Every US zip code.

- Big stat beside the map:
  > **2,100+**
  > Field techs across the US

> Open question: does this section go before or after the Relay block? I lean *after* — flow of problem → solution (Relay) → proof (map + scale). Say the word.
> Open question: keep the subtle dot pulse animation, or make dots fully static?

---

## 7. Stats Strip *(scheduled for removal)*

**Source:** `src/components/StatsStrip.tsx`

Currently shows: `1,700+ · 8,000+ · 40+`.

Plan: **remove** this section. The 2,100+ lives in the Coverage Map section instead.

---

## 8. FAQ

**Source:** `src/components/FAQSection.tsx` + `src/data/faqs.ts`

- Subtitle:
  > Everything you need to know about AI-guided field service.
- Questions: imported from `coreFaqs` (stored in `src/data/faqs.ts`).

> Ask me if you want to restructure or tighten the FAQ list — we'd edit `src/data/faqs.ts`.

---

## 9. Newsletter *(scheduled for removal)*

**Source:** `src/components/NewsletterSignup.tsx`

Plan: **remove** this section entirely.

---

## 10. Footer

**Source:** `src/components/Footer.tsx`

### CTA headline
> You don't need a field support team.
> You need field service *done*.

### Contact block
- `aaryan@farhand.live`
- `(857) 498-9778`

### Email + Schedule form
- Placeholder: `jules@example.com`
- Button: `Schedule a call`

### Cal.com embed
- Embedded calendar (`aaryan-agrawal/30min`)

### Tagline
> Designed by SF-based roboticists
> For robots out in the field

### Logo + social
- Farhand logo
- "Your field support partner"
- LinkedIn icon

### Bottom bar
- Terms & Privacy link

> Plan: remove the world-map image at the bottom of the Footer (it now lives in the body via Coverage Map).

---

## Open questions before I wire the flow changes

1. **Coverage Map placement**: before or after Relay? (I lean after.)
2. **Map dot pulse**: keep animated, or go fully static? (You said "remove animated diagrams" — the map isn't really a diagram, but I want your call.)
3. **Schedule form in footer**: leave as-is, or simplify? (Currently has a placeholder email input that doesn't actually do anything — the Cal.com embed below is the real path.)
4. **Tagline placement**: "Designed by SF-based roboticists / For robots out in the field" is a gem buried in the footer. Worth moving higher on the page?

---

## Where to take this next

Once you've edited the copy above, tell me (or just leave it in this file) and I'll:
1. Update each component's source file to match.
2. Execute the pending flow reorder (map placement, Newsletter removal, Stats removal).
3. Build + screenshot + push to PR #1.

Sibling files coming on request:
- `docs/copy/relay.md`
- `docs/copy/for-robotics-labs.md`
- `docs/copy/for-oems.md`
- etc.
