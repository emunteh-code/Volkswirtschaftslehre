# Theory recipe fleet fill pass

Date: 2026-05-31
Mode: write

## Canonical 8-step recipe

1. **Orientierung** (`orientierung`)
2. **Kernidee** (`kernidee`)
3. **Definitionen** (`definitionen`)
4. **Formale Darstellung** (`formale`)
5. **Mechanismus & Zusammenhänge** (`mechanismus`)
6. **Anwendung & Klausurtransfer** (`anwendung`)
7. **Häufige Fehler** (`fehler`)
8. **Vor den Aufgaben** (`vor_aufgaben`)

## Fleet summary

| Metric | Before | After |
|--------|--------|-------|
| Concepts audited | 46 | 46 |
| Concepts with 8 **filled** steps (substantive VL content) | 0 (0%) | 0 (0%) |
| Concepts with 8 **structural** cards (incl. honest placeholders) | — | 0 (0%) |

| Module | Concepts | Structural 8 after | Avg filled after | Avg placeholders | Normalized |
|--------|----------|--------------------|------------------|--------------------|------------|
| mathematik | 14 | 0 | 4.9 | 0 | 14 |
| oekonometrie | 32 | 0 | 5.5 | 0 | 32 |

## Implementation

| Layer | File | Role |
|-------|------|------|
| Core | `assets/js/portal-core/theory/theoryStructure.js` | Re-wrap, classify, `completeTheoryRecipe`, `auditTheoryRecipeSteps` |
| Migration | `tools/exam-os/normalize-theory-structure.mjs` | Fleet `--write`; persists `theoryRecipe.js` for ökonometrie/mathematik |
| Render | `assets/js/portal-core/ui/warningSystem.js` | Keeps placeholder cards; warn-box rail |
| Styles | `assets/css/premium-refinement.css` | Recipe cards + placeholder styling |

Empty steps after normalization receive honest one-line placeholders or content merged from `motivation`, `objectives`, `formeln`, `cards`, `intuition` — no invented VL prose.

## Per-concept detail (filled step counts)

### mathematik

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| algebra_mengen | persist-recipe | 4 → 4 |
| funktionen_gleichungen | persist-recipe | 4 → 4 |
| exp_log_inverse | persist-recipe | 5 → 5 |
| summen_logik_beweise | persist-recipe | 5 → 5 |
| lineare_algebra_grundlagen | persist-recipe | 4 → 4 |
| lineare_algebra_struktur | persist-recipe | 4 → 4 |
| analysis_ableitung_grundlagen | persist-recipe | 4 → 4 |
| analysis_monotonie_grenzwerte | persist-recipe | 6 → 6 |
| univariate_optimierung | persist-recipe | 6 → 6 |
| analysis_multivariat | persist-recipe | 5 → 5 |
| multivariate_optimierung | persist-recipe | 5 → 5 |
| lagrange | persist-recipe | 5 → 5 |
| integralrechnung | persist-recipe | 6 → 6 |
| r_begleitpraxis | persist-recipe | 5 → 5 |

### oekonometrie

| Concept | Status | Filled before → after |
|---------|--------|----------------------|
| matrix_notation | persist-recipe | 5 → 5 |
| sample_moments | persist-recipe | 5 → 5 |
| distributions_df | persist-recipe | 6 → 6 |
| model_objects | persist-recipe | 5 → 5 |
| ols_objective | persist-recipe | 6 → 6 |
| normal_equations | persist-recipe | 5 → 5 |
| partial_effects | persist-recipe | 5 → 5 |
| functional_forms | persist-recipe | 6 → 6 |
| no_perfect_multicollinearity | persist-recipe | 6 → 6 |
| exogeneity | persist-recipe | 6 → 6 |
| endogeneity_ovb | persist-recipe | 5 → 5 |
| unbiasedness | persist-recipe | 6 → 6 |
| gauss_markov | persist-recipe | 6 → 6 |
| consistency | persist-recipe | 6 → 6 |
| error_variance | persist-recipe | 5 → 5 |
| covariance_matrix | persist-recipe | 6 → 6 |
| prediction | persist-recipe | 5 → 5 |
| prediction_intervals | persist-recipe | 5 → 5 |
| r_squared | persist-recipe | 5 → 5 |
| t_test | persist-recipe | 6 → 6 |
| f_test | persist-recipe | 5 → 5 |
| confidence_intervals | persist-recipe | 5 → 5 |
| normal_linear_model_mle | persist-recipe | 4 → 4 |
| linear_restrictions_ur | persist-recipe | 5 → 5 |
| asymptotic_normality | persist-recipe | 6 → 6 |
| monte_carlo | persist-recipe | 6 → 6 |
| vif_collinearity | persist-recipe | 6 → 6 |
| fwl_partial_regression | persist-recipe | 6 → 6 |
| heteroskedasticity | persist-recipe | 6 → 6 |
| robust_gls | persist-recipe | 5 → 5 |
| autocorrelation | persist-recipe | 5 → 5 |
| hac_newey_west | persist-recipe | 6 → 6 |

## Validation

| Check | Result |
|-------|--------|
| `npm run validate` | see CI |
| `npm run trust:pass1` | see CI |
