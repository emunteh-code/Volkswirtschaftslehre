# Makro2 provenance curation — pass 1

## Scope

- **Goal:** Replace non-authoritative `coursework_text/*.txt` manifest anchors with **file-level** references under the audited Makro II tree, only where the link is clearly supportable from existing materials and prior audit notes.
- **Out of scope:** Portal theory HTML rewrites, slide/page-level anchors, `assets/js/module-content.js` roadmap text (still lists `coursework_text` for human readers).

## Exact files inspected (this pass)

### Prior audit (read for alignment)

- `docs/audits/makro2-source-grounded-audit-pass-1.md`

### Portal structures (read)

- `makro2/js/data/contentManifest.js` (before/after edit)
- `makro2/js/data/chapters.js` (concept ids and titles)
- `assets/js/module-content.js` (makro2 `qualityNotes` + per-concept `sources` roadmap, lines ~248–386)

### Source tree (listed; every manifest path existence-checked)

- Root: `source-materials/Makroökonomik II/Makroökonomik II/`
- `Folien/slides_00.pdf` … `slides_07.pdf`
- `Handout/Makro2_handout_V25.2.pdf`, `Handout/Formeln.pdf`
- `Übungen/Uebungsblatt_1.pdf` … `Uebungsblatt_10.pdf` (folder name on disk is Unicode NFD: `U` + combining diaeresis + `bungen`; manifest uses NFC `Übungen` — verified `fs.existsSync` from Node resolves all referenced files on this workspace)
- `Tutorien/Tutorienblatt_1.pdf` … `Tutorienblatt_6.pdf` (non-suffix variants only; duplicate numbered variants e.g. `Tutorienblatt_12.pdf` exist but were not used as primary anchors)

### Existence verification

- All strings in `MAKRO2_PRIMARY_REFS_CURATED` were checked with `path.join(sourceRoot, rel)` + `fs.existsSync` (Node); result: **all paths present**.

## Exact files changed

| File | Change |
|------|--------|
| `makro2/js/data/contentManifest.js` | Introduced `MAKRO2_PRIMARY_REFS_CURATED` with PDF paths relative to `source-materials/Makroökonomik II/Makroökonomik II/`; `MAKRO2_CONCEPT_PRIMARY_REFS` is now `Object.fromEntries(CHAPTERS.map(...))` so every chapter id has an explicit array; updated `NOTES_THEORY` to point at this audit doc. |

No other files were modified in this pass.

## Base path for all anchors

All `source_refs` paths below are **relative to:**

`source-materials/Makroökonomik II/Makroökonomik II/`

## Exact concept ids now anchored (20 / 20)

Every id in `CHAPTERS` has a **non-empty** primary ref list. None were left empty.

| Concept id | Source files used for primary anchors |
|------------|----------------------------------------|
| `zahlungsbilanz` | `Folien/slides_01.pdf`, `Tutorien/Tutorienblatt_1.pdf` |
| `wechselkurs` | `Folien/slides_01.pdf`, `Übungen/Uebungsblatt_1.pdf`, `Tutorien/Tutorienblatt_1.pdf` |
| `kaufkraftparitaet` | `Folien/slides_01.pdf`, `Übungen/Uebungsblatt_1.pdf`, `Tutorien/Tutorienblatt_1.pdf` |
| `zinsparitaet` | `Folien/slides_01.pdf`, `Übungen/Uebungsblatt_1.pdf`, `Tutorien/Tutorienblatt_1.pdf` |
| `offene_is` | `Folien/slides_02.pdf`, `Übungen/Uebungsblatt_2.pdf`, `Tutorien/Tutorienblatt_2.pdf` |
| `nettoexporte` | `Folien/slides_02.pdf`, `Übungen/Uebungsblatt_2.pdf`, `Tutorien/Tutorienblatt_2.pdf` |
| `marshall_lerner` | `Folien/slides_02.pdf`, `Übungen/Uebungsblatt_2.pdf`, `Tutorien/Tutorienblatt_2.pdf` |
| `geldmengen` | `Folien/slides_03.pdf`, `Übungen/Uebungsblatt_3.pdf` |
| `mundell_fleming` | `Folien/slides_03.pdf`, `Übungen/Uebungsblatt_3.pdf` |
| `wk_regime` | `Folien/slides_04.pdf`, `Übungen/Uebungsblatt_3.pdf`, `Übungen/Uebungsblatt_4.pdf`, `Tutorien/Tutorienblatt_3.pdf` |
| `wk_krisen` | `Folien/slides_04.pdf`, `Übungen/Uebungsblatt_4.pdf` |
| `phillipskurve` | `Folien/slides_05.pdf`, `Übungen/Uebungsblatt_5.pdf`, `Tutorien/Tutorienblatt_4.pdf` |
| `zeitinkonsistenz` | `Folien/slides_05.pdf`, `Übungen/Uebungsblatt_5.pdf`, `Tutorien/Tutorienblatt_4.pdf` |
| `barro_gordon` | `Folien/slides_05.pdf`, `Übungen/Uebungsblatt_5.pdf`, `Tutorien/Tutorienblatt_4.pdf` |
| `taylor_regel` | `Folien/slides_07.pdf`, `Handout/Formeln.pdf`, `Übungen/Uebungsblatt_7.pdf`, `Tutorien/Tutorienblatt_5.pdf` |
| `aggregierte_pf` | `Übungen/Uebungsblatt_8.pdf`, `Tutorien/Tutorienblatt_5.pdf` |
| `solow_basis` | `Übungen/Uebungsblatt_9.pdf`, `Tutorien/Tutorienblatt_6.pdf` |
| `tech_fortschritt` | `Übungen/Uebungsblatt_10.pdf`, `Tutorien/Tutorienblatt_6.pdf` |
| `schuldenquote_dynamik` | `Folien/slides_06.pdf`, `Übungen/Uebungsblatt_6.pdf` |
| `schuldenfinanzierung_monetarisierung` | `Folien/slides_06.pdf`, `Übungen/Uebungsblatt_6.pdf` |

