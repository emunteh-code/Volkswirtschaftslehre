# Nested answer-card flattening — Pass 50

## Anti-pattern (source)

1. **Revealed answers** use `renderQuestionCard` in `assets/js/portal-core/ui/renderer.js`: outer **`problem-card`**, then **`.solution-block`** / **`.exam-drill-answer`** (Pass 44 removed their outer “second card” chrome).
2. Inside that, **guided steps** put **`renderTaskMathBlock`** output (**`.math-block`**) directly under **`.step-body`**. Global **`#content .math-block`** still carried **large padding** and (from module CSS) could read as a **nested framed slab** on top of the step row.
3. **Prüfungstransfer** rows use **`.exam-drill-line`** with **`result-badge`** or **`.math-block`** / **semantic** formula output as **direct children**: the **badge** or **math block** acted as a **second bordered capsule** inside the row’s visual stack (“answer inside answer box”).
4. **Mikro I / Ökonometrie** wrapped drill HTML in an extra **`<div class="exam-drill-solution">`** around `drill.answer` (portal-core **does not** use that wrapper), adding **DOM depth** and an extra surface that Pass 44 had to flatten with CSS.

## Correction (what changed)

### Shared CSS — `assets/css/premium-refinement.css` (Pass 50 tail)

Scoped to **`#content`** inside revealed answers only:

| Selector scope | Effect |
|----------------|--------|
| **`.solution-block .step-body`** direct **`.math-block` / `[class*="math-block"]` / `.semantic-display`** | Remove inner **border / background / heavy padding / radius**; keep content readable with **tight vertical padding** and **start** alignment. |
| **`.exam-drill-answer`** **`.exam-drill-steps > li`**, **`.exam-drill-line`**, **`.exam-drill-copy`** with same inner roots | Same flattening for **Prüfungstransfer** step lists and lines. |
| **`.exam-drill-line > .result-badge`** | **Single-line answer emphasis**: no chip border/background; **body** face, **semibold** text. |

**Out of scope (unchanged):** Theorie **`.math-block`**, **Formeln** tab, **Intuition** anchors, **right rail**.

### Markup — Mikro I / Ökonometrie only

- **`mikro1/js/ui/renderer.js`** — `renderExamDrillDeck`: removed wrapping **`<div class="exam-drill-solution">…</div>`** so drill markup matches **portal-core** (answer lines live directly under **`.solution-block.exam-drill-answer`**).
- **`oekonometrie/js/ui/renderer.js`** — same.

**No** change to drill **copy**, **steps**, **reveal** handlers, or **`buildExamDrills`** / **`buildExamDrills`** data.

## Shared vs module-local

| Layer | Role |
|--------|------|
| **Pass 50 CSS** | **Project-wide** for any module loading `premium-refinement.css` (Recht, Mathematik, Statistik, Mikro1, Makro*, Finanzwirtschaft, Jahresabschluss, IWB, …). |
| **Wrapper removal** | **Module-local** — only Mikro I and Ökonometrie duplicated the extra wrapper; other modules already used shared `renderExamDrillDeck` from portal-core. |

## Browser verification notes

**Not run in the agent environment.** Suggested checks:

1. **Recht** — Aufgaben or Prüfungstransfer: reveal a row with **math** or **result-badge**; confirm **no** nested bordered chip inside the step/line.
2. **Mathematik** — same pattern via portal renderer.
3. **Mikro I** — Prüfungstransfer card: no redundant **`.exam-drill-solution`** frame; inner math/badge reads as **one** answer layer.
4. **True math elsewhere** (e.g. Theorie body): **unchanged** (selectors require **`.solution-block`** / **`.exam-drill-answer`**).

## Completion

- **One** answer presentation layer per step/line: row rhythm + typography; **no** second framed **`.math-block` / `.result-badge`** inside it.
- **Mikro I / Ökonometrie** drill markup aligned with portal (no extra solution wrapper).
