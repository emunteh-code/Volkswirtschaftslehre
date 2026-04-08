# Full-exam mistake extraction pass 1

**Date:** 2026-04-08  
**Scope:** Backbone + high-value migrated modules only (`mikro1`, `makro1`, `makro2`, `statistik`, `oekonometrie`, `recht`, `jahresabschluss`).

## Summary

This pass adds safe full-exam mistake extraction plumbing at backbone level and wires it into all audited modules **without inventing concept mappings**.

Mistake extraction is now executed only when full-exam questions already carry explicit concept tags (`concept_id` or `conceptId`).  
If concept tags are absent, extraction remains a no-op by design.

## Exact mapping strategy used

1. On full-exam submit, build score summary (existing behavior).
2. Build a `questionById` map from runtime flattened questions (`feState.questions`) using only explicit fields:
   - `q.concept_id`
   - `q.conceptId`
3. Call `mistakePartialsFromExamSummary(summary, { moduleSlug, questionById })`.
4. Append each returned row through `appendMistakeLogEntry`.

No inferred mapping from IDs, labels, sections, or textual topic names is used.

## Exact files changed

- `assets/js/portal-core/features/fullExam.js`
- `mikro1/js/features/fullExam.js`
- `makro1/js/features/fullExam.js`
- `makro2/js/features/fullExam.js`
- `statistik/js/features/fullExam.js`
- `oekonometrie/js/features/fullExam.js`
- `recht/js/features/fullExam.js`
- `jahresabschluss/js/features/fullExam.js`
- `docs/audits/full-exam-mistake-extraction-pass-1.md`

## Module audit outcome

| Module | Current full-exam shape | Concept-level extraction status |
|--------|--------------------------|---------------------------------|
| `mikro1` | Flattened question items with IDs, no explicit concept field | **Blocked** (no `concept_id`/`conceptId`) |
| `makro1` | Flattened question items with IDs, no explicit concept field | **Blocked** (no `concept_id`/`conceptId`) |
| `makro2` | Flattened question items with IDs, no explicit concept field | **Blocked** (no `concept_id`/`conceptId`) |
| `oekonometrie` | Flattened question items with IDs, no explicit concept field | **Blocked** (no `concept_id`/`conceptId`) |
| `recht` | Flattened question items with IDs, no explicit concept field | **Blocked** (no `concept_id`/`conceptId`) |
| `jahresabschluss` | Flattened question items with IDs, no explicit concept field | **Blocked** (no `concept_id`/`conceptId`) |
| `statistik` | Non-standard `problems`/`steps` exam shape with `conceptId` at problem level | **Blocked** for current backbone flow (no compatible per-question IDs/concept tags in flattened runtime path) |

## Exact modules where full-exam mistake extraction is now supported

- **Backbone-supported:** all audited modules are wired to call extraction.
- **Data-supported (effective now):** none of the seven audited modules, because no module currently provides explicit concept tags at the runtime full-exam question level used by the extractor.

## Unresolved blockers and why they remain

1. **Missing per-question concept tags in full-exam datasets**  
   Most modules have question IDs but no explicit `concept_id`/`conceptId` on those question records.

2. **`statistik` full-exam schema mismatch**  
   Current file uses `problems`/`steps` with problem-level `conceptId`, while shared full-exam backbone expects flattened question items from `aufgaben`-style structures.

3. **No heuristic fallback allowed in this pass**  
   To avoid fake attribution, no mapping from textual labels, question prefixes, or section names was introduced.

## What requires follow-up curation

- Add explicit concept tags (`concept_id`) to full-exam question records per module.
- For `statistik`, either:
  - align full-exam data shape to the shared full-exam structure with per-question IDs + concept tags, or
  - add a dedicated adapter that safely maps `problems/steps` into that structure without changing learner-facing behavior.
