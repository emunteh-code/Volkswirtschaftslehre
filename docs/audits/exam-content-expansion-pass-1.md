# Exam content expansion — pass 1 (makro1, makro2, recht)

## Scope

- **Selective** expansion of **full-exam** items in `FULL_EXAMS` only (Probeklausuren).
- **No** infrastructure changes, **no** provenance/manifest edits, **no** new source claims.
- Grounding: items align with **existing** module `chapters.js` / exam topics already present in each probeklausur; no new course PDFs cited.

## Audit snapshot (before pass)

| Module | Full exams | Pattern |
|--------|------------|---------|
| **makro1** | `probeklausur_1`–`3` | Each: W/F block + 2× text-block (numeric + narrative), ~60 pts/exam |
| **makro2** | `probeklausur_1`–`3` | Same structural pattern; PK1 split into two W/F contexts (Wechselkurs vs offene Märkte) |
| **recht** | `probeklausur_1`–`3` | W/F + Gutachten-style text blocks |

### Gaps addressed in this pass

1. **makro1 PK1:** W/F concentrated on VGR/Gütermarkt; **little explicit trap density** linking Geldmarkt, Zinsregel vs IS-Verschiebung, und $r \approx i-\pi^e$ neben Aufgabe 3 (Geldmarkt).
2. **makro1 PK1 Aufgabe 2:** Starke Staatsausgaben-/Multiplikatorlinie, aber **keine zweite numerische Transferaufgabe** zum Steuermultiplikator auf derselben Parameterbasis.
3. **makro2 PK1:** Zahlungsbilanzidentität und **IS vs LM/ZP bei Geldpolitik** als häufige Verwechslungsfallen nur indirekt abgedeckt.
4. **makro2 PK2/PK3:** Phillips/Erwartungen und Solow/Schulden-Dynamik hatten **begrenzte W/F-Breite** (6 Items pro PK).
5. **recht:** Probeklausuren hatten **6 W/F-Items** pro PK1; **Methodik-Traps**, **Vertretung schwebend unwirksam**, **Widerruf ohne Mangel** als klassische Prüfungsfallen unterrepräsentiert.

## Exact files changed

| File |
|------|
| `makro1/js/data/fullExams.js` |
| `makro2/js/data/fullExams.js` |
| `recht/js/data/fullExams.js` |
| `docs/audits/exam-content-expansion-pass-1.md` (this document) |

## Exact modules / sections expanded

### makro1 — `probeklausur_1` only

1. **Aufgabe 1 (wf-block)**  
   - **Points:** 18 → **27**  
   - **New group:** `Geldmarkt, Zins und Erwartungen (Transferfallen)` mit 3 W/F-Fragen (`m1_pk1_7`–`m1_pk1_9`): Zinsregel vs IS-Verschiebung, Realzins bei $\pi^e$-Änderung, marginale Konsumneigung und Multiplikatorgröße.

2. **Aufgabe 2 (text-block, `multiplikator`)**  
   - **Points:** unverändert **22**  
   - **Teilpunkte umverteilt:** `m1_pk1_2a` 8→**6**, `2b` 7→**6**, `2c` 7→**5**  
   - **Neu:** `m1_pk1_2d` (**5 Punkte**) — Steuersenkung $\Delta T=-20$, Lösung $\Delta Y = -\frac{c_1}{1-c_1}\Delta T = 60$ bei unverändertem $G,I$ und gleicher Konsumfunktion wie in (a).

### makro2 — alle drei Probeklausuren (nur Aufgabe 1 je Klausur)

1. **`probeklausur_1` — Aufgabe 1**  
   - **Points:** 20 → **24**  
   - **Neu:** `pk1_11` (ZB-Identität / LB muss sich spiegeln), `pk1_12` (Geldpolitik verschiebt nicht primär die IS im MF-Bild).

2. **`probeklausur_2` — Aufgabe 1**  
   - **Points:** 18 → **24**  
   - **Neu:** `pk2_7` (Phillips ohne Erwartungen unzureichend), `pk2_8` (glaubwürdiges Ziel verankert Erwartungen / Kurvenverschiebung).

