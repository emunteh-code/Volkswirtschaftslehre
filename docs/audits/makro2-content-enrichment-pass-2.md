# Makro2 Content Enrichment Pass 2

## Scope
- Module: `makro2`
- Basis: `docs/audits/makro2-source-grounded-audit-pass-1.md`
- Source basis used in this pass:
  - `source-materials/Makroökonomik II/Makroökonomik II/Folien/slides_03.pdf`
  - `source-materials/Makroökonomik II/Makroökonomik II/Folien/slides_07.pdf`
  - `source-materials/Makroökonomik II/Makroökonomik II/Handout/Makro2_handout_V25.2.pdf`
  - `source-materials/Makroökonomik II/Makroökonomik II/Übungen/Uebungsblatt_6.pdf`
  - `source-materials/Makroökonomik II/Makroökonomik II/Tutorien/Tutorienblatt_5.pdf`
- Pass type: additive enrichment only. No broad infrastructure work, no concept-map refactor.

## Exact files changed
1. `makro2/js/data/chapters.js`
2. `makro2/js/data/stepProblems.js`
3. `docs/audits/makro2-content-enrichment-pass-2.md`

## Exact concepts/sections enriched
- `geldmengen`
- `taylor_regel`
- `schuldenquote`
- `wk_regime`

## What changed and why

### 1) Inflation-targeting vs money-growth decision drills
- **`geldmengen` in `chapters.js`**:
  - Added an exam-style mini-case that forces distinction between inflation-target anchor logic and noisy standalone money-growth signals when money demand shifts.
- **`geldmengen` in `stepProblems.js`**:
  - Added bundle `Inflationsziel vs. Geldmengen-Signal` (`problemId: m2_money_target_1`) with Decision -> Execution -> Validation structure.
- **Why**:
  - Directly addresses the audit gap from `slides_07.pdf` where inflation targeting and money-growth interpretations are contrasted.

### 2) Optimal-inflation / ELB policy-room mini-cases (`r = i - π`)
- **`taylor_regel` in `chapters.js`**:
  - Added ELB mini-case comparing policy room at `i=0` under different inflation environments using `r ≈ i-π`.
  - Added task distinguishing primary inflation-target anchor from auxiliary money indicators.
- **`taylor_regel` in `stepProblems.js`**:
  - Added bundle `ELB Realzins-Spielraum` (`problemId: m2_taylor_elb_1`).
- **Why**:
  - Grounded in the source treatment of ELB logic and inflation-rate trade-offs in `slides_07.pdf`.

### 3) Deeper debt-mechanics task clusters inside `schuldenquote`
- **`schuldenquote` in `chapters.js`**:
  - Added a timing/compounding task (same initial shock, different repayment date).
  - Added a financing-mode comparison task (credit financing vs monetization trade-off).
- **`schuldenquote` in `stepProblems.js`**:
  - Added bundle `Tilgungszeitpunkt und Zinseszins` (`problemId: m2_debt_timing_1`).
  - Added bundle `Monetarisierung vs. Kreditfinanzierung` (`problemId: m2_debt_monetize_1`).
- **Why**:
  - Directly grounded in debt arithmetic and monetization topics from `Uebungsblatt_6.pdf`.

### 4) Stronger fixed-regime defense stress drills
- **`wk_regime` in `chapters.js`**:
  - Added explicit stress-chain task: expected devaluation -> required spread (`i-i*`) -> domestic macro cost.
- **`wk_regime` in `stepProblems.js`**:
  - Added bundle `Paritätsverteidigung unter Abwertungserwartung` (`problemId: m2_fx_defense_1`).
- **Why**:
  - Mirrors source exam logic in regime-defense/trilemma tasks from open-economy chapter materials and tutorial line.

## Exact new learning objects added

### New `chapters.js` tasks
1. `geldmengen`: Inflation-targeting vs money-growth signal reliability mini-case.
2. `taylor_regel`: inflation-target anchor decision task.
3. `taylor_regel`: ELB real-rate policy-room comparison using `r=i-π`.
4. `schuldenquote`: repayment timing/compounding task.
5. `schuldenquote`: monetization vs credit-financing trade-off task.
6. `wk_regime`: parity-defense stress chain task.

### New `stepProblems.js` bundles
1. `geldmengen`: `m2_money_target_1`
2. `taylor_regel`: `m2_taylor_elb_1`
3. `schuldenquote`: `m2_debt_timing_1`
4. `schuldenquote`: `m2_debt_monetize_1`
5. `wk_regime`: `m2_fx_defense_1`

## Remaining gaps and why they remain
- No new standalone concept IDs for inflation targeting / optimal inflation / fiscal-rule architecture.
  - **Reason**: this pass intentionally kept current concept structure and applied additive enrichment only.
- No provenance anchor refactor from `coursework_text/*.txt` to direct Folien/Handout paths.
  - **Reason**: source-curation/manifest hygiene is a separate pass from content enrichment.
- No renderer/graph-system changes.
  - **Reason**: scope was pedagogical content and drill depth only; graph-oriented pedagogy was preserved and reinforced through task design.
