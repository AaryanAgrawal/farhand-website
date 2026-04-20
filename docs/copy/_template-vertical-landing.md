# Vertical landing page copy template

Covers **all `/for/*` and `/services/*` pages** — they share one component (`src/components/VerticalLanding.tsx`) and take the same set of props. One copy pattern for every audience/machine vertical.

Use this file to audit or draft copy for any page of this type before wiring it into the route's `page.tsx`.

---

## Source

- Shared component: `src/components/VerticalLanding.tsx`
- Concrete routes (examples):
  - Audience: `src/app/for/oems/page.tsx`, `src/app/for/robotics-labs/page.tsx` *(custom layout, not this template)*, `src/app/for/fleet-operators/page.tsx`, `src/app/for/facilities/page.tsx`, `src/app/for/distributors/page.tsx`, `src/app/for/chinese-oems|european-oems|japanese-oems|taiwanese-oems/page.tsx`
  - Machine type: `src/app/services/robots/page.tsx`, `src/app/services/industrial-robots/page.tsx`, `src/app/services/medical-equipment/page.tsx`, `src/app/services/industrial-machinery/page.tsx`, `src/app/services/instruments/page.tsx`, `src/app/services/general-aviation/page.tsx`, `src/app/services/equipment/page.tsx`
  - Dynamic: `src/app/services/[machine]/[city]/page.tsx`

---

## Slots the component renders

Fill each slot per page. The component handles layout, animation, and the trailing CTA/footer.

### Metadata *(set on the page file, above the component)*
- `title` — max ~60 chars, format `<Vertical> | Farhand` (SEO)
- `description` — max ~160 chars, one-sentence value prop for the vertical

### Hero
- `machineType` — small eyebrow text over the headline (e.g. `For OEMs`, `Robots`, `Medical Equipment`)
- `headline` — one sentence, ideally under 10 words, specific to the audience's pain
- `subheadline` — one to two sentences; concrete outcome + "AI-guided Field Service Engineers in every zip code" hook

### Pain points *(3 items)*
- Each ≤ 14 words, each starts with a concrete failure mode or cost
- Use audience language, not Farhand language

### Stats *(3 items — `{ value, label }`)*
- `value` — short, numeric or near-numeric ("50%", "4.66M", "93%")
- `label` — ≤ 5 words describing what the number means
- Source the stat in the PR description when submitting new ones

### How it works *(4 items, each 1–2 sentences)*
- Step 1 — what the customer does (upload docs / share SOPs / onboard)
- Step 2 — what Farhand does (dispatch Field Service Engineers, activate Relay)
- Step 3 — feedback loop (what gets captured, how knowledge compounds)
- Step 4 — outcome (cost saved, uptime, revenue unlocked)

### FAQs *(3–5 items)*
- Audience-specific variants of the home FAQs — not duplicates
- Include the one objection every buyer in this vertical raises
- Keep answers short; no marketing prose

---

## Terminology rules *(applies site-wide)*

- Use **Field Service Engineers** (Title Case) in prose. Avoid `techs`, `technicians`, `Field Service Engineer` (singular) except when semantically needed.
- Product name: **Farhand Relay™** on first mention per page; `Relay` after.
- Accent color (green `#1aff67`) reserved for eyebrow/accent words, never full sentences.
- Never render the word **Farhand** in all caps.

---

## Out-of-scope for this template

- `/for/robotics-labs` uses a custom founder-letter layout, not `VerticalLanding`. It has its own copy flow in the file.
- `/relay` is the product page — see `_template-product-page.md`.
