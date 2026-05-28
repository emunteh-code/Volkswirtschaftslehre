# 2026-05-28 — Workstream 3 Slice 1

## Scope
- Priority A: stabilize provenance QA gate mismatch for Mikro2.
- Priority B/C (minimal pilot): add shared official-task ingestion scaffold and apply it to Statistik source companion without inventing task content.

## Audit-first findings
- `tools/clickthrough/trust-regression-pass-1.mjs` expected `manifest-only` for `mikro2/spieltheorie_statisch`, but runtime provenance correctly emits `page-anchors` because reviewed anchors exist in `mikro2/js/data/sourceAnchors.js`.
- Statistik has official task documents available in source materials and registry signal (`exercise`, `solution`, `tutorial`, `exam`) and can host an ingestion scaffold pilot without claiming concept-level task mapping.
- Source materials inspected for this slice:
  - `source-materials/Statistik/` (including `Vorlesungen`, `Tutorien`, `Großübung_Coaching`, and mirrored files under `Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung`)
  - `docs/audits/source-corpus-registry.generated.json`

## Implementation
- Updated trust regression expectation to honest coverage semantics:
  - `mikro2/spieltheorie_statisch` now expects `page-anchors`.
- Added shared ingestion scaffold:
  - `assets/js/portal-core/data/officialTaskIngestion.js`
  - Includes normalization, filtering, summary counts, and explicit non-deceptive placeholder builder.
- Applied scaffold minimally to Statistik:
  - `statistik/js/data/officialTaskIngestion.js`
  - `statistik/js/features/sourceCompanion.js`
  - Companion task panel now reports registry-derived official task counts and explicitly labels placeholder status as non-deceptive; no academic task text is synthesized.

## Integrity boundaries
- No invented academic substance added.
- No fake completion claims: panel text keeps `exam-bank-complete` boundary explicit.
- Deployability preserved (JS-only additive changes plus one test expectation correction).

## Remaining gaps after slice
- Statistik official task documents are ingested at metadata level only; concept/family-level official mapping remains open.
- Other modules still need Workstream 3 ingestion rollout.
