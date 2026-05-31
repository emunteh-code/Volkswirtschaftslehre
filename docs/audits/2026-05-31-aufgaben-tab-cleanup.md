# Aufgaben tab cleanup — practice-only surface

**Date:** 2026-05-31  
**Scope:** Fleet-wide via `assets/js/portal-core/ui/renderer.js` (all 11 portal-core modules)

## Goal

The **Aufgaben** tab should contain only guided practice tasks and exam-transfer drills — not VL task-family taxonomy or provenance/source summaries. Those belong on dedicated surfaces elsewhere.

## Removed from Aufgaben tab

| Element | Previous location | Mechanism |
|--------|-------------------|-----------|
| **Klausurfamilien** cards (`task-family-layer`) | Top of practice panel, before guided tasks | `renderTaskFamilyPanel()` injected in `renderPracticePanel()` |
| **Aufgabenstatus / Provenienz notice** (`.practice-source-notice`) | Above guided tasks | `renderPracticeSourceNotice()` reading `getConceptProvenance(conceptId).tasks` |
| **Concept provenance footer** (`footer.source-provenance`) | Bottom of every non-Quellen tab including Aufgaben | `buildConceptProvenanceStripHtml()` appended when `activeTab !== "quellen"` |

## New homes

| Content | New surface | Notes |
|---------|-------------|-------|
| **Klausurfamilien** (exam-OS task families) | **Formeln** tab → section **Klausurmethodik** (`.formula-klausurmethodik`) | Card grid unchanged; kicker + intro match Quellen-tab visual language. Shown when `filterStudentVisibleTaskFamilies()` returns data. Formeln tab now opens when formulas **or** task families exist. |
| **Full provenance + anchors** | **Quellen** tab (unchanged since commit `4619240`) | `buildQuellenPanelHtml()` — layer breakdown, page anchors, modul browser link |
| **Compact provenance footer** | Theorie, Grafik, Formeln, Intuition, R-Anwendung | Still appended via `buildConceptProvenanceStripHtml()` — **not** on Aufgaben or Quellen |

## Files changed

- `assets/js/portal-core/ui/renderer.js` — practice panel slimmed; task families moved to `renderFormulaPanel()`; `hasTaskFamilies()` drives Formeln tab availability; provenance strip excludes `aufgaben`
- `assets/css/premium-refinement.css` — `.formula-klausurmethodik` card shell (Quellen-style kicker + intro)
- `tools/clickthrough/trust-regression-pass-1.mjs` — `runAufgabenPracticeOnly()`, `runFormelnKlausurmethodik()`; removed Aufgaben from provenance tab spot checks

## Validation

```bash
cd tools/clickthrough && npm run trust:pass1
```

## Remaining notes

- `.practice-source-notice` CSS retained (unused on Aufgaben; may still apply elsewhere e.g. quick-exam surfaces).
- Task-family **badges on home cards** and **mastery readiness** strings are unchanged — only the Aufgaben tab panel was cleaned.
- Concepts with task families but no authored `formeln` now show a Formeln tab with Klausurmethodik only.
