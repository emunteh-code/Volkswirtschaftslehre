# Landing-page „Über dieses Portal“ — implementation pass

**Date:** 2026-04-12  
**Goal:** Public expectation-setting on the landing page — calm product boundary, not a disclaimer tone.

## Placement

- **Below** the hero (`section.lp-hero` / `#heroShelf`).
- **Above** the module grid (`section.lp-shelf` / `#modules`).
- **Not** in the footer, not accordion, not muted legal styling.

DOM order: `header` → `section.lp-hero` → **`section.lp-about#ueber-portal`** → `section.lp-shelf` → `footer`.

## Files changed

| File | Change |
|------|--------|
| `index.html` | New `section.lp-about` with `h2` **Über dieses Portal** and four body paragraphs (closing line as `p.lp-about-closing`). |
| `assets/css/portal.css` | `.lp-about`, `.lp-about-inner`, `.lp-about-title`, `.lp-about-body`, `.lp-about-closing`; reduced `.lp-shelf` top padding from `48px` to `40px` to keep rhythm with the new block; responsive tweaks under `@media (max-width: 768px)` and `@media (max-width: 480px)`. |

## Copy confirmation

The following matches the requested wording (only HTML whitespace/line breaks differ):

1. Title: **Über dieses Portal** (`h2#lp-about-heading`).
2. Paragraph 1: interaktiver Studienbegleiter … zusammengeführt werden.
3. Paragraph 2: Ziel ist es … letzte Referenz bleiben.
4. Paragraph 3: Einige Module sind aktuell weiter … als andere.
5. Closing (included as optional final line): *Das Portal ist als strukturierter Lernbegleiter gedacht, nicht als vollständiger Ersatz für die offiziellen Kursmaterialien.* — rendered as `p.lp-about-closing` with **font-weight 600** and a **neutral** top border separator (not warning colours).

Forbidden titles were not used (no Haftungsausschluss, Disclaimer, etc.).

## Design notes

- Section uses **`var(--bg)`** and a single **`border-top`** so it follows the hero without a “warning banner” surface.
- **Max width ~40rem** on the text block for comfortable line length on desktop.
- Typography uses existing landing tokens (`--font-heading`, `--text`, `--muted` mix for body).
- Closing line is visually **distinct** via weight + subtle divider, still **editorial**, not alert styling.

## Responsive verification notes

| Viewport | CSS behavior |
|----------|----------------|
| **Desktop** | `.lp-about-inner` `max-width: 40rem`, centered inside `.lp-container` (`max-width: 1360px`, horizontal padding). |
| **Tablet** | `@media (max-width: 768px)` reduces section padding; `.lp-container` bridge rules still apply from existing queries. |
| **Mobile** | `@media (max-width: 480px)` tightens vertical padding and sets body copy to `0.9375rem` for readability. |

**Browser:** not re-run in automated Playwright in this pass; verify manually at `index.html` at wide / ~768 / ~390 widths and light/dark theme toggle.

## Completion

- Section is **visible** between hero and module grid, **full copy**, **non-disclaimer** presentation, **product-appropriate** title **Über dieses Portal**.
