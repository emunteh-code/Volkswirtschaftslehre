# Mikro2 Document Layer Map Pass 31

Date: 2026-05-28  
Scope: Mikro2 official-material companion

## Finding

The companion exposed selected-document concept mappings and reviewed page anchors, but it still hid which portal layers were connected to a selected official document. That made a document look generally covered without showing whether the mapping belonged to theory, formulas, tasks, intuition, graphs, or Schnelltest drills.

## Change

- Added a selected-document portal-layer map derived from `PROVENANCE_BY_CONCEPT`.
- Each row shows:
  - concept
  - portal layer
  - source precision: `Seitenanker` or `Quellenreferenz`
  - canonical `source_status`
- Added a `Portalbereiche` count to the selected-document metadata.
- Kept page-level and reference-only distinctions visible so source-reference coverage is not mistaken for full page-level reconstruction.

## Source-Faithfulness Boundary

This pass does not create new mappings or academic substance. It only renders existing provenance fields already present in the Mikro2 content manifest. Reference-only rows remain explicitly marked as needing page-level reconstruction.

## Files Changed

- `mikro2/js/features/sourceCompanion.js`
- `assets/css/premium-refinement.css`
- `docs/audits/mikro2-document-layer-map-pass-31-2026-05-28.md`

## Remaining Gaps

- Mikro2 still needs full page-level reconstruction across every official lecture PDF.
- Reference-only portal layers are not yet precise enough for source-complete status.
- No official Mikro2 exercise, tutorial solution, Probeklausur, or old-exam task corpus is registered.
- Adaptive readiness remains limited because task evidence is still platform-authored rather than official-task backed.
