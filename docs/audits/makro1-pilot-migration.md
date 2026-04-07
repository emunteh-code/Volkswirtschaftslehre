# Makro1 pilot migration — audit, mapping, and follow-ups

**Date:** 2026-04-08  
**Scope:** Controlled pilot on **makro1 only** (no other modules, no `portal-core` rewrite).  
**Refs:** `docs/audits/repo-audit.md`, `docs/architecture/learning-data-model.md`, `docs/architecture/content-pipeline.md`, `docs/architecture/module-quality-standard.md`

---

## 1. Audit: makro1 vs canonical schema

| Canonical entity | makro1 implementation | Pilot coverage |
|------------------|------------------------|----------------|
| `module` | Folder + `courseConfig.js` + `main.js` | `contentManifestVersion` on `COURSE_CONFIG`; bridge payload exposes slug + counts |
| `chapter` | `CHAPTERS[].cat` (nav sections) | Not split into separate file; `MAKRO1_CONCEPT_PRIMARY_REFS` maps **concept → source paths** aligned with `module-content.js` roadmap |
| `concept` | `CHAPTERS[]` row + `CONTENT[id]` | Unchanged; manifest indexes all ids |
| `subtopic` | Implicit in HTML `.section-block` | Not extracted (same as pre-pilot); `extractTheorySignals` in portal-core still applies |
| `formula` | `CONTENT[id].formeln[]` | Provenance layer `formulas` on concept (rollup), not per-formula index |
| `graphFamily` / binding | `GRAPH_CONCEPTS` + `graphPanel.js` + `graphs.js` | **Unchanged**; manifest marks `graph.bindingKind: concept_canvas` when in set |
| `intuition` | `INTUITION[id]` | Provenance `intuition` when data exists |
| `learningObject` | Theory/motivation/tasks as `CONTENT` fields | Rollup provenance by **layer** (`theory`, `motivation`, `tasks`, …), not per DOM block |
| `examTask` / `fullExamDocument` | `fullExams.js` | `FULL_EXAM_PROVENANCE` for `probeklausur_1..3` |
| `attempt` / `masteryState` / `reviewItem` | `createStorageModule` keys | `MAKRO1_MODE_INDEX.*.mistakeTracking` documents keys and aggregate fields |

**Deliberate non-goals (pilot):** No JSON export pipeline, no renderer changes, no UI badges for `source_status`.

---

## 2. Audit: makro1 vs mikro1 benchmark

| Dimension | mikro1 | makro1 | Gap |
|-----------|--------|--------|-----|
| Concepts | 33 | 13 | Fewer scope-appropriate topics; not automatically a defect if course map matches one-semester Makro I |
| Renderer | `createRenderer` + `enhanceRenderedSurface` (semantic math, custom practice/intuition, exam drills, home exam card) | Thin `createRenderer` wrapper only | **Largest UX/pedagogy gap** — makro1 relies on generic exam drills + supplemental tasks |
| Graphs | Large canvas suite | 7 interactive concepts (`GRAPH_CONCEPTS`) | Strong for Makro I; different subject needs |
| Full exams | Very rich + embedded canvases | Three probeklausuren, engine-shared | Depth gap optional improvement |
| Tests | Vitest + TS SRS | None in pilot | Optional |
| Provenance (pilot) | None in data | **Pilot added** manifest layer | makro1 now **ahead on metadata** only |

---

## 3. Structural decisions

1. **Additive file `makro1/js/data/contentManifest.js`**  
   - Exports: `makro1SourceRef`, `MAKRO1_CONCEPT_PRIMARY_REFS`, `PROVENANCE_BY_CONCEPT`, `FULL_EXAM_PROVENANCE`, `MAKRO1_MODE_INDEX`, `getConceptProvenance`, `getConceptModeIndex`, `getMakro1PilotBridgePayload`.  
   - **Does not** mutate `CONTENT` or alter `createRenderer` inputs.

