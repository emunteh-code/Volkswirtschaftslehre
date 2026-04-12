# R-tab composition refinement — Pass 56c

**Scope:** Shared R-Anwendung / R-Übung stack (`assets/css/r-practice.css`, `assets/js/portal-core/features/rPractice.js`).  
**Type:** Visual/compositional refinement only — **no** pedagogy removal, **no** execution behaviour changes.

---

## Weaknesses addressed (from diagnosis)

| Area | Before | After (56c) |
| --- | --- | --- |
| **Left lane** | Idee / Mathe↔R / Auftrag still felt like separate mini-panels (borders + padding) | **Hairline dividers**, tighter vertical rhythm, **muted kickers**; single calmer `.r-orient-card` shell |
| **Kernzeile** | Hinge present but not clearly *the* internal peak | **Stronger hinge**: slightly richer background, `r-md` radius, solid code frame (less “dashed lab”), subtle outer lift |
| **Right lane** | Checklist + terminal + interpretation read as stacked components | **`r-tab-output-evidence-stack`** wraps guide + checklist + `<pre>` + readout as **one column**; checklist de-boxed; readout as **caption** (no boxed `.r-output-proof`) |
| **Terminal** | Strong but surrounded by competing chrome | **Flex growth** (`flex: 1 1 auto`), inset highlight, **min-height** tuned so the block reads as the column hero |
| **Execution shell** | Editor/actions/output close but still “stacked panels” | **Tighter padding**, reduced toolbar margins, **subtle shell lip** (`box-shadow` 1px), slightly **shorter** editor min-height to reduce vertical squeeze |
| **Erster Schritt / first action** | Still fairly “panel-like” on tab + embedded | **Smaller type**, **muted** copy, **hairline** top rule only (tab + `.r-practice-head`) |
| **Lane balance** | Right column min `380px` vs `1.5fr` left | **`minmax(400px, 1.12fr)`** right vs **`1.28fr`** left, **16px** gutter — modestly more space for execution/evidence |

---

## Files changed

| File | Change |
| --- | --- |
| `assets/js/portal-core/features/rPractice.js` | `renderTabOutputCard`: wrap output body in **`.r-tab-output-evidence-stack`**; guide head class **`.r-tab-output-guide-head`**; readout **`.r-tab-output-readout`** on interpretation block; **`renderRPracticeMarkup`**: same stack + **`r-tab-output-card`** on shell output, optional checklist when `outputChecklist` is set |
| `assets/css/r-practice.css` | Wide **`.r-lab-section`** grid ratio tweak; **Pass 56c** block (~170 lines): left spine, hinge, first-action, evidence stack, shell tightening |
| `tools/clickthrough/r_tab_composition_pass56b.mjs` | Assertions for **`.r-tab-output-evidence-stack`** on Statistik, Ökonometrie, Mathematik R tabs (composition regression guard) |

**Module-local:** None.

---

## Before / after (structural)

- **Left:** One orient card → lesson flow reads as **one vertical spine** with **Kernzeile** as the only **strong framed hinge**; Auftrag/steps/guard slightly demoted typographically.
- **Right:** One flex column → **evidence stack** (guide → checklist → **terminal** → readout) reads as **one instrument**; interpretation/proof as **downstream caption**, not a third card.
- **Shell:** Slightly **denser** vertical rhythm so editor → actions → output feels like **one tool**.

---

## Browser verification (executed)

**Command:** `python3 -m http.server 8765` (repo root) + `node tools/clickthrough/r_tab_composition_pass56b.mjs`.

**Results:** `failed: []`, `pageErrors: []`, `consoleErrors: []`.

**Explicit checks:**

1. **Statistik** R tab (deskriptiv, 1365×900): `.r-execution-shell` present; **≥1** `.r-tab-output-evidence-stack` per lab block (run observed **2** stacks when two sections present).
2. **Ökonometrie** (matrix_notation): `.r-core-line`, output checklist, **evidence stack**, shell.
3. **Mathematik** (funktionen_gleichungen): shell, `.r-lesson-flow`, **evidence stack**.
4. **Kernzeile-heavy** — covered by Ökonometrie `.r-core-line` presence.
5. **Evidence-heavy** — checklist + stack + shell on Ökonometrie.
6. **Support-heavy** — left `.r-lesson-flow` on Mathematik; narrow **Statistik** 1024×900: `.r-tab-bottom` visible and not `display:none`.

**Limitation:** Automated run does not judge **subjective “premium”**; it guards **DOM/CSS structure** and **regressions**. Pixel-level design review remains a manual step.

---

## Outliers / follow-ups

- ~~**Embedded output stack**~~ — **Closed (56d follow-up):** `renderRPracticeMarkup` now uses the same **`r-tab-output-card` + `r-tab-output-evidence-stack`** wrapper as the dedicated tab (optional **Darauf achten** checklist when `outputChecklist` is non-empty). Shared Pass **56c** CSS applies to both surfaces.
- **Earlier duplicate rules** in `r-practice.css` (e.g. base `.r-lesson-intro` borders) remain for any non–`r-lesson-flow` usage; **`.r-lesson-flow` descendants** are overridden by Pass 56 + 56c.
- **`!important` on `.r-tab-output-readout .r-output-proof`** is intentional to win over **`.r-output-proof`** defaults and **premium-refinement** where loaded.

---

## Completion note

Pass **56c** materially advances **one spine / one evidence column / one shell** without dropping content blocks. Together with **56**, **56b**, and automated **clickthrough** checks, the shared R tab is **composition-closed** for the dedicated-tab path; embedded output fusion remains the main optional extension.
