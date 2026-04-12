# Verbindungen visual refinement — pass 39

## Goal

Make the right-rail **Verbindungen** block match the premium academic language: **no grey outer admin-style card**, lighter relationship-map feel, calmer group labels, slightly refined chips — **without** changing HTML/JS structure or arrow semantics (Pass 33).

## Root cause (grey shell)

Shared **`#rightPanel .rp-section`** rules in `assets/css/premium-refinement.css` (Phase 5, ~lines 532–536) apply a **card surface** to **every** right-rail section:

- `background: color-mix(... var(--card) 92%, var(--surface2) 8%)`
- `border` + `box-shadow: var(--shadow-sm)`

A second tweak (~2323–2325) only softens background again for all `.rp-section`. The **Verbindungen** block uses the same `.rp-section` wrapper as Formeln/Fehler, so it inherited the **full boxed shell**.

Module `styles.css` files also style `.rp-section` with padding/border/background, but **`#rightPanel .rp-section:has(#rpConnections)`** in premium wins where the selector matches (higher specificity than bare `.rp-section`).

## Fix strategy (shared, surgical)

**Single shared stylesheet:** `assets/css/premium-refinement.css` — **PASS 39** block at **end of file** (after module-specific passes).

**Scoping:** `#rightPanel .rp-section:has(#rpConnections)` so **only** the section whose DOM contains `#rpConnections` is affected. **No HTML changes.** `:has()` requires a modern browser (Chrome 105+, Safari 15.4+, Firefox 121+).

**Unchanged:** `rightPanel.js` markup, `groupConnections` logic, Pass 33 arrow colors (prerequisite vs forward), Formeln / Häufige Fehler sections (no `#rpConnections` in those sections).

## What changed (selectors & values)

| Area | Change |
|------|--------|
| **Outer shell** | `background: transparent`, `border: none`, `box-shadow: none`, padding `8px 4px 18px`, tighter `gap` |
| **Section `h4`** (“Verbindungen”) | Remove heavy `border-bottom` from module look via `border-bottom: none`, calmer color |
| **`#rpConnections`** | Flex column, `gap: 12px` between groups / flat rows |
| **`.rp-link-group`** (grouped mode) | CSS Grid: fixed label column `minmax(7.75rem, 9rem)` + `1fr` chip lane, `column-gap: 10px`, `row-gap: 8px` |
| **Between groups** | `.rp-link-group:not(:first-child)` — subtle `border-top` + padding |
| **`.rp-group-label`** | `grid-row: 1 / -1` so label aligns down the chip stack; **body** font stack, **9px**, muted color, lighter letter-spacing |
| **`.rp-conn` (in this section only)** | Slightly smaller padding/radius (`9px` radius), **12px** text, softer border, light chip fill; hover `translateX(1px)` (less “widget”) |
| **Flat list** (`#rpConnections > .rp-conn`) | `align-self: stretch` when no `.rp-link-group` |

**Semantic colors:** Pass **33** tints on `.arrow--dir-back` / `.arrow--dir-forward` are **unchanged** (no chip recolor per mission).

## Files changed

- `assets/css/premium-refinement.css` — PASS 39 block.
- `docs/audits/verbindungen-visual-refinement-pass-39.md` — this audit.

## Browser verification notes

1. Open any module with **Verbindungen** populated (e.g. Mikro I with `groupConnections: true` for grouped labels).
2. Confirm **no** grey rounded **section** card behind Verbindungen; `#rightPanel` / page background shows through.
3. Open a module with **`groupConnections: false`** (default portal-core) — flat `.rp-conn` list: chips still refined, section still shell-less.
4. **Dark + light:** confirm contrast remains acceptable on chip borders and label text.

If `:has()` is unsupported, the Pass 39 rules simply do not apply; upgrade path is a future optional class on the Verbindungen section (not done in this pass).
