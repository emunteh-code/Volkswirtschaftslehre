# Mikro2 Source Companion Inspector Pass 8 - 2026-05-27

## Finding

Mikro2 concept pages already expose a quiet provenance footer, but the expandable detail only shows compact public labels such as `Vorlesung 6 S. 3`. That is useful for low-noise reading, but not enough for official-material companion mode. Students need to inspect the precise source file, page, section, topic status, confidence, and review date behind a portal item.

## Scope

This pass adds a source-inspector layer to the existing provenance footer. It does not add direct PDF opening yet because `source-materials/` is intentionally ignored from git and therefore cannot be assumed to exist in a deployed site. Rendering broken PDF buttons would violate the no-dead-controls rule.

## Implementation Target

- Keep the compact provenance line unchanged.
- When page-level source anchors exist, make the provenance footer expandable even if all visible layer labels collapse to one line.
- Show one deduplicated source-inspector entry per anchor.
- Include:
  - source file path inside the official local corpus
  - page/slide locator
  - source status
  - layer areas covered
  - section label
  - confidence
  - last reviewed date
- Do not create inert PDF-opening controls.

## Definition of Done for This Pass

- Mikro2 anchored concepts show source-inspector rows in the provenance footer.
- Concepts without anchors keep existing provenance behavior.
- The inspector uses existing source-anchor metadata only.
- The UI remains deployable without committed source PDFs.

## Implemented

- Added a shared source-inspector section to expandable concept provenance footers.
- Deduplicated repeated anchors across theory, formulas, tasks, graph, intuition, and Prüfungstransfer layers.
- Exposed source file, page/slide locator, section, covered areas, topic status, confidence, and reviewed date.
- Preserved the compact provenance summary line for normal reading.
- Avoided PDF-opening controls until source PDFs are deployed or a local-only file opener is available.

## Validation

- JavaScript syntax check passed for the shared provenance UI.
- Mikro2 source-anchor metadata validation confirmed all 47 anchors include source path, page, confidence, and review date.
- Browser smoke test confirmed expandable source-inspector rows for representative anchored Mikro2 concepts.

## Remaining Gaps

- Direct PDF opening is still not implemented because `source-materials/` is ignored from git and would create dead controls on deployed builds.
- The companion mode still needs a source-document index UI where students can select a lecture PDF and see all derived portal items.
- Official exercise-sheet companion workflows remain blocked by missing official Mikro2 exercise and solution-key files.

## Changed Files

- `assets/js/portal-core/ui/sourceProvenanceUi.js`
- `assets/css/premium-refinement.css`
- `docs/audits/mikro2-source-companion-inspector-pass-8-2026-05-27.md`
