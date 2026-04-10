# Statistik Benchmark Reconstruction Pass 1

## Scope

Reconstruct `statistik/` to `mikro1` benchmark standard while staying source-faithful to the real Statistik lecture, summary, tutorium, and R material in `source-materials/Statistik/`.

## Benchmark Pages Inspected In `mikro1`

The benchmark extraction used strong `mikro1` concept pages as product-pattern references rather than subject-content templates:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro1/js/data/chapters.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro1/js/data/intuition.js`

Representative benchmark surfaces used:

- `mikro1 / kmm / theorie`
- `mikro1 / hausopt / aufgaben`
- dense formula-card and warning-heavy concept pages in `mikro1/js/data/chapters.js`

Benchmark pattern extracted:

- concept pages are rich in chunking, not long compressed blocks
- formulas never stand alone without meaning support
- guided tasks teach a sequence, not just a final answer
- transfer tasks compress the same logic under exam pressure
- warning / trap density is explicit
- right-rail support is dense and study-usable

## Source Materials Inspected

Primary source inspection in this pass:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/source-materials/Statistik/Statistik/Ablaufplan_SoSe25_upd.pdf`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/source-materials/Statistik/Statistik/Zusammenfassungen/Deskriptive_Statistik_I____Zusammenfassung__DS1_1_DS1_6_.pdf`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/source-materials/Statistik/Statistik/Zusammenfassungen/Deskriptive_Statistik_II___Zusammenfassung__DS2_1_DS2_3_.pdf`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/source-materials/Statistik/Statistik/Zusammenfassungen/Induktive_Statistik_III___Hypothesentests.pdf`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/source-materials/Statistik/Statistik/Zusammenfassungen/Statistische_Modellierung_I___Lineare_Regression.pdf`
- plus the already curated provenance set documented in:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/statistik-provenance-curation-pass-1.md`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/statistik-source-grounded-audit-pass-1.md`

## Current Module Audit Before Changes

### Concept Count Before

- `statistik`: `14` concepts

### Strong Existing Pieces

- The current 14-concept map is already much closer to the real course structure than the old 12-concept version.
- Provenance curation is already in place for 13/14 concepts, with `nichtparametrisch` kept honestly unresolved.
- The module already has concept-specific R blocks in the core applied concepts.
- Core graph infrastructure and graph interpretation surfaces are already present.

### Exact Remaining Benchmark Gaps

1. Several central pages are still too thin relative to `mikro1`:
   - `deskriptiv`
   - `bivariat`
   - `testen`
   - `varianzanalyse`
   - `rlab`
2. Formula support is uneven:
   - some pages still have only 1–2 formula cards where the source supports a much richer decision/interpretation layer
3. Drill density is still uneven:
   - `bivariat`, `nichtparametrisch`, `varianzanalyse`, `regression_*`, `schaetzen_*` need stronger exam-style drill seriousness
4. The exam layer is still lighter than benchmark:
   - currently only two exam documents, with one of them mainly W/F transfer
5. `rlab` is still more orientation page than benchmark-grade companion layer
6. The main product gap is not architecture now; it is statistical pedagogy density:
   - method selection
   - significance vs relevance
   - p-value interpretation
   - confidence vs prediction logic
   - correlation vs causality
   - paired vs unpaired

## Reconstruction Direction For This Pass

This pass should stay source-faithful and avoid cosmetic concept inflation:

- keep the 14-concept map unless the source clearly forces another split
- strengthen thin core pages instead of splitting them for appearances
- use DS/IS/SM summaries and tutorium logic to densify:
  - interpretation
  - decision rules
  - formula meaning
  - trap framing
  - task seriousness
- strengthen the mock-exam layer so Statistik feels flagship-grade, not summary-grade

