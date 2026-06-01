# LaTeX rendering fix pass — 2026-06-01

## Root cause

**Primary:** `tools/exam-os/normalize-theory-structure.mjs` used `escapeForTemplateLiteral()` which doubled every `\` before writing `String.raw\`…\`` sources. `String.raw` does not unescape backslashes, so each fleet `--write` multiplied escapes (e.g. `\le` → `\\le` in output → `\\\\le` on next run). MathJax then saw `\\le` / `\\\\le` as line breaks + literal `le`, matching the screenshot (`|x - a|lebi f f …`).

**Secondary:** Without repair at render time, persisted `theoryRecipe.js` / normalized `chapters.js` served broken TeX to the theory tab. `semanticMathSurfaces` could still fragment plain `iff` / `le` if math failed to typeset (letter-level patterns); theory recipe zones were added to skip selectors.

## Fixes

| Layer | File | Change |
|-------|------|--------|
| Persist | `tools/exam-os/normalize-theory-structure.mjs` | `escapeForTemplateLiteral` only escapes `` ` `` and `${`; collapses LaTeX before write |
| Repair | `tools/exam-os/repair-latex-escapes.mjs` | Fleet repair of `String.raw` blocks in chapters / theoryRecipe / curriculum |
| Core | `assets/js/portal-core/utils/latexProtect.js` | `collapseOverEscapedLatex`, `protectLatexInHtml`, `repairLatexInHtml` |
| Render | `assets/js/portal-core/utils/studentFacingText.js` | Shield math during `studentizeTheoryHtml`; repair on output |
| Semantic | `assets/js/portal-core/ui/semanticMathSurfaces.js` | Skip `.theory-recipe-*`, MathJax nodes; ignore LaTeX command text |
| Data | `mathematik/js/data/theoryRecipe.js`, fleet `chapters.js`, `oekonometrie/js/data/theoryRecipe.js` | Collapsed over-escapes; mathematik absolute-value block restored |
| Trust | `tools/clickthrough/trust-regression-pass-1.mjs` | mathematik `algebra_mengen`; theory-recipe selectors; bare `le`/`ge`/`iff` heuristic |

## Validation

```bash
node tools/exam-os/repair-latex-escapes.mjs          # dry-run
cd tools/clickthrough && npm run trust:pass1
```

**Manual smoke**

| Case | URL |
|------|-----|
| Absolutbetrag-Ungleichungen | `/mathematik/index.html#algebra_mengen/theorie` |
| mikro1 GRS | `/mikro1/index.html#budget/formeln` |
| Ökonometrie OLS | `/oekonometrie/index.html#ols_objective/theorie` |

Expect: `|x-a| \le b \iff a-b \le x \le a+b` typeset; no literal `le` / `iff` chains.

## Remaining risks

- Re-run `normalize-theory-structure.mjs --write` only after `escapeForTemplateLiteral` fix (never double `\` for `String.raw`).
- Matrix rows in theory recipe use `\\` inside `$$…$$`; do not run legacy escape-doubling tools on those files.
