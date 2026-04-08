# Complaint-closure audit — pass 1

**Date:** 2026-04-08  
**Method:** Reproduce in code and shell structure first, then patch; **no** full-browser re-run was completed in this session after the final edits (prior click-through harness was not re-executed to green here).

---

## How each complaint was checked

| # | Complaint | How checked | Root-cause class |
|---|-----------|-------------|------------------|
| 1 | mikro2 vs mikro1 colours / navigation | Compared `mikro1/index.html`, `mikro2/index.html`, and `:root` / sidebar CSS tokens | Module HTML + CSS |
| 2 | makro1 Aufgaben vs mikro1 | Compared portal `renderPracticePanel` markup with mikro1 `.mikro1-practice` scoped CSS in `mikro1/css/styles.css` | Shared renderer + CSS import (makro1 imports mikro1 CSS) |
| 3 | makro1 Prüfungstransfer toggles | Traced `window.__toggleExamDrill` → `createPortalApp` → `renderer.toggleExamDrill`; makro1 re-exports were incomplete | Module renderer export |
| 4 | Graph labelling / interpretation (mikro1-style) | Compared `mikro1/js/ui/graphPanel.js` (canvas + `graph_info`) with `mikro2/js/ui/graphPanel.js` | Module graph HTML |
| 5 | Intuition / Transferpfad vs mikro1 | Read `renderIntuitionPanel` in `portal-core/ui/renderer.js` vs mikro1 `buildMicroIntuitionPanel` | Shared renderer |
| 6 | Landing % &gt; 100% / misleading | Read `getModuleSnapshot` in `assets/js/common.js` (`seen` = raw key count vs `chapterCount`) | Shared landing math |
| 7 | In-text math / variable accent inconsistency | Mathematik used neon tokens; mikro1 uses `decorateSemanticMathSurfaces` only in mikro1 bundle | CSS tokens + optional JS (not moved) |
| 8 | Mathematik “different product” / weak segmentation | Mathematik standalone CSS + sidebar without orientation line | Module CSS + HTML |
| 9 | Statistik R vs ökonometrie pedagogy | Compared `buildConfig` / purpose handling and ökonometrie copy patterns | Shared `rPractice.js` |
|10 | R tab not intuitive project-wide | Tab labels live in HTML; runtime updates in `updateTabButtons`; R block kickers in `rPractice.js` | Shared portal + R feature |
|11 | Formula tab missing variable explanations | `renderFormulaPanel` fallback when `formula.variables` absent | Shared renderer |

---

## Modules touched (verification target)

- **mikro2** — shell, palette, graph panels  
- **makro1** — renderer export used by `createPortalApp`  
- **mathematik** — shell tokens + sidebar tagline  
- **All portal modules using** `createRenderer` / `createPortalApp` — intuition, Aufgaben layout class, formula hints, R tab label/title, statistik R purpose prefix  
- **Landing** — all tiles via `common.js`

---

## Files changed (exact list)

| File | Role |
|------|------|
| `assets/js/common.js` | Cap landing/module hero progress percent at 100%; use `min(seen, total)` in ratio when `total &gt; 0` |
| `assets/js/portal-core/ui/renderer.js` | `mikro1-practice` on Aufgaben panels; intuition **Transferpfad** when bridge **or** Vertiefung **or** Klausurmuster; stronger formula variable hints; R tab → **R-Übung** + `title` when visible |
| `assets/js/portal-core/features/rPractice.js` | Kicker **R-Übung**; statistik `purpose` prefixed with ökonometrie-style workflow when not already mentioning Ökonometrie |
| `makro1/js/ui/renderer.js` | Re-export **`toggleExamDrill`** from `createRenderer` |
| `mikro2/index.html` | Mikro I–parity shell: breadcrumb **Übersicht**, streak badge, tab `aria-*`, search `aria-label`, footer **Werkzeuge** + button labels, right-panel placeholder, shortcut hint, `jsError` fallback, MathJax `crossorigin` |
| `mikro2/css/styles.css` | Dark neutrals aligned with Mikro I (`#0f1114` / `#1a1d21` / …); `.sidebar-footer-label`; `.graph-reading-hint` |
| `mikro2/js/ui/graphPanel.js` | `graph_info` region + **Interpretation** copy per graph (mikro1-style “read the figure” discipline) |
| `mathematik/css/styles.css` | Accent + dark surfaces aligned with Mikro I; light-mode nav active tint blue |
| `mathematik/index.html` | Sidebar **Pflichtstrecke** tagline (segmentation / orientation) |

