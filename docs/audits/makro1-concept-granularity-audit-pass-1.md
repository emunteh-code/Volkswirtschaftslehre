# Makro1 Concept Granularity Audit Pass 1

## Scope
- Module audited: `makro1`
- Pass type: granularity audit only (no code changes)
- Benchmark for visible granularity level: `mikro1/js/data/chapters.js`
- Source grounding checked against:
  - `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_5.pdf`
  - `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/Kap6.pdf`
  - `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_8.pdf`
  - `source-materials/Makroökonomik I/Makroökonomik I/Übungen/Übung5.pdf`
  - `source-materials/Makroökonomik I/Makroökonomik I/Tutorium/Tutorienblatt_6_Makro_1.pdf`

## Exact Files Inspected
1. `makro1/js/data/chapters.js`
2. `makro1/js/data/stepProblems.js`
3. `makro1/js/data/conceptLinks.js`
4. `makro1/js/data/intuition.js`
5. `makro1/js/data/masteryData.js`
6. `docs/audits/makro1-source-grounded-audit-pass-1.md`
7. `docs/audits/makro1-content-enrichment-pass-2.md`
8. `mikro1/js/data/chapters.js`
9. `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_5.pdf`
10. `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/Kap6.pdf`
11. `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_8.pdf`
12. `source-materials/Makroökonomik I/Makroökonomik I/Übungen/Übung5.pdf`
13. `source-materials/Makroökonomik I/Makroökonomik I/Tutorium/Tutorienblatt_6_Makro_1.pdf`

## Current Concept Count
- `makro1`: **13** concepts (from `CHAPTERS` in `makro1/js/data/chapters.js`)
- `mikro1` benchmark reference: **33** concepts (from `CHAPTERS` count in `mikro1/js/data/chapters.js`)

Interpretation:
- `makro1` is structurally coherent but materially coarser than `mikro1`.
- Coarser count alone is not a defect; only exam-relevant bundled units should be split.

## Concepts Identified as Too Broad

### 1) `realzins` (too broad)
Why broad:
- Currently bundles at least two distinct exam-relevant learnable units that are repeatedly separated in source materials (`Kap6`, `Übung5`):
  1. Fisher channel (`i`, `\pi^e`, real rate translation)
  2. Financial-friction channel (risk premium/spread shocks, policy feasibility under constraints including ELB logic)
- These require different diagnostic steps and different error patterns in exam settings.

### 2) `phillips` (borderline broad)
Why broad:
- Source treatment in `VL_8` and `Tutorienblatt_6` separates:
  1. baseline Phillips/NAIRU relation and unemployment-gap interpretation
  2. expectation-regime logic (anchored vs adaptive/indexed; level vs change framing)
- Current concept already contains both; still workable, but navigation can blur these two different exam tasks.

### 3) `politikmix` (borderline broad)
Why broad:
- Combines standard crowding-out regime comparison and constrained policy feasibility cases.
- `Übung5` and tutor material give constrained scenarios (including nominal bound/real-rate feasibility) a distinct decision structure from standard IS-LM policy-mix shifts.

## Thinness Diagnosis (Depth vs Granularity)
- Main issue is **mixed**:
  - For `realzins`: mainly a **granularity** problem (distinct units bundled).
  - For `phillips` and `politikmix`: mainly **depth/distribution** first, with optional granularity refinement if navigation friction persists.
- No evidence that concept inflation is needed; several existing concepts are already academically coherent and should remain unsplit.

## Recommended Splits (Conservative, Source-Grounded)

### Mandatory split recommendation
1. `realzins` ->
   - `realzins_fisher_erwartungen`
   - `realzins_risikopraemie_krisenkanal`

Rationale:
- Mirrors source distinction in `Kap6` and exercise logic in `Übung5`.
- Improves navigation and exam retrieval without inventing new academic substance.

### Optional split recommendations (defer unless needed)
2. `phillips` ->
   - `phillips_nairu`
   - `phillips_erwartungsregime`

3. `politikmix` ->
   - `politikmix_standard`
   - `politikmix_elb_feasibility`

Rationale for optional status:
- Current structure can still function if depth and drill differentiation are strengthened inside existing IDs.
- Splitting now is pedagogically plausible, but not strictly required in pass 1.

## Concepts That Should Remain Unsplit (and Why)
- `makro_rahmen`: coherent orientation concept; splitting would be cosmetic.
- `vgr`: compact measurement block; no clear exam-gain from further partition now.
- `guetermarkt` and `multiplikator`: already separated along a real exam boundary (equilibrium setup vs propagation mechanics).
- `geldnachfrage` and `banken`: already separated by market mechanism vs intermediation/balance-sheet logic.
- `islm`: coherent integration block for goods + financial market equilibrium.
- `arbeitsmarkt`: WS-PS core is a single coherent unit at this level.
- `islmpc`: integrative transition concept; current coherence is high.
- `erwartungen`: currently broad but still acceptable as a unifying capstone concept; no mandatory split in pass 1.

## Pass-1 Granularity Judgment
- Status: **slightly under-split in one high-value area**.
- Mandatory action justified: split `realzins` into Fisher/expectations vs risk-premium/crisis channel.
- Other candidate splits (`phillips`, `politikmix`) should remain optional for now to avoid cosmetic fragmentation.

## Recommended Next Step
- Implement `makro1` concept granularity pass 1 with the **single mandatory split**:
  - `realzins` -> `realzins_fisher_erwartungen`, `realzins_risikopraemie_krisenkanal`
- Keep all other concepts unchanged in pass 1.
