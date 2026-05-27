# Mikro2 Source Companion Unanchored Concepts Pass 15 - 2026-05-27

## Finding

The Mikro2 source companion already shows which official documents map into portal concepts. It does not yet make the reverse source-boundary problem prominent: current portal concepts that have no direct official source path or page anchor.

The current unanchored concepts are:

- `externa_pigou`
- `externa_institutionen`
- `public_goods`

## Risk

Students using the companion mode should be able to answer both questions:

- Which official source documents are covered by the portal?
- Which portal items are not directly covered by the official source corpus?

Without the second view, the companion mode is still biased toward source documents and less useful as an exam-honesty checker.

## Implementation Target

- Add a companion-mode panel listing current portal concepts without direct official source anchors.
- Make each listed concept navigable back to the portal concept page.
- Keep the language explicit: these items are supplemental platform support and not exam-proven Mikro II source content.
- Do not hide or delete the supplemental concepts.

## Implemented

- Added reverse coverage detection to `mikro2/js/features/sourceCompanion.js` for concepts with no source paths and no page anchors.
- Added a `Portalinhalt ohne direkten Quellenanker` panel to the Mikro2 Quellenbrowser.
- The panel lists the current supplemental concepts and links each back into the concept page via `window.__navigate(...)`.
- Added companion-panel styling in `assets/css/premium-refinement.css`.

## Validation

- `node --check mikro2/js/features/sourceCompanion.js`
- `git diff --check`
- Node provenance check returned exactly:
  - `externa_pigou`
  - `externa_institutionen`
  - `public_goods`
- Browser smoke test at `http://127.0.0.1:4188/mikro2/index.html?qa=1`: `window.__showSourceCompanion()` rendered the new panel, showed `3 Konzepte bleiben supplemental`, listed Pigou, Coase/Emissionshandel, and Öffentliche Güter, and did not list source-backed `Cournot- und Bertrand`.

## Changed Files

- `mikro2/js/features/sourceCompanion.js`
- `assets/css/premium-refinement.css`
- `docs/audits/mikro2-source-companion-unanchored-concepts-pass-15-2026-05-27.md`

## Definition of Done for This Pass

- The Mikro2 Quellenbrowser shows a `Portalinhalt ohne direkten Quellenanker` panel.
- The panel lists `externa_pigou`, `externa_institutionen`, and `public_goods`.
- Clicking a listed concept navigates to that concept.
- Source-backed concepts are not listed in this warning panel.
- The portal remains deployable.

## Remaining Gaps

- The companion still cannot open official PDFs in deployed mode because the source PDFs live under local `source-materials/` and are not deployed.
- Official exercise sheets, solution keys, Probeklausuren, and old exams are still missing from the available Mikro2 corpus.
