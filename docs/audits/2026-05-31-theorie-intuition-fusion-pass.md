# Theorie + Intuition fusion pass

Date: 2026-05-31  
Builds on recipe structure commit `b87e521`.

## Goal

Remove the redundant **Intuition** tab fleet-wide. All `INTUITION` / `intuition.js` source data remains; content is injected into the **Theorie** recipe at render time.

## Fusion mapping

| Former Intuition surface | Recipe step | DOM |
|--------------------------|-------------|-----|
| `bridge` (Transferpfad) | **Orientierung** (prepend in body) | `.theory-intuition-bridge` |
| `core` (Worum es wirklich geht) | **Kernidee** | `.theory-intuition-lead` |
| `analogy` (Denkbild) | **Kernidee** | `.theory-intuition-embed` + h4 |
| First formula anchor | **Kernidee** | `.theory-intuition-formal-anchor` |
| `embed` / interactive widgets | **Kernidee** | `.theory-intuition-interactive` |
| Recognition bullets (exam + theory hook) | **Kernidee** | `.theory-intuition-recognition` |
| `exam[]` (Wenn → dann) | **Anwendung & Klausurtransfer** | `.theory-intuition-patterns` |

**Not moved:** Prüfungstransfer drill toggles stay on **Aufgaben** (unchanged). Graph tab unchanged.

## Tab order (after)

1. **Theorie** (includes fused intuition)
2. **Grafik** (opt-in per concept)
3. **Aufgaben**
4. **Formeln & Klausurmethodik**
5. **Quellen** (when provenance available)
6. **R-Übung** (opt-in per module)

## Implementation

| File | Change |
|------|--------|
| `assets/js/portal-core/theory/theoryStructure.js` | `fuseIntuitionIntoTheoryHtml`, `buildIntuitionFusionFragments`, `normalizeIntuitionRecord` |
| `assets/js/portal-core/ui/warningSystem.js` | Fusion before warn-box extraction |
| `assets/js/portal-core/ui/renderer.js` | Removed Intuition panel; fusion opts; legacy tab redirect |
| `assets/js/portal-core/utils/hashRouting.js` | `#concept/intuition` → `theorie` + `scrollKernidee` |
| `assets/js/portal-core/app.js` | Pass `scrollKernidee` into `renderContent` |
| `*/index.html` (11 modules) | Removed Intuition tab button |
| `assets/css/premium-refinement.css` | Fused intuition block styles |
| `tools/clickthrough/trust-regression-pass-1.mjs` | Exam drill check uses Aufgaben tab |

## Hash / deep links

- `#budget/intuition` resolves to **Theorie** and scrolls to `#theory-kernidee-h`.
- New links should use `#budget` or `#budget/theorie`.

## Source files preserved

All `*/js/data/intuition.js` files and `INTUITION` exports are **unchanged**.

## Validation

- `npm run validate`
- `npm run trust:pass1`
