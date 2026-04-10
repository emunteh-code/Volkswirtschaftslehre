# Audit-Driven Unresolved-Issues Closure Pass 1

Date: 2026-04-10  
Repo: `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4`

## Scope

This pass treated the audit corpus as the defect backlog and targeted only unresolved items that were still:

- explicitly open
- explicitly partial
- deferred but still high-value
- or visibly still below benchmark after code inspection

This was **not** a broad new audit and **not** a new reconstruction pass.

## Audit inventory

I first inventoried the quality-oriented audit corpus under `docs/audits/` and grouped the relevant documents into backlog categories.

### Release / readiness / closure inventory

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/full-learning-portal-forensic-audit-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/release-priority-audit-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/release-readiness-summary-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/release-smoke-test-audit-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/release-clickthrough-audit-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/release-candidate-freeze-pass-1.md`

### Platform-wide parity / product quality inventory

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/portal-backbone-trust-parity-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/flagship-density-equalization-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/shared-r-exam-surface-polish-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/project-wide-graph-visual-parity-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/project-wide-mikro1-graph-inheritance-repair-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/visual-shell-navigation-parity-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/benchmark-gap-audit-pass-1.md`

### Module-specific benchmark / density inventory

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/makro1-content-enrichment-pass-2.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/jahresabschluss-content-enrichment-pass-2.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/finanzwirtschaft-benchmark-reconstruction-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/mathematik-module-benchmark-closure-pass-2.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/mathematik-concept-page-benchmark-closure-pass-1.md`

### Provenance / blocked-status inventory

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/mikro2-source-identity-resolution-pass-1.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/mikro2-status-guard-pass-2.md`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/mikro2-quarantine-roadmap-pass-1.md`

## Audit docs selected as relevant backlog inputs

These were the actual authoritative backlog inputs for this pass:

1. `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/full-learning-portal-forensic-audit-pass-1.md`
2. `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/portal-backbone-trust-parity-pass-1.md`
3. `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/flagship-density-equalization-pass-1.md`
4. `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/shared-r-exam-surface-polish-pass-1.md`
5. `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/project-wide-graph-visual-parity-pass-1.md`
6. `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/release-candidate-freeze-pass-1.md`
7. `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/mikro2-status-guard-pass-2.md`

Reason: these seven documents still contained the clearest open / partial / deferred items that affected release confidence, benchmark parity, or product trust.

## Unresolved backlog extracted from the audit corpus

After deduplication, the highest-value unresolved items were:

| Rank | Issue | Source audit(s) | Status in audit | Scope | Root-cause type | Severity |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `mathematik` home/overview still does not foreground `Fehlerprotokoll` directly enough | `portal-backbone-trust-parity-pass-1` | partial | `mathematik` backbone surface | module-local backbone parity | high |
| 2 | `makro1` still has next-tier weak flagship pages: `politikmix`, `erwartungen` | `flagship-density-equalization-pass-1` | open | `makro1` concept pages | module-local density gap | high |
| 3 | `jahresabschluss` still has next-tier weak flagship pages: `inventur_inventar_bilanzansatz`, `verbindlichkeiten` | `flagship-density-equalization-pass-1` | open | `jahresabschluss` concept pages | module-local density gap | high |
| 4 | `finanzwirtschaft` still has next-tier weak flagship pages: `bezugsrecht`, `eigenkapitalkosten` | `flagship-density-equalization-pass-1` | open | `finanzwirtschaft` concept pages | module-local density gap | high |
| 5 | shared R surfaces are improved but still somewhat editor-first on some local blocks | `shared-r-exam-surface-polish-pass-1`, `release-candidate-freeze-pass-1` | partial | shared + module-local R surfaces | systemic but lower-leverage in one pass | medium |
| 6 | `mikro2` still lacks true source-corpus parity | `mikro2-status-guard-pass-2`, `release-candidate-freeze-pass-1` | blocked | `mikro2` | blocked by missing source corpus | high but blocked |

## Ranked unresolved-issues shortlist used before coding

This pass used the following explicit ranked shortlist before any new edits:

1. `mathematik` home/overview `Fehlerprotokoll` parity
2. `makro1`: `politikmix`, `erwartungen`
3. `jahresabschluss`: `inventur_inventar_bilanzansatz`, `verbindlichkeiten`
4. `finanzwirtschaft`: `bezugsrecht`, `eigenkapitalkosten`
5. shared R pages still somewhat editor-first
6. `mikro2` source-corpus parity blocked

## Issues chosen for this pass and why

Selected top slice:

- `mathematik` home/overview parity
- `makro1` density closure on the two exact pages named in the audit
- `finanzwirtschaft` density closure on the two exact pages named in the audit
- `jahresabschluss` revalidation of the two exact pages named in the audit

Why this slice:

- all are directly user-visible
- all were explicitly left open in prior audits
- all materially affect benchmark parity vs `mikro1`
- all were bounded enough to close in one pass

Why shared R and `mikro2` were not selected here:

- shared R was explicitly recorded as improved but non-blocking; the remaining gap is real but lower-leverage than the unresolved flagship-density pages
- `mikro2` source-corpus parity is blocked by missing source materials and not fixable in this pass

## Exact files changed

Files edited in this pass:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mathematik/js/ui/renderer.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro1/js/data/chapters.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/finanzwirtschaft/js/data/chapters.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/audit_driven_unresolved_issues_closure_pass1.mjs`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/audit-driven-unresolved-issues-closure-pass-1.md`

Important note:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/jahresabschluss/js/data/chapters.js` was **not newly edited in this pass**. It was revalidated because the audit backlog still listed those pages as open, but the current local workspace already had materially denser content there.

