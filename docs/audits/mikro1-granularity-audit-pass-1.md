# Mikro1 Concept Granularity Audit — Pass 1

## Scope
- Module: `mikro1` only.
- Task type: audit only (no code changes).
- Objective: evaluate concept-map granularity against course-grounded content already represented in the module and the platform's current post-normalization granularity standard.

## Exact files inspected
- `mikro1/js/data/chapters.js`
- `mikro1/js/data/conceptLinks.js`
- `mikro1/js/data/stepProblems.js`
- `mikro1/js/data/fullExams.js`
- `mikro1/js/data/intuition.js`
- `mikro1/js/data/masteryData.js`
- `docs/audits/mikro1-backbone-integration.md`
- `docs/audits/mikro1-content-enrichment-pass-2.md`
- `docs/audits/source-curation-pass-2-mikro1.md`

## Current concept count
- **33 concepts** (from `CHAPTERS` in `mikro1/js/data/chapters.js`).

## Granularity judgment
- **Overall judgment: appropriately granular (high benchmark level).**
- `mikro1` remains one of the most fine-grained and pedagogically navigable modules after recent platform normalization.
- Concept progression is structurally coherent (household theory -> duality -> price effects -> welfare -> production/costs -> market/monopoly) and reflected consistently in `conceptLinks`, `intuition`, `masteryData`, exams, and drills.

## Concepts that may still be broad (reviewed)
These are **borderline broad** but currently still pedagogically acceptable and not mandatory to split:

1. `cv_ev` (`CV, EV & Konsumentenrente`)
   - Bundles two exact welfare measures plus their common approximation anchor.
   - Current bundling is still navigation-useful because exam tasks and intuition treat them as a tightly linked comparison unit.
   - Split candidate only if future depth pass adds materially separate item pools for CV-only and EV-only workflows.

2. `kosten` (`Kostenminimierung & Kostenfunktion`)
   - Combines optimization condition and derived function machinery.
   - Still acceptable because downstream split already exists via `gk_dk` and `gewinn`, preventing overload in one node.

3. `monopol` (`Monopol & Preisdiskriminierung`)
   - Potentially broad in theory breadth.
   - In current module practice/exam usage, the node remains centered on core MR=MC and welfare loss logic; no mandatory split required now.

## Concepts that may be too thin or overly fragmented (reviewed)
- **No clear over-fragmentation found.**
- Candidate pairs that might look thin in isolation (e.g., `indiff` vs `grs`, `hicks` vs `ausgaben` vs `shephard`, `produktion` vs `grts`) are justified because each has distinct exam operations and prerequisite roles.
- No concept appears to be an artificial count-inflation split.

## Split/merge decision (pass 1)
- **No mandatory split warranted in pass 1.**
- **No merge warranted in pass 1.**
- Rationale:
  - Concept count is already high and balanced relative to platform standard.
  - Distinctions map to real learnable/examinable units rather than cosmetic partitioning.
  - Remaining broadness is limited and currently pedagogically productive.

## Recommendations (non-mandatory, future-only)
1. Keep concept IDs unchanged in current granularity pass.
2. If a later depth pass reveals persistent learner confusion, consider a targeted optional split only for:
   - `cv_ev` -> `cv_ev_exaktmasse` and `konsumentenrente_approximation`
   - but only with clearly separated drills/exam objects (not by taxonomy alone).
3. Continue improving drill depth within existing nodes rather than changing map structure.

## Explicit final statement
- **No granularity changes are warranted for `mikro1` in concept granularity audit pass 1.**
