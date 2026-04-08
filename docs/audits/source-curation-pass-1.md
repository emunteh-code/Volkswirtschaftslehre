# Source curation pass 1 (mikro1, makro1, makro2)

**Date:** 2026-04-08  
**Scope:** Provenance/source-anchor curation only for `mikro1`, `makro1`, `makro2`.

## Summary

- `makro1`: already had strong per-concept source anchors; no new anchors added in this pass.
- `makro2`: added per-concept anchors where they can be mapped confidently from `assets/js/module-content.js` (`makro2` roadmap sources).
- `mikro1`: remains unresolved for per-concept anchors in this pass because there is no equivalent curated source-map with stable concept-level path mapping in current in-repo structure.

No content rewrite, no pedagogy redesign, no runtime behavior change.

## Exact files changed

- `makro2/js/data/contentManifest.js`
- `docs/audits/source-curation-pass-1.md`

## Audit by module

### mikro1

- **Current state:** `MIKRO1_CONCEPT_PRIMARY_REFS` is empty for all concepts.
- **Curation result:** unchanged (intentionally).
- **Reason:** no explicit `module-content` concept roadmap or equivalent source mapping for `mikro1` exists in `assets/js/module-content.js`; adding paths would require guesswork from inferred topic names.

### makro1

- **Current state:** `MAKRO1_CONCEPT_PRIMARY_REFS` already populated with lecture/summary/tutorial/übung anchors.
- **Curation result:** unchanged.
- **Reason:** existing mapping is already explicit and aligned to the `makro1` source roadmap.

### makro2

- **Current state before pass:** `MAKRO2_CONCEPT_PRIMARY_REFS` empty for all concepts.
- **Curation result:** populated where roadmap-title/source alignment is explicit in `assets/js/module-content.js` (`makro2` section).

## Exact source anchors added (makro2)

- `zahlungsbilanz` → `coursework_text/Tutorienblatt_1.txt`
- `wechselkurs` → `coursework_text/Uebungsblatt_1.txt`, `coursework_text/Tutorienblatt_1.txt`
- `kaufkraftparitaet` → `coursework_text/Uebungsblatt_1.txt`, `coursework_text/Tutorienblatt_1.txt`
- `zinsparitaet` → `coursework_text/Uebungsblatt_1.txt`, `coursework_text/Tutorienblatt_1.txt`
- `offene_is` → `coursework_text/Uebungsblatt_2.txt`, `coursework_text/Tutorienblatt_2.txt`
- `nettoexporte` → `coursework_text/Uebungsblatt_2.txt`, `coursework_text/Tutorienblatt_2.txt`
- `marshall_lerner` → `coursework_text/Uebungsblatt_2.txt`, `coursework_text/Tutorienblatt_2.txt`
- `mundell_fleming` → `coursework_text/Uebungsblatt_3.txt`
- `wk_regime` → `coursework_text/Tutorienblatt_3.txt`, `coursework_text/Uebungsblatt_3.txt`, `coursework_text/Uebungsblatt_4.txt`
- `wk_krisen` → `coursework_text/Uebungsblatt_4.txt`
- `phillipskurve` → `coursework_text/Tutorienblatt_4.txt`, `coursework_text/Uebungsblatt_5.txt`
- `zeitinkonsistenz` → `coursework_text/Tutorienblatt_4.txt`, `coursework_text/Uebungsblatt_5.txt`
- `barro_gordon` → `coursework_text/Tutorienblatt_4.txt`, `coursework_text/Uebungsblatt_5.txt`
- `taylor_regel` → `coursework_text/Tutorienblatt_5.txt`, `coursework_text/Uebungsblatt_7.txt`
- `aggregierte_pf` → `coursework_text/Tutorienblatt_5.txt`, `coursework_text/Uebungsblatt_8.txt`
- `solow_basis` → `coursework_text/Tutorienblatt_6.txt`, `coursework_text/Uebungsblatt_9.txt`
- `tech_fortschritt` → `coursework_text/Uebungsblatt_10.txt`, `coursework_text/Tutorienblatt_6.txt`
- `schuldenquote` → `coursework_text/Uebungsblatt_6.txt`

## Exact unresolved provenance gaps

1. **mikro1: all concept anchors unresolved**
   - No curated source map entry exists in `assets/js/module-content.js` for `mikro1`.
   - Needs manual course-source curation before safe anchor attachment.

2. **makro2: `geldmengen` unresolved**
   - No explicit one-to-one roadmap/source block in current `module-content` mapping cleanly isolates this concept.
   - Left intentionally empty to avoid over-claiming source specificity.

## What requires manual/source-level curation later

- Add explicit `module-content` (or equivalent canonical map) for `mikro1` with stable source file paths per concept.
- Add a dedicated makro2 source-map entry for `geldmengen` (or split/annotate existing roadmap items) so anchor assignment is unambiguous.
- After curation, bump manifest version(s) where needed and record provenance deltas per concept.
