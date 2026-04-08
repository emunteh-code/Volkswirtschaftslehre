# Jahresabschluss Source-Grounded Audit — Pass 1

## Scope and rules applied

- Academic source of truth: `source-materials/Jahresabschluss/Jahresabschluss/` (Wintersemester 2024/25, Prof. Dr. Vanessa Flagmeier, course PDFs as stored in-repo).
- Portal audited: `jahresabschluss/js/data/chapters.js` (concept list + `CONTENT` structure), with spot checks against `jahresabschluss/js/data/contentManifest.js` (provenance still empty by design).
- **No code changes** in this pass (audit only).

## Exact files inspected under `source-materials/Jahresabschluss`

### Vorlesungsfolien / Kapitel-PDFs (structure + extracted text)

The following files under `source-materials/Jahresabschluss/Jahresabschluss/` were **opened via `pdftotext`** (full-document search where noted; first-page/outline extraction for chapter PDFs):

| File | How used |
|------|-----------|
| `Orga+Kapitel1.pdf` | Early pages (Organisation, Ablauf); full-text spot search for „Einführung“, „Bilanz“, „Gliederung“ |
| `Kapitel2.pdf` | First pages (Gliederung §2: Rechtsgrundlagen, Inventur→Bilanz, Bilanzansatz, Bilanzbewertung); text search |
| `Kapitel3.pdf` | First pages (Gliederung §3: Erfassungstechnik, Doppelte Buchführung, bilanzielle Wertbewegungen, Erfolgskonten) |
| `Kapitel4.pdf` | First pages (Gliederung §4: Handelsbücher, Kontenrahmen/-plan, Belegorganisation) |
| `Kapitel5.pdf` | First pages + text search (§5.3 Veräußerung, Bruttomethode) |
| `Kapitel6.1-6.5.pdf` | First pages (Gliederung §6.1–6.5; Verweis auf 6.6–6.7) |
| `Kapitel6.6-6.7.pdf` | First pages (Waren, USt-Bezug) |
| `Kapitel7.pdf` | First pages (Gliederung §7: Grundlagen, Kapitalgesellschaften, Personengesellschaften) |
| `Kapitel8.pdf` | First pages (Gliederung §8: Grundlagen, Verbindlichkeiten, Rückstellungen) |
| `Kapitel9.pdf` | First pages (Gliederung §9 Rechnungsabgrenzung) |
| `Kapitel10.pdf` | First pages (Gliederung §10: Grundlagen, GKV, UKV) |
| `JA - empty.pdf` | First lines only (erscheint als „Companion“-Hinweis; kein Ersatz für die Kapitel-PDFs) |

### Probeklausur

| File | How used |
|------|-----------|
| `Probeklausur/Probeklausur_Jahresabschluss.pdf` | Vollständiger Textanfang (Aufgaben 1–10, Themenliste) |
| `Probeklausur/Probeklausur_JA.pdf` | Nur per Repository-Suche auf Begriffe (Inhalt nicht vollständig Seite für Seite gelesen) |
| `Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf` | Nur in automatischer Volltextsuche (Begriff „latente“ / „Maßgeblich“) |

### Tutorium und Zusammenfassung (Stichprobe)

| File | How used |
|------|-----------|
| `Tutorium/Tutorium_Kapitel2.pdf` | Extrahierte Aufgaben-/Lösungsteile zu **Maßgeblichkeitsgrundsatz** und **latenten Steuern** |
| `Zusammenfassungen/Jahresabschluss VL1_2.pdf` | Anfangstext (Kapitel 1–2 Struktur, Adressaten, Teilbereiche) |

### Querschnitt

- **Alle** `*.pdf` unter dem inneren `Jahresabschluss/`-Ordner (ohne `__MACOSX`) wurden per `pdftotext` + `grep` auf die Strings „Maßgeblichkeitsprinzip“, „Massgeblichkeitsprinzip“ bzw. „latente Steuer“ geprüft.

**Hinweis:** Nicht jede Datei (z. B. sämtliche `Tutorium_Kapitel*.pdf`, sämtliche `Zusammenfassungen/VL*.pdf`) wurde vollständig inhaltlich gelesen. Die **Kapitel-Gliederungen** und die **Probeklausur** bilden die tragfähigste Querschnittsbasis für diese Pass-1-Audit.

## Kursgliederung (aus den VL-PDFs) — Kurzreferenz

Aus den Gliederungsseiten der Kapitel-PDFs:

1. Einführung (in `Orga+Kapitel1.pdf`)
2. Grundsätze: Rechtsgrundlagen, Inventur→Bilanz, Bilanzansatz, Bilanzbewertung
3. Buchen auf Bestands- und Erfolgskonten
4. Organisation der Buchführung (Handelsbücher, Kontenrahmen/-plan, Belege)
5. Anlagevermögen (Grundlagen, Abschreibungen, Veräußerung)
6. Umlaufvermögen (6.1–6.7: Grundlagen, Bewertungsvereinfachungen, Werkstoffe, Erzeugnisse, Waren, USt)
7. Eigenkapital (Kapital- vs. Personengesellschaften)
8. Fremdkapital (Verbindlichkeiten, Rückstellungen)
9. Rechnungsabgrenzung
10. Erfolgsrechnung (GKV, UKV)

