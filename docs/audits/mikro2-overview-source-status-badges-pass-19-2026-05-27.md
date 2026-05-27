# Mikro2 Overview Source Status Badges Pass 19

Date: 2026-05-27

## Audit Finding

Mikro2 now exposes source boundaries inside individual supplemental concepts, the dashboard, mastery, and the source companion. The remaining high-visibility gap was the first navigation layer: the sidebar and home concept grid listed source-backed and supplemental concepts with the same visual treatment. A student could therefore click into `Externe Effekte` or `Öffentliche Güter` without seeing up front that these are platform-added support without direct official Mikro-II anchors.

## Plan

- Derive compact source summaries from the existing `PROVENANCE_BY_CONCEPT` metadata.
- Add sidebar badges for every Mikro2 concept:
  - `Quelle` for concepts with page anchors
  - `Referenz` for concepts with source refs but no page anchors
  - `Supplemental` for platform-added concepts with no direct official source refs or anchors
- Add the same status to the home concept cards through a renderer hook, keeping the shared renderer optional and non-invasive for other modules.
- Keep source-status text compact so the navigation remains usable on narrow screens.

## Implementation

- `mikro2/js/data/contentManifest.js`
  - adds `getConceptSourceSummary(conceptId)` as the single source-status helper

- `mikro2/js/ui/navigation.js`
  - renders source badges in the sidebar from provenance metadata
  - adds status titles for hover/context

- `assets/js/portal-core/ui/renderer.js`
  - adds optional `getConceptSourceSummary` hook
  - renders home-card source badges only when a module supplies the hook

- `mikro2/js/ui/renderer.js`
  - passes Mikro2 source summaries into the shared renderer

- `mikro2/css/styles.css`
  - styles compact source badges for sidebar and home concept cards

## Source-Fidelity Decision

No academic content was changed. This pass improves launch/status honesty by making existing provenance status visible before topic entry.

## Remaining Gaps

- Supplemental concepts still need official source anchors or should remain explicitly platform-added.
- Other modules do not yet provide the optional home-card source summary hook; this pass intentionally stays scoped to Mikro2.