### Rationale (why these links are treated as supportable)

- **Folien `slides_01`–`slides_07`:** Aligned with the course slide sequence (Kapitel markers on the slide PDFs: open economy / goods market / interest–FX / regimes / credibility / fiscal / monetary summary). Used where the chapter theme matches the portal concept block (e.g. open-economy basics on `slides_01`–`02`, policy credibility block on `slides_05`, fiscal/debt on `slides_06`, monetary policy summary and Taylor-related material on `slides_07`).
- **Übungen / Tutorien:** Matched to the **same sheet numbers** already used in `assets/js/module-content.js` (makro2 roadmap) and corroborated by `makro2-source-grounded-audit-pass-1.md` for representative sheets (e.g. Übungen 3, 5, 6, 10; Tutorien 4–6).
- **`geldmengen`:** Previously `[]` in the manifest; filled with `slides_03.pdf` (money/interest/FX chapter in the Folien sequence) plus `Uebungsblatt_3.pdf` (same worksheet line as Mundell–Fleming in the portal roadmap).
- **Growth trio (`aggregierte_pf`, `solow_basis`, `tech_fortschritt`):** **No** Folien file was added here in pass 1, because pass 1 did not extract in-PDF proof that a specific `slides_XX.pdf` is the dedicated Solow/PF chapter (avoiding guessed slide-to-topic mapping). Anchors rely on **Übungen + Tutorien** that the roadmap and audit already tie to growth practice.
- **`Handout/Formeln.pdf`:** Added **only** for `taylor_regel`, where a formula handout anchor is structurally appropriate and low-risk; not sprayed across all concepts to avoid implying page-level grounding we did not verify.

## Exact unresolved provenance gaps (intentional empties and limitations)

### 1. Full exam documents — `source_refs` still empty

| Key | Status | Why it remains empty |
|-----|--------|----------------------|
| `FULL_EXAM_PROVENANCE.probeklausur_1` | `source_refs: []` | No course-provided archival Klausur PDF was located at the Makro II source root to attach without guessing. Provenance note already states portal-authored drill. |
| `FULL_EXAM_PROVENANCE.probeklausur_2` | same | same |
| `FULL_EXAM_PROVENANCE.probeklausur_3` | same | same |

**Reason (explicit):** Adding a file path would require a **known** official exam PDF path in `source-materials`; inventing or assuming a filename would violate the no-guess rule.

### 2. No slide/page anchors inside PDFs

- Manifest carries **file paths only**. **Unresolved:** `page`, `slide`, or `section` fields were not added anywhere because this pass did not extract or verify internal PDF structure for each concept.

### 3. `Makro2_handout_V25.2.pdf` not in primary ref lists

- The prior audit states broad support for open-economy topics in this handout. **Unresolved for pass 1:** Per-concept assignment without re-reading the full PDF for subsection boundaries would be weakly defensible. Pass 1 preferred **Folien + Übungen + Tutorien** for those concepts.

### 4. `Folien/slides_00.pdf` unused

- **Reason:** Treated as course intro/organization; no one-to-one mapping to a single `CHAPTERS` concept without opening and confirming content. Not guessed.

### 5. Human roadmap vs manifest

- `assets/js/module-content.js` (makro2) still references `coursework_text/*.txt` in `sources` arrays. **Unresolved in this pass:** Provenance curation was limited to `contentManifest.js`; updating the roadmap strings is a separate, optional consistency pass.

### 6. `coursework_text` removed from manifest anchors

- **Reason:** `coursework_text` extracts are **derivations**, not the academic primary files named in `source-materials/`. The prior audit recommended direct Folien/Handout/Übung/Tutorium paths for audit transparency.

## Deliverable checklist

| Item | Status |
|------|--------|
| Exact files changed | `makro2/js/data/contentManifest.js`, `docs/audits/makro2-provenance-curation-pass-1.md` |
| Concept ids anchored | All 20 ids in `makro2/js/data/chapters.js` |
| Source files per anchor | Table above |
| Unresolved / empty | `FULL_EXAM_PROVENANCE` `source_refs`; plus documented limitations (no in-PDF anchors, handout not per-concept, `slides_00`, module-content roadmap) |

## Syntax check

- `node --check makro2/js/data/contentManifest.js` — exit code 0.
