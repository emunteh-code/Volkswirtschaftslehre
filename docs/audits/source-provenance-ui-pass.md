# Source provenance UI pass

**Date:** 2026-04-12  
**Goal:** Add a **quiet, metadata-driven** provenance layer at the bottom of the main `#content` concept surface so students can align portal material with their own course documents—without inline citations, banners, or raw filenames.

---

## Design

- **Placement:** `<footer class="source-provenance">` appended to `#content` after each successful concept render (all tabs: Theorie, Grafik, Aufgaben, Formeln, Intuition, R-Anwendung when present).
- **Default line:** `Quelle: …` built from **human-readable labels** only (e.g. `Vorlesung 4`, `Übung 2`, `Tutorium 11`), derived from existing `contentManifest` **primary `source_refs` paths** via heuristics in `pathToHumanLabel` (never the raw path string in the UI).
- **Expandable detail:** If multiple **layer** lines differ (Theorie, Formeln, Grafik, Aufgaben, …), a **small ⓘ + chevron** button toggles a short list: `Theorie: …`, `Grafik: …`, `Aufgaben: …`, etc. Single-layer summaries that already match the one-line text stay **static** (no fake affordance).
- **Styling:** `premium-refinement.css` — faint border-top, ~11.5px muted type, optional hover wash on the trigger only; `max-width` aligned with reading measure so it does not span awkwardly on ultra-wide layouts.

---

## Data model (unchanged contract)

Runtime provenance remains **`PROVENANCE_BY_CONCEPT`** from each module’s `contentManifest.js`, built with:

- `createProvenance` / `buildProvenanceByConceptFromPrimaryRefs` (`assets/js/portal-core/data/provenance.js`, `learningObjectNormalize.js`).

The UI reads **`getConceptProvenance(conceptId)`** → per-layer objects with `source_status`, `source_refs` (repo-relative paths), optional `notes` (internal; not shown in the footer).

`data-source-confidence` on the footer exposes **`theory.source_status`** for future tooling only (not user-facing copy).

---

## Implementation map

| Area | File |
|------|------|
| Label heuristics + HTML + toggle | `assets/js/portal-core/ui/sourceProvenanceUi.js` |
| Append strip + wire `getConceptProvenance` | `assets/js/portal-core/ui/renderer.js` |
| Styles | `assets/css/premium-refinement.css` |
| Bridge getter (was missing) | `finanzwirtschaft/js/data/contentManifest.js` → `getConceptProvenance` |
| Module renderers (pass-through) | `mikro1`, `makro1`, `makro2`, `mikro2`, `statistik`, `mathematik`, `oekonometrie`, `finanzwirtschaft`, `recht`, `jahresabschluss`, `internationale-wirtschaftsbeziehungen` — each imports `getConceptProvenance` from local `contentManifest.js` and passes it into `createRenderer`. |

**Generated portal** (`assets/js/generated-portal/main.js`): continues to use the default `getConceptProvenance: () => null` until manifest-backed data is wired into that bundle; no strip is shown there yet.

---

## Label mapping (heuristics)

Implemented patterns include (non-exhaustive):

- Mikro I: `Mikro_1_VL_N` → **Vorlesung N**
- Statistik-style: `…/VL_NN_…` → **Vorlesung N** (leading zero stripped)
- Finanzwirtschaft StudIP tiles: `VN_StudIP.pdf` → **Vorlesung N**
- Übungsblätter / Tutorien: `Uebungsblatt_n`, `Tutorium_n`, `Tutorienblatt_n` → **Übung n** / **Tutorium n**
- Makro II: `slides_n.pdf` → **Vorlesungsfolien (Teil n)**; `Handout/…` → **Handout (Kursmaterial)**; generic `Folien/` → **Vorlesungsfolien (Modul)**
- Unmatched course folders → **Vorlesungsmaterial** (still no filename)

When refs exist but no pattern matches, layers fall back to **status-based** German phrases (e.g. Lernportal-Übung, Kurs-PDFs verzeichnet)—still no raw paths.

---

## Verification (manual)

1. Open a **mikro1** concept with known VL anchors (e.g. budget) → footer shows **Quelle: Vorlesung 1** (or union); expand shows Theorie / Formeln / Aufgaben lines.
2. Open **Statistik** `zwei_stichproben` → summary should include **Tutorium** + **Vorlesung** style labels from curated paths.
3. Open **Finanzwirtschaft** concept → **Vorlesung n** from `V*_StudIP.pdf` mapping.
4. Toggle **Grafik** / **Aufgaben** tabs → footer updates per concept (same metadata; summary union may repeat—by design).
5. Confirm **no PDF filenames** appear in the footer.

---

## Honesty / limits

- Labels are **heuristic** from path conventions used in manifests; they are **not** page-level academic citations.
- Where manifests use opaque names without a pattern, the UI stays deliberately coarse (**Vorlesungsmaterial** / status fallbacks)—no invented precision.
- **Generated** course shells without `getConceptProvenance` show **no** footer (preferred over wrong data).

---

## Completion assessment

- [x] Discreet row + optional expand; premium hierarchy preserved.
- [x] Metadata-driven via existing manifests + `getConceptProvenance`.
- [x] No inline citations; no raw filenames in UI.
- [x] Wired for all standard module renderers that already ship `contentManifest` getters; Finanzwirtschaft getter added.
