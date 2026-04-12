# Formulas Tab Layout And Formula-Frame Consistency Pass 12

## Mission

Correct the shared formulas-tab rendering contract so formula cards:

- do not clip or overflow
- adapt to compact, medium, and extended content lengths
- keep one coherent premium formula-card family
- route non-pure-math structured content through the semantic renderer instead of fake one-line MathJax output

This pass was implemented as a shared renderer and CSS correction, not as a page-by-page patch.

## Previous Failure Classes Found

1. Formula cards still assumed one centered display-math composition.
   - Short identities, dense matrix notation, multi-line transformations, and text-heavy mappings were all pushed through the same formula frame.
   - Result: long formulas stretched the card, clipped at the edges, or looked visually detached from the surrounding formula family.

2. Some formula entries were structurally not pure math.
   - Text-dominated mappings and semantic chains were still arriving as TeX-like strings.
   - Result: cards in modules such as `internationale-wirtschaftsbeziehungen`, `jahresabschluss`, `recht`, and related shared surfaces looked like pseudo-formulas instead of structured learning content.

3. The shared formula shell inherited generic display-math behavior.
   - Formula cards and right-rail formulas still inherited margins, centering, and display assumptions that work for isolated theory math but not for dense formula-tab cards.
   - Result: top-left cards in several views visibly broke the family and looked like a nested widget inside the card.

4. The formula tab duplicated right-rail formulas in a narrow sidebar.
   - The same content that needed a wider formula-tab layout was still rendered in the cramped right rail.
   - Result: duplicated formulas on the formulas tab remained one of the strongest clipping and crowding failure classes.

## Shared Root Cause

The root cause was shared and structural:

- the renderer did not have a true extended formula layout for long or multi-line math
- the semantic parser still left several mapping-style strings in the plain MathJax path
- the formula-card CSS did not fully reset MathJax containers away from generic theory-block assumptions
- the formulas tab still rendered a narrow right-rail duplicate of the same formula content

This was not solvable by shrinking the whole system or by patching a single malformed entry.

## Layout And Rendering Contract Introduced

### Mode A: compact formula

Used for short, single-line identities and compact equalities.

- centered formula zone
- standard card rhythm
- readable default scale

### Mode B: medium formula

Used for longer single-line formulas, fractions, log/exponent notation, and moderate symbolic density.

- larger inner formula zone
- more generous padding
- same family styling without over-expanding height

### Mode C: extended formula

Used for multi-line math, long symbolic expressions, dense notation, and formula cards with heavier explanatory burden.

- full-row card on wider screens
- taller formula zone
- expanded vertical breathing room
- preserved readability without global shrinkage

### Structured semantic modes retained

The formulas tab now also keeps the semantic rendering split introduced in the previous structural pass:

- `math` for true mathematical formulas
- `schema` for structured semantic sequences
- `reference` for mapping-style reference content

Semantic `schema` and `reference` entries still live inside the same formula-card family, but they no longer pretend to be one-line equations.

## Exact Files Changed

- `assets/js/portal-core/ui/semanticContent.js`
- `assets/js/portal-core/ui/renderer.js`
- `assets/js/portal-core/ui/rightPanel.js`
- `assets/js/portal-core/app.js`
- `assets/css/premium-refinement.css`
- `docs/audits/formulas-tab-layout-and-formula-frame-consistency-pass-12.md`

Note:

- `assets/js/portal-core/ui/semanticContent.js`
- `assets/js/portal-core/ui/rightPanel.js`

are currently untracked shared files in this worktree rather than tracked edits against `HEAD`, but they are part of the actual implementation for this pass and are required by the live rendering path.

## Exact Implementation Changes

### 1. Shared semantic parsing was expanded

File:

- `assets/js/portal-core/ui/semanticContent.js`

What changed:

- added stronger normalization for arrow, comparison, and direction tokens
- added parsing for text-dominated TeX-like content
- added parsing for mixed arrow chains and arrow-driven mappings
- fixed `normalizeDisplayContent()` so legacy schema/reference strings normalize into structured data instead of leaking back as raw strings

Why it changed:

- longer formulas and mixed semantic content cannot all be safely rendered as MathJax
- text-heavy mappings needed to route into `schema` or `reference` before the layout system could handle them cleanly

### 2. Formula-card classification now includes a true extended mode

File:

- `assets/js/portal-core/ui/renderer.js`

What changed:

- `classifyFormulaCardLayout()` now promotes cards to `layout-extended` for:
  - multi-line math
  - dense variable sets
  - long equations
  - arrow-heavy expressions
  - text-heavy math content
- formula cards now carry both display mode and layout mode classes
- semantic formula content renders through `renderSemanticBlock(...)`
- placeholder filler text below formulas was removed so cards only show real content

Why it changed:

- the renderer needed a real content-sensitive layout contract instead of one rigid card height and formula slot
- placeholder support text was making already dense cards feel more cramped and unfinished

### 3. The formulas tab no longer duplicates right-rail formulas

Files:

- `assets/js/portal-core/ui/rightPanel.js`
- `assets/js/portal-core/app.js`

What changed:

- the right-panel renderer now receives the active tab
- on the dedicated formulas tab, the right-rail formulas section is intentionally hidden
- theory-tab right-rail formulas remain available
- right-rail formulas now use the same semantic display helpers for copy text, display mode detection, and DOM rendering

