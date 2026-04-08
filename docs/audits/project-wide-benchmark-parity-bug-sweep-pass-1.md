# Project-wide benchmark parity + bug sweep — pass 1

**Date:** 2026-04-08  
**Update:** Includes **issue L (granularity)** and expanded **K (multi-module product feel)**; Mathematik source-vs-portal mapping documented.  
**Benchmark:** **`mikro1`** (visual/pedagogical reference where applicable).  
**Method:** Phase 1 repo audit (patterns, `grep`, cross-read `createPortalApp` / `createRenderer` / module `index.html`, **`source-materials/Mathematik`** listing). Phase 2 targeted patches: **shared root cause first**, then CSS/HTML; **no** cosmetic `CHAPTERS` inflation.

---

## 1. Phase 1 — Audit matrix (issues A–L)

| Issue | Modules checked | Root cause | Shared vs module-local |
|-------|-----------------|------------|-------------------------|
| **A. Progress / completion %** | All **11** live portals via `*/index.html` + `*/js/ui/navigation.js` | Sidebar **initial** `progressText` used **stale** totals vs `CHAPTERS.length`. Runtime `updateProgressUI` uses **seen / total** concepts (correct); **mismatch** was **first paint / trust**. | **Module-local** HTML placeholders. |
| **B. Prüfungstransfer not opening** | Default-`createRenderer` modules: **statistik**, **makro1**, **makro2**, **recht**, **jahresabschluss**, **finanzwirtschaft**, **IWB**, **mathematik**, **mikro2** (**mikro1** / **oekonometrie** re-exported correctly) | `renderer.toggleExamDrill` often **undefined** → `window.__toggleExamDrill` no-op. | **Shared** **`assets/js/portal-core/app.js`** fallback. |
| **C. Aufgaben / transfer interactions** | Same as B | Same as B; **`renderQuestionCard`** defaults mitigate missing labels. | Shared (**B** + **`renderer.js`**). |
| **D. Colors / navigation vs mikro1** | Spot-check `index.html` + CSS | Theming tokens differ by module (e.g. Statistik accents). | **Deferred** (no global theme merge). |
| **E. Aufgaben tab vs mikro1** | **mikro1** `enhanceRenderedSurface` vs **portal-core** `renderPracticePanel` | Custom **mikro1** practice shell vs generic portal layout. | **Deferred** full HTML parity. |
| **F. Graph labeling vs mikro1** | Per-module `graphPanel.js` | Different engines and datasets. | **Deferred**. |
| **G. Intuition layout vs mikro1** | All **`createRenderer`** intuition users | Portal lacked **Transferpfad**, theory-**Fehleranalyse**, **Vertiefung**; tab hidden when only theory had signals. | **Shared** **`renderer.js`** + **CSS** on **statistik**, **mathematik**, **mikro2** (finanz / makro2 import **mikro1** CSS). |
| **H. In-text math accents** | **mikro1** `formalMath` / semantic pipeline vs portal HTML | Architectural split. | **Deferred** (high risk). |
| **I. R-Anwendungen pedagogy** | **`renderRPracticeMarkup`** consumers (**statistik** Theorie-embed; modules importing **`r-practice.css`**) | Short “Arbeitslogik” only. | **Shared** **`rPractice.js`** + **`r-practice.css`**. |
| **J. Formula variable labels** | All `renderFormulaPanel` users | Missing **`variables`** → bare `eq` only. | **Shared** **`renderer.js`** hints. |
| **K. Modules feel like different products** | **mathematik**, **statistik**, **mikro2**, **recht**, … | Mixed: CSS forks, R integration path, quarantine copy, **granularity** (see **L**). | **Partially** addressed by shared intuition/R/formula/toggle fixes; **shell + corpus** gaps remain documented. |
| **L. Concept granularity / under-segmentation** | **mathematik** (primary), **statistik** (spot), other live modules (spot) | **`source-materials/Mathematik`**: **10** VL PDFs + **10** Kleinübung folders vs **`mathematik/js/data/chapters.js`**: **6** `CHAPTERS`. Bundling is **real** (e.g. E1–E3 in one portal concept). **Statistik:** **14** concepts vs **14** VL files — **aligned**; no L-flag. **mikro2:** thin line is **corpus/policy**, not fixable by splitting without sources. | **No code split this pass**; **documentation** + **`module-content.js`** honesty (see §8). |

---

## 2. Statistik vs ökonometrie — **R-Anwendung** tab

**Current state**

- **Ökonometrie:** `hasRBlock` + `renderRAnwendungPanel` → **`r-anwendung`** tab + `R_BLOCKS_BY_ID`.
- **Statistik:** R in **Theorie** via `renderRPracticeMarkup` + `mountRPracticeBlocks`; no dedicated tab.

**Decision**

- **Preparatory pass** required before mirroring ökonometrie (per-concept block registry + `hasRBlock`).
- **Done in pass 1:** Shared **beginner workflow** in **`renderRPracticeMarkup`**.

---

## 3. Phase 2 — Exact bugs fixed (code)

| Bug | Fix |
|-----|-----|
| **Prüfungstransfer** toggle dead | **`createPortalApp`**: **`toggleExamDrill`** fallback (`assets/js/portal-core/app.js`). |
| **Stale progress denominator** (first paint) | **`index.html`** `progressText` for **makro1, jahresabschluss, finanzwirtschaft, statistik, recht, makro2, mikro2, oekonometrie**. |
| **Intuition** missing benchmark blocks | **`renderIntuitionPanel`** + **`hasPortalIntuitionSurface`** (`assets/js/portal-core/ui/renderer.js`). |
| **Formeln** bare equations | **`renderFormulaPanel`** variable hints (`renderer.js`). |
| **R** workflow unclear | **`rPractice.js`** + **`r-practice.css`**. |
| **Question card** labels | **`renderQuestionCard`** defaults (`renderer.js`). |

