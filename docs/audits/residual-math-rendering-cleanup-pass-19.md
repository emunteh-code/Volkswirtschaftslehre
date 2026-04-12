# Residual math-rendering cleanup — pass 19

## Failure classes addressed

### A — Mixed/broken comparison and implication lines (semantic + MathJax)

**Symptoms:** Visible raw `\implies`, raw `H_0` / underscore syntax, or prose/math hybrids (e.g. comparison lines beside Aufgaben steps reading as broken TeX or garbled words).

**Root cause 1 — `semanticContent.js`:** Undelimited `eq` strings that contained both `\text{...}` and real LaTeX (`\implies`, `\mu`, subscripts, `\frac`, …) were classified as “text-dominated LaTeX”. `parseTextDominatedLatex` always fell through to `schemaPhrase(normalizePlainSchemaText(...))`. That path strips some TeX but **not** `\implies`, then HTML-escapes the remainder into schema “pills”, so students saw broken hybrids instead of one MathJax line.

**Root cause 2 — `statistik/js/data/chapters.js`:** Many `steps[].text` labels used normal template literals (`` `...` ``) while embedding inline math. In JavaScript, sequences such as `\notin` (newline + `otin`), `\text` (tab + `ext`), `\alpha` → `alpha`, `\%` → `%`, `\Phi` → `Phi`, `\ldots` → `ldots`, and `\implies` → `implies` are interpreted as **string escapes**, not LaTeX. That produced the “t … otin K” class of defects and mangled percent / Phi / vdots in labels.

### B — Compact numeric result chips (e.g. `5 / 2 = 2{,}5`)

**Symptoms:** One short result rendered as multiple connector-split schema tokens instead of a single expression.

**Root cause:** `parseLegacyString` treated strings without `$`/`$$` and without `\` as “plain schema” when `PLAIN_CONNECTOR_PATTERN` matched (`/`, `=`, etc.). TeX German decimals `{,}` have **no** backslash, so lines like `5 / 2 = 2{,}5` were split into chips.

## Fixes (shared vs module-local)

| Layer | Change | Scope |
|--------|--------|--------|
| **Shared** | `shouldCoerceUndelimitedTexMathBlock`: if the string has TeX `{,}` decimal markers, no `\\`, and comparison/arithmetic symbols (`=`, `/`, `<`, `>`, `≠`, `≤`, `≥`, `≈`, `±`, `∓`), return a single `$$…$$` math block. | All modules using `renderSemanticBlock` / `normalizeDisplayContent` |
| **Shared** | `parseTextDominatedLatex`: after stripping `\text`/`\mathrm`/`\operatorname` blocks, strip common thin-space TeX (`\,` `\;` `\!` `\quad`/`\qquad`); if any `\` remains, return `null` so the line becomes **full MathJax** (`$$…$$`). | Same |
| **Shared** | `normalizePlainSchemaText`: map `\implies`, `\iff` to Unicode arrows for any remaining plain/schema normalization. | Same |
| **Shared** | `CONNECTOR_MAP` + `hasSemanticArrowSyntax`: treat `\implies` / `\iff` like other arrow commands. | Same |
| **Module-local** | `statistik/js/data/chapters.js`: wrap affected `steps[].text` (and one Prüfungstransfer-style label) in `String.raw\`…\`` so LaTeX backslashes survive in the JS source. | Statistik |
| **Module-local** | `mikro2/js/data/chapters.js`: all `{ text: \`…\`` → `{ text: String.raw\`…\`` for step labels (no `${` interpolation in file). | Mikro II |
| **Module-local** | `mikro1/js/data/chapters.js`: one step label with `$\alpha$` converted to `String.raw`. | Mikro I |

## Files touched

- `assets/js/portal-core/ui/semanticContent.js` — shared parsing/rendering contract (primary fix).
- `statistik/js/data/chapters.js` — template-literal / inline-math label corrections.
- `mikro2/js/data/chapters.js` — systematic `String.raw` on step `text` fields.
- `mikro1/js/data/chapters.js` — single `\alpha` label fix.
- `docs/audits/residual-math-rendering-cleanup-pass-19.md` — this note.

## Browser verification

Not run in this environment (no automated browser session). **Suggested manual checks:**

1. Statistik → Hypothesentests (or t-Test) Aufgabe: linkssitiger Lohn-Test — step “Vergleich … $t \notin K$” and reveal `eq` with `\implies` / `H_0` / `\text{…}` render as proper MathJax; no raw `\implies` or `H_0` in HTML text nodes from that `eq`.
2. Same module: t-Wert Aufgabe with step `5 / 2 = 2{,}5` — one calm math line, not multiple chips.
3. Another Statistik reveal with `\Phi` or `\%` in the **step label** — confirm `\Phi` and `\%` appear correctly.
4. Ökonometrie: spot-check a reveal that uses `renderSemanticBlock` on mixed lines (no data edits in this pass).
5. Mikro2: any step whose **text** contained `$…\implies…$` — implication arrow inside math should display correctly.

## Honest outliers / follow-ups

- Other modules may still use `` `...$\foo$...` `` on step labels; a repo-wide grep for `{ text: \`` plus `\\` outside `String.raw` would catch stragglers. Pass 19 fixed **statistik** thoroughly and **mikro2** wholesale for `text:` steps.
- Content stored in HTML strings (not `eq` / `text` objects) is unchanged; if MathJax is applied there, keep using `$…$` / `$$…$$` as authored.
- Automated visual regression is not in place; a short manual pass after deploy remains the ground truth for MathJax font and line breaks.

## Relation to source materials

Pass 19 is **pipeline and JS-string correctness** only; no academic wording or statistical claims were intentionally changed (only rendering-safe `String.raw` wrappers and the shared parser).
