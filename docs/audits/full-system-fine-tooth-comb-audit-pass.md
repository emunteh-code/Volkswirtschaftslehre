# Full-system fine-tooth-comb audit

**Date:** 2026-04-12  
**Posture:** Hostile but fair. Goal: expose weaknesses that reduce learning value, trust, usability, maintainability, responsiveness, clarity, source fidelity, visual quality, or release readiness.  
**Method:** Codebase inspection, architecture tracing, policy docs (`AGENTS.md`, `modules.js`), shared-system reads, and **automated browser verification** where a harness exists. **Not** claimed: line-by-line PDF-to-HTML verification for every concept (would require a dedicated corpus QA pass).

**Issues fixed during this pass:** none (audit-only).

---

## A. Executive verdict

The repository is **ambitious and deployable**, with a **serious** shared shell (`portal-core`, `premium-refinement.css`, consent, navigation patterns) and **strong pockets** (notably curated-style modules that follow the mikro1 benchmark pattern: dedicated `chapters`, manifests, graphs, exams).

As a **single public product**, it is **not yet genuinely release-ready**: two different “portal brains” coexist (module `js/main.js` + local UI **vs** `assets/js/generated-portal/main.js` + massive `dataFactory.js`), **per-module renderer/rightPanel duplication** remains high, **source fidelity is uneven by construction** (mikro2 explicitly not `direct-source`-anchored; generated content is high-risk for trust if not continuously reconciled with `source-materials/`), and **student trust signals** (provenance density, consistent light/dark semantics, Prüfungstransfer wiring) still show **engineering debt** visible in code comments and fallbacks.

**Classification:** **usable but inconsistent** — closer to “strong internal learning platform with visible seams” than to “shippable consumer-grade product without embarrassment.”

**Browser work performed:** `tools/clickthrough/verify-right-panel-fallback.mjs` (Chromium, multiple viewports, Statistik/Recht/Jahresabschluss/Mikro1/Ökonometrie-R-tab, focus mode) completed with **exit code 0** in this session. That validates **right-panel / main-column mistakes + Verbindungen (Theorie-only) + integrated mistakes DOM** for the scripted matrix — **not** full visual QA of every tab on every module.

---

## B. Module-by-module audit

For each module: **15 categories** are scored qualitatively (**strong / mixed / weak / n/a**). This is **judgment + sampling**, not exhaustive proof.

| Module | Trust | Source | Rendering | Responsive | Notes |
|--------|-------|--------|-----------|------------|--------|
| **Landing** (`index.html` + `common.js`) | mixed | n/a | mixed | strong | Clear module shelf; **theme classes** (`theme-light` / `theme-dark`) differ from in-course **`body.light-mode`** pattern → risk of inconsistent token application between landing and modules. |
| **mikro1** | strong | strong (policy benchmark) | strong | mixed | Benchmark path; local `renderer.js` + graphs + manifest; high bar for others. |
| **mikro2** | weak–mixed | **weak by policy** | mixed | mixed | **`status: "hidden"`** in `modules.js` but course exists on disk; **no Mikro II folder in `source-materials/`** per `AGENTS.md` — must stay labeled **source-distilled** / platform-added; trust risk if ever exposed as “official course clone.” |
| **makro1** | mixed | mixed | mixed | mixed | Graph engine complexity; recent audit history in repo suggests graphs were a pain point; needs ongoing regression. |
| **makro2** | mixed | mixed | mixed | mixed | Live module; corpus exists under `source-materials/Makroökonomik II` — fidelity is a **process** question, not proven here. |
| **statistik** | mixed | mixed | mixed | strong | Covered by fallback verification script; theory + tasks heavy. |
| **oekonometrie** | mixed | mixed | mixed | mixed | R-tab + coding surfaces = **high interaction brittleness** (browser R, WebR, user env); local `renderer.js` parallels mikro1 patterns → **drift risk** vs `portal-core/ui/renderer.js`. |
| **finanzwirtschaft** | mixed | mixed | mixed | mixed | Quant + narrative; long HTML strings in data — **harder to review** for math leaks and notation drift. |
| **jahresabschluss** | mixed | mixed | mixed | mixed | Mixed legal/schema content; layout edge cases likely on small screens. |
| **recht** | mixed | mixed | mixed | mixed | Text-heavy; readability and scanability are the main trust drivers. |
| **internationale-wirtschaftsbeziehungen** | mixed | mixed | mixed | mixed | Broad scope; coherence across subtopics is harder than in narrow micro courses. |
| **mathematik** | mixed | mixed | mixed | mixed | Math density → **rendering and overflow** are primary risks. |
| **Generated shell: `r/index.html`, `politisches-system-brd/index.html`** | weak–mixed | **mixed / unclear** | mixed | mixed | **Not listed in `PUBLIC_MODULES`** in `modules.js` — parallel entry via `generated-portal/main.js`. Students can still land there via URL/bookmarks. **Second product surface** with different boot path than module `js/main.js`. |
| **Shared “R” systems** | mixed | n/a | mixed | mixed | Split between `portal-core/features/rPractice.js`, generated catalog, module tabs — **integration surface area** is large. |
| **Shared graphs** | mixed | mixed | mixed | mixed | Module graph engines + `examGraphs` + light-mode comments show **past bugs**; graphs are classic regression vectors. |

