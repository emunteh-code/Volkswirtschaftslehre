# Formula Herleitung / Einsatzgrenzen UI — Pass 59

**Date:** 2026-05-31  
**Scope:** Fleet-wide (portal-core `renderer.js` + `premium-refinement.css`)

## Problem

On the **Formeln** tab, exam-OS **Herleitung & Einsatzgrenzen** content reused the same `formula-card` / `formula-grid` shell as the main formula cards. Derivation steps and limit lists felt like duplicate cards, and the combined heading blurred two different study modes (derive vs. know when the formula breaks).

## Solution

Split into two always-visible subsections under the unchanged formula-card grid:

1. **Herleitungen** — editorial derivation flow (not a card clone)
2. **Einsatzgrenzen** — warn-toned limits / traps panel (distinct from both)

Main **formula cards** (`formula-card`, copy button, grid) are unchanged.

## CSS classes added

| Class | Role |
|-------|------|
| `.formula-support-layer` | Wrapper below formula grid |
| `.formula-support-heading` | Section H3 (Herleitungen / Einsatzgrenzen) |
| `.formula-support-heading--limits` | Limits heading tint |
| `.formula-herleitung-layer` / `.formula-herleitung-stack` | Herleitungen section |
| `.formula-herleitung-block` | Per-formula derivation panel |
| `.formula-herleitung-kicker` | “Ableitung” pill |
| `.formula-herleitung-title` | Formula label (H4) |
| `.formula-herleitung-anchor` | Compact formula echo (KaTeX) |
| `.formula-herleitung-intro` | Intuition line |
| `.formula-herleitung-steps` / `.formula-herleitung-step` | Numbered step list |
| `.formula-herleitung-step-num` | Step badge |
| `.formula-herleitung-step-kicker` / `-text` / `-math` | Step content |
| `.formula-einsatzgrenzen-layer` / `.formula-einsatzgrenzen-stack` | Limits section |
| `.formula-einsatzgrenzen-block` | Amber warn panel per formula |
| `.formula-einsatzgrenzen-icon` | Exam-trap triangle |
| `.formula-einsatzgrenzen-title` | Panel title |
| `.formula-einsatzgrenzen-group` / `--assumptions` / `--applies` / `--fails` / `--mistakes` | Grouped bullet lists |
| `.formula-einsatzgrenzen-list` | Bullets |
| `.formula-einsatzgrenzen-shortcut` / `.formula-einsatzgrenzen-meta` | Footer lines |

**Removed (obsolete):** `.formula-card--proof`, `.formula-grid--proof-layer`, `.formula-proof-list`, `.formula-proof-steps`, `.formula-proof-meta`

## Before / after

| Aspect | Before | After |
|--------|--------|--------|
| Hierarchy | Formeln grid → single “Herleitung & Einsatzgrenzen” grid of `formula-card--proof` | Formeln grid → **Herleitungen** → **Einsatzgrenzen** |
| Herleitung look | Same card chrome as formulas | Left math-ink accent, “Ableitung” kicker, numbered steps, soft tint |
| Einsatzgrenzen look | Plain lists inside proof cards | Amber warning surface, trap icon, grouped bullets |
| Collapse | N/A (not in `<details>`) | Still fully expanded (no default collapse) |
| Math | KaTeX via `renderSemanticBlock` | Unchanged; skip zones extended in `semanticMathSurfaces.js` |

## Files changed

- `assets/js/portal-core/ui/renderer.js` — `renderFormulaHerleitungBlock`, `renderFormulaEinsatzgrenzenBlock`
- `assets/css/premium-refinement.css` — Pass 59 block (~line 2642)
- `assets/js/portal-core/ui/semanticMathSurfaces.js` — skip selectors for new surfaces

## Validation

```bash
cd tools/clickthrough && npm run trust:pass1
```

Spot-check: **mikro1** → concept `budget` → **Formeln** tab at 375px width.

## Risks / gaps

- Modules without `formulaCardsByConcept` show only the classic grid (unchanged).
- Very long derivation stacks may need per-module copy trimming later (content, not layout).
