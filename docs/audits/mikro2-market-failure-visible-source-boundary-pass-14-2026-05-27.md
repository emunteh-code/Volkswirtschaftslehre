# Mikro2 Market-Failure Visible Source Boundary Pass 14 - 2026-05-27

## Finding

The Mikro2 provenance manifest correctly marks `externa_pigou`, `externa_institutionen`, and `public_goods` as platform-added supplemental material because no direct primary anchor was found in the available official Mikro II corpus.

The student-facing concept pages still opened directly into the explanatory theory, formulas, tasks, and graphs. A student could therefore miss the source-boundary distinction unless they opened the provenance layer.

## Risk

This creates an exam-honesty risk: supplemental market-failure material could look like official Mikro II exam-proven content. That violates the rule that actual course materials are the academic source of truth.

## Implementation Target

- Keep the pedagogically useful supplemental pages and graphs available.
- Add a visible source-boundary notice at the top of each unanchored market-failure theory page.
- Add the same boundary notice to the graph panels for the unanchored externality/institution graphs.
- Make the notice explicit that the material is platform-added support and not certified as official Mikro II exam content until an official source anchor exists.

## Implemented

- Added a reusable `MARKET_FAILURE_SOURCE_BOUNDARY` notice in `mikro2/js/data/chapters.js`.
- Prepended that notice to `externa_pigou`, `externa_institutionen`, and `public_goods`.
- Added supplemental graph notices in `mikro2/js/ui/graphPanel.js` for `externa_pigou` and `externa_institutionen`.
- Added `source-boundary-notice` styling in `mikro2/css/styles.css` so the notice remains visually distinct without being treated as a mistake warning by the shared warning system.

## Validation

- `node --check mikro2/js/data/chapters.js && node --check mikro2/js/ui/graphPanel.js`
- `git diff --check`
- Browser smoke test at `http://127.0.0.1:4188/mikro2/index.html?qa=1`:
  - `externa_pigou`: theory notice visible, graph notice visible
  - `externa_institutionen`: theory notice visible, graph notice visible
  - `public_goods`: theory notice visible
  - `oligopol_cournot_bertrand`: no supplemental source-boundary notice, confirming source-backed concepts are unaffected

## Changed Files

- `mikro2/js/data/chapters.js`
- `mikro2/js/ui/graphPanel.js`
- `mikro2/css/styles.css`
- `docs/audits/mikro2-market-failure-visible-source-boundary-pass-14-2026-05-27.md`

## Definition of Done for This Pass

- The three unanchored Mikro2 market-failure concept pages show the source-boundary notice in the main learning flow.
- The two related graph panels show the source-boundary notice before the graph.
- Source-backed Mikro2 concepts are not affected.
- The portal remains deployable.

## Remaining Gaps

- These three concepts still do not count toward Mikro2 source-anchor completion.
- They should stay excluded from exam-proven readiness until official Mikro II source material is supplied or the concepts are moved out of the official Mikro2 path.
