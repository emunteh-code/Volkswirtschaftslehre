# Visual Layer Rebuild — Phase 1 Audit & Migration Plan

**Date:** 2026-06-09  
**Baseline:** `f1c2f8f` (design-closure defect fixes on main)  
**Scope:** Audit/plan only — no implementation until approved  
**Status:** Awaiting approval before Phase 0 scaffold

---

## Executive summary

The presentation layer is **~19,466 lines of CSS** across 19 files, dominated by two layers: `mikro1/css/styles.css` (**3,427 lines**, canonical module shell) and `assets/css/premium-refinement.css` (**11,320 lines**, 60+ additive “PASS” blocks). Tokens live in `module-tokens.css` (**145 lines**) and are imported only via `premium-refinement.css`. Product logic is correctly centralized in `portal-core` (`renderer.js` **2,017 lines**, `rPractice.js` **1,969 lines**); module `renderer.js` forks are thin except **mikro1** (591) and **ökonometrie** (545), which still carry semantic-math overrides.

**Visual debt is structural:** duplicate tab/button/card rules (e.g. **36** `#tabRow .tab-btn` blocks in premium-refinement), layered passes that override each other, module-local hex in `mikro1` nav/graph tokens, colored `rule-zone--*` bands with non-token fallbacks, and **102** `mjx-container` / `!important` math-color rules scattered across CSS.

**Recommendation: clean visual rebuild**, not more patching. Preserve all `portal-core` JS, data, routes, math/R/graph logic, and CI guards; replace the CSS stack with the proposed 8-file visual architecture and align HTML class contracts incrementally per migration order (shell → primitives → theory → Aufgaben → Formeln → right rail → Grafik → R-Übung → landing → dark/mobile).

---

## A. Current CSS map

### Fleet load order (11 modules)

| Order | File | Lines | Role |
|------:|------|------:|------|
| 1 | `{module}/css/styles.css` | 2–344 | Shell base (almost all `@import ../../mikro1/css/styles.css`) |
| 2 | `assets/css/r-practice.css` | 2,522 | R-Übung (statistik, ökonometrie via module CSS import) |
| 3 | `assets/css/premium-refinement.css` | 11,320 | Fleet overlay; `@import module-tokens.css` |

**Landing** (`index.html`): `portal-critical.css` (11) → `portal.css` (942) → deferred `premium-refinement.css`.

**Outliers:** `r/`, `politisches-system-brd/` use `portal.css` + `generated-portal.css` (297) + `common.css` (151, legacy purple theme).

### File inventory

| Path | Lines | Controls |
|------|------:|----------|
| `assets/css/module-tokens.css` | 145 | Typography/spacing/radius, layout max-widths, `--accent`, `--math-ink`, surfaces, badges, motion |
| `assets/css/premium-refinement.css` | 11,320 | Everything else: mobile clip, cards, tabs, sidebar, Aufgaben, Formeln, Klausurmethodik, Einsatzgrenzen, right rail, graph, R-tab, landing tiles, dark/light, PascalCase component aliases |
| `mikro1/css/styles.css` | 3,427 | Reset, `#app` grid, sidebar, topbar, tabs, content, buttons, Aufgaben, formulas, graph, exam, right panel, MathJax, responsive |
| `assets/css/r-practice.css` | 2,522 | R workspace, editor, output terminal, mapping UI |
| `assets/css/portal.css` | 942 | Landing-only tokens + layout (`body[data-page="landing"]`) |
| `makro1/css/styles.css` | 344 | Graph shell width, macro graph cards |
| `makro2/css/styles.css` | 208 | Graph equation/insight rows |
| `assets/css/common.css` | 151 | Generated-portal purple theme (not fleet) |
| `assets/css/generated-portal.css` | 297 | Generated module chrome |
| Other module `styles.css` | 2–8 | `@import mikro1` only |

### `premium-refinement.css` section map (selected)