---

## C. Shared-system audit

| System | Role | Assessment |
|--------|------|------------|
| **`createPortalApp`** (`portal-core/app.js`) | Orchestration | **Strong spine**; exposes `window.__toggleExamDrill` etc. **Comment admits** Prüfungstransfer modules may omit renderer export → **fallback DOM path** = latent UX inconsistency. |
| **`createRenderer`** (`portal-core/ui/renderer.js`) | Concept rendering, tabs, provenance injection, fallbacks | **Central** for modules wired to it; **not the only renderer** in repo (many `*/js/ui/renderer.js`). |
| **`warningSystem.js` + fallbacks** | Rail + main-column mistakes | **Improved** (unified mistakes surface Pass 70); automated harness checks structure counts. |
| **`rightPanel.js` + per-module `rightPanel.js`** | Rail | **Fragmentation risk**: shared builder exists but **many modules still carry local `rightPanel.js`** (merge history) — easy for one module to **miss** a shared behavior fix. |
| **Provenance** (`sourceProvenanceUi.js`, `getConceptProvenance` per module) | Trust | **Shared strip builder** + **per-module manifest** → correct architecture, but **coverage and wording consistency** vary by module manifest completeness. |
| **`premium-refinement.css` + module `styles.css`** | Visual system | **Two-layer** system (global premium + large per-module CSS). **Coherence depends** on import order and duplication — classic “stitched products” risk. |
| **`generated-portal/dataFactory.js`** | Synthetic / bulk content | **Maintainability hazard** (very large). **Trust hazard** if treated as authoritative without continuous reconciliation to `source-materials/`. |
| **Math** (`mathjax.js` modules, `mathDelimiters.js`) | Rendering integrity | **Shared helpers** exist; **leaks** (raw `\[` etc.) remain an **ongoing QA** category, not a one-time fix. |
| **Exams / drills** (`fullExam.js`, `exam.js`, module data) | Exam prep | **Feature-rich**; edge cases in text vs MCQ vs graphs require **dedicated QA matrix**. |

---

## D. Severity-grouped findings

Each finding uses the required structure (compressed for scanability; expand in follow-up tickets).

### Severity 1 — release blockers

**1. Dual portal stacks without a single “source of runtime truth”**  
- **Severity:** 1  
- **What is wrong:** Curated modules boot via `*/js/main.js` + local renderer/rightPanel; **`r/`** and **`politisches-system-brd/`** boot **`assets/js/generated-portal/main.js`** + `dataFactory.js`. Same brand, different content pipeline and surface area.  
- **Why it matters:** Regression risk, trust risk (“which portal am I in?”), and duplicated fix surface for tabs, provenance, R, and math.  
- **Where:** `assets/js/generated-portal/main.js`, each `*/js/main.js`, `politisches-system-brd/index.html`, `r/index.html`.  
- **Shared vs local:** **Architectural / shared**.  
- **Recommended fix:** Long-term: **one boot path** per public URL, or hard separation (subdomain + explicit “lab” labeling). Short-term: document in-product + CI smoke for **both** stacks.  
- **Type:** code, trust, maintainability.

**2. mikro2 academic identity vs repository source policy**  
- **Severity:** 1 *if marketed as course-faithful*; mitigated while **hidden** from `PUBLIC_MODULES`.  
- **What is wrong:** `AGENTS.md` states **no Mikro II corpus** on disk; content cannot be `direct-source`-anchored the same way as Mikro I.  
- **Why it matters:** A skeptical student treats “university portal” claims as **exam-risk**. Hidden status reduces exposure but **does not remove** the underlying trust debt if deep-linked.  
- **Where:** `mikro2/`, `modules.js` (`sourceCorpusInRepo: false`), audits referenced in `AGENTS.md`.  
- **Shared vs local:** module + policy.  
- **Recommended fix:** Keep hidden until corpus exists **or** rebrand in-module banners to **explicit** “platform curriculum / not course PDF mirror.”  
- **Type:** source, trust.