2. **Provenance model**  
   - **Theory / motivation / formulas:** `source-distilled` + `source_refs` copied from **`assets/js/module-content.js`** makro1 roadmap (and quality notes where Kap6 substitutes VL6).  
   - **Tasks (aufgaben):** `platform-added-drill` (klausurnahe training).  
   - **Intuition:** `platform-added-explanation`.  
   - **Graphs:** `platform-added-explanation` (interactive parameterization).  
   - **Step problems:** `platform-added-drill` with note on `options.problemId` / `stepId` for future mistake routing.  
   - **Full exams:** `platform-added-drill` with archive-style refs, notes that exams are **authored for portal**, not pasted scans.

3. **`COURSE_CONFIG.contentManifestVersion`**  
   - Single string `'2026.1-pilot'` for tooling and future schema bumps.

4. **`portalBridge` in `makro1/js/main.js`**  
   - Sets `window.__makro1PilotManifest` after load (same hook as `createPortalApp` already supports). **No visible UI change.** Intended for QA and future loaders.

5. **Mode index**  
   - Built from **live** `CONTENT`, `STEP_PROBLEMS`, `GRAPH_CONCEPTS` so counts stay in sync when content editors change data.

---

## 4. Mapping summary (content → canonical)

- **`CHAPTERS[]`** → `concept` (+ `chapter` inferred from `cat`).  
- **`CONTENT[id].theorie`** → `concept.theory` with `encoding: html_fragment` (joined `section()` strings).  
- **`CONTENT[id].aufgaben`** → `authoredTask[]` (manifest: `practice.authoredAufgabenCount`).  
- **`INTUITION`** → `intuitionBundle` (provenance layer `intuition`).  
- **`STEP_PROBLEMS`** (post-`ensureMinimumStepProblems`) → step problems + quick exam (`practice.stepProblemGroupCount`).  
- **`GRAPH_CONCEPTS`** → `graphBinding` `concept_canvas`.  
- **`FULL_EXAMS`** → `fullExamDocument` (provenance map `FULL_EXAM_PROVENANCE`).

---

## 5. Remaining gaps to mikro1-level quality

1. **Renderer overlay:** No mikro1-style `enhanceRenderedSurface`, semantic math pass, or custom exam-drill depth.  
2. **Exam drills:** Still generic `buildExamDrills` from portal-core unless later ported.  
3. **Home shell:** No dedicated “Probeklausuren” home card pattern from mikro1 (full exam still reachable via existing UI).  
4. **Per-formula / per-task provenance:** Pilot uses **concept-level** layers; finer granularity deferred.  
5. **Automated tests:** No Vitest mirror for makro1.  
6. **Runtime display of provenance:** Not wired — labels exist for **pipeline** only.

---

## 6. Migration risks

| Risk | Mitigation |
|------|------------|
| **Circular ES module imports** | `contentManifest` imports `courseConfig`, `chapters`, `stepProblems`, `intuition`, `graphPanel`, `srsConfig`; none of those import `contentManifest`. |
| **`window` pollution** | Single property `__makro1PilotManifest`; documented; devtools-only expectation. |
| **Path strings vs real filesystem** | Refs mirror **module-content.js** narrative; typos in PDF names do not break runtime (strings are symbolic). |
| **Drift** | Mode index **computed** from data; provenance paths are static — editors should update `MAKRO1_CONCEPT_PRIMARY_REFS` when roadmap changes. |
| **Bundle size** | Small constant overhead; no duplicate of `CONTENT`. |

---

## 7. Suggested next steps (outside this pilot)

1. Optional UI: provenance chip in dev mode only.  
2. Import `getConceptProvenance` from a future build script to emit `content/course-maps/makro1.json`.  
3. Align mikro1 with same manifest pattern for cross-module consistency.  
4. Consolidate theory parsing (portal-core vs mikro1 duplicate) per `content-pipeline.md`.

---

## 8. Files touched (this pilot)

| File | Change |
|------|--------|
| `makro1/js/data/contentManifest.js` | **New** — provenance, mode index, bridge payload |
| `makro1/js/data/courseConfig.js` | `contentManifestVersion` |
| `makro1/js/main.js` | `portalBridge` wiring |
| `docs/audits/makro1-pilot-migration.md` | **New** — this document |

---

*End of makro1 pilot migration notes.*