| Lines (approx.) | PASS / phase | Surface |
|-----------------|--------------|---------|
| 33–168 | Mobile overflow clip | `#app`, `#main`, `#content` `overflow-x: clip` |
| 255–570 | PHASE 2 cards | `.section-block`, `.problem-card`, hierarchy |
| 571–732 | PHASE 3 graph hero | `.graph-container`, `.graph-shell` |
| 733–989 | PHASE 5 right rail | `#rightPanel`, mistakes, formulas, connections |
| 990–1252 | PHASE 6 tabs/sidebar/home/progress | `#tabRow`, `#sidebar`, module tiles |
| 1290–1535 | PASS 3 Aufgaben / math-block | `.problem-card`, `.math-block` |
| 1900–2233 | R-tab flagship + terminal | `.r-practice-workspace` |
| 2637–3547 | PASS 60 Formeln tab | `.formula-tab-panel`, numbered sections |
| 3009–3547 | Klausurmethodik | `.klausur-playbook-card`, `.klausur-playbook-row` |
| 9673–9700 | Einsatzgrenzen zones | `.rule-zone--use/assumptions/invalid/mistakes` (colored bands) |
| 6607–6770 | Platform shell alignment | Concept header, badge family |
| 6771–7286 | Mobile shell ≤900px | Sidebar overlay, rail collapse |
| 7791–8187 | Design closure component aliases | `.Card`, `.Tab`, `.Button`, `.FormulaBox`, etc. |
| 4243–4511 | Module-only overrides | Jahresabschluss, Recht right-rail sizing |

### Hardcoded color grep (assets/css)

| Pattern | premium-refinement | module-tokens | portal.css | r-practice | mikro1 |
|---------|-------------------:|--------------:|-----------:|-----------:|-------:|
| `#hex` | 148 | 36 | 26 | 27 | 25 |
| `rgb`/`rgba`/`color-mix` | 801 | 21 | 31 | 290 | (many) |

Many `color-mix` uses are token-backed; debt is **raw hex fallbacks** inside mix (e.g. `rule-zone` uses `#3ecf8e`, `#d97706`, `#e8a838`) and **duplicate token definitions** (landing `portal.css` vs `module-tokens.css` vs mikro1 `:root`).

---

## B. Renderer / component JS map

### Central factory (preserve logic, stabilize class contracts)

| File | Lines | Outputs |
|------|------:|---------|
| `assets/js/portal-core/ui/renderer.js` | 2,017 | Theory tab, Aufgaben (`renderPracticePanel`), Formeln (`renderFormulaPanel`), Einsatzgrenzen (`renderFormulaEinsatzgrenzenBlock`), Klausurmethodik (`renderTaskFamilyCard`), home, breadcrumb, concept header |
| `assets/js/portal-core/pedagogy/learnerPedagogy.js` | 690 | Lesson intro, ConceptAnchor, staged reveals, mastery/confidence checkpoints, formula pedagogy extras |
| `assets/js/portal-core/theory/theoryStructure.js` | — | Theory sections, glossary, readiness checklist |
| `assets/js/portal-core/ui/rightPanel.js` | 144 | `#rightPanel` formulas, Verbindungen, mistake cap |
| `assets/js/portal-core/ui/chapterNavigation.js` | 144 | `#sidebar` `.nav-item`, status bar (no dots) |
| `assets/js/portal-core/ui/graphShell.js` | 59 | `.graph-container.graph-shell`, canvas, legend |
| `assets/js/portal-core/features/rPractice.js` | 1,969 | R-Übung tab markup, editor, validation UI |
| `assets/js/portal-core/app.js` | 692 | Shell wiring, theme toggle, focus mode |
| `assets/js/common.js` | 655 | Landing module grid, hero |
| `assets/js/portal-core/ui/semanticMathSurfaces.js` | — | Math surface decoration (mikro1/ökonometrie forks) |
| `assets/js/portal-core/ui/graphPedagogy.js` | — | Graph micro-check footer |
| `assets/js/portal-core/ui/klausurmethodikEnrichment.js` | — | Playbook row content |

