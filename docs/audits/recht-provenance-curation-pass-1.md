# Recht provenance curation — pass 1

## Scope

- **Goal:** Attach **file-level** `source_refs` in `recht/js/data/contentManifest.js` only where concept → PDF links are clearly supportable from the **already-used** course tree and the portal roadmap, without inventing page/paragraph anchors.
- **Out of scope:** Rewrites of `chapters.js` theory HTML, `module-content.js` prose, or broad drill changes.

## Exact files inspected (this pass)

### Portal / manifest

- `recht/js/data/contentManifest.js` (before and after)
- `recht/js/data/chapters.js` (concept ids and order)
- `recht/js/data/fullExams.js` (full-exam document ids for provenance keys)

### Roadmap used as the curation bridge (explicit source filenames)

- `assets/js/module-content.js` — block `recht:` (`roadmap` entries with `sources` arrays, lines ~1339–1399; `sourceGroups` for context only)

### Prior audits (context, not substituted for disk check)

- `docs/audits/recht-concept-granularity-audit-pass-1.md`
- `docs/audits/recht-migration.md`

### Source tree (listed; every manifest path existence-checked)

- Root: `source-materials/Recht/Recht/`
- `Vorlesungen/` — twelve `§_*-K.pdf` lecture units (plus one `.zip` not used as an anchor)
- `Übungen/` — exercise PDFs, definitions/methodik helpers (exact filenames verified on disk)

### Existence verification

- All strings referenced in `RECHT_PRIMARY_REFS_CURATED` were checked with `path.join(sourceRoot, rel)` + `fs.existsSync` (Node): **all present**.

## Exact files changed

| File | Change |
|------|--------|
| `recht/js/data/contentManifest.js` | Added `RECHT_PRIMARY_REFS_CURATED` with paths relative to `source-materials/Recht/Recht/`; `RECHT_CONCEPT_PRIMARY_REFS` built from `CHAPTERS` + curated map; updated `NOTES_THEORY`. |
| `docs/audits/recht-provenance-curation-pass-1.md` | This audit (new). |

## Base path for all anchors

Paths in the manifest are **relative to:**

`source-materials/Recht/Recht/`

## Exact concept ids now anchored (14 / 14)

Every `CHAPTERS` id has a **non-empty** primary ref list. **No chapter concept was left empty.**

| Concept id | Primary source files |
|------------|----------------------|
| `was_ist_recht` | `Vorlesungen/§_1_Was_ist_Recht-K.pdf` |
| `privatrecht` | `Vorlesungen/§_2_Privatrecht-K.pdf` |
| `methodik` | `Vorlesungen/§_3_Juristische_Methodik-K.pdf`, `Übungen/Juristische_Gliederungsebenen_im_Gutachten.pdf` |
| `willenserklaerung` | `Vorlesungen/§_4_Willenserklärung,_Vertragsschluss-K.pdf`, `Übungen/SoSe_5.5.2025_2._Einheit.pdf`, `Übungen/Übersicht_Definitionen.pdf` |
| `dissens` | `Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf`, `Übungen/SoSe_2025_Einheit_3.pdf` |
| `anfechtung` | `Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf`, `Übungen/SoSe_2025_Einheit_3.pdf` |
| `trennung_abstraktion` | `Vorlesungen/§_6_Verpflichtungs-_und_Verfügungsgeschäfte-K.pdf`, `Übungen/SoSe_2025_Einheit_3.pdf` |
| `geschaeftsfaehigkeit` | `Vorlesungen/§_7_Rechts-_und_Geschäftsfähigkeit-K.pdf`, `Übungen/SoSe_2025_Einheit_3.pdf`, `Übungen/_Einheit_3_Übersicht_beschr._Geschäftsfähigkeit.pdf` |
| `stellvertretung` | `Vorlesungen/§_8_Stellvertretung-K.pdf` |
| `agb` | `Vorlesungen/§_9_AGB-Recht-K.pdf` |
| `schuldrecht_intro` | `Vorlesungen/§_10_Schuldrecht_AT_-_Einführung-K.pdf` |
| `schadensersatz` | `Vorlesungen/§_11_Schuldrecht_AT_-_Schadenersatz-K.pdf` |
| `ruecktritt` | `Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf` |
| `verbraucherwiderruf` | `Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf` |

