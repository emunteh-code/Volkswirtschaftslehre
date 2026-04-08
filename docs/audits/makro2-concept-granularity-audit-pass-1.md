# Makro2 Concept Granularity Audit Pass 1

## Scope
- Module audited: `makro2`
- Pass type: granularity audit only (no code changes)
- Benchmarked against visible granularity standard in `mikro1/js/data/chapters.js`
- Source grounding checked via prior source-grounded pass plus direct spot checks in:
  - `source-materials/Makroökonomik II/Makroökonomik II/Folien/slides_03.pdf`
  - `source-materials/Makroökonomik II/Makroökonomik II/Folien/slides_07.pdf`
  - `source-materials/Makroökonomik II/Makroökonomik II/Übungen/Uebungsblatt_6.pdf`

## Exact Files Inspected
1. `makro2/js/data/chapters.js`
2. `makro2/js/data/stepProblems.js`
3. `makro2/js/data/conceptLinks.js`
4. `makro2/js/data/intuition.js`
5. `makro2/js/data/masteryData.js`
6. `docs/audits/makro2-source-grounded-audit-pass-1.md`
7. `docs/audits/makro2-content-enrichment-pass-2.md`
8. `mikro1/js/data/chapters.js`
9. `source-materials/Makroökonomik II/Makroökonomik II/Folien/slides_03.pdf`
10. `source-materials/Makroökonomik II/Makroökonomik II/Folien/slides_07.pdf`
11. `source-materials/Makroökonomik II/Makroökonomik II/Übungen/Uebungsblatt_6.pdf`

## Current Concept Count
- `makro2`: **19** concepts (from `CHAPTERS` in `makro2/js/data/chapters.js`)
- `mikro1` benchmark: **33** concepts (from `CHAPTERS` count in `mikro1/js/data/chapters.js`)

Interpretation:
- `makro2` is coarser than `mikro1` by count, but count alone is not a defect.
- Open-economy and policy blocks are already structurally meaningful; splits are only justified where distinct exam units are still bundled.

## Concepts Identified as Too Broad

### 1) `schuldenquote` (too broad, high-value)
Why broad:
- It bundles at least two distinct exam-relevant units that are separable in source teaching/practice:
  1. debt-ratio arithmetic/stability logic (`r-g`, primary balance, snowball effects),
  2. financing mode and macro transmission (credit financing vs monetization, inflation channel in IS-LM-PC framing; cf. `Uebungsblatt_6.pdf`).
- These require different diagnosis and solution structure in exams.

### 2) `wk_regime` (borderline broad)
Why broad:
- Trilemma/regime architecture and active parity defense under devaluation expectations are related but operationally distinct exam tasks.
- Current content is coherent and already strengthened by enrichment drills; broadness is real but not mandatory to split now.

### 3) `taylor_regel` (borderline broad)
Why broad:
- Currently combines rule mechanics, target interpretation, and ELB-related real-rate room logic.
- This can be split academically, but present structure remains usable and is reinforced by added drills.

## Thinness Diagnosis (Depth vs Granularity)
- Main diagnosis is **mixed**:
  - `schuldenquote`: primarily a **granularity** issue (distinct units bundled).
  - `wk_regime`, `taylor_regel`: mostly **depth/distribution** issues at current structure; split is optional unless navigation friction appears.
- No evidence for cosmetic concept inflation.

## Recommended Splits (Conservative, Source-Grounded)

### Mandatory split recommendation
1. `schuldenquote` ->
   - `schuldenquote_dynamik`
   - `schuldenfinanzierung_monetarisierung`

Rationale:
- Directly reflects source exercise separation (debt dynamics and repayment mechanics vs monetization and inflation implications).
- Pedagogically useful for navigation and exam retrieval; not cosmetic.

### Optional split recommendations (defer in pass 1)
2. `wk_regime` ->
   - `wk_regime_trilemma`
   - `wk_regime_paritaetsverteidigung`

3. `taylor_regel` ->
   - `taylor_regel_mechanik`
   - `taylor_regel_elb_realzinsraum`

Rationale for optional status:
- Current map remains coherent and deployable.
- Existing enrichment already improved these zones without requiring immediate concept-map expansion.

## Concepts That Should Remain Unsplit (and Why)
- `zahlungsbilanz`, `wechselkurs`, `kaufkraftparitaet`, `zinsparitaet`: each is a distinct canonical open-economy unit.
- `offene_is`, `nettoexporte`, `marshall_lerner`, `mundell_fleming`: concept boundaries are pedagogically real and align with exam structure.
- `wk_krisen`: coherent crisis-focused continuation after regime foundations.
- `phillipskurve`, `zeitinkonsistenz`, `barro_gordon`: clean sequence from macro relation -> policy inconsistency -> formal bias model.
- `aggregierte_pf`, `solow_basis`, `tech_fortschritt`: already split along standard growth-theory boundaries.

## Pass-1 Granularity Judgment
- Status: **slightly under-split in one high-value area**.
- Mandatory action: split `schuldenquote` into dynamics vs financing/monetization.
- `wk_regime` and `taylor_regel` should remain unsplit in this pass unless later learner-navigation evidence justifies further granularity.

## Recommended Next Step
- Implement `makro2` concept granularity pass 1 with the single mandatory split:
  - `schuldenquote` -> `schuldenquote_dynamik`, `schuldenfinanzierung_monetarisierung`
- Keep all other concepts unchanged for this pass.
