# Makro2 Benchmark Reconstruction Pass 1

## Scope

Reconstruct `makro2/` toward `mikro1` benchmark density using the real Makro II course structure from:

- `source-materials/Makroökonomik II/Makroökonomik II/Folien/slides_01.pdf` to `slides_07.pdf`
- `source-materials/Makroökonomik II/Makroökonomik II/Handout/Makro2_handout_V25.2.pdf`
- `source-materials/Makroökonomik II/Makroökonomik II/Handout/Formeln.pdf`
- `source-materials/Makroökonomik II/Makroökonomik II/Übungen/Uebungsblatt_1.pdf` to `Uebungsblatt_10.pdf`
- `source-materials/Makroökonomik II/Makroökonomik II/Tutorien/Tutorienblatt_1.pdf` to `Tutorienblatt_6.pdf`

## Benchmark Pages Inspected In Mikro1

The benchmark pattern was taken from the authored `mikro1` concept system, especially the concept-page density and right-rail/task layering represented in:

- `mikro1/js/data/chapters.js`
- `mikro1/js/data/intuition.js`

Representative benchmark page families used for comparison:

- `Konsummöglichkeitenmenge`
- `Budgetmenge & Budgetgerade`
- `Haushaltsoptimum`
- `Slutsky-Zerlegung`
- `Marktgleichgewicht`

These were used as the benchmark for:

- concept granularity
- dense theory chunking
- transfer path structure
- error framing
- formula card usefulness
- graph interpretation richness
- guided task density
- exam-facing usefulness

## Current Makro2 Audit Before Reconstruction

### Concept Count Before

- Current `makro2` concept count: `20`
- Source-backed structure visible in the Makro-II source portal and course materials: materially finer than the current 20-concept map

### Strong Current Assets

- The current module is already authored and not generator-shaped.
- Core open-economy concepts are present and substantially better than an empty shell.
- Existing graph family is subject-correct for major concepts like `wechselkurs`, `zinsparitaet`, `marshall_lerner`, `mundell_fleming`, `wk_regime`, `taylor_regel`, `solow_basis`, and `phillipskurve`.
- `courseworkTasks.js` already contains several source-backed exercise families from Übungsblätter and Tutorien.

### Benchmark Gaps Confirmed

1. **Concept map is still too compressed relative to the real course structure.**
   - The current module collapses several source-backed concept families into single pages.
   - Biggest compression clusters:
     - `mundell_fleming` without separate `ZP-Kurve` and explicit `Wirtschaftspolitik im offenen Modell`
     - growth block without separate `Wachstumsfakten`, `Steady State`, and `Goldene Regel`
     - debt/fiscal block without separate `Budgetrestriktion` and `Ricardianische Äquivalenz`
     - modern monetary-policy block without separate `Inflation Targeting` and `Inflationskosten / Disinflation`

2. **Policy-transfer framing is still too bundled.**
   - The course material repeatedly separates:
     - mechanism
     - regime
     - policy conclusion
   - Current pages still ask the student to infer some of these transitions internally instead of seeing them as explicit concept steps.

3. **Graph pedagogy is strong in core concepts, but not yet mapped to all source-backed graph families.**
   - In particular:
     - ZP / balance-of-payments equilibrium
     - explicit policy comparison within Mundell-Fleming
     - Steady State / Golden Rule separation

4. **Formula support is uneven because several formulas live inside broader pages instead of their own concept pages.**
   - This especially matters for:
     - ZP condition
     - intertemporal budget restriction
     - Ricardian equivalence logic
     - Golden Rule condition
     - inflation-targeting / disinflation framing

5. **The source portal inside `source-materials/` cannot be copied wholesale.**
   - Its Makro-II `chapters.js` is useful as a segmentation blueprint.
   - But its `stepProblems.js`, `fullExams.js`, and `intuition.js` contain obviously wrong carry-over material from `mikro1`.
   - Therefore reconstruction must use the real PDFs plus the current authored Makro-II module, not blind file transplantation.

## Source-Backed Segmentation Decision

The reconstruction will expand the module along academically real splits supported by slides, handout, and exercise sheets:

### Open economy / regime block

- `zahlungsbilanz`
- `wechselkurs`
- `kaufkraftparitaet`
- `zinsparitaet`
- `offene_is`
- `nettoexporte`
- `marshall_lerner`
- `geldmengen`
- `mundell_fleming`
- `zp_kurve`
- `wirtschaftspolitik_offen`
- `wk_regime`
- `wk_krisen`
- `opt_waehrungsraum`

### Monetary policy / inflation block

- `phillipskurve`
- `zeitinkonsistenz`
- `barro_gordon`
- `taylor_regel`
- `inflation_targeting`
- `inflation_kosten`

