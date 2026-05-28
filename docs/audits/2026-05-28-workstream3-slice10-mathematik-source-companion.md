# 2026-05-28 — Workstream 3 Slice 10: Mathematik source companion

## Scope
- Roll out shared Quellenbrowser (source companion) to Mathematik with companion-only official-task archive panel.

## Audit-first
- `mathematik/js/data/officialTaskIngestion.js` already scaffolded (registry-backed counts, non-deceptive placeholder policy).
- `mathematik/js/data/contentManifest.js` provides `PROVENANCE_BY_CONCEPT` for matrix wiring.
- Pattern mirrors Ökonometrie / Statistik companion adapters.

## Implementation
- `mathematik/js/features/sourceCompanion.js` — shared module adapter + task archive panel.
- `mathematik/js/main.js` — registers `sourceCompanion` on portal app.
- `mathematik/js/features/dashboard.js` — Quellenbrowser CTA.

## Integrity
- Placeholder task families remain companion-only (student practice tabs filtered via portal-core).
- No page-level anchors yet; matrix note documents the gap.

## Remaining gap
- Mathematik page-anchor pass, official task-family mapping, formula cards, adaptive mastery evidence.
