# Secondary module stabilization — pass 1

**Date:** 2026-04-12  
**Scope:** Public non-core modules only: `makro1`, `makro2`, `finanzwirtschaft`, `jahresabschluss`, `internationale-wirtschaftsbeziehungen`, `mathematik`.  
**Not in scope:** Trusted core deep-hardening, full source-diff certification, `mikro1`, `statistik`, `recht`, `oekonometrie`, `mikro2`, generated routes.

## Mission outcome

Goal was a **minimum credible secondary layer**: stable first clicks, honest provenance on key surfaces, no obvious math/markup leaks, working Aufgaben reveal, sane narrow-viewport behavior, and graph shells where graphs exist.

**Automation:** `tools/clickthrough/trust-regression-pass-1.mjs` was extended to cover these six modules for:

- Math / markup leak scan on the **Formeln** tab (notation-heavy surface).
- **Provenance footer** on **Formeln** (ⓘ mark + summary line), not only Theorie.
- **Aufgaben → “Lösung anzeigen”** → `.solution-block.show` for each module’s canonical concept (same IDs as provenance smoke list).
- **Graph integrity** for **IWB** (`ricardo`) and **Mathematik** (`funktionen_gleichungen`) in addition to existing Makro/Finanz graph cases.
- **Right-panel fallback** duplication / integrated-mistakes structure at **1199×900** and **390×844** on Theorie (same assertions as Statistik benchmark).
- **Horizontal overflow** spot on Theorie at **390×844** and **1200×900** per module.

**Run:** `cd tools/clickthrough && npm ci && npx playwright install chromium && node trust-regression-pass-1.mjs`  
**Result:** Exit code **0** — all checks passed (full suite including trusted-core cases and new secondary coverage).

**Browser equivalence (Part 8):** Playwright drives Chromium against the static `python3 -m http.server` root; each target module was exercised on at least **Theorie**, **Formeln** (where present), **Aufgaben** (reveal), **Graph** (where the module exposes a graph tab; Jahresabschluss intentionally has no graph layer per manifest), and **narrow / tablet overflow** on the canonical concept route. This satisfies the listed surfaces where the product provides a tab or feature.

## Issues found by module (automation + file review)

| Module | Issues found in this pass |
|--------|---------------------------|
| **makro1** | None failing automation. |
| **makro2** | None failing automation. |
| **finanzwirtschaft** | None failing automation. |
| **jahresabschluss** | None failing automation. Graph tab intentionally absent (empty `GRAPH_CONCEPTS`); regression does not assert a graph for this module. |
| **internationale-wirtschaftsbeziehungen** | None failing automation. |
| **mathematik** | None failing automation. |

**Residual honesty (not regressions):** Secondary modules remain **trust-bounded** relative to the trusted core: depth, curation density, and some UI richness differ by design. This pass does **not** certify source-diff parity.

## Files changed

| File | Change |
|------|--------|
| `tools/clickthrough/trust-regression-pass-1.mjs` | Added `SECONDARY_STABILITY` config; extended math-leak targets (Formeln); provenance checks on Formeln; graph cases for IWB + Mathematik; solution-reveal cases for all six; parameterized right-panel + overflow helpers; secondary loops. |

No content/CSS fixes were required in this pass because the extended regression completed green on the first full run after script changes.

## Browser / automation checks executed (per target module)

For each of the six modules, using the canonical concept in `SECONDARY_STABILITY` (`islm`, `mundell_fleming`, `liquiditaetsplanung`, `buchen_konten`, `ricardo`, `algebra_mengen`):

1. **Theorie:** provenance already covered in baseline `PROVENANCE_EXPECT`; overflow + right-panel fallback re-run on this tab for narrow viewports.
2. **Formeln:** math-leak text scan; provenance footer count / ⓘ / summary line length.
3. **Aufgaben:** tab open, first “Lösung anzeigen” (or equivalent) click, `.solution-block.show` present.
4. **Graph:** `ricardo` (IWB) and `funktionen_gleichungen` (Mathematik) included in `GRAPH_CASES` at **1400×900** and **1199×900**; **makro1**, **makro2**, **finanzwirtschaft** already in graph suite. **jahresabschluss** — N/A (no graph tab).
5. **Tablet / mobile:** `scrollWidth` vs viewport on Theorie; right-panel mirror duplication rules at 1199 and 390.

## Stabilization verdict table

| Module | Provenance status | Rendering status | Interaction status | Responsive status | Visual coherence status | Public embarrassment risk | Remaining caveat | Action result |
|--------|-------------------|------------------|--------------------|--------------------|---------------------------|----------------------------|------------------|----------------|
| makro1 | Pass: Theorie + Formeln footer (ⓘ + line) | Pass: no forbidden fragments on scanned Formeln surface | Pass: Aufgaben reveal | Pass: no dup Verbindungen / overflow on scanned concept | Coherent with portal-core renderer + shared right rail | Low | Not flagship depth; Makro I scope only | **stabilized and publicly acceptable** |
| makro2 | Pass (same) | Pass | Pass | Pass | Coherent; Mikro II–style advanced module policy unchanged (see AGENTS.md) | Low | No Mikro-II PDF corpus in repo; trust language stays bounded | **stabilized and publicly acceptable** |
| finanzwirtschaft | Pass (same) | Pass | Pass | Pass | Coherent | Low | Secondary financial depth, not full course lab | **stabilized and publicly acceptable** |
| jahresabschluss | Pass (same) | Pass | Pass | Pass | Coherent; graph layer absent by design | Low | No interactive graph tab; learners must infer from text/tasks | **stabilized and publicly acceptable** |
| internationale-wirtschaftsbeziehungen | Pass (same) | Pass | Pass | Pass | Coherent | Low | Graph set smaller than full syllabus surface area | **stabilized and publicly acceptable** |
| mathematik | Pass (same) | Pass | Pass | Pass | Coherent with curriculum-driven structure | Low | Mixed card/theory pipeline vs flagship semantic density | **stabilized and publicly acceptable** |

## Which modules are publicly acceptable as the secondary layer?

All **six** meet the **minimum** bar for this pass: **stabilized and publicly acceptable** as a **secondary** layer, with caveats above. None are rated “still not acceptable” or “improved but still visibly weak” under the automation + structural criteria used here.

## Follow-up (optional, out of scope for pass 1)

- Manual designer-led visual polish pass (spacing, hero parity) if product marketing demands closer flagship parity.
- Deeper provenance curation per module (separate audit lineage) without changing this stabilization verdict.
