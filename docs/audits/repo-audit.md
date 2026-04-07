# Repository audit — architecture, modules, gaps, target model

**Scope:** Read-only audit. No production UI or module runtime behavior was changed.  
**Date:** 2026-04-08  
**Author:** Cursor agent (codebase inspection)

---

## 1. Current architecture and shared core patterns

### 1.1 High-level shape

The site is a **static multi-page application**: a root landing page (`index.html`) plus **one folder per module**, each with its own `index.html`, CSS, and ES modules under `js/`.

**Shared runtime kernel:** `assets/js/portal-core/app.js` exports `createPortalApp`, which wires:

- **State:** module-local `appState` + `storage` (progress, streak, last concept, SRS, consent).
- **Navigation:** `buildNav`, `filterNav`, badges, progress bar.
- **Rendering:** `renderer` (theory / graph / practice / formulas / intuition / optional R tab), `rightPanel`.
- **Graphs:** `graphs.initGraph` and registered draw functions exposed on `window`.
- **Assessment:** quick exam, full exam, SRS review, optional exam canvas graphs (Hicks, demand, isoquant).
- **Chrome:** theme, keyboard shortcuts, toasts, MathJax hook.

Most quantitative modules **bootstrap the same way**: `main.js` imports `createPortalApp` and passes module-specific `CHAPTERS`, `storage`, `renderer`, `graphs`, feature adapters, etc. (see e.g. `mikro1/js/main.js`, `makro1/js/main.js`, `recht/js/main.js`).

### 1.2 Shared content rendering

`assets/js/portal-core/ui/renderer.js` implements `createRenderer({ ... })`, the **default pedagogical shell**:

- Builds **tab availability** from content: graph tab if `graphConcepts.has(id)`, formulas if non-empty meaningful `formeln`, intuition if intuition data passes filters, `r-anwendung` only when an R panel renderer and per-concept R blocks exist (`updateTabButtons` / `tabAvailability` around lines 250–258 and 634–646 in that file).
- **Supplemental practice tasks** can be synthesized from theory structure (DOM parse of `.section-block` / `.warn-box`) when authored tasks are few (`buildSupplementalPracticeTasks`, `extractTheorySignals`).
- **Empty `CONTENT` entry fallback:** if a chapter id exists in `CHAPTERS` but not in `CONTENT`, the renderer shows a **generic placeholder** (“Nutze für dieses Thema die Kapitelverbindungen…”) rather than source-backed material (`renderContent` branch when `!entry`).

### 1.3 Cross-cutting assets

- **`assets/js/modules.js`:** module registry for the landing page (titles, hrefs, filters). Includes a **`sourceRoot`** constant pointing at a **developer-local absolute path**, which is fragile for portability and unrelated to deploy-time asset roots.
- **`assets/js/module-content.js`:** rich **narrative metadata** (source groups, roadmaps, audit bullets) for **landing / generated portal** consumption — but **not all live modules have an entry** (see section 5).
- **`assets/js/portal-core/features/rPractice.js`:** WebR-based R practice; module-specific **preludes** (`buildStatisticsPrelude`, `buildEconometricsPrelude`) embed synthetic vectors / `data.frame`s for in-browser runs.
- **`assets/js/generated-portal/`:** large generated bundle (`main.js`, `dataFactory.js`) used by **`r/index.html`** and pieces of the landing pipeline — a **second delivery path** alongside per-module portals.
- **`assets/js/common.js`:** landing theme, module cards, onboarding hooks; imports `generated-portal/dataFactory` for chapter-count hints and `r-lab.js`.

### 1.4 Per-module copy pattern

Each module typically duplicates a **similar tree**: `js/data/{chapters,courseConfig,stepProblems,intuition,conceptLinks,masteryData,srsConfig,fullExams}.js`, `js/features/*`, `js/state/*`, `js/ui/*`, `js/utils/*`. This yields **parallel implementations** of `answerChecker`, `storage` keys, and small UI differences.

---

## 2. Why `mikro1` is currently the strongest module

`mikro1` is the strongest **benchmark** (as already stated in `docs/architecture/product-constitution.md` and `module-quality-standard.md`) for concrete technical reasons:

