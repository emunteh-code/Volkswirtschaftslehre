# Finanzwirtschaft Content Enrichment Pass 1

## Scope
- Module: `finanzwirtschaft` only.
- Goal: deepen exam-useful finance pedagogy on top of rollout-normalized backbone.
- Out of scope: infrastructure polish, renderer refactor, shell redesign.

## Audit snapshot (before changes)
- Strong baseline:
  - broad and coherent chapter sequence from liquidity and intertemporal choice to valuation, risk, and capital structure;
  - existing formula anchors and decision-oriented chapter tasks;
  - complete concept coverage in step-drill scaffolding.
- Highest-value weak spots:
  1. **Worked-case depth** was often conceptual but still light on conflict-style method selection.
  2. **Formula/decision linkage** needed more explicit “which method when” resolution under exam pressure.
  3. **Interpretation of financial quantities/tradeoffs** needed denser emphasis on percent-vs-value traps.
  4. **Trap density** needed strengthening around discounting direction/sign logic, IZF/NPV conflicts, and risk/return distinction.
  5. **Chapter-end retrieval** needed additional compact finance mini-cases in high-error concepts.

## What changed

### 1) Chapter-end content enrichment (`CONTENT`)
- File: `finanzwirtschaft/js/data/chapters.js`
- Concepts enriched:
  - `kapitalwert_fisher`
  - `auf_abzinsen`
  - `izf_kapitalwertfunktion`
  - `unsicherheit`
  - `kapitalkosten`
- New learning objects/examples added:
  - **`kapitalwert_fisher`**: exclusion-case mini-case for IZF-vs-NPV conflict and value-maximization rule.
  - **`auf_abzinsen`**: variable-rate/sign-logic mini-case with period-wise transformation discipline.
  - **`izf_kapitalwertfunktion`**: method-selection mini-case clarifying why `IZF > i` is not a complete project-comparison criterion.
  - **`unsicherheit`**: equal-expected-value mini-case emphasizing downside-risk interpretation.
  - **`kapitalkosten`**: explicit formula-result-meaning chain task (from computed rate to decision relevance).

### 2) Exam-oriented retrieval drill enrichment (`BASE_STEP_PROBLEMS`)
- File: `finanzwirtschaft/js/data/stepProblems.js`
- New trap-aware step bundles added:
  - `fw_kf_2` (NPV criterion under IZF conflict)
  - `fw_aa_2` (discounting direction/sign and variable-rate logic)
  - `fw_izf_2` (proper role of IZF vs NPV profile in method selection)
  - `fw_un_2` (same EV, different downside risk)
  - `fw_kk_2` (formula-to-meaning decision interpretation)
- Pedagogical effect:
  - stronger retrieval pressure in high-confusion finance areas,
  - clearer method-selection logic under time constraints,
  - stronger formula/result/meaning connection in answer construction.

## Exact files changed
- `finanzwirtschaft/js/data/chapters.js`
- `finanzwirtschaft/js/data/stepProblems.js`
- `docs/audits/finanzwirtschaft-content-enrichment-pass-1.md`

## Exact concepts/sections enriched
- `kapitalwert_fisher`: value-maximization conflict logic (NPV vs % metric trap).
- `auf_abzinsen`: time-axis discipline, transformation direction, variable-rate handling.
- `izf_kapitalwertfunktion`: threshold-rule limits and profile-based method selection.
- `unsicherheit`: expectation vs downside-risk distinction.
- `kapitalkosten`: translating computed rates into financial decision meaning.

## Exact new learning objects or examples added
- New chapter-level mini-cases/tasks: **5**
  - 1 each in the five concepts above.
- New step-drill bundles: **5**
  - `fw_kf_2`, `fw_aa_2`, `fw_izf_2`, `fw_un_2`, `fw_kk_2`.

## Remaining content gaps and why they remain
1. **Long-form integrated case chains across multiple chapters remain limited**
   - This pass prioritized high-frequency exam traps and compact retrieval additions.
2. **Advanced quantitative calibration depth remains selective**
   - Added method and interpretation density, not a full expansion of heavy numeric scenario trees.
3. **No renderer-level pedagogy upgrade**
   - Explicitly out of scope; this pass stayed in data/content layers only.

## Deployability/status
- Changes are additive and module-local.
- No broad redesign or shell flattening.
- No fake source grounding introduced.
- Lint check on touched files shows no new errors.
