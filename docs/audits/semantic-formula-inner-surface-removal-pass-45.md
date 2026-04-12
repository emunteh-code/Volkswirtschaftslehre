# Semantic formula inner surface removal — pass 45

## Problem

**Text-based semantic** formula cards (`formula-card--schema` / `--reference`, right-rail `rp-formula--schema` / `--reference`) showed a **second neutral “slab”** inside the outer card: `.f-eq` / `.rp-f-eq` used `background: color-mix(... var(--surface2) …)` plus **border** and **radius**, so chains like `Inventur → Inventar → Bilanz` sat inside an **inner grey inset** — the same **card-in-card** problem as math (Pass 35) but for semantic content.

## Root cause (exact)

| Layer | File | Selector | Mechanism |
|-------|------|----------|-----------|
| Main grid semantic inner | `assets/css/premium-refinement.css` | **Pass 30** `#content .formula-card.formula-card--schema\|.reference .f-eq` | `background: color-mix(... surface2 …)`, **border**, **13px radius** |
| Right-rail semantic inner | Same | **Pass 31+32** `#rightPanel .rp-formula.rp-formula--schema\|.reference .rp-f-eq` | **Surface2/card mix** background, **border**, **10px radius** |
| Light rail | Same | `body.light-mode #rightPanel … .rp-f-eq` | Light-tinted **inner** fill |
| Module sizing | Same | Recht **Pass 37** `body[data-portal-module="recht"] … .rp-f-eq` | `border-radius: 8px !important` (could keep a “panel” read even if colourless) |

Outer shells (`#content .formula-card…`, `#rightPanel .rp-formula.rp-formula--schema` outer row) were already neutral or transparent; the **inner** `.f-eq` / `.rp-f-eq` was the redundant frame.

## Fix (shared)

**File:** `assets/css/premium-refinement.css` only.

1. **Pass 30** — set semantic `.f-eq` to **`background: transparent`**, **`border: none`**, **`border-radius: 0`**, **`box-shadow: none`**, slightly reduced **`padding`** (`12px 8px`).
2. **Pass 31+32** — set semantic `.rp-f-eq` to **`transparent` / no border / no radius`**, padding `10px 6px`; light-mode pair **transparent**, no border.
3. **PASS 45 (end of file, after Pass 44)** — **`!important`** on **`background`**, **`border`**, **`box-shadow`**, **`border-radius: 0`** for semantic `.f-eq` and `.rp-f-eq` so **Recht Pass 37** (and any future module `!important`) cannot bring back an inner slab or rounded inner shell.
4. **880px media** — semantic `.f-eq` padding adjusted to `12px 10px` (was `14px 16px`).
5. Comments in Pass 30 / Pass 31 headers updated to describe transparent inner.

**Unchanged:** Semantic **DOM** (`semanticContent.js`), **typography** rules on `.semantic-schema` / `.semantic-reference`, **Recht / Jahresabschluss** font-size overrides, **math** formula cards (Pass 35 path), **wording**.

## Scope

- **Project-wide** for portals loading `premium-refinement.css`.
- **Not** module-local `styles.css` edits; `#content` / `#rightPanel` selectors beat module defaults where both apply.

## Browser verification notes

1. **Jahresabschluss / Recht / IWB / Finanzwirtschaft:** open **Formeln** with schema/reference chains — **no** inner grey rounded panel; text reads on the **outer card** only.
2. **Right rail:** same semantic formulas — **flat** inner `.rp-f-eq`.
3. **Recht:** confirm compact sizing (Pass 37) **still** applies to **font metrics**; inner surface stays **gone** (Pass 45 wins on background/border/radius).
