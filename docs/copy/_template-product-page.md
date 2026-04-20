# Product page copy template

Covers `/relay` today, and any future standalone product pages (e.g. `/fleet-console`, `/ops-cloud`). Product pages have custom layouts — this template documents the **copy slots** each one needs, not a rigid component.

---

## Source

- Current product page: `src/app/relay/page.tsx`
- Supporting components: `src/components/RelayDiagram.tsx`, `src/components/RelayCapabilities.tsx`

---

## Section order

### Metadata *(page file)*
- `title` — `<Product> — <one-sentence positioning>`
- `description` — one sentence of what the product does + for whom
- `openGraph` block mirroring the above
- `alternates.canonical` pointing at the canonical path

### 1. Hero
- Eyebrow *(accent green, uppercase tracked)*: category label — e.g. `AI Platform`, `Field Ops`
- Headline *(serif italic)*: a promise, not a feature — e.g. `Your senior engineer, on every robot.`
- Subhead: the product's job-to-be-done, spelled out. Three to five short sentences, fragment style. End on the compounding-value hook.

### 2. Diagram / schematic
- One visual that shows the product's shape (inputs, process, outputs)
- No copy inside the SVG — labels only

### 3. Capabilities grid
- 4–6 capability cards
- Each card: short title (2–4 words) + one-sentence body
- Icon optional; never decorative-only

### 4. Three differentiators *(numbered 01/02/03)*
- Each differentiator: numbered eyebrow, one-sentence headline, 2–3 sentence body
- These answer "why this product, not another?"

### 5. Proof / social-proof *(optional but recommended)*
- Logos, a quote, or an outcome stat
- Skip if you don't have proof yet — better to leave out than fake

### 6. CTA
- Link down to the homepage footer Cal.com embed via `#schedule`, or a route-local scheduler

### 7. Global footer *(reuse `<Footer />` from `src/components/Footer.tsx`)*

---

## Copy rules

- Product name: **Farhand <Product>™** on first mention; bare name after.
- Talk about customer outcomes before mechanics. Mechanics live in the diagram and capabilities — not the hero.
- Never oversell: if a capability is "in progress," call it out (`Coming soon` / `Early access`).
- Accent color = load-bearing words only.

---

## Checklist before ship

- [ ] Metadata block (title, description, OG, canonical)
- [ ] Hero eyebrow + italic headline + punchy subhead
- [ ] Diagram renders without overflow on mobile
- [ ] Capability copy all passes the "one sentence" test
- [ ] Three differentiators numbered 01/02/03
- [ ] Final CTA points to a real booking surface
- [ ] `<Navigation />` and `<Footer />` present
