# R-Übung Benchmark Correction Pass 2

Date: 2026-04-09  
Scope: Shared R-Übung learning surface (`assets/js/portal-core/features/rPractice.js`, `assets/css/r-practice.css`)  
Verification harness: `tools/clickthrough/r_uebung_verify_pass2.mjs`

## Mission focus

Pass 2 corrected the remaining pass-1 weakness: the surface still felt like "editor + many boxes" instead of a concept-first learning page with embedded code.

## Source status note

- `source-materials/` is empty in this repository state, so no direct-source extraction was possible for this pass.
- This pass only changed shared pedagogical scaffolding and wording (platform-added explanation/drill framing), not module-specific academic claims.

## Exact pass-1 weaknesses identified

1. Too many equal-weight panels created a bureaucratic "box stack" instead of a clear learning path.
2. Math↔R mapping rows were present but often too abstract to support immediate symbol-to-expression recognition.
3. Kernzeile existed but lacked strong visual isolation and explicit "changes vs invariant" framing.
4. Output interpretation remained too generic and did not force evidence-oriented reading.
5. Transfer prompts were present but not anchored as reusable exam rules.

## Exact files changed

- `assets/js/portal-core/features/rPractice.js`
- `assets/css/r-practice.css`
- `tools/clickthrough/r_uebung_verify_pass2.mjs`

## Structural simplifications made

1. Replaced pass-1 multi-panel orientation with a tighter concept-first flow:
   - `Lernziel` intro
   - explicit `Mathe ↔ R-Übersetzung`
   - stronger `Kernzeile`
   - operational `Arbeitsauftrag` step list
2. Reduced equal-weight box clutter by collapsing orientation content into fewer, function-distinct sections.
3. Upgraded Kernzeile from descriptive paragraph to highlighted code line plus explicit dual framing:
   - what changes mathematically
   - what remains invariant
4. Added output-evidence checklist in the output card (decision evidence + interpretation boundary).
5. Added explicit transfer-rule persistence both in Mini-Transfer and Musterlösung loop closure.

## Wording improvements made

1. Replaced generic guidance with operational sequence language ("identify -> change only core line -> verify with output evidence -> state transfer rule").
2. Removed weak sandbox-style tone and reinforced concept-first framing.
3. Strengthened output language from generic interpretation to falsification/confirmation-oriented evidence use.
4. Made transfer retention exam-oriented via explicit "Merksatz/Prüfungsregel".

## Shared inference upgrades (pedagogical explicitness)

Added/strengthened shared inference logic in `rPractice.js`:

- `inferMathCodeMap(...)` now injects explicit symbolic anchors where detectable (`1-alpha`, `mu_0`, `rho/cov`, `beta` model forms, descriptive stats).
- `inferCoreLineEffects(...)` now provides explicit "effect vs invariant" statements tied to task patterns.
- `inferOutputEvidenceHint(...)` now returns task-specific evidence-reading hints instead of a single generic hint.
- `inferTransferRule(...)` now enforces reusable exam-facing rule phrasing.

## Verification pages (browser)

Run:  
`CLICKTHROUGH_BASE="http://127.0.0.1:8770" node tools/clickthrough/r_uebung_verify_pass2.mjs`

Representative pages verified:

1. Mathematically symbolic page:
   - `mathematik` -> `funktionen_gleichungen` -> `R-Übung`
2. Statistics/econometrics page:
   - `statistik` -> `deskriptiv` -> `R-Übung`
3. Notation-to-code translation central page:
   - `oekonometrie` -> `matrix_notation` -> `R-Übung`

Result:

- `failed: []`
- `pageErrors: []`
- `consoleErrors: []`

## Visible improvements achieved

1. Learning-goal clarity improved by front-loading a compact intent-and-success block.
2. Math↔code explicitness improved with symbol-labeled mapping rows and stronger inferred anchors.
3. Editable-line emphasis improved through highlighted Kernzeile code block and explicit effect/invariant framing.
4. Output interpretation quality improved through evidence-checklist framing (what proves what, what remains unknown).
5. Transfer retention improved through explicit exam rule persistence in both task and solution surfaces.
6. Overall orientation improved by reducing visual fragmentation and lowering equal-weight card competition.

## Remaining limitations

1. Inference quality remains heuristic where author-provided structured fields are absent.
2. Some tasks still need module-author overrides for perfect symbolic specificity (especially niche notation).
3. This pass intentionally did not redesign right-rail architecture or cross-module content authoring conventions.

## Pass-2 status

Pass 2 materially reduces the benchmark gap by shifting the shared R-Übung surface from box-heavy worksheet framing toward a clearer concept-first learning sequence with embedded code.