### Module forks

| Module | `js/ui/renderer.js` | Notes |
|--------|--------------------:|-------|
| statistik, mikro2, makro*, finanz, recht, jahresabschluss, iwb | 52–70 | Thin `createRenderer()` wrapper |
| mathematik | 88 | Small extensions |
| mikro1 | 591 | Semantic math surfaces, legacy intuition helpers |
| ökonometrie | 545 | Semantic math + R blocks |

**Shell HTML:** Each module `index.html` shares `#app` / `#sidebar` / `#main` / `#topbar` / `#tabRow` / `#content` / `#rightPanel` (statistik pattern). Tab label: **Formeln & Klausurmethodik**.

---

## C. Visual debt inventory

| Category | Evidence | Severity |
|----------|----------|----------|
| **Hardcoded blue** | `--accent: #3b82f6` in `module-tokens.css`, mikro1 `--nav-active-border`, `--sys-blue`; 36+ tab active states mixing `var(--accent)` with legacy rules | Medium — mostly tokenized but duplicated |
| **Magenta math** | `--math-ink` in tokens; mikro1 `mjx-container * { color: var(--math-ink) !important }`; premium-refinement PASS 4.1; r-practice `color-mix(..., var(--math-ink))` | High — `!important` war with MathJax |
| **Duplicate buttons** | `.btn` in mikro1 (828+) AND `#content .btn` in premium-refinement (1278, 1812, 7982, 8020) with overlapping hover/active | High |
| **Duplicate cards** | `.formula-card`, `.section-block`, `.problem-card` styled in mikro1 + 15+ PASS blocks in premium-refinement | High |
| **Duplicate tabs** | 36 `#tabRow .tab-btn` selector blocks; active `::after` disabled then re-enabled in design-closure section | High |
| **Page-specific overrides** | PASS 14/37/38 Jahresabschluss & Recht right-rail; makro1 graph width; mathematik dashboard | Medium |
| **Colored rule bands** | `.rule-zone--use` (green `#3ecf8e`), `--assumptions` (accent), `--invalid` (orange), `--mistakes` (amber `#e8a838`) — not in token file | Medium |
| **Fake link styles** | `breadcrumb-link`, `portal-home-link` as `<button>`/`<a>` — correct a11y pattern but styled in mikro1 + premium-refinement separately | Low |
| **Inline styles in JS** | `exam.js`, `fullExam.js`, `mistakeReview.js`, `jsErrorFallback.js` use `style="..."` with hardcoded hex in error overlay | Medium |
| **Raw entity/math risks** | CI `check-math-literals.mjs`, `check-learner-ui-literals.mjs` (escaped tags, `&#36;`, `color:#2563eb` in templates) | Guarded but fragile |
| **Sidebar markers** | `chapterNavigation.js` uses `.nav-item__aside` + status bar; CI forbids `nav-due-dot` | Low (recently fixed) |
| **Right rail clipping** | `overflow-x: clip` on shell; `#rightPanel` width `var(--chrome-rail-width)`; mobile mirrors in `#content` (PASS mobile) | Medium — regression-prone |
| **Dead CSS** | mikro1 INTUITION PANEL section (1226+); hidden tab still styled | Low |
| **Orphan PascalCase components** | `.Card`, `.Tab`, `.Button` in CSS (~7855) — **not emitted by JS** | High — documentation-only aliases |

---

## 1. Files to preserve

### JavaScript (product logic)

- `assets/js/portal-core/**` (all modules)
- `assets/js/common.js` (landing behavior)
- Module `js/data/**`, `js/state/**`, `js/features/**`, `js/utils/**`
- Module `js/ui/graphPanel.js`, `graphs.js` per module
- Thin `createRenderer()` wrappers (after class-contract alignment)
- `tools/exam-os/check-*.mjs`, `ci-validate.mjs`, screenshot scripts
- `index.html` shell structure and routes (all modules)

### CSS (reference during migration)

