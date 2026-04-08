# Statistik Source-Grounded Audit Pass 1

Date: 2026-04-08  
Module: `statistik`  
Scope: source-grounded audit only (no content rewrite, no platform refactor)

## 1) Source-of-truth and method

- Academic source of truth used: `source-materials/Statistik/Statistik`
- Audit compared current portal concepts/content (`statistik/js/data/*`) against opened Statistik lecture/tutorial/summary source files.
- No code/content changes were made in this pass.

## 2) Exact source files successfully opened

The following files under `source-materials` were successfully opened and inspected:

1. `source-materials/Statistik/Statistik/Vorlesungen/VL_02_-_Deskriptive_Stat_1.1-1.2.pdf`
2. `source-materials/Statistik/Statistik/Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf`
3. `source-materials/Statistik/Statistik/Vorlesungen/VL_11_-_Zwei-SP_t-Test.pdf`
4. `source-materials/Statistik/Statistik/Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf`
5. `source-materials/Statistik/Statistik/Zusammenfassungen/Grundlagen_III___Zufallsvariablen__3_1_3_3_6_.pdf`
6. `source-materials/Statistik/Statistik/Zusammenfassungen/Induktive_Statistik_III___Hypothesentests.pdf`
7. `source-materials/Statistik/Statistik/Zusammenfassungen/Statistische_Modellierung_I___Lineare_Regression.pdf`
8. `source-materials/Statistik/Statistik/Tutorien/Tutorium_12/Tutorium12.pdf`
9. `source-materials/Statistik/Statistik/Tutorien/Tutorium_13/Tutorium13.pdf`
10. `source-materials/Statistik/Statistik/R-Vorkurs.pdf`

## 3) Current portal concepts audited

From `statistik/js/data/chapters.js`, current visible concept set:

- `deskriptiv`
- `bivariat`
- `wahrscheinlichkeit`
- `verteilungen`
- `schaetzen`
- `testen`
- `regression`
- `rlab`
- `z_test`
- `zwei_stichproben`
- `varianzanalyse`
- `nichtparametrisch`

## 4) Source-grounded concept coverage findings

### A. Concepts already well grounded in source

- `deskriptiv`: strongly grounded via DS blocks (frequency tables, histogram/boxplot logic, Lage-/Streuungsmaße) and tutorial usage.
- `wahrscheinlichkeit` + `verteilungen`: grounded by Grundlagen/Zufallsvariablen summaries (discrete/stetig, E/Var, Normal/Exponential, standardization).
- `testen` + `z_test` + `zwei_stichproben`: grounded by Induktive Statistik II/III structures and explicit two-sample t-test lecture insert.
- `varianzanalyse`: grounded by Hypothesentests summary and worksheet ANOVA outputs.
- `regression`: strongly grounded by Statistische Modellierung I and tutorial regression workflow/tasks.
- `rlab`: generally grounded by R-Vorkurs and R outputs embedded in lecture/tutorial material.

### B. Concepts currently too coarse (relative to source granularity)

1. `schaetzen` is too broad versus source structure:
   - source distinguishes method-of-moments, least-squares estimation perspective, maximum-likelihood, kernel-density, and estimator properties.
   - portal currently aggregates this mainly into point/interval estimation.

2. `testen` is too broad for exam navigation:
   - source separates test foundations (alpha/beta/power/p-value), binomial testing, normal-based tests, and variance-analysis block.
   - portal partially externalizes into `z_test`/`zwei_stichproben`/`varianzanalyse`, but core `testen` still bundles decision logic too broadly.

3. `regression` is still broad versus source progression:
   - source distinguishes model setup, OLS derivation, inference for coefficients, diagnostics, prediction intervals, and nonlinear transforms.
   - portal has these elements, but they are compressed into one concept with weaker diagnostic separation.

### C. Concepts present in source but missing in portal concept map

The following are explicitly present in opened source materials but not represented as standalone portal concepts:

