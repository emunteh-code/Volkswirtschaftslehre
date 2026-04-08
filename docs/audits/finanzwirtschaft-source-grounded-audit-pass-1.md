# Finanzwirtschaft Source-Grounded Audit — Pass 1

## Scope and rules applied

- Academic source of truth used: `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/`
- Portal audited against source: primarily `finanzwirtschaft/js/data/chapters.js`, with drill/depth checks in:
  - `finanzwirtschaft/js/data/stepProblems.js`
  - `finanzwirtschaft/js/data/fullExams.js`
  - `finanzwirtschaft/js/data/intuition.js`
  - provenance status check in `finanzwirtschaft/js/data/contentManifest.js`
- This is an audit-only pass: **no code changes**.

## Exact files successfully opened under source-materials (Finanzwirtschaft)

1. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V1_StudIP.pdf`
2. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V2_StudIP.pdf`
3. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V3_StudIP.pdf`
4. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V4_StudIP.pdf`
5. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V5_StudIP.pdf`
6. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V6_StudIP.pdf`
7. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V7_StudIP.pdf`
8. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V8_StudIP.pdf`
9. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V9_StudIP.pdf`
10. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V10_StudIP.pdf`
11. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V11_StudIP.pdf`
12. `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V12_StudIP.pdf`

## Source-grounded concept coverage findings

### Concepts already well grounded in source

- `finanz_denkweise`
  - Strongly grounded in V1 (course goals, traditional vs modern perspective, exam objective framing).
- `liquiditaetsplanung`
  - Strongly grounded in V2 (goldene Bilanzregel, Kapitalbedarfs-/Kapitaldeckungsplan, intra-period illiquidity).
- `kapitalmarkt_bewertung`, `institutionen_marktunvollkommenheit`
  - Grounded in V2/V3 (Kapitalmarktorientierung vs Institutionenorientierung; role of institutions under information asymmetry/market incompleteness).
- `intertemporale_wahl`
  - Strongly grounded in V3/V4 (intertemporal utility model, budget line, preferences, save/borrow logic).
- `kapitalwert_fisher`
  - Strongly grounded in V5 (NPV definition, interpretation, decision rules, Fisher separation and its limits under imperfect markets).
- `auf_abzinsen`, `renten_endwert`
  - Strongly grounded in V6/V7 (auf-/abzinsen incl. variable rates, bar/end value, rent factors, complete finance plan, NPV/FV equivalence).
- `izf_kapitalwertfunktion`, `izf_grenzen`
  - Strongly grounded in V8/V9 (IRR as NPV root, multiple roots/sign changes, reinvestment/refinancing premise, scaling issue, NPV-vs-IRR choice conflicts).
- `bezugsrecht`, `eigenkapitalkosten`, `fremdkapitalkosten`
  - Strongly grounded in V10/V11 (capital increase mechanics, ex-rights/rights value, DDM-based cost of equity, debt cost incl. discount/skonto logic and debt instruments).
- `wacc_leverage`, `modigliani_miller`
  - Strongly grounded in V12 (WACC intuition, leverage return/risk effect, MM irrelevance benchmark vs frictions).

## Concepts currently too coarse (granularity/depth)

- `kapitalmarkt_bewertung` is somewhat coarse relative to source:
  - Source distinguishes modern view, market pricing logic, investor objective framing, and benchmark-vs-reality discussion in more explicit blocks.
  - Portal coverage is directionally correct but compressed.
- `eigenkapitalkosten` is moderately coarse:
  - Source material spans both rights-issue micro-mechanics and valuation-based `r_EK` derivation.
  - Portal includes core formulas and logic, but high-frequency exam mechanics are concentrated under `bezugsrecht` and partially thin in computational depth.

Note: these are **depth/coherence** concerns more than mandatory concept-ID split requirements.

## Concepts missing from portal but present in source materials

No major mandatory high-level concept is completely missing from the current portal concept map.

Source topics that appear but are only weakly explicit in portal depth (not fully missing):
- explicit **Annuitätenmethode** computation flow (V7),
- explicit **vollständiger Finanzplan** multi-step reconstruction and interpretation (V7),
- explicit **Normalinvestition vs Normalfinanzierung** profile contrast in NPV/IRR relation (V9),
- broader **debt-instrument taxonomy** in V11 (covered only indirectly).

## Weakly grounded or underdeveloped concepts/drills

### 1) Underdeveloped exam-near drill depth

- `renten_endwert`
  - Source has strong factor mechanics + annuity equivalence (V6/V7), but portal drills are mostly conceptual and not yet exam-near computational in multi-step style.
- `izf_kapitalwertfunktion` / `izf_grenzen`
  - Source includes concrete profile comparisons and conflict cases (V8/V9); portal has good conceptual drills but limited numeric conflict drills with explicit project-profile interpretation.
- `bezugsrecht`
  - Source has explicit derivation path (`nBK`, `BR`, participation/non-participation wealth parity) in V10; portal currently emphasizes intuition and key formulas more than stepwise exam reconstruction.
- `fremdkapitalkosten`
  - Source shows skonto-derived financing cost path and debt-type context (V11); portal has core skonto idea but limited procedural drill variants.

### 2) Intra-portal consistency gaps affecting source-faithful practice quality

From audit of `stepProblems.js`:
- duplicate bundles are reused across mismatched concepts:
  - `kapitalmarkt_bewertung` and `institutionen_marktunvollkommenheit` share identical drill object (`fw_ki_1`) (acceptable but reduces concept-specific retrieval quality),
  - `eigenkapitalkosten` and `fremdkapitalkosten` currently share the same drill bundles (`fw_kk_1`, `fw_kk_2`), which weakens source-faithful separation of EK-vs-FK exam logic.
- `modigliani_miller` currently reuses a leverage-oriented drill from `wacc_leverage` (`fw_ks_1`) and lacks MM-specific benchmark-vs-frictions retrieval prompts.

These are not infrastructure failures, but they reduce source-near differentiation.

## Provenance status

- `finanzwirtschaft/js/data/contentManifest.js` keeps `FINANZWIRTSCHAFT_CONCEPT_PRIMARY_REFS` intentionally empty.
- No fake concept-to-file mapping is present (correct for current state).

## Exact recommendation for Finanzwirtschaft content enrichment pass 2

Focus only on additive, source-grounded, exam-near improvements:

1. **Renten/Annuitäten/Vollständiger Finanzplan**
   - Add exam-near multi-step drills for:
     - annuity factor usage (RBF/WGF relation),
     - NPV ↔ FV conversion consistency,
     - complete finance plan interpretation (timing + funding logic).
   - Source anchors: V6/V7.

2. **IZF vs Kapitalwert conflict drills**
   - Add numeric project-comparison drills that force:
     - conflict recognition (`r*` higher but `K0` lower),
     - explicit decision-by-objective (wealth maximization),
     - profile-based sensitivity interpretation.
   - Source anchors: V8/V9.

3. **Bezugsrecht computational path**
   - Add stepwise drills from base data (`n_alt`, `n_neu`, `aBK`, `EmK`) to:
     - `nBK`,
     - `BR`,
     - participation vs non-participation wealth check.
   - Source anchors: V10.

4. **Fremdkapitalkosten procedural drills**
   - Add skonto financing-cost drills with short/long payment options and interpretation as implicit supplier credit.
   - Source anchors: V11.

5. **MM-specific retrieval strengthening**
   - Add MM-focused drills separating:
     - benchmark assumptions,
     - irrelevance conclusion under perfect markets,
     - real-friction qualifiers.
   - Source anchors: V12.

6. **Concept-specific drill cleanup (content-level, not infra)**
   - Replace shared/misaligned duplicate drill bundles where they blur EK/FK and MM/WACC distinctions.
   - Keep concept map unchanged unless a tiny source-backed adjustment is clearly needed.

## Explicit pass judgment

- Current finanzwirtschaft portal is broadly source-grounded at concept level.
- Main remaining issue is **exam-near depth and concept-specific drill differentiation**, not major missing high-level content.
- A targeted enrichment pass 2 is warranted; broad redesign is not warranted.
