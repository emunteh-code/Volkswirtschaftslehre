# Learning data model — canonical schema

This document is the **concrete schema specification** for the platform. It aligns with `content-pipeline.md` (source statuses, pipeline stages), `module-quality-standard.md`, `product-constitution.md`, and the patterns recorded in `docs/audits/repo-audit.md`.

**Scope:** Data and contracts only. It does **not** require immediate code changes; it defines the target shape for gradual migration while staying faithful to **today’s** `createPortalApp` / `createRenderer` / `FULL_EXAMS` / WebR behaviors.

---

## 1. Global conventions

| Field | Type | Description |
|--------|------|-------------|
| `schema_version` | `string` | Bump when learner-state or content contracts change (e.g. `"2026.1"`). Must match `localStorage` key suffixes (`*_v1` today). |
| `module_slug` | `string` | Stable id: `mikro1`, `makro1`, `oekonometrie`, `internationale-wirtschaftsbeziehungen`, etc. Same as folder name and `COURSE_CONFIG.slug` / `modules.js` slug. |
| `id` | `string` | Stable identifier within module (`kmm`, `matrix_notation`, …). Matches current `CHAPTERS[].id` / `CURRICULUM[].id`. |
| `locale` | `string` | Default `"de"`; matches `locales/de.json` where present. |

**IDs:** Prefer `snake_case` for new content to match existing modules (`makro_rahmen`, `matrix_notation`).

---

## 2. Enumerations

### 2.1 `source_status`

Exactly the set from `content-pipeline.md` (normative):

- `direct-source`
- `source-distilled`
- `platform-added-explanation`
- `platform-added-drill`
- `cross-link`

Every **learning object** (see §3.11) carries **at least one** `source_status`. Aggregates (concept, chapter) may expose a **roll-up** (e.g. “weakest status wins” for disclosure) but must not remove per-object labels.

### 2.2 `content_encoding`

Describes how theory is stored before render (mixed shapes in repo):

| Value | Meaning | Repo examples |
|--------|---------|----------------|
| `html_fragment` | Single HTML string, MathJax-compatible | `CONTENT[id].theorie` as `String.raw\`...\`` in `mikro1`, `makro1`, `statistik` |
| `html_compiled` | Structured source compiled to HTML at build or load | `oekonometrie/js/data/chapters.js` (`renderTheoryHtml` from `CURRICULUM`) |
| `generated_placeholder` | Non-authored fallback | `createRenderer` branch when `CHAPTERS` has id but `CONTENT[id]` missing |

### 2.3 `exam_question_kind` (full exam runtime)

Aligned with `assets/js/portal-core/features/fullExam.js` after flattening:

| Value | Source shape | Evaluator |
|--------|----------------|-----------|
| `wf` | From `wf-block` → per-row W/F | Exact match to `correct` (`'Wahr' \| 'Falsch'`) |
| `text` | From `text-block` | Substring / keyword list: `correct` is `string \| string[]`, case-insensitive `includes` |

Extensions in data (e.g. `mathematik` `options: { problemId, stepId, isDecision, dependsOn }`) are **exam metadata**; the canonical model stores them under `question.extensions` without changing the base `exam_question_kind` until the engine supports new kinds.

### 2.4 `graph_binding_kind`

How a concept ties to canvas UI (`mikro1/js/ui/graphPanel.js` pattern):

| Value | Meaning |
|--------|---------|
| `concept_canvas` | Full graph tab: `GRAPH_CONCEPTS.has(id)` + `renderGraphPanel(id)` + `initGraph(id)` |
| `exam_embedded_canvas` | Canvas ids in exam HTML (`canvas_hicks`, `canvas_demand`, `canvas_isoquant`) + `window.__draw*` |
| `none` | Stub `initGraph` only (`recht/js/ui/graphs.js`) |

### 2.5 `r_binding_kind`

