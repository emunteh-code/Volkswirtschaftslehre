# Mikro2 Concept Granularity Pass 1

## Scope
- Module: `mikro2` only.
- Focus: concept-map granularity and pedagogically meaningful concept splitting.
- Out of scope: broad content rewrite, renderer redesign, or fake concept inflation.

## Audit snapshot (before changes)
- Concept count before: **7**
  - `spieltheorie`, `oligopol`, `gleichgewicht`, `wohlfahrt`, `externa`, `public_goods`, `information`
- Highest-value granularity issues:
  1. `spieltheorie` bundled static NG mechanics with mixed/repeated-game logic.
  2. `oligopol` bundled simultaneous model discrimination (Cournot/Bertrand) with sequential Stackelberg logic.
  3. `information` bundled ex-ante adverse selection with ex-post moral-hazard/incentive-contract mechanics.

## What changed

### 1) Concept-map splits (academically real)
- File: `mikro2/js/data/chapters.js`
- Concept count after: **10**
- Splits introduced:
  - `spieltheorie` -> `spieltheorie_statisch` + `spieltheorie_dynamisch`
  - `oligopol` -> `oligopol_cournot_bertrand` + `oligopol_stackelberg`
  - `information` -> `information_adverse` + `information_moralhazard`

### 2) Dependency and retrieval alignment for new concept IDs
- Files:
  - `mikro2/js/data/conceptLinks.js`
  - `mikro2/js/data/intuition.js`
  - `mikro2/js/data/stepProblems.js`
  - `mikro2/js/ui/graphPanel.js`
  - `mikro2/js/ui/graphs.js`
- Changes:
  - Updated concept-link graph to preserve pedagogical ordering between split concepts.
  - Added split-specific intuition blocks (exam cues + bridge statements).
  - Re-keyed and expanded step-drill coverage to ensure split concepts have explicit retrieval objects.
  - Updated graph concept registration/mapping to avoid runtime breakage after ID changes.

## Pedagogical justification for each split
1. **`spieltheorie` split**
   - Why real: static best-response/Nash scanning and dynamic mixed/repeated-game logic require different exam procedures (matrix BR scan vs indifference/delta conditions).
   - Why useful: reduces method confusion (pure-strategy NG detection vs mixed/randomization and trigger-logic).

2. **`oligopol` split**
   - Why real: Cournot/Bertrand is primarily model discrimination under simultaneous moves; Stackelberg is a sequential game solved by backward induction.
   - Why useful: separates two different solution pipelines that are often confused in timed exams.

3. **`information` split**
   - Why real: adverse selection is ex-ante hidden-type selection; moral hazard/signaling/screening centers on ex-post hidden action and incentive-compatible contract design.
   - Why useful: clarifies instrument choice (transparency/type-separation vs behavior-incentive contracts).

## Exact files changed
- `mikro2/js/data/chapters.js`
- `mikro2/js/data/conceptLinks.js`
- `mikro2/js/data/intuition.js`
- `mikro2/js/data/stepProblems.js`
- `mikro2/js/ui/graphPanel.js`
- `mikro2/js/ui/graphs.js`
- `docs/audits/mikro2-concept-granularity-pass-1.md`

## Exact concept count before/after
- Before: **7**
- After: **10**
- Net change: **+3** concepts via **3 academically grounded splits**.

## Remaining granularity gaps
1. **`gleichgewicht` still broad**
   - Still bundles Edgeworth/contract-curve mechanics with Walras-equilibrium framing.
   - Left unsplit in pass 1 to avoid over-fragmentation without additional source-layer restructuring.
2. **`wohlfahrt` still broad**
   - Still combines welfare theorems and welfare-function perspectives in one concept.
   - Retained to preserve current chapter flow and avoid cosmetic splitting.
3. **`externa` still broad**
   - Pigou, Coase, and cap-and-trade remain in one concept.
   - Kept intact pending a dedicated market-failure granularity pass where consistent split-level retrieval bundles can be added across related chapters.

## Deployability/status
- Changes are additive and keep current module architecture.
- No linter errors detected on touched files.
