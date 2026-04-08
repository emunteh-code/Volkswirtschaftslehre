# Makro1 Source-Grounded Audit Pass 1

## Scope and method
- Module audited: `makro1`
- Source of truth: `source-materials/Makroökonomik I/Makroökonomik I`
- Audit focus: source-grounded concept coverage, granularity consistency, content-depth/drill gaps, and next enrichment targets.
- This pass is audit-only; no code/content rewrites were performed.

## Exact source files successfully opened
1. `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_1.pdf`
2. `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_3.pdf`
3. `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_5.pdf`
4. `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/Kap6.pdf`
5. `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_7.pdf`
6. `source-materials/Makroökonomik I/Makroökonomik I/Vorlesungen/VL_8.pdf`
7. `source-materials/Makroökonomik I/Makroökonomik I/Zusammenfassungen/Makro I VL5.pdf`
8. `source-materials/Makroökonomik I/Makroökonomik I/Zusammenfassungen/Makro I VL8.pdf`
9. `source-materials/Makroökonomik I/Makroökonomik I/Übungen/Übung5.pdf`
10. `source-materials/Makroökonomik I/Makroökonomik I/Tutorium/Tutorienblatt_6_Makro_1.pdf`

## Portal files audited
- `makro1/js/data/chapters.js`
- `makro1/js/data/stepProblems.js`
- `makro1/js/data/intuition.js`
- `makro1/js/data/conceptLinks.js`
- `makro1/js/data/contentManifest.js`

## Findings

### Concepts already well grounded in source
- `makro_rahmen`: clearly aligned with VL1 framing (short vs medium horizon, macro aggregates, policy relevance).
- `vgr`: grounded in VGR/BIP identity and core macro indicators used in early lecture sequence.
- `guetermarkt` and `multiplikator`: strongly grounded in VL3 (Keynesian goods-market equilibrium, multiplier logic, paradox of thrift, automatic stabilizers).
- `geldnachfrage`, `islm`, `politikmix`: well grounded in VL5 and matching summary sheets (IS/LM under interest-rate steering, shift-vs-movement logic, fiscal/monetary mix).
- `realzins`: strongly grounded in Kap6 (nominal vs real rates, expected inflation channel, risk premium extension).
- `arbeitsmarkt` and `phillips`: well grounded in VL7/VL8 and tutorial sheet structure (WS-PS, natural unemployment, NAIRU/expectations-augmented Phillips).
- `islmpc`: directionally source-grounded via the transition from IS-LM + labor/Phillips dynamics in VL7/8 and tutor tasks.

### Concepts currently too coarse
- `politikmix` is still broad relative to source exercise style: combines multiple regimes (steep LM vs horizontal rule, crowding-out intensity, coordinated policies, lower-bound contingencies) that are separable exam units.
- `realzins` bundles two distinct tested units from Kap6/Uebung5: (a) Fisher/expected inflation translation and (b) financial-friction/risk-premium shock with policy constraints at effective lower bound.
- `phillips` combines multiple exam-distinct subunits: classic vs expectations-augmented/modified Phillips, NAIRU relation, and expectation-formation regimes (anchored vs adaptive/indexation).
- `erwartungen` is somewhat broad because it merges policy credibility/time-consistency with term-structure/forward-guidance channel; source treatment distinguishes expectation mechanics more explicitly.

### Concepts missing from portal but present in source materials
- No explicit standalone treatment of the **effective lower bound** decision logic despite direct emphasis in `Übung5.pdf` (real-rate target vs nominal bound, inflation expectations cases).
- No explicit standalone concept for **financial-crisis transmission markers** (credit spread/TED spread interpretation, risk-premium shock diagnosis) although this is a recurrent source thread in `Kap6.pdf`.
- No explicit worked block on **anchored vs adaptive inflation expectations calibration** (theta/lambda mechanics in VL8), beyond current high-level treatment.

### Weakly grounded or underdeveloped concepts/drills
- Drill density is uneven for source-heavy trap zones:
  - Lower-bound and policy-feasibility scenarios (from `Übung5.pdf`) are underrepresented in `stepProblems`.
  - Phillips expectation-regime traps (anchored vs adaptive, inflation level vs inflation change) appear but remain lighter than source tutorial intensity.
  - Financial-friction mini-cases (risk premium jump -> IS shift -> feasible monetary/fiscal response set) are underdeveloped relative to Kap6 exercise style.
- `contentManifest` source paths use mixed spellings for exercise/tutorial folders (`Uebungen` vs actual `Übungen`) and a likely file-name mismatch (`Tutorienblatt-3.pdf` vs `Tutorienblatt_3.pdf`), which weakens provenance precision even though concept-level mapping is mostly correct.

## Granularity consistency assessment (vs mikro1 benchmark level)
- `makro1` is already materially more granular than a coarse chapter shell and is broadly credible.
- Remaining gap is not a lack of concepts overall, but insufficient separation of a few high-stakes exam decision units (especially ELB/risk-premium policy constraints and Phillips expectation regimes).

## Recommendation: target for makro1 content enrichment pass 2
Prioritize additive, source-grounded enrichment in the following order:
1. **ELB and policy-feasibility drills** (from `Übung5.pdf`): real-rate targeting vs nominal-rate bound, inflation-expectation scenarios, and what policy tool remains feasible.
2. **Risk-premium and crisis-transmission mini-cases** (from `Kap6.pdf`): diagnose spread/risk shocks, trace IS impact, select realistic fiscal/monetary response under constraints.
3. **Phillips expectation-regime sharpening** (from `VL_8.pdf` and `Tutorienblatt_6_Makro_1.pdf`): separate inflation-level vs inflation-change logic, anchored vs adaptive expectations, NAIRU interpretation traps.
4. **Policy-mix regime comparison retrieval**: reinforce before/after graphwalk tasks where identical fiscal shocks generate different `(Y, i/r)` outcomes under different monetary regimes.

## Remaining risks/gaps
- Without explicit ELB/risk-premium decision drills, students may memorize formulas but fail source-typical policy-choice questions under constraints.
- Provenance anchors should be normalized to exact filesystem names in a later curation pass to avoid silent drift between declared and actual source references.