| Value | Meaning | Repo |
|--------|---------|------|
| `none` | No R tab | Most modules |
| `embedded_blocks` | Markup in theory / dedicated chapter | `statistik` `renderRPracticeMarkup` in `chapters.js`; `mountRPracticeBlocks` after render |
| `tab_per_concept` | `r-anwendung` tab when `hasRBlock(conceptId)` | `oekonometrie` `R_BLOCKS_BY_ID` + `renderRAnwendungTab` |
| `webr_prelude` | Runtime injects dataset prelude by `module_slug` | `rPractice.js` `getRuntimePrelude` |

---

## 3. Cross-cutting structures

### 3.1 `sourceReference`

A single citable artifact (file, slide, script). **Today** this is mostly prose in `assets/js/module-content.js`; **target** is first-class linkage on learning objects.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `ref_id` | `string` | yes | Stable id, e.g. `makro1:VL_3.pdf` or `hash:sha256:…` |
| `module_slug` | `string` | yes | Owning course. |
| `path` | `string` | no | Relative path as in `module-content.js` (`Vorlesungen/VL_1.pdf`). |
| `anchor` | `object` | no | `{ type: 'page' \| 'slide' \| 'line', value: string \| number }` |
| `mime` | `string` | no | e.g. `application/pdf`, `text/x-r` |
| `title` | `string` | no | Human label for UI. |

### 3.2 `provenance`

Attachable to any learning object or aggregate.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `source_status` | `source_status` | yes | |
| `source_refs` | `sourceReference[]` | no | Empty implies platform-only or pending traceability. |
| `notes` | `string` | no | Maintainer-only or rare UI (“simulation”, “archived exam 2018”). |

### 3.3 `formula` (canonical)

Maps to `CONTENT[id].formeln[]` / ökonometrie `formula(...)`.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `id` | `string` | no | Synthetic if missing: `${concept_id}:formula:${label_slug}` |
| `label` | `string` | yes | Short name (shown in UI). |
| `eq` | `string` | yes | LaTeX / MathJax HTML fragment, typically `$$...$$`. |
| `desc` | `string` | no | Plain or HTML explanation. |
| `variables` | `record<string, string>` | no | Map symbol → German explanation; keys may be TeX (`\\beta`). |
| `provenance` | `provenance` | yes | |

### 3.4 `theorySection` (canonical subsection)

Normalizes:

- HTML `.section-block` with `h3` + body (mikro/makro pattern).
- Ökonometrie `CURRICULUM` `sections[]` `{ title, body[], math[] }`.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `section_id` | `string` | yes | Stable within concept. |
| `title` | `string` | yes | Heading text. |
| `body_html` | `string` | no | Compiled HTML for paragraphs/lists. |
| `body_paragraphs` | `string[]` | no | Source form for ökonometrie-style authoring; compile → `body_html`. |
| `math` | `string[]` | no | Display equations. |
| `provenance` | `provenance` | yes | |

**Constraint:** At least one of `body_html` or `body_paragraphs` (non-empty) or `math` (non-empty).

### 3.5 `intuitionBundle`

Maps to `INTUITION[id]` and ökonometrie nested `intuition(...)`.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `core` | `string` | no | HTML allowed. |
| `analogy` | `string` | no | |
| `bridge` | `string` | no | |
| `exam` | `{ if: string, then: string }[]` | no | Klausurmuster cards; drives exam drills in portal-core / mikro1 overlay. |
| `mistakes` | `string[]` | no | Present in ökonometrie helper; optional elsewhere. |
| `mental_model` | `{ title?: string, body: string }[]` | no | Alternative shape accepted by `normalizeIntuitionData` in `createRenderer`. |
| `provenance` | `provenance` | yes | |

### 3.6 `practiceStep` (aufgabe step)

Maps to `aufgaben[].steps[]` / `task` steps: `{ text, eq }`.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `text` | `string` | yes | Instruction. |
| `eq` | `string \| null` | no | Optional math line. |
| `provenance` | `provenance` | yes | Often `platform-added-drill` for synthesised steps. |

### 3.7 `authoredTask`