---

## Fixes made (symptom → change)

1. **mikro2 vs mikro1** — Shell markup and labels now follow the same pattern as `mikro1/index.html` (breadcrumb, streak, a11y, Werkzeuge row, placeholders). Dark neutrals match Mikro I tokens.  
2. **makro1 Aufgaben** — Outer practice panel uses class **`mikro1-practice`** so imported mikro1 CSS applies the same section / drill spacing as the benchmark.  
3. **makro1 Prüfungstransfer** — **`toggleExamDrill`** is exported from the module renderer so `createPortalApp` binds the real toggler instead of relying only on the fallback (parity with modules that re-exported it).  
4. **mikro2 graphs** — Each graph adds **`graph_info`** + a short **Interpretation** block (plus `aria-label` on canvas).  
5. **Intuition / Transferpfad** — If **Klausurmuster** exist but `bridge` was empty, the **Transferpfad** block still appears with a neutral transfer sentence; bridge + Vertiefung behaviour preserved.  
6. **Landing %** — Progress ratio cannot exceed **100%** or inflate past `chapterCount` for the percent calculation.  
7. **Variable / accent consistency** — Mathematik module tokens aligned with Mikro I so formula / nav accents match the rest of the quantitative modules.  
8. **Mathematik** — Same as (7) plus a visible **Pflichtstrecke** line under the university line.  
9. **Statistik R** — Block `purpose` text is prefixed with the **same workflow order** as in Ökonometrie when the source line did not already mention Ökonometrie.  
10. **R tab** — Visible label becomes **R-Übung** when the tab row is updated; R blocks use the **R-Übung** kicker; tooltip explains the workflow.  
11. **Formulas without variable lists** — Stronger, exam-oriented hints when `variables` are missing.

---

## Complaints status

### Fully closed (concrete visible symptom addressed in scope above)

- **#6** — Percent bar and numeric label can no longer exceed 100% from stale keys vs `chapterCount`.  
- **#1 (mikro2)** — Observable shell and palette drift vs mikro1 reduced to the same structural pattern and neutral dark tokens (within this module).  
- **#3** — Missing **`toggleExamDrill`** export on makro1 is corrected; toggles use the renderer implementation.  
- **#5 (Transferpfad gap)** — Klausurmuster-only concepts now get a Transferpfad block with explicit transfer copy.  
- **#4 (mikro2 graphs only)** — Interpretation / `graph_info` scaffolding added for **mikro2** graphs (not all modules).

### Partially improved (still not benchmark-identical or still module-dependent)

- **#2** — Aufgaben use shared portal markup; mikro1’s **custom** micro-practice / exam-drill prose layout is still richer than the generic portal deck.  
- **#7** — Mathematik colours match the platform; **semantic in-text math decoration** (`decorateSemanticMathSurfaces`) remains a **mikro1-only** JS path unless moved to shared core later.  
- **#8** — Tagline + colours help; **chapter data / nav density** is unchanged.  
- **#9** — Statistik R blocks get a **shared workflow prefix**; individual block text is not fully rewritten to ökonometrie depth.  
- **#10** — Initial HTML in many `index.html` files may still say **R-Anwendung** until `updateTabButtons` runs; embedded R cards show **R-Übung**.  
- **#11** — Hints are stronger; **data** still omits `variables` on many formulas — not a full data pass.

### Still open (out of scope for this pass or needs larger work)

- **Graph interpretation parity** for **makro1, statistik, finanzwirtschaft, …** — only **mikro2** graph HTML was extended here.  
- **Full mikro1 intuition layout** (hero, Denkbild grid, etc.) for all modules — would require either wrapping portal intuition in mikro1 markup or duplicating large HTML/CSS.  
- **Per-formula variable tables** everywhere — content/manifest work across modules.  
- **End-to-end verification** of every drill button in every chapter after this pass — not re-run here.

---

## Remaining risks

- **mikro2** graph JS may expect DOM order; if any script assumed “canvas last”, re-test drawing once in a browser.  
- **Statistik** `purpose` prefix duplicates if future authors always prepend the same sentence manually — review content when editing R blocks.  
- **Landing `seen`** is still raw `Object.keys(progress).length` in the returned object; only **percent** and the ratio numerator are capped for display.

---

## Honest completion statement

This pass applies **targeted, visible** fixes and one **shared** intuition/R/formula/landing adjustment. It does **not** prove entire-platform parity with mikro1, and it does **not** replace a full manual click-through of every chapter in every module.