**3. Prüfungstransfer interaction relies on global + optional renderer export**  
- **Severity:** 1 *when broken on a module* (user-visible “button does nothing”).  
- **What is wrong:** `app.js` documents that **`window.__toggleExamDrill`** may need a **fallback** if modules omit `toggleExamDrill` from renderer.  
- **Why it matters:** Silent partial functionality is worse than an error — student assumes incompetence.  
- **Where:** `assets/js/portal-core/app.js` (comment + `toggleExamDrill` wiring), module renderers.  
- **Shared vs local:** shared + per-module.  
- **Recommended fix:** **CI assertion**: every module exporting `createPortalApp` must expose **same** renderer API surface (or import shared renderer only).  
- **Type:** code, UX, trust.

### Severity 2 — major weaknesses

**4. Per-module `renderer.js` forks (e.g. mikro1 vs oekonometrie vs portal-core)**  
- **Severity:** 2  
- **What is wrong:** Large parallel implementations of practice panels, Prüfungstransfer, etc.  
- **Why it matters:** Fixes (a11y, math re-render, provenance order) **do not propagate** automatically.  
- **Where:** `mikro1/js/ui/renderer.js`, `oekonometrie/js/ui/renderer.js`, `assets/js/portal-core/ui/renderer.js`.  
- **Shared vs local:** both.  
- **Recommended fix:** Gradual convergence: shared `renderPracticePanel` builders from portal-core with module hooks only for data.  
- **Type:** code, maintainability.

**5. Theme token duality (`theme-light` vs `body.light-mode`)**  
- **Severity:** 2  
- **What is wrong:** Landing `common.js` toggles `theme-light` / `theme-dark`; modules use **`light-mode`** heavily in CSS and some JS graph engines.  
- **Why it matters:** Subtle **visual bugs** and “wrong colors in graphs” reports.  
- **Where:** `assets/js/common.js`, module `theme.js`, `premium-refinement.css`, graph engines.  
- **Shared vs local:** shared.  
- **Recommended fix:** Single body class contract + CSS variables only.  
- **Type:** design, responsive, code.

**6. `dataFactory.js` scale and opacity**  
- **Severity:** 2  
- **What is wrong:** Monolithic generated data file is hard to review, diff, and attribute.  
- **Why it matters:** **Source fidelity** and **reviewability** are trust prerequisites.  
- **Where:** `assets/js/generated-portal/dataFactory.js`.  
- **Shared vs local:** shared (generated portal).  
- **Recommended fix:** Split by course slug + provenance metadata per block + generator tooling.  
- **Type:** maintainability, source, trust.

**7. Provenance coverage uneven across modules**  
- **Severity:** 2  
- **What is wrong:** `getConceptProvenance` is per-module; empty or sparse layers → **missing trust signal** where students expect “where is this from?”  
- **Why it matters:** Policy requires source status; absent footers **read as omission**.  
- **Where:** `*/js/data/contentManifest.js` + `buildConceptProvenanceStripHtml` consumers.  
- **Shared vs local:** both.  
- **Recommended fix:** Manifest lint: every live concept must declare ≥1 layer or explicit `platform-added` reason.  
- **Type:** trust, source.

**8. R-tab / WebR failure surfaces**  
- **Severity:** 2  
- **What is wrong:** R-in-browser stacks are inherently fragile across browsers, memory, and network.  
- **Why it matters:** When R fails, the **whole tab** can feel “broken product” unless error UX is premium.  
- **Where:** `portal-core/features/rPractice.js`, Ökonometrie R tab.  
- **Shared vs local:** shared.  
- **Recommended fix:** Dedicated offline/failure card + retry + “copy code to desktop R” escape hatch.  
- **Type:** UX, trust, code.

**9. Graph label and curve regression risk**  
- **Severity:** 2  
- **What is wrong:** Canvas/SVG graphs are module-specific; prior audits referenced Phillips / readability issues.  
- **Why it matters:** Wrong curve = **wrong pedagogy** (worse than missing graph).  
- **Where:** `makro1/js/ui/graphEngine.js` (and peers).  
- **Shared vs local:** mostly local.  
- **Recommended fix:** Visual regression snapshots per canonical parameter set.  
- **Type:** pedagogy, rendering, trust.

**10. Accessibility not systematically enforced**  
- **Severity:** 2  
- **What is wrong:** Partial ARIA (tabs, some buttons); no evidence of systematic contrast audit or keyboard traps audit in repo.  
- **Why it matters:** Public university positioning implies **basic a11y** baseline.  
- **Where:** global.  
- **Shared vs local:** shared.  
- **Recommended fix:** axe-core CI on representative routes + focus-visible audit on tab rows and graph controls.  
- **Type:** accessibility, trust.

