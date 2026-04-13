# Public-core concept-level source-diff hardening — Pass 5 (Ökonometrie)

## Scope and method

- **Module only:** `oekonometrie/`
- **On-disk corpus (canonical root):** `source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/` (on this mirror the filesystem may show decomposed umlauts in folder names; `Einf_WiSe2024.pdf` and `Exercises_…/R/*.R` were read from the resolved lecture tree).
- **Portal spine:** `oekonometrie/js/data/curriculum.js` (single source of truth for rendered theory, formulas, tasks, R blocks via `chapters.js` re-export), `oekonometrie/js/data/contentManifest.js`, `docs/audits/oekonometrie-provenance-curation-pass-1.md`.
- **Evidence:** `pdftotext` on `Einf_WiSe2024.pdf` (outline + selected slices), direct read of `01_Das_lineare_Modell.R`, `Wiederholung_Statistik.R` where relevant; no substitution by generic econometrics where a concrete mismatch was found.

## Issues found vs issues fixed (summary)

| Issue | Location | Fix applied? |
|------|----------|--------------|
| **Gauss–Markov** display compared `Var(a'y\mid X)` to `Var(\hat\beta_j\mid X)` — not the standard BLUE statement (wrong objects / inequality direction for a general `a`) | `curriculum.js` → `gauss_markov` · `formeln` | **Yes** — replaced by `Var(c'\hat\beta\mid X) \le Var(c'\tilde\beta\mid X)` for linear unbiased `\tilde\beta`; German `desc` without fragile inline-math delimiters. |
| **F-Test / ANOVA** mini-solution said the null concerned coefficients “**im eingeschränkten Modell** zusätzlich aufgenommen” — reversed relative to `anova(model_r, model_ur)` (zusätzliche Regressoren liegen im **UR**-Modell) | `curriculum.js` → `f_test` · `rBlock.solution` | **Yes** — wording now matches gemeinsame Blockrestriktion der im UR zusätzlichen Regressoren. |
| **t-Test** theory lacked explicit **df = n−k** and **Normalität vs. groß-n-Approximation** guardrail | `curriculum.js` → `t_test` · `sections[0].body` | **Yes** — one source-aligned sentence added. |
| **t-Test** Aufgabe step used colloquial “Verwirf H₀” without the usual exam-precision on “nicht verwerfen ≠ beweisen” | `curriculum.js` → `t_test` · `aufgaben` step text | **Yes** — clarified in-step. |

**Files changed:** `oekonometrie/js/data/curriculum.js` only.

---

## Per-concept audit (required structure)

### 1) `matrix_notation`

1. **Slug:** `matrix_notation`  
2. **Source basis:** `Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf` (OLS/matrix chapters); `Exercises_…/R/Wiederholung_Lineare_Algebra.R`, `01_Das_lineare_Modell.R`.  
3. **Strengths:** Clear `y = Xβ + u`, dimension card, `X'X` invertibility tied to rank; R block matches `01_Das_lineare_Modell.R` (manual `solve(t(X)%*%X)%*%t(X)%*%y`).  
4. **Weaknesses:** None material found in this pass beyond “always name intercept column explicitly in exam” (already implied).  
5. **Fidelity judgment:** **strong**  
6. **Misleading / missing:** n/a  
7. **Recommended fix:** none  
8. **Fix applied:** **No**

---

### 2) `sample_moments`

1. **Slug:** `sample_moments`  
2. **Source basis:** `Einf_WiSe2024.pdf` (bivariate / sums in prediction snippets); `Wiederholung_Statistik.R` (distributions only — no cov formula in file).  
3. **Strengths:** OLS slope as signal-to-own-variation; sum and matrix bridge.  
4. **Weaknesses:** `s_{xy}` uses **1/n** in the formula card; OLS ratio uses sums — **consistent** for `\hat\beta_1` because common factors cancel; course PDF is English-heavy on this slide slice — **no definite VL contradiction** found.  
5. **Fidelity judgment:** **mixed** (notation convention depends on script chapter; not elevated to “error” without a verbatim course definition).  
6. **Misleading / missing:** Optional future pass: align moment denominator explicitly with the script’s preferred convention if a Übungsblatt states it.  
7. **Recommended fix:** none this pass  
8. **Fix applied:** **No**

