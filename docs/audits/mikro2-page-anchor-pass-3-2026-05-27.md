# Mikro2 Page Anchor Pass 3 — Official Lecture Families

Date: 2026-05-27

## Scope

This pass upgrades the five newly reconstructed Mikro2 official lecture families from file-level provenance to reviewed page-level anchors.

The implementation deliberately stores anchor metadata only, not extracted source text. Each anchor carries source id, source path, public lecture label, page/slide locator, section title, confidence, review metadata, and a short topic fingerprint.

## Anchored Concepts

| Concept | Anchors | Pages |
|---|---:|---|
| `monopol_preissetzung` | 2 | Vorlesung 2, pages 1-2 |
| `preisdiskriminierung` | 3 | Vorlesung 3, pages 2-3; Vorlesung 4, page 2 |
| `intertemporaler_konsum` | 2 | Vorlesung 12, pages 1 and 5 |
| `unsicherheit_versicherung` | 4 | Vorlesung 13, pages 1 and 3; Vorlesung 14, pages 2-3 |
| `gleichgewicht_produktion` | 3 | Vorlesung 17, pages 1-3 |

## Code Changes

- Added `mikro2/js/data/sourceAnchors.js` as the Mikro2 reviewed anchor registry.
- Extended shared provenance metadata to accept optional `source_anchors`.
- Extended provenance normalization so concept layers can carry anchor arrays.
- Updated the provenance strip to display page-specific labels such as `Vorlesung 12 S. 1, 5` when anchors are available.
- Updated the generated current-state audit to count page anchors per module.

## Remaining Gaps

- These anchors are concept-level anchors, not yet formula-by-formula or task-by-task anchors.
- The rest of Mikro2 still needs page anchors, especially existing oligopoly, game theory, welfare, and information concepts.
- Official task-bank records remain incomplete.
- Companion PDF opening is not implemented yet; these anchors are the required metadata substrate for that UI.
