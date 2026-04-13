# Public-core concept-level source-diff hardening — Pass 4 (Recht)

## Scope and method

- **Module only:** `recht/`
- **On-disk sources used:** `source-materials/Recht/Recht/Vorlesungen/§_1_Was_ist_Recht-K.pdf`, `§_2_Privatrecht-K.pdf`, `§_3_Juristische_Methodik-K.pdf`; manifest secondary `Übungen/Juristische_Gliederungsebenen_im_Gutachten.pdf` (Gliederungsebenen-Ansicht konsultiert für Kontext, inhaltliche Fixes primär aus VL §3).
- **Portal files read:** `recht/js/data/chapters.js`, `recht/js/data/intuition.js`, `docs/audits/recht-provenance-curation-pass-1.md`, `recht/js/data/contentManifest.js`.
- **Evidence:** `pdftotext` + `grep` on named PDFs (keine freie Juristen-„Standardlehre“ statt Kursfolien).

## Issues found vs issues fixed (summary)

| Issue | Where | Fix this pass? |
|------|--------|----------------|
| **`was_ist_recht`** Theorie stark komprimiert gegenüber VL §1: fehlende **Gewaltenteilung**, **Perspektiven**, **Rechtsfindungslehren**, **Radbruch / Art. 79 Abs. 3 GG**, **Rechtsquellenliste**; zudem unpräzise Formulierung „Gesetz, Rechtsprechung und Methodik“ statt der in der VL expliziten **Rechtsquellen** + Rolle der Rechtsprechung als Anwendung | `CONTENT.was_ist_recht.theorie` | **Ja** — neue Abschnitte VL-getreu ergänzt, Rechtsquellen-Abschnitt umgeschrieben. |
| **`methodik`** Gutachtenstil als **eine** lineare Kette O–D–S–E ohne **einleitenden Obersatz** und ohne **Wiederholung pro Tatbestandsmerkmal** (VL §3 „Schema einer Anspruchsprüfung“) | `CONTENT.methodik.theorie`, `formeln`, Aufgabe Mini-Case, Motivation, erste Aufgabe | **Ja** — Text, Schema, Motivation und Musterlösungsschritte angeglichen. |
| **`methodik`** Fehlender **Sprachhinweis** Konjunktiv II (Obersätze) vs. **Indikativ** (Definition/Subsumtion) inkl. Schlüsselwörter | `CONTENT.methodik.theorie` | **Ja** — eigener Absatz nach VL „Der Gutachtenstil – Sprache“. |
| **`methodik`** Mini-Case nutzte **IRSR / IRAC**-Vokabular (angloamerikanisch), nicht der kursnahe **Gutachtenstil** | `CONTENT.methodik.aufgaben` (Mini-Case Schritte + Ergebnis) | **Ja** — auf deutschsprachige Gutachtenlogik umgestellt. |
| **`privatrecht`** VL §2 führt **Strafrecht** neben Privat- und öffentlichem Recht; Portal erwähnte nur Privat vs. öffentlich | `CONTENT.privatrecht.theorie` (erster Abschnitt) | **Ja** — ein satzlicher Verweis auf die VL-Grafik. |
| **`intuition`** `was_ist_recht` / `methodik` widersprachen der vertieften VL-Struktur leicht | `recht/js/data/intuition.js` | **Ja** — Bridge und Exam-Cues angepasst. |

**Files changed**

1. `recht/js/data/chapters.js`
2. `recht/js/data/intuition.js`

---

## Per-concept audit (required fields)

### 1) `was_ist_recht`

1. **Slug:** `was_ist_recht`  
2. **Source basis:** `Vorlesungen/§_1_Was_ist_Recht-K.pdf` (Gewaltenteilung; Definitionen soziologisch/philosophisch/ökonomisch; Recht und Rechtswissenschaft mit Schulen und Fazit Wortlaut; gesetzliches Unrecht, Radbruch, Mauerschützen, Art. 79 Abs. 3 GG; Rechtsquellenliste).  
3. **Strengths (unchanged):** Fallbezug und Subsumtionswarnung bleiben klausurtauglich; Formeln-Tab mit Sachverhalt → Merkmal → Rechtsfolge passt zur späteren Methodik-VL.  
4. **Weaknesses (before):** Inhaltliche **Lücke** zur ersten Vorlesungseinheit: Kernfolien fast nicht abgebildet; „Rechtsquellen“-Abschnitt **nicht deckungsgleich** mit der VL-Liste.  
5. **Fidelity judgment:** **weak** → **mixed/stronger** auf VL §1 (kein Volltranskript, aber zentrale Stränge sind jetzt abgedeckt).  
6. **Misleading / missing:** Studierende sahen nur „bindende Ordnung“ und knappe Methodik, ohne die **staatliche Einordnung**, **Erkenntnisrichtungen** und **Radbruch**-Kontext, den die VL ausdrücklich liefert.  
7. **Recommended fix:** Theorie um propädeutische Blöcke aus VL §1 ergänzen; Rechtsquellen-Absatz an VL-Liste anbinden und Rechtsprechung als **Anwendung** positionieren.  
8. **Fix applied:** **Ja.**

