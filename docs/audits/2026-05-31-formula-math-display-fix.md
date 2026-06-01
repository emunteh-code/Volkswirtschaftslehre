# Formula card math display fix — 2026-05-31

**Priority:** Critical — student-visible broken equations on Formeln cards.

---

## Symptom

**GRS Definition** (Mikro I `grs`, Formeln tab) showed only **“misplaced &”** in the equation area; the full `GRS = |dx₂/dx₁|_{u=ū}` line was missing or replaced by a MathJax error.

---

## Root cause

**File:** `assets/js/portal-core/ui/mathDerivationFormat.js`  
**Path:** `semanticContent.js` → `renderSemanticBlock` → `formatChainedEqualitiesForDisplay`

The GRS card uses valid source LaTeX:

```latex
GRS = \left|\frac{dx_2}{dx_1}\right|_{\,u = \bar{u}}
```

`formatChainedEqualitiesForDisplay` split on **every** spaced ` = ` (`/\s+=\s+/`), including the `=` **inside** the subscript `_{\,u = \bar{u}}`. That produced three fake “chain” segments:

1. `GRS`
2. `\left|\frac{dx_2}{dx_1}\right|_{\,u`
3. `\bar{u}}`

With length ≥ 22 chars, the rewriter emitted a broken `\begin{aligned}` block with `&=` continuations. MathJax then surfaced **“misplaced &”** (alignment tab character outside a valid row).

**Data was not wrong** — `mikro1/js/data/chapters.js`, `formulaCards.js`, and `aPlusSupplement.js` all use the same correct equation. No fleet-wide `&`-in-label HTML issue was involved for this bug.

---

## Fix

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/mathDerivationFormat.js` | New `splitTopLevelChainedEquals()` — split only on ` = ` at brace depth 0; use everywhere `=` splitting ran before; reject unbalanced brace segments. |
| `assets/js/portal-core/utils/math.js` | `renderMath` also typesets `.formula-card .math-block` and `.formula-herleitung-math .math-block` nodes explicitly. |
| `tools/clickthrough/trust-regression-pass-1.mjs` | `runFormulaEquationIntegrity` — `mikro1/grs` GRS Definition + `mikro1/budget` anchor card: no “misplaced &”, MathJax present. |

**Content formulas fixed:** **0** (authoring unchanged; renderer fix covers all modules using `renderSemanticBlock`).

**Regression strings verified (Node):**

- GRS definition → unchanged (2 top-level segments → not a 3-part chain).
- Hausopt `\qquad` intercept line → still `preserve-as-authored`.
- Pure `a = b = c = d` → still wraps in `aligned`.

---

## Source materials

- `source-materials/` Mikro I household theory: GRS as magnitude of IK slope at fixed utility (consistent with `_{u=\bar{u}}` subscript notation).

---

## Validation

```bash
cd tools/clickthrough && npm ci && npx playwright install chromium && node trust-regression-pass-1.mjs
```

Expect: `trust-regression-pass-1: all checks passed.` including new `formula-eq-integrity` rows for `mikro1/grs/formeln`.

---

## Residual risks

- Extremely rare LaTeX that uses unbraced subscripts with internal ` = ` (non-standard) could still be mis-split; prefer `_{u=\bar{u}}` or brace groups in new content.
- Pre-existing `\begin{aligned}` blocks in chapter Aufgaben steps are unchanged (early exit on `\begin{`).
