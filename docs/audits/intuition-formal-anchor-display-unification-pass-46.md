# Intuition formal-anchor display unification — Pass 46

## Mismatch pattern observed

- **Symptom:** In the **Intuition** tab, the block labeled **Formaler Anker** read as a large, low-information grey panel: the equation sat in generous padding, the micro-label felt disconnected from the math, and the explanatory sentence under the formula felt visually “below” a slab rather than tied to a compact anchor.
- **Student-facing impact:** Weak focal hierarchy, low density, placeholder-like chrome instead of a tight “intuition → anchor → meaning” stack.

## Root cause

1. **Global math chrome:** `#content .math-block` in `assets/css/premium-refinement.css` applies **`padding: 18px 24px`** (and sizing) to all math blocks in main content. Intuition embeds the anchor inside that same class, so the formula inherited **full theory-style padding** inside an already padded **`.intuition-callout`** shell.
2. **Pass 41:** Removed borders/background on `.math-block` in `#content`, which **correctly** flattened accent frames but left the **large padded footprint**; the outer **`.intuition-callout`** still carried a strong **`surface2`-heavy background** (module CSS), so the whole region read as one big grey field with a small formula in the middle.
3. **Markup:** The callout used a flat **`.intuition-callout-body`** with formula + `<p>` siblings and **no dedicated anchor zone**, so CSS could not shrink the “equation cell” without affecting other `.math-block` uses.

## Fix strategy (display only)

- **Shared markup:** Introduce **`.intuition-callout-anchor`** (formula / semantic output only) and **`.intuition-callout-desc`** on the support paragraph. Omit the anchor wrapper when there is no displayable equation (portal already gates on meaningful `eq` / `desc`).
- **Shared CSS (Pass 46):** Append rules in **`assets/css/premium-refinement.css`** under `#content` so all modules that load premium refinement get one presentation standard: calmer outer callout, **8px** label-to-body rhythm, **10px** anchor-to-explanation gap, anchor zone **`padding: 18px 20px`**, and **scoped overrides** so `.math-block` inside the anchor uses **tight padding** (`!important` to beat the global `#content .math-block` rule).

## Fix scope: shared vs module-local

| Layer | Role |
|--------|------|
| **Shared** | `assets/css/premium-refinement.css` — all modules linking it (e.g. Statistik, Finanzwirtschaft, Recht, …). |
| **Shared** | `assets/js/portal-core/ui/renderer.js` — `renderIntuitionPanel` for portal-based modules. |
| **Module-local** | `mikro1/js/ui/renderer.js`, `oekonometrie/js/ui/renderer.js` — these modules **replace** the intuition panel after the base render via `buildMicroIntuitionPanel`; markup must match portal for the same CSS hooks. |

No equation strings, data, or mathematical meaning were changed.

## Files changed

- `assets/js/portal-core/ui/renderer.js` — conditional **`.intuition-callout-anchor`** + **`.intuition-callout-desc`** in `renderIntuitionPanel`.
- `mikro1/js/ui/renderer.js` — same structure in `buildMicroIntuitionPanel`.
- `oekonometrie/js/ui/renderer.js` — same structure in `buildMicroIntuitionPanel`.
- `assets/css/premium-refinement.css` — **Pass 46** block (`#content .intuition-callout*`, anchor-scoped `.math-block` overrides).

## Browser verification notes

**Not run in the agent environment** (no automated visual regression in repo). Recommended manual checks:

1. **Statistik** — Intuition tab on a concept with `formeln[0]` and a short `desc` (screenshot case): confirm no oversized empty slab; anchor zone height tracks content.
2. **Ökonometrie** — same; confirms `buildMicroIntuitionPanel` path + MathJax in `.math-block`.
3. **One other module** (e.g. **Finanzwirtschaft** or **Makro1**, portal-only renderer): same compact anchor.
4. **Control:** Intuition page **without** a formal anchor (no meaningful first formula): hero and grid unchanged; no empty anchor wrapper.

Checklist: label reads attached to the block; formula area **compact**; explanation **14px / ~1.6** line-height; **no** new colored decorative borders.

## Remaining outliers / risks

- **Semantic (non-LaTeX) anchors** in Intuition still use Pass 30 presentation inside `.intuition-callout-body`; they benefit from the new outer/anchor shell but very tall schema layouts may still dominate vertical space — that is **content structure**, not empty padding from `.math-block`.
- **Module `styles.css`** still defines baseline `.intuition-callout` / `.intuition-callout-body`; `#content` rules in premium are intended to win; if a module ever drops `premium-refinement.css`, the old slab risk returns for that module only.