1. **Depth and granularity:** **33** concepts in `mikro1/js/data/chapters.js`, with large, structured `CONTENT` blocks (theory, formulas, multi-step `aufgaben`).
2. **Interactive graphs:** `mikro1/js/ui/graphPanel.js` defines `GRAPH_CONCEPTS` and detailed canvas UIs; `mikro1/js/ui/graphs.js` is a **large, module-specific** implementation (animations, tooltips, many draw routines) — not a stub.
3. **Renderer upgrades on top of the shared core:** `mikro1/js/ui/renderer.js` still uses `createRenderer` but adds **post-processing** (`enhanceRenderedSurface`): semantic math decoration, custom **practice** and **intuition** panels for micro content, **exam drill** UX, **concept-link** decoration, and a **home-card entry** for full exams (`ensureMikroHomeExamCard`). This is strictly **more** than the generic portal renderer.
4. **Full exams:** `mikro1/js/data/fullExams.js` contains **substantial** probeklausur-style material (e.g. W/F blocks, text tasks, embedded canvas hooks for Hicks), integrated via `createFullExamModule` like other modules but with **more complete** content.
5. **Tooling:** `mikro1/package.json` defines **Vitest** tests and a Vite build — the only module alongside `makro2` with a package manifest in-repo; tests live under `mikro1/src/tests/` and `src/utils/` (typed SRS / answer checking).

Together, this satisfies the constitution’s loop: **teach → practice → graphs → exams → review** with **module-specific strength** preserved.

---

## 3. Module comparison vs `mikro1`

| Module | Approx. concepts | Renderer | Graphs / R | Notes vs `mikro1` |
|--------|-------------------|----------|------------|-------------------|
| **mikro1** | 33 | `createRenderer` + heavy `enhanceRenderedSurface` | Rich canvas suite | Benchmark. |
| **makro1** | 13 | Thin `createRenderer` wrapper | Depends on `graphPanel` / `graphs` for that module | Strong **authored** macro line; fewer concepts; less custom renderer layering than `mikro1`. |
| **makro2** | ~19 chapter rows in `chapters.js` | Similar to `makro1` | Module graphs engine present | **Broader** than `mikro2` in breadth; `makro2` also has `package.json` + tests. |
| **mikro2** | **7** | Thin wrapper | Has `graphEngine` / graphs | **Much thinner** curriculum than `mikro1`; label “FINAL BENCHMARK STANDARD” in data file is **aspirational**, not depth-matched. |
| **statistik** | 12 + embedded R lab in `chapters.js` | Wrapper + `mountRPracticeBlocks` on render | R via **embedded markup** + WebR; graph panel for stats | Strong **R integration pattern**; theory still single-file HTML strings; different authoring style than `mikro1`. |
| **oekonometrie** | **~30** entries from `curriculum.js` | **`createRenderer` + large overlay** similar to `mikro1` (formal math, R tab via `renderRAnwendungTab`) | R blocks per concept | **Second module** with “mikro1-class” renderer investment; content built from **structured curriculum** (`sections`, `cards`) → HTML, not raw `String.raw` only. |
| **recht** | 12 | Thin `createRenderer` wrapper | **`graphs.js` is a no-op stub** (`initGraph` only) | Text/doctrinal focus; full exams exist and are substantive in sample. |
| **jahresabschluss** | 11 | Thin wrapper | Same tab shell as others | Authored accounting line; similar patterns to `finanzwirtschaft` / `recht`. |
| **finanzwirtschaft** | 13 | Thin wrapper | Module-specific graphs possible | Coherent chapter line; no `mikro1`-level renderer extras observed. |
| **mathematik** | **6** | Thin wrapper + `portalHub.js` calling **`mountLivePortalBridge('mathematik')`** | Standard module graphs stack | **Very coarse** chapterization vs math curriculum reality; `fullExams.js` explicitly **“Simulation v14.0”** — signals **synthetic / template** exam rather than archive-backed. |
| **internationale-wirtschaftsbeziehungen** | 12 (from file scan) | Same family | Quant graphs as in other VWL modules | Listed in `module-content.js` under quoted slug key. |
| **r** | N/A (standalone) | **`generated-portal/main.js`** | R lab section in `r/index.html` | **Not** in `MODULES` inside `assets/js/modules.js`; **is** in `module-content.js` as `r`. Split-brain between “module” lists and R landing. |

---

## 4. Dormant features, dead UI, duplication, data-shape inconsistency, weaker modules

### 4.1 Dormant / intentionally inactive

- **`assets/js/live-portal-bridge.js`:** `mountLivePortalBridge` is a **no-op** (comment: cross-module switcher frozen). `mathematik/js/portalHub.js` still calls it — **dead integration hook** from the module’s perspective.
- **Graph tab in HTML:** Many `index.html` files keep a **Grafik** button with `style="display:none"`; runtime **`updateTabButtons`** still controls visibility. The static `display:none` is **redundant** and can confuse audits (looks “dead” in markup though JS may show it when `graphConcepts` matches).
- **`r/index.html`:** Uses the **generated portal** pipeline while other courses use **native** `createPortalApp` folders; **progress UX and source metadata** may diverge from module benchmarks.

