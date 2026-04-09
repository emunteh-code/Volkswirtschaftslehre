# Mathematik — Module-level benchmark closure pass 2

**Scope:** Bounded follow-up pass for `mathematik` only. This pass extends the page-level gains from pass 1 to the next weakest high-value concepts so the module no longer depends on one unusually strong page (`lagrange`) to carry the benchmark impression.

## Benchmark pages compared

- `mikro1` — `Lagrange-Methode`
- `mikro1` — `Grenzrate der Technischen Substitution`
- `mathematik` — `Lagrange-Methode` (post pass 1 local benchmark)
- `mathematik` — `Funktionen: linear & Potenz/Exp`
- `mathematik` — `Lineare Algebra II: Det, Inverse, LGS`
- `mathematik` — `Integralrechnung`

## Source context checked

- `source-materials/Mathematik/Mathematik/Vorlesung_Folien_+_R-Skripte_Lehrvideos/02Mathe_E2_FunktionenUndGleichungen.pdf`
- `source-materials/Mathematik/Mathematik/Vorlesung_Folien_+_R-Skripte_Lehrvideos/05Mathe_LA2_LineareAlgebra2.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/LA_2_-_Maßzahlen_von_Matrizen_und_inverse_Matrizen/LA_II_-_Aufgaben.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/AN_3_-_Intergralrechnung/AN_III_-_Aufgaben.pdf`

These files justify denser treatment of:

- function classes, graph reading, domain/range, and transformations
- trace/rank, determinant/inverse logic, and solver choice for LGS
- signed area vs. economic area, interval splitting, partial integration, and stock-from-flow interpretation

## Weak concepts selected for this pass

The browser probe after pass 1 showed the following three concepts still falling most visibly below the new local standard:

1. `funktionen_grundlagen`
2. `linalg_det_inverse_lgs`
3. `integral`

## Page-level deficits identified before implementation

### 1. `funktionen_grundlagen` is still too bare for a foundational page

Visible deficits after pass 1:

- only two theory sections
- no explicit error/trap framing
- thin formula support for graph reading and inverse / transformation recognition
- too little exam-language around domain, codomain, and graph type identification

### 2. `linalg_det_inverse_lgs` still compresses too many solver decisions

Visible deficits after pass 1:

- determinant, inverse, singularity, and solving strategy are compressed into one short block
- too little recognition help for when to use inverse, Gauß, or Cramer
- too little right-rail support despite strong links to matrix notation and econometrics
- too little mistake framing for rank/singularity logic

### 3. `integral` still teaches correctly but too thinly

Visible deficits after pass 1:

- formula support is still sparse relative to how many exam patterns the source exercises cover
- the page lacks a strong recognition layer for area vs. signed area vs. stock-from-flow tasks
- right-rail and drill density still lag behind the improved local benchmark

## Planned closure work

- enrich the three selected concept pages with denser theory chunking
- expand formal-anchor support in formulas where the source clearly warrants it
- add stronger transfer / recognition / trap framing
- add one or more extra concept-native step drills where the current transfer layer is too light
- thicken right-rail support through better concept links where pedagogically justified

## Files expected to change

- `mathematik/js/data/chapters.js`
- `mathematik/js/data/intuition.js`
- `mathematik/js/data/conceptLinks.js`
- `mathematik/js/data/stepProblems.js`
- `docs/audits/mathematik-module-benchmark-closure-pass-2.md`

## Remaining benchmark risk to reassess after implementation

Even after this pass, `mathematik` may still remain below `mikro1` at the full module level if the remaining gap is primarily concept granularity rather than page layering. That must be judged again after browser verification.

---

## Implementation completed

### Exact concepts upgraded

- `funktionen_grundlagen`
- `linalg_det_inverse_lgs`
- `integral`

### Exact files changed

- `mathematik/js/data/masteryData.js`
- `mathematik/js/data/chapters.js`
- `mathematik/js/data/intuition.js`
- `mathematik/js/data/conceptLinks.js`
- `mathematik/js/data/stepProblems.js`
- `docs/audits/mathematik-module-benchmark-closure-pass-2.md`

## Exact visible density / structure improvements made

### 1. `funktionen_grundlagen` now behaves more like a foundational benchmark page

Visible additions:

- new theory sections on:
  - function notation, domain, and range
  - graph reading and transformations
  - recognition cues for function type and exam setup
  - dedicated error framing
- formula support expanded from a very thin core to a real anchor set:
  - function notation
  - linear form
  - slope from two points
  - transformation rule
  - Cobb-Douglas
- extra guided task for deriving a linear function from two points with economic interpretation
- thicker right rail via stronger concept-link support and more common-mistake extraction

### 2. `linalg_det_inverse_lgs` no longer compresses solver logic into one short note

Visible additions:

- new theory sections on:
  - trace and rank as structural pre-check
  - solver choice (inverse vs. Gauß vs. Cramer)
  - distinction between unique / no / infinitely many solutions
  - explicit econometrics bridge
