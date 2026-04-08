# Internationale Wirtschaftsbeziehungen (IWB) — provenance curation — pass 1

**Scope:** Verify **concept ↔ Vorlesungs-PDF** links using **actual** `source-materials` PDFs; add **`contentManifest.js`** + **bridge** with **file-level** primary refs only; **no** slide/page anchors; **no** invented exam PDFs.

**Date:** 2026-04-08

---

## 1. Exact files inspected

| Path | Role |
|------|------|
| `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/Vorlesungsfolien/IntWB1.pdf` … `IntWB12.pdf` | VL PDFs (content verification) |
| `source-materials/.../Zusätzliche_Literatur/*.pdf` | Optional secondaries where cited on VL title/program pages |
| `internationale-wirtschaftsbeziehungen/js/data/chapters.js` | **`CHAPTERS`** ids (12) |
| `internationale-wirtschaftsbeziehungen/js/data/stepProblems.js` | Step-problem presence |
| `internationale-wirtschaftsbeziehungen/js/data/intuition.js` | Intuition presence |
| `internationale-wirtschaftsbeziehungen/js/ui/graphPanel.js` | **`GRAPH_CONCEPTS`** |
| `internationale-wirtschaftsbeziehungen/js/data/fullExams.js` | **`FULL_EXAMS`** keys |
| `internationale-wirtschaftsbeziehungen/js/data/srsConfig.js` | Storage keys for mode index |
| `assets/js/portal-core/data/learningObjectNormalize.js` | **`buildProvenanceByConceptFromPrimaryRefs`** |
| `mikro1/js/data/contentManifest.js` | Structural template |

**Method:** `pdftotext -f 1 -l 2 <pdf> -` for each **IntWBn.pdf**; read **“Vorlesung n / Programm für heute”** and **Referenzen** blocks.

---

## 2. Verification summary (VL ↔ portal concept)

Portal order matches **Vorlesung 1…12** and **`chapters.js`** order. Each **IntWBn** program outline matches the corresponding **`CHAPTERS`** title/theme (Ricardo, H–O, Krugman, Zölle, Sanktionen/Quoten, WTO/Brexit, Wechselkurse, UIP/KKP, monetär/Fisher, Overshooting, Trilemma/Balassa-Samuelson).

**No `CHAPTERS` id was left without a primary VL file** after verification.

---

## 3. Exact concept ids anchored — exact source files

Paths are **relative to**  
`source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/`.

| Concept id | Primary ref(s) | Justification (from VL PDFs) |
|------------|----------------|------------------------------|
| `handelsfakten` | `Vorlesungsfolien/IntWB1.pdf` | VL1: Fakten, Gliederung, Zukunft des Handels. |
| | `Zusätzliche_Literatur/World_Trade_Statistical_Review_2023.pdf` | VL1 **“Wichtige Referenzen”** lists **WTO (2023): World Trade Statistical Review**; filename matches in-repo PDF. |
| `ricardo` | `Vorlesungsfolien/IntWB2.pdf` | VL2: Ricardo-Modell, Opportunitätskosten, komparativer Vorteil. |
| `heckscher_ohlin` | `Vorlesungsfolien/IntWB3.pdf` | VL3: Heckscher-Ohlin, Faktorausstattung, Verteilung. |
| `krugman` | `Vorlesungsfolien/IntWB4.pdf` | VL4: Intraindustrieller Handel, Krugman, Gravitation. |
| | `Zusätzliche_Literatur/Brülhart_WE2009.pdf` | VL4 **Referenzen** explicitly lists **Brülhart (2009), The World Economy**; in-repo filename **`Brülhart_WE2009.pdf`**. |
| `tarifmodell` | `Vorlesungsfolien/IntWB5.pdf` | VL5: Handelspolitik, Importnachfrage, Importzölle klein/groß Land. |
| `quoten_sanktionen` | `Vorlesungsfolien/IntWB6.pdf` | VL6: Zölle und Sanktionen, diskriminierende Zölle, Importquoten. |
| `wto_integration` | `Vorlesungsfolien/IntWB7.pdf` | VL7: multilaterale Abkommen, FTZ, Zollunionen, Brexit. |
| `wechselkurssysteme` | `Vorlesungsfolien/IntWB8.pdf` | VL8: Globale Makro, Grundlagen Wechselkurse. |
| `paritaeten` | `Vorlesungsfolien/IntWB9.pdf` | VL9: UIP (Kassa), Gesetz des einheitlichen Preises, KKP. |
| `monetaerer_ansatz` | `Vorlesungsfolien/IntWB10.pdf` | VL10: Monetäre Preisniveau-Theorie, Fisher, reale Zinsparität. |
| `overshooting` | `Vorlesungsfolien/IntWB11.pdf` | VL11: Finanzmarktansatz, kurz/lang Frist, überschießende Wechselkurse. |
| `trilemma` | `Vorlesungsfolien/IntWB12.pdf` | VL12: Trilemma, Balassa-Samuelson. |

