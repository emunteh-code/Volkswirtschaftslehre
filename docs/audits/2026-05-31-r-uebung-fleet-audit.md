# R-Übung fleet audit — 2026-05-31

**Mandate:** All R-Übung tabs functional, source-faithful where possible, trust-tested.  
**Shared stack:** `assets/js/portal-core/features/rPractice.js`, `assets/css/r-practice.css`, `createRenderer` tab `r-anwendung` → label **R-Übung**.

**Source materials consulted:**
- `source-materials/Statistik/` (R-Tutorien TUT_01–11, induktive Statistik)
- `source-materials/Ökonometrie/` (VL `.R` scripts referenced in `oekonometrie/js/data/curriculum.js` `script` fields)
- `source-materials/Mathematik/` (Kleinübung `R.E*`, `R.LA*`, `R.AN*`, `R.OP*` paths in `mathematik/js/data/curriculum.js` `sourceRefs`)

---

## Fleet counts

| Module | Concepts with R tab | R blocks (total) | Tab wiring |
|--------|---------------------:|-----------------:|------------|
| **statistik** | 7 | 8 | `R_BLOCKS_BY_ID` in `statistik/js/data/chapters.js`; `hasRBlock` + `renderRAnwendungTab` |
| **oekonometrie** | 29 | 29 | `CURRICULUM[].rBlock` → `R_BLOCKS_BY_ID` in `oekonometrie/js/data/chapters.js` |
| **mathematik** | 8 | 8 | `curriculum.js` `rBlocks[]` → `mathematik/js/data/chapters.js` |
| **Total** | **44** | **45** | |

No other fleet module exposes concept-level `r-anwendung` in this pass (grep: renderer hooks only above three + generated-portal).

---

## Per-module audit

### Statistik — pass

| Concept | Blocks | Source anchor | Tab | Render | WebR / fallback |
|---------|-------:|---------------|-----|--------|-----------------|
| `deskriptiv` | 2 | TUT_01, TUT_02 | pass | pass | Live WebR + `buildStatisticsPrelude()` |
| `bivariat` | 1 | TUT_04 | pass | pass | Live |
| `schaetzen_eigenschaften_intervalle` | 1 | Induktive Statistik | pass | pass | Live |
| `testen` | 1 | Einstichproben-t-Test | pass | pass | interpret mode (no code edit) |
| `regression_schaetzung_inferenz` | 1 | Modellierung I | pass | pass | Live |
| `regression_diagnostik_prognose` | 1 | Modellierung II | pass | pass | Live |
| `varianzanalyse` | 1 | TUT_11 | pass | pass | Live |

**Pedagogy:** Blocks tie to tutorium scripts via `script` + `purpose`; mini-tasks match Theorie/Aufgaben themes.  
**Issues found:** None blocking.  
**Fixes:** None required (already concept-linked, titles present).

---

### Ökonometrie — pass (after fixes)

| Area | Concepts | Source anchor | Status |
|------|----------|---------------|--------|
| Wiederholung | `matrix_notation`, `sample_moments`, `distributions_df` | VL `.R` paths in `script` | pass |
| Modell / OLS | `model_objects` … `functional_forms` | `01_Das_lineare_Modell.R` | pass |
| Annahmen / Inferenz | `exogeneity` … `f_test` | VL scripts | pass |
| Diagnostik | `heteroskedasticity`, `hac_newey_west`, … | `11_*`, `12_*` | pass (guided where packages needed) |

**Issues found (broken → fixed):**
1. **29× missing block `title`** — UI fell back to generic „Vom Modell zur Auswertung“ instead of chapter title. **Fixed:** merge `entry.title` + `taskPrompt` when building `R_BLOCKS_BY_ID` (`oekonometrie/js/data/chapters.js`).
2. **2× package blocks** (`heteroskedasticity`, `hac_newey_west`) — `library(sandwich)` / `lmtest` cannot run in WebR. **Fixed:** explicit `runtimeMode: 'guided'` + `runtimeNote` in `curriculum.js` (auto-detect already worked; copy now upfront).