---

### 2) `methodik`

1. **Slug:** `methodik`  
2. **Source basis:** `Vorlesungen/§_3_Juristische_Methodik-K.pdf` (Sachverhalt/Tatbestand/Rechtsfolge/TBM; Subsumtion; Gutachtenstil-Struktur mit **einleitendem Obersatz** und **Obersätzen je TBM** plus **Ergebnis**; Sprache Konjunktiv II / Indikativ); sekundär `Übungen/Juristische_Gliederungsebenen_im_Gutachten.pdf` (römische Gliederung — in diesem Pass keine Kartenänderung, nur Konsistenzcheck).  
3. **Strengths:** Anspruchsdenken „Wer will was von wem woraus?“; Kette entstanden/untergegangen/durchsetzbar; Subsumtions-Warnung; anspruchsvolle Aufgaben zu Konkurrenz.  
4. **Weaknesses (before):** **Gutachtenstil** als **einfache** O–D–S–E-Kette **ohne** merkmalsweise Wiederholung = **doctrinal order drift** gegen VL; fehlender **Sprachmodus**-Hinweis; **IRSR** im Mini-Case = Methodik-Vokabular drift.  
5. **Fidelity judgment:** **mixed** → **strong** auf die geprüften Gutachtenstil-Punkte (nicht jede Übungs-Gliederungsebene neu modelliert).  
6. **Misleading / missing:** Risiko, dass Lernende **einen** Obersatz für die ganze Prüfung schreiben und Merkmale „unter den Tisch“ subsumieren; IRSR suggeriert **fremdes** Prüfungsschema.  
7. **Recommended fix:** Theorie an VL-Schema und Sprachfolie anpassen; Formelbeschreibung erweitern; Mini-Case auf Gutachtenbegriffe umbauen; Motivation + erste Aufgabe konsistent halten.  
8. **Fix applied:** **Ja.**

---

### 3) `privatrecht`

1. **Slug:** `privatrecht`  
2. **Source basis:** `Vorlesungen/§_2_Privatrecht-K.pdf` (Dreiteilung Privatrecht / Öffentliches Recht / Strafrecht in der Grafik; Gleichordnung; Beispiele).  
3. **Strengths:** Gleichordnung vs. Über-/Unterordnung; BGB-Systematik; Klausurwarnung zur Systematik.  
4. **Weaknesses (before):** **Unvollständige** Abbildung der VL-Einstiegsgrafik (**Strafrecht** fehlte).  
5. **Fidelity judgment:** **mixed** → **strong** für den Einleitungsüberblick.  
6. **Misleading / missing:** Stilles Weglassen des dritten Feldes aus der VL-Tafel.  
7. **Recommended fix:** Einen expliziten Satz zur **dreiteiligen** Vorlesungsgrafik ergänzen, Zivilfokus beibehalten.  
8. **Fix applied:** **Ja.**

---

### 4) `dissens` / `anfechtung` (Konsolidierte Kurzprüfung)

1. **Slugs:** `dissens`, `anfechtung`  
2. **Source basis:** `Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf` (nicht erneut zeilenweise diffiert in diesem Pass; Abgleich mit bekannter Kurslogik **Konsens vor Anfechtung**).  
3. **Strengths:** Klare Reihenfolge Konsens → Dissens-Pfade → Anfechtung; §§ 154/155; Warnung vor vorschnellem Dissens; Anfechtung mit Frist/§ 122-Trennung.  
4. **Weaknesses:** Keine neu entdeckte **Reihenfolgeverletzung** im Portaltext.  
5. **Fidelity judgment:** **strong** (unverändert).  
6. **Misleading / missing:** n/a in diesem Pass.  
7. **Recommended fix:** Keine.  
8. **Fix applied:** **Nein.**

---

## Semantic schema / cards

- **Änderung:** Die `schemaSequence`-Kette unter `methodik` > Gutachtenstil wurde **inhaltlich erweitert** (längeres Label `pro TBM: Obersatz`). **Trust-Regression** (sichtbarer Text, keine `$$`-Leaks u.ä.) ist **grün** — die Darstellung bleibt technisch intakt.
- **Risiko:** Sehr lange Kettenlabels können auf schmalen Viewports umbrechen; Regression prüft **math/markup leaks**, nicht jeden Zeilenumbruch. Bei späterem UI-Feedback ggf. Kürzung der Chip-Texte bei gleichbleibender Prosa.

