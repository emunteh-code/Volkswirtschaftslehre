# Semantic chain nested-surface flattening — Pass 52

## Source of the nested “card in card” look

1. **Pass 4.1** (`assets/css/premium-refinement.css`) applies a **tinted framed slab** to **`.semantic-schema`** and **`.semantic-reference`** globally (padding, `surface2`/`card` mix background, border with **math-ink** tint — reads purple/pink).

2. **`renderSchemaContent`** / **`renderReferenceContent`** in `assets/js/portal-core/ui/semanticContent.js` emit **one root `div`** whose `class` list **includes both** `semantic-display` **and** `semantic-schema` / `semantic-reference` (e.g. `semantic-display--theory semantic-schema semantic-schema--chain`).

3. In the **Formeln** tab, **Pass 30** rules already neutralize the outer slab for `formula-card--schema|reference` chain/bridge roots. In **Theorie**, pre-rendered HTML (e.g. **Recht** / **Finanzwirtschaft** `chapters.js` using `renderSemanticBlock(..., { variant: 'theory' })`) keeps **`.semantic-display--theory`** on that same root, so the **Pass 4.1** slab still applied → **nested panel** inside the theory **`.section-block`**.

4. **Jahresabschluss** **Pass 14** (`body[data-portal-module="jahresabschluss"] #content .section-block .legal-schema`) **re-stated** a padded, rounded, bordered **legal chain** shell — same anti-pattern for **Obersatz → …** style strips.

## Correction (Pass 52)

**File:** `assets/css/premium-refinement.css` (tail block after Pass 50).

| Target | Change |
|--------|--------|
| **`#content .semantic-display--theory`** + **`.semantic-schema--chain` / `--phrase`** or **`.semantic-reference`** | **Outer shell removed:** `padding`/`border`/`background`/`box-shadow` cleared with `!important` where needed; **flex/grid** layout kept for row flow and reference stacks/pills. |
| **`body.light-mode`** same roots | Transparent background, no border. |
| **`#content .section-block .legal-schema`** | Same flattening + **flex** row wrap; **overrides** Jahresabschluss Pass 14 slab (later cascade). |

**Unchanged:** Inner **`.semantic-schema__item`**, **`.legal-schema__term`**, connectors, **Formeln** card rules, **right rail**, **Intuition** (uses `semantic-display--formula` etc., not `--theory` on those surfaces).

## Shared vs module-local

**Shared CSS only** — any module with theory HTML using **`variant: 'theory'`** or **`.section-block .legal-schema`** benefits. **No** renderer or content edits.

## Browser verification notes

**Not run in the agent environment.** Suggested checks:

1. **Recht** — Theorie: one **chain** (`Obersatz → …`) — no extra tinted outer box; chips/arrows still clear.
2. **Jahresabschluss** — same + **legal-schema** strip.
3. **Finanzwirtschaft** — theory semantic block if present.
4. **Formeln** semantic card — confirm **unchanged** (selectors are **theory** + **section legal** only).

## Completion

Semantic **chains** / **legal strips** in theory read as **one integrated row** in the parent card, not a **second nested card**.
