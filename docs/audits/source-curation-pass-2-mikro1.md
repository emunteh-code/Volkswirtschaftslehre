# Source Curation Pass 2 — mikro1

## Scope
- Module only: `mikro1`
- Focus only: provenance/source-anchor curation in `mikro1/js/data/contentManifest.js`
- Rules applied: no guessing, no fake completion, no content rewrite.

## Audit summary
- Current manifest state in `mikro1/js/data/contentManifest.js`:
  - `MIKRO1_CONCEPT_PRIMARY_REFS` remains empty for all concept ids.
- Searched for stable in-repo mapping signals across:
  - `mikro1` chapter/concept organization (`mikro1/js/data/chapters.js`)
  - module-level source mapping files (`assets/js/module-content.js`)
  - existing audit/architecture references (`docs/audits/source-curation-pass-1.md`, related docs)
  - embedded/source-reference patterns in `mikro1/js/data/*`.

## Findings for defensible concept->source mapping
- No canonical `mikro1` entry with stable per-concept source paths exists in `assets/js/module-content.js`.
- `mikro1/js/data/chapters.js` provides concept taxonomy and pedagogy structure, but not authoritative source-file anchors for original course materials.
- `mikro1` data files (`chapters`, `intuition`, `stepProblems`, `fullExams`, `masteryData`) contain authored platform content, not explicit source-path metadata that can be safely reused as course-source anchors.
- Existing pass-1 note remains valid: no confident path-level provenance map is derivable from current repo state without guesswork.

## Anchors added in this pass
- **None** (intentionally).
- Reason: no stable, defensible concept-to-source path mapping signal was found for `mikro1` in current repository assets.

## Manifest change made
- File: `mikro1/js/data/contentManifest.js`
- Change:
  - Added explicit pass-2 rationale comment above `MIKRO1_CONCEPT_PRIMARY_REFS` clarifying why refs remain empty.
- Behavior impact:
  - None (metadata/comment-only clarity update).

## Exact unresolved provenance gaps
- All `mikro1` concepts currently unresolved for per-concept source anchors:
  - `kmm`, `budget`, `praeferenz`, `indiff`, `ordinal`, `grs`, `lagrange`, `psubst`, `pkomp`, `cobbd`, `ces_u`, `homothet`, `hausopt`, `marshall`, `elast`, `normal`, `hicks`, `ausgaben`, `shephard`, `indnutzen`, `lambda`, `slutsky`, `anfang`, `arbeit`, `cv_ev`, `produktion`, `grts`, `skalener`, `kosten`, `gk_dk`, `gewinn`, `markt`, `monopol`.

## Exact reasons gaps remain
1. Missing canonical source-map entry for `mikro1` in `assets/js/module-content.js` (no stable path anchors to bind concepts to).
2. Available `mikro1` files encode platform-authored pedagogy and drills, not explicit course-material path provenance.
3. Any concept-to-source path assignment would currently require topic-name inference and therefore violate no-guess/no-fake rules.

## Exact files changed
- `mikro1/js/data/contentManifest.js`
- `docs/audits/source-curation-pass-2-mikro1.md`
