# Mikro1 Content Enrichment Pass 2

## Scope
- Module: `mikro1` only.
- Goal: add high-value, additive learning objects in clearly supported areas (exam traps, transfer, formula-graph-intuition linkage, mixed retrieval).
- Non-goals: no infrastructure redesign, no flattening of `mikro1`, no fake source anchoring.

## Audit (post platform-wide improvements)

### Exact files inspected
- `mikro1/js/data/chapters.js`
- `mikro1/js/data/stepProblems.js`
- `mikro1/js/data/intuition.js`
- `mikro1/js/data/conceptLinks.js`
- `mikro1/js/data/fullExams.js`
- `mikro1/js/data/masteryData.js`
- `docs/audits/source-curation-pass-2-mikro1.md`

### Highest-value weak spots identified
1. **Step-problem coverage bottleneck**: explicit curated drills existed only for `lagrange` and `slutsky`; most other concepts depended on minimum fallback generation.
2. **Underrepresented exam traps** in high-stakes areas:
   - `cv_ev` vs. `ΔKR` ranking/reference-level confusion.
   - `kosten` shutdown condition (`p` vs. `min AVC`) confusion.
   - `monopol` confusion between `MR=MC` point and demand-read-off price, and elasticity region.
3. **Transfer chain weakness** from household duality into applied labor-choice reasoning (`arbeit` via SE/EE sign logic).
4. **Mixed retrieval still uneven** across welfare, labor, firm costs, and monopoly blocks in short-step format.

## Implemented enrichment (additive only)

### Exact files changed
- `mikro1/js/data/stepProblems.js`
- `docs/audits/mikro1-content-enrichment-pass-2.md`

### Exact concepts/sections enriched
- `cv_ev`
- `arbeit`
- `kosten`
- `monopol`

### Exact new learning objects added
Added **4 new step-problem bundles** (each with 3 steps = **12 new guided drill steps** total):

1. **`cv_ev`**: *CV/EV vs. Konsumentenrente (Transfer-Drill)*
   - Distinguishes reference utility level for CV (`u^0`) vs EV (`u^1`).
   - Forces retrieval of ranking `CV < ΔKR < EV` (for normal-goods price drop case).
   - Targets classic welfare-measure exam trap.

2. **`arbeit`**: *Arbeitsangebot: SE/EE-Signale*
   - Sign drill for substitution effect on leisure under wage rise.
   - Sign drill for income effect on leisure (normal leisure).
   - Validation for backward-bending supply condition (`EE` dominating `SE` at high wages).

3. **`kosten`**: *Kostenkurven und Shutdown-Trap*
   - Computes `MC` and `AVC` from total cost.
   - Validates short-run shutdown decision when `p < min AVC`.
   - Targets operational exam mistake pattern (producing below shutdown threshold).

4. **`monopol`**: *Monopol: MR=MC und Elastizitätsfalle*
   - Derives `MR` from linear inverse demand.
   - Solves quantity via `MR=MC`.
   - Validates that monopoly optimum is not in unelastic demand region.

## Why these enrichments are source-grounded enough
- They are directly derivable from existing `mikro1` in-module academic structure and already tested concepts in:
  - `chapters.js` concept map,
  - `intuition.js` exam logic patterns,
  - `fullExams.js` task styles and canonical trap types.
- No new academic topics were introduced; only finer drill coverage on already present, exam-relevant material.

## Remaining gaps (left intentionally)
1. **External per-concept source-path provenance remains unresolved** for `mikro1` (as documented in `source-curation-pass-2-mikro1.md`), so no file-path-level source citations were fabricated.
2. **No broad rewrite of theory text blocks** was done; this pass intentionally focused on high-yield drill enrichment.
3. **No additional graph-specific new panel logic** was added in this pass to avoid infrastructure scope creep; graph/formula linkage was strengthened through formula-first step drills instead.

## Deployability and integrity
- Changes are additive to `BASE_STEP_PROBLEMS` and preserve existing concept IDs and runtime wiring.
- No infrastructure interfaces or module architecture were altered.
- Existing behavior remains intact; enrichment only increases curated practice coverage.
