# Platform chrome alignment pass

**Date:** 2026-05-31  
**Scope:** Fleet-wide title/subtitle/pill/badge/tab/section-heading alignment — no per-module CSS forks  
**Validation:** `npm run trust:pass1` (from repo root)

## Problem

Switching concepts or tabs caused vertical **layout jump** from:

- Variable concept title wrap height (mikro1 capped title at `18ch`; other modules did not)
- Motivation strip length (mikro1 hid it with `display: none`; other modules showed unbounded text)
- Missing reserved row for source pills
- Tab row height drift on narrow viewports
- Section headings using different step sizes (theory recipe vs Formeln vs Aufgaben)
- Right rail sticky offset aligned to viewport top, not below topbar + tab row

## Solution

### 1. Concept header shell (`renderer.js`)

New `buildConceptHeaderHtml()` emits four stable rows:

| Row | Class | Behavior |
|-----|-------|----------|
| Tag | `concept-header-row--tag` | Category · position pill |
| Title | `concept-header-row--title` | `h1.concept-title` + optional `p.concept-subtitle` from `chapter.short` |
| Pills | `concept-header-row--pills` | `platform-chrome-badge` from `getConceptSourceSummary()`; placeholder span when empty (reserved min-height) |
| Motivation | `concept-header-row--motivation` | 2-line clamp + **Mehr/Weniger** via `initConceptMotivationClamp()`; empty slot when `showConceptMotivationBanner` and no text |

`showConceptMotivationBanner: false` (e.g. modules that opt out) omits the motivation row entirely.

### 2. Typography & tokens (`premium-refinement.css`)

| Token / class | Purpose |
|---------------|---------|
| `--chrome-topbar-main-h`, `--chrome-tab-row-h` | Topbar + tab row rhythm |
| `--chrome-title-size`, `--chrome-title-min-h` | Two-line title slot |
| `--chrome-motivation-min-h` | Two-line motivation slot |
| `--chrome-section-step` | Unified 28px step circle |
| `--chrome-badge-size` | Pill/badge font scale |
| `.platform-chrome-badge` | Fleet badge family (with `.practice-platform-badge`, `.hc-source-badge`, `.home-action-sim-badge`) |
| `.concept-subtitle`, `.concept-pill-row`, `.concept-motivation-toggle` | Header chrome |

### 3. Tab row

- `min-height: var(--chrome-tab-row-h)` on `#tabRow`
- `tab-btn--unavailable` class for hidden tabs (display still cleared via `style.display` for Playwright + inline HTML compatibility)

### 4. Section headings

Shared grid for `.theory-recipe-heading`, `.formula-tab-section-head`, and `.practice-section-header` (decorative `::before` circle on practice headers).

Aligned step sizes: `.theory-recipe-step`, `.formula-tab-section-num`, `.klausurmethodik-step-num`.

### 5. Right rail

`#app:has(#tabRow.visible) #rightPanel` offsets sticky top/height by topbar + tab row so rail top aligns with content column when a concept is open.

### 6. Semantic math skip list

`semanticMathSurfaces.js` skips `.concept-subtitle`, `.concept-motivation`, `.concept-pill-row`, `.platform-chrome-badge`.

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/renderer.js` | `buildConceptHeaderHtml`, `initConceptMotivationClamp`, pill row, tab `aria-hidden` |
| `assets/css/premium-refinement.css` | Chrome alignment block (~280 lines) |
| `assets/js/portal-core/ui/semanticMathSurfaces.js` | Skip selectors for new chrome |

## What no longer jumps

- **Concept switch (e.g. mikro1 budget ↔ spieltheorie):** title area keeps two-line min-height; pill row reserved; motivation clamped to two lines (or empty slot)
- **Tab row:** fixed min-height when concept open
- **Right rail:** aligns below topbar + tabs on concept pages
- **Section heads:** consistent step circle + title grid across Theorie / Formeln / Aufgaben surfaces

## Trust / spot-check

```
npm run trust:pass1
```

Manual spot-check recommended: mikro1 `budget` → `spieltheorie` (or any long-title concept) on desktop and ≤428px — verify motivation **Mehr** only when text overflows.

## Remaining gaps

- Landing tiles (`lp-tier-badge` Prüfungsbereit/Beta) use portal.css tier colors; concept pills use source-summary statuses — intentional split
- Tab *width* still changes when optional tabs (Grafik, R-Übung) appear/disappear between concepts; height is stabilized only
- mikro1 module `styles.css` still contains legacy `.concept-motivation { display: none }`; overridden fleet-wide in `premium-refinement.css`
