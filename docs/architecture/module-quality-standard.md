# Module quality standard — operational checklist

A module **meets platform standard** only when the items below pass. This turns the former principles into **repo-verifiable** checks tied to `docs/audits/repo-audit.md` and `docs/architecture/learning-data-model.md`.

**Usage:** Use at PR time for **content or structural** changes to a module folder or shared `portal-core`. Mark **N/A** only with a short reason (e.g. recht: graph tab intentionally stubbed).

---

## 0. Identity and routing

| # | Check | How to verify | Audit ref |
|---|--------|----------------|-----------|
| 0.1 | `module_slug` matches folder name and `COURSE_CONFIG.slug` | Grep `slug` / folder | §1.1 |
| 0.2 | Listed in `assets/js/modules.js` `MODULES` if it is a first-class course link | Open root landing / `common.js` grid | §1.3, §3 (`r` split) |
| 0.3 | `module-content.js` has a key for this slug **or** documented exception in `content-pipeline.md` | Grep `module-content.js` | §5.2 (mikro1/2 gap) |
| 0.4 | Slug access is consistent (`internationale-wirtschaftsbeziehungen` quoted key) | `getModuleContent(slug)` callers | §4.3 |

### 0.5 Documented exceptions (do not assume full parity)

| Module | What differs | Where documented |
|--------|----------------|------------------|
| **mikro2** | No **`source-materials/`** Mikro II corpus → not **`direct-source`–anchorable**; **no** `contentManifest.js` / provenance bridge; **`mikro2/js/main.js`** omits **`portalBridge`** and **`mistakeReview`**; landing registry: **`sourceCorpusInRepo: false`** | `docs/audits/mikro2-status-guard-pass-2.md`, `docs/audits/mikro2-quarantine-roadmap-pass-1.md`, `AGENTS.md` |

---

## 1. Source fidelity

| # | Check | How to verify | Audit ref |
|---|--------|----------------|-----------|
| 1.1 | No silent reliance on **generic placeholder** for navigable concepts: every `CHAPTERS[].id` has a real `CONTENT[id]` (or explicit exception list in module README) | Compare `CHAPTERS` vs `CONTENT` keys | §1.2, §4.4 |
| 1.2 | **Provenance plan**: new or rewritten blocks have a documented `source_status` (per `content-pipeline.md`) even before runtime enforcement | Review note / sidecar / PR description | §5.1 |
| 1.3 | Exam items labeled honestly if **simulation** or non-archive (e.g. subtitle text) | Read `fullExams.js` titles | §5.4 |
| 1.4 | **Notation** does not drift from course materials for that module | Spot-check against source PDFs where available | constitution |

---

## 2. Pedagogical depth (mikro1 as benchmark, not blind copy)

| # | Check | How to verify | Audit ref |
|---|--------|----------------|-----------|
| 2.1 | Concept count and granularity are **credible** for the real course (flag if &lt; ~10 concepts for a full semester module unless scoped as primer) | Count `CHAPTERS` | §3 mikro2/mathematik |
| 2.2 | Each concept has **motivation** + **theorie** (or compiled equivalent) with exam-relevant structure | Open `chapters.js` / `curriculum.js` | §2 |
| 2.3 | **Aufgaben** exist for core concepts or deliberate rationale documented | Sample `aufgaben` arrays | §2 |
| 2.4 | Ökonometrie-style **structured** curriculum (`sections`, `cards`, `warnings`) is internally consistent (titles, math, tasks) | Read `curriculum.js` | §3 |

---

## 3. Active recall support

| # | Check | How to verify | Audit ref |
|---|--------|----------------|-----------|
| 3.1 | **Quick exam** path works: `stepProblems` and/or `examQuestions` wired in `features/exam.js` adapter | Click Schnelltest | §1.1 |
| 3.2 | **Step problems** use stable `options` ids where decision trees exist (`problemId`, `stepId`, `dependsOn`) | `stepProblems.js` | audit §4.3 |
| 3.3 | **Practice tab** shows attempt-first UI (not only read-only solutions) | Use Aufgaben tab | §2 |