## Provenance honesty

- **Keine** Änderung an `contentManifest.js` / Primärpfaden. Die neuen Texte in `was_ist_recht` und `methodik` bleiben durch die bestehenden VL-PDFs in `RECHT_PRIMARY_REFS_CURATED` **abgedeckt** (`recht-provenance-curation-pass-1.md`).
- **Probeklausuren:** weiterhin `platform-added-drill`, leere `source_refs` (unverändert; ehrlich dokumentiert in Pass 1).

## Browser / automated verification

- **Command:** `cd tools/clickthrough && node trust-regression-pass-1.mjs`  
- **Result:** `trust-regression-pass-1: all checks passed.` (~61s)

**Recht-spezifisch im Harness u.a.:**

- Math-/Markup-Leak-Scan: `/recht/index.html` · `was_ist_recht` · **theorie** und **formeln**.  
- Provenance: `/recht/index.html` · `was_ist_recht` · **theorie** (eine `footer.source-provenance`, Markierung, nicht-leere Summary-Zeile).  
- Aufgaben **Lösung anzeigen**: `recht/was_ist_recht/aufgaben` (Reveal → `.solution-block.show`).  
- **Prüfungstransfer:** der Harness toggelt `examDrill` auf **mikro1/budget**, nicht auf Recht — für Recht wurde **Intuition**-Text inhaltlich angeglichen; kein separates Playwright-Szenario für Recht-Drill in diesem Lauf.  
- **Mobile / right-panel:** Regression testet u.a. **statistik** narrow + focus mode, nicht erneut recht-narrow; bei den vorgenommenen Änderungen handelt es sich um **Theorie-HTML** ohne neue `rightPanel`-Sonderlogik.

## Coverage statement (explicit)

**Tief mit VL abgeglichen und geändert:** `was_ist_recht`, `methodik`, `privatrecht` (Einleitung).  
**Kurz geprüft, unverändert gelassen:** `dissens` + `anfechtung` (Konsistenz der Prüfungsreihenfolge).  
**Nicht erneut VL-zeilenweise diffiert in Pass 4:** `willenserklaerung`, `trennung_abstraktion`, `geschaeftsfaehigkeit`, `stellvertretung`, `agb`, `schuldrecht_intro`, `schadensersatz`, `ruecktritt`, `verbraucherwiderruf`, `stepProblems.js`, `fullExams.js`.

## Updated trust judgment (Recht, after pass 4)

**Verdict:** **Erhöht** für die öffentlich sichtbaren **Grundlagen- und Methodik-Oberflächen**: VL §1 und §3 werden im Portal **weniger unterrepräsentiert**; der **Gutachtenstil** entspricht der **merkmalsweisen** Vorlesungslogik **stärker** als zuvor; **IRAC-Drift** im Mini-Case ist entfernt.  
**Residual risks:** (1) Längere semantische Ketten in `methodik` könnten **Layout** auf sehr schmalen Geräten stressen (nicht automatisch exhaustiv getestet). (2) **Weitere Kapitel** ohne erneuten PDF-Diff bleiben **außerhalb** dieser Pass-4-Behauptung. (3) **Probeklausur**-Inhalte bleiben bewusst **ohne** Primär-PDF-Anker.

## Source files used (this pass)

| Path | Use |
|------|-----|
| `source-materials/Recht/Recht/Vorlesungen/§_1_Was_ist_Recht-K.pdf` | Inhalt `was_ist_recht` |
| `source-materials/Recht/Recht/Vorlesungen/§_2_Privatrecht-K.pdf` | Strafrecht-Dreieck |
| `source-materials/Recht/Recht/Vorlesungen/§_3_Juristische_Methodik-K.pdf` | Gutachtenstil-Struktur und Sprache |
| `source-materials/Recht/Recht/Übungen/Juristische_Gliederungsebenen_im_Gutachten.pdf` | Kontext Gliederung (keine inhaltliche Portal-Änderung daraus) |
| `docs/audits/recht-provenance-curation-pass-1.md` | Pfad- und Konzept-Mapping |

---

**Outcome:** Pass 4 ist **abgeschlossen** mit **konzeptuellem Source-Diff** gegen die genannten VL-PDFs, **konkreten Korrekturen** in `chapters.js` / `intuition.js`, dokumentierten **Mismatches** und **grüner** Trust-Regression für die mitlaufenden Recht-Oberflächen.