Maps to `CONTENT[id].aufgaben[]`.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `task_id` | `string` | no | Synthetic if omitted. |
| `prompt` | `string` | yes | `text` in repo. |
| `steps` | `practiceStep[]` | no | |
| `result` | `string` | no | Expected outcome / short solution. |
| `hint` | `string` | no | e.g. `jahresabschluss` tasks. |
| `provenance` | `provenance` | yes | |

### 3.8 `stepProblem` (quick exam / step engine)

Maps to `stepProblems.js` entries consumed by `createQuickExamModule` + `examStepFactory`.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `title` | `string` | yes | |
| `context` | `string` | no | |
| `steps` | `stepProblemStep[]` | yes | |
| `provenance` | `provenance` | yes | |

`stepProblemStep`:

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `q` | `string` | yes | Question text. |
| `answer` | `string[]` | yes | Accepted strings. |
| `hint` | `string` | no | |
| `explain` | `string` | no | |
| `options` | `object` | no | `problemId`, `stepId`, `isDecision`, `dependsOn`, `modelId`, `role`, `targetVar`, … |
| `traps` | `{ pattern: string, msg: string }[]` | no | Adversarial checks. |
| `provenance` | `provenance` | yes | |

### 3.9 `rPracticeBlock`

Maps to ökonometrie `rBlock`, statistik `renderRPracticeMarkup` payloads, and `rPractice.js` registry.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `block_id` | `string` | yes | e.g. `statistik_rlab_explore`; used for stable WebR storage keys. |
| `title` | `string` | yes | |
| `purpose` | `string` | yes | |
| `script` | `string` | no | Human label for script focus. |
| `code` | `string` | yes | R source shown to learner. |
| `output` | `string` | no | Expected interpretation narrative. |
| `mini_task` | `string` | no | |
| `solution` | `string` | no | |
| `pitfalls` | `string[]` | no | |
| `runtime_mode` | `'guided' \| 'live'` | no | Inferred in `rPractice.js` if omitted. |
| `module_slug` | `string` | yes | For prelude selection. |
| `provenance` | `provenance` | yes | WebR preludes default toward `platform-added-explanation` unless tied to a script `sourceReference`. |

### 3.10 `conceptLinkBundle`

Maps to `conceptLinks.js` per concept.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `uses` | `{ target_id: string, note?: string }[]` | no | |
| `used_by` | `{ target_id: string, note?: string }[]` | no | |
| `provenance` | `provenance` | yes | Often `cross-link`. |

---

## 4. Entity specifications

### 4.1 `module`

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `slug` | `string` | yes | `module_slug`. |
| `title` | `string` | yes | `COURSE_CONFIG.courseTitle` / `modules.js` title. |
| `course_label` | `string` | yes | Shorter nav label (`courseLabel` in `createPortalApp`). |
| `home_intro` | `string` | no | `homeIntro` in `createRenderer`. |
| `consent_key` | `string` | yes | localStorage consent gate. |
| `exam_collection_title` | `string` | no | Full-exam picker heading. |
| `chapters` | `chapter[]` | yes | Ordered course map (nav sections + units). |
| `concepts` | `concept[]` | yes | Flattened navigable concepts (today equals all `CHAPTERS` rows). |
| `full_exams` | `record<string, fullExamDocument>` | no | Maps to `FULL_EXAMS` (see §4.10). |
| `portal_profile` | `object` | no | **Non-breaking** flags mirroring repo reality: `renderer: 'portal-core' \| 'portal-core+mikro1-overlay' \| 'portal-core+oekonometrie-overlay'`, `delivery: 'module-folder' \| 'generated-portal'`. |
| `landing_content_ref` | `string` | no | Key into `module-content.js` narrative (`makro1`, `"internationale-wirtschaftsbeziehungen"`, `r`). **Absent** for `mikro1` / `mikro2` today — schema allows `null` to record the gap. |

**`mikro2` guard:** This module has **no** `contentManifest.js` and **no** in-repo Mikro II corpus; do not assume the rows above are populated for `mikro2` the same way as for curated modules — see `docs/audits/mikro2-status-guard-pass-2.md`.

