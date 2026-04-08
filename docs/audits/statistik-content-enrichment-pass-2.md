# Statistik Content Enrichment Pass 2

Date: 2026-04-08  
Module: `statistik`  
Grounding basis: `docs/audits/statistik-source-grounded-audit-pass-1.md` and opened Statistik source files listed there.

## Scope

- Focused content enrichment only (no broad infrastructure work).
- Additive, deployable updates in existing concept structures.
- Prioritized:
  - pedagogical sharpening for coarse areas (`schaetzen`, `testen`, `regression`)
  - source-backed underdeveloped drill coverage (`wahrscheinlichkeit`, `verteilungen`, `schaetzen`, `varianzanalyse`)
  - interpretation-first and trap-aware exam workflows.

## Exact files changed

1. `statistik/js/data/chapters.js`
2. `statistik/js/data/stepProblems.js`
3. `docs/audits/statistik-content-enrichment-pass-2.md`

## Exact concepts/sections enriched

### 1) `schaetzen` (coarse-area sharpening)

Added two new worked tasks:
- **Methodenvergleich MoM vs. ML (Bernoulli/Anteil)**  
  - reinforces source-backed distinction from Induktive Statistik I (method framing), without introducing new standalone concept IDs.
- **Bias/MSE decision task**  
  - strengthens estimator-quality reasoning (bias-variance decomposition) in exam language.

### 2) `testen` (decision-chain sharpening)

Added a new test-selection retrieval task:
- **Testauswahl unter Zeitdruck** across:
  - Anteilstest/Binomial logic
  - ANOVA for >2 groups
  - paired t-test for Vorher/Nachher
- explicit trap emphasis: wrong test family -> wrong inference.

### 3) `regression` (diagnostics + prediction interpretation depth)

Added two new worked tasks:
- **Residual diagnostics mini-case** (trichterförmige Residuen -> heteroskedastizitätsbezogene inference caution).
- **Confidence vs Prediction interval distinction** (interpretation-first, exam trap prevention).

### 4) Drill-depth expansion for undercovered concepts (`STEP_PROBLEMS`)

Added new drill bundles for concepts previously sparse in quick/drill layer:
- `wahrscheinlichkeit`: `stat_prob_1` (Bayes + base-rate trap)
- `verteilungen`: `stat_dist_1` (standardization mapping + interpretation trap)
- `schaetzen`: `stat_est_1` (MoM/ML + MSE trap)
- `varianzanalyse`: `stat_anova_1` (ANOVA global test vs post-hoc trap)

## Exact new learning objects, drills, mini-cases added

### New chapter-level worked tasks (`chapters.js`)
- `schaetzen`: 2 new tasks
  - MoM vs ML for Bernoulli proportion
  - MSE = Var + Bias² quality decision
- `testen`: 1 new task
  - test-family selection under time pressure
- `regression`: 2 new tasks
  - residual diagnostics consequence chain
  - CI vs PI interpretation distinction

### New step-problem bundles (`stepProblems.js`)
- `stat_prob_1`
- `stat_dist_1`
- `stat_est_1`
- `stat_anova_1`

Each uses decision -> execution -> validation sequencing for interpretation-first retrieval.

## Source-grounding notes

Included additions are grounded in inspected source emphases:
- Induktive Statistik I: method blocks (MoM, ML, estimator properties).
- Induktive Statistik III + Tutorium sheets: test-family decisions, ANOVA workflow.
- Statistische Modellierung I + Tutorium sheets: regression inference, diagnostics language, prediction interpretation.
- Grundlagen/Zufallsvariablen summaries: standardization and distribution interpretation patterns.

No new source claims beyond inspected files were introduced.

## Remaining gaps and why they remain

1. **No concept-map split in this pass** (`schaetzen`/`regression` remain single concepts)
   - Reason: this pass was constrained to additive enrichment; structural concept-splitting would be a separate granularity pass.

2. **Kernel-density / histogram-as-density block not expanded into a dedicated portal concept**
   - Reason: source support exists, but a full standalone concept rollout would require broader restructuring and cross-file navigation updates.

3. **Provenance anchors per concept remain empty in manifest**
   - Reason: intentionally out of scope (content enrichment pass only; no provenance-infrastructure change in this step).

4. **`nichtparametrisch` depth remains conservative**
   - Reason: inspected source set has comparatively stronger emphasis on parametric core and regression/hypothesis workflows; avoided over-expansion beyond explicit footing.

## Deployability

- Changes are additive to existing data structures.
- No renderer or platform-backbone changes were made.
- Lint check on edited files reports no errors.
