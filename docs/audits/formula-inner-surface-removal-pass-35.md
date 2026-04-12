# Formula inner surface removal — pass 35

## Problem

Math formula presentation showed a **second neutral “card”** inside the outer formula shell: a grey / surface-tinted panel with its own border and inset shadow behind the MathJax line. That **double-boxed** the math relative to the intended single outer `formula-card` (and the same pattern on the right rail inside `rp-f-eq`).

## Root cause (exact source)

### Main content (`#content`)

1. **`#content .formula-card .f-eq`** in `assets/css/premium-refinement.css` (shared “premium” block) set:
   - `background: linear-gradient(... var(--surface2) ...)`
   - `border: 1px solid color-mix(... var(--math-ink) ...)`
   - `box-shadow: inset 0 1px 0 ...`
   - `border-radius: 16px`  
   This applied to **all** formula cards, including **`formula-card--math`**.

2. **`.math-block--formula-card`** inside `.f-eq` was already reset to **transparent** and `border: none` via `#content .formula-card .f-eq > .math-block--formula-card`, so the **visible grey inset was the `.f-eq` wrapper**, not the MathJax root.

### Right rail (`#rightPanel`)

1. **`#rightPanel .rp-formula .rp-f-eq`** set `background: color-mix(... var(--surface2) ...)`, border, and radius for **all** modes, including **`rp-formula--math`**.

2. **`.math-block--sidebar`** was already flattened (transparent, no border) via `#rightPanel .rp-formula .rp-f-eq > .math-block--sidebar`; the **grey box was again `.rp-f-eq`**, not the math wrapper.

### Module CSS

Module files (e.g. `jahresabschluss/css/styles.css`, tail of `statistik/css/styles.css`) sometimes repeat `.formula-card .f-eq` backgrounds with **lower specificity** than `#content .formula-card .f-eq` when `premium-refinement.css` loads after module `styles.css`, so the **canonical source of the nested look** for portals using the shared stack is **`premium-refinement.css`**.

## Fix (shared vs module-local)

**Shared only:** `assets/css/premium-refinement.css` — new **PASS 35** block placed **after** the existing `#content .formula-card .f-eq > .math-block--formula-card` rules so overrides win in source order.

**Not changed:** Semantic / reference formula inner panels (`formula-card--schema` / `--reference`, Pass 30; right-rail Pass 31+32 and Recht Pass 37) — those **intentionally** keep an inner semantic surface.

## What changed (exact rules)

| Target | Before (effect) | After |
|--------|------------------|--------|
| `#content .formula-card.formula-card--math .f-eq` | Grey gradient + framed inner panel | `background: transparent`, `border: none`, `box-shadow: none`, `border-radius: 0` |
| `#content … .math-block--formula-card` | Fully flat (no rail) | **Slim magenta left rail** + padding: `border-left: 3px solid var(--math-ink-deep, var(--math-ink))`, `padding: 6px 0 10px 14px`, transparent |
| `#rightPanel .rp-formula.rp-formula--math .rp-f-eq` | Grey inner panel | Transparent, no border/shadow/radius |
| `#rightPanel … .math-block--sidebar` (math only) | Flat, no emphasis | **Left rail** `2px` math-tinted + `padding: 4px 0 8px 12px` |

**Preserved:** Outer `#content .formula-card` and `#rightPanel .rp-formula` shells, spacing from existing `.f-eq` / layout padding, magenta **text** treatment on `.f-eq` / `.rp-f-eq`, MathJax markup and typesetting (no JS changes).

## Files changed

- `assets/css/premium-refinement.css` — PASS 35 block + Pass 31 comment update (math rail wording).
- `docs/audits/formula-inner-surface-removal-pass-35.md` — this audit.

## Browser verification notes

Manual checks (local static server or deployed build):

1. **Main grid — math:** Open any module **Formeln** tab with a **math** formula card (e.g. Statistik). Confirm the **inner grey rounded rectangle behind the equation is gone**; the equation should read on the **outer card** with a **thin magenta vertical bar** to the left of the math strip (not a full inner card).
2. **Right rail — math:** Open a chapter with a **math** right-rail formula. Confirm **`.rp-f-eq` is no longer a grey inset**; outer `rp-formula` card remains.
3. **Control — semantic:** Open a **schema/reference** formula (e.g. Recht semantic rail or main semantic card). Confirm the **inner semantic panel** is **unchanged** (still deliberately inset for readability).
4. **Alignment:** Math should still **center** where `layout-compact` applies; no clipping of wide equations.

No automated screenshot diff was run in this pass.
