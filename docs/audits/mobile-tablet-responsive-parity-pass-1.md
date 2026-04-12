# Mobile + tablet responsive parity — pass 1

**Date:** 2026-04-12  
**Priority:** Release-quality, project-wide, student-visible.

---

## Device width classes tested (manual checklist)

Verification is **manual** in browser DevTools (responsive mode). Target widths:

**Phones:** 320, 360, 375, 390, 412, 428  

**Tablets / medium:** 768, 820, 912, 1024, 1180  

**Orientation:** spot-check portrait vs landscape on 768–1024 where split layouts apply (R tab, graph).

---

## Failure classes addressed

### A — Narrow phone (inherits pass 1 + refinements)

- **Phablet band (429–767px):** Graph canvas and section padding sat between “full phone” (≤480) rules and tablet rules; added explicit **premium** tuning so large phones do not stay on the smallest graph stage forever.

### B — Medium-width / tablet transition

- **R tab (1025–1199px):** Wide layout previously flipped at **1100px**, leaving a band where the **lab** was still single-column but the **execution instrument** stayed **editor | output** with a **288px-min** output track — cramped on many tablets. **Wide lab grid + flagship chrome** now start at **1200px**; **editor/output stack + single-column tab bottom** apply up to **1199px** (aligned with the same breakpoint).
- **Graph controls (769–1024px):** Default `minmax(170px, 1fr)` underuses horizontal space before the **≤768** two-column rule kicks in. Added **769–1024** `minmax(152px, 1fr)` auto-fit in **mikro1** and all grid-based module copies (**recht, jahresabschluss, oekonometrie, internationale-wirtschaftsbeziehungen**).
- **Landing (`portal.css`):** Between **481–768** and **769–1023** there was little dedicated rhythm; added **container padding**, **shelf grid** `minmax`, and **hero title** scaling for portrait tablets.

### C — Desktop-narrow / right rail

- **Right panel:** Fixed `min-width` + `flex-shrink: 0` forced the rail to **win** against `#main` when the viewport was only slightly above the **1200px** show threshold. Rail is now **allowed to shrink** (`flex-shrink: 1`), **`min-width: 220px`**, **`max-width: 320px`**, fluid **`clamp`** width — main content keeps more room without hiding the panel entirely.
- **`#main` horizontal containment:** `overflow-x: hidden` → **`overflow-x: clip`** (aligned with global premium / shell policy) on **mikro1, mikro2** and the **large forked modules** (statistik, jahresabschluss, recht, oekonometrie, internationale-wirtschaftsbeziehungen). **Right panel** `overflow-x` matched to **clip** where it was `hidden`.

### D — Formula / exam surfaces on tablets

- **768–1023px:** Premium adjusts **formula grid** track min, **section/problem** padding, and **graph canvas** min/max height so tablet is not a stretched phone.
- **1024–1279px:** Taller default graph stage (non–macro-focus) so wide tablets are not stuck with phone-sized canvas caps.
- **≤1023px:** **Exam / semantic** containers get **`min-width: 0`** / **`max-width: 100%`** to avoid flex overflow in nested answers.

---

## Breakpoint strategy (five bands)

| Band | Approx. range | Intent |
|------|----------------|--------|
| 1 | ≤428px | Small phones — existing module `@media (max-width: 600/480px)` + premium safe-area |
| 2 | 429–767px | Large phones / phablets — new **premium** graph + section tuning |
| 3 | 768–1023px | Portrait tablets — premium formula/graph/cards; graph **grid** modules get 769–1024 control density |
| 4 | 1024–1279px | Wide tablet / small laptop — taller graph stage (premium); R **stacked** instrument until 1200 |
| 5 | ≥1280px | Desktop — right rail + full R wide lab (from **1200px** in `r-practice.css`) |

---

## Files changed

| File | Change |
|------|--------|
| `assets/css/r-practice.css` | Wide R lab / Pass 56 chrome: **1100px → 1200px**; narrow orient band **1099px → 1199px**; execution stack + `r-tab-bottom` **1024/1080 → 1199px** (merged single `@media`). |
| `assets/css/premium-refinement.css` | Pass 1 tablet/phablet: graph canvas heights, formula grid, section/problem padding, exam/semantic containment. |
| `assets/css/portal.css` | Landing: **481–768** container/safe-area; **769–1023** grid + hero scaling. |
| `mikro1/css/styles.css` | `#main` `overflow-x: clip`; `#rightPanel` shrinkable rail; `#rightPanel` `overflow-x: clip`; graph **769–1024** control grid. |
| `mikro2/css/styles.css` | Same shell + rail pattern; `#rightPanel` `overflow-x: clip`. |
| `statistik/css/styles.css` | `#main` / `#rightPanel` `overflow-x: clip`; rail flex/shrink parity. |
| `jahresabschluss/css/styles.css` | Same + graph **769–1024** block. |
| `recht/css/styles.css` | Same + graph **769–1024** block. |
| `oekonometrie/css/styles.css` | Same + graph **769–1024** block. |
| `internationale-wirtschaftsbeziehungen/css/styles.css` | Same + graph **769–1024** block. |

**Graph 769–1024 block:** Modules that `@import` **mikro1** `styles.css` (e.g. **makro1**, **mathematik**, **finanzwirtschaft**) inherit the new rule from **mikro1**. **statistik** and **mikro2** use **flex** graph toolbars — no matching grid-density block was added there.

---

## Surfaces verified (manual)

1. Landing (`index.html` + `portal.css`)  
2. Module: Theorie, Formeln, Graph, R, Aufgaben, Prüfungstransfer (at least one module using `premium-refinement` + `r-practice`)  
3. **Right-panel-heavy:** viewport **≥1201px** (rail visible) — check rail does not crush `#content`  
4. **Semantic-heavy:** Formeln / Theorie with long chains — **768–1023** and **≤428**

**Explicit checks:** no horizontal page scroll; graph controls usable; R tab coherent at **900 / 1024 / 1180**; landing shelf not awkward at **820**.

---

## Remaining edge cases

- **Macro-focus graphs** (`graph-container--macro-focus`): premium graph height overrides are **excluded**; engine-driven heights still dominate — watch **horizontal** overflow only.  
- **statistik / mikro2** flex graph layouts: tablet tuning is mostly **premium canvas** + touch rules from existing `max-width: 768` blocks; no new **769–1024** column math.  
- **Automated regression:** no Playwright overflow assertions added; recommend optional `scrollWidth <= clientWidth` smoke test later.  
- **Very long unbreakable tokens** may still need component-level `overflow-wrap: anywhere` (not globally forced).

---

## Completion note

Pass 1 delivers **structural** responsive parity (R breakpoints, graph control band, landing tablet band, rail balance, tablet formula/graph breathing room). Final sign-off still requires **your** visual pass at the widths listed above on real devices or DevTools.