---

## 4. Interactive reasoning (graphs, R, subject tools)

| # | Check | How to verify | Audit ref |
|---|--------|----------------|-----------|
| 4.1 | **Graph tab**: if `GRAPH_CONCEPTS` / `graphPanel` lists an id, `graphs.initGraph` implements it; if module is text-only, **stub is explicit** (e.g. recht) | Toggle Grafik on sampled concepts | §3, §4.1 |
| 4.2 | **Redundant HTML** `display:none` on Grafik tab does not hide bugs — runtime `updateTabButtons` is source of truth | Compare `index.html` vs `createRenderer` | §4.1 hidden tabs |
| 4.3 | **R**: if module uses WebR, blocks have stable ids; statistik **mountRPracticeBlocks** or ökonometrie **r-anwendung** path documented in module README | Run sample R block | §1.3, §3 |
| 4.4 | **Exam embedded canvases** (`canvas_hicks`, etc.) still wired in `fullExam.js` init if used in data | Grep `canvas_` in `fullExams.js` | §2 |

---

## 5. Assessment readiness

| # | Check | How to verify | Audit ref |
|---|--------|----------------|-----------|
| 5.1 | **Full exams**: `FULL_EXAMS` + `createFullExamModule` adapter present; at least one exam or documented WIP | Open Probeklausuren | §1.4 |
| 5.2 | **FULL_EXAMS** shapes match engine: `wf-block` / `text-block` flattening works; extensions (e.g. mathematik `options`) documented | Read `portal-core/features/fullExam.js` | §4.3 |
| 5.3 | **SRS** storage keys defined in `srsConfig.js` and consistent with `createStorageModule` | Grep keys | §1.4 |
| 5.4 | **Mastery** checklist data exists where UI shows mastery | `masteryData.js` / `MASTERY` | mikro1 pattern |

---

## 6. Consistency with platform backbone

| # | Check | How to verify | Audit ref |
|---|--------|----------------|-----------|
| 6.1 | Boot via `createPortalApp` with same **feature set** as siblings (or documented reduced set) | `main.js` | §1.4 duplicate adapters |
| 6.2 | **No dead hooks**: e.g. `mountLivePortalBridge` call only if bridge is real | `mathematik/js/portalHub.js` | §4.1 |
| 6.3 | **Consent** key unique per course (`COURSE_CONFIG.consentKey`) | `courseConfig.js` | §1.1 |
| 6.4 | **Theme / keyboard / toast / mathjax** adapters present; no orphaned `window.__` handlers in HTML | Grep `onclick="window.__` | §1.1 |

---

## 7. Renderer profile (declare explicitly in PR when changing UI)

| Profile | Typical files | Expectation |
|---------|----------------|-------------|
| **Thin** | `renderer.js` ≈ only `createRenderer(...)` | No post-processing; rely on portal-core |
| **Mikro1-style overlay** | `enhanceRenderedSurface`, exam drills, semantic math | Keep parity with benchmark behaviors when editing |
| **Ökonometrie-style** | `formalMath`, `renderRAnwendungTab`, `R_BLOCKS_BY_ID` | Preserve R tab + structured curriculum compile |
| **Generated portal** | `r/index.html`, `generated-portal/` | Document divergence from `createPortalApp` until converged |

---

## 8. Failure modes (auto-fail until fixed)

- **F1:** Nav item leads to **placeholder-only** concept with no tracked plan to add `CONTENT`.
- **F2:** New **exam** or **theory** content with **no** stated `source_status` on the learning object (once team enforces provenance).
- **F3:** **Graph tab** visible for a concept id but **no** working `initGraph` / panel (broken interactive).
- **F4:** **localStorage** key collision with another module (reuse of same `*_v1` key without slug prefix).

---

## 9. Original principles (summary)

1. Source fidelity  
2. Pedagogical depth (mikro1-level clarity where scope matches a full course)  
3. Active recall support  
4. Interactive reasoning where appropriate  
5. Assessment readiness  
6. Consistency without stripping module-specific strengths  

---

*End of module quality standard.*