### 4.2 Duplicated logic

- Nearly identical **`main.js`** files across modules (same `createPortalApp` argument list).
- Repeated **`features/fullExam.js`** thin adapters (same `createFullExamModule` wiring).
- **Per-module** `answerChecker.js`, `storage.js`, `keyboard.js`, `theme.js`, etc., with likely **small drifts** over time.
- **`extractTheorySignals`** and supplemental task logic live in **portal-core**; **`mikro1`** duplicates similar **theory signal** extraction in its own renderer for custom panels — **two parallel parsers** to maintain.

### 4.3 Inconsistent data shapes

- **Theory field:** Most modules use HTML strings (`String.raw` or `section(...).join('')`). **Ökonometrie** uses **arrays of sections/cards/warnings** compiled through `escapeHtml` — different authoring and **MathJax** handling assumptions.
- **Full exams:** Shared engine in `portal-core/features/fullExam.js`, but **per-module** `FULL_EXAMS` shape varies (e.g. `mathematik` adds `options: { problemId, stepId, isDecision }` for stepped logic).
- **`module-content.js` keys:** Most slugs are bare identifiers; **`internationale-wirtschaftsbeziehungen`** uses a **quoted key** — consistent access must use the same string everywhere (`getModuleContent` callers).

### 4.4 Weak or risky modules (relative to benchmark)

- **`mikro2`:** Only **7** topics — high risk of **under-coverage** vs a real Mikro II course.
- **`mathematik`:** **6** mega-chapters and **simulation-labeled** exams — weak **granularity** and questionable **source alignment** unless explicitly scoped as primer-only.
- **Any module** with missing `CONTENT` entries relies on the **generic placeholder** path in portal-core renderer — **pedagogically weak** and **not source-faithful**.

### 4.5 Metadata and “progress” honesty

- Sidebar **progress** counts “seen” concepts from local storage (`navigation.js` pattern in `mikro1`); it is **not** a validated mastery model — fine if labeled honestly; risk if interpreted as curriculum completion against real courses.

---

## 5. Source fidelity — impossible, fragile, or missing today

### 5.1 No per-block source status in learning objects

`docs/architecture/content-pipeline.md` requires **source status** labels (`direct-source`, `source-distilled`, etc.). **No such field** appears on chapter content objects in the inspected JS data (grep over the repo found **no** `sourceStatus` / `direct-source` style markers in implementation). **Compliance is documentation-only** until the data model and renderer carry it.

### 5.2 Course materials are not first-class artifacts in the runtime model

- Learning content is **embedded JavaScript** (`chapters.js`, `curriculum.js`, etc.), not loaded from **versioned source files** (PDFs, decks) with stable IDs. **Traceability** from UI block → file → page is **manual** (maintainer knowledge + `module-content.js` prose for some modules).
- **`module-content.js` omits `mikro1` and `mikro2`.** The **strongest** modules therefore lack the **same landing-page source narrative** structure as `makro1`, `statistik`, `recht`, etc. — a **product inconsistency** and a **source-story gap** for the benchmark courses.
- **`assets/js/modules.js` `sourceRoot`:** Hard-coded **local filesystem path**; not usable as a shared truth for collaborators or CI, and **not** wired into content loading.

### 5.3 Fragile automation helpers

- **`extractTheorySignals`** requires `.section-block` with **`h3` + `p`**; sections that use only lists or atypical structure yield **empty signals** → worse supplemental tasks / exam drills.
- **WebR preludes** use **synthetic data**; useful for skills, but **not** automatic fidelity to a specific course dataset unless explicitly tied to provided materials.

### 5.4 Generated / simulation labeling

- **`mathematik` full exam** subtitle frames content as **simulation** — honest, but highlights **non-archive** provenance.
- **`generated-portal`** content factory builds exams from generic rules — high **risk of generic drift** unless constrained by audited source maps.

---

## 6. Target architecture (proposal)

Separate concerns into **five layers**, with clear contracts between them:

1. **Source materials layer**  
   - Immutable or versioned inputs: PDFs, slides, problem sets, past exams, R scripts, CSVs.  
   - **Inventory:** each file gets stable `source_id`, checksum, module, and optional page/slide anchors.  
   - **No** pedagogical strings here beyond what the documents contain.

2. **Course map layer**  
   - Ordered graph: **module → unit → concept → optional subskills**.  
   - Each node lists **which `source_id`s** justify it (many-to-many).  
   - Drives navigation order, prerequisites, and exam blueprints.