### Growth / fiscal sustainability block

- `wachstum_fakten`
- `aggregierte_pf`
- `solow_basis`
- `steady_state`
- `goldene_sparquote`
- `tech_fortschritt`
- `budgetrestriktion`
- `schuldenquote_dynamik`
- `ricardianisch`
- `schuldenfinanzierung_monetarisierung`

## Planned Implementation

Primary implementation targets:

- `makro2/js/data/chapters.js`
- `makro2/js/data/intuition.js`
- `makro2/js/data/masteryData.js`
- `makro2/js/data/conceptLinks.js`
- `makro2/js/data/stepProblems.js`
- `makro2/js/data/contentManifest.js`
- `makro2/js/ui/graphPanel.js`
- `makro2/js/ui/graphs.js`

Secondary target if needed after audit:

- `makro2/js/data/fullExams.js`

## Exact Files Changed

- `makro2/js/data/chapters.js`
- `makro2/js/data/intuition.js`
- `makro2/js/data/masteryData.js`
- `makro2/js/data/conceptLinks.js`
- `makro2/js/data/stepProblems.js`
- `makro2/js/data/contentManifest.js`
- `makro2/js/ui/graphPanel.js`
- `makro2/js/ui/graphs.js`

## Concept Count After

- Concept count before: `20`
- Concept count after: `30`

New source-backed concept pages added in this pass:

- `zp_kurve`
- `wirtschaftspolitik_offen`
- `opt_waehrungsraum`
- `inflation_targeting`
- `inflation_kosten`
- `wachstum_fakten`
- `steady_state`
- `goldene_sparquote`
- `budgetrestriktion`
- `ricardianisch`

## Exact Pedagogical Upgrades Made

### 1. Real source-backed concept segmentation

The previous `makro2` map compressed several genuinely distinct Makro-II learning units into broader summary pages. This pass rebuilt the concept structure so that source-backed regime, policy, growth, and debt blocks now appear as separate exam-usable pages instead of as internal subsections.

Most important splits:

- `mundell_fleming` was no longer forced to carry ZP-logic and policy comparison on one page; those are now separated into:
  - `zp_kurve`
  - `wirtschaftspolitik_offen`
- the policy block was clarified by separating:
  - `wk_regime`
  - `wk_krisen`
  - `opt_waehrungsraum`
- the inflation/central-bank block was deepened by separating:
  - `taylor_regel`
  - `inflation_targeting`
  - `inflation_kosten`
- the growth block was rebuilt into:
  - `wachstum_fakten`
  - `aggregierte_pf`
  - `solow_basis`
  - `steady_state`
  - `goldene_sparquote`
  - `tech_fortschritt`
- the fiscal/debt block was rebuilt into:
  - `budgetrestriktion`
  - `schuldenquote_dynamik`
  - `ricardianisch`
  - `schuldenfinanzierung_monetarisierung`

### 2. Theory pages were thickened into mikro1-style concept pages

For the newly split concepts, the pass added authored `CONTENT` blocks with:

- lead idea and exam framing
- formal anchor / notation cues
- regime or mechanism interpretation
- explicit transfer logic
- trap / sign warnings
- exam-facing conclusion language

This is especially visible in:

- `wirtschaftspolitik_offen`
- `inflation_targeting`
- `budgetrestriktion`
- `ricardianisch`

### 3. Intuition and transfer structure now matches the richer benchmark family

`INTUITION` coverage was extended to every new concept. The added intuition blocks make explicit:

- what signal in the task identifies the concept
- what comparison or mechanism the student should activate
- which common confusion the student should avoid
- how to move from graph/formula to policy conclusion

### 4. Drill density was extended to the new concept map

The new concept pages are not empty shells. `STEP_PROBLEMS` and `MASTERY` were extended so the new concepts have:

- guided step chains
- concept-native mastery items
- transfer prompts that reflect regime comparison, growth interpretation, and debt dynamics

### 5. Graph family was extended to missing Makro-II graph types

The graph system was expanded with dedicated graph surfaces for:

- `zp_kurve`
- `steady_state`
- `goldene_sparquote`

This closes an important benchmark gap because the course materials use those graphical families as genuine learning units, not as optional side illustrations.

### 6. Provenance was kept honest

The source portal inside `source-materials/` was used only where academically safe:

- `chapters.js` served as a segmentation blueprint
- the contaminated source-portal `stepProblems.js`, `intuition.js`, and `fullExams.js` were not copied blindly because they contain obvious carry-over content from other modules

That means this reconstruction stays source-faithful without importing false provenance.

## Verification

### Source / structure verification

The following checks passed after reconstruction:

