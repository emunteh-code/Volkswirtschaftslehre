# 2026-05-28 — Workstream 3 Slice 5: Restrict placeholder task-family cards

## Product decision
Ingestion placeholder task families must **not** appear on student practice (Aufgaben) surfaces. They remain visible only in source-companion / ingestion panels that are explicitly labeled and non-deceptive.

## Audit-first findings
- Slices `f6d6b6a`–`9bb7f4c` wired `TASK_FAMILIES_BY_CONCEPT` into Statistik, Mathematik, and Oekonometrie renderers.
- Those families are metadata placeholders (`placeholderLabel: non-deceptive-placeholder`, `officialTaskCoverage: missing-official-task-source`), not student-ready Klausurfamilien.
- Mikro2 task families are source-grounded lecture families and remain on practice surfaces.

## Implementation
- Added shared guards in `assets/js/portal-core/data/officialTaskIngestion.js`:
  - `isIngestionPlaceholderTaskFamily`
  - `filterStudentVisibleTaskFamilies`
- `assets/js/portal-core/ui/renderer.js` filters before rendering the Klausurfamilien panel (defense in depth for any module).
- Removed student-surface wiring from:
  - `statistik/js/ui/renderer.js`
  - `mathematik/js/ui/renderer.js`
  - `oekonometrie/js/ui/renderer.js`
- Source-companion panels unchanged (`renderTaskArchivePanel` + placeholder builders in module `officialTaskIngestion.js` / `sourceCompanion.js`).

## Integrity
- No academic content invented or removed.
- No fake progress: practice tabs no longer show empty or misleading placeholder cards.
- `exam-bank-complete` boundary remains explicit in source companion only.

## Remaining gap
- Official-task placeholder metadata in `*/js/data/taskFamilies.js` remains for future mapping work but is not student-facing until families become `official-task-source` with real anchors.
