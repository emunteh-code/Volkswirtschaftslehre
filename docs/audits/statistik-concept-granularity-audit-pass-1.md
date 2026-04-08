# Statistik Concept Granularity Audit Pass 1

## Scope
- Module: `statistik` only.
- Focus: concept-map granularity (not content rewrite/infrastructure work).
- Benchmark lens: `mikro1` visible granularity standard.

## Exact files inspected

### Portal/module files
- `statistik/js/data/chapters.js`
- `statistik/js/data/stepProblems.js`
- `statistik/js/data/conceptLinks.js`
- `statistik/js/data/intuition.js`
- `statistik/js/data/masteryData.js`
- `docs/audits/statistik-source-grounded-audit-pass-1.md`
- `mikro1/js/data/chapters.js` (benchmark granularity reference)

### Source files opened (course-grounding)
- `source-materials/Statistik/Statistik/Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf`
- `source-materials/Statistik/Statistik/Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf`
- `source-materials/Statistik/Statistik/Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf`
- `source-materials/Statistik/Statistik/Zusammenfassungen/Induktive_Statistik_III___Hypothesentests.pdf`
- `source-materials/Statistik/Statistik/Zusammenfassungen/Statistische_Modellierung_I___Lineare_Regression.pdf`
- `source-materials/Statistik/Statistik/Tutorien/Tutorium_13/Tutorium13.pdf`

## Current concept count
- `statistik`: **12** concepts (`CHAPTERS` entries).
- `mikro1` benchmark: **33** concepts.

Interpretation: Statistik is visibly coarser than `mikro1`. Some difference is expected due to domain structure, but there remain a few high-value bundled units where split-level navigation would be pedagogically useful.

## Broad concepts identified (granularity-relevant)

1. `schaetzen` (too broad)
   - Currently bundles:
     - estimation methods (MoM, ML, least-squares perspective),
     - estimator quality properties (bias/MSE/consistency/efficiency),
     - interval estimation and interpretation.
   - Source grounding:
     - VL09 explicitly separates these blocks (`IS1.2`..`IS1.6`), not just as one single estimation object.
   - Diagnosis:
     - Primarily a **granularity** problem (not only depth), because method selection and property interpretation are distinct exam tasks.

2. `regression` (too broad)
   - Currently bundles:
     - model setup + OLS estimation,
     - inference for coefficients (`t`, CIs, `R^2` interpretation),
     - diagnostics (residual checks),
     - prediction vs confidence intervals,
     - extensions/nonlinearity cues.
   - Source grounding:
     - VL12/summary separate model foundation, inference, diagnostics, and prediction as distinct learning units.
   - Diagnosis:
     - Clear **granularity** problem for exam navigation; these are separate reasoning pipelines under time pressure.

## Thinness check: depth vs granularity
- Concepts that may look thin but are mostly **depth** issues (not merge/split issues):
  - `rlab`: application layer with broad workflow intent; needs depth/coverage tuning, not concept fragmentation.
  - `nichtparametrisch`: currently lighter in map depth, but it is a real exam-relevant test family and should remain a standalone slot.

- Concepts currently specialized and should remain separate:
  - `z_test`, `zwei_stichproben`, `varianzanalyse` are already meaningful decomposition of testing families and are navigation-useful.

Conclusion: the largest residual issue is selective under-splitting in `schaetzen` and `regression`; most other concerns are depth/distribution quality, not concept-map architecture.

## Recommended conservative splits (academically real, pedagogically useful)

1. `schaetzen` ->
   - `schaetzen_verfahren`
   - `schaetzen_eigenschaften_intervalle`

   Why this split is real:
   - separates estimation-method mechanics (MoM/ML/KQ view) from estimator-quality + CI reasoning.
   - matches source separation in VL09/summary.
   Why this split is useful:
   - reduces method-vs-interpretation confusion in exams.

2. `regression` ->
   - `regression_schaetzung_inferenz`
   - `regression_diagnostik_prognose`

   Why this split is real:
   - model/inference and diagnostics/prediction are distinct workstreams in source and tutorials.
   Why this split is useful:
   - improves retrieval and mistake attribution for common exam traps (significance vs relevance, CI vs PI, residual diagnostics).

## Proposed concept count after conservative split pass
- Current: **12**
- Recommended net additions: **+2** (two 1->2 splits)
- Proposed after pass: **14**

## Concepts that should remain unsplit (and why)
- `deskriptiv`: broad but coherent descriptive workflow; extra split likely cosmetic at this stage.
- `bivariat`: compact pre-model linkage concept; no high-confidence split needed.
- `wahrscheinlichkeit`: currently coherent fundamentals block for probability calculus.
- `verteilungen`: coherent random-variable/distribution block supporting inferential chapters.
- `testen`: keep as umbrella test-decision framework because family-level concepts already exist (`z_test`, `zwei_stichproben`, `varianzanalyse`, `nichtparametrisch`).
- `z_test`, `zwei_stichproben`, `varianzanalyse`, `nichtparametrisch`: already exam-real family splits; further splitting now risks thin/cosmetic nodes.
- `rlab`: keep as application bridge concept; improvement need is drill depth and mapping quality, not granularity.

## Recommendation
- If implementation is requested, execute only the two conservative splits above.
- Do not split further in this pass.
- After implementation, run a quick check pass on thinness and drill uniqueness across newly split regression and estimation nodes.
