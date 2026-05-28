# Mikro2 Anchor Context In Companion Pass 28

Date: 2026-05-28

## Audit Finding

Pass 27 connected concept anchor rows to the Mikro2 source companion, but the companion only selected the source document. The exact anchor context that caused the jump, such as page label, section, provenance status, confidence, and review date, was lost after navigation.

That made the handoff useful for document coverage, but still weaker than the official-material companion goal of inspecting a concept, formula, or warning together with its precise source context.

## Plan

- Preserve only already-reviewed anchor metadata.
- Pass anchor title, section, areas, statuses, confidence, and review date into the companion.
- Show that context only when the selected document matches the originating anchor source.
- Clear the context when the student manually selects another source document.

## Implementation

- `assets/js/portal-core/ui/sourceProvenanceUi.js`
  - adds anchor context metadata to the `Browser` action
  - forwards the metadata through `window.__showSourceCompanion({ sourceId, anchorContext })`

- `mikro2/js/features/sourceCompanion.js`
  - stores optional anchor context with the selected source id
  - renders an `Aus Konzeptanker geöffnet` panel in the document detail
  - clears that panel on manual document selection

- `assets/css/premium-refinement.css`
  - styles the anchor-context panel for compact source inspection

## Source-Fidelity Decision

No new source claims were added. The companion displays only metadata already present in the reviewed concept anchor rows.

## Remaining Gaps

- The companion still does not scroll or highlight a specific PDF page preview inside the browser.
- Browser PDF page navigation still depends on the external PDF viewer for the direct `Öffnen` action.
- Mikro2 still needs official exercise, tutorial, solution, and exam materials before task provenance can be source-exhaustive.
