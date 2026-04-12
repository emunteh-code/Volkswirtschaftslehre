# Semantic Schema Rendering And Pruefungstransfer Strip Closure Pass 10

## Scope

- Shared renderer/data contract correction for non-mathematical structured content.
- Surgical removal of the remaining left accent strip from `Pruefungstransfer` cards.
- Targeted modules: `recht` and `finanzwirtschaft`, with project-wide `Pruefungstransfer` strip closure through shared styles.

## Audit Findings Before Implementation

### Root cause of the broken pseudo-schema rendering

The current implementation still mixes three incompatible representations for non-mathematical structured content:

1. Raw pseudo-formula strings in `formeln[].eq` and `aufgaben[].steps[].eq`, especially `\\text{...}` chains in `recht` and `finanzwirtschaft`.
2. Renderer-side heuristics in [assets/js/portal-core/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/renderer.js) that try to detect those strings and convert them into HTML by string replacement.
3. Module-local schema HTML generation in [recht/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/js/data/chapters.js) and [recht/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/js/ui/rightPanel.js), while [finanzwirtschaft/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/js/ui/rightPanel.js) still routes `formeln[].eq` straight through the formula path.

That means the same semantic content can be treated as:

- math,
- hand-built HTML,
- escaped text,
- or MathJax input,

depending on the surface. This is why class-name residue like `legal-schema__term` can leak into visible content and why conceptual sequences still present as broken pseudo-formulas.

### Shared style source of the remaining Pruefungstransfer strip

The remaining blue left strip is being reintroduced by later shared overrides inside [assets/css/premium-refinement.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/css/premium-refinement.css), including light-mode rules that still assign `border-left` styling to `#content .exam-drill-card`.

### Files identified for the implementation pass

- [assets/js/portal-core/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/renderer.js)
- [assets/js/portal-core/ui/semanticContent.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/semanticContent.js)
- [assets/css/premium-refinement.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/css/premium-refinement.css)
- [recht/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/js/data/chapters.js)
- [recht/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/js/ui/rightPanel.js)
- [finanzwirtschaft/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/js/data/chapters.js)
- [finanzwirtschaft/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/js/ui/rightPanel.js)

## Implementation

### 1. Shared renderer / data contract changes

Implemented a shared semantic-content layer in [assets/js/portal-core/ui/semanticContent.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/semanticContent.js).

The new contract supports three rendering modes:

- `math`
  Stored as delimited or normalizable LaTeX.
  Rendered through MathJax.
- `schema`
  Stored as structured `parts` arrays, for example term / connector / term chains.
  Rendered as semantic DOM with `.semantic-schema*` classes.
- `reference`
  Stored as structured statute / anchor entries.
  Rendered as semantic DOM with `.semantic-reference*` classes.

The helper also normalizes remaining legacy strings into a safe intermediate representation so untouched legacy task-support strings do not fall back to raw pseudo-formula output.

### 2. Shared renderer changes

Updated [assets/js/portal-core/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/renderer.js) to consume the new semantic helper instead of law-specific regex transforms.

What changed:

- Removed the inline `isLegalSchema` / `renderLegalSchema` pseudo-formula path.
- Routed formula cards, guided-task step reveals, intuition callouts, and Prüfungstransfer answer blocks through `renderSemanticBlock(...)`.
- Switched formula-card layout classification to semantic mode detection (`math` / `schema` / `reference`) instead of string heuristics only.
- Prevented auto-variable inference from running on non-math structured content.
- Made formula presence checks use semantic-content awareness instead of raw-text checks.

Why it changed:

- This is the actual contract fix. Non-mathematical structured content no longer has to masquerade as fake formulas to be rendered safely.

### 3. `recht` fixes

Updated [recht/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/js/data/chapters.js) and [recht/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/js/ui/rightPanel.js).

What changed:

- Replaced the old module-local schema HTML generator with the shared semantic renderer.
- Migrated `recht` formula/reference data from fake `\\text{...}` pseudo-formulas to structured `schema(...)`, `phrase(...)`, and `ref(...)` objects.
- Converted theory schema blocks away from inline HTML-string generation and onto the shared semantic block helper.
- Switched the right rail from module-local regex replacement to shared semantic rendering and plain-text copy handling.

Why it changed:

- `recht` was the clearest student-facing failure case. The same doctrinal chain could appear as HTML residue, fake formula content, or copied class-name text depending on the surface.

Exact `recht` areas covered:

- right rail reference/schema cards
- theory schema blocks
- Aufgaben reveal support blocks
- Prüfungstransfer answer blocks fed by `formeln[].eq`

### 4. `finanzwirtschaft` fixes

Updated [finanzwirtschaft/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/js/data/chapters.js) and [finanzwirtschaft/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/js/ui/rightPanel.js).

What changed:

- Replaced clearly conceptual finance chains in `formeln[].eq` with structured `schema(...)` or `phrase(...)` data.
- Re-routed the finance theory helper `mathBlock(...)` through the semantic renderer so non-math conceptual blocks no longer default to formula treatment.
- Converted the finance right rail from direct raw-`eq` rendering to the shared semantic renderer and plain-text copy handling.

Why it changed:

