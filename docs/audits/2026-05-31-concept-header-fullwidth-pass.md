# Concept header full-width pass

**Date:** 2026-05-31  
**Scope:** Fleet-wide concept header — full motivation text, full content rail width  
**Validation:** `npm run trust:pass1` (from repo root)

## Problem

Concept headers (e.g. mathematik E1) showed:

- Motivation/description clamped to two lines with a **Mehr** / **Weniger** toggle
- Header column capped at `--content-rail-max` (1080px) while theory body used wider `--content-body-max`, leaving empty space on the right
- Title `max-width: 18ch` in mikro1 module CSS cramped long headings

## Solution

### 1. Renderer (`assets/js/portal-core/ui/renderer.js`)

| Removed | Replaced with |
|---------|----------------|
| `.concept-motivation-shell`, `data-motivation-clamp` | Direct `<p class="concept-motivation">` in `concept-header-row--motivation` |
| `.concept-motivation-toggle` (**Mehr** / **Weniger**) | — (no toggle) |
| `initConceptMotivationClamp()` + call site | — (function deleted) |
| Empty motivation placeholder row | Row omitted when `entry.motivation` is empty |

Full `entry.motivation` is always rendered when `showConceptMotivationBanner` and text exist.

### 2. CSS (`assets/css/premium-refinement.css`)

- `.concept-header` width: `--content-body-max` (aligned with theory tab panel rail)
- `.concept-header-row`: `width: 100%`
- `.concept-motivation`: `max-width: 100%`, readable `line-height`; no `-webkit-line-clamp`
- Removed: `--chrome-motivation-min-h`, empty-slot min-height, toggle styles, `.concept-header--theorie` width fork

### 3. mikro1 module (`mikro1/css/styles.css`)

- `.concept-header`: full body rail width token
- `.concept-title`: `max-width: 100%` (was `18ch`)
- Removed legacy `.concept-motivation { display: none }`

### 4. Semantic math skip list

- Dropped `.concept-motivation-toggle` (control removed)

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/renderer.js` | Full motivation HTML; remove clamp initializer |
| `assets/css/premium-refinement.css` | Full-width header + motivation typography |
| `assets/js/portal-core/ui/semanticMathSurfaces.js` | Skip-list cleanup |
| `mikro1/css/styles.css` | Header/title width; show motivation |

## Trust

```bash
npm run trust:pass1
```

## Remaining notes

- Category tag (`EINFÜHRUNG · STELLE 1 VON 4`) unchanged
- Motivation row height now varies with copy length (no reserved empty slot)
- Tab row / pill row min-heights unchanged for chrome stability
