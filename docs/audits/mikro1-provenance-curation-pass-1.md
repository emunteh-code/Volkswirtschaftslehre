# Mikro1 Provenance Curation — Pass 1

## Scope

- Provenance curation only: concept-level primary refs from **Mikro I course materials** in `source-materials/Mikroökonomik I/Mikroökonomik I/`.
- No portal theory/drill content rewrites.

## Exact files inspected

| Path | Use |
|------|-----|
| `source-materials/Mikroökonomik I/Mikroökonomik I/Weitere_Unterlagen/Vorlesungsplanung_Mikroökonomik_I.pdf` | Terminplan SS 2025 (VL-Nummern ↔ Wochen); **keine** Themenmatrix |
| `source-materials/Mikroökonomik I/Mikroökonomik I/Vorlesungsfolien/Mikro_1_VL_1.pdf` … `Mikro_1_VL_18.pdf` | Programmfolien + Fließtext (extrahiert mit `pdftotext`) |
| `source-materials/Mikroökonomik I/Mikroökonomik I/Vorlesungsfolien/Mikro_1_VL_5_EmpirischeElastizitaeten.pdf` | Empirische Elastizitätsbeispiele |
| `source-materials/Mikroökonomik I/Mikroökonomik I/Weitere_Unterlagen/CobbDouglas_CES.pdf` | Stichprobe: **Produktions**-CES/CD-Ergänzung zu VL 11 — nicht für Konsum-`ces_u` als Primärersatz verwendet |
| `docs/audits/source-curation-pass-2-mikro1.md` | Vorheriger Stand (leere Refs) |
| `mikro1/js/data/contentManifest.js` | Ziel für `MIKRO1_CONCEPT_PRIMARY_REFS` |
| `assets/js/module-content.js` | Ziel für faktischen `mikro1`-Block |

## Path convention (canonical)

Alle Primärpfade in `MIKRO1_CONCEPT_PRIMARY_REFS` sind **relativ zum inneren Kursordner**:

`source-materials/Mikroökonomik I/Mikroökonomik I/`

(analog zu `makro1`, wo Pfade relativ zu `source-materials/Makroökonomik I/Makroökonomik I/` sind).

## Exact files changed

1. `mikro1/js/data/contentManifest.js` — `MIKRO1_CONCEPT_PRIMARY_REFS` aus Kuratierung + Merge über alle `CHAPTERS`-Ids.
2. `assets/js/module-content.js` — neuer `mikro1`-Eintrag mit `sourceGroups`, `roadmap` (aus VL-Titelseiten/Programm) und `qualityNotes`.
3. `docs/audits/mikro1-provenance-curation-pass-1.md` — dieser Bericht.

## Exact concept ids now anchored (32 von 33)

Primäranker = Vorlesungsfolien-PDF(s), soweit das **Programm oder der Fließtext der jeweiligen VL** den Portal-Begriff eindeutig trägt.