Why it changed:

- the narrow right rail was reintroducing the exact clipping and crowding failure class this pass was meant to eliminate
- the formulas tab already provides the full-width formula surface, so the duplicate sidebar formulas reduced clarity instead of adding value

### 4. Shared premium formula-card CSS now adapts to content

File:

- `assets/css/premium-refinement.css`

What changed:

- formula grid moved to an adaptive minmax layout
- formula cards now use a unified `18px` radius, `1px` border, `20px` shell padding, and shared premium surface treatment
- the inner formula zone now has differentiated padding by layout mode:
  - compact: `18px 20px`
  - medium/schema/reference: `20px 22px`
  - extended: `22px 24px`
- extended cards span the full row on wider screens
- MathJax display containers inside formula cards and sidebar formulas are reset to:
  - no inherited border-left
  - no nested background shell
  - `max-width: 100%`
  - `overflow-x: auto`
  - `overflow-y: visible`
- semantic schema/reference entries now wrap cleanly instead of forcing horizontal overflow
- right-rail formulas on theory pages were brought into the same premium family

Why it changed:

- clipping was caused by a combination of rigid inner sizing and inherited display-math behavior
- family consistency required the same shell logic, inner zone logic, and spacing rhythm across compact, medium, extended, and semantic formula cards

## How Clipping And Overflow Were Solved

The fix did not rely on `overflow: hidden` or global downscaling.

Instead, the shared system now:

- classifies long or dense content into a taller `layout-extended` card
- allows formula cards to grow vertically instead of forcing a uniform fixed height
- gives the formula zone more internal horizontal padding
- resets nested MathJax container behavior so it stays inside the card frame
- allows horizontal scroll inside the MathJax container only when mathematically necessary, while keeping the card itself intact
- routes non-math structured content into semantic DOM so it wraps as content instead of pretending to be a single-line equation
- removes the duplicated formula rail from the dedicated formulas tab so the cramped sidebar no longer competes with the main formula surface

## How Family Consistency Was Preserved

Even though cards can now differ in height and internal composition, the family stays coherent through:

- one shared outer radius
- one shared border logic
- one shared formula-zone treatment
- one shared spacing rhythm
- one shared label and description placement
- one shared right-rail companion style on theory pages

The system is now adaptive without looking like several unrelated components.

## Browser Verification Performed

Local verification was run against `http://127.0.0.1:8766/` with Playwright.

### 1. Reproduced screenshot failure case

Page:

- `internationale-wirtschaftsbeziehungen / wto_integration / Formeln`

Observed after fix:

- the former top-left broken card now renders as a contained `reference` formula card
- no raw TeX residue remained
- no clipping or overflow remained
- right-rail formulas are hidden on the formulas tab

### 2. `mathematik` page with longer formulas

Page:

- `mathematik / exp_log_inverse / Formeln`

Observed after fix:

- five formula cards rendered cleanly
- longer cards such as `Logarithmengesetze` and `Exponentielle Gleichung lösen` used the medium layout without crowding
- no cards clipped or broke the grid

### 3. `oekonometrie` formula page

Page:

- `oekonometrie / matrix_notation / Formeln`

Observed after fix:

- `Lineares Modell in Matrixform` rendered as `layout-extended`
- the matrix-style expression remained readable and contained
- no cropped MathJax output occurred

### 4. `statistik` formula page

Page:

- `statistik / wahrscheinlichkeit / Formeln`

Observed after fix:

- probability identities stayed in proper MathJax mode
- no semantic misclassification remained
- no formula overflow or tiny unreadable scaling appeared

### 5. Non-pure-math structured content

Page:

- `jahresabschluss / inventur_inventar_bilanzansatz / Formeln`

Observed after fix:

- `Inventurfolge` and `Abschlusskette` render as `schema`
- `Prüfungsfolge` renders as `reference`
- these cards now belong to the formula-card family without being fake equations

### 6. Right-rail formula surface

Page:

- `internationale-wirtschaftsbeziehungen / wto_integration / Theorie`

Observed after fix:

- right-rail formulas still render on theory pages
- no raw TeX residue remained
- the sidebar formulas now follow the same premium shell and inner formula-zone logic

### Console/runtime check

- no new console errors were introduced during verification

## Before / After System Description

Before:

- one rigid formula-card composition
- mixed semantic content sometimes forced through MathJax
- duplicated narrow sidebar formulas on the formulas tab
- top-left cards in several modules visibly broke containment and family consistency

After:

- compact, medium, and extended math layouts
- semantic schema/reference rendering inside the same premium formula-card family
- no formulas-tab sidebar duplication
- contained MathJax and wrapped semantic content
- formula cards that read as one system instead of unrelated widgets

## Remaining Risks Or Future Cleanup

1. Several module-local stylesheet files still contain older baseline formula-card rules.
   - The live rendering is now normalized through the shared premium override layer used by the portal.
   - Future cleanup could remove some of that duplicated legacy CSS once the team wants a dedicated stylesheet consolidation pass.

2. Very dense pure-math sidebar summaries on theory tabs still rely on the compact right-rail presentation.
   - They are contained and readable under the current pass.
   - A future enhancement could add a dedicated sidebar-specific line-breaking strategy for exceptionally dense MathJax-only summaries, but that was not required to solve the formulas-tab failure class.
