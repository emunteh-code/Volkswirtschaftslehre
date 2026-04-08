# Oekonometrie Source-Grounded Audit Pass 1

## Scope and source-path check
- Requested source path: `source-materials/oekonometrie-src`
- Result: no readable files at this path in workspace.
- Available econometrics course corpus used for this audit:
  - `source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/...`

The findings below are grounded in the successfully opened files from that corpus.

## Exact files successfully opened before recommendations

### Source materials (opened)
- `source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf`
- `source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/Lecture_Einführung_in_die_Ökonometrie/Formelsammlung.pdf`
- `source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/Lecture_Einführung_in_die_Ökonometrie/Syllabus.pdf`
- `source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/Tutorial_Einführung_in_die_Ökonometrie_Tutorium/aufgabenblatt04.pdf`
- `source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/Exercises_Einführung_in_die_Ökonometrie_Übung/Probeklausuren/Probeklausur_1.pdf`
- `source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/Exercises_Einführung_in_die_Ökonometrie_Übung/R/11_Heteroskedastizitt.R`
- `source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/Exercises_Einführung_in_die_Ökonometrie_Übung/R/12_Autokorrelation.R`

### Portal files audited against source (opened)
- `oekonometrie/js/data/chapters.js`
- `oekonometrie/js/data/curriculum.js` (concept IDs sampled)
- `oekonometrie/js/data/stepProblems.js`
- `oekonometrie/js/data/fullExams.js`

## Source-grounded concept coverage findings

### Concepts already well grounded in source
Strong alignment exists for the core lecture/tutorial/probeklausur spine:
- Linear multiple regression specification and matrix form.
- OLS estimation, normal equations, interpretation of coefficients.
- Assumption logic (exogeneity, no perfect multicollinearity).
- Unbiasedness, Gauss-Markov/BLUE logic, consistency, asymptotic normality.
- Error variance/covariance matrix handling, prediction and prediction intervals.
- Inference layer: t-tests, F-tests, confidence intervals, R² / adjusted R².
- Disturbance structure and diagnostics: heteroskedasticity, autocorrelation, GLS/EGLS/HAC.
- Monte-Carlo orientation and exam-style applied interpretation.

This mapping is directly supported by `Einf_WiSe2024.pdf`, `Formelsammlung.pdf`, tutorial sheets and `Probeklausur_1.pdf`.

### Concepts currently too coarse
Current portal is generally granular; however a few bundles remain broad relative to source teaching rhythm:
1. `heteroskedasticity`
   - currently combines diagnosis, consequences, and remedy in one unit.
   - source materials separate testing logic vs corrective estimation workflow more explicitly.
2. `autocorrelation`
   - combines AR(1) setup, DW testing intuition, and correction strategy.
   - source material distinguishes model, tests, and estimation follow-up more sharply.
3. `prediction` + `prediction_intervals`
   - conceptually split already, but drills are still light on practical decomposition of forecast error variance drivers used in tutorials.

### Concepts missing from portal but present in source corpus
High-confidence missing/underrepresented topic blocks from opened source files:
1. **Maximum Likelihood layer as explicit concept block**
   - source includes NLM/MLE, efficiency comparison, log-likelihood framing.
   - portal includes some inference but lacks a clearly named MLE-focused concept unit.
2. **Linear restrictions as explicit concept block**
   - source appendices and testing framework emphasize restricted estimation logic.
   - portal covers F-tests but lacks a dedicated “restricted vs unrestricted model” concept/drill path.
3. **Durbin-Watson test workflow as explicit drill family**
   - present in formula sheet and R/autocorrelation practice.
   - portal currently treats autocorrelation more generally.

### Weakly grounded or underdeveloped drills
1. **Step-problem depth is structurally weak for advanced diagnostics**
   - `stepProblems.js` is generated from keyword extraction and fallback prompts.
   - this is deployable, but weaker than source-grounded tutorium/probeklausur-style multi-step numeric workflows.
2. **R workflow integration is present but sparse on test-to-decision chains**
   - source R files explicitly show OLS vs GLS comparison, covariance comparison, DW approximation.
   - portal can strengthen “compute -> diagnose -> choose estimator” drill sequences.
3. **Exam transfer drills could better mirror probeklausur structure**
   - source exam tasks integrate matrix notation + interpretation + significance + model comparison + disturbance diagnostics in one case.
   - portal full exams contain this direction, but step-drill scaffolding is not yet equally dense.

## Granularity consistency assessment
- Relative to source materials, `oekonometrie` portal granularity is **mostly appropriate** and significantly better aligned than several other modules.
- Main gap is less concept-map size and more **diagnostic workflow depth** inside already-correct concepts.

## Recommendation for Oekonometrie Content Enrichment Pass 2

Prioritize source-grounded enrichment in four targeted lanes:

1. **Diagnostics workflow lane (highest value)**
   - Expand drills for heteroskedasticity/autocorrelation from test selection to estimator decision (OLS robust vs GLS/EGLS/HAC).

2. **MLE and restricted-model lane**
   - Add explicit concept/drill blocks for normal linear model MLE and restricted-vs-unrestricted testing logic.

3. **Prediction-error decomposition lane**
   - Add richer forecast and prediction-interval exercises aligned with tutorial/probeklausur style.

4. **R-backed applied mini-cases**
   - Add small reproducible “same data, different assumptions” mini-cases reflecting source R sheets (e.g., variance structure change, DW interpretation).

## What should not be done in pass 2
- No broad architecture refactor.
- No ungrounded new econometric topics beyond what source files support.
- No cosmetic concept inflation; focus on source-faithful drill depth and explicit test-to-decision chains.