1. **Methoden der Punktschätzung (separate units)**:
   - Methode der Momente
   - Maximum-Likelihood-Methode (as dedicated learning unit)
2. **Schätztheorie-Eigenschaften as independent exam object**:
   - Bias, MSE decomposition, consistency, efficiency (currently only partially embedded)
3. **Nichtparametrische Dichteschätzung side**:
   - histogram as density estimator with approximation-vs-estimation error tradeoff
   - kernel density estimation and bandwidth logic
4. **Regression diagnostics block as explicit unit**:
   - residual assumptions and diagnostic interpretation are present but not clearly isolated as exam-drill concept.

### D. Weakly grounded / underdeveloped portal areas

1. `nichtparametrisch`:
   - exists in portal, but source evidence in opened files is thinner than for parametric blocks (appears more as extension context than core sequence in inspected set).
   - current portal depth risks over-weighting relative to explicit source footprint inspected.

2. `stepProblems` coverage depth is uneven:
   - strong drills for `deskriptiv`, `testen`, `z_test`, `zwei_stichproben`, `regression`.
   - sparse or no dedicated step-problem depth for `wahrscheinlichkeit`, `verteilungen`, `schaetzen`, `varianzanalyse`, `nichtparametrisch`, `rlab`.

3. `intuition.js` and `conceptLinks.js` are lagging chapter granularity:
   - `intuition.js` only includes base 8 concepts and omits newer visible concepts (`z_test`, `zwei_stichproben`, `varianzanalyse`, `nichtparametrisch`).
   - `conceptLinks.js` similarly omits explicit linkage for those newer concepts.

4. Provenance anchoring gap remains:
   - `statistik/js/data/contentManifest.js` still keeps per-concept primary refs empty (`[]`), so source links are not yet concept-level anchored despite clear source folder availability.

## 5) Granularity consistency assessment

- Relative to source and to the platform’s benchmark granularity expectations, `statistik` has improved breadth but still has **mixed granularity quality**:
  - Good: explicit specialized concepts already exist for test families (`z_test`, `zwei_stichproben`, `varianzanalyse`, `nichtparametrisch`).
  - Remaining mismatch: estimation and inference methodology still bundled too coarsely, and diagnostics/prediction structure in regression is under-split for exam navigation.

## 6) Recommendation for Statistik Content Enrichment Pass 2

Prioritize additive, source-grounded enrichment in this order:

1. **Inference-method depth (highest priority)**
   - strengthen `schaetzen` with explicit method comparison drills (Momente vs MLE vs KQ perspective where source supports).
   - add exam-style tasks on estimator properties (bias, MSE, consistency, efficiency).

2. **Testing decision workflows**
   - add trap-aware decision chains linking test selection (z/t/binomial/ANOVA/two-sample variants) to assumptions and data structure.
   - reinforce alpha/beta/power interpretation drills.

3. **Regression diagnostics and prediction**
   - add focused residual-assumption diagnostics mini-cases and interpretation-first prediction vs confidence interval drills.
   - include transform logic (e.g., log/quadratic) with “when and why” decision framing from source style.

4. **Probability/distribution retrieval strengthening**
   - increase worked retrieval density for distribution selection, standardization, and interpretation errors.

5. **R-backed execution blocks alignment**
   - expand R-backed tasks for currently sparse concepts (especially `varianzanalyse`, `schaetzen`, distribution-oriented units) only where clearly evidenced by source material style.

## 7) Remaining blockers / risks

1. **Provenance precision blocker**: no concept-level anchored source paths yet in manifest.
2. **Internal consistency blocker**: `chapters.js` concept set is broader than `intuition.js`/`conceptLinks.js` mapping coverage.
3. **Depth imbalance risk**: some advanced/nonparametric portal blocks may outrun explicit depth in inspected core lecture sequence unless tied to additional confirmed source files.

## 8) Files changed in this pass

- `docs/audits/statistik-source-grounded-audit-pass-1.md` (new)
