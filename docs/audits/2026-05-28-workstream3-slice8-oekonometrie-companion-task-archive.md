# 2026-05-28 — Workstream 3 Slice 8: Ökonometrie companion task archive

## Scope
- Align Ökonometrie with Statistik/Makro companion-only official-task visibility (slice 5 restriction honored).

## Audit-first
- Registry: exercise 16, tutorial 14, exam 3 (`docs/audits/source-corpus-registry.generated.md`).
- `oekonometrie/js/ui/renderer.js` does not pass `taskFamiliesByConcept`.

## Implementation
- Extended `oekonometrie/js/data/officialTaskIngestion.js` with summarize/normalize helpers + policy string.
- `oekonometrie/js/features/sourceCompanion.js` — `renderTaskArchivePanel` with live counts and companion-only placeholder note.

## Integrity
- No student practice placeholder cards; no invented econometrics content.
