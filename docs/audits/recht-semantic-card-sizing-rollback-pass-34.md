# Recht semantic-card sizing rollback — Pass 34

## Source of the size increase

**Pass 31 + 32** in `assets/css/premium-refinement.css` standardized right-rail **non-math** formulas project-wide with:

- **16px** base on `.semantic-schema` / `.semantic-reference` and **16px** on **`.semantic-schema__item`** / **`.semantic-reference__term`** (and contrast terms).
- **12px × 14px** inner **`.rp-f-eq`** padding and **10px** radius.
- **6px × 0 × 14px** vertical padding on the outer **`.rp-formula`** semantic wrapper.

That was an improvement for uniformity but made the **Recht** rail feel **too large** in the narrow column.

## What was rolled back (Recht only)

Scoped with **`body[data-portal-module="recht"]`** so only the Recht portal is affected:

| Token | Shared (Pass 31+32) | Recht Pass 34 |
|--------|---------------------|----------------|
| Outer `.rp-formula` vertical padding | `6px 0 14px` | `4px 0 10px` |
| `.rp-f-name` margin / size | `6px` / `11px` | `4px` / `10.5px` |
| Inner `.rp-f-eq` padding / radius | `12px 14px` / `10px` | `10px 12px` / `8px` |
| Semantic root + terms | `16px` | **14px** |
| Contrast terms | `16px` | **14px** |
| Notes | `13.5px` | **12.5px** (contrast note aligned) |
| Reference stack gap | `10px` | **8px** |
| Contrast row padding | `10px 0` | **8px 0** |
| Connector | `1rem` | **0.9rem** |

**Not reverted:** semantic de-chipping, single inner inset, transparent outer wrapper, connector colour logic, or `renderSemanticBlock` behaviour.

## Files changed

| File | Change |
|------|--------|
| `recht/index.html` | `<body data-portal-module="recht">` so module-scoped CSS can override shared premium rules (same pattern as Jahresabschluss). |
| `assets/css/premium-refinement.css` | **Pass 34** block: `body[data-portal-module="recht"]` overrides for `#rightPanel` semantic **schema/reference** rail sizing only. |

## Shared vs module-local

- **Module hook:** `data-portal-module="recht"` on Recht’s `<body>`.
- **CSS location:** shared `premium-refinement.css` (loaded after `recht/css/styles.css`), with **Recht-only** selectors — other modules unchanged.

## Browser verification notes

Not run in a headed browser in this pass. Check: **Anspruchsfrage**, **Gutachtenstil**, **Anspruchskette**, **Tatbestand vor Rechtsfolge** (and one more semantic rail card) — **smaller** than before Pass 34, still **clean** (no chips / raw breakage).

## Outlier

- **Main column** Formeln tab (`#content .formula-card--schema`) is **unchanged** by Pass 34 — rollback is **right rail only**, per request.