---

### 3) `ols_objective`

1. **Slug:** `ols_objective`  
2. **Source basis:** `Einf_WiSe2024.pdf` (OLS objective); `01_Das_lineare_Modell.R` (`lm`, SSR).  
3. **Strengths:** Correct `\min_\beta \sum (y_i - x_i'\beta)^2`; geometry/projection narrative; graph draws vertical residuals consistent with **y-on-x** OLS.  
4. **Weaknesses:** None requiring change; legend mixes English “Fitted line” with German UI (cosmetic, not trust-critical).  
5. **Fidelity judgment:** **strong**  
6. **Misleading / missing:** n/a  
7. **Recommended fix:** none  
8. **Fix applied:** **No**

---

### 4) `t_test`

1. **Slug:** `t_test`  
2. **Source basis:** `Einf_WiSe2024.pdf` (inferenz block); `09_Intervallschätzung_Hypothesentests.R` (path per manifest); `Formelsammlung.pdf` / tables cited in manifest.  
3. **Strengths:** Correct t-ratio; explicit warning against “significant = important”; good language on not claiming H₀ “false”; R block maps `summary()$coefficients` columns.  
4. **Weaknesses (before):** Missing explicit **t_{n-k}** / normality vs asymptotics sentence for students who collapse “t-Test” to a recipe.  
5. **Fidelity judgment:** **mixed** → **strong** on audited inference wording.  
6. **Misleading / missing:** Silent df and distributional assumption → exam-risk.  
7. **Recommended fix:** Add one disciplined sentence on classical assumptions + df + large-n escape hatch.  
8. **Fix applied:** **Yes** (theory + small step wording).

---

### 5) `f_test`

1. **Slug:** `f_test`  
2. **Source basis:** Same inferenz bundle as `t_test`; R `anova(model_r, model_ur)` pattern in curriculum.  
3. **Strengths:** SSR-based F formula; block vs many t-tests warning; `anova` code matches standard R workflow.  
4. **Weaknesses (before):** **R-tab solution** reversed which model carries the “additional” regressors — **trust-critical** for ANOVA interpretation.  
5. **Fidelity judgment:** **weak** on that micro-solution → **strong** after fix.  
6. **Misleading / missing:** Students could memorize the wrong null statement for nested model comparison.  
7. **Recommended fix:** Replace solution sentence with UR-centric block-null phrasing.  
8. **Fix applied:** **Yes**

---

### 6) `gauss_markov`

1. **Slug:** `gauss_markov`  
2. **Source basis:** `Einf_WiSe2024.pdf` (Gauss–Markov / BLUE); `03_Eigenschaften.R`.  
3. **Strengths:** Cards unpack BLUE; homoskedasticity role; limits of the theorem.  
4. **Weaknesses (before):** **Formula card** stated a non-standard and **not generally valid** inequality (`Var(a'y)` vs `Var(\hat\beta_j)`).  
5. **Fidelity judgment:** **weak** (formula) → **strong** after fix.  
6. **Misleading / missing:** Could teach an incorrect mathematical object comparison.  
7. **Recommended fix:** Use standard scalarization `c'\hat\beta` vs `c'\tilde\beta` for linear unbiased competitors.  
8. **Fix applied:** **Yes**

---

### 7) `confidence_intervals`

1. **Slug:** `confidence_intervals`  
2. **Source basis:** Inferenz PDF + R09 + tables (manifest).  
3. **Strengths:** Correct duality with two-sided test; explicit warning against “95% probability parameter in this interval” misread.  
4. **Weaknesses:** None found in this pass.  
5. **Fidelity judgment:** **strong**  
6. **Misleading / missing:** n/a  
7. **Recommended fix:** none  
8. **Fix applied:** **No**

---

### 8) `partial_effects` (spot)

1. **Slug:** `partial_effects`  
2. **Source basis:** `Einf_WiSe2024.pdf` + `01_Das_lineare_Modell.R`.  
3. **Strengths:** Partial derivative / ceteris paribus; strong causal warning; R interpretation ties `coef` to controls.  
4. **Weaknesses:** None flagged in this pass (continuous-regressor framing is standard).  
5. **Fidelity judgment:** **strong**  
6. **Misleading / missing:** n/a  
7. **Recommended fix:** none  
8. **Fix applied:** **No**

