# R-Übung Micro Correction Pass 3

## Scope
Close the remaining shared pedagogical scan-speed and math-to-code mapping weaknesses in the `R-Übung` surface after pass 2.

## Exact representative pages checked before implementation
- `mathematik` → `funktionen_gleichungen` (`R-Übung`)
- `oekonometrie` → `matrix_notation` (`R-Übung`)
- `statistik` → `regression_diagnostik_prognose` (`R-Übung`)

## Exact pass-2 weaknesses confirmed in the live UI
1. **Math ↔ R mapping still too generic on symbolic pages**
   - `mathematik/funktionen_gleichungen` showed:
     - `θ (Zielparameter)`
     - `parameter = ...`
   - `oekonometrie/matrix_notation` showed the same generic fallback.
   - This is too abstract and forces the student to infer the actual mathematical object and code locus on their own.

2. **Kernzeile still not actionable enough**
   - On the same two pages, the `Kernzeile` block still fell back to:
     - `Zielzeile`
     - `Die eine Zeile, die den Mini-Task fachlich verändert.`
   - That does not reduce search burden enough.

3. **Statistics core-line effect was conceptually too loose**
   - `statistik/regression_diagnostik_prognose` correctly surfaced the `predict(...)` line, but the effect text incorrectly talked about changing “Sicherheitsniveau / Intervallbreite”.
   - The actual change is interval **type** (`prediction` vs `confidence`), not confidence level.

4. **Repeated orientation text still slowed scanning**
   - `Arbeitsauftrag`, `Dein erster Schritt`, and the editor help repeated the same guidance with too much overlap.

## Root-cause classification
- Shared inference weakness: yes
- Shared R-copy redundancy: yes
- Module-local data gap: partially, but the highest-value correction can be made in the shared layer first
- Runtime / WebR bug: no

## Implementation intent
- Make `Mathe ↔ R-Übersetzung` concrete where safe by reading:
  - task prompt snippets
  - starter code
  - solution changes / solution code
  - concept-specific code patterns
- Make `Kernzeile` point to the exact line / fragment / parameter that changes.
- Tighten repeated explanatory text without adding more structural blocks.

## Files expected to change
- `assets/js/portal-core/features/rPractice.js`
- `assets/css/r-practice.css` (only if needed for scan speed / visual emphasis)

## Success target for this pass
- `mathematik` no longer shows fallback `θ / parameter = ...`
- `oekonometrie` no longer shows fallback `θ / parameter = ...`
- `statistik` describes the actual interval-type switch instead of a confidence-level switch
- `Kernzeile` names the concrete expression / line fragment more directly
- orientation text becomes faster to scan with less duplication

## Exact files changed
- `assets/js/portal-core/features/rPractice.js`
- `assets/css/r-practice.css`

## Exact micro-corrections made
1. **Concrete Math ↔ R inference in the shared layer**
   - Added pattern-aware extraction for the highest-value concept families still showing generic fallback:
     - `mathematik`: Leitkoeffizient / Funktionsdefinition / Nullstellen-Plot
     - `oekonometrie`: Regressormatrix `X`, Zusatzspalte `x3`, Kreuzprodukt `X'X`
     - `statistik`: `predict(..., interval = ...)`, `coef(model)`, `t.test(..., conf.level = ...)`, `t.test(..., mu = ...)`
   - The translation block now prefers explicit mathematical objects and their actual R counterpart where this can be inferred safely.

2. **Actionable Kernzeile**
   - The shared component now selects a concrete line and cue from:
     - explicit `coreLine`
     - starter vs. solution code diff
     - task-prompt code snippets
     - concept-specific code heuristics
   - `Dein erster Schritt` now points directly to the decisive line when possible, e.g. `Gehe direkt zu Zeile 4 ...`.

3. **Sharper effect / invariance text**
   - Added concept-specific line-effect summaries so the student sees not only what changes, but also what stays invariant.
   - Especially corrected the statistics prognosis page so it talks about **Intervalltyp** instead of **Sicherheitsniveau**.

4. **Less repetitive orientation copy**
   - Tightened the guidance in:
     - `Dein erster Schritt`
     - `Kernzeile`
     - editor help (`Ändern` / `Stehen lassen`)
   - This reduces overlap and makes the surface faster to scan.

## Exact pages verified after implementation
- `mathematik` → `funktionen_gleichungen` (`R-Übung`)
- `oekonometrie` → `matrix_notation` (`R-Übung`)
- `statistik` → `regression_diagnostik_prognose` (`R-Übung`)

## Exact visible improvements achieved
### Mathematik — `funktionen_gleichungen`
- The translation block no longer shows fallback placeholders.
- It now names the actual mathematical object:
  - `a (Leitkoeffizient der Parabel)`
- It now maps that object to the real R expression:
  - `f <- function(x) 1.5 * (x + 1) * (x - 3)`
- `Kernzeile` now points to the concrete function-definition line and explains that only the coefficient in front of the product changes.
- The page now makes the invariant explicit: the nullstellen markers remain fixed while the opening changes.

### Ökonometrie — `matrix_notation`
- The translation block no longer shows fallback placeholders.
- It now names the actual econometric object:
  - `X ∈ R^{n×k} mit zusätzlicher Spalte x3`
- It now maps that object to the real R expression:
  - `X <- cbind(1, x2, x3)`
- The cross-product object is also surfaced explicitly:
  - `X'X ∈ R^{k×k}`
  - `t(X) %*% X`
- `Kernzeile` now points to the exact line where the extra regressor column is added.

### Statistik — `regression_diagnostik_prognose`
- The translation block now names the actual prediction object:
  - `ŷ(x)=E[Y|X=x]`
- It maps that object to the real R call:
  - `predict(model, newdata = pred_df, ...)`
- It explicitly distinguishes the two interval modes:
  - `interval = "confidence"`
  - `interval = "prediction"`
- `Kernzeile` now points to the exact parameter that changes.
- The effect text is now conceptually correct: it explains the **interval-type** switch and why prediction intervals are wider.

## Verification evidence
- Browser screenshots captured after the corrections:
  - `.qa/r-micro-pass3-mathematik.png`
  - `.qa/r-micro-pass3-oekonometrie.png`
  - `.qa/r-micro-pass3-statistik.png`
- Additional screenshots captured in this pass:
  - `.qa/r-pass3-final/mathematik-r-pass3.png`
  - `.qa/r-pass3-final/oekonometrie-r-pass3.png`
  - `.qa/r-pass3-final/statistik-r-pass3.png`

## Exact remaining limitations
- The shared layer now removes the worst generic fallback, but some output-evidence phrasing still depends on what the block data makes inferable.
- Where a module does not provide an explicit concept-local signal for output interpretation, the shared component still has to infer a concise default instead of quoting a fully authored page-specific sentence.
- This is now a smaller content-authoring limitation, not the earlier shared clarity failure.
