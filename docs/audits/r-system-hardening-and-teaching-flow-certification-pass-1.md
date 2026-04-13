# R-system hardening and teaching-flow certification — Pass 1

**Date:** 2026-04-12  
**Scope:** Browser-linked R learning surfaces (WebR path in `rPractice.js`), with priority on **Ökonometrie**, **Statistik**, shared **`rPractice`** / **`r-practice.css`**, and any module using the same R tab pipeline (**Mathematik**, **generated-portal** routes that mount `renderRAnwendungTab`).

**Sources for academic claims:** This pass does **not** change curriculum payloads; Ökonometrie `matrix_notation` teaching quality is assessed against existing `oekonometrie/js/data/curriculum.js` (rBlock there). Statistik R copy remains anchored in `statistik/js/data/chapters.js` (`R_BLOCKS_BY_ID`).

---

## Part 1 — R surface inventory

| Surface | Module / route | Mechanism | Canonical? |
|--------|----------------|-----------|------------|
| **R-Anwendung tab** | `oekonometrie/index.html` → concepts with `entry.rBlock` in `CURRICULUM` | `renderRAnwendungTab` + `mountRPracticeBlocks` (`oekonometrie/js/ui/renderer.js`) | **Yes** — flagship econometrics R tab |
| **R-Anwendung tab** | `statistik/index.html` → concepts with `R_BLOCKS_BY_ID[conceptId]` | Same shared pipeline (`statistik/js/ui/renderer.js`) | **Yes** — high-traffic R tab |
| **R-Anwendung tab** | `mathematik/index.html` → concepts with `rBlocks` in curriculum | Same shared pipeline (`mathematik/js/ui/renderer.js`) | Shared shell; content not deep-audited this pass |
| **Generated portal** | `assets/js/generated-portal/main.js` | Imports `renderRAnwendungTab` / `mountRPracticeBlocks` for modules with `rPracticeBlocks` | Public shell parity with standalone modules |
| **Embedded R-Übung** | Theorie panels (e.g. Statistik when theory embeds blocks) | `renderRPracticeMarkup` in `rPractice.js` | Same registry + WebR execution path as tab |

**Shared components:** `assets/js/portal-core/features/rPractice.js` (markup, `buildConfig`, WebR `executeR`, `handleRun`, `mountRPracticeBlocks`), `assets/css/r-practice.css`.

**Execution model:** **Browser WebR** (`WEBR_MODULE_URL` → `webr.mjs`); optional **`guided`** runtime mode disables live run; failures fall back to explicit console text + status pill.

**Kernzeile / evidence:** `renderTaskBriefs` renders **Kernzeile** (`.r-core-line-kicker` + code); toolbar copy **„Nur die Kernzeile ändern“**; output side **„Was zählt im Output“**, checklists, **Output-Beweis** / readout in tab layout.

---

## Part 2 — Shell / interaction reliability (findings)

**Before:** Toolbar, editor, run/reset/insert, and output regions were structurally sound; regression only covered **Ökonometrie** at two viewports and did not assert reset/insert, truth copy, or a second module.

**After:** Trust regression asserts **visible** editor, output, run, **reset**, **insert-solution**, **truth banner**, and **Kernzeile** surface (toolbar or kicker) for **Ökonometrie** and **Statistik** at **desktop, tablet, mobile**.

---

## Part 3 — Teaching-flow certification (representative)

### Ökonometrie — `matrix_notation` / R tab

