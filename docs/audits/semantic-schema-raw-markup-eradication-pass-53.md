# Semantic Schema Raw-Markup Eradication — Pass 53

## Executive summary

Student-visible fragments such as `"legal-schema__term">`, `"legal-schema__op">+`, and `"legal-schema__arrow" aria-hidden="true">` came from **module-local HTML string assembly** in Jahresabschluss theory content (`mathBlock` → `renderSemanticSchema`), which injected **unescaped** `<span class="legal-schema__…">` markup into theory HTML. Any surface that later treated that HTML as **plain text** (escaping, previews, or parser edge cases) could expose class names and attributes as literal text.

Pass 53 **removes that path** and routes Jahresabschluss theory blocks through the **shared** `renderSemanticBlock` pipeline. A shared parser adjustment ensures typical **single-clause** `\text{…} \Rightarrow \text{…}` chains normalize to a **schema chain** (connectors `+`, `⇒`) instead of being misclassified as a **reference** pair, so the UI shows a clean semantic chain without relying on hand-built HTML.

## Root cause (exact)

| # | Hypothesis from brief | Verdict |
|---|------------------------|---------|
| 1 | Broken string templating | **Partially**: local regex HTML assembly was fragile but not the only issue. |
| 2 | Escaped HTML inserted as plain text | **Possible downstream symptom** if HTML was re-escaped; primary fix is to **stop emitting raw implementation HTML** for this content. |
| 3 | Partial migration old/new class names | **Yes** in effect: Jahresabschluss used **`legal-schema__*`** hand-strings while the platform standard is **`semantic-schema__*`** via `semanticContent.js`. |
| 4 | Content path bypassing cleaned renderer | **Yes**: Jahresabschluss `chapters.js` used a **local** `mathBlock` instead of `renderSemanticBlock`. |
| 5 | Content strings with literal pseudo-markup | **No** for the § 252 case: content was LaTeX-style `\text{}` + `\Rightarrow`, not literal `<span>`. |
| 6 | innerText vs innerHTML | **Not primary** for main theory column (`innerHTML` is used in `createRenderer`). Escaping/plain-text surfaces remain safer with **structured** schema output (`escapeHtml` on terms in shared renderer). |
| 7 | Fallback theory/intuition | **Secondary**: intuition excerpts use `textContent` of the **first `<p>`** only; they never included the schema div. The main failure was **theory** construction. |
| 8 | Data vs renderer | **Renderer/module split**: data was fine; the **Jahresabschluss-specific HTML emitter** was the defect.

**Failing path (screenshot case):** `jahresabschluss/js/data/chapters.js` → `gob_rechtsgrundlagen` theory section → `mathBlock(String.raw\`\text{§ 252 HGB: Vorsicht + Realisation} \Rightarrow \text{asymmetrischer Erfolgsausweis}\`)` → previously **local** `renderSemanticSchema` emitting `.legal-schema__*` spans inside `.legal-schema`.

## Fix (what changed)

### 1. Shared semantic parser (`assets/js/portal-core/ui/semanticContent.js`)

- Added **`parsePlainConnectorSplitSchema`**: for a **single** semantic clause (after `splitSemanticClauses`), if `splitPlainSchemaParts` yields at least two **terms** separated by **connectors** (e.g. `+`, `⇒`), return **`schemaSequence`**.
- Invoked this **before** `parseArrowReferenceMappings` inside `parseLegacyString`, so strings like `§ 252 HGB: Vorsicht + Realisation ⇒ asymmetrischer Erfolgsausweis` (normalized from LaTeX) become a **schema chain**, not a **reference** stack.

**Why:** `parseArrowReferenceMappings` treated any `A ⇒ B` as a **term + note** reference, which hid the intended **multi-step** reading (Vorsicht **+** Realisation **⇒** Ausweis) and interacted poorly with the goal of one consistent semantic representation.

### 2. Jahresabschluss content module (`jahresabschluss/js/data/chapters.js`)