### Severity 3 — polish / consistency

**11. Module card copy homogeneity (`accent: "#7c3aed"` repeated)**  
- **Severity:** 3  
- **What is wrong:** `modules.js` uses identical accent for many modules.  
- **Why it matters:** Weak **information scent** on landing.  
- **Where:** `assets/js/modules.js`.  
- **Recommended fix:** Distinct accents per domain cluster.  
- **Type:** design.

**12. Long inline HTML in finance / generated strings**  
- **Severity:** 3  
- **What is wrong:** Harder to lint and format; risks unclosed tags or inconsistent typography classes.  
- **Where:** e.g. `finanzwirtschaft/js/data/chapters.js` patterns seen in grep.  
- **Recommended fix:** MDX-like pipeline or template components.  
- **Type:** maintainability, rendering.

**13. “Stitched” density: many tabs on one concept**  
- **Severity:** 3  
- **What is wrong:** Power users like tabs; novices can feel **overwhelmed** without progressive disclosure.  
- **Where:** all modules with full tab row.  
- **Recommended fix:** Default “recommended path” chip or collapsed tab groups on mobile.  
- **Type:** UX, responsive.

### Severity 4 — optional improvements

**14.** Icon-only controls without text on small breakpoints (module-dependent).  
**15.** Microcopy harmonization (“Lösung” vs “Musterlösung” vs reveal labels) across modules.  
**16.** Performance: MathJax + large DOM on low-end phones — lazy render per tab.

---

## E. Top 10 highest-priority fixes

1. **Unify or explicitly productize** the `generated-portal` vs `module js/main.js` split (no silent second-class experience).  
2. **Enforce renderer API parity** across modules (`toggleExamDrill`, math hooks, provenance) — remove reliance on `app.js` fallback.  
3. **Single theme contract** (`light-mode` vs `theme-light`) end-to-end, including graphs.  
4. **mikro2 trust policy**: keep hidden **or** add corpus + provenance; never blur `direct-source` semantics.  
5. **Split / document `dataFactory.js`** with per-block provenance and review ownership.  
6. **Provenance manifest lint** for all live concepts.  
7. **Graph golden-screens** + parameter tests for Makro/Statistik canonical figures.  
8. **R-tab resilient UX** (failure, retry, copy-out).  
9. **Consolidate `rightPanel.js`** implementations onto shared `createRightPanelRenderer` + thin adapters.  
10. **Automated a11y smoke** (axe) on: landing, mikro1 theory, statistik graph, ökonometrie R, one full-exam screen.

---

## F. Release-readiness judgment

**What still blocks calling the portal “genuinely strong” as one product:**

1. **Architectural honesty:** two boot stacks + large generated data without obvious student-visible differentiation.  
2. **Trust proof:** systematic source-to-screen traceability is **policy-level** strong but **execution-level** uneven (manifests, mikro2, generated portal).  
3. **Interaction parity:** Prüfungstransfer and other globals must not depend on per-module memory.  
4. **Visual/system coherence:** dual theme systems + heavy per-module CSS fight the “one premium product” bar.  
5. **QA bandwidth:** graphs, math, R, and responsive edge cases need **continuous** harnesses, not one-off audits.

---

## Appendix: Browser audit evidence (this session)

| Check | Result |
|--------|--------|
| `node tools/clickthrough/verify-right-panel-fallback.mjs` | **Exit 0** |
| Viewports exercised by script | 1400, 1201, 1200, 1199, 768, 820, 390, 428 + focus 1400 |
| Modules touched by script | Statistik, Recht, Jahresabschluss, Mikro1, Ökonometrie (R-tab spot) |
| Assertions | No duplicate visible Verbindungen; Theorie-only connections mirror at narrow; integrated mistakes (`theorie-fallback-support` count 1, legacy cards 0) |

**Not covered by script:** landing, politisches-system-brd, r shell, full exam flows, graph pixel correctness, manual light/dark pass, screen reader pass — **scheduled as human + visual regression work**, not dismissed as “probably fine.”

---

## Appendix: Code audit evidence (samples)

- `AGENTS.md` — mikro2 source corpus rule.  
- `assets/js/modules.js` — `PUBLIC_MODULES`, mikro2 `hidden`, `sourceCorpusInRepo: false`.  
- `assets/js/portal-core/app.js` — Prüfungstransfer / `__toggleExamDrill` fallback comment.  
- `mikro1/js/main.js` vs `assets/js/generated-portal/main.js` — import graph divergence.  
- `assets/js/common.js` vs `recht/js/utils/theme.js` — class name divergence for light theme.

---

*End of audit document. Next phase: turn Severity 1–2 items into scoped implementation passes with acceptance tests per pass.*
