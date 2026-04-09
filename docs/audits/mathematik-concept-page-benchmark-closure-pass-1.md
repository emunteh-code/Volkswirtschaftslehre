# Mathematik — Concept-page benchmark closure pass 1

**Scope:** Targeted closure pass for concept-page density and pedagogical layering in `mathematik` only. No shell rewrite, no broad platform refactor, no cosmetic filler.

## Benchmark pages compared

- `mikro1` — `Lagrange-Methode`
- `mikro1` — `Grenzrate der Technischen Substitution`
- `mathematik` — `Lagrange-Methode`
- `mathematik` — `Differentialrechnung`

## Source context checked

- `source-materials/Mathematik/Mathematik/Vorlesung_Folien_+_R-Skripte_Lehrvideos/06Mathe_AN1_Differentialrechnung.pdf`
- `source-materials/Mathematik/Mathematik/Vorlesung_Folien_+_R-Skripte_Lehrvideos/09Mathe_OP2_MultivOptimierung.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/AN_1_-_Univariate_Differenzialrechnung/AN_I_-_Aufgaben.pdf`
- `source-materials/Mathematik/Mathematik/Kleinübung/OP_2_-__Multivariate_Optimierung/OP_II_-_Aufgaben.pdf`

The source files confirm that the current `mathematik` concepts sit on top of real AN1 / OP2 material with more retrieval cues than the current portal surfaces expose, especially around constrained optimization, local vs. global classification, and exam-style recognition logic.

## Page-level deficits identified before implementation

### 1. Generic mastery / checklist layer

`mathematik/js/data/masteryData.js` still used one generic four-item fallback for every concept. Compared with `mikro1`, the visible checklist surface therefore lacked:

- concept-specific recognition cues
- formal-anchor retrieval
- transfer-language tied to actual method choice
- exam-facing “what exactly must I be able to do?” guidance

### 2. Thin right-rail connection density on weak concepts

The weakest visible example was `mathematik` `Lagrange-Methode`: the right rail exposed only one meaningful concept connection, while the benchmark `mikro1` pages expose a denser prerequisite / consequence map.

### 3. Lagrange page still under-layered vs. benchmark

Compared with `mikro1` `Lagrange-Methode`, the `mathematik` page still lacked:

- an explicit recognition block for when the method is the correct tool
- a clearer exam-time solution schema
- stronger formula support around FOCs and shadow-price interpretation
- explicit local/global caution under constraints

### 4. Intuition / transfer cues are present but too light on selected concepts

`mathematik/js/data/intuition.js` was concept-specific already, but on weaker pages like `lagrange` the visible retrieval density still lagged behind `mikro1`.

## Planned closure work

- replace generic `mathematik` mastery data with concept-specific mastery items
- enrich `lagrange` concept content with stronger recognition, transfer, and formula support
- strengthen concept links where the right rail is visibly too thin
- add a second concept-native step problem where the current transfer layer is too light
- verify the result in-browser on real concept pages

## Files expected to change

- `mathematik/js/data/masteryData.js`
- `mathematik/js/data/chapters.js`
- `mathematik/js/data/intuition.js`
- `mathematik/js/data/conceptLinks.js`
- `mathematik/js/data/stepProblems.js`

## Remaining benchmark risk to reassess after implementation

Even after this pass, `mathematik` may still remain below `mikro1` if the visible problem turns out to be more about concept granularity than page layering. That must be judged again after browser verification, not assumed away.

---

## Implementation completed

### Exact files changed

- `mathematik/js/data/masteryData.js`
- `mathematik/js/data/chapters.js`
- `mathematik/js/data/intuition.js`
- `mathematik/js/data/conceptLinks.js`
- `mathematik/js/data/stepProblems.js`
- `docs/audits/mathematik-concept-page-benchmark-closure-pass-1.md`

### Exact visible density / structure improvements made

#### 1. Concept-specific mastery layer across the whole module

The generic four-line mastery fallback was replaced with authored concept checklists for all eight `mathematik` concepts. This closes the most obvious benchmark gap on the Aufgaben surface: the checklist now tells the student what must actually be recognized, computed, and interpreted for each concept instead of repeating empty generic language.