- all `30` chapter ids exist in:
  - `CONTENT`
  - `INTUITION`
  - `MASTERY`
  - `CONCEPT_LINKS`
  - `STEP_PROBLEMS`
  - `MAKRO2_CONCEPT_PRIMARY_REFS`
- `fullExams.js` already contains `3` authored mock exams and remained structurally usable after the concept expansion

### Syntax checks run

- `node --check makro2/js/data/chapters.js`
- `node --check makro2/js/data/intuition.js`
- `node --check makro2/js/data/masteryData.js`
- `node --check makro2/js/data/conceptLinks.js`
- `node --check makro2/js/data/stepProblems.js`
- `node --check makro2/js/data/contentManifest.js`
- `node --check makro2/js/ui/graphPanel.js`
- `node --check makro2/js/ui/graphs.js`

### Representative browser verification

Representative `mikro1` benchmark reference:

- `Konsummöglichkeitenmenge`

Representative `makro2` pages verified in browser:

- `ZP-Kurve & Zahlungsbilanzgleichgewicht`
- `Wirtschaftspolitik im Mundell-Fleming-Modell`
- `Inflation Targeting & EZB-Strategie`
- `Steady State & Konvergenz`
- `Goldene Sparquote & Konsummaximum`
- `Staatliche Budgetrestriktion & Primärsaldo`
- `Ricardianische Äquivalenz`

Captured screenshots:

- `.qa/makro2-benchmark-reconstruction-pass-1/mikro1-benchmark-kmm.png`
- `.qa/makro2-benchmark-reconstruction-pass-1/makro2-zp-graph.png`
- `.qa/makro2-benchmark-reconstruction-pass-1/makro2-wipo-theory.png`
- `.qa/makro2-benchmark-reconstruction-pass-1/makro2-it-theory.png`
- `.qa/makro2-benchmark-reconstruction-pass-1/makro2-steady-graph.png`
- `.qa/makro2-benchmark-reconstruction-pass-1/makro2-golden-graph.png`
- `.qa/makro2-benchmark-reconstruction-pass-1/makro2-budget-tasks.png`
- `.qa/makro2-benchmark-reconstruction-pass-1/makro2-ricardo-theory.png`
- `.qa/makro2-benchmark-reconstruction-pass-1/makro2-it-formeln.png`
- `.qa/makro2-benchmark-reconstruction-pass-1/makro2-budget-aufgaben.png`

Visible improvements confirmed in the runtime:

- new graph concepts render with segmented `mikro1`-style interpretation rows
- newly split theory pages now show real section-block density instead of summary-page compression
- newly added formula pages expose concept-specific formula cards instead of burying formulas inside broader pages
- the debt/fiscal block now has a visible Aufgaben layer rather than one bundled debt page
- the Probeklausur layer remains present with `3` distinct mock exams covering open-economy, monetary-policy, and growth/debt blocks

## Exact Remaining Gaps

This pass materially closes the largest structural and pedagogical gaps, but `makro2` is still not perfect parity with the absolute strongest `mikro1` pages.

Remaining honest limitations:

1. **Some newly split theory pages are still lighter than the very strongest mikro1 concept pages.**
   - The best `mikro1` pages reach deeper with more subsection layering and more mature right-rail density.
   - Several new `makro2` concepts now have real authored theory, but some still sit closer to solid `3`-section density than to the most saturated `5`- or `6`-section benchmark pages.

2. **Not every new concept has its own dedicated graph.**
   - This is academically acceptable where the source structure is more verbal or policy-comparative than graphical.
   - Still, some pages such as `opt_waehrungsraum` or `inflation_kosten` rely more on theory/transfer structure than on their own graph family.

3. **The full-exam layer is strong enough to stay live, but not yet remapped one-to-one to the expanded 30-concept lattice.**
   - The exams cover the three major course blocks well.
   - They are still block-oriented rather than concept-by-concept exhaustive for every newly split page.

## Explicit Judgment

After this pass, `makro2` is **close to benchmark level** and no longer feels like a summary module. It now has a materially richer, source-backed concept map, stronger graph pedagogy, denser transfer support, and a more serious exam-facing structure.

It is not honest to call it perfect parity with the single strongest `mikro1` pages yet. The main remaining gap is no longer shell quality or empty structure, but the last stretch of depth: some newly split concepts could still gain one more layer of subsection density, right-rail sharpening, and exam-specific saturation.

## Original Risks Noted Before Implementation

- The course source bundle clearly supports a richer concept map, but not every additional concept has equally dense direct exercise backing.
- Growth and policy-summary topics rely more heavily on handout/slides than on separate tutorium sheets.
- Some new concepts may initially need lighter graph coverage than the strongest existing graph pages; if so, that will be documented honestly.