3. **Learning objects layer**  
   - Normalized payloads: theory HTML/MD, formulas, drills, graph specs, R notebook specs, assessments.  
   - **Mandatory `source_status`** + **`source_ref[]`** on every object (aligned with `content-pipeline.md`).  
   - Validated by schema (JSON Schema / TypeScript types) in CI.

4. **Learner state layer**  
   - Keys scoped by `module_slug` + `schema_version`.  
   - Stores attempts, mistakes, SRS scheduling, consent — **never** mixed with content definitions.  
   - Pluggable adapters: `localStorage` today; syncable backend later without rewriting content.

5. **UI delivery layer**  
   - **Shell:** single shared app or federated builds loading **manifests** (which module packs to fetch).  
   - **Feature plugins:** graph engines, WebR lab, exam modes, each declaring **capabilities** (e.g. `supportsTab('graph')`).  
   - **Two delivery modes** (`createPortalApp` vs `generated-portal`) should converge on the **same manifest + plugin API** to avoid duplicated product logic.

**Migration path (non-destructive):** start by **exporting** existing `CHAPTERS` / `CONTENT` to JSON + adding **source_status** on new edits; keep current bundles deployable; **do not remove** graphs or R until parity plugins exist.

---

## 7. Risks and recommended follow-ups (non-code for now)

- Add **`mikro1` / `mikro2` entries** to `module-content.js` **or** explicitly document why they are excluded.
- Remove or relocate **`sourceRoot`** from shared `modules.js` into private dev config.
- Unify **`r` module** listing: either add to `MODULES` or document as **experimental** and link from landing consistently.
- Schedule **schema documentation** for `FULL_EXAMS` task types per module (especially `mathematik` options).
- Plan **renderer consolidation**: either move `mikro1`/`oekonometrie` enhancements into **capability flags** on `createRenderer` or accept **forked** renderers with a compliance checklist.

---

## 8. Files inspected (exact list)

The following paths were **read** (in full or in substantial part) or **directly examined via structured search** (ripgrep / glob with file content review) during this audit:

- `AGENTS.md` (workspace rule; cited via project rules)
- `docs/architecture/content-pipeline.md`
- `docs/architecture/learning-data-model.md`
- `docs/architecture/module-quality-standard.md`
- `docs/architecture/product-constitution.md`
- `index.html`
- `assets/js/common.js`
- `assets/js/live-portal-bridge.js`
- `assets/js/modules.js`
- `assets/js/module-content.js` (multiple segments + key scan)
- `assets/js/portal-core/app.js`
- `assets/js/portal-core/ui/renderer.js`
- `assets/js/portal-core/features/rPractice.js`
- `finanzwirtschaft/js/data/chapters.js`
- `internationale-wirtschaftsbeziehungen/js/data/chapters.js` (path implied by glob; chapter count from shell `grep` on this file)
- `jahresabschluss/js/main.js`
- `jahresabschluss/js/data/chapters.js`
- `makro1/js/main.js`
- `makro1/js/data/chapters.js`
- `makro1/js/ui/renderer.js`
- `makro2/js/main.js`
- `makro2/js/data/chapters.js`
- `mathematik/js/main.js`
- `mathematik/js/portalHub.js`
- `mathematik/js/data/chapters.js`
- `mathematik/js/data/fullExams.js`
- `mikro1/index.html`
- `mikro1/package.json`
- `mikro1/js/main.js`
- `mikro1/js/data/chapters.js`
- `mikro1/js/data/courseConfig.js` (snippet via codebase search)
- `mikro1/js/data/fullExams.js`
- `mikro1/js/features/fullExam.js`
- `mikro1/js/ui/navigation.js`
- `mikro1/js/ui/renderer.js`
- `mikro1/js/ui/graphs.js`
- `mikro1/js/ui/graphPanel.js`
- `mikro2/js/data/chapters.js`
- `mikro2/js/main.js`
- `oekonometrie/js/main.js`
- `oekonometrie/js/data/chapters.js`
- `oekonometrie/js/ui/renderer.js`
- `r/index.html`
- `recht/js/main.js`
- `recht/js/ui/graphs.js`
- `recht/js/features/fullExam.js`
- `recht/js/data/fullExams.js`
- `statistik/js/data/chapters.js`
- `statistik/js/ui/renderer.js`
- `oekonometrie/js/data/curriculum.js` (via `rg` count of `id:` entries)

**Glob / ripgrep scans** (used to map the repo and locate patterns, including files not individually opened):  
`/**/*.tsx,*.ts,*.js` under the repo root (truncated listing), searches for `sourceStatus`, `createPortalApp`, `toggleExamDrill`, `MODULE_CONTENT` keys, `tabRow` / `data-tab` in HTML, and `fullExams` / `FULL_EXAMS` references across `*.js`.

---

*End of audit.*
