# Jahresabschluss Semantic Card Typography And Presentation Correction Pass 14

## Visual failure classes (before)

1. **Monospace / code-like formula strip** — `jahresabschluss/css/styles.css` set `.formula-card .f-eq` and `.rp-formula .rp-f-eq` to `font-family: var(--font-mono)` with strong `math-ink` color. Premium refinements did not override `font-family`, so semantic accounting anchors inherited a technical code surface.

2. **Chip / pill overload** — Shared `.semantic-schema__item` and `.semantic-reference__entry` rules (rounded boxes, borders, math-soft fills) are appropriate for dense portal rails in some modules; in Jahresabschluss formula cards they read as UI tokens rather than editorial anchor lines.

3. **Weak hierarchy** — Card title, anchor zone, and description did not follow a single disciplined scale; semantic chains wrapped as flex “badge rows” without a clear primary reading line.

4. **Magenta-heavy frame** — Semantic cards used the same border emphasis as symbolic math cards, so non-math anchors felt harsher than the rest of the academic UI.

## Root cause

- **Module-local CSS** (`jahresabschluss/css/styles.css`) treated all `f-eq` / `rp-f-eq` surfaces as monospaced math strips.
- **Global semantic styling** (`assets/css/premium-refinement.css`) is chip-forward by default; Jahresabschluss needed a **scoped editorial override** without forking the shared renderer for other modules.

## Exact files changed

| File | Change |
|------|--------|
| [jahresabschluss/index.html](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/jahresabschluss/index.html) | `body` gains `data-portal-module="jahresabschluss"` for scoped premium rules. |
| [jahresabschluss/css/styles.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/jahresabschluss/css/styles.css) | `f-eq` uses `--font-body`; semantic-tinted text color; `.formula-card--math .f-eq` keeps slightly stronger math emphasis; `f-desc` size/line-height nudge; right-rail `rp-f-eq` body font + semantic/math split via `rp-formula--math`. |
| [assets/js/portal-core/ui/semanticContent.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/semanticContent.js) | `inferSemanticPresentationClass` + root classes `semantic-display--pres-anchor`, `--pres-bridge`, `--pres-contrast` on schema/reference blocks for variants `formula-card`, `sidebar`, `formula`, `theory`. |
| [assets/css/premium-refinement.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/css/premium-refinement.css) | Pass 14 block: Jahresabschluss-only overrides for formula cards, intuition callout, theory `legal-schema`, and right rail — typography, de-chipping, calmer borders, connector emphasis only on arrows. |

## Card layouts normalized (presentation classes)

| Class | Intended layout | Typical Jahresabschluss examples |
|-------|-----------------|----------------------------------|
| `semantic-display--pres-anchor` | **Layout A** — one primary anchor line (phrase schema) or one/two reference rows without paired contrast grid | `Jahresergebnis`, `Realisationsprinzip`, `Imparitätsprinzip`, `Kostenart vs. Funktion`, single-line references |
| `semantic-display--pres-bridge` | **Layout C** — editorial inline chain, arrows as selective accent | `Inventur → Inventar → Bilanz`, `Brückenlogik`, `Ansatz → Bewertung`, short two-step chains |
| `semantic-display--pres-contrast` | **Layout B** — stacked contrast rows with divider, not pill pairs | `Latente Steuern (Richtung)`, multi-row `semantic-reference--stack` with ≥ 2 entries |

Math cards (`.formula-card--math`) are unchanged in structure; only body font on the host and existing MathJax rendering inside.

## Typography and presentation rules applied (Jahresabschluss scope)

- **Title (`f-label`):** 12px, uppercase, tracked, `--font-body`, muted–text mix (not math-pink label).
- **Anchor zone:** Phrase anchors ~19px / 500; bridge terms ~18px / 500; connectors use restrained math-ink mix (~45–48%), not full magenta body text.
- **Explanation (`f-desc`):** 14px, line-height 1.65.
- **Contrast rows:** Term ~15px / 600; note ~13.5px / 500, muted.
- **Inner chrome:** Remove pill padding/border/background on terms inside scoped semantic cards; optional light border only on theory `legal-schema` container, not per-token.
- **Outer card:** Softer border mix on `formula-card--schema` / `--reference` for Jahresabschluss.

## Shared renderer involvement

Presentation hints are emitted by the **shared** `renderSchemaContent` / `renderReferenceContent` helpers as extra BEM classes. **Styling is limited to** `body[data-portal-module="jahresabschluss"]` so other modules keep existing semantic-chip language unless they adopt the same `data-portal-module` pattern.

## Browser verification notes

Not run in-browser in this pass. Recommended checks:

1. **Jahresergebnis** (math) — still centered math, body font on shell, no monospace shell.
2. **Kostenart vs. Funktion** — single anchor line, no pill cluster.
3. **Brückenlogik** — chain reads as one calm line with arrow accents.
4. **Aktivkonto / Passivkonto** — two cards, phrase layout, editorial type.
5. **Realisationsprinzip / Imparitätsprinzip** — phrase anchors, 19px line.
6. **Latente Steuern (Richtung)** — two contrast rows, dividers, no entry-level pills.

Also verify **right rail** formulas (non–Formeln tab) and one **theorie** block that still uses `legal-schema` HTML from `chapters.js`.

## Remaining outliers

- **Aufgaben step** surfaces use variant `task`, which does not receive `pres-*` classes; steps can still use global chip styling if steps contain schema — acceptable unless product asks for parity.
- **Very long single-line phrases** (e.g. long GKV/UKV merksatz) rely on `overflow-wrap`; narrow viewports may wrap heavily — editorially fine.
- Other modules keep default semantic chip styling; if they should match Jahresabschluss, reuse `data-portal-module` + copy the scoped block or promote a shared “editorial semantic” token later.
