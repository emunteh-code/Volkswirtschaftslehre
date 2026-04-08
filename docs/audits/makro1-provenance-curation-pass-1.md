# Makro I (makro1) Provenance Curation — Pass 1

## Scope

- **Primary:** `MAKRO1_CONCEPT_PRIMARY_REFS` and `FULL_EXAM_PROVENANCE` source paths in `makro1/js/data/contentManifest.js`.
- Align declared paths with **actual** files under `source-materials/Makroökonomik I/Makroökonomik I/`.
- No portal theory, drills, or graph changes.

## Path convention (canonical)

All manifest paths are **relative to**:

`source-materials/Makroökonomik I/Makroökonomik I/`

## Exact files inspected

| Path | Use |
|------|-----|
| `docs/audits/makro1-source-grounded-audit-pass-1.md` | Concept ↔ VL/Übung/Tutorium coverage; **explicit** note on `Uebungen` vs `Übungen` and `Tutorienblatt-3` vs `Tutorienblatt_3` |
| `docs/audits/makro1-pilot-migration.md` | Original pilot rationale for `MAKRO1_CONCEPT_PRIMARY_REFS` |
| `assets/js/module-content.js` (`makro1` roadmap) | Cross-check: VL ordering and practice sources |
| `makro1/js/data/chapters.js` | Canonical **14** `CHAPTERS[].id` |
| `makro1/js/data/contentManifest.js` | Target manifest |
| On-disk listing under `…/Vorlesungen/`, `…/Zusammenfassungen/`, `…/Übungen/`, `…/Tutorium/` | **Byte-accurate** filenames (incl. `Übung3.pdf`, `Tutorienblatt_3.pdf`, Klausur `(1)` suffixes) |

## Exact files changed

1. `makro1/js/data/contentManifest.js`
   - Normalized **broken** primary refs to existing paths (see below).
   - Updated **full-exam** `source_refs` to Klausur PDFs that exist in the current mirror.
2. `docs/audits/makro1-provenance-curation-pass-1.md` — this report.

## Curatorial actions (what changed and why)

| Issue | Correction |
|-------|------------|
| Folder typo `Uebungen/` (does not exist) | Replaced with **`Übungen/`** (matches repository folder name). |
| `Übung3` linked under wrong directory | **`Übungen/Übung3.pdf`** |
| ASCII-only `Uebungen/Uebung5.pdf` (missing) | **`Übungen/Übung5.pdf`** |
| `Tutorium/Tutorienblatt-3.pdf` (missing) | **`Tutorium/Tutorienblatt_3.pdf`** (underscore; on-disk name). |
| `Klausur_2018_Haupttermin.pdf` / `Klausur_2022_Haupttermin.pdf` missing | **`Klausur_2018_Haupttermin (1).pdf`**, **`Klausur_2022_Haupttermin (1).pdf`** (artifact of the stored export; verified `fs.existsSync`). |

Concept-level **VL / Zusammenfassung** pairings were already correct; only Übung/Tutorium/Klausur strings required repair.

## Exact concept ids now anchored (14 / 14)

| Concept id | Primary source file(s) |
|------------|-------------------------|
| `makro_rahmen` | `Vorlesungen/VL_1.pdf`, `Zusammenfassungen/Makro I VL1.pdf` |
| `vgr` | `Vorlesungen/VL_2.pdf`, `Zusammenfassungen/Makro I VL2.pdf` |
| `guetermarkt` | `Vorlesungen/VL_3.pdf`, `Zusammenfassungen/Makro I VL3.pdf`, `Übungen/Übung3.pdf` |
| `multiplikator` | `Vorlesungen/VL_3.pdf`, `Zusammenfassungen/Makro I VL3.pdf`, `Übungen/Übung3.pdf`, `Tutorium/Tutorienblatt_3.pdf` |
| `geldnachfrage` | `Vorlesungen/VL_4.pdf`, `Zusammenfassungen/Makro I VL4.pdf` |
| `banken` | `Vorlesungen/VL_4.pdf`, `Zusammenfassungen/Makro I VL4.pdf`, `Tutorium/Tutorium4.pdf` |
| `islm` | `Vorlesungen/VL_5.pdf`, `Zusammenfassungen/Makro I VL5.pdf` |
| `politikmix` | `Vorlesungen/VL_5.pdf`, `Zusammenfassungen/Makro I VL5.pdf`, `Übungen/Übung5.pdf` |
| `realzins_fisher_erwartungen` | `Vorlesungen/Kap6.pdf`, `Zusammenfassungen/Makro I VL6.pdf` |
| `realzins_risikopraemie_krisenkanal` | `Vorlesungen/Kap6.pdf`, `Zusammenfassungen/Makro I VL6.pdf`, `Übungen/Übung5.pdf` |
| `arbeitsmarkt` | `Vorlesungen/VL_7.pdf`, `Zusammenfassungen/Makro I VL7.pdf` |
| `phillips` | `Vorlesungen/VL_8.pdf`, `Zusammenfassungen/Makro I VL8.pdf`, `Tutorium/Tutorienblatt_6_Makro_1.pdf` |
| `islmpc` | `Vorlesungen/VL_8.pdf`, `Zusammenfassungen/Makro I VL8.pdf` |
| `erwartungen` | `Vorlesungen/VL_8.pdf`, `Zusammenfassungen/Makro I VL8.pdf` |

## Full-exam provenance

| Exam id | `source_refs` paths (relative to inner Makro I folder) |
|---------|--------------------------------------------------------|
| `probeklausur_1`, `probeklausur_2`, `probeklausur_3` | `Klausur_2018_Haupttermin (1).pdf`, `Klausur_2022_Haupttermin (1).pdf` |

`source_status` remains **`platform-added-drill`** with honest notes (portal-authored probeklausur, not a single pasted paper).

## Exact unresolved concepts

- **None** among the **14** chapter ids: each has a non-empty, verified path list.

## Exact unresolved provenance gaps

| Gap | Reason |
|-----|--------|
| **Slide/page anchors** | Not in scope; VL PDFs are whole-deck references. |
| **`module-content.js` spelling** | May still show `Uebungen` in prose lists; **not** updated in this pass (manifest-only curation). |
| **Klausur filename `(1)` suffix** | Reflects the current zip/export mirror; if a canonical rename removes the suffix, manifest paths must be updated again. |
| **Alternate duplicates** | Other Klausur copies (e.g. Nachtermin, dated exports) exist but are **not** wired unless a future pass selects a canonical set. |

## Verification

- `node --check makro1/js/data/contentManifest.js` passes.
- Every path in `MAKRO1_CONCEPT_PRIMARY_REFS` and in `FULL_EXAM_PROVENANCE[].source_refs` was checked with `path.join(innerMakroDir, ref)` + `fs.existsSync` — **all found** after normalization.

## Outcome

Makro I provenance is **fully anchored** at file level for all portal concepts, with **filesystem-accurate** Übungs- and Tutorium-Pfaden and **resolvable** Klausur references for full-exam metadata.
