# R-tab flagship composition — Pass 56b (closure)

**Status:** Closure for the remaining **embedded** R-Übung composition defect after Pass 56.  
**Approach:** **Option A** — one integrated **downstream support surface** with internal subsections (not two peer `.r-practice-card` tiles).

---

## Remaining defect (pre-56b)

`renderRPracticeMarkup` rendered **`.r-practice-grid` > two `.r-practice-card`** siblings (Output-Beweis / Aufgabe) below **`.r-execution-shell`**. Same border weight, shadow language, and grid auto-fit columns recreated the **equal-weight twin card** problem Pass 56 aimed to remove.

---

## Correction

### Markup (`assets/js/portal-core/features/rPractice.js`)

- Replaced **`.r-practice-grid`** + two **`.r-practice-card`** blocks with:
  - **`.r-practice-support-surface`** (single `aria-label` wrapper)
  - **`.r-practice-support-section.r-practice-support--evidence`** — interpretation + output evidence hint
  - **`.r-practice-support-section.r-practice-support--task`** — mini-task, transfer prompt, solution toggle (slightly quieter background)

Pedagogy and DOM hooks (`data-r-solution`, `data-r-action="toggle-solution"`, etc.) are **unchanged**.

### Styles (`assets/css/r-practice.css`)

- One outer frame for **`.r-practice-support-surface`**: light border, **no box-shadow**, subdued background.
- Sections separated by **top border** only; **`.r-practice-support--task`** gets a subtle accent tint (subordinate to evidence block).
- Shared typography: **`.r-practice-support-section`** shares `h4` / `p` rules with **`.r-practice-card`** where appropriate.
- **`.r-practice-grid`** rule **removed** (no remaining references in JS/CSS).
- **Narrow screens:** tighter **`.r-practice-support-section`** padding in the existing `@media (max-width: 640px)` block.

**Hierarchy:** Evidence block first (dominant read); task block second (structurally downstream, flatter emphasis).

---

## Files changed

| File | Change |
| --- | --- |
| `assets/js/portal-core/features/rPractice.js` | Embedded lower layout: support surface + sections |
| `assets/css/r-practice.css` | New surface + section rules; `h4` margin; mobile padding |
| `docs/audits/r-tab-flagship-composition-pass-56.md` | Outlier #1 closed; completion note updated |
| `tools/clickthrough/r_tab_composition_pass56b.mjs` | **New** — automated checks (Playwright) |
| `docs/audits/r-tab-flagship-composition-pass-56b.md` | This document |

**Module-local CSS:** None. No module overrides for `r-practice-support-*` were found (repo-wide grep).

---

## Risk audit

| Risk | Finding |
| --- | --- |
| **Wide layout hides `.r-tab-bottom`** | Unchanged: `@media (min-width: 1100px)` still sets `.r-lab-section > .r-tab-bottom { display: none }`. Task/pitfalls remain in the orient column on wide R-Anwendung. |
| **Module CSS conflicts** | No `.r-practice-support-*` or `.r-practice-grid` overrides outside `r-practice.css`. |
| **Embedded vs tab** | Dedicated **R-Anwendung** path still uses `renderRLabSection` (orient + shell + `.r-tab-bottom`); only **embedded** `renderRPracticeMarkup` uses the new lower surface. |
| **Statistik multi-shell** | Automated run reported **two** `.r-execution-shell` nodes on one Statistik R view (e.g. multiple lab blocks in tab). Expected if multiple sections; not a composition regression. |

---

## Browser verification (executed)

**Environment:** `python3 -m http.server 8765` from repository root; `node tools/clickthrough/r_tab_composition_pass56b.mjs` (Playwright Chromium, headless).

**Checks performed:**

1. **Statistik** — R-Anwendung, concept `deskriptiv`, viewport **1365×900**: ≥1 `.r-execution-shell`; **0** `.r-practice-grid` in `#content`.
2. **Ökonometrie** — `matrix_notation`, wide: `.r-core-line`, output checklist, execution shell present.
3. **Mathematik** — `funktionen_gleichungen`, wide: shell + `.r-lesson-flow` present.
4. **Kernzeile-heavy** — covered by Ökonometrie `.r-core-line` assertion.
5. **Output-evidence-heavy** — covered by Ökonometrie `.r-output-focus-list` assertion.
6. **Narrow `r-tab-bottom`** — Statistik, **1024×900**: `.r-lab-section > .r-tab-bottom` **visible** and `display !== none` (confirms narrow composition path still active).
7. **Embedded support styling** — Mathematik home `#content`: injected minimal `.r-practice-support-surface` probe; **2** subsections, **single** flat `box-shadow: none`, **1px** top border on surface.

**Raw result summary:** `failed: []`, `pageErrors: []`, `consoleErrors: []`.

**Limitation:** Live **production** embedded `renderRPracticeMarkup` instances are rare in current modules (most R content is tab-only); styling correctness for the new surface was **explicitly validated** via the Mathematik inject probe against real loaded `r-practice.css`.

---

## Outliers

- **Dedicated R tab** does not render `.r-practice-support-surface` (0 matches on wide Statistik run) — by design.
- **Visual pixel review** (anti-aliasing, exact rhythm vs design tokens) was not done beyond automated structural checks.

---

## Completion (Pass 56 + 56b)

Pass **56** + **56b** together satisfy the flagship intent: **one execution shell** + **one subordinate downstream support band** for embedded R-Übung, with browser-backed verification for tab surfaces and CSS-backed verification for the new lower region.
