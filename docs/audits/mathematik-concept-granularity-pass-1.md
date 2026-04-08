# Mathematik — Concept granularity pass 1

**Scope:** Concept-map / `CHAPTERS` ids only. No VL-PDF rewrite, no R-path changes, no broad theory rewrites beyond splitting existing HTML blocks and one small practice item justified by on-page logarithm rules.

**Source check:** Structure compared to `source-materials/Mathematik`: **10** Vorlesungs-PDFs (E1–E3, LA1–LA2, AN1–AN3, OP1–OP2) and **10** Kleinübungsblöcke with matching labels in `assets/js/module-content.js` (`mathematik.sourceGroups` / `roadmap`).

---

## Concept count

| | Count |
|---|--------|
| **Before** | **6** — `funktionen`, `ableitung`, `optimierung`, `lagrange`, `linalg`, `integral` |
| **After** | **8** — see below |

---

## Splits implemented (high confidence)

### 1. `funktionen` → `funktionen_grundlagen` + `logarithmus_umkehr`

- **Justification:** Clear **internal** boundary in existing portal HTML: sections *Lineare Funktionen* + *Potenz- und Exponentialfunktionen* vs *Logarithmus* + *Inverse und Umkehrfunktion* + shared *Fehleranalyse* for the latter. Aligns with how **E2** (*Funktionen und Gleichungen*, PDF `02Mathe_E2_…`) groups material (Potenz/Exp and Log/Umkehr as distinct theory blocks in the course), without inventing a separate portal card for **E1** or **E3** (no dedicated E1/E3 theory body exists in the current `chapters.js`; splitting those would be cosmetic or require large new authoring).
- **Content move:** Theory, formulas, and exercises **moved** from one blob into two keys; **Gerade** + **Cobb-Douglas** formulas stay with `funktionen_grundlagen`; **Log-Wachstum** moves to `logarithmus_umkehr`. All **four** original authored `aufgaben` remain under `funktionen_grundlagen` (they match linear/potenz/Cobb/Euler themes).
- **Added:** One short **logarithm-law** exercise under `logarithmus_umkehr`, using only rules already stated in that chapter’s theory (`ln(ab)`, `ln(a^n)`). **Status:** `platform-added-drill` (technique drill, not a verbatim scan of a PDF).

### 2. `linalg` → `linalg_matrizen` + `linalg_det_inverse_lgs`

- **Justification:** Direct alignment with **Kleinübung** / VL split **LA I** (*Matrizen und Matrix-Algebra*, `04Mathe_LA1_…`) vs **LA II** (*Maßzahlen … inverse Matrizen*, `05Mathe_LA2_…`). The existing theory HTML already had a natural break between *Matrixoperationen* and *Determinante und Inverse*.
- **Content move:** First block + non-singular commutativity warning → `linalg_matrizen`; determinant, inverse, LGS, OLS, singularity warning → `linalg_det_inverse_lgs`. All **four** original matrix `aufgaben` stay with `linalg_det_inverse_lgs` (they all use det / inverse / LGS).
- **Added:** One formula card *Matrixmultiplikation* on `linalg_matrizen` (restates the rule already in the theory list) so the exam-step factory has an explicit formula anchor for LA I.

---

## Broad concepts intentionally **not** split (why)

| Id | Bundled source units (still) | Reason |
|----|------------------------------|--------|
| `ableitung` | AN1 + parts of multivariate ideas that appear in exercises elsewhere | Splitting AN1 vs AN2 would duplicate or tear apart the current single **Differentialrechnung** narrative and `CONTENT` block without a clean on-page seam; **pass 2** candidate with explicit AN2 HTML. |
| `optimierung` | OP1 + multivariate BZO/Hesse in same chapter | Same as above vs **OP2**; needs dedicated multivariate split in content, not only ids. |
| `lagrange` | OP2-related | Single coherent method block; no second source-backed half-card without rewriting. |
| `integral` | AN3 | Already 1:1 with one major VL unit in practice. |

**Remaining gap vs 10 VL units:** **E1** (*Algebra und Mengenlehre*) and **E3** (*Summen und Logik*) still have **no** standalone portal concepts — the live portal never contained separate theory sections for them under the old `funktionen` card. Adding them would be **new** source-backed authoring, not a split (out of scope for this conservative pass).

---

## Files changed (exact)

| File | Change |
|------|--------|
| `mathematik/js/data/chapters.js` | `CHAPTERS` order and ids; `CONTENT` keys split as above |
| `mathematik/js/data/conceptLinks.js` | All `uses` / `usedBy` edges updated for new ids |
| `mathematik/js/data/intuition.js` | Intuition entries for every chapter id (including previously missing `lagrange`, `integral`, LA split) |
| `mathematik/js/data/masteryData.js` | *(no edit)* — still generated from `CHAPTERS` |
| `mathematik/js/data/stepProblems.js` | *(no edit)* — still driven by `CHAPTERS` + `ensureMinimumStepProblems` |
| `mathematik/index.html` | Static progress label `0 / 6` → `0 / 8` (runtime progress still computed from `CHAPTERS.length`) |
| `assets/js/module-content.js` | `mathematik.audit` row: portal concept count and pointer to this document |

**Unchanged but verified:** `mathematik/js/data/fullExams.js` (no concept ids), `mathematik/js/ui/graphPanel.js` (graph set is mikro-legacy ids, not mathematik concepts), `mathematik/js/data/courseConfig.js`, `mathematik/js/data/srsConfig.js`, `mathematik/js/main.js` / navigation (derive from `CHAPTERS`).

---

## Deploy / UX notes

- **localStorage:** Keys `mathematik_progress_v1` / mastery / SRS store progress **by concept id**. Users who had progress under `funktionen` or `linalg` will **not** automatically see it under the new ids (fresh keys). No migration script in this pass.
- **Cross-links:** `ableitung` now lists both `funktionen_grundlagen` and `logarithmus_umkehr` as prerequisites (ln/exp chain rules).

---

## Remaining risks / follow-ups

1. Optional **pass 2:** Add **E1** and **E3** cards when theory is authored from `01Mathe_E1_…` / `03Mathe_E3_…`.
2. Optional **pass 2:** Split **AN1 vs AN2** and **OP1 vs OP2** when `CONTENT` is separated to match PDFs.
3. Update stale **repo-wide** audit lines that still say “6 mega-chapters” (e.g. `docs/audits/repo-audit.md`, `project-wide-benchmark-parity-bug-sweep-pass-1.md`) in a documentation consistency pass if desired.
