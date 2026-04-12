# Semantic Anchor And Empty Formula Rendering Closure Pass 13

## Scope

Project-wide closure for trust-critical student-visible failures: empty magenta formula shells, raw `\text{...}` / `\rightarrow` in the wrong surface, pseudo-math splitting of real display equations, and bogus “reference” parses for accounting-style strings.

## Failure Classes Found

### 1. Display math mistaken for plain-language schema

**Symptom:** Formula cards or task surfaces showed a semantic chain with `$$` embedded in term chips (for example `$$Jahresergebnis` … `Aufwendungen$$`), or MathJax never ran because content was no longer valid TeX.

**Root cause:** `parseLegacyString` treated any string **without a backslash** as eligible for `PLAIN_CONNECTOR_PATTERN` splitting. Delimited display math `$$…$$` contains `=` and `-` but no `\`, so it was split into a fake schema instead of `{ mode: "math" }`.

### 2. False “leading condition” reference parse

**Symptom:** Strings such as `\text{Bilanzwert} = \min(AK,\ …)` became a two-column reference with LaTeX residue in the term/note columns instead of one readable semantic line.

**Root cause:** `parseLeadingConditionNote` matched `=` + following token in ways that fit accounting “equals + explanation” strings, and it ran **before** `parseDelimitedReferencePairs` / final `schemaPhrase` fallback in `parseTextDominatedLatex`, so it short-circuited with a wrong structure.

### 3. Text-heavy LaTeX pushed to MathJax and failing visually

**Symptom:** Empty or broken magenta MathJax output for `\text{…} = \min(…)` style anchors (invalid or fragile TeX after `\text` + `\min`).

**Root cause:** `isTextDominatedLatex` treated `\min` / `\max` as “heavy math” and excluded the whole string from the text-dominated semantic path, so the legacy parser fell through to raw MathJax wrapping.

### 4. Residual LaTeX spacing in semantic plain text

**Symptom:** Visible backslash-space pairs (`\ `) in schema phrases after normalization.

**Root cause:** `normalizePlainSchemaText` did not collapse TeX spacing commands such as `\,` / `\ ` after other replacements.

### 5. Empty or meaningless blocks still wrapped as math / schema

**Symptom:** Empty `mjx` shells or empty semantic wrappers in reveals and rails.

**Root cause:** Missing guards at render time and missing filtering of empty schema parts / reference entries in `normalizeDisplayContent`.

## Resolution

### Shared renderer / contract (`semanticContent.js`)

1. **Delimited math short-circuit** at the start of `parseLegacyString`: if `isDelimitedMath`, return real `{ mode: "math" }` unless the inner content is clearly semantic-only (`isPureSemanticLatex` / `isTextDominatedLatex` + successful non-math parse). This stops `=` / `-` connector splitting on `$$…$$`.

2. **`parseLeadingConditionNote` hardening:** reject inputs with backslashes; reject function-call patterns after `=` (`min(`, `max(`, etc.) so accounting equalities are not parsed as term/note references.

3. **`parseTextDominatedLatex` fallback order:** run `parseDelimitedReferencePairs` before `parseLeadingConditionNote` to avoid the wrong short-circuit.

4. **`isTextDominatedLatex`:** stop treating `\min` / `\max` as disqualifiers so `\text{…} = \min(…)` stays on the semantic normalization path.

5. **`normalizePlainSchemaText`:** add `\min` / `\max` stripping, `\\\s+` collapse for TeX spaces, and `_{…}` subscript flattening for readable German accounting anchors.

6. **`filterMeaningfulSchemaParts`:** drop empty terms, trim leading/trailing lone connectors; return `null` if no terms remain. Applied to both object and legacy string normalization for `schema` and stricter `reference` entry filtering.

7. **`renderSemanticBlock`:** for `math` mode, return an empty string when delimiter-stripped content is whitespace-only (no empty MathJax host).

### Shared portal renderer (`renderer.js`)

1. **`renderFormulaEq` / `renderTaskMathBlock`:** return `""` when `hasMeaningfulDisplayContent` is false (avoids empty magenta / empty step blocks).

2. **Intuition “Formaler Anker”:** show the callout only when `formula.eq` or `formula.desc` is meaningful; description wrapped with `hasMeaningfulText`.

3. **Prüfungstransfer drill blocks:** only emit “Formaler Anker” / “Formale Rückbindung” / “Formel, die du notieren kannst” lines when `hasMeaningfulDisplayContent(formula.eq)`.

4. **Formula tab cards:** wrap `f-eq` in `hasMeaningfulDisplayContent(formula.eq)` before calling `renderSemanticBlock` (defensive; aligns with `hasFormulas`).

## Exact Files Changed

- [assets/js/portal-core/ui/semanticContent.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/semanticContent.js)
- [assets/js/portal-core/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/renderer.js)
- [docs/audits/semantic-anchor-and-empty-formula-rendering-closure-pass-13.md](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/docs/audits/semantic-anchor-and-empty-formula-rendering-closure-pass-13.md) (this document)

## Shared Renderer Changes

Yes. All substantive fixes live in the shared semantic layer and the shared `createRenderer` implementation so every module that uses the portal hub (`jahresabschluss`, `recht`, `finanzwirtschaft`, `statistik`, `oekonometrie`, `mikro1`, `makro1`, `makro2`, `internationale-wirtschaftsbeziehungen`, `mathematik`, etc.) benefits without per-module string hacks.

Module-local `jahresabschluss/js/data/chapters.js` helpers (`mathBlock` / `renderSemanticSchema`) remain for **theorie** HTML authored as strings; those paths already branch semantic HTML vs MathJax for non-delimited pseudo-LaTeX. Pass 13 did not duplicate that into each module because the primary failure mode was in the shared formula / Aufgaben / intuition / Prüfungstransfer pipeline.

## Browser Verification Notes

Automated checks: Node-driven evaluation of `normalizeDisplayContent` / `hasMeaningfulDisplayContent` / `displayContentToPlainText` for representative `jahresabschluss`-style strings (Inventur chain, `$$Jahresergebnis = Erträge - Aufwendungen$$`, `\text{…} = \min(…)`, latent-tax reference, step arrows).

Recommended manual browser smoke (same list as mission):

1. **Jahresabschluss → Formeln:** `inventur_inventar_bilanzansatz`, `umlauf_bewertung_verfahren` (Bilanzwert / min), `gob_rechtsgrundlagen` (Latente Steuern card).
2. **Jahresabschluss → Intuition:** any concept with a formal anchor; confirm no empty magenta when data is thin.
3. **Jahresabschluss → Aufgaben:** reveal steps for `rechnungswesen_intro` (text-only steps).
4. **Another module (e.g. mikro1):** Formeln tab + one Aufgaben reveal to confirm MathJax still runs on true math.
5. **Right rail:** non–formula-tab view with formula chips (shared `rightPanel.js` + `renderSemanticBlock`).

## Remaining Edge Cases (honest)

- **Nested or highly complex TeX** inside `\text{…}` (nested braces, arrays) can still defeat `normalizePlainSchemaText`; such content should be authored as explicit `{ mode: "schema", parts: [...] }` or true `{ mode: "math", latex: "…" }` in data.
- **`jahresabschluss` theory HTML** built with local `mathBlock` / `legal-schema` is outside the shared `parseLegacyString` path; if new theory strings bypass `mathBlock`, regressions are still possible there.
- **Single `$…$` inline** that is not true math but contains `=` could theoretically be misclassified; course data overwhelmingly uses `$$` / bare LaTeX for those cases.

Pass 13 is considered closed for the shared contract and the failure modes above; further gains are mostly data-level explicit `mode` / `parts` authoring for exotic TeX.
