# Inbound capture page copy template

Covers **single-purpose lead-capture pages** — focused URLs we hand out in outreach, QR codes, and follow-ups. Today: `/oem`, `/pitch`, `/connect`. Each page has ONE job and ONE CTA.

---

## Source

- `src/app/oem/page.tsx` *(OEM lead form — QR-code-driven)*
- `src/app/pitch/page.tsx` *(pitch landing — outbound conversations)*
- `src/app/connect/page.tsx` *(generic lead capture / direct contact)*

Many of these embed a lead form (`src/app/oem/OemLeadForm.tsx`) or a Cal.com link.

---

## Section order *(keep ruthlessly short — single viewport if possible)*

### Metadata
- `title` — `<Context> | Farhand`
- `description` — one line, reads well when shared as a link preview

### 1. Eyebrow context
- Small accent-green line naming the situation: `For OEM partners`, `Investor conversation`, `Let's talk`
- Optional: date or campaign tag (e.g. `April 2026`)

### 2. Headline
- Serif italic when tonally warm; sans when transactional
- One sentence. Specific to the audience of this URL.

### 3. One-paragraph body
- Two to four sentences.
- State what we do + why it's relevant to *this* audience + what we're asking for.
- No lists. No pillars. That's for the /for/* pages.

### 4. ONE primary action
Exactly one:
- Inline form (name + email + optional context field), OR
- Cal.com inline embed (`aaryan-agrawal/30min`), OR
- mailto link to `aaryan@farhand.live`

Never mix. The whole point of an inbound-capture page is no ambiguity.

### 5. Footer *(optional, minimal)*
- Logo, LinkedIn link, `© Farhand`
- Do NOT include the full `<Footer />` component — too heavy for these pages

---

## Form behavior
- POST to `/api/<route>` where route is named after the page (`/api/oem-lead`, `/api/newsletter`, etc.)
- On success: swap the form for a confirmation line that names the next step (inbox / calendar / reply)
- Never a generic "Thanks!" — always say what happens next

---

## Copy rules
- Assume the reader arrived via an outreach message or QR code — they already know the broad context. Don't re-pitch the company.
- Never "read more about Farhand here" on these pages. That's the homepage's job.
- Same terminology rules as everywhere: **Field Service Engineers**, mixed-case **Farhand**, accent green only on load-bearing words.

---

## Checklist before ship

- [ ] Title + description set
- [ ] One headline, one body paragraph, ONE action
- [ ] Form (if any) posts to a real `/api/*` route with success + error states
- [ ] Confirmation copy names the next step
- [ ] Loads in under one viewport on desktop at 1440px
