# Source-Boundary Readiness Gate Pass

Date: 2026-06-08

## Finding

The exam-operating-system readiness gate treated every concept as if it required a direct official source reference and page anchor. That was too blunt for concepts intentionally marked as supplemental platform support.

Concrete case:

- Mikro2 has three current concepts without official VL page anchors:
  - `externa_pigou`
  - `externa_institutionen`
  - `public_goods`
- Prior source-ingest and source-boundary passes already established that these are platform-added support blocks, not direct-source Mikro II reconstruction.
- The portal correctly marks their layers as `platform-added-explanation` or `platform-added-drill`, with no direct anchors.

## Change

The generated audit now separates:

- `sourceEligibleConcepts`: concepts that need official source refs and page anchors.
- `sourceBoundaryConcepts`: concepts whose provenance is explicitly platform-added and unanchored.

The readiness gate now evaluates source-ref and anchor coverage over source-eligible concepts only, while still displaying the platform-boundary count in the evidence table.

## Why

This preserves the project rule that no academic substance may be disguised as source-backed. A source-faithful portal should not fabricate anchors for platform-added support. It should make the boundary visible and keep final readiness blocked by the real remaining gates, especially official task-bank completeness.

## Remaining Risk

This does not make Mikro2 final. Mikro2 remains blocked by missing reviewed official-task-source families and full exam-bank parity. It only prevents explicitly labeled supplemental support from being misreported as missing source work.
