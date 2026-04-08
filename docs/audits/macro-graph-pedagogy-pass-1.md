# Macro Graph-Pedagogy Pass 1 (makro1 + makro2)

## Scope
- Modules: `makro1`, `makro2`.
- Goal: exam-oriented graph competence uplift (not renderer redesign).
- Benchmark orientation: high-discipline interpretation style (axis, shift vs movement, shock path, policy/regime comparison).

## Audit snapshot (before changes)
- Strong baseline already present:
  - both modules already expose concept-linked interactive graph panels for high-value topics,
  - existing chapter tasks and step drills include many directional reasoning steps.
- Highest-value graph weaknesses identified:
  1. **Axis/shift/movement discipline** was still inconsistent in explicit retrieval form.
  2. **Before/after shock walkthroughs** were present conceptually, but not always trained as structured multi-step graph paths.
  3. **Graph-to-formula linkage** (especially J-curve + Marshall-Lerner condition) needed denser explicit drills.
  4. **Regime comparison path logic** (same shock, different adjustment channel) needed clearer trap checks.

## What changed

### 1) `makro1` graph-pedagogy enrichments
- File: `makro1/js/data/chapters.js`
  - Added graph-focused chapter tasks in:
    - `islm` (shift vs movement discipline in `(Y,i)` space),
    - `politikmix` (before/after end-point comparison across LM geometries),
    - `phillips` (expectation shift vs unemployment movement on curve).
- File: `makro1/js/data/stepProblems.js`
  - Added graph-oriented step bundles:
    - `mk1_graph_islm`
    - `mk1_graph_policy`
  - Each bundle enforces decision -> endpoint -> trap-validation flow.

### 2) `makro2` graph-pedagogy enrichments
- File: `makro2/js/data/chapters.js`
  - Added graph-focused chapter tasks in:
    - `marshall_lerner` (J-curve time path linked to `|η_X|+|η_M|>1`),
    - `mundell_fleming` (three-step before/after shock path),
    - `wk_regime` (regime-specific adjustment channel comparison).
- File: `makro2/js/data/stepProblems.js`
  - Added graph-oriented step bundles:
    - `m2_graph_mf_path`
    - `m2_graph_jcurve_path`
    - `m2_graph_regime_path`
  - Focus: path logic, channel identification, and anti-shortcut trap checks.

## Exact files changed
- `makro1/js/data/chapters.js`
- `makro1/js/data/stepProblems.js`
- `makro2/js/data/chapters.js`
- `makro2/js/data/stepProblems.js`
- `docs/audits/macro-graph-pedagogy-pass-1.md`

## Exact graph-related concepts/sections enriched
- `makro1`:
  - `islm`
  - `politikmix`
  - `phillips`
- `makro2`:
  - `mundell_fleming`
  - `marshall_lerner`
  - `wk_regime`

## Exact new graph-oriented learning objects/drills added
- New chapter-level graph tasks:
  - `makro1`: 3
  - `makro2`: 3
- New step-problem graph bundles:
  - `makro1`: 2 (`mk1_graph_islm`, `mk1_graph_policy`)
  - `makro2`: 3 (`m2_graph_mf_path`, `m2_graph_jcurve_path`, `m2_graph_regime_path`)

## Remaining graph-pedagogy gaps
1. **Renderer-level guided overlays remain limited**
   - This pass intentionally did not redesign graph UI or add multi-layer annotation systems.
2. **Full-exam graph-item density unchanged**
   - Graph pedagogy improvements were concentrated in chapter/retrieval layers; full-exam expansion should be separate.
3. **Cross-concept graph synthesis still selective**
   - Added high-value links (e.g., J-curve + M-L), but not a full cross-module graph synthesis track.

## Why remaining gaps stay unresolved
- Scope discipline for pass 1: pedagogical strengthening only, infrastructure untouched.
- Deployability and module-strength preservation: additive content/drill changes without renderer or architecture churn.
