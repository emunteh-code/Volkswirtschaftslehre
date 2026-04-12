# Semantic anchor typography alignment — Pass 28

## Root cause

Semantic statements (Heckscher–Ohlin style anchors such as **„H exportiert das K-intensive Gut“**) are rendered by the shared **`renderSemanticBlock`** pipeline in `assets/js/portal-core/ui/semanticContent.js` into a root node with classes **`semantic-display`**, **`semantic-schema`** / **`semantic-reference`**, and inner **`semantic-schema__item`** / **`semantic-reference__term`**.

Those nodes often sit inside **`.formula-card .f-eq`**. Many module stylesheets (e.g. **`internationale-wirtschaftsbeziehungen/css/styles.css`**) set **`.formula-card .f-eq { font-family: var(--font-mono); … }`** so that **MathJax** and raw equation strings match the math rail. **Semantic HTML inherits that monospace stack**, so anchor text looked **code-like** and out of line with body copy—even though Pass 4.1 already styled chips (weight, borders) for `.semantic-schema__item`.

No JavaScript or content change was required; the mismatch was **cascade inheritance**, not the semantic parser.

## Fix (shared)

**File:** `assets/css/premium-refinement.css` (loaded after module `styles.css` on portals that include it).

Added **Pass 28** rules that:

1. Set **`font-family: var(--font-body, …)`** and **`letter-spacing: normal`** on **`#content .semantic-display`**, **`#rightPanel .semantic-display`**, and intuition callouts so semantic blocks default to the **reading face** wherever they appear.
2. Inside **`#content .f-eq`** / **`#rightPanel .rp-f-eq`**, set semantic roots to **weight 500**, **line-height 1.45**.
3. For **formula-card** semantic anchors (**`semantic-display--pres-anchor`** + phrase or pill): **18px** ( **16px** on **`layout-compact`** ); **reference stacks** and **bridge / contrast** presets use **16px** so multi-line cards stay balanced.
4. Force **`semantic-schema__item`**, **`semantic-reference__term`**, **`semantic-reference__note`** under **`#content .formula-card .f-eq`** to **`font-family: inherit`** so they take the body face from the semantic root, with **text-forward colours** (mostly **`var(--text)`** with a slight **`math-ink`** mix); connectors keep existing **math-ink** styling elsewhere in the file.
5. **Right rail** (`.rp-f-eq`): slightly smaller (**14–15px**) for compact sidebar use.
6. **`legal-schema`** inside **`#content .formula-card .f-eq`** gets the same **body** + **`legal-schema__term`** **inherit** treatment (parallel editorial pattern in some modules).

**`body[data-portal-module="jahresabschluss"]`** rules from Pass 14 remain **more specific** where they apply and continue to govern Jahresabschluss-specific minimal chrome.

## Shared vs module-local

- **Shared:** `assets/css/premium-refinement.css` only.
- **Module-local:** none.

## Browser verification notes

Not run in a headed browser in this pass. Suggested checks:

1. **Internationale Wirtschaftsbeziehungen** — concept with the **„H exportiert das K-intensive Gut“** (or equivalent) **schema** card in the Formeln grid: anchor line uses **Syne/body stack**, not mono; **~18px**, **600** weight, calm line height.
2. Second **semantic** card in the same module (bridge / multi-entry if present).
3. **Finanzwirtschaft** or **Recht** — confirm **right-panel** formula semantic line is readable at **14–15px** without mono.
4. **Jahresabschluss** — confirm existing Pass 14 typography still looks as intended (no regression).

## Completion

Semantic anchor zones are **unchanged** in structure; only **typography and colour weighting** align with the portal **reading** language instead of the **equation** language.
