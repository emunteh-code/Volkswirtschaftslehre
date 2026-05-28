# 2026-05-28 — Workstream 3 Slice 11: Mikro1 task-family pilot (pass 1)

## Scope
- Wire official-task ingestion scaffold and VL-anchor-grounded Klausurfamilien for Mikro I.

## Audit-first (`source-corpus-registry.generated.json`, `source-materials/Mikroökonomik I/`)
- Mikro I registry: **54** documents — **21** VL slides, **18** exam (Probeklausur JPGs + 1 PDF), **15** supplements/CDF; **0** exercise/solution/tutorial.
- Probeklausur content is not reliably extractable via `pdftotext` (JPG); no invented exam prompts.

## Implementation
- `mikro1/js/data/officialTaskIngestion.js` — ingestion helpers + baseline counts.
- `mikro1/js/data/taskFamilies.js` — **9** VL-grounded families (`direct-source`, `missing-official-task-source`) + **1** non-deceptive ingestion placeholder on `kmm` (hidden on practice tabs).
- `mikro1/js/ui/renderer.js` — `taskFamiliesByConcept` wired.
- `mikro1/js/features/sourceCompanion.js` — companion task-gap panel aligned with Mikro II pattern.

## Integrity
- Family titles/methods follow reviewed VL anchor sections only; no Probeklausur item reconstruction.
- `official-task-source` remains **0** until OCR/Review maps exam artefacts to concepts.

## Remaining gap
- Probeklausur JPG → task-family mapping; expand families across remaining anchored concepts; formula cards; `psubst` page anchors.
