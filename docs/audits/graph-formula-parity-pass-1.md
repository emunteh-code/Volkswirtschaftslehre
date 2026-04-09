# Graph & Formula Parity Pass 1

Date: 2026-04-09  
Benchmark reference: `mikro1`

## Scope

- graph interpretation / labeling parity
- formula-card completeness and variable explanations
- in-text math / variable accent consistency

## Reproduction notes (initial audit)

### Modules checked

- `mikro1`
- `makro1`
- `makro2`
- `statistik`
- `finanzwirtschaft`
- `jahresabschluss`
- `recht`
- `internationale-wirtschaftsbeziehungen`
- `mathematik`
- `oekonometrie`

### Representative surfaces checked

- graph-bearing concepts:
  - `mikro1/markt`
  - `makro1/islm`
  - `makro2/marshall_lerner`
  - `finanzwirtschaft/intertemporale_wahl`
  - `internationale-wirtschaftsbeziehungen/overshooting`
  - `oekonometrie/fwl_partial_regression`
- formula-heavy concepts:
  - `statistik/regression_schaetzung_inferenz`
  - `finanzwirtschaft/intertemporale_wahl`
  - `jahresabschluss/anlagevermoegen`
  - `recht/willenserklaerung`
  - `internationale-wirtschaftsbeziehungen/overshooting`
  - `mathematik/lagrange`

## Initial findings before fixes

- Shared formula-card renderer still drops to generic hint text when `formula.variables` is missing.
- This leaves multiple modules with bare expressions plus a weak generic instruction instead of a usable symbol legend.
- `makro1`, `makro2`, and `oekonometrie` sampled graph surfaces already sit closer to the `mikro1` benchmark.
- `statistik` graph assets still need careful verification because older graph files remain in the module even though not all sampled concepts expose visible graph interpretation surfaces.

## Planned implementation

- patch the shared formula renderer first
- verify visible formula-card improvement in affected modules
- then classify graph parity issues as closed / partially improved / still open based on actual visible surfaces

## Root-cause classification

### Shared / renderer-level

- Formula cards with missing `formula.variables` fell back to generic placeholder guidance.
- Empty objects like `variables: {}` were treated as if a real legend existed, leaving some cards visually under-explained.

### Module-specific / graph layer

- `makro1`, `makro2`, `finanzwirtschaft`, `internationale-wirtschaftsbeziehungen`, and sampled `oekonometrie` graph surfaces already use segmented interpretation rows close to the `mikro1` family.
- `statistik` still contains stale local graph assets copied from older graph families, but this pass did not reproduce the same graph-interpretation defect as a visible student-facing blocker on the sampled checked concepts.

## Files changed

- `assets/js/portal-core/ui/renderer.js`
- `docs/audits/graph-formula-parity-pass-1.md`

## Exact fixes made

### 1. Shared formula-card completeness fix

- The shared renderer now treats `variables: {}` as empty instead of rendering an empty list.
- If a formula has no explicit variable map but contains recognizable mathematical/economic symbols, the renderer now generates a visible symbol legend automatically.
- This is conservative and only activates for formulas with recognizable notation; text-only legal formulas still keep meaning support through the description rather than fake symbol lists.

### 2. Visible symbol-support improvement verified

After the renderer patch, the following sampled concepts gained visible symbol help:

- `statistik/regression_schaetzung_inferenz`
  - `β̂₁`, `s_xy`, `s_x²`, `R²`, `SSR`, `SST`
- `finanzwirtschaft/intertemporale_wahl`
  - `c_0`, `c_1`, `y_0`, `y_1`, `1+i`, `MRS_{0,1}`
- `jahresabschluss/anlagevermoegen`
  - `AfA`, `AK`, `RW`, `n`, `BW_t`, `t`
- `internationale-wirtschaftsbeziehungen/overshooting`
  - `i`, `i^*`, `E`, `E^e`
- `makro2/marshall_lerner`
  - `NX`, `ε`, plus the already explicit elasticity symbols

`recht/willenserklaerung` was intentionally left without an auto-generated symbol list because the displayed expressions are textual legal structures rather than mathematical notation.

## Browser verification after fixes

### Formula surfaces rechecked

- `statistik/regression_schaetzung_inferenz`
- `finanzwirtschaft/intertemporale_wahl`
- `jahresabschluss/anlagevermoegen`
- `internationale-wirtschaftsbeziehungen/overshooting`
- `makro2/marshall_lerner`
- `recht/willenserklaerung`
- `mathematik/lagrange`

### Visible results

- Formula cards now expose visible variable rows in sampled quantitative concepts that previously showed only weak fallback guidance.
- `makro2/marshall_lerner` no longer loses meaning support on the second formula when `variables` is empty.
- `recht/willenserklaerung` still uses description-led support rather than an artificial variable legend, which is the safer behavior for that formula style.

## Graph parity status in this pass

### Modules checked for visible graph interpretation style

- `mikro1/markt` as benchmark
- `makro1/islm`
- `makro2/marshall_lerner`
- `finanzwirtschaft/intertemporale_wahl`
- `internationale-wirtschaftsbeziehungen/overshooting`
- `oekonometrie/fwl_partial_regression`
- `oekonometrie/endogeneity_ovb`

### Result

- The checked visible graph surfaces above already render segmented interpretation rows rather than paragraph blobs.
- No safe shared graph defect emerged that would justify a broad graph rewrite in this pass.
- `statistik` still deserves a dedicated graph-surface audit later because older graph files remain in the module, but this pass did not reproduce a high-value visible graph interpretation blocker on the sampled checked concepts.

## Issues closed in this pass

- Formula cards rendered as bare expressions without meaningful symbol support in multiple modules
- Empty `variables: {}` objects producing effectively blank formula support
- Cross-module formula-tab parity improved via one shared renderer fix

## Issues partially improved in this pass

- Formula pedagogy parity vs `mikro1`
  - improved visibly in sampled quantitative modules, but not every concept across the whole platform was manually checked in this pass

## Issues still open and why

- Full graph-family parity across every module
  - not all modules and graph-bearing concepts were exhaustively re-audited here
- In-text math / variable accent consistency inside theory and intuition prose
  - this remains a broader rendering/content problem than formula-card support and was not safely closed via a small shared patch
- Formula quality still depends on data richness
  - auto-generated symbol help improves weak cards, but fully benchmark-grade explanations still benefit from authored `variables` maps in module data