## Exact Files Changed

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/statistik/js/data/chapters.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/statistik/js/data/stepProblems.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/statistik/js/data/intuition.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/statistik/js/data/masteryData.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/statistik/js/data/conceptLinks.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/statistik/js/data/fullExams.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/statistik_benchmark_verify_pass1.mjs`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/statistik-benchmark-reconstruction-pass-1.md`

## Concept Count After

- `statistik`: `14 -> 14`

The concept map stayed at `14` because the source structure supported densifying the weak pages more clearly than inflating the navigation. The benchmark blocker was not an undersized map anymore; it was weak page richness and fake split ownership inside the current map.

## Exact Pedagogical Upgrades Made

### 1. Thin flagship pages were rebuilt to mikro1-style density

The biggest central-page upgrades landed in:

- `deskriptiv`
- `bivariat`
- `testen`
- `zwei_stichproben`
- `varianzanalyse`
- `rlab`

What changed:

- more theory chunking instead of compressed summary paragraphs
- stronger interpretation-first pedagogy
- more formula support with variable meanings
- more explicit trap framing
- more exam-usable reading cues

Representative examples:

- `deskriptiv` now separates Lage, Streuung, Ausreißer/Boxplot-Logik, and exam-ready Lesarten instead of treating them as one short overview block
- `bivariat` now separates Kovarianz, Pearson, Spearman, and the correlation-vs-causality trap instead of compressing them into one thin page
- `testen` now includes alpha/beta/power, one- vs two-sided decision logic, and method-choice framing rather than just test vocabulary
- `zwei_stichproben` now foregrounds the paired-vs-unpaired decision before formula use
- `varianzanalyse` now includes explicit between/within logic and effect-size support instead of a single F-ratio surface
- `rlab` now behaves like a real companion page with explicit statistical workflow guidance rather than a lightweight orientation screen

### 2. Fake split pages were replaced by real split content

Before this pass, the most serious benchmark failure was that two of the most important source-backed splits were only visual splits:

- `schaetzen_verfahren` and `schaetzen_eigenschaften_intervalle` were sharing the same page content
- `regression_schaetzung_inferenz` and `regression_diagnostik_prognose` were sharing the same page content

This pass replaced those aliases with genuinely different authored content:

- `schaetzen_verfahren` now focuses on MoM / KQ / ML as estimator families and their selection logic
- `schaetzen_eigenschaften_intervalle` now focuses on bias, variance, MSE, standard error, and KI interpretation
- `regression_schaetzung_inferenz` now focuses on coefficient meaning, standard errors, t-tests, and significance logic
- `regression_diagnostik_prognose` now focuses on residual reading, misspecification signals, prediction vs confidence, and forecast interpretation

This was the single highest-value reconstruction fix, because the old setup made Statistik look richer in navigation than it was in actual concept ownership.

### 3. Intuition and transfer framing were rebuilt across the module

`statistik/js/data/intuition.js` now provides structured intuition objects for all 14 concepts instead of thin sentence-level blurbs.

Each concept now has:

- core idea
- analogy / mental picture
- transfer bridge
- exam-facing recognition cue

This makes Statistik pages read much closer to the benchmark product family and helps the module teach interpretation rather than only display statistical definitions.

### 4. Mastery and right-rail support were rebuilt

`statistik/js/data/masteryData.js` was replaced with concept-specific mastery goals across the whole module.

`statistik/js/data/conceptLinks.js` was rebuilt into the denser `uses / usedBy` pattern, which gives the right rail real statistical study navigation instead of sparse or malformed linkage.

This closes one of the quieter benchmark gaps: Statistik previously had enough content to be serious, but the surrounding study support still felt too generic compared with `mikro1`.

### 5. Drill density and exam pressure were strengthened

`statistik/js/data/stepProblems.js` now includes dedicated step problems where the old version still relied on aliasing or weak reuse, especially for:

- `bivariat`
- `schaetzen_eigenschaften_intervalle`
- `regression_diagnostik_prognose`
- `varianzanalyse`
- `nichtparametrisch`

The step layer now does a better job on:

- interpretation-first solving
- method choice
- KI/test duality
- diagnostics vs inference
- paired vs unpaired decisions

### 6. The exam layer is stronger

`statistik/js/data/fullExams.js` now contains `3` mock exams instead of `2`, adding a third source-distilled exam focused on method logic and interpretation pressure.

That closes the visible “too light to feel flagship-grade” problem in the exam layer, even though the module still does not yet have a fully concept-remapped exam bank.

## Browser Verification

Verification used:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/statistik_benchmark_verify_pass1.mjs`
- live browser runtime at `http://127.0.0.1:4181`

Representative benchmark pages compared:

- `mikro1 / kmm / theorie`
- `mikro1 / hausopt / aufgaben`

Representative `statistik` pages verified:

- `deskriptiv / theorie`
- `bivariat / theorie`
- `bivariat / graph`
- `schaetzen_verfahren / theorie`
- `schaetzen_eigenschaften_intervalle / theorie`
- `testen / aufgaben`
- `regression_schaetzung_inferenz / theorie`
- `regression_diagnostik_prognose / theorie`
- `regression_diagnostik_prognose / r-anwendung`
- `varianzanalyse / theorie`
- `nichtparametrisch / theorie`
- `probeklausuren`

Verification screenshots written to:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/statistik-benchmark-reconstruction-pass-1/`

Key runtime results:

- `deskriptiv / theorie`: `5` section blocks, `4` formula supports, no raw render leak
- `bivariat / theorie`: `5` section blocks, `3` formula supports
- `bivariat / graph`: `graphCanvas = 1`, `giRows = 3`
- `schaetzen_verfahren / theorie`: `5` section blocks, `3` formula supports
- `schaetzen_eigenschaften_intervalle / theorie`: `5` section blocks, `3` formula supports
- `testen / aufgaben`: `18` visible problem cards
- `regression_schaetzung_inferenz / theorie`: `5` section blocks, `3` formula supports
- `regression_diagnostik_prognose / theorie`: `5` section blocks, `3` formula supports
- `regression_diagnostik_prognose / r-anwendung`: `codeEditors = 1`
- `varianzanalyse / theorie`: `4` section blocks, `3` formula supports
- `nichtparametrisch / theorie`: `4` section blocks, `2` formula supports
- exam overview: `3` exam cards
- browser failures: `[]`

The verification also confirmed that the split estimation pages and split regression pages are no longer duplicates in the live runtime.

## Exact Remaining Gaps And Why They Remain

`statistik` is materially closer to benchmark level after this pass, but a few honest gaps remain:

1. `nichtparametrisch` is still somewhat lighter than the strongest `mikro1` pages.
   - This is intentional provenance restraint.
   - The source support for a larger nonparametric expansion is weaker than for the core DS/IS/regression clusters.

2. `rlab` is much better, but it is still a companion/orientation page rather than a fully concept-remapped practice bank on its own.
   - The module now has concept-linked R support where it matters most.
   - A deeper fully distributed R redesign would be a later enhancement, not a reconstruction blocker.

3. `varianzanalyse` and `nichtparametrisch` are still slightly lighter than the absolute strongest `mikro1` pages.
   - They now meet a serious study-usable standard.
   - The remaining gap is page-depth polish, not summary-thinness.

4. The mock-exam layer is stronger, but it is still organized as `3` module-level exams rather than a fully concept-remapped exam bank.
   - This is now an exam-bank breadth issue, not a concept-page weakness.

## Explicit Judgment

`statistik` is now close to `mikro1` benchmark level.

It no longer feels like a thinner sibling in the core DS, inference, test, and regression clusters, and the most serious benchmark failure — fake split concepts with shared content — is closed. The remaining gap is narrower and honest: the late-method / supplementary cluster and the mock-exam breadth are still a little below the very strongest `mikro1` pages, but the module now reads as a flagship study portal rather than a compressed statistics summary.
