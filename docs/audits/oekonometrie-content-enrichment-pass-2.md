# Oekonometrie Content Enrichment Pass 2

## Scope
- Module: `oekonometrie` only.
- Grounding: `docs/audits/oekonometrie-source-grounded-audit-pass-1.md` + inspected source files from:
  - Vorlesung (`Einf_WiSe2024.pdf`, `Formelsammlung.pdf`)
  - Tutorium (`aufgabenblatt04.pdf`)
  - Probeklausur (`Probeklausur_1.pdf`)
  - R-Praxis (`11_Heteroskedastizitt.R`, `12_Autokorrelation.R`)
- Out of scope: platform/infrastructure refactor.

## Exact files changed
- `oekonometrie/js/data/curriculum.js`
- `docs/audits/oekonometrie-content-enrichment-pass-2.md`

## Exact concepts/sections enriched

### 1) Test-to-decision diagnostics workflow (heteroskedasticity/autocorrelation)
- Concept: `heteroskedasticity`
  - Added a new exam-style task explicitly chaining:
    - variance diagnosis -> test framing -> robust-vs-GLS decision.
- Concept: `autocorrelation`
  - Added a new exam-style task explicitly chaining:
    - DW signal -> inference risk -> HAC first response -> optional EGLS/GLS if structure is modellable.

### 2) Explicit MLE-focused concept support
- Added new concept: `normal_linear_model_mle`
  - Covers normal linear model log-likelihood and OLS/MLE equivalence for β.
  - Added source-grounded task on why OLS and MLE coincide for β under NLM.
  - Added R-backed mini-case block (likelihood/SSR interpretation bridge).

### 3) Explicit restricted-vs-unrestricted support
- Added new concept: `linear_restrictions_ur`
  - Covers H0: `Rβ = r`, restricted vs unrestricted model logic, and F-test rationale.
  - Added source-grounded task mapping excluded regressors to joint restrictions.
  - Added R-backed mini-case block using restricted/unrestricted model comparison.

### 4) Richer prediction / interval / forecast-error decomposition drills
- Concept: `prediction_intervals`
  - Added a new task explicitly decomposing forecast uncertainty drivers:
    - error variance level,
    - sample size,
    - distance of `x0` from sample center (extrapolation),
    - extra innovation term in prediction intervals.
  - Added R-backed mini-case block comparing confidence vs prediction intervals.

## Exact new learning objects, drills, or mini-cases added

### New concepts
- `normal_linear_model_mle` (new full concept object)
- `linear_restrictions_ur` (new full concept object)

### New tasks added to existing concepts
- `heteroskedasticity`: +1 new test-to-decision workflow task
- `autocorrelation`: +1 new test-to-decision workflow task
- `prediction_intervals`: +1 new forecast-error decomposition task

### New R-backed mini-cases
- `prediction_intervals`: added new `rBlock` with `predict(..., interval="confidence"/"prediction")`
- `normal_linear_model_mle`: added `rBlock` linking OLS result and likelihood core term logic
- `linear_restrictions_ur`: added `rBlock` for restricted/unrestricted comparison via `anova`

## Source-grounding notes
- Included only enrichments clearly supported by opened source:
  - NLM/MLE + inference structure (lecture + formula sheet)
  - restricted/unrestricted + joint restriction testing (probeklausur + inference materials)
  - DW/autocorrelation and heteroskedasticity workflow (tutorials + R scripts)
  - prediction interval interpretation and decomposition (tutorial forecasting tasks)
- No ungrounded topic families were added.

## Remaining gaps and why they remain
1. **Algorithmic nonlinear estimation (Gauss-Newton / Newton-Raphson)**
   - Mentioned in lecture appendix but not added as a separate concept in this pass to keep scope focused on high-value exam-core lanes requested.
2. **Deeper finite-sample diagnostic variants**
   - Additional specialized tests exist in source, but were left out to avoid overloading pass-2 and preserve additive clarity.
3. **Auto-generated step-problem depth ceiling**
   - `stepProblems.js` remains generated from curriculum tasks. Enrichment improves this materially, but a bespoke hand-authored drill layer would be a separate future pass.

## Deployability/status
- Changes are additive and curriculum-structured.
- Existing chapter/content/step-problem pipeline remains intact.
- No linter errors on touched files.
