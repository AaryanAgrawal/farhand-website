# Copy docs

Source-of-truth copy for the site. Each file is the canonical text for a page or page type — edit the md, tell me to sync, and I'll wire it back into the components.

## Concrete pages

| File | Pages |
|---|---|
| [`home.md`](./home.md) | `/` |

## Page-type templates

| Template | Covers |
|---|---|
| [`_template-vertical-landing.md`](./_template-vertical-landing.md) | `/for/*`, `/services/*` (audience and machine-type landing pages using `VerticalLanding.tsx`) |
| [`_template-product-page.md`](./_template-product-page.md) | `/relay` and future standalone product pages |
| [`_template-blog-post.md`](./_template-blog-post.md) | `/blog/<slug>` articles |
| [`_template-inbound-capture.md`](./_template-inbound-capture.md) | `/oem`, `/pitch`, `/connect` and similar single-CTA pages |

## Workflow

1. Edit the relevant md file (or create a new concrete page md from a template).
2. Ping "sync the md" — I'll diff against the source components and ship a PR.
3. Terminology rules live in each template; the home.md is the canonical voice reference.