- **Concept ↔ code:** Starter code builds `X` with intercept + `x2`, then `dim(X)` and `t(X) %*% X` — matches design-matrix and \(X'X\) dimensions from theory.
- **Kernzeile:** Pipeline infers the hinge line from starter vs solution (third regressor / `cbind` extension); aligns with mini-task.
- **Output ↔ meaning:** Declared output explains column count and \(2\times2\) \(X'X\); checklist + interpretation panels steer **which object** matters.
- **Transfer:** Mini-task forces dimension re-read after structural change — not an isolated ritual.

**Verdict:** Teachable as **didactic** browser exercise; live numbers must not be treated as exam oracle (addressed under truth boundary).

### Statistik — `deskriptiv` / R tab

- **Concept ↔ code:** Exploration sequence `str` / `summary` / `table` matches tutorium-style orientation; task extends with means.
- **Output discipline:** Module-authored `output` strings support interpretation; shared UI adds **„Darauf achten“** when checklist is populated from inference.

**Verdict:** Coherent with **source-distilled** R tutorium framing in `chapters.js`; same WebR caveats apply.

---

## Part 4 — Truth-boundary audit

**Gap:** Runtime expectation text existed in config but **tab orientation did not render `runtimeNote`**, weakening upfront honesty for WebR vs exam desktop R.

**Hardening:**

1. **`renderRTruthBanner()`** — Short, calm **Browser-R (WebR)** boundary on **every** `renderRPracticeMarkup` root and **`renderRAnwendungTab`** panel.
2. **`buildRuntimeExpectation`** — Live mode string now names **WebR** and explicitly disclaims replacement for **local R / Prüfungsumgebung**.
3. **`renderTabOrientationCard` + `renderRPracticeMarkup`** — Render **`config.runtimeNote`** in a **`.r-runtime-note`** block so students see expectations **before** clicking run.

---

## Part 5 — Failure-state hardening

**`handleRun` catch path:** Extended message with optional **„denselben Code in R auf dem Rechner“** comparison hint so failure is **actionable** and reduces **browser-R overtrust**, without hiding the existing **Soll-Output / Musterlösung** fallback.

Silent failure: still mitigated by non-empty output panel + status pill **`Didaktischer Fallback`** (unchanged behavior, clearer copy).

---

## Part 6 — Pedagogical risk zones (status)

| Risk | Mitigation this pass |
|------|----------------------|
| A. Browser-R overtrust | Truth banner + stronger `runtimeNote` + failure copy + existing fallback text |
| B. Output fetishism | Unchanged: checklist + „Was zählt im Output“ + evidence hint (already strong); regression now requires output region height |
| C. Code ritualism | Unchanged: Kernzeile + task flow + transfer rule in markup; not expanded per exercise |
| D. Shell polish > truth | Addressed by visible **runtime** + **truth** copy on the same surface |
| E. Mobile degradation | Added **tablet-1199** R-matrix regression alongside 390×844 |

---

## Part 7 — Regression protection

**File:** `tools/clickthrough/trust-regression-pass-1.mjs`

- **`runRShellFor`:** Parameterized route/concept/label.
- **`runRShellMatrix`:** Runs checks for **`/oekonometrie/index.html` + `matrix_notation`** and **`/statistik/index.html` + `deskriptiv`**.
- **Viewports:** `1280×900`, **`1199×900` (tablet)**, `390×844` (mobile).
- **New assertions:** `[data-r-action="reset"]`, `[data-r-action="insert-solution"]`, **`.r-practice-truth-banner`** visible, **Kernzeile** via toolbar title **or** `.r-core-line-kicker`.

**Explicitly not automated:** WebR network download, package install timing, or numerical equality to desktop R (too brittle); structure + truth + controls are protected.

---

## Part 8 — Certification table

| Module / route | Shell reliability | Teaching-flow quality | Output interpretation quality | Truth-boundary quality | Failure-state quality | Regression protection status | Remaining trust risk | Action result |
|----------------|-------------------|----------------------|--------------------------------|------------------------|----------------------|------------------------------|----------------------|-----------------|
| **Ökonometrie** — `matrix_notation` → R-Anwendung | Strong: editor/output/actions visible cross-viewport | Strong for this flagship block (matrix ↔ code) | Strong (guided readout + checklist) | **Improved** (banner + runtime note + WebR copy) | Strong (explicit fallback + desktop hint on error) | **Expanded** (dual route + tablet + controls + banner + Kernzeile) | WebR/network/packaging variance vs local R | **hardened and R-safe as didactic surface** |
| **Statistik** — `deskriptiv` → R-Anwendung | Strong (same shell) | Strong for sampled block; not every concept re-read | Strong module text + shared evidence UI | Same as Ökonometrie | Same | **Expanded** | Same WebR variance | **hardened and R-safe as didactic surface** |
| **Mathematik** — R tab (shared shell) | Inherited from shared code | Not re-certified exercise-by-exercise this pass | Inherited | Same banner/note | Same | Not extended to a third route in automation | Per-concept variance | **improved but still caution-heavy** |
| **Embedded** `renderRPracticeMarkup` (e.g. Statistik theorie) | Inherited + banner on root | Content-specific | Inherited | Banner + runtime note in head | Same | Indirect (shared markup) | Same | **improved but still caution-heavy** |

---

## Part 9 — Browser verification notes

Executed **`node tools/clickthrough/trust-regression-pass-1.mjs`** (Chromium, local `python3 -m http.server`): **all checks passed**, including:

- Ökonometrie + Statistik **R-Anwendung** tab at **desktop, tablet, mobile**
- Editor, output, run, reset, insert-solution, truth banner, Kernzeile surface

**Not reproduced in automation:** Forced WebR outage (would need network block or fault injection); manual check: run failure path still sets visible multi-line **`[Interaktive Laufzeit nicht verfügbar]`** output and pill state **`Didaktischer Fallback`**.

---

## Part 10–12 — Files changed, safety delta, completion

### Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/features/rPractice.js` | `renderRTruthBanner()`; banner in tab + embedded; **`runtimeNote`** rendered in tab orient + embedded head; **`buildRuntimeExpectation`** strings; **`handleRun`** failure copy |
| `assets/css/r-practice.css` | Styles for **`.r-practice-truth-banner`**, spacing for runtime note |
| `tools/clickthrough/trust-regression-pass-1.mjs` | **`runRShellFor` / `runRShellMatrix`**, Statistik route, tablet viewport, extra controls + banner + Kernzeile assertions |
| `docs/audits/r-system-hardening-and-teaching-flow-certification-pass-1.md` | This document |

### What is safer now

- Students see **upfront** that browser-R is **didactic WebR**, not exam-desktop parity.
- **Runtime expectations** are visible in the **tab** path, not only in embedded meta.
- **Regression** catches missing **reset/insert**, **truth banner**, or **Kernzeile** teaching chrome across **two** major modules and **three** widths.
- **Failure** copy nudges toward **desktop comparison** without pretending parity.

### What remains risky

- **Numerical / package** divergence vs local R is inherent to WebR — only honest framing + fallback pedagogy, not elimination.
- **Mathematik** and **rare embedded** paths are not given the same automated route matrix as Ökonometrie/Statistik (recommended follow-up: one Mathematik concept id in `runRShellMatrix`).
- **Per-block** teaching certification still requires **module-by-module** content review against `source-materials/` where applicable.

**Completion:** Pass 1 goals for **shared R system**, **Ökonometrie**, and **Statistik** shell + truth + failure + regression are met; full portal-wide **per-exercise** teaching certification is explicitly **out of scope** for this single pass.
