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