| Concept id | Primary source file(s) | Kurze Begründung (Fakt aus Material) |
|------------|------------------------|----------------------------------------|
| `kmm` | `Vorlesungsfolien/Mikro_1_VL_1.pdf` | Fließtext: „Konsum(möglichkeiten)menge (KMM)“, Abgrenzung zur Budgetmenge |
| `budget` | `Vorlesungsfolien/Mikro_1_VL_1.pdf` | Programm „Budgetbeschränkung“; Folien zu Budgetmenge und Budgetgerade |
| `praeferenz` | `Vorlesungsfolien/Mikro_1_VL_2.pdf` | Programm: Präferenzen / Präferenzrelation |
| `indiff` | `Vorlesungsfolien/Mikro_1_VL_2.pdf` | Programm: Indifferenzkurven |
| `ordinal` | `Vorlesungsfolien/Mikro_1_VL_2.pdf` | Programm: Nutzenfunktionen (allgemein); ordinaler Rahmen vor CD/CES in späteren VL |
| `grs` | `Vorlesungsfolien/Mikro_1_VL_2.pdf` | Programm: Grenzrate der Substitution |
| `lagrange` | `Vorlesungsfolien/Mikro_1_VL_2.pdf`, `Vorlesungsfolien/Mikro_1_VL_4.pdf` | VL2: Exkurs Nebenbedingung; VL4: Nutzenmaximierung / BEO im Zusammenhang |
| `cobbd` | `Vorlesungsfolien/Mikro_1_VL_4.pdf` | Programm: Cobb-Douglas-Beispiel |
| `ces_u` | `Vorlesungsfolien/Mikro_1_VL_3.pdf`, `Vorlesungsfolien/Mikro_1_VL_4.pdf` | VL3: Substitutionselastizität der Nutzenfunktion; VL4: CES-Nutzen-Beispiel |
| `homothet` | `Vorlesungsfolien/Mikro_1_VL_3.pdf` | Programm: homothetische Nutzenfunktionen |
| `hausopt` | `Vorlesungsfolien/Mikro_1_VL_3.pdf`, `Vorlesungsfolien/Mikro_1_VL_4.pdf` | VL3: graphische Bestimmung; VL4: Tangentialbedingung / Marshall |
| `marshall` | `Vorlesungsfolien/Mikro_1_VL_4.pdf` | Programm: Marshallsche Nachfrage, allgemeine Herleitung |
| `elast` | `Vorlesungsfolien/Mikro_1_VL_5.pdf`, `Vorlesungsfolien/Mikro_1_VL_5_EmpirischeElastizitaeten.pdf` | VL5: komparative Statik, Nachfragekurven; Zusatzfolie: empirische Elastizitäten |
| `normal` | `Vorlesungsfolien/Mikro_1_VL_5.pdf` | Fließtext: normale vs. inferiore Güter, Engelkurven, Einkommenselastizität |
| `hicks` | `Vorlesungsfolien/Mikro_1_VL_6.pdf` | Programm: Ausgabenminimierung und Hickssche Nachfrage |
| `ausgaben` | `Vorlesungsfolien/Mikro_1_VL_6.pdf` | Programm: Ausgabenfunktion |
| `shephard` | `Vorlesungsfolien/Mikro_1_VL_6.pdf` | Programm/Fließtext: Shephards Lemma |
| `indnutzen` | `Vorlesungsfolien/Mikro_1_VL_6.pdf` | Programm: indirekte Nutzenfunktion, Roys Identität |
| `lambda` | `Vorlesungsfolien/Mikro_1_VL_2.pdf`, `Vorlesungsfolien/Mikro_1_VL_4.pdf` | Lagrange-Exkurs (VL2) und formale Nutzenmaximierung (VL4) |
| `slutsky` | `Vorlesungsfolien/Mikro_1_VL_7.pdf`, `Vorlesungsfolien/Mikro_1_VL_8.pdf` | VL7: Slutsky-Gleichung; VL8: vertiefende Beispiele |
| `anfang` | `Vorlesungsfolien/Mikro_1_VL_8.pdf` | Programm: Slutsky bei Anfangsausstattung |
| `pkomp` | `Vorlesungsfolien/Mikro_1_VL_8.pdf` | Programm/Fließtext: Leontief-Nutzenfunktion (perfekte Komplemente im Standardfall) |
| `arbeit` | `Vorlesungsfolien/Mikro_1_VL_9.pdf` | Programm: Arbeitsangebot, Freizeit, Lohnänderung |
| `cv_ev` | `Vorlesungsfolien/Mikro_1_VL_10.pdf` | Programm: CV, EV, Konsumentenrente, Vergleich der Maße |
| `produktion` | `Vorlesungsfolien/Mikro_1_VL_11.pdf` | Programm: Produktionstechnologie und Produktionsfunktionen |
| `skalener` | `Vorlesungsfolien/Mikro_1_VL_11.pdf` | Programm: homogene Produktionsfunktionen, proportionale Inputvariation |
| `grts` | `Vorlesungsfolien/Mikro_1_VL_12.pdf` | Fließtext: GRTS im Kostenminimierungskontext |
| `kosten` | `Vorlesungsfolien/Mikro_1_VL_12.pdf` | Programm: Kostenminimierung, bedingte Faktornachfragen, Kostenfunktionen |
| `gewinn` | `Vorlesungsfolien/Mikro_1_VL_13.pdf`, `Vorlesungsfolien/Mikro_1_VL_14.pdf` | VL13: Gewinnmax, Angebot; VL14: grafische Darstellung, kurzfristige Gewinnmax |
| `gk_dk` | `Vorlesungsfolien/Mikro_1_VL_15.pdf` | Programm: kurzfristige Kostenminimierung, kurz- und langfristige Kostenkurven |
| `markt` | `Vorlesungsfolien/Mikro_1_VL_16.pdf` | Programm: Wettbewerbsmarkt, Marktgleichgewicht |
| `monopol` | `Vorlesungsfolien/Mikro_1_VL_17.pdf`, `Vorlesungsfolien/Mikro_1_VL_18.pdf` | VL17: Monopol, Wohlfahrt; VL18: Beispiel, Preisdiskriminierung |

## Exact unresolved provenance gaps

### `psubst` — intentionally empty

- **Reason:** Volltextsuche über alle `Mikro_1_VL_*.pdf` (per `pdftotext` + Stichworte zu perfekten Substituten / linearer Nutzen in der üblichen Form) ergab **keinen** eindeutigen Treffer.
- Ohne explizite VL-Stelle ist eine Zuordnung zu `Vorlesungsfolien/...` **nicht** verteidigbar (keine Erfindung eines Ankers).

### `Vorlesungsplanung_Mikroökonomik_I.pdf`

- **Nicht** als Primärpfad pro Konzept verwendet: enthält nur **Wochen ↔ VL-Nummer**, keine inhaltliche Zuordnung zu Portal-Konzepten.

### Weitere_Unterlagen-PDFs (Slutsky, Nutzenänderung, Breyer, Demmler, …)

- Fachlich nahe an `slutsky` / `cv_ev`, aber **nicht** pauschal als Primärersatz für die gesamten Portal-Kapitel gesetzt, ohne durchgängige Sichtung jeder Seite gegen `chapters.js`.
- Im `module-content.js`-Block **faktisch** als Ergänzungsgruppe genannt; `MIKRO1_CONCEPT_PRIMARY_REFS` bleibt bei den VL-Folien, wo die Abdeckung eindeutig ist.

## Hinweise zu Layer-Status (unverändert durch diese Pass-Logik)

`buildProvenanceByConceptFromPrimaryRefs` setzt weiterhin z. B. `theory`/`formulas` auf `source-distilled` mit den **neu** gefüllten `source_refs`. Intuition, Graph und Step-Problems behalten ihre bisherigen Status-Defaults (siehe `learningObjectNormalize.js`).

## Full exams

`FULL_EXAM_PROVENANCE` in `contentManifest.js` wurde **nicht** auf Archiv-Klausurpfade umgestellt (weiterhin ehrliche `platform-added-drill`-Notiz); diese Pass-1-Kuratierung betrifft **nur** `MIKRO1_CONCEPT_PRIMARY_REFS` und den `module-content`-Katalogeintrag.