### 4.2 `chapter`

A **curriculum grouping** (sidebar category), **not** necessarily a separate file.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `chapter_id` | `string` | yes | Stable id; today can be derived from `cat` slug (e.g. `haushaltstheorie_i`) or explicit. |
| `title` | `string` | yes | Display: current `CHAPTERS[].cat`. |
| `order` | `number` | yes | Nav section order. |
| `concept_ids` | `string[]` | yes | Members in order. |
| `source_refs` | `sourceReference[]` | no | When chapter maps to a lecture folder. |
| `provenance` | `provenance` | yes | Roll-up or `source-distilled` for synthesized groupings. |

### 4.3 `subtopic`

Optional layer **below** `concept` for fine-grained linking (theory sections, big ideas).

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `subtopic_id` | `string` | yes | e.g. `${concept_id}:sec:grs_definition`. |
| `concept_id` | `string` | yes | |
| `title` | `string` | yes | From `theorySection.title` or parsed `h3`. |
| `theory_section_id` | `string` | no | Links to `theorySection.section_id`. |
| `provenance` | `provenance` | yes | |

**Today:** Implicit; `extractTheorySignals` in `createRenderer` derives sections at runtime from HTML — migration can persist them as `subtopic` rows.

### 4.4 `concept`

Primary navigable unit (current `CHAPTERS[]` row + `CONTENT[id]`).

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `id` | `string` | yes | |
| `module_slug` | `string` | yes | |
| `chapter_id` | `string` | yes | From `cat`. |
| `title` | `string` | yes | |
| `short` | `string` | no | Abbreviation in nav. |
| `order` | `number` | yes | Global order within module. |
| `motivation` | `string` | no | HTML; shown in concept header. |
| `theory` | `object` | yes | See **theory payload** below. |
| `formulas` | `formula[]` | no | From `formeln`. |
| `tasks` | `authoredTask[]` | no | From `aufgaben`. |
| `intuition` | `intuitionBundle` | no | |
| `concept_links` | `conceptLinkBundle` | no | |
| `step_problems` | `stepProblem[]` | no | From `STEP_PROBLEMS[id]`. |
| `mastery_items` | `string[]` | no | From `MASTERY` / `masteryData.js` generators. |
| `graph` | `graphBinding` | no | See **`graphBinding` table under §4.6**. |
| `r` | `rBinding` | no | See below. |
| `provenance` | `provenance` | yes | Roll-up for the concept card. |

**`theory` payload:**

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `encoding` | `content_encoding` | yes | |
| `html` | `string` | no | Present if `html_fragment` or after compile. |
| `sections` | `theorySection[]` | no | Present if authored structured (ökonometrie) or split from HTML. |
| `cards_title` | `string` | no | ökonometrie `cardsTitle`. |
| `cards` | `{ title: string, value: string, note?: string }[]` | no | ökonometrie info-grid. |
| `warnings` | `{ title: string, body: string }[]` | no | Maps to `.warn-box` / ökonometrie `warnings`. |

**`rBinding` (optional):**

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `kind` | `r_binding_kind` | yes | |
| `blocks` | `rPracticeBlock[]` | no | |
| `tab_only` | `boolean` | no | `true` if R lives only in `r-anwendung` (ökonometrie). |

### 4.5 `subskill`

Granular learning objective used for **mastery checklist** and future analytics.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `subskill_id` | `string` | yes | Stable id. |
| `concept_id` | `string` | yes | |
| `label` | `string` | yes | One checklist row (`MASTERY` string). |
| `order` | `number` | yes | |
| `provenance` | `provenance` | yes | Often `platform-added-drill` for generic templates. |

### 4.6 `graphFamily`

Abstract family for analytics and reuse; **implementation** remains module-specific JS.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `family_id` | `string` | yes | e.g. `budget_line`, `indifference_map`, `isoquant`, `hicks_decomposition`. |
| `label` | `string` | yes | |
| `binding_kind` | `graph_binding_kind` | yes | |
| `implementation` | `object` | yes | `{ module_slug, graph_panel_key: string, init_graph_fn: string, canvas_ids?: string[] }` — mirrors `window.__drawBudget`, `canvas_hicks`, etc. |
| `provenance` | `provenance` | yes | |

