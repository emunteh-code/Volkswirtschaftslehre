# Workstream 3 — Slice 16: Mikro2 VL layer expansion

**Date:** 2026-05-28

## Changes

- Regenerated `mikro2/js/data/formulaCards.js`: **8 → 15** cards (all anchored concepts with portal `formeln`).
- Regenerated `mikro2/js/data/taskFamilies.js`: **12 → 15** VL-grounded families (+ ingestion placeholders unchanged).
- Explicit empty anchor arrays for `externa_pigou`, `externa_institutionen`, `public_goods` in `sourceAnchors.js`.

## Source policy (unchanged)

Per `docs/audits/mikro2-official-source-ingest-pass-1.md`, the three market-failure concepts have **no direct VL anchor** in the supplied Mikro II PDF set. They remain `platform-added-explanation` via `UNMAPPED_CURRENT_CONCEPTS` in `contentManifest.js`. No synthetic VL anchors were added.

## Validation

- `node tools/exam-os/ci-validate.mjs` — OK
- `tools/clickthrough` `trust:pass1` — OK (after slice 15 makro1 footer fix)

## Remaining Mikro2 gaps

- 3/18 concepts without page anchors (by design until corpus proves VL coverage).
- 0 `official-task-source` families.
- Monopoly / price discrimination / intertemporal blocks still under-portaled vs full lecture sequence.
