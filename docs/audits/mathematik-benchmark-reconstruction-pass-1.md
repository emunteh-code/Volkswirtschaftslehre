# Mathematik Benchmark Reconstruction Pass 1

## Scope

- Target module: `mathematik/`
- Benchmark module: `mikro1/`
- Source corpus used: `source-materials/Mathematik/Mathematik/`
- Goal of this pass: move `mathematik` from a visibly compressed support module to a source-faithful, exam-useful learning portal that approaches `mikro1` in page density, drill seriousness, formula support, graph pedagogy, and R guidance.

## Exact Benchmark Pages Inspected In `mikro1`

The following `mikro1` pages were used as the concrete benchmark surfaces:

- `budget`
- `hausopt`
- `hicks`
- `kosten`
- `markt`
- `monopol`

These pages were used to extract the benchmark for:

- concept-page chunking
- theory-card density
- warning/trap framing
- formula-card richness
- right-rail usefulness
- graph interpretation structure
- guided-task seriousness
- exam-facing clarity

## Exact Source Structure Used For Reconstruction

Confirmed lecture PDFs:

- `01Mathe_E1_AlgebraUndMengenlehre.pdf`
- `02Mathe_E2_FunktionenUndGleichungen.pdf`
- `03Mathe_E3_SummenUndLogik.pdf`
- `04Mathe_LA1_LineareAlgebra1.pdf`
- `05Mathe_LA2_LineareAlgebra2.pdf`
- `06Mathe_AN1_Differentialrechnung.pdf`
- `07Mathe_OP1_UnivOptimierung.pdf`
- `08Mathe_AN2_FunktionenMultivariat.pdf`
- `09Mathe_OP2_MultivOptimierung.pdf`
- `10Mathe_AN3_Integralrechnung.pdf`

Confirmed Kleinübung families:

- E1 Algebra / Mengenlehre
- E2 Funktionen / Gleichungen
- E3 Summen / Logik
- LA I / LA II
- AN I / AN II / AN III
- OP I / OP II

Confirmed R companion presence:

- course-side R material exists for every major lecture block above and was used to justify distributed `R-Anwendung` support instead of a detached coding page.

## Concept Count Before / After

- Concept count before this reconstruction: `8`
- Concept count after this reconstruction: `14`

## Exact Files Changed

- `mathematik/index.html`
- `mathematik/css/styles.css`
- `mathematik/js/main.js`
- `mathematik/js/data/courseConfig.js`
- `mathematik/js/data/curriculum.js`
- `mathematik/js/data/chapters.js`
- `mathematik/js/data/intuition.js`
- `mathematik/js/data/masteryData.js`
- `mathematik/js/data/conceptLinks.js`
- `mathematik/js/data/stepProblems.js`
- `mathematik/js/data/fullExams.js`
- `mathematik/js/ui/renderer.js`
- `mathematik/js/ui/graphPanel.js`
- `mathematik/js/ui/graphs.js`

## Exact Pedagogical Upgrades Made

### 1. Rebuilt the concept map from the real course blocks

The old live module exposed only 8 compressed pages. This pass rebuilt `mathematik` around 14 concept pages that follow the actual lecture spine:

- Algebra, Ungleichungen & Mengen
- Funktionen, Gleichungen & Graphen
- Potenz-, Exponential-, Logarithmus- & inverse Funktionen
- Summen, Logik & Beweise
- Lineare Algebra I: Matrizen, Vektoren & LGS
- Lineare Algebra II: Rang, Determinante, Inverse & Eigenwerte
- Analysis I: Ableitung, Tangente & Regeln
- Analysis I: Monotonie, Grenzwerte, Approximation & Newton
- Univariate Optimierung
- Analysis II: Funktionen mehrerer Variablen
- Optimierung II: Bivariate & multivariate Optimierung
- Lagrange-Methode & Nebenbedingungen
- Integralrechnung, Flächen & numerische Verfahren
- R-Begleitpraxis

This is still not as fine-grained as the total Kleinübung lattice, but it is materially richer and source-faithful compared with the old compressed version.

