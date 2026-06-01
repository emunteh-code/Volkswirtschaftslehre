# Formeln & Klausurmethodik tab — UX rail pass

**Date:** 2026-05-31  
**Scope:** Fleet-wide (portal-core renderer + `premium-refinement.css`)  
**Validation:** `cd tools/clickthrough && npm run trust:pass1`

## Problem

The Formeln tab mixed formula cards, Herleitung/Einsatzgrenzen layers, and Klausurmethodik as loosely aligned siblings:

- Formula grid, support layers, and Klausurmethodik used different widths/margins (`margin-inline: auto` on children, orphaned `task-family-layer` margins).
- No tab-level intro or scan path — students had to infer order.
- Herleitung + Einsatzgrenzen shared one wrapper without the same section rhythm as Theorie `.section-block` / Quellen `.quellen-panel`.
- Horizontal overflow risk on narrow viewports when nested rails disagreed.

## Solution

### Single content rail (`.formula-tab-panel`)

All Formeln-tab content now lives in one panel wrapper aligned to `--content-rail-max` (same rail as Theorie blocks, Quellen panel, Aufgaben practice).

Vertical hierarchy (only sections with data are rendered; numbers are sequential):

| # | Section | Purpose |
|---|---------|---------|
| — | Intro lead | One line: what this tab is for |
| 1 | **Formeln & Merksätze** | Always-visible cards (not collapsible) |
| 2 | **Herleitungen** | Stepwise derivations (when `formulaCards` have steps) |
| 3 | **Einsatzgrenzen** | Assumptions / traps (warning surface) |
| 4 | **Klausurmethodik** | Accordion last — exam method separate from cards |

### Renderer (`assets/js/portal-core/ui/renderer.js`)

- `renderFormulaPanel` → `.formula-tab-panel` + numbered `.formula-tab-section` blocks.
- `renderFormulaTabSectionHead` — shared section head (num + title + one-line lead).
- `renderTaskFamilyPanel` — Klausurmethodik as section 4 inside the rail (keeps `.formula-klausurmethodik` + `.task-family-card` for trust tests; drops duplicate `section-block` chrome).

### CSS (`assets/css/premium-refinement.css`)

- **PASS 60** — `.formula-tab-panel`, section heads, intro, rail children at `width: 100%` (no nested auto margins).
- Klausurmethodik panel: `width: 100%`, `margin: 0` inside section.
- Formula grid in rail: `align-items: stretch` + card `height: 100%` for calmer row rhythm.
- Mobile ≤375px: tighter section gaps + Klausurmethodik padding `16px 12px`.
- Shell rule: `#content .panel.active > .formula-tab-panel` on content rail.

### Mikro1 shell (`mikro1/css/styles.css`)

- Rail width selectors extended for `.formula-tab-panel` (concept header + panel children).

### Unchanged (by design)

- Formula cards not collapsible.
- No Aufgaben → Formeln jump link.
- Klausurmethodik accordion + field labels (Ziel / Vorgehen / …).
- Module accent used sparingly (section nums, headings only).

## Sample verification

| Route | Check |
|-------|--------|
| `mikro1/index.html#budget/formeln` | Intro + sections 1–4, grid + Herleitung + methodik |
| `statistik/index.html#deskriptiv/formeln` | Rail alignment, cards visible |
| `internationale-wirtschaftsbeziehungen/index.html#gravitation/formeln` | Secondary module parity |

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/renderer.js` | Tab rail markup + section numbering |
| `assets/css/premium-refinement.css` | PASS 60 formula-tab visual system + rail rules |
| `assets/js/portal-core/ui/semanticMathSurfaces.js` | Skip zones for new section headings |
| `mikro1/css/styles.css` | Rail width hooks for `.formula-tab-panel` |

## Trust / regression

```
cd tools/clickthrough && npm run trust:pass1
```

Expect: `formeln-klausurmethodik`, `formeln-always-visible`, provenance Formeln, no `practice-klausur-link` — unchanged contracts.

## Residual risks

- Concepts with only Klausurmethodik show section **1** as Klausurmethodik (sequential numbering) — intentional.
- Equal-height cards may stretch short cards in dense grids; acceptable for scan rhythm.
- Legacy `.formula-support-layer` CSS retained for any stale markup paths.