### Why these links are treated as supportable

- **One-to-one lecture line:** Units § 1–12 in `Vorlesungen/` match the numbered roadmap titles and the split concepts in `CHAPTERS` (including separate `dissens` / `anfechtung` and `ruecktritt` / `verbraucherwiderruf` after granularity work — both pairs still share the **same** lecture PDF where the course bundles the material; the audit notes distinct tracks *inside* that file).
- **Übungen only where the roadmap names them:** Extra PDFs were added only when `module-content.js` listed that exact file for that roadmap row (methodik, willenserklaerung, dissens/anfechtung block, trennung, geschaeftsfaehigkeit).
- **`dissens` and `anfechtung`:** Same Vorlesungs-PDF and Übung as the single roadmap entry “Dissens und Anfechtung”; splitting into two concept ids does not create two different primary files — both pipelines are taught from that unit.

## Exact unresolved concepts (`CHAPTERS`)

- **None.** All fourteen chapter concepts have curated primary refs.

## Exact unresolved provenance gaps (intentional limitations)

### 1. Full exams — `source_refs` remain empty

| Key | Status | Why empty |
|-----|--------|-----------|
| `FULL_EXAM_PROVENANCE.probeklausur_1` | `source_refs: []` | Portal-authored Probeklausur; no named archival Klausur PDF in `source-materials/Recht/Recht/` was identified to attach without guessing. |
| `FULL_EXAM_PROVENANCE.probeklausur_2` | same | same |
| `FULL_EXAM_PROVENANCE.probeklausur_3` | same | same |

### 2. No in-PDF anchors

- **Unresolved:** Page, slide, or §-span fields were not added; this pass is **file-level only**.

### 3. Concepts with Vorlesung-only refs

- `stellvertretung`, `agb`, `schuldrecht_intro`, `schadensersatz`: the roadmap lists **only** the corresponding `Vorlesungen/§_*-K.pdf` for those rows. **`SoSe_2025_Einheit_4.pdf`**, **`5._Einheit__SoSe2025__26.5.2025.pdf`**, **Fallskript** PDFs, and **secondary articles** (JuS/ZJS) were **not** mapped per concept because `module-content.js` does not tie those filenames to a single concept id in the `roadmap[].sources` arrays.
- **Reason:** Assigning them would require guessing which exercise session primarily belongs to § 8 vs § 9 vs § 10–11.

### 4. `sourceGroups` vs disk filenames

- `module-content.js` lists e.g. `Uebungen/Ipsen_Rehder_ZJS_2023_751.pdf` and `Lorenz_JuS_2019_852.pdf`; on disk the files use **different punctuation** (e.g. commas in the JuS/ZJS filenames). Those were **not** used as manifest anchors in pass 1 to avoid a mismatched path.
- **Pass 2:** Align roadmap strings to exact on-disk names, then optionally add methodik-related secondary refs if still desired.

### 5. Vorlesungen zip archive

- `Lecture_B.WIWI-OPH.0009_...zip` in `Vorlesungen/` was not used (bundle, not a single curated unit PDF for one concept).

## Syntax check

- `node --check recht/js/data/contentManifest.js` — exit code 0.

## Deliverable summary

| Deliverable | Detail |
|-------------|--------|
| Files changed | `recht/js/data/contentManifest.js`, `docs/audits/recht-provenance-curation-pass-1.md` |
| Concept ids anchored | All 14 ids in `recht/js/data/chapters.js` |
| Source files per concept | Table above |
| Unresolved chapter concepts | None |
| Unresolved / empty | Full-exam `source_refs`; optional materials not mapped per concept (see gaps) |
