# R-tab structural hierarchy — Pass 56e

**Intent:** Change **first-glance grammar** — not incremental polish. The R tab must read as **two coordinated lanes** (teaching flow vs execution/evidence), not several boxed modules.

**Pedagogy:** No removal of Idee, Mathe↔R, Kernzeile, Auftrag, Erster Schritt, checklists, terminal, or transfer text.

---

## Structural changes (dominant at first glance)

### 1. Markup — `assets/js/portal-core/features/rPractice.js`

- **`r-execution-instrument`** wraps editor + output inside **`r-execution-shell`** for both:
  - dedicated **`renderRLabSection`**
  - embedded **`renderRPracticeMarkup`**
- **Semantics:** `r-execution-shell` = layout-neutral wrapper; **`r-execution-instrument`** = the **single bordered execution surface** (editor + controls + output + readout share one chrome).

### 2. CSS — `assets/css/r-practice.css`

**Execution lane**

- Grid, border, radius, and background moved from **`.r-execution-shell`** to **`.r-execution-instrument`**.
- **`.r-execution-shell`** is `display: block` only.
- **Wide R tab (`≥1100px`):** **`.r-lab-section.r-practice-block`** becomes **one lab canvas** — shared background, **one outer border**, no shadow; **left orient column** loses its own card frame (transparent, **vertical lane divider** only); workspace padded as the right lane.
- **`<1099px`:** Orient column is a **band** above the instrument (no second full card frame).
- **`<980px`:** Instrument stacks to one column (selectors updated from shell → instrument).

**Teaching lane**

- **`[data-r-practice-root] .r-lesson-flow`:** Idee / Mathe↔R / Auftrag / map rows — **no borders, no radii, no mini-card backgrounds**; rhythm = **gap + kickers only**.
- **Only `.r-core-line`** keeps a **strong framed hinge** (stronger border, left rail, soft elevation).
- **Erster Schritt** (`r-orient-first-action` in orient + embedded head): **no panel chrome** — typography + spacing only.

**Lower / transfer chrome**

- **`.r-practice-support-surface`:** frame removed; **hairline top** continuation only.
- **`.r-tab-bottom .r-transfer-rule`:** **unboxed** — dashed top rule, transparent background (still readable).

**Right interior**

- Evidence stack / guide / checklist: **lighter dividers**; **terminal** (`pre`) gets **stronger** surface mix for hero readout; readout de-separated from “second card”.

---

## Files changed

| File | Role |
| --- | --- |
| `assets/js/portal-core/features/rPractice.js` | `r-execution-instrument` wrapper (tab + embedded) |
| `assets/css/r-practice.css` | Shell/instrument split; media query updates; **Pass 56e** block |
| `tools/clickthrough/r_tab_composition_pass56b.mjs` | Asserts **`r-execution-instrument`** present on Statistik / Ökonometrie / Mathematik R tabs |

**Module-local:** None.

---

## Before / after (hierarchy)

| Before | After |
| --- | --- |
| Two heavy columns = two sibling “cards” | **One lab slab** containing **lane divider** + **one execution instrument** |
| Multiple bordered lesson sub-panels | **One spine**; **only Kernzeile** is a framed hinge |
| Shell border = same as inner columns | **Outer lab frame** + **single instrument frame** (nested intent is obvious) |
| Transfer rule as pill/card | **Prose continuation** |

---

## Browser verification (executed)

`node tools/clickthrough/r_tab_composition_pass56b.mjs` against `http://127.0.0.1:8765` — **`failed: []`**, no console/page errors. Confirms **`r-execution-instrument`**, evidence stack, shells, narrow `r-tab-bottom`, embedded support probe.

---

## Outliers

- **Subjective “premium”** still benefits from manual screenshot review in light/dark themes.
- **Very old cached HTML** without `r-execution-instrument` would lack the new grid (only possible if a module inlined static HTML without going through `rPractice.js`).