**`graphBinding` on concept** (compact):

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `family_id` | `string` | yes | |
| `kind` | `graph_binding_kind` | yes | |
| `panel_template_id` | `string` | no | Which template in `graphPanel.js`. |

**Distinction:** `graphFamily` is the reusable taxonomy + implementation pointer; `graphBinding` is the **instance** on a `concept` (this concept uses that graph / exam canvas).

### 4.7 `learningObject`

Atomic unit for pipeline step “create source-faithful learning objects” and for UI blocks.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `object_id` | `string` | yes | Globally unique: `${module_slug}:${concept_id}:${kind}:${local_id}`. |
| `module_slug` | `string` | yes | |
| `concept_id` | `string` | yes | |
| `kind` | `enum` | yes | `theory_html` \| `theory_section` \| `formula` \| `task` \| `task_step` \| `intuition_core` \| `intuition_exam_pattern` \| `step_problem_step` \| `r_block` \| `exam_drill` \| `supplemental_task` \| `mastery_item` \| `concept_link` |
| `payload` | `object` | yes | One of the §3 / §4 structures. |
| `provenance` | `provenance` | yes | |
| `render_hints` | `object` | no | e.g. `{ tab: 'theorie' \| 'aufgaben' \| 'r-anwendung' }` |

### 4.8 `drill`

Spaced practice / exam-prep artifact distinct from authored `authoredTask`.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `drill_id` | `string` | yes | Stable id for DOM `toggleExamDrill`. |
| `concept_id` | `string` | yes | |
| `tag` | `string` | no | e.g. `Kernidee`, `Klausurmuster 1` (mikro1 / portal-core exam drill builders). |
| `question_html` | `string` | yes | |
| `answer_html` | `string` | yes | |
| `provenance` | `provenance` | yes | Synthesised drills → `platform-added-drill`. |

### 4.9 `question`

**Quick exam** (`createQuickExamModule`) or other single-shot items.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `question_id` | `string` | yes | |
| `module_slug` | `string` | yes | |
| `concept_id` | `string` | no | If concept-scoped. |
| `stem` | `string` | yes | |
| `answer_spec` | `object` | yes | Shape depends on checker: tolerance numeric vs string list — mirror `checkAnswerWithTolerance` + quick exam. |
| `provenance` | `provenance` | yes | |

### 4.10 `fullExamDocument`

Root object in `FULL_EXAMS` / `fullExams` map (consumed by `startFullExam`).

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `id` | `string` | yes | Key match, e.g. `probeklausur_1`. |
| `title` | `string` | yes | |
| `subtitle` | `string` | no | |
| `duration` | `number` | no | Minutes; drives timer. |
| `aufgaben` | `examTask[]` | yes | Ordered blocks. |
| `provenance` | `provenance` | yes | |

### 4.11 `examTask`

One **scored block** inside `fullExamDocument.aufgaben` (repo field name **`aufgaben`**, not `tasks`).

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `label` | `string` | yes | e.g. `Aufgabe 1`. |
| `points` | `number` | yes | |
| `type` | `'wf-block' \| 'text-block'` | yes | As consumed by `startFullExam`. |
| `title` | `string` | no | `text-block` title. |
| `preamble` | `string` | no | HTML. |
| `groups` | `wfGroup[]` | no | For `wf-block`. |
| `questions` | `examQuestion[]` | no | For `text-block` (nested questions). |
| `provenance` | `provenance` | yes | |

`wfGroup`: `{ context: string, questions: examQuestion[] }`.

`examQuestion` (pre-flatten):

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `id` | `string` | yes | |
| `text` | `string` | yes | HTML; may contain `<canvas id="canvas_hicks">` etc. |
| `type` | `'wf' \| 'text'` | yes | |
| `points` | `number` | no | Text questions. |
| `correct` | `string \| string[]` | yes | W/F or accepted substrings. |
| `feedback` | `string` | no | Solution HTML. |
| `extensions` | `object` | no | `mathematik` step graph. |