## Exact fixes made

### 1. `mathematik` home / `Fehlerprotokoll` parity

Previously flagged by:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/portal-backbone-trust-parity-pass-1.md`

Previous status:

- partial

What changed now:

- added a direct `Fehlerprotokoll` action card to the `mathematik` home action row
- the card uses live mistake-log count when present
- the card copies the stronger backbone wording already expected from the shared learner-product surfaces

Why this closes the issue:

- the surface no longer hides mistake review behind secondary navigation
- `mathematik` now participates more directly in the same learner-backbone action model as stronger modules

### 2. `makro1` `politikmix`

Previously flagged by:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/flagship-density-equalization-pass-1.md`

Previous status:

- open

What changed now:

- added theory chunks for:
  - shift vs movement
  - short-run to medium-run continuation
- added a new crowding-out chain anchor
- added more exam-facing trap tasks

Why this closes the issue:

- the page now teaches interpretation and policy chain reading, not just the headline rule
- it now sits at flagship density instead of feeling like a compact note page

### 3. `makro1` `erwartungen`

Previously flagged by:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/flagship-density-equalization-pass-1.md`

Previous status:

- open

What changed now:

- added theory chunks for:
  - announcement vs surprise timing
  - exam pattern for expectation tasks
- added a real-interest expectation anchor
- added transfer tasks around permanence, credibility, and exam routine

Why this closes the issue:

- the page now teaches the expectation channel and timing logic more like a flagship `mikro1` page

### 4. `finanzwirtschaft` `bezugsrecht`

Previously flagged by:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/flagship-density-equalization-pass-1.md`

Previous status:

- open

What changed now:

- added theory chunks for:
  - Bezugsverhältnis and fixed calculation routine
  - cum/ex/wealth-position distinction
- added a third anchor formula:
  - `P_0 = P_ex + BR`
- added tasks that explicitly force:
  - anti-“gift” interpretation
  - safe exam sequence

Why this closes the issue:

- the page is now much stronger on method-selection and wealth-preservation logic, not just formula recital

### 5. `finanzwirtschaft` `eigenkapitalkosten`

Previously flagged by:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/flagship-density-equalization-pass-1.md`

Previous status:

- open

What changed now:

- added theory chunks for:
  - when Gordon fits and when it does not
  - `D₁` vs `D₀` interpretation
- added a third anchor formula:
  - Gordon condition with `k_E > g`
- added tasks on:
  - `D₁` vs `D₀`
  - model checks before interpretation

Why this closes the issue:

- the page now teaches model validity and decision reading instead of leaving Gordon as a bare plug-in formula

### 6. `jahresabschluss` revalidation

Previously flagged by:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/docs/audits/flagship-density-equalization-pass-1.md`

Previous status:

- open in that audit snapshot

What changed now:

- no new code edits in this pass
- instead, I revalidated the current workspace state because the pages already appeared denser than the old audit described

Why this matters:

- the backlog item was stale relative to the current local state
- this pass therefore avoided redundant filler edits and treated the current pages as revalidated rather than blindly “fixed again”

