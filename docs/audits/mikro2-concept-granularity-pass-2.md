# Mikro2 Concept Granularity Pass 2

**Source status:** Granularity work does **not** imply in-repo PDF grounding. See `docs/audits/mikro2-status-guard-pass-2.md`.

## Scope
- Module: `mikro2` only.
- Scope of change: exactly three conservative, academically real splits from pass-2 review.
- Out of scope: broad content rewrite, renderer redesign, splitting `public_goods`.

## Concept count
- Before this pass: **10**
- After this pass: **13**
- Net change: **+3**

## Exact splits implemented
1. `gleichgewicht` -> `gleichgewicht_tausch` + `gleichgewicht_walras`
2. `wohlfahrt` -> `wohlfahrt_theoreme` + `wohlfahrt_messung`
3. `externa` -> `externa_pigou` + `externa_institutionen`

## What changed for deployable consistency

### 1) Chapter and concept map structure
- File: `mikro2/js/data/chapters.js`
- Updated chapter IDs and navigation labels to the six new split IDs.
- Added new concept blocks for:
  - `gleichgewicht_walras`
  - `wohlfahrt_messung`
  - `externa_institutionen`
- Reassigned existing broad blocks to:
  - `gleichgewicht_tausch`
  - `wohlfahrt_theoreme`
  - `externa_pigou`
- `public_goods` remained unchanged and unsplit.

### 2) Concept dependency graph
- File: `mikro2/js/data/conceptLinks.js`
- Replaced old links with split-aware dependencies so progression remains coherent.

### 3) Intuition layer
- File: `mikro2/js/data/intuition.js`
- Split intuition entries added for all six new IDs with exam cues and bridges.

### 4) Drill/step problem mapping
- File: `mikro2/js/data/stepProblems.js`
- Re-keyed existing drill groups to split IDs and added one focused drill bundle per newly introduced second-half concept:
  - `gleichgewicht_walras`
  - `wohlfahrt_messung`
  - `externa_institutionen`

### 5) Graph panel concept registration
- File: `mikro2/js/ui/graphPanel.js`
- Updated `GRAPH_CONCEPTS` and graph panel config IDs to split concept IDs.

## Exact files changed
- `mikro2/js/data/chapters.js`
- `mikro2/js/data/conceptLinks.js`
- `mikro2/js/data/intuition.js`
- `mikro2/js/data/stepProblems.js`
- `mikro2/js/ui/graphPanel.js`
- `docs/audits/mikro2-concept-granularity-pass-2.md`

## Remaining granularity gaps after pass 2
1. **`public_goods` remains unsplit (intentional)**
   - Kept unsplit per explicit pass constraint.
   - Current Samuelson/free-rider/Lindahl cluster still functions as one coherent exam unit at present drill density.
2. **`information_moralhazard` still bundles moral hazard + signaling/screening**
   - Still acceptable for this pass to avoid over-fragmenting without a dedicated additional retrieval expansion.
   - Candidate for future split only if broader instrument-level drills are added.

## Deployability/status
- No legacy references to removed IDs (`gleichgewicht`, `wohlfahrt`, `externa`) remain in `mikro2/js`.
- Changes are additive and keep module behavior consistent with current architecture.