### 4.12 `attempt`

One learner submission episode.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `attempt_id` | `string` | yes | UUID or `${time}:${module_slug}:${context}`. |
| `module_slug` | `string` | yes | |
| `context` | `enum` | yes | `quick_exam` \| `full_exam` \| `step_problem` \| `practice_task` \| `srs` |
| `target_id` | `string` | no | `exam_id`, `concept_id`, or `question_id`. |
| `started_at` | `number` (ms) | yes | |
| `submitted_at` | `number` (ms) | no | |
| `responses` | `record<string, unknown>` | yes | e.g. full exam `answers`, `revealed` map. |
| `score` | `{ earned: number, max: number }` | no | |

### 4.13 `mistakeLogEntry`

Derived log for dashboards / adaptation (not always persisted explicitly today).

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `entry_id` | `string` | yes | |
| `module_slug` | `string` | yes | |
| `concept_id` | `string` | yes | |
| `source` | `string` | yes | `quick_exam` \| `practice` \| `full_exam` \| `step` |
| `ref_id` | `string` | no | Question or step id. |
| `wrong_answer` | `string` | no | |
| `timestamp` | `number` (ms) | yes | |

### 4.14 `masteryState`

Per-concept aggregate; maps to `loadProgress()[concept_id]` + optional checks.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `concept_id` | `string` | yes | |
| `views` | `number` | no | `recordView`. |
| `last_seen` | `number` (ms) | no | |
| `solved` | `number` | no | `recordSolved`. |
| `correct` | `number` | no | `recordAnswer`. |
| `wrong` | `number` | no | |
| `checks` | `boolean[]` | no | Mastery checkbox state from `saveMasteryChecks`. |
| `schema_note` | `string` | no | Document mismatch: progress blob mixes **mastery** and **SRS-ish** counters in one object today. |

### 4.15 `reviewItem`

SRS queue entry; normalize JS runtime vs TS tests.

| Field | Type | Required | Description |
|--------|------|----------|-------------|
| `concept_id` | `string` | yes | |
| `module_slug` | `string` | yes | |
| `interval_days` | `number` | yes | `interval` in `mikro1/js/features/srs.js`. |
| `ease` | `number` | yes | SM-2 style factor. |
| `due_at` | `number` (ms) | yes | `due` in browser storage. |
| `reviews` | `number` | yes | Repetition count (`reviews` / `repetitions`). |
| `legacy_iso_due` | `string` | no | If using TS `dueDate` ISO string — convert at boundary. |

---

## 5. Portal tab and capability mapping (reference)

Derived from `assets/js/portal-core/ui/renderer.js` — **not** a second schema, but documents how entities surface:

| Tab | Condition |
|-----|-----------|
| `theorie` | Always for concept with content. |
| `graph` | `graphConcepts.has(concept_id)` → `graphBinding.kind === 'concept_canvas'`. |
| `aufgaben` | Always shown; combines `authoredTask`, `stepProblem`, supplemental tasks. |
| `formeln` | `formulas.length > 0` with meaningful `eq`. |
| `intuition` | Meaningful `intuitionBundle` after normalization. |
| `r-anwendung` | `renderRAnwendungPanel` set **and** `hasRBlock(concept_id)` → `r.kind` includes tab blocks. |

**mikro1-specific:** After base render, custom layer may **replace** aufgaben/intuition panels and add **exam drills** (`toggleExamDrill`) and **semantic math** decoration — schema captures these as extra `learningObject` / `drill` rows with `portal_profile` flags.

---

## 6. Migration notes (repo → canonical)

**Principle:** Ship unchanged bundles; add **parallel** JSON or generated types first; then switch readers.

1. **`CHAPTERS` + `CONTENT`**  
   - Import as `module.concepts[]`.  
   - Derive `chapter` from distinct `cat`.  
   - Set `theory.encoding = html_fragment` unless module is ökonometrie (`html_compiled` from `CURRICULUM`).

