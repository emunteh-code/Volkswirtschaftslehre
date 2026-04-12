# Non-math formula unification and semantic-card standardization — Pass 30

## Rendering family chosen

**Single system: “Semantic formula card”** — outer shell remains the shared **`formula-card`** grid item with **`formula-card--schema`** / **`formula-card--reference`** (from `getDisplayMode` + `classifyFormulaCardLayout` in `assets/js/portal-core/ui/renderer.js`); the **inner anchor zone** is the existing **`.f-eq`**, restyled as a **calm editorial panel** (rounded neutral surface, body typography, no per-token chips).

### Why this family (pedagogy)

1. **Clarity** — Students already learn “Formeln tab = grid of cards.” Keeping the **same outer card** signals “formal anchor,” while the **inner panel** differentiates semantic content from **MathJax** math without a second component system.
2. **Compression** — One dominant line (Type A), or **structured** chain/contrast (Types B/C), without a row of boxed micro-tokens that read as UI.
3. **Visual calm** — Neutral panel + **selective** math-ink on connectors / legal arrows only; main text stays **`var(--text)`**-weighted.
4. **Scalability** — All non-math shapes already map to **`renderSemanticBlock`** modes (`schema` / `reference`) and presentation hints (`pres-anchor`, `pres-bridge`, `pres-contrast`). CSS aligns those three **siblings** in one family.
5. **Consistency** — One file (`premium-refinement.css`) applies everywhere **`premium-refinement.css`** is linked (all major portals).

**Not chosen:** per-module bespoke card HTML (high drift), or forcing semantic lines into fake `$$…$$` math (wrong pedagogy).

## Inconsistency classes found (pre-pass)

| Drift | Where |
|--------|--------|
| **Chip / pill** `.semantic-schema__item` / `.semantic-reference__entry` defaults (Pass 4.1) | Global base — looked “badge-like” inside **`.f-eq`** when parent used **monospace** (module `.formula-card .f-eq`). |
| **Jahresabschluss-only** calm editorial rules | `body[data-portal-module="jahresabschluss"]` block — **recht / IWB** never received the same treatment. |
| **IWB / recht** module `styles.css` | `.formula-card .f-eq { font-family: var(--font-mono) }` — semantic anchors **inherited** code-like typography. |
| **Right rail** | Jahresabschluss had extra `#rightPanel` rules; other modules did not share the same de-chipped rail grammar. |

## Files changed

| File | Change |
|------|--------|
| `assets/css/premium-refinement.css` | Added **Pass 30** (~360 lines): unified **`.formula-card--schema` / `--reference`** label, description, **`.f-eq` inner panel**, de-chipped **semantic / legal-schema** content, **Types A/B/C** (anchor phrase, reference stack/pill, bridge chain, contrast stack), **global intuition-callout-body** mirror for the same three types, **project-wide `#rightPanel`** rules for `--schema` / `--reference`, responsive padding; **replaced** the old Jahresabschluss-only formula-card semantic block with **Pass 14 (residual)** (math `.f-eq` body font + theory **section-block** `legal-schema` only). |

**Renderer / JS:** unchanged — `renderSemanticBlock` + `formula-card--{mode}` already encode the right content model; unification is **presentation-layer**.

## Modules normalized

Any module loading **`premium-refinement.css`** after local `styles.css` picks up Pass 30, including at minimum:

- `internationale-wirtschaftsbeziehungen`
- `jahresabschluss`
- `recht`
- `finanzwirtschaft`, `makro1`, `makro2`, `mikro1`, `mikro2`, `statistik`, `oekonometrie`, `mathematik`, … (same shared CSS contract)

**`formula-card--math`** is explicitly **out of scope** for Pass 30 (MathJax and mono-friendly `.f-eq` behavior preserved). **Jahresabschluss** still sets **`formula-card--math .f-eq`** to **body** font where HGB lines mix text and math (residual hook).

## Browser verification notes

Not run in a headed browser in this pass. Suggested order:

1. **IWB** — one **schema** anchor card (e.g. Heckscher–Ohlin style line).
2. **Jahresabschluss** — one **schema** / **reference** card (paired Δ rows if present).
3. **Recht** — one **reference** / **schema** card (§-style anchor).
4. Paired **contrast** (`pres-contrast`) and short **chain** (`pres-bridge`).
5. **Mikro1** (or other) — a **`formula-card--math`** page: confirm **MathJax** unchanged.
6. **Right panel** on a non-Formeln tab — schema/reference line compact and readable.

## Honest outliers

- **Theorie / misc. HTML** that uses **`.semantic-schema` / `.legal-schema` outside `.f-eq`** still follows the older **Pass 4.1 chip** styling unless further scoped — Pass 30 targets **formula cards**, **intuition callouts**, and the **right rail** semantic modes only.
- Modules **without** `premium-refinement.css` would not get Pass 30 (none of the three target modules are in that state).

## Completion checklist

- **recht / jahresabschluss / IWB** share one **semantic-formula** visual grammar for **`--schema` / `--reference`** cards.
- Non-math anchors are **not** presented as code chips inside the inner panel.
- **Math** cards not regressed by this pass (no selectors on `formula-card--math` except the pre-existing Jahresabschluss residual).
