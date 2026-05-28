# Mikro2 Companion Anchor Page Open Pass 29

Date: 2026-05-28

## Audit Finding

Pass 28 preserved concept-anchor context in the Mikro2 source companion, but the companion's local open button still used the selected document root. When a student entered the companion from a reviewed anchor, the direct source action should preserve the anchor page target already available in the provenance row.

## Plan

- Pass the existing anchor source URL, including `#page=`, into the companion.
- Keep normal source-browser behavior unchanged when no anchor context exists.
- Check file availability against the PDF path without the hash fragment.
- Make the button label explicit when it opens an anchor target.

## Implementation

- `assets/js/portal-core/ui/sourceProvenanceUi.js`
  - forwards the anchor `sourceUrl` through the `Browser` action context

- `mikro2/js/features/sourceCompanion.js`
  - uses `anchorContext.sourceUrl` for the local source button when available
  - labels the button `Lokale Ankerquelle öffnen`
  - strips hash fragments before the `HEAD` availability check
  - displays the direct anchor target in the context panel

## Source-Fidelity Decision

No new source mappings or academic content were added. The pass only preserves an existing reviewed anchor URL through the companion workflow.

## Remaining Gaps

- PDF page fragments still depend on browser/PDF-viewer support.
- The companion does not yet embed a PDF preview or highlight the exact slide/page inside the portal.
- Mikro2 task provenance remains incomplete until official task materials are provided and mapped.
