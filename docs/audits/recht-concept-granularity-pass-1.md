# Recht Concept Granularity Pass 1

## Scope
- Implemented exactly the conservative, source-grounded mandatory splits from `docs/audits/recht-concept-granularity-audit-pass-1.md`.
- Focus stayed on concept-map granularity and deployable consistency only.
- No optional split (`willenserklaerung`) was implemented.

## Exact splits implemented
1. `dissens_anfechtung` -> `dissens`, `anfechtung`
2. `ruecktritt_widerruf` -> `ruecktritt`, `verbraucherwiderruf`

## Concept count before/after
- Before: **12**
- After: **14**
- Net change: **+2** (two conservative 1->2 splits)

## What changed

### 1) Concept IDs and chapter structure
- File: `recht/js/data/chapters.js`
- Changes:
  - Replaced chapter IDs in `CHAPTERS` for the two split targets.
  - Preserved behavior/content integrity by mapping existing learning objects to both split IDs:
    - `CONTENT.dissens` and `CONTENT.anfechtung` both reuse prior `CONTENT.dissens_anfechtung`.
    - `CONTENT.ruecktritt` and `CONTENT.verbraucherwiderruf` both reuse prior `CONTENT.ruecktritt_widerruf`.
  - Removed old broad keys after split mapping.

### 2) Drill mapping continuity
- File: `recht/js/data/stepProblems.js`
- Changes:
  - Re-keyed existing bundles:
    - `dissens_anfechtung` -> `anfechtung`
    - `ruecktritt_widerruf` -> `verbraucherwiderruf`
  - Added split counterparts by pedagogically justified duplication:
    - `dissens` -> same bundle as `anfechtung`
    - `ruecktritt` -> same bundle as `verbraucherwiderruf`

### 3) Navigation/concept-link graph
- File: `recht/js/data/conceptLinks.js`
- Changes:
  - Replaced old broad concept nodes with split-aware IDs.
  - Preserved doctrinal flow by linking:
    - `willenserklaerung` -> `dissens`, `anfechtung`
    - `dissens` -> `anfechtung`
    - `schuldrecht_intro`/`schadensersatz` -> `ruecktritt`/`verbraucherwiderruf`
    - `ruecktritt` -> `verbraucherwiderruf` as downstream contrast/retrieval anchor.

### 4) Intuition mapping
- File: `recht/js/data/intuition.js`
- Changes:
  - Replaced old broad intuition keys with split-specific keys:
    - `dissens`
    - `anfechtung`
    - `ruecktritt`
    - `verbraucherwiderruf`
  - Kept existing pedagogical distinctions and exam-trap cues aligned to split boundaries.

### 5) Mastery outcome mapping
- File: `recht/js/data/masteryData.js`
- Changes:
  - Replaced old broad mastery keys with split-specific outcomes for:
    - `dissens`
    - `anfechtung`
    - `ruecktritt`
    - `verbraucherwiderruf`

### 6) Full-exam concept attribution consistency
- File: `recht/js/data/fullExams.js`
- Changes:
  - Updated legacy concept IDs in exam block attribution:
    - `dissens_anfechtung` -> `anfechtung`
    - `ruecktritt_widerruf` -> `verbraucherwiderruf`
  - Keeps full-exam tagging deployable with the new concept map.

## Exact files changed
- `recht/js/data/chapters.js`
- `recht/js/data/stepProblems.js`
- `recht/js/data/conceptLinks.js`
- `recht/js/data/intuition.js`
- `recht/js/data/masteryData.js`
- `recht/js/data/fullExams.js`
- `docs/audits/recht-concept-granularity-pass-1.md`

## Remaining broad concepts that should stay unsplit (intentional)
- `methodik`: coherent method spine for Anspruchsaufbau/Gutachtenstil.
- `privatrecht`: orientation node; further split now would be mostly cosmetic.
- `trennung_abstraktion`: single doctrinal core unit.
- `geschaeftsfaehigkeit`: coherent Minderjährigen-/Fähigkeitslogik.
- `stellvertretung`: already internally structured and navigation-useful.
- `agb`: coherent inclusion/control chain.
- `schuldrecht_intro`: intended bridge concept.
- `schadensersatz`: still coherent as one core schema family in this pass.
- `willenserklaerung`: optional split explicitly deferred as requested.

## Status
- Mandatory splits implemented exactly.
- Optional split not implemented.
- Changes are additive and deployable with existing behavior preserved.
