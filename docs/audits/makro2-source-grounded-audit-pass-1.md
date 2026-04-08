# Makro2 Source-Grounded Audit Pass 1

## Scope and method
- Module audited: `makro2`
- Academic source of truth: `source-materials/Makroökonomik II/Makroökonomik II`
- Focus: source-grounded concept coverage, granularity consistency, content-depth gaps, and target areas for enrichment pass 2.
- This pass is audit-only. No portal code/content rewrites were made.

## Exact source files successfully opened
1. `source-materials/Makroökonomik II/Makroökonomik II/Folien/slides_01.pdf`
2. `source-materials/Makroökonomik II/Makroökonomik II/Folien/slides_03.pdf`
3. `source-materials/Makroökonomik II/Makroökonomik II/Folien/slides_05.pdf`
4. `source-materials/Makroökonomik II/Makroökonomik II/Folien/slides_07.pdf`
5. `source-materials/Makroökonomik II/Makroökonomik II/Handout/Makro2_handout_V25.2.pdf` (partial read)
6. `source-materials/Makroökonomik II/Makroökonomik II/Handout/Formeln.pdf`
7. `source-materials/Makroökonomik II/Makroökonomik II/Übungen/Uebungsblatt_3.pdf`
8. `source-materials/Makroökonomik II/Makroökonomik II/Übungen/Uebungsblatt_5.pdf`
9. `source-materials/Makroökonomik II/Makroökonomik II/Übungen/Uebungsblatt_6.pdf`
10. `source-materials/Makroökonomik II/Makroökonomik II/Übungen/Uebungsblatt_10.pdf`
11. `source-materials/Makroökonomik II/Makroökonomik II/Tutorien/Tutorienblatt_4.pdf`
12. `source-materials/Makroökonomik II/Makroökonomik II/Tutorien/Tutorienblatt_5.pdf`
13. `source-materials/Makroökonomik II/Makroökonomik II/Tutorien/Tutorienblatt_6.pdf`

## Portal files audited
- `makro2/js/data/chapters.js`
- `makro2/js/data/stepProblems.js`
- `makro2/js/data/courseworkTasks.js`
- `makro2/js/data/intuition.js`
- `makro2/js/data/conceptLinks.js`
- `makro2/js/data/contentManifest.js`

## Findings

### Concepts already well grounded in source
- **Open-economy core is strong and source-consistent**:
  - `zahlungsbilanz`, `wechselkurs`, `kaufkraftparitaet`, `zinsparitaet`
  - `offene_is`, `nettoexporte`, `marshall_lerner`, `mundell_fleming`
  - `wk_regime`, `wk_krisen`
  - Grounding is clear in `slides_01.pdf`, `slides_03.pdf`, `Makro2_handout_V25.2.pdf`, and linked Übungs/Tutorien sheets.
- **Monetary credibility block is present and exam-relevant**:
  - `phillipskurve`, `zeitinkonsistenz`, `barro_gordon`, `taylor_regel`
  - Strong backing from `slides_05.pdf`, `Uebungsblatt_5.pdf`, `Tutorienblatt_4.pdf`, `Tutorienblatt_5.pdf`.
- **Growth/debt backbone exists and is mostly aligned**:
  - `aggregierte_pf`, `solow_basis`, `tech_fortschritt`, `schuldenquote`
  - Supported by `Uebungsblatt_10.pdf`, `Tutorienblatt_6.pdf`, `Uebungsblatt_6.pdf`.

### Concepts currently too coarse
- `schuldenquote` is broad: it currently bundles debt dynamics, budget restriction mechanics, and monetization/inflation channel in one concept. Source treatment separates these as distinct exam units (debt arithmetic vs financing mode vs macro effects).
- `wk_regime` is broad: trilemma, fixed-peg defense, and institutional regime comparison are all high-value units in source materials and often asked separately.
- `taylor_regel` is somewhat broad relative to source exercise style: rule mechanics, Taylor principle, and unemployment-gap cases are separable retrieval units.

### Concepts missing from portal but present in source materials
- **No explicit standalone unit for inflation targeting / money-growth targeting comparison** (prominent in `slides_07.pdf`).
- **No explicit standalone unit for optimal inflation and ELB trade-offs** (explicit in `slides_07.pdf`: inflation costs/benefits, real-rate room at zero lower bound).
- **No explicit standalone concept for fiscal-rule architecture/political-economy debt governance** (content appears in source chapter sequence around policy constraints/rules, but portal representation is currently folded into broader debt and credibility topics).

### Concepts/drills weakly grounded or underdeveloped
- **Coverage asymmetry in drills**:
  - Open-economy mechanics are dense and well drilled.
  - Money-policy design topics from `slides_07.pdf` (inflation targeting vs money targets, optimal inflation logic, ELB policy-room interpretation) are underrepresented as dedicated drill flows.
- **Legacy-concept residue risk in data layer**:
  - `courseworkTasks.js` and `intuition.js` still contain mappings/entries for concepts not in current `CHAPTERS` (e.g., older concept IDs), while active chapters are cleanly defined. This does not break deployability but indicates pedagogical attention is concentrated on some blocks more than others.
- **Provenance anchoring is not fully source-file-native**:
  - `contentManifest.js` relies heavily on `coursework_text/*.txt` anchors rather than direct Folien/Handout/Übung/Tutorium file anchors for many concepts, which weakens audit transparency even where content itself is source-faithful.

## Granularity consistency assessment
- `makro2` has strong visible granularity in open-economy and M-F sections and is generally at a serious level.
- Remaining granularity gap is concentrated in policy-design and debt-governance topics, where source materials separate exam-relevant units more clearly than current portal concept partitioning.

## Recommendation for makro2 content enrichment pass 2
Prioritize additive, exam-oriented enrichment in this order:
1. **Inflation-targeting vs money-growth framework drills**  
   - Add explicit decision tasks: when to interpret policy through target inflation, when money-growth signals are informative, and why simple money-targeting can fail.
2. **Optimal inflation and ELB policy-room mini-cases**  
   - Build short applied cases around `r = i - \pi` under zero lower bound and expected-inflation scenarios (clearly grounded in `slides_07.pdf` content line).
3. **Debt mechanics split inside existing `schuldenquote` content (additive, no concept split required)**  
   - Add separate task clusters for: (a) debt-ratio arithmetic `(r-g, ps)`, (b) repayment timing/compounding, (c) monetization channel and inflation consequences.
4. **Regime-defense stress drills under `wk_regime` / `wk_krisen`**  
   - Strengthen expected-devaluation probability -> required interest spread -> domestic cost chain (already source-backed in tutorial/worksheet line).

## Remaining gaps and why they remain
- No concept-map refactor in this pass.
  - Reason: scope is audit-only; implementing splits or new concept IDs belongs to an enrichment/granularity implementation pass.
- No provenance-path rewrite in this pass.
  - Reason: source-curation adjustments (moving from `coursework_text` anchors to direct source-file anchors) are content-manifest curation work, not audit execution.
