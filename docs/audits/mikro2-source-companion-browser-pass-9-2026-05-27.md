# Mikro2 Source Companion Browser Pass 9 - 2026-05-27

## Finding

The previous pass added item-level source inspection from concept pages. The missing companion workflow is the inverse direction: start from an official Mikro2 source document and see what the portal currently covers from it.

## Scope

This pass adds a Mikro2 source-browser surface backed by the generated source corpus registry. It is a coverage/navigation companion, not a PDF reader. It avoids direct PDF open buttons because `source-materials/` is ignored from git and not guaranteed in deployed builds.

## Implementation Target

- Add a Mikro2 source companion entry point in the tool rail.
- Load `docs/audits/source-corpus-registry.generated.json` at runtime.
- Filter the registry to Mikro2 documents.
- Display counts by source kind.
- Let students select a source document and see:
  - file name
  - kind
  - group
  - pages
  - local corpus path
  - mapped portal concepts
  - unmapped status when no concept currently references it
- Keep missing official exercise/task corpus warnings visible.

## Definition of Done for This Pass

- Source companion opens from the Mikro2 sidebar.
- Mikro2 source documents render from the registry.
- Selecting a document shows mapped portal concepts where provenance exists.
- Documents without mapped concepts are explicitly marked uncovered.
- No broken PDF or file-open controls are introduced.

## Implemented

- Added a `Quellen` tool button to the Mikro2 sidebar.
- Added a Mikro2 source companion module that loads the generated source registry at runtime.
- Added document cards for all 31 Mikro2 source documents.
- Added kind statistics for lecture slides, supplements, and registry/dataset files.
- Added document detail panels with local corpus path, group, extent, index status, and portal coverage.
- Added concept navigation from mapped source documents back into covered portal concepts.
- Added explicit gap state for source documents not yet directly mapped.

## Validation

- JavaScript syntax checks passed for the app shell, Mikro2 source companion module, and Mikro2 main entry.
- Provenance data validation confirmed 18 Mikro2 concepts and 15 concepts with page anchors.
- Browser smoke test confirmed:
  - `Quellen` opens successfully.
  - 31 Mikro2 source documents render.
  - mapped and uncovered document states both exist.
  - uncovered documents show an explicit gap message.
  - no PDF/open-file controls are present in the detail pane.

## Remaining Gaps

- Direct PDF opening remains deferred until source PDFs have a deployable/public asset strategy or a local-only opener.
- Exercise-sheet workflows remain blocked because the available Mikro2 corpus still has no official exercise-sheet and solution-key archive.
- The next companion-mode step should add a concept/document coverage matrix grouped by lecture sequence.

## Changed Files

- `assets/js/portal-core/app.js`
- `assets/css/premium-refinement.css`
- `mikro2/index.html`
- `mikro2/js/main.js`
- `mikro2/js/features/sourceCompanion.js`
- `docs/audits/mikro2-source-companion-browser-pass-9-2026-05-27.md`
