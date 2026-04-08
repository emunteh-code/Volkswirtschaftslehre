# Runtime Extraction Alignment Pass 1

## Scope
- Focus: runtime extraction alignment for existing full-exam concept tags only.
- Target modules audited: `statistik`, `oekonometrie`, `recht`, `jahresabschluss`.
- Out of scope: broad exam rewrite, UI redesign, inferred concept mapping.

## Audit findings

### 1) Runtime path status before this pass
- Shared full-exam runtime (`assets/js/portal-core/features/fullExam.js`) flattened only `exam.aufgaben` structures.
- Concept-level mistake extraction already consumed runtime question `concept_id`/`conceptId` if present.
- Therefore:
  - `oekonometrie`, `recht`, `jahresabschluss` (all `aufgaben`-based) were structurally consumable where tags existed.
  - `statistik` used `problems`/`steps` schema (with existing `problem.conceptId`), so concept tags did **not** reach runtime extractor.

### 2) Exact mismatch identified
- `statistik/js/data/fullExams.js`:
  - exam shape: `problems[]` with `steps[]`
  - concept tags exist at `problem.conceptId`
- Shared runtime expected:
  - `aufgaben[]` with `wf-block`/`text-block` and question-level flattening
- Result before pass:
  - no compatible flattening path for statistik full exams
  - no concept-level full-exam mistake attribution despite existing tags.

## Alignment changes implemented

### File changed
- `assets/js/portal-core/features/fullExam.js`

### Exact runtime extraction improvements
1. Added additive schema normalizer:
   - `normalizeExamToAufgabenShape(exam, fallbackExamId)`
   - Accepts both:
     - native `aufgaben` schema (pass-through),
     - `problems` schema (adapted to internal `aufgaben`-compatible form).
2. For `problems` schema:
   - each problem is converted to one `text-block` task,
   - each step becomes one runtime text question with stable ID:
     - `${problem.id}__s${index}`
   - concept inheritance order:
     - `step.concept_id` / `step.conceptId` / `problem.concept_id` / `problem.conceptId`
   - no inferred mapping from wording.
3. Updated runtime entry points to use normalized shape:
   - `startFullExam(...)`
   - `showFullExamSelect(...)`
4. Added safe exam-id fallback for schema variants missing explicit `exam.id`.

## Modules now benefiting from existing concept tags
- `statistik`:
  - existing `problem.conceptId` now reaches runtime flattened questions,
  - full-exam mistake extraction can now attribute concept-level mistakes for these tagged items.
- `oekonometrie`, `recht`, `jahresabschluss`:
  - continue to benefit from existing `aufgaben` path,
  - their pass-2 block tags remain consumable at runtime (unchanged behavior).

## Remaining blockers
1. **Untagged exam content remains un-attributable**
   - In `oekonometrie`, `recht`, `jahresabschluss`, many mixed-topic blocks still intentionally untagged.
   - Runtime can only extract where explicit concept tags exist.
2. **No heuristic backfill**
   - This pass intentionally does not map from titles/context text to concept IDs.
3. **Schema-specific edge enrichment not added**
   - Statistik is aligned through safe structural adaptation only; no custom scoring/mapping heuristics beyond explicit tags.

## Exact files changed
- `assets/js/portal-core/features/fullExam.js`
- `docs/audits/runtime-extraction-alignment-pass-1.md`
