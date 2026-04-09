# Finanzwirtschaft Benchmark Reconstruction Pass 1

## Scope

Reconstruct `finanzwirtschaft/` toward `mikro1` benchmark density using the real course structure from:

- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V1_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V2_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V3_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V4_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V5_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V6_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V7_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V8_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V9_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V10_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V11_StudIP.pdf`
- `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/V12_StudIP.pdf`

## Benchmark Pages Inspected In Mikro1

Benchmark extraction was based on the authored `mikro1` concept system, especially:

- `mikro1/js/data/chapters.js`
- `mikro1/js/data/intuition.js`
- `mikro1/js/data/masteryData.js`
- `mikro1/js/data/stepProblems.js`

Representative benchmark page families used for comparison:

- `Konsummöglichkeitenmenge`
- `Budgetmenge & Budgetgerade`
- `Haushaltsoptimum`
- `Slutsky-Zerlegung`
- `Marktgleichgewicht`

These were used as the benchmark for:

- concept granularity
- theory chunking
- intuition / transfer path structure
- typical error framing
- formula-card richness
- variable explanation quality
- guided drill density
- exam-facing usefulness

## Audit Before Reconstruction

### Concept Count Before

- `16` concepts

### Confirmed Benchmark Gaps

1. Method families were still too compressed relative to the source structure.
   - `renten_endwert` bundled rent factors, bar/end value equivalence, annuity logic, and the full financial plan.
   - `unsicherheit` bundled uncertainty representation, expectation/variance logic, and risk-adjusted capital-value logic.
   - `wacc_leverage` bundled WACC logic and leverage logic.

2. Several pages were visibly thinner than `mikro1`.
   - `institutionen_marktunvollkommenheit`
   - `fremdkapitalkosten`
   - `wacc_leverage`
   - `modigliani_miller`

3. Method-selection pedagogy was weaker than the benchmark.
   - The source repeatedly separates timing logic, valuation logic, method choice, and economic interpretation.
   - The old module still forced the student to infer too much of that structure.

4. Formula support was uneven.
   - Some pages still had only one or two formulas where the source clearly supported richer anchor cards with variable meanings and use conditions.

5. Finance pages still leaned too much toward “formula block + short interpretation” in some late-capital-structure concepts.

## Source-Backed Segmentation Decision

The lecture corpus justified a richer finance map with academically real splits:

### Foundations / investment logic

- `finanz_denkweise`
- `liquiditaetsplanung`
- `kapitalmarkt_bewertung`
- `institutionen_marktunvollkommenheit`
- `intertemporale_wahl`
- `kapitalwert_fisher`
- `auf_abzinsen`
- `renten_endwert`
- `annuitaeten_finanzplan`
- `izf_kapitalwertfunktion`
- `izf_grenzen`

### Uncertainty / financing costs / capital structure

- `unsicherheit`
- `risikoadjustierter_kapitalwert`
- `bezugsrecht`
- `eigenkapitalkosten`
- `fremdkapitalkosten`
- `wacc`
- `wacc_leverage`
- `modigliani_miller`

## Exact Files Changed

Primary reconstruction files:

- `finanzwirtschaft/js/data/chapters.js`
- `finanzwirtschaft/js/data/intuition.js`
- `finanzwirtschaft/js/data/masteryData.js`
- `finanzwirtschaft/js/data/conceptLinks.js`
- `finanzwirtschaft/js/data/stepProblems.js`
- `finanzwirtschaft/js/data/contentManifest.js`
- `finanzwirtschaft/index.html`

Verification / audit artifacts:

- `.qa/finanzwirtschaft_benchmark_verify_pass1.mjs`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/finanz-home.png`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/finanz-institutionen-theory.png`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/finanz-annuitaet-theory.png`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/finanz-annuitaet-aufgaben.png`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/finanz-risiko-theory.png`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/finanz-fk-theory.png`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/finanz-wacc-theory.png`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/finanz-leverage-graph.png`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/finanz-probeklausuren.png`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/finanz-full-exam-1.png`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/mikro1-kmm-benchmark.png`
- `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/run.out`

## Concept Count After

- `19` concepts

Net change:

- `16 -> 19`

## Exact Pedagogical Upgrades Made

### 1. Real source-backed concept splits

Three compressed clusters were separated into academically real concepts:

- `renten_endwert` was narrowed to rent factors plus bar/end value equivalence.
- `annuitaeten_finanzplan` was added for annuity logic and the full financial plan.
- `unsicherheit` was narrowed to states, dominance, expectation, variance, and downside logic.
- `risikoadjustierter_kapitalwert` was added for risk surcharge and security-discount valuation logic.
- `wacc` was added as the clean aggregate-capital-cost concept.
- `wacc_leverage` was narrowed to the leverage effect.

### 2. Thin theory pages were thickened toward mikro1 density

The weakest old pages were rebuilt with stronger section chunking, decision logic, and explicit trap framing:

- `institutionen_marktunvollkommenheit`: `1 -> 4` theory sections, `1 -> 2` formulas, `1 -> 3` local tasks
- `kapitalwert_fisher`: `3 -> 5` theory sections, `2 -> 3` formulas, `3 -> 4` local tasks
- `fremdkapitalkosten`: `2 -> 4` theory sections, `1 -> 3` formulas, `1 -> 3` local tasks
- `modigliani_miller`: `3 -> 4` theory sections, `1 -> 2` formulas, `1 -> 3` local tasks

### 3. Finance-specific method-selection pedagogy was sharpened

The rebuilt pages now explain not just how to calculate, but when to use which method and how to interpret it:

- rent factor vs bar value vs end value
- annuity vs capital value
- expectation vs risk adjustment
- EK cost vs FK cost
- WACC vs leverage vs MM benchmark

### 4. Formula support became more finance-usable

The new pages no longer stop at bare formulas. They now add:

- variable meaning support
- decision-use rules
- economic interpretation
- trap framing for sign, timing, and method confusion

### 5. Guided drill density increased on the split concepts

New or expanded step-problem support was added for:

- `annuitaeten_finanzplan`
- `risikoadjustierter_kapitalwert`
- `wacc`
- stronger leverage step drills under `wacc_leverage`

### 6. Right-rail logic stayed source-useful

After reconstruction, the representative rebuilt pages render:

- formula quick references
- concept links
- finance-specific mistake extraction from the theory layer

### 7. Visible shell cleanup

- `finanzwirtschaft/index.html` now shows the correct reconstructed progress baseline:
  - `0 / 19` instead of the stale `0 / 16`

## Representative Browser Verification

Verification was performed in-browser with:

- `.qa/finanzwirtschaft_benchmark_verify_pass1.mjs`

Representative pages verified:

- benchmark reference: `mikro1 / kmm / theorie`
- `finanzwirtschaft / institutionen_marktunvollkommenheit / theorie`
- `finanzwirtschaft / kapitalwert_fisher / theorie`
- `finanzwirtschaft / annuitaeten_finanzplan / theorie`
- `finanzwirtschaft / annuitaeten_finanzplan / aufgaben`
- `finanzwirtschaft / risikoadjustierter_kapitalwert / theorie`
- `finanzwirtschaft / fremdkapitalkosten / theorie`
- `finanzwirtschaft / wacc / theorie`
- `finanzwirtschaft / wacc_leverage / graph`
- `finanzwirtschaft / modigliani_miller / theorie`
- `finanzwirtschaft / probeklausuren`
- `finanzwirtschaft / probeklausur_1`

### Browser Results

From `.qa/finanzwirtschaft-benchmark-reconstruction-pass-1/run.out`:

- `chapterCount: 19`
- `navCount: 19`
- representative page failures: `[]`
- mock-exam overview cards: `3`
- mock-exam detail questions: `12`
- representative graph verification:
  - `wacc_leverage` graph canvas present
  - `wacc_leverage` graph interpretation rows: `3`
- no raw MathJax / HTML leakage on the representative surfaces

### Visible Improvements Confirmed

- `Annuitätenmethode und vollständiger Finanzplan` now reads as a real concept page instead of being buried inside rent-factor treatment.
- `Risikoadjustierter Kapitalwert` now exists as its own decision layer instead of being hidden inside generic uncertainty prose.
- `Kosten des Fremdkapitals`, `WACC`, and `Modigliani-Miller` now have visibly denser theory and right-rail support than before.
- The task surface for `annuitaeten_finanzplan` is now dense and exam-shaped rather than thin.
- The leverage graph remains live and now sits inside a cleaner capital-structure concept split.

## Remaining Gaps

This pass materially closes the biggest benchmark gap, but a few honest differences remain:

1. `finanzwirtschaft` is now close to `mikro1`, but not yet uniformly as dense as the very strongest `mikro1` pages.
   - The late capital-structure cluster (`wacc`, `wacc_leverage`, `modigliani_miller`) is much better than before, but still slightly leaner than the richest mikro1 benchmark pages.

2. The source corpus is slide-heavy rather than exercise-sheet-heavy.
   - That means a portion of the drill layer remains `source-distilled` instead of direct-sheet import.

3. Graph coverage remains selective by subject logic.
   - This is not a defect in itself, but it does mean finance benchmark richness relies more on decision structure and task density than on a graph family as broad as `mikro1`.

4. The full-exam layer is live and solid, but it is still organized as a three-exam module layer, not fully re-mapped to every one of the new 19 concepts.

## Explicit Judgment

`finanzwirtschaft` is now close to `mikro1` benchmark level and no longer reads like a compressed formula module.

It is materially stronger in:

- valuation-method clarity
- sign and timing discipline
- method-selection pedagogy
- formula-variable support
- decision-first finance explanation
- exam-facing task seriousness

It still sits slightly below the very strongest `mikro1` pages in absolute density, mainly because the source bundle provides fewer dedicated exercise families than `mikro1` and because some capital-structure pages are still leaner than the benchmark’s densest concept pages.