2. **`CURRICULUM` (oekonometrie)**  
   - Map each row to `concept` + populate `theory.sections`, `cards`, `warnings`, `formulas`, `tasks`, `intuition`, `r.blocks` without losing structured fields.  
   - Preserve `rBlock` → `rPracticeBlock` + `r_binding_kind: tab_per_concept`.

3. **`INTUITION`**  
   - Merge into `concept.intuition` with `provenance` default `source-distilled` until refs exist.

4. **`STEP_PROBLEMS` / `examStepFactory`**  
   - Map to `stepProblem` + `learningObject.kind = step_problem_step` per step.

5. **`FULL_EXAMS`**  
   - Map to `fullExamDocument` (§4.10) with `aufgaben: examTask[]` preserving `wf-block` / `text-block` nesting; flatten only at **runtime** as today.

6. **Embedded exam canvases**  
   - Add `graphFamily` / `graphBinding` with `exam_embedded_canvas` and `canvas_ids` for Hicks / demand / isoquant.

7. **`statistik` R lab**  
   - Map embedded markup to `rPracticeBlock` + `r_binding_kind: embedded_blocks`; keep `mountRPracticeBlocks` behavior until a single loader reads blocks from manifest.

8. **Learner state**  
   - Namespace keys with `schema_version`: today `{progress}_v1`, `{srs}_v1`, etc.  
   - Normalize SRS: choose **either** epoch-ms `due` **or** ISO `dueDate` in schema; adapter converts mikro1 TS types vs `srs.js` runtime.

9. **`module-content.js`**  
   - Map `sourceGroups` / `roadmap` entries to `sourceReference[]` + `provenance` on `module` or `chapter` without breaking the landing page.

10. **Missing `CONTENT` keys**  
    - Represent explicitly as `content_encoding: generated_placeholder` with `provenance.source_status = platform-added-explanation` until filled.

---

## 7. Design principles (carried forward)

1. Support **source fidelity** via mandatory `provenance` on `learningObject` and aggregates.  
2. Support **module-specific interactivity** via `graphFamily` / `rBinding` implementation pointers, not by flattening graphs into generic widgets.  
3. Support **exams, quick tests, mixed review** via `question`, `examTask`, `attempt`, `reviewItem`.  
4. Support **spaced repetition** via `reviewItem` + SM-2 parameters.  
5. Support **dashboard metrics** via `masteryState` + `mistakeLogEntry` (and `QUESTION_STATS` key pattern: `${conceptId}_${stepIdx}`).

---

## 8. Files inspected for this spec

- `docs/architecture/learning-data-model.md` (prior version, replaced in full)
- `docs/architecture/content-pipeline.md`
- `docs/architecture/module-quality-standard.md`
- `docs/architecture/product-constitution.md`
- `docs/audits/repo-audit.md`
- `assets/js/portal-core/ui/renderer.js` (tab availability, `extractTheorySignals`, supplemental tasks, empty entry branch)
- `assets/js/portal-core/features/fullExam.js` (flattening, `wf` / `text`, canvas hooks)
- `assets/js/portal-core/features/exam.js` (quick exam)
- `assets/js/portal-core/features/rPractice.js` (WebR, preludes)
- `assets/js/portal-core/state/storage.js` (progress, SRS, question stats, mastery checks)
- `oekonometrie/js/data/curriculum.js` (helpers + section/card/warning/rBlock shape)
- `oekonometrie/js/data/chapters.js` (compile pipeline)
- `mikro1/js/data/chapters.js` (CHAPTERS + CONTENT field names)
- `mikro1/js/data/intuition.js`
- `mikro1/js/data/stepProblems.js`
- `mikro1/js/data/masteryData.js`
- `mikro1/js/features/srs.js`
- `mikro1/src/utils/srsAlgorithm.ts` (TS card shape vs runtime)

---

## 9. Files changed

- `docs/architecture/learning-data-model.md` — expanded into this canonical schema specification (single file changed).