---

## Graph surface (`ols_objective`)

- **Checked:** `oekonometrie/js/ui/graphs.js` `drawOLS` — vertical residuals, `\sum \hat u_i^2` in `graph_info`, alignment with chapter narrative.  
- **Judgment:** **strong** for the intended **bivariate y-on-x** OLS visualization.  
- **Fix applied:** **No**

## R-tab fidelity (spot)

- **`matrix_notation` / `model_objects`:** Code paths mirror `01_Das_lineare_Modell.R` structure (hand vs `lm`).  
- **`f_test`:** Fix applied to **solution prose** only; `anova(model_r, model_ur)` code unchanged and still pedagogically valid.

## Provenance honesty

- **Unchanged** this pass: `contentManifest.js` primary lists remain the audit-backed spine (`oekonometrie-provenance-curation-pass-1.md`).  
- **Note:** `NOTES_THEORY` already states portal wording is distilled — fixes above tighten **econometric correctness**, not provenance granularity (still no slide anchors inside `Einf_WiSe2024.pdf`).

## Browser / automated verification

- **Command:** `cd tools/clickthrough && node trust-regression-pass-1.mjs`  
- **Result:** `trust-regression-pass-1: all checks passed.` (~60s)

**Ökonometrie-relevant checks in the harness include:**

- Math-leak scan: `/oekonometrie/index.html` · `matrix_notation` / `t_test` **formeln** tab.  
- Provenance footer: `/oekonometrie/index.html` · `matrix_notation` **theorie**.  
- Aufgaben reveal: `/oekonometrie/index.html` · `matrix_notation` **aufgaben**.  
- Graph integrity: **not** in the default graph list for oeko (graphs include mikro1/makro1/statistik/finanz); Ökonometrie graph tab is **not** exercised by this script’s `GRAPH_CASES`. Manual spot: `GRAPH_CONCEPTS` still includes `ols_objective`; renderer path unchanged by this pass.

## Coverage statement (explicit)

**Deep audit + code fix:** `gauss_markov`, `f_test`, `t_test`.  
**Read against sources, no code change:** `matrix_notation`, `ols_objective`, `confidence_intervals`, `partial_effects`, OLS graph path, `01_Das_lineare_Modell.R`.  
**Light / convention-only:** `sample_moments`.  
**Not re-audited VL-line-by-line in Pass 5:** remaining curriculum ids (e.g. `heteroskedasticity`, `hac_newey_west`, `monte_carlo`, …), `stepProblems.js`, `fullExams.js`, full `graphEngine` for all panels.

## Updated trust judgment (Ökonometrie, after pass 5)

**Verdict:** **Improved on a high-blast-radius axis:** a **wrong Gauss–Markov formula** and a **reversed ANOVA-null explanation** are **serious trust defects** — both are **corrected** with standard econometric statements. **t-Test** theory is **slightly more exam-defensible** on assumptions and degrees of freedom.  
**Residual risks:** (1) **Single mega-PDF** `Einf_WiSe2024.pdf` limits slide-precise citation without page anchors. (2) **Graph regression suite** does not automatically hit `oekonometrie` graphs each run. (3) **Many chapters** untouched in this pass — the module is **not** globally “hardened” to every inferenz/diagnostics edge.

## Source files used (this pass)

| Path | Role |
|------|------|
| `…/Lecture_Einführung_in_die_Ökonometrie/Einf_WiSe2024.pdf` | Outline + context slices |
| `…/Exercises_Einführung_in_die_Ökonometrie_Übung/R/01_Das_lineare_Modell.R` | R alignment |
| `…/Exercises_…/R/Wiederholung_Statistik.R` | Moment chapter cross-check |
| `docs/audits/oekonometrie-provenance-curation-pass-1.md` | Anchor policy |
| `oekonometrie/js/data/curriculum.js` | Implemented fixes |

---

**Outcome:** Pass 5 completes with **documented concept-level diffs**, **source-grounded fixes** in `curriculum.js`, and **green** trust regression for the Ökonometrie surfaces that the automated harness already guards.
