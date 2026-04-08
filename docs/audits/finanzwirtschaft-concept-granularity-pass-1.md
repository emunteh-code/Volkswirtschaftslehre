# Finanzwirtschaft Concept Granularity Pass 1

## Scope
- Implemented exactly the conservative, source-grounded splits from `docs/audits/finanzwirtschaft-concept-granularity-audit-pass-1.md`.
- Focus stayed on concept-map granularity and deployable consistency.
- No broad content rewrite or infrastructure redesign.

## Exact splits implemented
1. `kapitalmarkt_institutionen` -> `kapitalmarkt_bewertung`, `institutionen_marktunvollkommenheit`
2. `kapitalkosten` -> `eigenkapitalkosten`, `fremdkapitalkosten`
3. `kapitalstruktur` -> `wacc_leverage`, `modigliani_miller`

## Concept count before/after
- Before: **13**
- After: **16**
- Net change: **+3** (three real 1->2 splits)

## What changed

### 1) Concept IDs and chapter structure
- File: `finanzwirtschaft/js/data/chapters.js`
- Changes:
  - Replaced the three broad concept IDs in `CHAPTERS` with the six split IDs.
  - Split `CONTENT` blocks into split-specific entries while preserving existing teaching substance:
    - `kapitalmarkt_bewertung`: market-price / preference orientation.
    - `institutionen_marktunvollkommenheit`: institution/friction orientation.
    - `eigenkapitalkosten`: equity-cost logic and interpretation.
    - `fremdkapitalkosten`: debt-cost logic (incl. skonto/effective-cost perspective).
    - `wacc_leverage`: weighted-cost and leverage transmission logic.
    - `modigliani_miller`: benchmark/irrelevance framing.
  - Reassignment stayed additive and source-aligned; no fake concepts were introduced.

### 2) Drill mapping and concept-level retrieval continuity
- File: `finanzwirtschaft/js/data/stepProblems.js`
- Changes:
  - Re-keyed concept drill mappings to the six new IDs.
  - Preserved existing drill objects and reassigned/duplicated only where needed to keep both split nodes operational and non-empty.

### 3) Concept navigation graph
- File: `finanzwirtschaft/js/data/conceptLinks.js`
- Changes:
  - Replaced old edges with split-aware `uses`/`usedBy` structure.
  - Preserved pedagogical flow from fundamentals -> investment methods -> uncertainty/financing.

### 4) Intuition layer
- File: `finanzwirtschaft/js/data/intuition.js`
- Changes:
  - Replaced three broad intuition nodes with six split-specific nodes.
  - Kept original intent and exam cues, separated by the new concept boundaries.

### 5) Mastery outcomes
- File: `finanzwirtschaft/js/data/masteryData.js`
- Changes:
  - Replaced mastery keys for the old broad concepts with split-specific mastery outcomes.
  - Maintained exam-relevant competency language and split-level measurability.

### 6) Graph concept routing (deployable consistency)
- Files:
  - `finanzwirtschaft/js/ui/graphPanel.js`
  - `finanzwirtschaft/js/ui/graphs.js`
- Changes:
  - Updated graph concept registration/routing from `kapitalstruktur` to `wacc_leverage`.
  - Preserved existing leverage graph behavior and controls.

## Exact files changed
- `finanzwirtschaft/js/data/chapters.js`
- `finanzwirtschaft/js/data/stepProblems.js`
- `finanzwirtschaft/js/data/conceptLinks.js`
- `finanzwirtschaft/js/data/intuition.js`
- `finanzwirtschaft/js/data/masteryData.js`
- `finanzwirtschaft/js/ui/graphPanel.js`
- `finanzwirtschaft/js/ui/graphs.js`
- `docs/audits/finanzwirtschaft-concept-granularity-pass-1.md`

## Remaining broad concepts that stay unsplit (intentional)
- `finanz_denkweise`: foundational orientation concept; splitting would be cosmetic.
- `liquiditaetsplanung`: one coherent timing/fristen workflow; remaining issue is depth, not granularity.
- `intertemporale_wahl`: compact single framework (budget line + preference + choice).
- `kapitalwert_fisher`: tightly coupled value-rule/separation logic; no high-confidence split needed now.
- `auf_abzinsen`: one transformation workflow; improvement axis is drill depth.
- `renten_endwert`: method-equivalence block is coherent at current level.
- `izf_kapitalwertfunktion`: one profile/threshold decision pipeline.
- `izf_grenzen`: focused caution block around IZF limitations.
- `unsicherheit`: still dense but currently one stable exam pipeline (dominance -> expectation -> risk).
- `bezugsrecht`: narrow, exam-specific mechanism with no useful extra split at this stage.

## Status
- Implementation is deployable and concept-map focused.
- No fake source grounding added.
- Splits exactly match the audit recommendation set.