- `assets/css/module-tokens.css` — extract into `visual-tokens.css`
- Token *values* and layout measures (content max widths)

### Assets / ops

- `docs/audits/screenshots/design-closure-pass/**` (golden baseline)
- `tools/exam-os/capture-design-closure-pass.mjs` targets (23 screenshots)
- `assets/brand/**`, font links

---

## 2. Files to replace / refactor

| Current | Action |
|---------|--------|
| `assets/css/premium-refinement.css` (11,320 lines) | **Retire** after migration; split into `visual-*.css` |
| `mikro1/css/styles.css` (3,427 lines) | **Collapse** to minimal import shim → `visual-shell.css` + `visual-base.css` |
| `assets/css/r-practice.css` | **Move** → `visual-labs.css` (R section) |
| `assets/css/portal.css` | **Move** → `visual-shell.css` landing section or `visual-learning.css` home |
| `assets/css/portal-critical.css` | Regenerate from new tokens |
| `assets/css/common.css` | Align generated-portal to fleet tokens or isolate |
| Module `css/styles.css` | Reduce to `@import` chain of new visual files only |
| Duplicate rules inside premium-refinement (PASS 3/4/7/8 overlaps) | Delete, not port |
| mikro1/oekonometrie dead renderer helpers (`buildMicroIntuitionPanel`, etc.) | Remove after visual migration (logic cleanup pass) |

---

## 3. Proposed new visual architecture

### CSS file structure (`assets/css/visual/`)

```
assets/css/visual/
  visual-tokens.css      ← single :root + body.light-mode (all hex/rgb HERE only)
  visual-base.css        ← reset, box-sizing, typography, focus ring
  visual-shell.css       ← #app grid, sidebar, topbar, breadcrumb, tabs, progress, consent
  visual-primitives.css  ← Button, Card, Badge, Tab, AlertBox, FormulaBox, ConnectionBox, ModuleCard
  visual-learning.css    ← theory, Aufgaben, Formeln, Einsatzgrenzen, Klausurmethodik, exam
  visual-labs.css        ← Grafik shell, graph controls, R-Übung workspace
  visual-responsive.css  ← ≤900px, 375/320 audits, rail collapse, overflow clip
  visual-dark.css        ← theme overrides LAST (dark default + light-mode block)
```

**Load order (modules):**

1. `visual-tokens.css`
2. `visual-base.css` → `visual-shell.css` → `visual-primitives.css`
3. `visual-learning.css` + `visual-labs.css` (if module has R/graph)
4. `visual-responsive.css`
5. `visual-dark.css`

**Module shim** (`statistik/css/styles.css` example):

```css
@import url('../../assets/css/visual/visual-tokens.css');
@import url('../../assets/css/visual/visual-base.css');
/* … */
```

### Primitive / component contract

Map existing BEM classes to primitives (JS keeps emitting BEM; CSS uses single primitive definition):

