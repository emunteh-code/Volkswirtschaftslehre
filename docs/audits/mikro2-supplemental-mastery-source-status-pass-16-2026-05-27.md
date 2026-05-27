# Mikro2 Supplemental Mastery Source Status Pass 16 - 2026-05-27

## Finding

Mikro2 now visibly marks `externa_pigou`, `externa_institutionen`, and `public_goods` as supplemental platform support in concept pages, graphs, provenance, and the source companion.

The generated mastery objectives still infer `source-distilled` when a concept has no formula cards or task families. For the three unanchored market-failure concepts, that label is too generous because no direct official Mikro II source anchor or source path exists in the available corpus.

## Risk

A student opening the Aufgaben/mastery tab could see a source-status label that conflicts with the source-boundary warnings elsewhere. That weakens provenance consistency and can make supplemental material feel officially source-distilled.

## Implementation Target

- Keep mastery objectives for supplemental concepts visible.
- Label supplemental recognition/derivation objectives as `platform-added-explanation`.
- Label supplemental calculation/transfer practice objectives as `platform-added-drill`.
- Leave source-backed Mikro2 mastery objectives unchanged.

## Implemented

- Added a supplemental concept set in `mikro2/js/data/masteryData.js`.
- Added status fallback logic so unanchored market-failure mastery objectives use platform-added labels.
- Kept concepts with formula cards or task families on their existing direct-source path.

## Validation

- `node --check mikro2/js/data/masteryData.js`
- Node data check confirmed:
  - `externa_pigou`, `externa_institutionen`, and `public_goods` use `platform-added-explanation` for recognition/derivation and `platform-added-drill` for calculation/transfer.
  - `oligopol_cournot_bertrand` still uses `direct-source` for all four dimensions.
- `git diff --check`
- Browser smoke test at `http://127.0.0.1:4188/mikro2/index.html?qa=1`:
  - `public_goods` Aufgaben/mastery tab showed platform-added labels and no `direct-source`.
  - `oligopol_cournot_bertrand` Aufgaben/mastery tab still showed `direct-source` and no platform-added labels.

## Changed Files

- `mikro2/js/data/masteryData.js`
- `docs/audits/mikro2-supplemental-mastery-source-status-pass-16-2026-05-27.md`

## Definition of Done for This Pass

- The three unanchored market-failure concepts no longer show `source-distilled` in generated mastery objective statuses.
- Their practice-like mastery objectives use `platform-added-drill`.
- Source-backed concepts such as Cournot/Bertrand still show direct/source-backed objective statuses.
- The portal remains deployable.

## Remaining Gaps

- The supplemental concepts remain excluded from source-anchor completion and official exam readiness until an official Mikro II source anchor is supplied.
