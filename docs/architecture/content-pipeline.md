# Content pipeline — architecture, target layout, and migration

This document is the **migration-oriented architecture** for the repository. It extends the original pipeline outline with **concrete repo mapping**, **target folder structure**, **portal-core strategy**, and a **gradual migration path**. It must be read together with:

- `docs/audits/repo-audit.md` (as-built findings)
- `docs/architecture/learning-data-model.md` (canonical schema)
- `docs/architecture/product-constitution.md` (product rules)

**Constraint:** The site must **remain deployable as a static multi-page app** throughout migration. No “big bang” rewrite.

---

## 1. Source truth (unchanged intent)

Actual course materials define:

- topics, terminology, notation, formulas, graph conventions, methods, exam expectations

The **platform** adds structure, interactivity, and assessment **only** with explicit `source_status` (see §6).

---

## 2. Pipeline stages (operational)

| Stage | Purpose | Current repo reality | Target state |
|-------|---------|----------------------|--------------|
| **1. Ingest** | Register every authoritative file | Materials often **outside** the repo; paths sometimes only in `module-content.js` prose | `sources/` inventory + manifest (see §4.1) with stable `ref_id` per `learning-data-model.md` |
| **2. Source inventory** | Searchable list + checksums / versions | No machine inventory in tree | `course/*/sources.json` or root `sources/registry.json` |
| **3. Course map** | Module → chapter (nav section) → concept | `CHAPTERS[]` + `cat`; ökonometrie `CURRICULUM` | Explicit `course-map.json` per module (can be **generated** from existing JS initially) |
| **4. Learning objects** | Normalized teach/practice/exam payloads | Embedded in `chapters.js`, `curriculum.js`, `fullExams.js` | `objects/*.json` **or** annotated JS exports validated at build time |
| **5. Provenance** | Every object labeled | **Not implemented** in runtime data (audit §5.1) | Mandatory `provenance` on each object; renderer can show badge when configured |
| **6. Render modes** | Theory, graph, practice, exam, review | `createRenderer` tabs + mikro1/ökonometrie overlays + `fullExam.js` + SRS | Same UX; data fed from normalized layer **or** current adapters until cutover |
| **7. Learner telemetry** | Attempts, mistakes, SRS | `portal-core/state/storage.js` + per-module keys | Keys remain namespaced; optional export format documented in `learning-data-model.md` |

---

## 3. Source statuses (normative)

Each **learning object** carries exactly one primary `source_status` (roll-up rules for parent nodes: see `learning-data-model.md`):

- `direct-source`
- `source-distilled`
- `platform-added-explanation`
- `platform-added-drill`
- `cross-link`

Until code enforces this, **new authored content** should still be labeled in review (spreadsheet or inline comment) so migration is not blocked.

---

## 4. Target file and folder structure

The following layout **separates concerns** without requiring an immediate physical move of all content. **Phase 0** keeps today’s `mikro1/js/data/chapters.js` etc.; later phases **introduce** parallel artifacts and build steps that **emit** the same deployable `mikro1/` bundle.

### 4.1 Source materials (authoritative inputs)

**Target:**

```text
sources/                          # optional top-level mirror or symlink farm (git-lfs if needed)
  README.md                       # how materials relate to modules; no secrets
  registry.json                   # { ref_id, path, module_slug, mime, sha256?, notes }

course-materials/                 # alternative name if “sources” is reserved; pick one convention
  makro1/
    Vorlesungen/
    Uebungen/
    ...
```

**Today:** PDFs/scripts often live **off-repo**; `assets/js/module-content.js` lists paths **narratively**. **`assets/js/modules.js` contains `sourceRoot`**: a **developer-local absolute path** — **not portable** and must be **removed or relocated** to private config (e.g. `.env.local` + gitignored) in a docs-approved follow-up.

### 4.2 Course map

**Target (per module):**

```text
content/
  course-maps/
    mikro1.json                   # chapters, concept order, prerequisites, source_ref links
    makro1.json
    oekonometrie.json             # may mirror CURRICULUM ids
    ...
```

**Mapping:** `CHAPTERS[]` + `cat` → `chapter` + `concept_ids[]` as in `learning-data-model.md` §4.2–4.4.

### 4.3 Learning objects

**Target:**

```text
content/
  objects/
    mikro1/
      kmm.theory.json            # or bundled per concept / per type
      budget.graph-spec.json
    ...
```

**Interim:** Objects may remain **inside JS** if a build script **extracts** or **validates** provenance fields before deploy.

### 4.4 Learner state (spec only in repo)

