# 2026-05-28 — Workstream 3 Slice 6: Makro I/II official-task companion scaffold

## Scope
- Priority C continuation after slice 5 (placeholder restriction on student practice surfaces).
- Add official-task ingestion scaffolding for Makro I and Makro II **source companion only**.

## Audit-first findings (source: `docs/audits/source-corpus-registry.generated.md`)
- `makro1`: exercise 11, tutorial 11, exam 7, solution 0 (29 official task docs).
- `makro2`: exercise 10, tutorial 12, exam 0, solution 0 (22 official task docs).
- Neither module had `officialTaskIngestion.js` or companion task-archive panel.
- `makro1/js/ui/renderer.js` and `makro2/js/ui/renderer.js` do not pass `taskFamiliesByConcept` (restriction honored).

## Implementation
- `makro1/js/data/officialTaskIngestion.js`, `makro1/js/data/taskFamilies.js`, `makro1/js/features/sourceCompanion.js`
- `makro2/js/data/officialTaskIngestion.js`, `makro2/js/data/taskFamilies.js`, `makro2/js/features/sourceCompanion.js`
- Companion panels label placeholders as **non-deceptive** and **companion-only**; counts use live registry docs at runtime.
- Shared `filterStudentVisibleTaskFamilies` in portal-core continues to block ingestion placeholders on practice tabs if ever wired.

## Integrity
- Registry baselines match generated corpus summary; no invented exercises or solutions.
- No student-facing Klausurfamilien cards; no fake progress.

## Remaining gap
- Concept-level official task mapping, page-level anchors, and `exam-bank-complete` for both Makro modules.