### 2. Rebuilt concept pages around benchmark-level chunking

Each concept now carries a denser `mikro1`-like structure via the new `curriculum.js` backbone:

- motivation / lead
- recognition cards
- 3 section blocks with real teaching prose
- explicit warning boxes
- formula cards with meaning support
- guided tasks
- intuition / exam pattern framing
- mastery targets
- right-rail concept links
- step drills

Representative visible gains:

- `funktionen_gleichungen` now renders as a full theory page with 5 section blocks, 4 concept cards, 3 warning boxes, 4 right-rail formulas, and 5 concept links.
- `lagrange` now renders as a dense benchmark-style concept page with 5 theory blocks, 3 formula cards, 20 task/drill cards on the Aufgaben tab, a graph tab, and a fully populated right rail.
- `lineare_algebra_struktur` no longer reads like a short summary; it now presents structure-diagnostic framing, formulas, warnings, and links with a visibly benchmark-style page rhythm.

### 3. Used the Kleinübungen to increase drill seriousness

The reconstruction no longer treats tasks as a thin appendix. The module now combines:

- authored guided tasks per concept
- authored step-problem seeds per concept
- shared minimum drill expansion through the portal backbone

That gives `mathematik` visibly denser Aufgaben tabs, with stronger recognition/trap structure than before.

### 4. Replaced the wrong graph family with mathematics-native graphs

Before this pass, `mathematik` still had leftover microeconomics graph logic. That benchmark-breaking mismatch is now removed.

New graph-bearing concepts:

- `funktionen_gleichungen`
- `analysis_ableitung_grundlagen`
- `univariate_optimierung`
- `analysis_multivariat`
- `lagrange`
- `integralrechnung`

New graph pedagogy now includes:

- concept-specific controls
- math-native legends
- mikro1-style segmented interpretation rows
- readable direct labels
- no raw TeX-like labels painted onto the canvas

### 5. Upgraded graph interpretation styling to the mikro1 family

The old `mathematik` graph info strip was visibly weaker. This pass imported the stronger `mikro1` graph interpretation treatment:

- interpretation kicker
- magenta equation strip
- segmented rows instead of a paragraph blob
- quieter card treatment
- graph-to-text linkage closer to `mikro1`

### 6. Distributed R as concept-linked practice instead of a side gimmick

`mathematik` now uses the shared R practice infrastructure locally:

- dedicated `R-Anwendung` tab appears only where relevant
- R guidance is concept-linked
- the tab now tells the student what to do first, what to edit, what not to edit, what the output means, and what the mini-task is
- the tab is styled correctly as a benchmark practice surface rather than raw text

Current count:

- concepts with R blocks: `8`

### 7. Strengthened the mock-exam layer

The full-exam layer was broadened from 2 lighter simulations to 3 simulations:

- `mock_exam_1`
- `mock_exam_2`
- `mock_exam_3`

The third simulation now covers multivariate analysis, unconstrained multivariate optimization, Lagrange, and integral families so the exam surface reflects more of the rebuilt concept map.

### 8. Aligned startup behavior with the benchmark family

`mathematik` no longer boots into the last viewed concept on entry. It now opens on the internal module overview first, matching the stronger benchmark behavior of `mikro1`.

## Browser Verification Performed

Representative pages checked in-browser:

- `mikro1/markt` theory and graph as benchmark references
- `mathematik/funktionen_gleichungen` theory
- `mathematik/lagrange` theory
- `mathematik/lagrange` formeln
- `mathematik/lagrange` aufgaben
- `mathematik/lagrange` graph
- `mathematik/integralrechnung` graph
- `mathematik/integralrechnung` R-Anwendung
- `mathematik/lineare_algebra_struktur` theory
- `mathematik` Probeklausur-Übersicht
- `mathematik` home overview

Screenshot set produced:

- `.qa/mathematik-benchmark-reconstruction-pass-1/mikro1_markt_theorie.png`
- `.qa/mathematik-benchmark-reconstruction-pass-1/mikro1_markt_graph.png`
- `.qa/mathematik-benchmark-reconstruction-pass-1/mathematik_home.png`
- `.qa/mathematik-benchmark-reconstruction-pass-1/mathematik_funktionen_theorie.png`
- `.qa/mathematik-benchmark-reconstruction-pass-1/mathematik_lagrange_theorie.png`
- `.qa/mathematik-benchmark-reconstruction-pass-1/mathematik_lagrange_formeln.png`
- `.qa/mathematik-benchmark-reconstruction-pass-1/mathematik_lagrange_aufgaben.png`
- `.qa/mathematik-benchmark-reconstruction-pass-1/mathematik_lagrange_graph.png`
- `.qa/mathematik-benchmark-reconstruction-pass-1/mathematik_integral_graph.png`
- `.qa/mathematik-benchmark-reconstruction-pass-1/mathematik_integral_r.png`
- `.qa/mathematik-benchmark-reconstruction-pass-1/mathematik_la2_theorie.png`

Representative verified outcomes:

- `mathematik` home now opens on the internal overview and shows `14` concept cards with benchmark-style overview actions.
- `lagrange` graph tab now renders a proper segmented interpretation card with 3 interpretation rows.
- canvas labels in the math graphs no longer expose raw TeX-like `$...$` strings.
- the `R-Anwendung` surface in `integralrechnung` now renders with the shared card-based practice styling instead of plain unstructured text.
- the Probeklausur overview now visibly lists 3 simulation exams and reflects the rebuilt module coverage more broadly than before.

## Checks Run

- `node --check mathematik/js/data/curriculum.js`
- `node --check mathematik/js/data/chapters.js`
- `node --check mathematik/js/data/intuition.js`
- `node --check mathematik/js/data/masteryData.js`
- `node --check mathematik/js/data/conceptLinks.js`
- `node --check mathematik/js/data/stepProblems.js`
- `node --check mathematik/js/data/fullExams.js`
- `node --check mathematik/js/ui/renderer.js`
- `node --check mathematik/js/ui/graphPanel.js`
- `node --check mathematik/js/ui/graphs.js`
- `node --check mathematik/js/main.js`

## Remaining Gaps And Why They Remain

`mathematik` is now materially closer to `mikro1`, but it still does not fully equal `mikro1` on every axis.

### Remaining gap 1: concept granularity is improved, but still coarser than the full source lattice

Why:

- The lecture/Kleinübung corpus supports even finer splitting than the current 14-concept reconstruction, especially within:
  - Algebra / Mengenlehre
  - LA II
  - Analysis II
  - Integralrechnung

Why it was not fully closed here:

- This pass prioritized a bounded reconstruction that kept the module deployable while replacing the old 8-page compression with a much richer 14-page structure.
- A further split is academically justified, but would be a second major concept-map pass rather than a safe bounded reconstruction step.

### Remaining gap 2: not every drill card is bespoke

Why:

- The Aufgaben layer is now visibly much denser, but some of the deeper drill stack still relies on the shared step-problem factory once the authored concept tasks are exhausted.

Why it matters:

- `mikro1` still has a higher share of fully bespoke concept-native practice in its strongest areas.

### Remaining gap 3: formula tabs are strong, but not uniformly maximal

Why:

- Most reconstructed math concepts now have 3–4 formula cards with variable support, which is a major improvement over the old sparse module.
- Some flagship concepts still sit slightly below the most over-performing `mikro1` pages, where formula and right-rail density can run even higher.

## Explicit Judgment

`mathematik` is now **close to benchmark level** and no longer reads like a thin support module.

It now belongs visibly to the same product family and pedagogical tier as `mikro1` much more clearly than before: denser concept pages, stronger formulas, stronger tasks, math-native graphs, styled R practice, and a broader mock-exam layer.

It is **not yet perfect parity** with `mikro1`, mainly because the module still leaves some source-supported granularity on the table and still mixes bespoke drill content with shared generated drill scaffolding.