- richer formula support:
  - trace
  - determinant
  - invertibility criterion via rank
  - Cramer rule
  - OLS matrix estimator
- extra guided task on rank deficiency and uniqueness
- expanded intuition cues and a denser prerequisite map in the right rail

### 3. `integral` now has a stronger recognition and transfer layer

Visible additions:

- new theory sections on:
  - bestimmmtes vs. unbestimmtes Integral
  - signed area vs. geometric/economic area
  - stock-from-flow interpretation
  - when to consider substitution vs. partielle Integration
- formula support expanded to:
  - unbestimmtes Integral
  - Hauptsatz
  - Konsumentenrente
  - Produzentenrente
  - partielle Integration
- extra guided task on splitting at the zero crossing when geometric area is asked
- stronger right-rail support and additional trap framing around sign changes

## Browser verification

### Exact pages verified

- `mathematik` — `Lagrange-Methode` theory / formulas / Aufgaben (local benchmark reference)
- `mathematik` — `Funktionen: linear & Potenz/Exp` theory / formulas / Aufgaben
- `mathematik` — `Lineare Algebra II: Det, Inverse, LGS` theory / Aufgaben
- `mathematik` — `Integralrechnung` theory / formulas / Aufgaben

### Screenshot evidence captured

- `.qa/mathematik-benchmark-pass2/lagrange-theorie.png`
- `.qa/mathematik-benchmark-pass2/funktionen_grundlagen-theorie.png`
- `.qa/mathematik-benchmark-pass2/funktionen_grundlagen-formeln.png`
- `.qa/mathematik-benchmark-pass2/linalg_det_inverse_lgs-theorie.png`
- `.qa/mathematik-benchmark-pass2/linalg_det_inverse_lgs-aufgaben.png`
- `.qa/mathematik-benchmark-pass2/integral-theorie.png`

### Checks run

- `node --check mathematik/js/data/masteryData.js`
- `node --check mathematik/js/data/chapters.js`
- `node --check mathematik/js/data/intuition.js`
- `node --check mathematik/js/data/conceptLinks.js`
- `node --check mathematik/js/data/stepProblems.js`
- headless Chromium browser verification on the four listed concept pages

### Measured before / after signals on the three upgraded pages

#### `funktionen_grundlagen`

- theory sections: **2 → 6**
- warn-boxes: **0 → 3**
- right-rail formulas: **2 → 5**
- right-rail links: **3 → 5**
- right-rail mistake blocks: **0 → 3**
- formula cards in Formeln tab: **0 → 5**
- Aufgaben surface: **4** mastery items, **20** visible problem cards, both `Geführte Aufgaben` and `Prüfungstransfer`

#### `linalg_det_inverse_lgs`

- theory sections: **3 → 6**
- warn-boxes: **1 → 3**
- right-rail formulas: **2 → 5**
- right-rail links: **1 → 2**
- right-rail mistake blocks: **1 → 3**
- formula cards in Formeln tab: **0 → 5**
- Aufgaben surface: **4** mastery items, **20** visible problem cards, both `Geführte Aufgaben` and `Prüfungstransfer`

#### `integral`

- theory sections: **5 → 7**
- warn-boxes: **2 → 3**
- right-rail formulas: **2 → 5**
- right-rail links: **2 → 3**
- right-rail mistake blocks: **2 → 3**
- formula cards in Formeln tab: **0 → 5**
- Aufgaben surface: **4** mastery items, **20** visible problem cards, both `Geführte Aufgaben` and `Prüfungstransfer`

### Visible outcome

After this pass, `mathematik` no longer relies almost entirely on `lagrange` and `ableitung` to carry the benchmark impression. The three most visibly underbuilt pages now have:

- real multi-block theory staging
- stronger formal anchors in the formulas tab
- visible recognition and trap framing
- denser right-rail support
- additional concept-native drill density

## Exact remaining reasons mathematik still falls below mikro1, if any

`mathematik` is materially closer to the benchmark after this pass, but one honest module-level gap still remains:

1. **Granularity is still coarser than the source structure supports.**
   - The source corpus still points to more distinct learnable units than the live module exposes, especially around:
     - additional early algebra / notation groundwork
     - fuller LA2 spread beyond the current combined determinant/inverse/LGS concept
     - fuller AN3 / OP coverage as separate learnable units rather than broad blocks

2. **The benchmark gap is now smaller and more structural than page-local.**
   - The weakest concept pages no longer look obviously sparse.
   - What remains is mainly a follow-up question of concept decomposition, not the old problem of visibly thin page surfaces.

## Honest judgment after pass 2

This pass closes the next major **module-level page-density gap** inside `mathematik`. The selected weak concepts now read like serious study pages rather than thinner siblings of `lagrange`. The module is substantially closer to `mikro1`, but a later **source-grounded granularity pass** would still be justified if the goal is full module-level equality rather than strong local benchmark parity.