| Primitive | Canonical selectors (emit from JS) | Notes |
|-----------|-------------------------------------|-------|
| **Shell** | `#app`, `#sidebar`, `#main`, `#topbar`, `#tabRow`, `#content`, `#rightPanel` | One grid definition |
| **SidebarItem** | `.nav-item`, `.nav-section-title`, `.nav-item__aside` | 3px active bar only |
| **TabNav** | `.tab-btn`, `.tab-btn--unavailable`, `[data-tab="r"]` flagship | No duplicate `::after` stacks |
| **Button** | `.btn`, `.btn.secondary`, `.btn--ghost`, `.btn--xs`, `.btn-primary` (R only) | Single source |
| **Card** | `.section-block`, `.problem-card`, `.exam-drill-card`, `.formula-card`, `.home-card` | Shared radius/shadow/padding |
| **Badge** | `.platform-chrome-badge`, `.lesson-hero-chip`, status badges | Three families from tokens |
| **Callout** | `.warning-card`, `.learning-trap`, `.warn-box` | Amber soft stack |
| **FormulaBlock** | `.f-eq`, `.math-block`, `.rp-formula`, `mjx-container` | `--math-ink` magenta only, no `!important` |
| **ConnectionBox** | `.rp-conn`, `.cf-conn`, `.arrow--dir-*` | Directional arrow colors |
| **ModuleCard** | `.module-lesson-card`, `.home-action-card`, `.lp-tile` | Landing + home |
| **ReferenceCard** | `.rule-zone`, `.rule-zone--{use,assumptions,invalid,mistakes}` | Tokenized semantic bands |
| **PlaybookCard** | `.klausur-playbook-card`, `.klausur-playbook-row` | Klausurmethodik |
| **ExerciseCard** | `.problem-card`, `.exam-drill-card`, `.prob-actions` | Max 3 visible buttons before expansion |
| **SolutionPanel** | `.prob-solution`, `.solution-steps` | Staged reveal panel |
| **ChartShell** | `.graph-container`, `.graph-shell`, `.graph-stage`, `.graph-controls` | From `graphShell.js` |
| **CodeLabShell** | `.r-practice-workspace`, `.r-editor`, `.r-output` | From `rPractice.js` |
| **PageHeader** | `.lesson-hero-card`, `.concept-header` | Title area |
| **RightRail** | `#rightPanel`, `.rp-section` | 260–280px companion |
| **RightRailSection** | `.rp-formulas`, `.rp-connections`, `.rp-mistakes` | Hide when empty |
| **ProgressBar** | `.progress-track`, `.progress-fill` | Module/lesson progress |
| **ConfidenceSelector** | `.confidence-segments` | 0–3 persisted levels |
| **NextStepFooter** | `.lesson-next-step` | Tab-aware CTA |

**Drop** unused PascalCase `.Card`/`.Tab` aliases unless JS adopts them in a later phase.

### Final visual laws (enforced in new layer)

1. Most things are neutral.
2. Math is magenta (`--math-ink`).
3. Blue is interaction only.
4. Warnings are amber/red.
5. Success/completion is green.
6. No fake links.
7. No colored block stacks.
8. No exercise card shows more than 3 visible buttons before expansion.
9. No raw math/entity/HTML artifacts.
10. Pages composed from primitives, not page-specific visual inventions.

---

## 4. Migration order

| Phase | Surface | CSS target | JS touch | Gate |
|------:|---------|------------|----------|------|
| 0 | Scaffold | Add `visual/*.css`, parallel import behind flag | None | `npm run validate` |
| 1 | **Shell** | `visual-tokens`, `visual-base`, `visual-shell` | None | `check-portal-shell`, sidebar screenshot |
| 2 | **Primitives** | `visual-primitives` | None | Button/card/tab pixel diff |
| 3 | **Theory** | `visual-learning` (theory subset) | Class audit only | Statistik/Mikro theorie screenshots |
| 4 | **Aufgaben** | `visual-learning` (practice) | None | Aufgaben desktop/mobile |
| 5 | **Formeln** | Einsatzgrenzen + formula grid + Klausurmethodik | None | Formeln tab + rule-zone colors |
| 6 | **Right rail** | Shell width + `#rightPanel` | None | `check-right-rail`, clip test 375px |
| 7 | **Grafik** | `visual-labs` graph section | None | Bivariat graph screenshots |
| 8 | **R-Übung** | `visual-labs` R section | None | `check-r-tab-lab`, R mobile screenshot |
| 9 | **Landing** | Port from `portal.css` | `common.js` classes unchanged | landing desktop/mobile/dark |
| 10 | **Dark/mobile** | `visual-dark`, `visual-responsive` | Theme localStorage smoke | Full design-closure pass 23 PNGs |

**Per-module rollout:** statistik + mikro1 first (screenshot coverage), then fleet modules, then `generated-portal` outliers.

---

## 5. Risk areas