---

## 4. Exact unresolved provenance gaps (intentional)

| Gap | Reason |
|-----|--------|
| **All concepts — slide/page granularity** | Platform helper only supports **file-level** `path` strings; no slide anchors added. |
| **`probeklausur_1` / `_2` / `_3`** | **`FULL_EXAM_PROVENANCE`:** `source_status: platform-added-drill`, **`source_refs: []`**. **No** exam-style PDF under GIWB tree was found (`find … *klausur*`, `*prob*` → empty). |
| **Intuition, step problems, graphs** | Layers keep **default** statuses from **`buildProvenanceByConceptFromPrimaryRefs`** (e.g. intuition **`platform-added-explanation`**, graph **`platform-added-explanation`**, stepProblems **`platform-added-drill`**); they **inherit** the same **`source_refs`** as theory for **traceability** only — **not** a claim that PDFs contain those exact strings/figures. |
| **Other `Zusätzliche_Literatur` PDFs** | Yale tariff chart, PIIE chart, Global Trade Outlook, **Literaturhinweise_VL6/7**, etc. **not** mapped to specific concept ids: either **not** named on the **first two pages** checked, or mapping to a single chapter would be **ambiguous** without a dedicated reading pass. **Not guessed.** |
| **Bibliographic PDFs cited only in VL6 footnotes** | e.g. Sturm et al. (2022) — **no** matching PDF filename in **`Zusätzliche_Literatur/`** → **cannot** anchor. |

---

## 5. Exact runtime / repo files changed

| File | Change |
|------|--------|
| `internationale-wirtschaftsbeziehungen/js/data/contentManifest.js` | **New:** `IWB_PRIMARY_REFS_CURATED`, `IWB_CONCEPT_PRIMARY_REFS`, `PROVENANCE_BY_CONCEPT`, `FULL_EXAM_PROVENANCE`, mode index, `getIwbContentManifestBridgePayload`, getters. |
| `internationale-wirtschaftsbeziehungen/js/main.js` | Import manifest; **`portalBridge`** sets **`window.__iwbContentManifest`**. |
| `internationale-wirtschaftsbeziehungen/js/data/courseConfig.js` | **`contentManifestVersion: '2026.1'`**; header comment update. |
| `assets/js/module-content.js` | IWB **`qualityNotes`**: replace stale “no manifest” line with pointer to manifest + this audit. |
| `docs/audits/iwb-provenance-curation-pass-1.md` | This report. |
| `docs/audits/iwb-status-parity-audit-pass-1.md` | Table rows: manifest present; **`main.js`** bridge. |
| `docs/audits/platform-status-cleanup-audit-pass-1.md` | IWB manifest row + gap list count. |
| `docs/audits/iwb-provenance-strategy-pass-1.md` | Follow-up pointer to this curation pass. |
| `docs/architecture/content-pipeline.md` | Phase 1 bullet: IWB manifest exists + link to this audit. |

---

## 6. Immediate safe curation outcome

- **Yes:** All **12** `CHAPTERS` ids have **non-empty** primary path list **supported** by VL1–12 program pages (plus **two** Zusatz-PDFs **explicitly** listed on VL1 / VL4).
- **Full exams:** Explicitly **not** grounded to a course PDF.

---

## 7. Recommended next pass (optional)

1. **Secondary refs:** Map **Literaturhinweise_VL6.pdf** / **VL7.pdf** only after confirming which VL they belong to and that portal sections cite them.  
2. **Policy PDFs** (Yale, PIIE, Global Outlook): assign to **`handelsfakten`** / **`tarifmodell`** / **`quoten_sanktionen`** only with **page-level** evidence.  
3. **Slide-level refs** (if product requires): extend schema / notes — out of scope here.

---

## 8. Relation to strategy doc

`docs/audits/iwb-provenance-strategy-pass-1.md` hypothesized the **IntWB1–12 ↔ concept** table; **this pass** **confirms** it with **pdftotext** evidence and **implements** the manifest.