## Portal-Konzepte vs. Kurs — Abdeckungsmatrix

| Portal-`id` (Auszug) | Primäre Kursanker (Kapitel) | Bewertung |
|----------------------|-----------------------------|-----------|
| `rechnungswesen_intro` | §1 (`Orga+Kapitel1.pdf`) | Gut gespiegelt (Zweck, Bilanz/GuV-Logik, Adressaten laut Zusammenfassung) |
| `gob_rechtsgrundlagen` | §2.1 + GoB-Logik in §2 / Rechtsrahmen | Inhaltlich nahe; siehe **Lücken** zu Maßgeblichkeit/latenten Steuern |
| `inventur_inventar_bilanzansatz` | §2.2–2.3 | Gut gespiegelt |
| `buchen_konten` | §3 | Gut gespiegelt |
| `buchfuehrung_orga` | §4 | Gut gespiegelt |
| `anlagevermoegen` | §5 (inkl. §5.3 Veräußerung) | Gut gespiegelt; Kurs nennt Bruttomethode explizit |
| `umlauf_bewertung_verfahren` | §6.1–6.2 + NZW-Logik | Überwiegend gut; siehe **Granularität** |
| `werkstoffe_erzeugnisse_buchungen` | §6.3–6.5 | Gut gespiegelt |
| `umlauf_waren_ust` | §6.6–6.7 | Gut gespiegelt |
| `eigenkapital_kapitalgesellschaften` / `eigenkapital_personengesellschaften` | §7.2 / §7.3 | Sinnvolle Portal-Aufteilung gegenüber einem gemeinsamen Kapitel |
| `verbindlichkeiten` / `rueckstellungen` | §8.2 / §8.3 | Sinnvolle Aufteilung; Fremdwährung in Portal erwähnt (`chapters.js`) |
| `rechnungsabgrenzung` | §9 | Gut gespiegelt |
| `erfolgsrechnung` | §10 (GKV, UKV) | Gut gespiegelt |

## Findings

### 1. Concepts already well grounded in the source

- **Buchführungskern (§3–4):** Doppelte Buchführung, Bestands-/Erfolgskonten, Grund-/Hauptbuch, Kontenrahmen/-plan, Belege — decken sich mit `buchen_konten` und `buchfuehrung_orga`.
- **Anlagevermögen (§5):** AfA, außerplanmäßig, Veräußerung inkl. Bruttomethode — Kurs-PDF und Portal (`anlagevermoegen`) sind inhaltlich konsistent.
- **Umlaufvermögen (§6):** Dreiteilung im Portal (Bewertung / Werkstoffe & Erzeugnisse / Waren & USt) entspricht der VL-Gliederung 6.1–6.7.
- **Eigenkapital / Fremdkapital / RAP / Erfolgsrechnung:** Entsprechen klar Kapitel 7–10.

### 2. Concepts currently too coarse (Granularität)

- **`gob_rechtsgrundlagen`:** Bündelt GoB, allgemeinen Rechtsrahmen und Klausur-typische Prinzipien. Im Kurs ist §2 weiter in **Rechtsgrundlagen**, **Inventur/Bilanz**, **Ansatz**, **Bewertung** zerlegt; das Portal trennt Inventur/Ansatz bereits aus, lässt aber **„Rechtsgrundlagen“** und **„GoB“** in einem Knoten — für Lernnavigation weiterhin ok, für **Tiefen-Pass** evtl. trennschärfer (ohne Pflicht zur Konzept-ID-Explosion).
- **`umlauf_bewertung_verfahren`:** Vereint §6.1 „Grundlagen“, §6.2 „Bewertungsvereinfachungsverfahren“ und das **strenge Niederstwertprinzip** in einem Portal-Kapitel. Fachlich zusammengehörig, aber **inhaltlich dicht**; ein Enrichment-Pass kann mit **Unterabschnitten/Drills** arbeiten, ohne die Kartenzahl zu erhöhen.

### 3. Missing or underrepresented relative to course materials + Probeklausur

Diese Themen sind in der **offiziellen Probeklausur** und/oder im **Tutorium** klar präsent, im Portal aber **nicht als gleichrangige, explizite Lern-Einheit** ausgewiesen:

