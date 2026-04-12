# Logo replacement — pass 20

## Goal

Replace the plain blue “VWL” typographic square with a **single shared** globe + currency-style mark that reads at **~24–34px**, stays **sharp**, and follows **light/dark** text color via existing CSS variables (no neon, no new palette).

## Asset choice

| Item | Decision |
|------|-----------|
| **Primary mark** | **SVG** (`assets/brand/portal-mark.svg`) — simplified globe (circle + latitude arcs + meridian) plus a compact **$**-style glyph. **White-on-transparent** for use as **`mask-image`**: the visible color comes from `background-color: var(--text)` on the mark box, so **theme-light / theme-dark / body.theme-dark** all track automatically. |
| **Favicon** | **SVG** (`favicon.svg`) — same visual idea at **64×64** with a dark slate tile and light strokes/fills for small-tab legibility (not the old blue “VWL” text tile). |

No reference raster file was present in the repository; the mark is an **original vector** inspired by a globe + economy/currency motif, tuned for UI scale.

## Integration

| Location | Change |
|----------|--------|
| **Landing header** | `index.html`: `<span class="lp-brand-mark">VWL</span>` → empty `<span class="lp-brand-mark" aria-hidden="true"></span>`. |
| **Module shells** (`r/`, `politisches-system-brd/`) | Same pattern for `<span class="brand-mark">`. |
| **Landing styles** | `assets/css/portal.css`: `.lp-brand-mark` now uses **border + mask** (no blue fill, no mono “VWL” text). |
| **Shared shell** | `assets/css/common.css`: `.site-header .brand` flex row + `.site-header .brand-mark` with the **same mask** URL as the landing mark. |

**Mask URL:** both stylesheets live under `assets/css/`, so the asset path is `../brand/portal-mark.svg`.

**Brand copy** (“Lernportal”, “Georg-August-Universität Göttingen”, etc.) is **unchanged**.

## Files changed

- `assets/brand/portal-mark.svg` — **new** mask SVG.
- `favicon.svg` — replaced text tile with globe + currency mark.
- `index.html`
- `r/index.html`
- `politisches-system-brd/index.html`
- `assets/css/portal.css`
- `assets/css/common.css`
- `docs/audits/logo-replacement-pass-20.md`

## Dark / light verification (manual)

Not executed in this environment. After deploy, confirm:

1. **Landing** (`index.html`): default dark + **theme-light** toggle — mark should be **high-contrast** (uses `var(--text)`), not blurry; alignment unchanged next to “Lernportal”.
2. **`r/index.html` / `politisches-system-brd/index.html`**: header mark matches landing behavior with **body.theme-dark** vs light.
3. **Favicon**: tab icon shows the new mark, not “VWL” letters.

## Remaining “VWL” strings (not the old logo)

These are **copy / code names**, not the blue header tile:

- Page titles and hero strings (e.g. “VWL Lernportal” in `index.html`, `assets/js/common.js`).
- Comments / class names like `VWLBenchmarkEvaluator` in answer checkers.
- `qa/contact-sheet.html` heading text.

If product policy later wants the **word** “VWL” removed from titles too, that is a separate copy pass, not part of this logo swap.

## Risks / follow-ups

- **Safari / older WebKit:** `-webkit-mask-*` duplicates are included; if a target browser ignores masks, add a **fallback** `<img src="../assets/brand/portal-mark.svg">` with `filter` — not needed for current baseline.
- **Module `index.html` files** (mikro1, statistik, …) use a **different shell** (sidebar, no `brand-mark`); they were **out of scope** for the old blue tile.

## Success criteria (pass 20)

- [x] Shared vector asset + single mask definition.
- [x] Old blue **VWL** square removed from **live** headers that used it (`index.html`, `r/`, `politisches-system-brd/`).
- [x] Favicon no longer shows the old blue “VWL” text mark.
- [ ] Browser pass (light/dark, alignment, sharpness) — **manual** on your machine.
