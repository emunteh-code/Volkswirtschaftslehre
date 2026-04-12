# Statistik raw code and escaped-math leakage — Pass 63

**Date:** 2026-04-12  
**Priority:** Statistik-first; shared portal renderers; student-visible trust.

## Exact failure paths found

### 1. Plain-escape-only prose renderer (primary)

`createRenderer` in `assets/js/portal-core/ui/renderer.js` implemented `renderSemanticPlainText` as:

- `decodeHtmlEntities` + `escapeHtml` only.

**Consequence:** Any LaTeX-style **source** in Aufgaben / Prüfungstransfer strings (e.g. `\texttt{var.equal=FALSE}`, `\sigma_1^2` outside `$…$`, or `\bar X` without math delimiters) was emitted **verbatim** into the DOM. MathJax never received valid TeX for those segments, so students saw **raw backslashes and command names**.

**Affected surfaces (portal):**

- `prob-text` (question line)
- `step-text` / `exam-drill-step-text`
- `result-badge` (guided tasks **and** exam drills — exam result line was previously **unprocessed** raw `task.result`)
- `exam-drill-copy`, intuition support lines, notation values, etc. (all former `renderSemanticPlainText` call sites)

### 2. Formula / intuition description HTML

`formula.desc` on Formeln cards and `formula.desc` in the intuition callout were injected **raw** into HTML. If `desc` contained `$…$` or `\texttt{…}` without going through the same pipeline, leakage matched (1).

### 3. Statistik content bugs (secondary, but real)

- **Regression theorie:** `H0:` without math for the hypothesis label (`statistik/js/data/chapters.js`).
- **Step `eq`:** garbled TeX in one diagnostic step (`Hohes }R^2\text{…}`).
- **R-Lab step:** decision line used `\text{H0 (}\beta = 0\text{)…}` **without** display delimiters — fragile and ugly even when coerced to math.
- **Intuition exam cue:** `\\bar X` without `$…$` in `statistik/js/data/intuition.js`.

### 4. Module-local renderers (mikro1 / ökonometrie)

These modules override practice markup and use `formalizeMarkupString` + `semanticizeMarkupString` for prose. They **did not** interpret `\texttt{…}`. Any future (or rare) `\texttt` in practice strings would leak the same way. **Mitigation:** if raw input contains `\texttt{`, route through `renderTeachingProse` first.

## Normalization rules adopted

| Rule | Implementation |
|------|------------------|
| Inline math | Preserve `$…$`, `$$…$$`, and `\(...\)` spans for MathJax; plain segments HTML-escaped. |
| `\texttt{…}` | Balanced-brace parse → `<code class="teaching-inline-code">…</code>`; inner `\textasciitilde{}` → `~`, `\$` → `$`, `{,}` → `,`; `var.equal=TRUE/FALSE` → spaced form for readability. |
| Stray `$` | If a `$…$` pair fails a **probable-math** heuristic, emit `&#36;` so MathJax does not treat currency-like text as delimiters. |
| Data hygiene | Fix obvious hypothesis / TeX mistakes in Statistik chapters + one intuition string. |

## Files changed

| File | Role |
|------|------|
| `assets/js/portal-core/ui/teachingProse.js` | **New:** `renderTeachingProse` |
| `assets/js/portal-core/ui/renderer.js` | `renderSemanticPlainText` → delegates to `renderTeachingProse`; exam `result-badge` uses `renderTeachingProse`; `f-desc` + intuition `formula.desc` use `renderTeachingProse` |
| `assets/css/premium-refinement.css` | Pass 63: `.teaching-inline-code` |
| `statistik/js/data/chapters.js` | H₀ labelling, broken `eq`, R-Lab significance line as proper `$$…$$` |
| `statistik/js/data/intuition.js` | `$\bar{X}$` in exam “then” line |
| `mikro1/js/ui/renderer.js` | `\texttt` → `renderTeachingProse` branch |
| `oekonometrie/js/ui/renderer.js` | same |

## Shared vs Statistik-local

- **Shared:** `teachingProse.js`, portal `renderer.js`, CSS, mikro1/ökonometrie guard for `\texttt`.
- **Statistik-local:** `chapters.js` + `intuition.js` string fixes.

Modules that only use `createRenderer` (e.g. Statistik app module) pick up the portal change automatically.

## Browser verification (manual)

Not run in this environment. Suggested checks:

1. Statistik → **R-Anwendungen / rlab** → Welch / `var.equal` Aufgabe: step text shows **code chips**, not `\texttt{…}`; math lines typeset; `p = 0{,}026 < 0{,}05` as inline math.
2. Same block: third step equation with `\sigma_1^2 \neq \sigma_2^2` in the **math** column (MathJax), not raw TeX in prose.
3. Regression theorie: “Nullhypothese $H_0$:” reads correctly.
4. Statistik intuition → Verteilungen exam pattern: no raw `\bar X`.
5. Ökonometrie / Mathematik: one revealed answer with mixed prose + `$…$` (portal path).
6. Graph interpretation line that uses `\(`…`\)` (unchanged path; still MathJax in HTML).

## Remaining edge cases (honest)

- **Heuristic inline math:** Very unusual prose that puts `$…$` around non-math text might still be interpreted as math if it passes `isProbableInlineMathInner` (e.g. short Latin tokens). Prefer fixing the source string.
- **Intentional HTML in strings** passed through `renderTeachingProse` will be **escaped** (tags show as text). Portal intuition **hero** still injects `data.core` as raw HTML by design — unchanged.
- **Theory column** remains full HTML from `entry.theorie`; this pass targets **string-based** panels (Aufgaben, drills, intuition excerpts that use the renderer helpers).

## Source note

Statistik edits keep the same statistical claims; only **notation and TeX validity** were adjusted for UI rendering (`source-distilled` / existing chapter data).
