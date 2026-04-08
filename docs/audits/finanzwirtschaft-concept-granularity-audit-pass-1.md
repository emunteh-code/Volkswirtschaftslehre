# Finanzwirtschaft Concept Granularity Audit Pass 1

## Scope
- Module: `finanzwirtschaft` only.
- Focus: concept-map granularity (not broad content rewrite).
- Benchmark lens: `mikro1` visible concept granularity standard.

## Exact files inspected

### Portal/module files
- `finanzwirtschaft/js/data/chapters.js`
- `finanzwirtschaft/js/data/stepProblems.js`
- `finanzwirtschaft/js/data/conceptLinks.js`
- `finanzwirtschaft/js/data/intuition.js`
- `finanzwirtschaft/js/data/masteryData.js`
- `docs/audits/finanzwirtschaft-content-enrichment-pass-1.md`
- `mikro1/js/data/chapters.js` (benchmark granularity reference)

### Source files opened (course-grounding)
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V1_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V3_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V6_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V8_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V9_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V10_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V11_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V12_StudIP.pdf`

## Current concept count
- `finanzwirtschaft`: **13** concepts (`CHAPTERS` entries).
- `mikro1` benchmark: **33** concepts.

Interpretation: `finanzwirtschaft` is currently much coarser than `mikro1` at the visible concept-map level. Some of this is legitimate (course is more compact), but several concepts still bundle distinct exam-relevant units that are taught and tested separately in the source.

## Broad concepts identified (granularity-relevant)

1. `kapitalmarkt_institutionen` (too broad)
   - Currently bundles:
     - kapitalmarktorientierte Preis-/Bewertungslogik,
     - institutionenorientierte Sicht bei Marktunvollkommenheiten,
     - Präferenz- und Friktionsrolle.
   - Source grounding:
     - V3 explicitly separates capital-market orientation vs institution orientation and their implications.
   - Diagnosis:
     - Mainly a **granularity** problem (not only depth), because this concept mixes two different explanatory frames with different exam prompts.

2. `kapitalkosten` (too broad)
   - Currently bundles:
     - costs of equity (incl. stock valuation / dividend model),
     - costs of debt (incl. credit-cost logic, skonto-style effective financing cost reasoning).
   - Source grounding:
     - V10/V11 clearly structure "Kosten des Eigenkapitals" and debt-cost logic as distinct units with different formulas and interpretation routines.
   - Diagnosis:
     - Clear **granularity** problem; each side has distinct method pipelines and trap patterns.

3. `kapitalstruktur` (borderline broad, but split-worthy)
   - Currently bundles:
     - WACC mechanics,
     - leverage transmission (return and risk effects),
     - MM benchmark/irrelevance framing.
   - Source grounding:
     - V12 treats leverage effect and MM benchmark explicitly as structured sub-units.
   - Diagnosis:
     - Primarily **granularity** problem (secondary depth component). The conceptual distinction is real and exam-useful.

## Thinness check: depth vs granularity
- Concepts that look thin are **mostly depth issues**, not split candidates:
  - `finanz_denkweise`: intentionally foundational orientation concept.
  - `liquiditaetsplanung`: coherent single decision frame (timing + capital need + fristenlogik).
  - `bezugsrecht`: narrow but exam-coherent mechanism (ex-rights/anti-dilution logic), already focused.
- Concepts that are dense but should stay single:
  - `auf_abzinsen`, `renten_endwert`, `izf_kapitalwertfunktion`, `izf_grenzen`, `unsicherheit` each track one dominant exam workflow; they need drill density, not forced sub-concepts.

Conclusion on thinness: for `finanzwirtschaft`, the largest remaining issue is **selective under-splitting** (granularity), while several smaller concepts are a **content-depth** issue only.

## Recommended conservative splits (academically real, pedagogically useful)

1. `kapitalmarkt_institutionen` ->
   - `kapitalmarkt_bewertung`
   - `institutionen_marktunvollkommenheit`

   Why this split is real:
   - Separates capital-market price/bewertung logic from institution/friction logic.
   - Mirrors source structure (V3: dual orientation framing).
   Why this split is useful:
   - Reduces frame confusion in exam questions ("price-based argument" vs "institution/friction argument").

2. `kapitalkosten` ->
   - `eigenkapitalkosten`
   - `fremdkapitalkosten`

   Why this split is real:
   - Distinct objects, formulas, and interpretation chains.
   - Source coverage explicitly separates these blocks (V10/V11).
   Why this split is useful:
   - Improves method selection under time pressure and prevents formula misapplication across capital types.

3. `kapitalstruktur` ->
   - `wacc_leverage`
   - `modigliani_miller`

   Why this split is real:
   - WACC/leverage mechanics and MM benchmark logic are linked but analytically distinct.
   - Source treatment in V12 supports this distinction.
   Why this split is useful:
   - Clarifies when students must compute/transmit effects vs when they must reason from benchmark assumptions.

## Proposed concept count after conservative split pass
- Current: **13**
- Recommended net additions: **+3** (three 1->2 splits)
- Proposed after pass: **16**

## Concepts that should remain unsplit (and why)
- `finanz_denkweise`: orientation anchor; splitting would be cosmetic.
- `liquiditaetsplanung`: one coherent decision workflow; better improved via deeper cases, not segmentation.
- `intertemporale_wahl`: already a compact single framework (budget line + preference + choice).
- `kapitalwert_fisher`: tightly coupled value-rule and separation logic; split risk currently outweighs navigation gain.
- `auf_abzinsen`: one method family; errors are procedural depth issues.
- `renten_endwert`: already focused on equivalent procedures and plan linkage.
- `izf_kapitalwertfunktion`: one dominant profile/threshold workflow.
- `izf_grenzen`: one cautionary frame around IZF limitations; small enough as a single concept.
- `unsicherheit`: currently broad in content but still one stable exam pipeline (dominance -> expectation -> risk adjustment); prioritize drill depth before splitting.
- `bezugsrecht`: narrow, exam-specific mechanism; no pedagogical gain from further split now.

## Recommendation
- Proceed with a **targeted concept granularity implementation pass** for exactly the three splits above.
- Do not split additional concepts in this pass.
- After implementation, run a short check-pass to confirm:
  - no new thin/cosmetic nodes,
  - drill coverage remains balanced across new IDs,
  - concept links preserve the current instructional flow.