**Target:** No learner PII in git. **Contracts** and key naming live in docs + optional `schemas/learner-state-v1.json`.

**Today:** `createStorageModule` keys (`*_progress_v1`, `*_srs_v1`, …) per module `srsConfig.js`.

### 4.5 UI delivery

**Stays largely as today:**

```text
assets/js/portal-core/            # shared shell
mikro1/                           # module page + css + js bundle
makro1/
...
r/index.html                      # generated-portal path (audit: second delivery mode)
assets/js/generated-portal/
```

**Direction:** One **module manifest** (JSON) per course declaring `rendererProfile`, `graphCapabilities`, `rBindingKind`, so `generated-portal` and `createPortalApp` **converge on the same declaration** (gradual).

---

## 5. `portal-core`: keep, generalize, module-specific

Aligned with `docs/audits/repo-audit.md` §1–4 and §6.

### 5.1 Should **remain** in `portal-core` (stable kernel)

- **`app.js` — `createPortalApp`:** consent, navigation lifecycle, tab switching, SRS review entry, wiring to quick/full exam, global `window.__*` hooks used by HTML.
- **`ui/renderer.js` — `createRenderer`:** tab availability (`theorie`, `graph`, `aufgaben`, `formeln`, `intuition`, `r-anwendung`), supplemental tasks from `extractTheorySignals`, formula/intuition panels, empty-content placeholder behavior.
- **`features/fullExam.js`**, **`features/exam.js`:** shared evaluation patterns (W/F, text keyword check, embedded canvas init hooks).
- **`features/rPractice.js`:** WebR loading, preludes, block registry (with clearer **module prelude plugins** over time).
- **`state/storage.js` — `createStorageModule`:** progress / SRS / streak / question stats / mastery checks — key injection stays.
- **`data/examStepFactory.js`** (and related): shared step-problem shaping where used.

These are the **deployable backbone**; modules plug data and graphs into them.

### 5.2 Should be **generalized** (reduce duplication without flattening pedagogy)

- **`main.js` adapters:** nearly identical `createPortalApp({...})` calls across modules → **single factory** `createModulePortalFromManifest({ manifest, adapters })` that reads **module manifest** for labels, keys, and feature flags (optional second phase).
- **`features/fullExam.js` wrappers:** identical `createFullExamModule` imports → thin **one-liner pattern** or shared `fullExamAdapter.js` template.
- **Theory signal extraction:** `extractTheorySignals` (portal-core) vs **duplicate logic** in `mikro1/js/ui/renderer.js` → converge on **one parser** with **hooks** for mikro1-specific drill formatting (not two divergent DOM parsers).
- **Tab markup:** redundant `style="display:none"` on **Grafik** in many `index.html` files — rely on `updateTabButtons` only (cleanup when touching HTML).
- **`module-content.js`:** **`mikro1` / `mikro2`** are present (`module-content-parity-cleanup-pass-1.md`); extend or document exclusions for other live slugs (e.g. **`internationale-wirtschaftsbeziehungen`**) — access via `getModuleContent(slug)` only.

### 5.3 Must stay **module-specific** (non-negotiable per AGENTS.md)

- **`graphs.js` / `graphEngine.js` / `graphPanel.js`:** canvas drawing, controls, tooltips, animations (e.g. **mikro1** depth).
- **Rich `fullExams.js` content** and **exam-specific HTML** (e.g. `canvas_hicks` in questions).
- **`mikro1` renderer overlay:** `enhanceRenderedSurface`, semantic math, exam drills, home probeklausur card — **benchmark features**; optionally driven by **manifest flags** later, not deleted.
- **`oekonometrie` renderer overlay + `CURRICULUM` authoring model** — structured sections/cards/warnings + `rBlock` per concept.
- **`statistik` pattern:** `mountRPracticeBlocks` after render for embedded R lab chapters.
- **Subject-specific `answerChecker` / `stepProblems`**.

### 5.4 Graphs and R as **first-class**

- **Graphs:** Represented in the canonical model as `graphFamily` + `graphBinding` (`learning-data-model.md` §2.4, §4.6). Runtime: keep **`GRAPH_CONCEPTS` + `renderGraphPanel` + `initGraph`** contract; manifest should list **which concept ids** expose the graph tab and **which canvas ids** appear in exams.
- **R:** Represent `r_binding_kind`: `embedded_blocks` | `tab_per_concept` | `webr_prelude` (`learning-data-model.md` §2.5). Preserve **`rPractice.js`** WebR integration; **preludes** must gain optional **`sourceReference`** to course datasets where applicable (audit §5.3).
- **Do not** replace module graphs with a single generic chart type.