- Removed the **local** `isSemanticSchema` / `renderSemanticSchema` / delimiter-only `mathBlock` implementation.
- **`mathBlock`** is now `(content) => renderSemanticBlock(content, { variant: 'theory' })` (same pattern as Finanzwirtschaft).
- **Bilanzgleichung** theory line: wrapped with **`mathContent(...)`** so it stays **`mode: math`** and continues to typeset with **MathJax** (avoids coercion of that delimited `\text{…}` block to a plain schema phrase).

**Why:** Eliminates all **`legal-schema__*`** string emission from this module; semantic chains use the shared **escaped** term rendering.

## Shared vs module-local

| Layer | Role |
|-------|------|
| **Shared** | `parsePlainConnectorSplitSchema` + existing `renderSemanticBlock` / `escapeHtml` on schema terms — **project-wide** benefit for legacy `\text{}` chains that normalize to plain Unicode connectors. |
| **Module-local** | Jahresabschluss `chapters.js` only: drop local HTML emitter; **`mathContent`** only for the one Bilanz **delimited** line. |

## Files changed

- `assets/js/portal-core/ui/semanticContent.js` — `parsePlainConnectorSplitSchema`, `parseLegacyString` ordering.
- `jahresabschluss/js/data/chapters.js` — import `mathContent` / `renderSemanticBlock`; `mathBlock` implementation; Bilanz line uses `mathContent`.
- `docs/audits/semantic-schema-raw-markup-eradication-pass-53.md` — this audit.

## Verification

### Automated (Node, `normalizeDisplayContent` / `renderSemanticBlock`)

- **§ 252 HGB chain (undelimited LaTeX):** `mode: "schema"`, `layout: "chain"`, five parts (Vorsicht, `+`, Realisation, `⇒`, asymmetrischer Erfolgsausweis); rendered HTML **does not** contain `legal-schema`.
- **Bilanz with `mathContent`:** `mode: "math"` with preserved `$$…$$` delimiters.
- **AfA linear:** remains `mode: "math"` with `\frac`.

### Browser (manual — recommended)

Host the Jahresabschluss portal locally, open **GoB und Rechtsgrundlagen** → **Theorie**:

1. **Screenshot case:** confirm a **horizontal semantic chain** (no `legal-schema__*`, no `aria-hidden` as visible text, no quoted markup fragments).
2. **Second Jahresabschluss block:** e.g. **Einführung** Bilanzgleichung — still **MathJax**-typeset, readable.
3. **Another module (shared path):** e.g. **Finanzwirtschaft** or **Recht** theory/schema line that still uses string or `schema()` data — unchanged architecture; optional spot-check after parser reorder.
4. **True math:** Jahresabschluss concept with **AfA linear** (`\frac`) — formulas tab or theory embed — confirm MathJax still runs and fractions render.

Explicit grep after change: **no** `legal-schema__term` / `legal-schema__op` / `legal-schema__arrow` in `*.js` sources (styling in `premium-refinement.css` may still mention class names in **selectors** only; that does not affect visible text).

## Remaining outliers / risks

- **Single-clause `A ⇒ B` without inner `+`:** now tends to **schema chain** (`A`, `⇒`, `B`) instead of **reference** (`term` / `note` stack). This is a **presentation** preference change where both were already student-safe; if a specific legal card must stay “reference stack”, encode it as **`referenceList([{ term, note }])`** in module data.
- **MathJax + `$` inside a schema term:** rare in German accounting strings; if introduced, MathJax inline `$` rules could still fire — shared schema uses `escapeHtml` on terms but `$` remains a character; mitigation is to avoid raw `$` in schema text or use math mode for that line.

## Completion

Pass 53 is **complete** for: eradicating **Jahresabschluss-local** `legal-schema__*` HTML generation, routing theory **mathBlock** through the **shared** semantic renderer, and aligning the **§ 252** chain with a **clean schema chain** via shared parsing plus optional **`mathContent`** for one delimited Bilanz line.
