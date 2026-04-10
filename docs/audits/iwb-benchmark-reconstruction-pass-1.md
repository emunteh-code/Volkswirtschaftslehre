# Internationale Wirtschaftsbeziehungen Benchmark Reconstruction Pass 1

## Scope

Reconstruct `internationale-wirtschaftsbeziehungen/` toward `mikro1` benchmark density using the real GIWB course structure from:

- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB1.pdf`
- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB2.pdf`
- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB3.pdf`
- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB4.pdf`
- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB5.pdf`
- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB6.pdf`
- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB7.pdf`
- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB8.pdf`
- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB9.pdf`
- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB10.pdf`
- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB11.pdf`
- `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB12.pdf`

Supplementary literature is only used where it is explicitly named in the lecture files and where it sharpens context without inventing provenance.

## Benchmark Pages Inspected In Mikro1

The benchmark pattern was extracted from the authored `mikro1` concept system, especially:

- `mikro1/js/data/chapters.js`
- `mikro1/js/data/intuition.js`
- `mikro1/js/data/masteryData.js`
- `mikro1/js/data/stepProblems.js`

Representative benchmark page families used for comparison:

- `Konsummöglichkeitenmenge`
- `Budgetmenge & Budgetgerade`
- `Slutsky-Zerlegung`
- `Marktgleichgewicht`

These were used as the benchmark for:

- concept granularity
- theory chunking
- transfer / intuition structure
- error framing
- formula support richness
- guided drill density
- graph interpretation style where relevant
- exam-facing usefulness

## Audit Before Reconstruction

### Concept Count Before

- Current GIWB concept count: `12`

### Confirmed Benchmark Gaps

1. Several concept bundles are still too broad relative to the actual lecture structure.
   - `heckscher_ohlin` currently carries both trade-direction logic and Stolper-Samuelson distribution logic.
   - `krugman` currently carries both intraindustry/Krugman theory and gravity evidence.
   - `paritaeten` currently bundles UIP, the law of one price, absolute PPP, relative PPP, and real-exchange-rate interpretation.
   - `trilemma` currently bundles the impossible trinity and Balassa-Samuelson.

2. Page density is still under the mikro1 benchmark.
   - The current module has almost uniformly `3` theory sections and `2` embedded tasks per concept.
   - That produces solid pages, but not the same authored density and retrieval depth as stronger `mikro1` concepts.

3. Model-comparison clarity is weaker than it should be.
   - Ricardo vs. Heckscher-Ohlin vs. Krugman is present, but not yet surfaced with enough “what this model explains and what it does not” pressure.

4. Policy/application transfer is still too compressed.
   - Tariffs, quotas, sanctions, integration, Brexit, parity logic, and overshooting all support richer transfer framing than the current pages provide.

5. Open-economy macro concepts still need cleaner separation of horizons and mechanisms.
   - UIP is not the same object as PPP.
   - Long-run monetary logic is not the same as short-run overshooting.
   - Balassa-Samuelson is not simply another line under the trilemma.

## Source-Backed Reconstruction Direction

The source structure supports a richer concept map with academically real splits:

- `handelsfakten`
- `ricardo`
- `heckscher_ohlin`
- `verteilung_handel`
- `krugman`
- `gravitation`
- `tarifmodell`
- `quoten_sanktionen`
- `wto_integration`
- `wechselkurssysteme`
- `zinsparitaet`
- `kaufkraftparitaet`
- `monetaerer_ansatz`
- `overshooting`
- `trilemma`
- `balassa_samuelson`

This reconstruction direction is based on actual lecture programs:

- IntWB3 explicitly combines H-O with within-country distributional questions.
- IntWB4 explicitly separates Krugman from the gravity equation.
- IntWB9 explicitly covers UIP plus law of one price plus absolute/relative PPP.
- IntWB12 explicitly covers Trilemma plus Balassa-Samuelson.

## Planned Implementation

Primary implementation targets:

- `internationale-wirtschaftsbeziehungen/js/data/chapters.js`
- `internationale-wirtschaftsbeziehungen/js/data/intuition.js`
- `internationale-wirtschaftsbeziehungen/js/data/masteryData.js`
- `internationale-wirtschaftsbeziehungen/js/data/conceptLinks.js`
- `internationale-wirtschaftsbeziehungen/js/data/stepProblems.js`
- `internationale-wirtschaftsbeziehungen/js/data/contentManifest.js`
- `internationale-wirtschaftsbeziehungen/js/ui/graphPanel.js`
- `internationale-wirtschaftsbeziehungen/js/ui/graphs.js`
- `internationale-wirtschaftsbeziehungen/index.html`

Secondary target if needed after reconstruction:

- `internationale-wirtschaftsbeziehungen/js/data/fullExams.js`

## Original Risks Noted Before Implementation

- The source bundle is lecture-heavy and literature-backed, but not a dedicated exercise-sheet corpus, so some additional drill density will remain source-distilled.
- Not every source-backed concept needs its own graph; some GIWB strength should come from model-comparison and transfer logic rather than forced diagrams.
- The current module is already subject-correct, so the main reconstruction risk is removing compression without flattening the trade/policy/open-macro differences that make GIWB interesting.

## Reconstruction Executed

### Concept Count After

- GIWB concept count after reconstruction: `16`

Final concept map:

- `handelsfakten`
- `ricardo`
- `heckscher_ohlin`
- `verteilung_handel`
- `krugman`
- `gravitation`
- `tarifmodell`
- `quoten_sanktionen`
- `wto_integration`
- `wechselkurssysteme`
- `zinsparitaet`
- `kaufkraftparitaet`
- `monetaerer_ansatz`
- `overshooting`
- `trilemma`
- `balassa_samuelson`

### Exact Files Changed

Module files:

- `internationale-wirtschaftsbeziehungen/index.html`
- `internationale-wirtschaftsbeziehungen/js/data/conceptLinks.js`
- `internationale-wirtschaftsbeziehungen/js/data/contentManifest.js`
- `internationale-wirtschaftsbeziehungen/js/data/intuition.js`
- `internationale-wirtschaftsbeziehungen/js/data/masteryData.js`
- `internationale-wirtschaftsbeziehungen/js/data/stepProblems.js`
- `internationale-wirtschaftsbeziehungen/js/ui/graphPanel.js`
- `internationale-wirtschaftsbeziehungen/js/ui/graphs.js`

QA / audit support:

- `.qa/iwb_runtime_verify.mjs`
- `.qa/iwb_benchmark_verify_pass1.mjs`
- `.qa/iwb_quick_report_pass1.mjs`
- `docs/audits/iwb-benchmark-reconstruction-pass-1.md`

### Exact Pedagogical Upgrades Made

1. Real concept splitting, based on the lecture structure
   - The old broad bundles were replaced by academically real sub-blocks:
     - H-O trade direction vs. Stolper-Samuelson distribution logic
     - Krugman mechanism vs. gravity evidence
     - UIP / Zinsparität vs. PPP / Kaufkraftparität
     - Trilemma vs. Balassa-Samuelson

2. Stronger theory chunking and transfer pressure
   - Representative reconstructed theory pages now sit at `4` authored section blocks instead of the earlier thinner `3`-block pattern.
   - The new pages force model comparison and application transfer instead of leaving students with compressed summaries.

3. Richer intuition / exam-recognition layer
   - `intuition.js` was rebuilt so every new concept now has:
     - a core mechanism statement
     - a usable analogy
     - a transfer bridge
     - exam-recognition cues
   - This was especially important for:
     - `verteilung_handel`
     - `gravitation`
     - `zinsparitaet`
     - `kaufkraftparitaet`
     - `balassa_samuelson`

4. Denser right-rail / support structure
   - `masteryData.js` and `conceptLinks.js` were reconstructed to match the new 16-concept map.
   - The right rail now reflects the actual logical dependencies of GIWB rather than the older compressed chain.

5. Stronger drill seriousness
   - `stepProblems.js` was extended so each newly split concept has at least one authored step chain with real exam logic.
   - This especially closes the previous retrieval gap for:
     - Stolper-Samuelson / Verteilung
     - Gravitationsgleichung
     - PPP vs. UIP
     - Balassa-Samuelson

6. Cleaner graph inheritance where graphs are pedagogically justified
   - The old bundled parity graph was reassigned to the explicit `zinsparitaet` concept.
   - The graph layer now matches the new concept structure instead of referring to the retired `paritaeten` bundle.
   - `tarifmodell`, `zinsparitaet`, and `overshooting` all keep mikro1-style segmented graph interpretation rows.

7. Provenance consistency
   - `contentManifest.js` was updated so the new concept ids point to the actual GIWB source lectures:
     - `IntWB3` for distribution/Stolper-Samuelson
     - `IntWB4` for gravity
     - `IntWB9` for Zinsparität / Kaufkraftparität
     - `IntWB12` for Trilemma / Balassa-Samuelson

8. Shell consistency
   - The stale sidebar progress placeholder was updated from `0 / 12` to `0 / 16`, so the visible shell matches the reconstructed module.

## Verification

### Exact Representative GIWB Pages Verified In Browser

- `handelsfakten` / `theorie`
- `verteilung_handel` / `theorie`
- `gravitation` / `theorie`
- `tarifmodell` / `graph`
- `tarifmodell` / `aufgaben`
- `wto_integration` / `theorie`
- `zinsparitaet` / `graph`
- `kaufkraftparitaet` / `theorie`
- `overshooting` / `graph`
- `balassa_samuelson` / `theorie`
- Probeklausuren overview
- `probeklausur_1`

### Exact Browser Metrics Achieved

From `.qa/iwb_quick_report_pass1.mjs`:

- `chapterCount: 16`
- `navCount: 16`
- representative theory pages:
  - `handelsfakten`: `sectionBlocks = 4`, `rightFormulaCards = 2`, `rightMistakes = 1`
  - `verteilung_handel`: `sectionBlocks = 4`, `rightFormulaCards = 2`, `rightMistakes = 1`
  - `gravitation`: `sectionBlocks = 4`, `rightFormulaCards = 2`, `rightMistakes = 1`
  - `wto_integration`: `sectionBlocks = 4`, `rightFormulaCards = 2`, `rightMistakes = 1`
  - `kaufkraftparitaet`: `sectionBlocks = 4`, `rightFormulaCards = 3`, `rightMistakes = 1`
  - `balassa_samuelson`: `sectionBlocks = 4`, `rightFormulaCards = 2`, `rightMistakes = 1`
- representative graph pages:
  - `tarifmodell`: `graphCanvas = 1`, `giRows = 3`
  - `zinsparitaet`: `graphCanvas = 1`, `giRows = 3`
  - `overshooting`: `graphCanvas = 1`, `giRows = 3`
- representative task page:
  - `tarifmodell / aufgaben`: `problemCards = 18`, `masteryItems = 3`
- exam layer:
  - exam overview cards: `3`
  - `probeklausur_1` questions: `12`
- render quality:
  - no raw LaTeX leakage
  - no entity leakage
  - no markup leakage on the checked representative pages

### Exact Benchmark Screens And GIWB Screens Inspected

Benchmark reference screens:

- `.qa/iwb-benchmark-reconstruction-pass-1/mikro1-kmm-benchmark.png`
- `.qa/mikro1-shell-graph-current.png`

GIWB screens inspected:

- `.qa/iwb-benchmark-reconstruction-pass-1/iwb-handelsfakten-theory.png`
- `.qa/iwb-benchmark-reconstruction-pass-1/iwb-verteilung-theory.png`
- `.qa/iwb-benchmark-reconstruction-pass-1/iwb-gravitation-theory.png`
- `.qa/iwb-benchmark-reconstruction-pass-1/iwb-tarif-graph.png`
- `.qa/iwb-benchmark-reconstruction-pass-1/iwb-zinsparitaet-graph.png`
- `.qa/iwb-benchmark-reconstruction-pass-1/iwb-kkp-theory.png`
- `.qa/iwb-benchmark-reconstruction-pass-1/iwb-overshooting-graph.png`
- `.qa/iwb-benchmark-reconstruction-pass-1/iwb-balassa-theory.png`
- `.qa/iwb-benchmark-reconstruction-pass-1/iwb-probeklausuren.png`
- `.qa/iwb-benchmark-reconstruction-pass-1/iwb-full-exam-1.png`

Visual conclusion from those screens:

- GIWB now clearly sits in the same shell and card family as `mikro1`.
- The new theory pages are no longer visibly compressed one-screen summaries.
- The graph pages now teach the reading in the same segmented interpretation style instead of only showing a canvas.
- The right rail is now populated enough to feel like study support instead of thin decoration.

## Remaining Gaps And Why They Remain

1. Some drill density is still source-distilled rather than direct-source.
   - The GIWB source corpus is strongly lecture- and literature-based, not a dense exercise-sheet corpus like a pure methods course.
   - The reconstructed tasks are source-faithful, but some of the added drill breadth remains platform-authored and source-distilled.

2. Not every new concept has its own graph.
   - That is intentional rather than a defect.
   - `gravitation`, `verteilung_handel`, and `balassa_samuelson` are better taught here through model-comparison and interpretation density than through forced diagrams.

3. The mock-exam layer is still block-oriented rather than fully remapped to all 16 concepts.
   - The exam layer is usable and no longer thin, but it is still organised around 3 module-level Probeklausuren instead of concept-by-concept exam banks.

## Explicit Judgment

`internationale-wirtschaftsbeziehungen` is now close to `mikro1` benchmark level.

It no longer feels like a compressed reading guide. The module now reads as a serious GIWB theory portal with:

- academically real concept granularity
- denser concept-page chunking
- stronger model-comparison clarity
- stronger policy/application transfer
- usable graph interpretation where graphs matter
- intact exam utility

The remaining gap is no longer structural thinness. It is the smaller, honest remainder of source-distilled drill expansion and the still block-oriented mock-exam layer.
