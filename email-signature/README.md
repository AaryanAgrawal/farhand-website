# Farhand email signature — team guide

Brand-consistent email signature for Farhand cofounders. Copy the template,
swap six fields, drop your headshot, paste into Gmail.

## What you're doing

1. Duplicate `signature.html` → rename (e.g. `signature-amayr.html`).
2. Drop your square headshot into this folder (e.g. `amayr-headshot.jpg`).
3. Edit these six fields in your copy:
   - **Name** — `Aaryan Agrawal`
   - **Role** — `Co-founder & CEO`
   - **Email** — `aaryan@farhand.live` (appears twice: `mailto:` and display text)
   - **Phone** — `(857) 498-9778` (appears twice: `tel:+1...` and display text)
   - **LinkedIn** — `https://linkedin.com/in/aaaryan`
   - **X** — `https://x.com/aboutaaryan`
   - **Headshot src** — `aaryan-headshot.jpg` → your filename
4. Open a PR with both the new HTML and the headshot image.
5. After merge + deploy (~1 min), load `https://farhand.live/email-signature/signature-YOURNAME.html`.

## Headshot specs

- Square aspect ratio (1:1). 400×400 minimum; 1000×1000+ preferred.
- Face centered, warm expression, uncluttered background.
- JPG or PNG. Keep filename lowercase and hyphenated.

## Installing in Gmail

1. Load your deployed signature URL in Chrome (above).
2. Click-and-drag to select the rendered signature block — **not** view source.
3. `Cmd+C`.
4. Gmail → gear (top right) → **See all settings** → **General** tab → scroll to **Signature**.
5. **+ Create new**, name it `farhand`.
6. Click into the editor on the right and `Cmd+V`.
7. Under **Signature defaults**, pick `farhand` for both "For new emails" and "On reply/forward".
8. Scroll to the bottom → **Save Changes** (easy to miss).
9. Compose a new email to yourself to confirm.

## Installing in Apple Mail

1. Load your deployed signature URL in Safari.
2. Select the rendered signature → right-click → **Copy**.
3. Mail → **Settings** → **Signatures**.
4. Pick your Farhand account → `+` to add a new signature.
5. **Uncheck** "Always match my default message font" (critical — otherwise styles get nuked).
6. Paste. Close. Set as default for this account.

## Troubleshooting

**Images broken in recipient's inbox:** Some email clients block remote images until you click "display images." That's the recipient's setting, not a signature bug.

**Signature shows as text in Gmail:** You copied the HTML source instead of the rendered block. Go back to the signature URL in Chrome and click-and-drag over the rendered signature before copying.

**Styles got stripped in Apple Mail:** You didn't uncheck the "match default font" box. Redo step 5 above.

## Files in this folder

- `signature.html` — Aaryan's signature (canonical template — clone this)
- `preview.html` — shows signature rendered in a mock email + install steps
- `linkedin.svg`, `x.svg` — brand-color social icons (shared)
- `aaryan-headshot.jpg` — Aaryan's headshot
- `README.md` — this file
