# 2026-05-28 — Workstream 1: Mikro1 provenance companion parity

## Scope
Complete Mikro1 application of the shared source companion (portal-core) with Mikro2-level operational features, without changing academic content.

## Audit-first (baseline)
- `assets/js/portal-core/features/sourceCompanionModule.js` already hosts shared companion runtime (coverage matrix, filters, anchor inventory, layer map, verdict, parity checklist, local opener).
- `mikro1/js/features/sourceCompanion.js` existed but lacked Mikro2 parity options (`includeAnchorMetadata`, module-specific parity messages, registry-backed task archive counts).
- `mikro1/js/ui/renderer.js` did not pass `sourceMaterialBaseUrl` — blocking local source open and file-ref → companion bridge from concept provenance strips.

## Implementation

### Portal-core primitives (`sourceCompanionCore.js`)
- `resolveDocIdBySourcePath` — open companion by manifest path (file-level refs).
- `buildConceptSourceSummaryFromProvenance` — shared nav/overview badges.
- `buildSourceParityActionPlan` — shared next-step checklist with module overrides.
- `renderAnchorContextPanel` — shared “opened from concept anchor” banner.

### Provenance UI (`sourceProvenanceUi.js`)
- `buildSourceRefInspectionRows` + `.source-provenance-companion-path` buttons for file-level refs.
- Dedupes ref rows when page anchors already cover the same path.

### Mikro1
- Companion adapter: parity messages, anchor metadata, registry task-doc breakdown.
- `getConceptSourceSummary` in `contentManifest.js`.
- Renderer: `sourceMaterialBaseUrl` + `getConceptSourceSummary`.

### Mikro2 adapter
- Slimmed to shared primitives (`sourceParityMessages`, removed duplicate anchor-context renderer).

## Validation
- `node --check` on touched JS files.
- `trust-regression-pass-1.mjs` — new `runMikro1SourceCompanion` (Quellenbrowser shell + file-ref bridge from `budget`).

## Honest gaps (unchanged)
- Mikro1: **0% page-level anchors** — companion shows reference-only / corpus-only honestly.
- Official task bank not task-family-mapped; 18+ exam image artefacts registered but not decomposed.
- `exam-bank-complete` and `adaptiveReady` remain false until Workstreams 3–5.

## Source materials used
- Registry: `docs/audits/source-corpus-registry.generated.json` (mikro1 document counts only).
- Existing curated VL refs: `mikro1/js/data/contentManifest.js` (`MIKRO1_PRIMARY_REFS_CURATED`).