- `finanzwirtschaft` still had conceptual decision chains and benchmark statements displayed on the formula path, especially in right-rail and formel/theory surfaces.

Exact `finanzwirtschaft` fixes:

- `finanz_denkweise`: Leitobjekt / Leitfrage
- `liquiditaetsplanung`: Goldene Bilanzregel in theory and formulas
- `kapitalmarkt_bewertung`: theory exchange relation plus conceptual formula cards
- `institutionen_marktunvollkommenheit`: conceptual formula cards
- `izf_grenzen`: Mehrdeutigkeit card
- `fremdkapitalkosten`: Finanzierungs-IZF and Interpretationsregel cards
- `wacc`: Einsatzbedingung card
- `wacc_leverage`: Leverage-Regel card
- `modigliani_miller`: benchmark statement cards

### 5. Prüfungstransfer strip removal

Updated [assets/css/premium-refinement.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/css/premium-refinement.css).

What changed:

- Removed the remaining light-mode `border-left` overrides on `#content .exam-drill-card`.
- Added explicit no-strip treatment on the later shared `exam-drill-card` rule so later cascade layers do not reintroduce a thicker left border.
- Kept the premium hierarchy through radius, spacing, border, and interior structure instead of replacing the strip with a new accent bar.

Why it changed:

- The remaining visible strip came from shared premium overrides, not module-local content markup.

### 6. Semantic styling support

Also updated [assets/css/premium-refinement.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/css/premium-refinement.css) to style the new semantic blocks:

- `.semantic-schema*`
- `.semantic-reference*`
- formula-card reference layout
- flattened sidebar / formula-card wrappers for semantic and math-content variants

## Exact Files Changed

- [assets/js/portal-core/ui/semanticContent.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/semanticContent.js)
- [assets/js/portal-core/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/renderer.js)
- [assets/css/premium-refinement.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/css/premium-refinement.css)
- [recht/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/js/data/chapters.js)
- [recht/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/js/ui/rightPanel.js)
- [finanzwirtschaft/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/js/data/chapters.js)
- [finanzwirtschaft/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/js/ui/rightPanel.js)
- [docs/audits/semantic-schema-rendering-and-pruefungstransfer-strip-closure-pass-10.md](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/docs/audits/semantic-schema-rendering-and-pruefungstransfer-strip-closure-pass-10.md)

## Browser Verification

Verification environment:

- Local static server via `python3 -m http.server 4181 --bind 127.0.0.1`
- Headless Chromium via Playwright import from `/tmp/pw-check/node_modules/playwright/index.mjs`
- Light mode forced via module theme keys to verify the shared left-strip regression path

Verified surfaces:

1. `recht` theory page
   Page: `methodik` on `theorie`
   Screenshot: `.qa/pass10-recht-methodik-theorie.png`
2. `recht` Aufgaben page with revealed schema content
   Page: `methodik` on `aufgaben`
   Actions: opened first guided-task solution and first Prüfungstransfer solution
   Screenshot: `.qa/pass10-recht-methodik-aufgaben.png`
3. `finanzwirtschaft` page showing the same failure class
   Page: `kapitalmarkt_bewertung` on `theorie`
   Screenshot: `.qa/pass10-finanzwirtschaft-kapitalmarkt-theorie.png`
4. `Prüfungstransfer` in `recht`
   Page: `methodik` on `aufgaben`
   Checked on the same surface as above
5. `Prüfungstransfer` in a non-`recht` module
   Page: `finanz_denkweise` on `aufgaben`
   Screenshot: `.qa/pass10-finanzwirtschaft-finanz_denkweise-aufgaben.png`

DOM/style assertions executed on those surfaces:

- no visible `legal-schema__term`
- no visible `legal-schema__op`
- no visible `legal-schema__arrow`
- no quoted markup residue such as `"legal-schema__...`
- no raw `$$` / MathJax error leakage
- semantic blocks present in content and right rail where expected
- no thicker left border on `exam-drill-card` than the rest of the card frame

Observed verification results:

- `recht-theorie-methodik`
  semantic blocks in content: `2`
  semantic blocks in right rail: `4`
  leaks: none
- `recht-aufgaben-methodik`
  semantic blocks in content: `19`
  semantic blocks in right rail: `4`
  exam-drill cards checked: `8`
  leaks: none
- `finanzwirtschaft-theorie-kapitalmarkt_bewertung`
  semantic blocks in content: `1`
  semantic blocks in right rail: `2`
  leaks: none
- `finanzwirtschaft-pruefungstransfer-finanz_denkweise`
  semantic blocks in content: `20`
  semantic blocks in right rail: `2`
  exam-drill cards checked: `8`
  leaks: none

## Remaining Risks / Gaps

- A legacy schema helper path still exists in `jahresabschluss` module-local files:
  - [jahresabschluss/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/jahresabschluss/js/data/chapters.js)
  - [jahresabschluss/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/jahresabschluss/js/ui/rightPanel.js)
  This pass did not migrate that module because the reported failure surfaces and the requested audit scope were `recht` and `finanzwirtschaft`, and the project rule warns against broad multi-module refactors without an explicit ask.
- No unresolved visible case was found on the required `recht` / `finanzwirtschaft` / Prüfungstransfer verification surfaces in this pass.