3. **`probeklausur_3` — Aufgabe 1**  
   - **Points:** 18 → **24**  
   - **Neu:** `pk3_7` (Solow: $s=0$ → kein positiver Steady-State-$k$ ohne Tech/Bevölkerung wie im Modellrahmen), `pk3_8` ($g>r$ und Primärsaldo null kann $b$ senken — $(r-g)b$-Logik).

### recht — alle drei Probeklausuren (nur Aufgabe 1 je Klausur)

1. **`probeklausur_1` — Aufgabe 1**  
   - **Points:** 18 → **24**  
   - **Neu:** `re_pk1_7` (Obersätze nicht vage), `re_pk1_8` (Ergebnis nicht vor Subsumtion).

2. **`probeklausur_2` — Aufgabe 1**  
   - **Points:** 18 → **24**  
   - **Neu:** `re_pk2_7` (fehlende Vertretungsmacht: schwebend unwirksam, nicht dauerhaft unwirksam), `re_pk2_8` (Erkennbarkeit / für wen gehandelt wird).

3. **`probeklausur_3` — Aufgabe 1**  
   - **Points:** 18 → **24**  
   - **Neu:** `re_pk3_7` (Widerruf nicht an Mangel gebunden), `re_pk3_8` (Rücktritt und SE unter Umständen parallel prüfen).

## Exact new exam tasks or subparts (IDs)

| Module | Exam | New item IDs |
|--------|------|----------------|
| makro1 | PK1 | `m1_pk1_7`, `m1_pk1_8`, `m1_pk1_9`, `m1_pk1_2d` |
| makro2 | PK1 | `pk1_11`, `pk1_12` |
| makro2 | PK2 | `pk2_7`, `pk2_8` |
| makro2 | PK3 | `pk3_7`, `pk3_8` |
| recht | PK1 | `re_pk1_7`, `re_pk1_8` |
| recht | PK2 | `re_pk2_7`, `re_pk2_8` |
| recht | PK3 | `re_pk3_7`, `re_pk3_8` |

## What was not changed (by design)

- **makro1** `probeklausur_2`, `probeklausur_3` — keine Erweiterung (bestehende IS-LM-/Phillips-Blöcke bereits dicht).
- **Quick exams** (`exam.js` / MC-Pools), **stepProblems**, **chapter `aufgaben`** — out of scope.
- **Punktesummen** der makro2/recht Einzelklausuren: nur Aufgabe-1-Punkte erhöht; Gesamtpunktzahl pro Klausur steigt entsprechend (Anzeige/Scoring abhängig von `fullExam`-Implementierung — nur Metadaten angepasst).

## Exact remaining exam-coverage gaps (and why)

1. **Keine neuen vollständigen Aufgabenblöcke** (zusätzliche Aufgabe 4) — würden Gesamtzeit und UI-Länge stärker verändern; bewusst zurückgestellt.
2. **makro2 PK2/PK3 Aufgaben 2–3** — keine zweite Transferzahl in Barro-Gordon/Taylor bzw. zweite Schulden-Szenariorechnung; würde mehr Abstimmung mit Formelnotation im Kurs erfordern.
3. **recht** — keine Erweiterung der **langen Textfälle** (Aufgaben 2/3) um Zugangs-/BGB-§-Feinheiten; höheres Fehlerrisiko ohne normtextnahe Quellenangabe im Portal.
4. **Cross-topic Klausuren** (z. B. makro1 Gütermarkt + Phillips in einer Aufgabe) — nicht hinzugefügt; Modulstruktur bleibt pro PK thematisch gebündelt.
5. **Automatische Gewichtung** — wenn die Lernoberfläche Punktzahlen pro W/F-Item intern gleich verteilt, kann sich das **Gewicht** der neuen Items von der hier gesetzten Aufgaben-`points`-Summe unterscheiden; das war schon vorher ein mögliches Implementierungsdetail und wurde nicht angefasst.

## Verification

- `node --input-type=module -e "import './makro1/js/data/fullExams.js'; ..."` — **ok** (Syntax/ESM).

## Provenance note

- Alle Ergänzungen sind **platform-added-drill** im Sinne der bestehenden Probeklausur-Linie; es wurden **keine** neuen `source_refs` oder PDF-Verweise erfunden oder behauptet.