### 5.5 Making **provenance / source_status** mandatory

1. **Schema:** Use `learning-data-model.md` `provenance` on every `learningObject`; build-time validator **warns** then **fails** on new content without labels.
2. **Runtime (later):** Optional UI badge (“Quelle”, “Übung”) driven by metadata — **no** change to mathematical substance.
3. **Migration default:** Existing objects tagged **`source-distilled`** or **`platform-added-explanation`** in bulk import, then tightened **per module** when editors attach `source_refs`.

---

## 6. Known repo issues to fix during migration (audit-driven)

| Issue | Action |
|-------|--------|
| **`sourceRoot` in `modules.js`** | Remove from shared code or move to gitignored local config; never required for deploy |
| **`module-content.js` parity for micro modules** | **`mikro1`** and **`mikro2`** entries exist (`docs/audits/module-content-parity-cleanup-pass-1.md`). **`mikro2`** remains **quarantine-honest** (no in-repo Mikro II corpus; no fake PDF grounding). Other live slugs (e.g. **`internationale-wirtschaftsbeziehungen`**) may still lack entries. |
| **`r` in `module-content.js` but not in `MODULES`** | Align lists: add to `MODULES` **or** mark `r` as special route in docs + landing |
| **`mountLivePortalBridge` no-op** (`live-portal-bridge.js`) | Remove call from `mathematik/js/portalHub.js` **or** re-implement bridge; document until then |
| **Placeholder `CONTENT`** | Fill gaps or mark `generated_placeholder` with explicit `platform-added-explanation` in manifest |
| **`extractTheorySignals` fragility** (needs `h3`+`p`) | Authoring guideline + optional structured sections in course map |
| **Two delivery modes** (`createPortalApp` vs `generated-portal`) | Shared manifest fields for chapter counts, R lab, exams |

---

## 7. Gradual migration strategy (phased, shippable)

### Phase 0 — Documentation and inventory (no behavior change)

- Freeze current deploy layout.
- Maintain list of modules vs **portal_profile** (thin renderer / mikro1-style / ökonometrie-style / generated-portal).
- Document all `localStorage` keys per module from `srsConfig.js`.

### Phase 1 — Metadata parity (low risk)

- **`mikro1` / `mikro2`** in `module-content.js`: done for source narrative; **`mikro2`** explicitly non-corpus (`module-content-parity-cleanup-pass-1.md`).
- Normalize **`getModuleContent`** usage for **`internationale-wirtschaftsbeziehungen`** key shape.
- Remove **`sourceRoot`** from shared `modules.js` (or replace with empty string + comment).

### Phase 2 — Provenance on **new** edits

- For any new or heavily edited concept: add `provenance` in **sidecar JSON** or **JSDoc** convention until runtime reads it.
- Optional: script that **lists** objects missing provenance (static analysis of `content/` or `chapters.js`).

### Phase 3 — Extract course map (read-only consumer first)

- Generate `content/course-maps/<slug>.json` from existing `CHAPTERS` at build time; **do not** switch renderer input yet.
- Validate concept ids match `CONTENT` keys; report **missing** entries (audit: placeholder path).

### Phase 4 — Single adapter factory (small code change when allowed)

- Replace copy-pasted `main.js` with shared factory **without** changing feature graph.
- Consolidate theory parsing hook for mikro1 vs portal-core.

### Phase 5 — Optional content packaging

- Emit learning objects from JSON → JS bundle (or fetch JSON at runtime if hosting allows) **per module**.
- Keep **graphs and R** as ES modules registered by manifest.

**Explicit non-goals for early phases:** rewriting all theory into MD, unifying ökonometrie and mikro1 authoring formats, or removing WebR.

---

## 8. Deployability checklist (every phase)

- [ ] Root `index.html` and each `*/index.html` still load.
- [ ] No new mandatory network dependency for core modules (CDN MathJax/WebR policy unchanged unless intentionally updated).
- [ ] `createPortalApp` modules still pass the same smoke path: navigate concept → tabs → quick exam → home.
- [ ] Graph tab still appears **only** when `graphConcepts` has the id (avoid regressions on hidden Grafik button behavior).

---

## 9. Related documents

- `docs/architecture/learning-data-model.md` — entity and field definitions
- `docs/architecture/module-quality-standard.md` — operational module checklist
- `docs/audits/repo-audit.md` — as-built audit

---

*End of content pipeline architecture.*
