# Formula-and-answer rendering normalization — Pass 62

**Date:** 2026-04-12  
**Scope:** Project-wide, student-visible rendering and layout for formulas in revealed solutions, Prüfungstransfer steps, and semantic vs math classification.

## Failure classes addressed

### A — Oversized / overflowing / awkwardly placed math in Musterlösungen

- **Cause:** Step rows did not enforce a single column flow; task math used the same visual weight as unconstrained display math; some modules injected raw `$$…$$` into generic `.math-block` without the task pipeline.
- **Fix:** `.step-body` and `.exam-drill-step` are explicit flex columns; math lives in `.step-math-slot` / `.exam-drill-step-math` with `min-width: 0`, width 100%, and slightly reduced `font-size` on `.math-block--task`. Global rules already set `max-width` / `overflow-x: auto` on `.math-block` and display `mjx-container`.

### B — Inconsistent step answer alignment

- **Cause:** Inline concatenation of step text and math in exam-drill `<li>` nodes; no shared “instruction then formula” structure.
- **Fix:** Portal and aligned module renderers emit `exam-drill-step-text` + `exam-drill-step-math`; Aufgaben use `step-text` + `step-math-slot`. CSS aligns stretch, start-aligned text, no floating center column.

### C — Malformed pseudo-math / `||` leakage on semantic cards

- **Cause:** `isTextDominatedLatex` treated strings like `$$x_i^*(…) \quad \text{— …}$$` as “text-dominated.” `parseTextDominatedLatex` then ran `normalizePlainSchemaText`, which mapped `\quad` to `||`, producing student-visible `x_i^*(…) || — …` schema chips.
- **Fix:** `isTextDominatedLatex` now requires that, after stripping `\text`/`\mathrm`/`\operatorname` and spacing commands, no substantive math markers remain: any remaining `\`, or `_`, `^`, or `*` in the scrubbed core forces **false**, so delimited strings stay **`mode: math`**. Additionally, `normalizePlainSchemaText` maps `\quad`/`\qquad` to a **single space** (not `||`) and `\\\\` to a **newline token** (not `||`) to avoid accidental clause splitting if normalization runs on TeX-like input.

### D — Compact vs long math

- **Approach:** Short/medium math: task variant + column layout. Long display: existing `mjx-container[display="true"]` max-width + horizontal scroll; Pass 62 does not reduce correctness by forcing breaks inside arbitrary TeX.

**Content hygiene (Marshall example):** `mikro1/js/data/chapters.js` — “Marshall-Nachfrage” `eq` is now **pure display math** `x_i^*(p_1,p_2,m)`; the gloss moved into `desc` (still consistent with variables / GRS story).

## Files changed

| Area | File |
|------|------|
| Shared semantic pipeline | `assets/js/portal-core/ui/semanticContent.js` |
| Shared Aufgaben / Prüfungstransfer markup | `assets/js/portal-core/ui/renderer.js` |
| Shared layout / task math | `assets/css/premium-refinement.css` (Pass 50/54 selector extensions + **Pass 62** block) |
| Content | `mikro1/js/data/chapters.js` (Marshall-Nachfrage card) |
| Module parity (was bypassing semantic task pipeline) | `mikro1/js/ui/renderer.js`, `oekonometrie/js/ui/renderer.js` |

## Shared vs module-local

- **Shared:** Classification fix (`semanticContent.js`), canonical step markup (`portal-core/renderer.js`), CSS (Pass 62 + extended Pass 50/54).
- **Module-local:** Mikro I and Ökonometrie duplicated practice/exam HTML; both now call `renderSemanticBlock` with `task` / `formula` variants like the portal, and use the same slot / exam-drill-step structure.

Modules that only use `createRenderer` from portal-core (e.g. Statistik, Makro, …) pick up portal markup automatically.

## Normalization rules adopted

1. **True display math** with subscripts, superscripts, stars, or remaining TeX after text-stripping must not be routed through `parseTextDominatedLatex` / plain-schema normalization.
2. **Revealed solutions:** step text → then math in a dedicated slot; math is start-aligned, not an isolated centered band in whitespace.
3. **Task context:** use `math-block--task` via `renderTaskMathBlock`; size clamped relative to body.
4. **Semantic de-TeX normalization:** avoid turning spacing (`\quad`) into clause separators (`||`).
5. **Formula cards:** prefer **math in `eq`**, **prose in `desc`** when a gloss is not part of the formal object.

## Browser verification (manual)

**Not run in CI here.** Recommended checks:

1. Statistik (or another portal-only module): Aufgabe with long covariance/correlation solution — reveal; confirm no horizontal spill beyond card, scroll if needed, steps read top-to-bottom.
2. Same or Mathematik: long deskriptive Statistik / derivation steps — same containment.
3. Simple mean/variance Aufgabe — compact math readable, not oversized vs step text.
4. Mikro I → Kapitel with **Marshall-Nachfrage**: Formeln tab — display math line + `desc` below; no `||` between symbol and German gloss.
5. Any Theorie semantic card that mixes `\text{…}` only — still schema/reference as before.
6. Prüfungstransfer steps — two-row layout per step (text block, then math).

## Remaining edge cases (honest)

- **Extremely long single-line TeX** without manual breaks remains dependent on MathJax overflow scroll; automatic line breaking inside arbitrary math is not attempted (would risk correctness).
- **Mixed prose + math in one `eq` string** is still discouraged; authors should split into `desc` / separate fields where possible.
- **`isTextDominatedLatex` heuristic:** edge cases could exist for unusual `\text{…}`-only chains that intentionally embed Unicode math symbols without TeX commands; if those appear, prefer structured `mode: "schema"` objects in data instead of a single string.

## Source note (Marshall card)

Adjustment aligns presentation with existing variable meanings (`x_i^*`, budget / GRS story) already in `mikro1` chapter data; no new economic claims beyond the prior card.
