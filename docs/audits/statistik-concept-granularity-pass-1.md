# Statistik Concept Granularity Pass 1

## Scope
- Implemented exactly the conservative, source-grounded splits from `docs/audits/statistik-concept-granularity-audit-pass-1.md`.
- Focus remained on concept-map granularity and deployable consistency.
- No broad content rewrite and no fake concept inflation.

## Exact splits implemented
1. `schaetzen` -> `schaetzen_verfahren`, `schaetzen_eigenschaften_intervalle`
2. `regression` -> `regression_schaetzung_inferenz`, `regression_diagnostik_prognose`

## Concept count before/after
- Before: **12**
- After: **14**
- Net change: **+2** (two real 1->2 splits)

## What changed

### 1) Concept IDs and chapter structure
- File: `statistik/js/data/chapters.js`
- Changes:
  - Replaced `CHAPTERS` IDs for the two broad concepts with the four split IDs.
  - Preserved existing academic content integrity by reassigning existing `CONTENT` learning objects to both split targets where pedagogically justified.
  - Removed old `CONTENT` keys (`schaetzen`, `regression`) after split mapping.

### 2) Drill mapping continuity
- File: `statistik/js/data/stepProblems.js`
- Changes:
  - Re-keyed:
    - `schaetzen` -> `schaetzen_verfahren`
    - `regression` -> `regression_schaetzung_inferenz`
  - Added split counterparts by mapping:
    - `schaetzen_eigenschaften_intervalle` -> same drill bundle as `schaetzen_verfahren`
    - `regression_diagnostik_prognose` -> same drill bundle as `regression_schaetzung_inferenz`
  - This keeps both new concept slots operational without inventing artificial new drill content.

### 3) Navigation / concept-link graph
- File: `statistik/js/data/conceptLinks.js`
- Changes:
  - Replaced old links with split-aware graph edges for the four new IDs.
  - Preserved learning flow:
    - `verteilungen` -> estimation split nodes
    - estimation split nodes -> `testen`
    - `testen` -> `regression_schaetzung_inferenz`
    - `regression_schaetzung_inferenz` -> `regression_diagnostik_prognose`

### 4) Intuition mapping
- File: `statistik/js/data/intuition.js`
- Changes:
  - Replaced broad intuition keys with split-specific entries:
    - `schaetzen_verfahren`
    - `schaetzen_eigenschaften_intervalle`
    - `regression_schaetzung_inferenz`
    - `regression_diagnostik_prognose`
  - Preserved the prior pedagogical intent while making split boundaries explicit.

## Exact files changed
- `statistik/js/data/chapters.js`
- `statistik/js/data/stepProblems.js`
- `statistik/js/data/conceptLinks.js`
- `statistik/js/data/intuition.js`
- `docs/audits/statistik-concept-granularity-pass-1.md`

## Remaining broad concepts that should stay unsplit (intentional)
- `deskriptiv`: coherent descriptive workflow; further split now would likely be cosmetic.
- `bivariat`: compact connector concept to correlation/regression.
- `wahrscheinlichkeit`: coherent fundamentals block.
- `verteilungen`: coherent random-variable/distribution block.
- `testen`: remains intentional umbrella because specialized test-family concepts already exist (`z_test`, `zwei_stichproben`, `varianzanalyse`, `nichtparametrisch`).
- `z_test`, `zwei_stichproben`, `varianzanalyse`, `nichtparametrisch`: already represent meaningful exam-family decomposition.
- `rlab`: application bridge; current gaps are depth/distribution issues, not granularity architecture.

## Status
- Changes are additive and deployable.
- Splits implemented exactly as requested.
- No additional split/merge beyond the two audited recommendations.