## Verification performed

### Syntax / import verification

Ran:

- `node --check mathematik/js/ui/renderer.js`
- `node --check makro1/js/data/chapters.js`
- `node --check jahresabschluss/js/data/chapters.js`
- `node --check finanzwirtschaft/js/data/chapters.js`
- `node --check .qa/audit_driven_unresolved_issues_closure_pass1.mjs`
- dynamic import verification for `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/finanzwirtschaft/js/data/chapters.js`

Verification note:

- browser verification surfaced a real runtime regression in `finanzwirtschaft/js/data/chapters.js` during this pass
- the regression was fixed immediately before closure was claimed

### Browser verification

Verifier:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/audit_driven_unresolved_issues_closure_pass1.mjs`

Artifacts:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/audit-driven-unresolved-issues-closure-pass-1/`

Verified surfaces:

- `mathematik` home
- `makro1 / politikmix`
- `makro1 / erwartungen`
- `jahresabschluss / inventur_inventar_bilanzansatz`
- `jahresabschluss / verbindlichkeiten`
- `finanzwirtschaft / bezugsrecht`
- `finanzwirtschaft / eigenkapitalkosten`

Browser result:

- `findings: []`

Key measured outcomes:

- `mathematik` home shows direct `Fehlerprotokoll` action card
- `makro1 / politikmix`: `5` theory sections, `3` formula cards, `18` task cards
- `makro1 / erwartungen`: `5` theory sections, `3` formula cards, `18` task cards
- `jahresabschluss / inventur_inventar_bilanzansatz`: `5` theory sections, `3` formula cards, `18` task cards
- `jahresabschluss / verbindlichkeiten`: `5` theory sections, `3` formula cards, `18` task cards
- `finanzwirtschaft / bezugsrecht`: `5` theory sections, `3` formula cards, `18` task cards
- `finanzwirtschaft / eigenkapitalkosten`: `6` theory sections, `3` formula cards, `18` task cards

## Status after this pass for each touched issue

| Issue | Previous audit status | Status after this pass | Notes |
| --- | --- | --- | --- |
| `mathematik` home does not foreground `Fehlerprotokoll` directly | partial | closed | Direct action card now exists and was browser-verified |
| `makro1 / politikmix` too compact | open | closed | Density materially raised and browser-verified |
| `makro1 / erwartungen` too compact | open | closed | Density materially raised and browser-verified |
| `jahresabschluss / inventur_inventar_bilanzansatz` too compact | open | closed | No new edit; current workspace state revalidated as already materially improved |
| `jahresabschluss / verbindlichkeiten` too compact | open | closed | No new edit; current workspace state revalidated as already materially improved |
| `finanzwirtschaft / bezugsrecht` too compact | open | closed | Density raised and browser-verified |
| `finanzwirtschaft / eigenkapitalkosten` too compact | open | closed | Density raised and browser-verified |
| `finanzwirtschaft` runtime stability after patch | not previously listed; surfaced during this pass | closed | Verification caught a real parse/runtime error and it was fixed immediately |

## Highest-value unresolved issues still remaining after this pass

These remain the highest-value unresolved backlog items from the audit corpus:

1. Shared R surfaces are still somewhat editor-first on some module-local blocks  
Status: partially improved  
Why still open: the shared shell is much better, but some local R block authoring still makes the surface feel more like an editor than a concept-first flagship learning page.

2. `mikro2` source-corpus parity  
Status: blocked  
Why still open: explicitly blocked by missing source materials; cannot be honestly closed without a real Mikro II corpus.

3. Dashboard / mistake-review remain browser-local learner tools  
Status: acceptable but still open as a limitation  
Why still open: this is no longer a release blocker, but it remains a structural limitation noted in release-candidate audits.

## Judgment

This pass materially burned down the highest-value unresolved items that were still open in the audit backlog and fixable in one bounded slice.

Most important outcome:

- the old audit backlog around `mathematik` home parity, `makro1` compact policy pages, and the late `finanzwirtschaft` method-selection cluster is now closed
- the `jahresabschluss` items named in the backlog were revalidated as already closed in the current workspace state, so this pass did not waste effort on redundant filler edits

Net effect:

- backlog integrity improved
- benchmark parity improved where it was still visibly weak
- no false closure claims were made