| Thema | Wo in den Quellen | Portal-Lage |
|--------|-------------------|----------------|
| **Maßgeblichkeitsprinzip** (inkl. Ausnahmen) | `Tutorium/Tutorium_Kapitel2.pdf`, `Probeklausur/Probeklausur_Jahresabschluss.pdf` Aufgabe 2a | Kein eigenes Konzept; in `gob_rechtsgrundlagen` nur am Rand denkbar — **unterentwickelt** |
| **Latente Steuern** (aktiv/passiv, Funktion) | `Tutorium/Tutorium_Kapitel2.pdf`, Probeklausur Aufgabe 2b | **Fehlt** als strukturierter Block im Portal |
| **§ 252 HGB** explizit (Vorsicht vs. allgemeine „Vorsicht“) | Probeklausur Aufgabe 1b („Realisationsprinzip und Vorsichtsprinzip gemäß § 252 HGB“) | Portal spricht Realisation/Imparität/Stetigkeit; **gesetzliche Verankerung** könnte klausurnäher ergänzt werden |

**Hinweis:** In den **Kapitel-2-VL-PDFs** (erste Seiten + Stichwortsuche) wurden „Maßgeblichkeit“ / „latente Steuer“ **nicht** in dem Maße sichtbar wie im Tutorium/Probeklausur-Set. Für die Audit-Konklusion heißt das: Diese Punkte sind **kurs- und prüfungsrelevant über das Übungs-/Klausurmaterial**, auch wenn die Hauptfolien-PDFs nicht vollständig durchsucht wurden.

### 4. Weakly grounded or underdeveloped (Tiefe / Drill-Lücken)

- **`gob_rechtsgrundlagen`:** Risiko, dass Lernende GoB **nur definieren**, ohne **Maßgeblichkeit** und **latente Steuern** (Tutoriumsniveau) zu verbinden — die Quellen fordern das in Probeklausur und Tutorium.
- **`anlagevermoegen`:** Kurs legt Wert auf **Veräußerung/Bruttomethode**; Portal erwähnt Veräußerung; **Enrichment** kann mit **klausurgleichen Zahlenbeispielen** (wie Probeklausur Aufgabe 5) verstärkt werden.
- **`umlauf_bewertung_verfahren`:** Probeklausur Aufgabe 6 (FIFO vs. Durchschnitt) — Portal hat die Methoden; **Transfer-Drills** aus der Probeklausur-Nähe wären passender nächster Schritt.
- **Provenance:** `JAHRESABSCHLUSS_CONCEPT_PRIMARY_REFS` ist weiterhin leer (`contentManifest.js`) — **keine** falschen Pfade erfinden; ein späterer Curation-Pass kann Kapitel-PDFs pro Konzept zuordnen (out of scope dieser Audit).

## Granularity consistency (Kurzfassung)

- Die Aufteilung **Eigenkapital KG vs. PG** und **Verbindlichkeiten vs. Rückstellungen** ist **kurskonform** und klarer als ein einzelnes VL-Kapitel pro Block.
- Die **fehlende** Ausgliederung von **Maßgeblichkeit/latenten Steuern** ist die größte **inhaltliche** (nicht nur ID-)Granularitätslücke gegenüber Probeklausur/Tutorium.

## Exact recommendation for Jahresabschluss content enrichment pass 2

**Zielbild:** Tiefe und Exam-Alignment dort erhöhen, wo die Quellen (**Probeklausur + Tutorium + Kapitel-Gliederung**) ein eindeutiges Mehr an Stoff fordern — **ohne** die 16-Konzept-Karte notwendig zu sprengen.

1. **`gob_rechtsgrundlagen` (oder klar markierte Unterblöcke darin)**  
   - Additiv: **Maßgeblichkeitsprinzip** (Definition, Ausnahmen) und **latente Steuern** (aktiv/passiv, wann Aktivierung/Passivierung) — gestützt auf `Tutorium_Kapitel2.pdf` + Probeklausur/Musterlösung, Formulierungen HGB-nah und nicht spekulativ.
2. **GoB / § 252 HGB Klausurform**  
   - Kurze, source-nahe Ergänzung: Verknüpfung **Realisationsprinzip** und **Vorsichtsprinzip** mit **§ 252 HGB** wie in Probeklausur Aufgabe 1b.
3. **Drills / Mini-Fälle (kein generisches Flachziehen)**  
   - `anlagevermoegen`: Veräußerung mit **Bruttomethode** (Parameter wie Probeklausur).  
   - `umlauf_bewertung_verfahren`: **FIFO vs. Durchschnitt** als strukturierter Rechenpfad.  
   - `rueckstellungen` / `verbindlichkeiten`: Auflösung Rückstellung + **Fremdwährungsbewertung** (Probeklausur 8b/8c) als gezielte Aufgaben, wo der Text in `chapters.js` bereits Andeutungen hat.
4. **Optional später:** Curated `JAHRESABSCHLUSS_CONCEPT_PRIMARY_REFS` → z. B. `Kapitel5.pdf` für `anlagevermoegen`, getrennt von dieser Enrichment-Pass-Logik.

## Explicit statement

- Diese Pass-1-Audit stützt sich auf die **genannten**, per Textextraktion geprüften Dateien; sie **erfindet keine** Kapitel-Zuordnungen jenseits der offiziellen Gliederungsseiten und der abgeglichenen Probeklausur.
- **Keine Codeänderung** in diesem Schritt.