#### 2. `Lagrange-Methode` now has a real benchmark-style middle layer

The weakest math page was upgraded with new visible teaching layers:

- **recognition block**: when Lagrange is the correct tool
- **time-pressure solution schema**: explicit step order under exam conditions
- **local vs. global caution** under restrictions
- **two additional warn-boxes** for the most common failure modes
- **expanded formula support**:
  - full Lagrange ansatz
  - BEO system
  - tangential condition
  - shadow-price interpretation
  - household-optimum special case
- **one additional source-supported constrained-optimization task**

#### 3. Intuition and transfer cues were thickened where they were too light

The intuition layer was expanded on `lagrange`, `integral`, and `ableitung`, with stronger exam-recognition prompts rather than decorative prose.

#### 4. Right-panel support was made less sparse

`lagrange` gained additional prerequisite links so the right rail no longer looks isolated relative to the benchmark.

#### 5. Guided-task / transfer surface strengthened

`lagrange` and `integral` each received an additional concept-native step-problem so the transfer layer is not relying as heavily on generic generated drills.

---

## Browser verification

### Exact pages verified after implementation

- `mikro1` — `Lagrange-Methode` (`.qa/mathematik-benchmark-pass1/mikro1-lagrange-reference-theorie.png`)
- `mathematik` — `Lagrange-Methode` theory (`.qa/mathematik-benchmark-pass1/math-lagrange-after-theorie.png`)
- `mathematik` — `Lagrange-Methode` formulas (`.qa/mathematik-benchmark-pass1/lagrange-formeln-eval.png`)
- `mathematik` — `Lagrange-Methode` Aufgaben (`.qa/mathematik-benchmark-pass1/lagrange-aufgaben-eval.png`)
- `mathematik` — `Differentialrechnung` theory (`.qa/mathematik-benchmark-pass1/math-ableitung-after-theorie.png`)

### Measured before / after signals

#### `mathematik` `Lagrange-Methode`

From the initial browser probe before implementation:

- theory sections: **5**
- formula quick-reference items in the right rail: **2**
- concept connections in the right rail: **1**
- visible warn-boxes: **2**

After this pass:

- theory sections: **8**
- formula quick-reference items in the right rail: **5**
- concept connections in the right rail: **3**
- visible warn-boxes / right-rail mistake blocks: **4**
- Aufgaben drill cards: **10**
- visible mastery checklist items on Aufgaben: **4**
- formula cards in the Formeln tab: **5**

#### `mathematik` `Differentialrechnung`

The page already had a better base structure than `lagrange`, but after this pass it now sits inside a denser module context:

- right rail remains strong (**5** concept links, **6** formula quick references)
- intuition retrieval cues were expanded so the page does not rely as heavily on compact theory prose alone

### Visible outcome

`Lagrange-Methode` no longer reads like a compact notes card. It now has enough chunking, formal anchoring, warning density, formula support, and exam-facing staging to feel substantially closer to a `mikro1` concept page.

---

## Remaining reasons mathematik still falls below mikro1

This pass closes a major **page-level** gap, but it does **not** fully eliminate the remaining **module-level** benchmark deficit.

### Still below benchmark

1. **Granularity remains coarser than the source structure supports.**
   - The source corpus still contains more explicit learnable units than the live portal exposes, especially around:
     - `E1` Algebra / Mengenlehre
     - `E3` Summen / Logik
     - the broader AN1 topics beyond the current derivative core
     - the fuller OP2 spread around constrained multivariate optimization

2. **Not every math concept now matches mikro1 equally.**
   - `lagrange` improved the most in this pass.
   - `ableitung` is solid.
   - `integral` and `linalg_det_inverse_lgs` still remain less layered than a top-tier `mikro1` benchmark page, even though they are no longer the most visibly sparse surfaces.

3. **The benchmark gap is no longer primarily shell-level.**
   - What remains is mostly about further concept decomposition and additional source-grounded math authoring, not generic UI parity.

## Honest judgment after pass 1

This pass **materially closes** the visible concept-page density gap for `mathematik`, especially on `Lagrange-Methode`, but it does **not** make the entire module fully equal to `mikro1` yet. The next meaningful follow-up should be a **source-grounded granularity/content pass**, not another shell pass.