**Granularity (issue L):** **No** `CHAPTERS` split — evidence supports a **future** Mathematik migration; this pass adds **landing transparency** only (`assets/js/module-content.js`).

---

## 4. Exact files changed (cumulative)

| File | Change |
|------|--------|
| `assets/js/portal-core/app.js` | `toggleExamDrill` fallback. |
| `assets/js/portal-core/ui/renderer.js` | Intuition, formulas, question defaults, `hasPortalIntuitionSurface`. |
| `assets/js/portal-core/features/rPractice.js` | R beginner steps. |
| `assets/css/r-practice.css` | Help list / footnote styles. |
| `statistik/css/styles.css` | Intuition parity tokens. |
| `mathematik/css/styles.css` | Same. |
| `mikro2/css/styles.css` | Same. |
| `makro1/index.html` | Progress **14**. |
| `jahresabschluss/index.html` | **15** |
| `finanzwirtschaft/index.html` | **16** |
| `statistik/index.html` | **14** |
| `recht/index.html` | **14** |
| `makro2/index.html` | **20** |
| `mikro2/index.html` | **13** |
| `oekonometrie/index.html` | **32** |
| `assets/js/module-content.js` | **mathematik**: audit row **Portal-Konzeptkarten** + **qualityNote** on bundling vs Kleinübung/VL. |
| `docs/audits/project-wide-benchmark-parity-bug-sweep-pass-1.md` | This document (incl. **L**, §7–§9). |

---

## 5. Parity improvements (project-wide)

- **Functional:** Prüfungstransfer works across default-renderer modules.
- **Trust:** Progress denominator matches chapter count on load.
- **Pedagogy:** Intuition / Formeln / R closer to **mikro1**-style clarity where shared code allows.
- **Transparency:** Mathematik **6 vs 10** source structure is **explicit** for stewards (no fake finer nav).

---

## 6. Deferred (explicit)

| Item | Reason |
|------|--------|
| **Graph / formal-math / Aufgaben-shell** parity | Module-specific or large refactors. |
| **Statistik R tab** | Registry pass. |
| **Mathematik `CHAPTERS` split to ~10** | Requires **full** migration (CONTENT, steps, intuition, graphs, storage keys, exams); **not** a parity sweep edit. |
| **Nav badge “%”** semantics | Quiz accuracy, not completion — unchanged. |

---

## 7. Modules still below **mikro1** benchmark (why)

| Module | Gap |
|--------|-----|
| **mikro1** | Benchmark reference. |
| **oekonometrie** | Near benchmark (custom renderer). |
| **mathematik** | **6** mega-concepts vs **10** source teaching units; simulation-tagged exams; no `contentManifest` bridge (separate release audit). |
| **statistik** | R in Theorie vs ökonometrie tab; accent theme; otherwise strong. |
| **mikro2** | Quarantine: no manifest, thin exams, no mistake loop parity. |
| **finanzwirtschaft / makro1 / makro2 / recht / jahresabschluss / IWB** | Baseline renderer vs mikro1 **enhanceRenderedSurface** (by design trade-off). |

---

## 8. Granularity follow-up — **Mathematik** (evidence-based)

**Source inspected (paths under `source-materials/Mathematik/Mathematik/`):**

- **Vorlesung_Folien_+_R-Skripte_Lehrvideos:** `01Mathe_E1_…` through `10Mathe_AN3_…` (**10** PDFs).
- **Kleinübung:** **10** folders — E_1, E_2, E_3, LA_1, LA_2, AN_1, OP_1, AN_2, OP_2, AN_3.

**Portal (`mathematik/js/data/chapters.js`):** **6** ids — `funktionen`, `ableitung`, `optimierung`, `lagrange`, `linalg`, `integral`.

**Observed bundling (high level, for steward planning — not a legal mapping to every exercise):**

| Portal `id` | Typical source bundle (VL + Kleinübung) |
|-------------|----------------------------------------|
| `funktionen` | E1 + E2 + E3 (three introductory units → one card) |
| `linalg` | LA1 + LA2 |
| `ableitung` | AN1 |
| `optimierung` | OP1 |
| `lagrange` | AN2 + OP2 (multivariate analysis + constrained optimisation) |
| `integral` | AN3 |

**Conclusion:** Under-segmentation vs **Kleinübung** grain is **real** and **exam-relevant**, but **splitting** is **out of scope for pass 1** per project rules (no cosmetic chapter count; migration must follow content). **Recommended next step:** dedicated **`mathematik-concept-granularity-pass-*`** with: new `CHAPTERS`, split `CONTENT`, `stepProblems`, `intuition`, `graphPanel` registration, `fullExams` anchors, and **provenance** when manifest exists.

**Statistik:** **14** concepts and **14** VL PDFs in source tree — **no** L-type follow-up required from this evidence.

**Other modules:** No additional L-action in pass 1 beyond existing audits (**mikro2** corpus, etc.).

---

## 9. Phase 2 ordering vs what was done

1. **Broken / trust:** A, B, C — **fixed** (shared + HTML).  
2. **Fixable parity:** D–G partial (G fixed shared); H deferred; I, J fixed.  
3. **Pedagogy:** I, J, K partial.  
4. **Granularity L:** **Documented** + **landing honesty**; **no** `CHAPTERS` edit.

---

*End of pass 1.*