**Pedagogy:** `rBlock.script` points to official R filenames; code mirrors VL matrix/OLS/inference patterns.

---

### Mathematik — pass

| Concept | Blocks | Source anchor | Status |
|---------|-------:|---------------|--------|
| `funktionen_gleichungen` | 1 | R.E2 | pass |
| `summen_logik_beweise` | 1 | R.E3 | pass |
| `lineare_algebra_grundlagen` | 1 | R.LA I | pass |
| `lineare_algebra_struktur` | 1 | R.LA II | pass |
| `univariate_optimierung` | 1 | R.OP I | pass |
| `multivariate_optimierung` | 1 | R.OP II | pass |
| `integralrechnung` | 1 | R.AN III | pass |
| `r_begleitpraxis` | 1 | Kleinübung R sheets (meta) | pass — `platform-added-explanation` orientation |

**Issues found:** None blocking. Plot-heavy blocks use interpretive output placeholders (by design).  
**Fixes:** Trust regression extended to this module (see below).

---

## Shared UX / WebR

| Check | Result |
|-------|--------|
| Tab visible when blocks exist (`updateTabButtons`, `hasRBlock`) | pass all 44 concepts |
| Truth banner on every R surface | pass (`renderRTruthBanner`) |
| Editor / output / run / reset / insert-solution | pass (trust shell) |
| WebR live path | `ensureWebR()` → `webr.r-wasm.org`; module preludes for statistik + oekonometrie |
| Guided mode (`library(...)`) | pass — run disabled, didactic copy |
| First-run hint if WebR slow/unavailable (audit T8-M1) | **Added** — session dismissible `.r-webr-first-run-hint` in `rPractice.js` + CSS |

**WebR status (CI / local trust pass):** Structural shell verified; **full WebR download not executed in trust:pass1** (by design — network flaky). Failure path shows `[Interaktive Laufzeit nicht verfügbar]` + fallback pill **Didaktischer Fallback**.

---

## Fixes applied (summary)

| # | Issue | Files |
|---|--------|-------|
| 1 | Ökonometrie R blocks missing display titles | `oekonometrie/js/data/chapters.js` |
| 2 | Package R blocks need explicit guided messaging | `oekonometrie/js/data/curriculum.js` (`rBlock` helper + 2 concepts) |
| 3 | First-run WebR orientation hint | `assets/js/portal-core/features/rPractice.js`, `assets/css/r-practice.css` |
| 4 | Trust regression: Mathematik R tab shell | `tools/clickthrough/trust-regression-pass-1.mjs` |

**Broken → fixed count:** **31** (29 titles + 2 guided-runtime copy clarifications). Shared hint + trust extension are hardening, not broken-tab recovery.

---

## Tests

```bash
cd tools/clickthrough && npm run trust:pass1
```

**Spot-check routes:** `statistik/deskriptiv`, `oekonometrie/matrix_notation`, `mathematik/funktionen_gleichungen` — R tab shell @ 1280 / 1199 / 390 px.

---

## Remaining gaps (documented, not invented)

- **Breadth:** Many Statistik/Ökonometrie concepts without R in source still have no tab (intentional — no `rBlock` data).
- **Numerical parity:** WebR ≠ desktop R; students must use truth banner + guided blocks for package workflows.
- **Mathematik:** No statistics/econometrics prelude in WebR — base R only (plots, `optimize`, `integrate`).

---

## Files changed

- `oekonometrie/js/data/chapters.js`
- `oekonometrie/js/data/curriculum.js`
- `assets/js/portal-core/features/rPractice.js`
- `assets/css/r-practice.css`
- `tools/clickthrough/trust-regression-pass-1.mjs`
- `docs/audits/2026-05-31-r-uebung-fleet-audit.md` (this file)
