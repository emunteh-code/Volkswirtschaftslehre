# Makro1 Content Enrichment Pass 2

## Scope
- Module: `makro1`
- Basis: `docs/audits/makro1-source-grounded-audit-pass-1.md`
- Source grounding used in this pass:
  - `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_5.pdf`
  - `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/Kap6.pdf`
  - `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_8.pdf`
  - `source-materials/Makroökonomik I/Makroökonomik I/Übungen/Übung5.pdf`
  - `source-materials/Makroökonomik I/Makroökonomik I/Tutorium/Tutorienblatt_6_Makro_1.pdf`
- Pass type: additive content enrichment only (no broad infrastructure work).

## Exact files changed
1. `makro1/js/data/chapters.js`
2. `makro1/js/data/stepProblems.js`
3. `docs/audits/makro1-content-enrichment-pass-2.md`

## What changed and why

### 1) ELB / policy-feasibility drills
- **Changed in** `makro1/js/data/chapters.js` (`politikmix`):
  - Added a new exam-style task on ELB feasibility under risk-premium shock with low inflation expectations.
  - Emphasis: ELB constraint (`i=0` floor), limited real-rate room when `\pi^e` is low, and resulting need for additional stabilization channels.
- **Changed in** `makro1/js/data/stepProblems.js` (`politikmix`):
  - Added new step bundle `ELB Policy-Feasibility` (`problemId: mk1_policy_elb_1`) with Decision -> Execution -> Validation flow.
- **Source grounding:** directly reflects `Übung5.pdf` task structure on real-rate target vs nominal bound and policy feasibility under ELB.

### 2) Risk-premium / crisis-transmission mini-cases
- **Changed in** `makro1/js/data/chapters.js` (`realzins`):
  - Added mini-case task on spread/risk-premium shock transmission to real activity in extended IS-LM logic.
  - Explicit chain: spread up -> `i_L`/real financing cost up -> investment down -> IS left.
- **Changed in** `makro1/js/data/stepProblems.js` (`realzins`):
  - Added new step bundle `Krisentransmission über Spread` (`problemId: mk1_real_3`).
- **Source grounding:** aligned with `Kap6.pdf` treatment of risk premia, credit spreads, and crisis transmission channels.

### 3) Phillips expectation-regime differentiation drills
- **Changed in** `makro1/js/data/chapters.js` (`phillips`):
  - Added explicit expectation-regime comparison task (anchored vs adaptive) to separate level statements from acceleration statements.
- **Changed in** `makro1/js/data/stepProblems.js` (`phillips`):
  - Added new step bundle `Erwartungsregime-Differenz` (`problemId: mk1_pc_3`) focused on regime detection and target-variable discipline (`\pi` vs `\Delta\pi`).
- **Source grounding:** from `VL_8.pdf` and tutorial-style trap framing in `Tutorienblatt_6_Makro_1.pdf`.

### 4) Tighter policy-regime comparison graphwalk retrieval
- **Changed in** `makro1/js/data/chapters.js`:
  - Reinforced `politikmix` with an additional feasibility-focused graphwalk under ELB constraints, complementing existing steep-LM vs horizontal-rule comparisons.
- **Changed in** `makro1/js/data/stepProblems.js`:
  - New `politikmix` ELB bundle forces regime-aware endpoint reasoning rather than generic “IS shifts right” recall.
- **Source grounding:** consistent with VL5 + Uebung5 emphasis on regime-dependent endpoint differences and constrained-policy scenarios.

## Exact new learning objects added

### New `chapters.js` tasks
1. `politikmix`: ELB policy-feasibility task under risk-premium shock and low expected inflation.
2. `realzins`: crisis-transmission mini-case using spread/risk-premium channel.
3. `phillips`: anchored-vs-adaptive expectation-regime differentiation task.

### New `stepProblems.js` bundles
1. `politikmix`: `mk1_policy_elb_1` (ELB Policy-Feasibility)
2. `realzins`: `mk1_real_3` (Krisentransmission über Spread)
3. `phillips`: `mk1_pc_3` (Erwartungsregime-Differenz)

## Concepts/sections enriched
- `politikmix` (ELB feasibility, constrained policy choice, regime-aware retrieval)
- `realzins` (risk-premium / spread-to-real-economy transmission)
- `phillips` (expectation-regime separation, inflation level vs inflation change)

## Remaining gaps and why they remain
- No new standalone concept IDs were introduced for ELB or spread diagnostics.
  - **Why:** this pass focused on additive enrichment without concept-map restructuring.
- No provenance-path cleanup in `contentManifest` spelling variants (`Uebungen` vs `Übungen`, filename variants).
  - **Why:** identified as source-curation hygiene, out of scope for content-enrichment-only pass.
- No additional UI/renderer/graph-system changes.
  - **Why:** explicit scope was pedagogical content enrichment only; existing graph-oriented pedagogy was preserved and strengthened through tasks/drills.
