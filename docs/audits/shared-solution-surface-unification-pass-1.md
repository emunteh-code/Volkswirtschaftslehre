# Shared solution-surface unification — pass 1

**Date:** 2026-04-12  
**Scope:** Student-visible **Musterlösung** / **Prüfungstransfer** / step-numbered answers across public core + secondary modules. **Not** a content rewrite, landing pass, or architecture migration.

## Canonical target style

**Base system:** `assets/css/premium-refinement.css` under `#content`, already closest to the desired “calm premium” language:

- **Aufgaben steps:** `.solution-block` → `.step` (row: **number | body**), `.step-num` (compact disc), `.step-body` → `.step-text` + `.step-math-slot`.
- **Result:** `#content .result-badge` (math-ink family, bordered chip).
- **Prüfungstransfer:** `.exam-drill-*` surfaces aligned to the same typography and spacing scale.

This pass **extends that model** so Prüfungstransfer **numbered steps** use the **same row rhythm** as Aufgaben (number beside a single “body” column), instead of a different column-only layout that fought the shared `::before` counter styling.

## Divergence points found

| Issue | Cause |
|--------|--------|
| Prüfungstransfer steps felt like a different widget than Aufgaben | Markup was `li` → text + math as **two direct flex children** beside `::before`; Pass 62 then used **column** layout to stack text/math, which broke parity with `.step` / `.step-body` and previously caused **stretch bugs** on `::before` (see statistik-prüfungstransfer-solution-style-parity-pass). |
| Counter vs `.step-num` slightly different sizes | Multiple passes in `premium-refinement.css` set **20px / 22px / 24px** `::before` / `.step-num` in different blocks. |
| Mathematik Prüfungstransfer task drills | `buildTaskDrill` emitted **bare `<li>`** without `exam-drill-step` / semantic slots → **no** shared counter row, different DOM from other modules. |

## Changes made

### 1. Shared markup (Prüfungstransfer step list)

Wrapped each step’s text + math in **`.exam-drill-step-body`**, mirroring **`.step-body`**, so the `li` can use **row flex** (`::before` + body) like Aufgaben **`.step`**.

**Files:**

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/renderer.js` | `exam-drill-step` list items: inner wrapper **`<div class="exam-drill-step-body">`**. |
| `mikro1/js/ui/renderer.js` | Same template (module keeps a duplicated `buildExamDrills` implementation). |
| `oekonometrie/js/ui/renderer.js` | Same template. |
| `mathematik/js/data/practiceConfig.js` | `buildTaskDrill`: each `<li class="exam-drill-step">` + **body** + **`.exam-drill-step-text` / `.exam-drill-step-math`** (parity with portal; still `escapeHtml` / `renderMathBlock` for that module). |

### 2. Shared CSS (`premium-refinement.css`)

| Change | Rationale |
|--------|-----------|
| **`#content .exam-drill-answer .exam-drill-steps > li.exam-drill-step`:** `flex-direction: **row**`, `gap: 10px`, align with **`.solution-block .step`**. | One horizontal rhythm: **compact number | body column**. |
| **New `#content .exam-drill-answer .exam-drill-step-body`:** column flex, `flex: 1`, `gap: 0.35rem`, mirrors **`.solution-block .step-body`**. | Text + formula read as **one unit** under the number. |
| **`#content .exam-drill-steps > li::before`:** **22×22px**, `font-size: 11px`, same **accent/surface** mix as **`.step-num`**. | Single counter language for Aufgaben + Prüfungstransfer. |
| **Removed duplicate size drift:** `#content .solution-block .step-num` second block → **22px / 11px** (was 24px / 11.5px). | Aligns with the disc treatment above. |
| **Selectors** for math / semantic flattening: `li.exam-drill-step > .exam-drill-step-math` → **`li.exam-drill-step .exam-drill-step-math`** (descendant). | DOM now has **body** between `li` and math. |

### 3. Shared vs module-local

| Layer | Role after pass |
|--------|-----------------|
| **`assets/css/premium-refinement.css`** | **Primary** solution presentation system for all modules that link it (core + listed secondaries). |
| **Module `css/styles.css` (e.g. mikro1, statistik, …)** | Legacy **fallback** for `.step` / `.solution-block` without `#content` scope; inside `#content`, **premium rules win**. No broad deletion in this pass to avoid blast radius; drift is reduced by stronger shared tokens. |

## Browser verification (manual)

Recommended checks after `python3 -m http.server` + hard refresh:

1. **Statistik** — Prüfungstransfer revealed solution with numbered steps: number **left**, text+math **one column**, no full-width number bar.  
2. **Statistik** — Geführte Aufgaben Musterlösung: `.step` unchanged.  
3. **Mikro I** — Prüfungstransfer + Aufgaben: same step/result language.  
4. **Recht** / **Ökonometrie** — one revealed drill with steps each.  
5. **One secondary module** (e.g. **Finanzwirtschaft** or **Mathematik**) — Aufgaben / Prüfungstransfer if present: Mathematik task drill should now show **counter discs** + aligned body.  
6. **Formula-heavy** step + **result-badge** at end of same card.

## Confirmation

- **One solution language** for step numbering: **compact disc** + **row alignment** for Prüfungstransfer steps, consistent with **Aufgaben** `.step` / `.step-num`.  
- **Pedagogy preserved:** step order, text, formulas, results unchanged; only **DOM structure for drills** (wrapper) and **CSS** changed.  
- **No new decorative chrome;** no content rewrites.

## Completion

Pass **complete** when the manual checks above confirm no module’s Prüfungstransfer step list reads as a separate UI generation relative to Aufgaben solutions on the same page.
