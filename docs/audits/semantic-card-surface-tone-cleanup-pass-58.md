# Semantic card surface-tone cleanup — pass 58

**Date:** 2026-04-12  
**Priority:** High, project-wide, student-visible, design-system-critical.

---

## Problem (before)

Semantic teaching surfaces relied on **heavy `surface2` / grey mixes**:

- **PASS 4.1** `.legal-schema`, `.semantic-schema`, `.semantic-reference`: `color-mix(… var(--surface2) 55%, var(--card) 45%)` plus math-tinted borders — read as **dull admin slabs**.
- **Formula grid** `#content .formula-card`: vertical gradient ending in **5% `surface2`**, plus **large drop shadow** (`0 14px 34px …`).
- **`#content .formula-card .f-eq`** (non-math): **strong `surface2` gradient** (84–94% surface2) — nested grey box inside the card.
- **Pass 30** schema/reference `.f-eq`: already lighter than the generic `.f-eq`, but still **4% surface2**; tightened further to **~0.5%** / **flat `var(--card)`** in light mode.
- **Right rail** `#rightPanel .rp-formula`: gradient into **8% surface2**.
- **Graph** `.gi-eq`, `.graph-insight-row`, macro `!important` overrides: **26–40% surface2** mixes and/or **shadow-sm/md** on rows.
- **Jahresabschluss** `.section-block .legal-schema`: **50% surface2** (module-scoped rule in premium).

Layout, grid, square orientation, and typography were **not** the issue; **fill + shadow weight** were.

---

## New surface treatment (after)

Shared principle: **border-led framing**, **page-like or near-card fill**, **minimal depth**.

| Area | New treatment (summary) |
|------|-------------------------|
| `.legal-schema` / `.semantic-schema` / `.semantic-reference` | `card ~97% + surface2 ~3%`, **no box-shadow**, border `border/text ~86/12`. |
| Inner chips (`__term`, `__item`, `__entry`) | Softer chip fill: **94% card + 6% math-soft**; slightly calmer borders. |
| Light mode semantic containers | **99% card + 1% border tint**; chips **96% card**. |
| `#content .formula-card` | **Solid `var(--card)`**, **hairline** `box-shadow` (1px border imitation), stronger border mix; **no** gradient, **no** large drop shadow. |
| `#content .formula-card:not(.formula-card--math) .f-eq` | **Flat** `card 99% + surface2 1%`, **no** inset highlight, **no** grey gradient. |
| Pass 30 schema/reference `.f-eq` | **99.5% / 0.5%** mix; light mode **flat `var(--card)`**. |
| `#rightPanel .rp-formula` | **Solid `var(--card)`**, no gradient. |
| Graph `.gi-eq` + insight/interpretation rows (both override layers) | **Card-heavy mixes (94–98%)**, **shadows removed** on rows; macro `!important` blocks aligned. |
| `body[data-portal-module="jahresabschluss"]` `.section-block .legal-schema` | **50/50 slab → 97/3** card/surface2. |
| `#content .formula-card:hover` | **No `shadow-md`** — keeps **hairline** shadow only. |

**Unchanged on purpose**

- **`formula-card--math`**: Pass 35 still strips inner grey panel; not regressed.
- **Geometry**: padding, radii, grid, flex wrap, heading positions — **unchanged**.
- **Pass 52 / 54** theory and answer flattening rules — **unchanged** (they already remove nested shells).

---

## Shared vs module-local

- **Shared:** All changes are in **`assets/css/premium-refinement.css`**, loaded after module `styles.css` on module pages (mikro1, makro1, mathematik, statistik, oekonometrie, finanzwirtschaft, jahresabschluss, recht, internationale-wirtschaftsbeziehungen, makro2, etc.).
- **Module-local:** **None** required for pass 58; one **Jahresabschluss-specific** block in the same file was updated (still centralized in premium).

---

## Files changed

| File | Role |
|------|------|
| `assets/css/premium-refinement.css` | Pass 4.1 semantic slabs, formula-card shell + non-math `.f-eq`, Pass 30 inner well, right-rail formula, graph readouts (standard + `!important` macro block), Jahresabschluss legal-schema, formula-card hover. |

---

## Browser verification (manual)

1. **Formeln** — `formula-card--schema` / `--reference`: outer card and inner `.f-eq` should feel **editorial**, not grey-on-grey.  
2. **Second module** (e.g. Statistik or Recht) — same card family.  
3. **Grid of several semantic cards** — grouping via **border**, not slab fill.  
4. **Dark + light** — semantic rows and graph insight lines stay readable; **no heavy grey panel** look.  
5. **Math formula cards** — inner strip still **transparent** (Pass 35).

---

## Pass 58 (cont.) — typographic hierarchy, no new UI

Per completion guidance: **do not add UI objects**; reinforce hierarchy with **type only**:

| Role | Treatment |
|------|-----------|
| Schema/reference **container** (`#content`) | `font-weight: 400`, slightly softened body color vs full `var(--text)`. |
| **Terms / items / entries** (chips) | `font-weight: 600`, `color: var(--text)` — primary lexical emphasis. |
| **Reference terms** (`.semantic-reference__term`) | Same as chips: **600** / full text colour vs **notes**. |
| **Reference notes** | `font-weight: 400`, smaller size, more `muted` — tertiary. |
| **Connector labels** (`semantic-schema__connector-note`) | Slightly more text-forward than default connector copy. |
| **Formula card** `.f-label` (schema/reference) | Kicker: more readable mix (`muted`/`text` ~44/56) but still below body. |
| **Formula card** `.f-desc` | Body: `91% text`, `font-weight: 400`. |
| **Formula card** `.f-eq` (schema/reference) | `font-weight: 500` on the teaching anchor well (content reads as main layer). |

All of the above lives in **`assets/css/premium-refinement.css`** (same shared file as surface pass).

---

## Completion

Pass 58 is complete when semantic cards read as **lightly framed teaching blocks** aligned with **`var(--card)` / page**, not **filled system panels**, and **importance reads from type** (weight + color), not from extra chrome. Geometry and grids were intentionally left as-is.