| Risk | Why | Mitigation |
|------|-----|------------|
| **Math rendering** | `!important` on `mjx-container`; MathJax async typeset | Single `--math-ink` rule in `visual-primitives`; typeset after tab switch; `check-math-literals` |
| **R state** | `rPractice.js` DOM-heavy; editor focus, local code persistence | Migrate CSS only first; no markup renames; `check-r-tab-lab` |
| **Graph canvas** | Module-specific `graphs.js` colors (`plane.colors.math`) | Keep JS colors reading CSS vars via `graphTheme.js` |
| **localStorage** | Theme (`theme`), consent keys, progress | Do not change keys; visual-dark last |
| **Dark mode** | `body.light-mode` vs landing `theme-light` | Unify on one class strategy in visual-dark |
| **Screenshot scripts** | 23 golden PNGs at `docs/audits/screenshots/design-closure-pass/` | Re-capture after each major phase; pin Playwright viewport |
| **Module forks** | mikro1/ökonometrie renderer duplication | Freeze forks during CSS migration |
| **Generated portal** | `common.css` purple theme diverges | Last; or deprecate modules |
| **Specificity wars** | 11k lines of `#content .formula-card` chains | New file = lower specificity BEM + tokens |

---

## 6. Validation additions

Extend `tools/exam-os/ci-validate.mjs` with:

| Script | Purpose |
|--------|---------|
| `check-visual-tokens.mjs` | Fail if `#hex` or `rgb(` appears outside `visual-tokens.css` (allowlist `portal-critical`) |
| `check-css-duplicates.mjs` | Fail if same selector defined in >1 visual file |
| `check-pedagogy-classes.mjs` | Extract `class="..."` from `learnerPedagogy.js` + `renderer.js` templates; require matching rule in `visual-*.css` |
| `check-math-ink.mjs` | Fail on `mjx-container` + `!important` outside `visual-primitives.css`; require `var(--math-ink)` on math containers |
| `check-inline-color.mjs` | Fail on `style="...color:#` in `portal-core/**` (allow `var(--*)`) |
| `check-rule-zone-tokens.mjs` | Ensure `.rule-zone--*` uses semantic tokens not raw hex fallbacks |

**Extend existing:**

- `check-learner-ui-literals.mjs` — forbidden legacy classes, raw entities, forbidden strings, max 3 visible pre-expansion buttons, fake blue links if detectable, empty right rail, empty Vor den Aufgaben
- `check-sidebar-markers.mjs` — scan new `visual-shell.css` only
- `capture-design-closure-pass.mjs` — add ökonometrie R-tab + makro1 formeln after migration

**Manual gate:** `npm run validate && npm run trust:pass1`

---

## 7. Rebuild vs patching — verdict

**Recommend: clean rebuild of the CSS presentation layer.**

**Reasons:**

1. **`premium-refinement.css` is an accretion log** (PASS 3, 4, 7, 8, 14, 28–63, design closure) with intentional duplication and rollback comments — each new fix adds specificity debt.
2. **Two authoritative shells** (`mikro1/css/styles.css` + premium-refinement) both define buttons, tabs, cards, math, and right rail — patching cannot converge without a third overlay.
3. **Design closure aliases (`.Card`, `.Tab`) are not wired to JS** — patching PascalCase blocks does not simplify learner HTML.
4. **Product logic is already centralized** — `createRenderer()` means CSS-only migration preserves routes, data, math, R, graphs, validation.
5. **CI + screenshots provide a safety net** — 23 design-closure PNGs + exam-os guards make incremental rebuild verifiable.

**When patching would be justified:** hotfix for a single production regression before migration scaffold lands. Otherwise, Phase 0 parallel CSS import + phased cutover is lower total cost than PASS 64+.

---

## Appendix: context references

- Design closure: `fc13b22`
- Defect fixes: `f1c2f8f`
- Pedagogy pass: `docs/audits/2026-06-03-pedagogical-ui-system-pass-4.md`
- Formeln/Klausurmethodik: `docs/audits/2026-06-03-formeln-klausurmethodik-ui-pass.md`
- CI entrypoint: `npm run validate` → `tools/exam-os/ci-validate.mjs`
