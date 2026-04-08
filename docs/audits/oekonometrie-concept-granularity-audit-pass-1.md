# Oekonometrie Concept Granularity Audit Pass 1

## Scope
- Module: `oekonometrie` only.
- Focus: concept-map granularity (not broad content rewrite).
- Benchmark lens: `mikro1` visible granularity standard.
- Grounding basis: current module concept map plus previously source-grounded econometrics audit artifacts.

## Exact files inspected

### Portal/module files
- `oekonometrie/js/data/chapters.js`
- `oekonometrie/js/data/curriculum.js`
- `oekonometrie/js/data/stepProblems.js`
- `oekonometrie/js/data/conceptLinks.js`
- `oekonometrie/js/data/intuition.js`
- `oekonometrie/js/data/masteryData.js`
- `oekonometrie/js/data/fullExams.js`

### Reference/audit grounding files
- `docs/audits/oekonometrie-source-grounded-audit-pass-1.md`
- `docs/audits/oekonometrie-content-enrichment-pass-2.md`
- `mikro1/js/data/chapters.js` (granularity benchmark)

## Exact concept count
- `oekonometrie` current concept count (`id` entries in `curriculum.js`): **32**
- `mikro1` benchmark concept count (`CHAPTERS`): **33**

Interpretation: Unlike earlier lower-granularity modules, `oekonometrie` is already near benchmark count and, more importantly, structurally close in concept-map resolution.

## Broad concepts identified (and diagnosis)

The map is mostly fine-grained. Remaining broad candidates are limited:

1. `functional_forms` (`Dummies, Logs & Interaktionen`)
- Bundles three exam-relevant subskills (dummy coding, log interpretations, interactions).
- **Diagnosis:** currently more a **depth/distribution** issue than hard granularity failure, because these elements are taught as one interpretation family and tightly coupled in exam reading.

2. `robust_gls` (`Robuste Standardfehler, WLS & GLS`)
- Bundles two related but distinct decision branches:
  - robust inference with unchanged OLS coefficients,
  - alternative weighted/generalized estimation.
- **Diagnosis:** potentially broad, but currently still a coherent “repair decision” node between diagnostics and correction strategy. Mostly **depth/routing** rather than mandatory split.

3. `autocorrelation` (`Autokorrelation & serielle Abhängigkeit`)
- Contains AR(1) intuition, DW interpretation, and inference consequences.
- **Diagnosis:** broad in content, but map already has `hac_newey_west` as dedicated follow-up correction concept, so this is not severe under-splitting.

## Thinness check: depth vs granularity

- No clear fake-thin concepts were found.
- Potentially “thin-looking” advanced nodes (`normal_linear_model_mle`, `linear_restrictions_ur`, `hac_newey_west`, `fwl_partial_regression`) are academically real and exam-relevant in source-grounded materials.
- Current residual issues are mainly **learning-object depth/distribution** (e.g., richer distinct drills), not concept ID architecture.

## Recommended splits (conservative, academically real only)

### Mandatory splits in pass 1
- **None required.**

### Optional split candidate (only if later evidence shows navigation friction)
- `robust_gls` ->
  - `robust_standard_errors`
  - `wls_gls`

Why this is real:
- separates “inference correction with same beta hat” from “changed estimation rule”.

Why not mandatory now:
- current neighboring nodes (`heteroskedasticity`, `autocorrelation`, `hac_newey_west`) already provide functional decomposition and keep this node pedagogically coherent.
- splitting now risks unnecessary fragmentation without clear exam-navigation gain.

## Concepts that should remain unsplit (and why)

- `matrix_notation`, `sample_moments`, `distributions_df`: coherent prerequisite spine for OLS setup.
- `model_objects`, `ols_objective`, `normal_equations`: foundational workflow sequence already granular.
- `partial_effects` and `functional_forms`: interpretation family tightly linked in exam practice.
- `exogeneity`, `endogeneity_ovb`, `unbiasedness`, `gauss_markov`, `consistency`, `asymptotic_normality`: conceptually distinct estimator-property ladder already well-split.
- `prediction`, `prediction_intervals`, `r_squared`: already separated where students commonly confuse units.
- `t_test`, `f_test`, `confidence_intervals`, `linear_restrictions_ur`: inference logic already decomposed into usable units.
- `heteroskedasticity`, `robust_gls`, `autocorrelation`, `hac_newey_west`: diagnostic/correction chain is present and pedagogically navigable without further mandatory split.

## Granularity judgment
- Current map is **appropriately granular** overall.
- There is **no high-confidence under-splitting** that must be fixed in pass 1.
- There is **no over-splitting** that warrants merge.

## Recommendation
- Do **not** run a structural split implementation from this audit.
- Treat remaining issues as depth/distribution tuning in future content passes (drill distinctness and diagnostic workflow reinforcement), not concept-map expansion.
