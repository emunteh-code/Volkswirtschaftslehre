# Mathematik — Exam-layer pass 1

**Scope:** Assessment layer only (`FULL_EXAMS`, `BASE_STEP_PROBLEMS`, minimal `courseConfig` / adapter string for the exam picker). **No** `chapters.js` theory splits, **no** new concept ids, **no** source claims.

**Motivation:** `docs/audits/mathematik-benchmark-reassessment-pass-1.md` flagged **thin full exams** (one mock, two questions), **only two** hand-authored `BASE_STEP_PROBLEMS` concepts, and **simulation** labeling that did not yet spell out non-archival honesty in the UI copy.

---

## Files changed (exact)

| File | Role |
|------|------|
| `mathematik/js/data/fullExams.js` | Expanded **Simulation A**, added **Simulation B** |
| `mathematik/js/data/stepProblems.js` | `BASE_STEP_PROBLEMS` for **all eight** `CHAPTERS` ids (multi-step chains) |
| `mathematik/js/data/courseConfig.js` | `examCollectionTitle: 'Übungsklausuren (Simulationen)'` (Picker-Überschrift) |

---

## Exam / simulation weaknesses addressed

| Weakness (from reassessment) | Response in this pass |
|------------------------------|------------------------|
| Single mock, **2** scored questions | **Simulation A** now **13** text questions in **4** blocks (A–D); **Simulation B** adds **5** questions in **2** parts |
| Title/subtitle sounded like a generic template | **Simulation A/B** titles and subtitles state **portal-autorisiert** and **kein Archiv-Original** |
| Picker did not signal “simulation” | `examCollectionTitle` explicitly includes **(Simulationen)** |
| Only **ableitung** + **optimierung** had authored step chains | **Six** further concepts receive **hand-authored** multi-step problems (see below) |
| No **pressure/transfer** mix | **Simulation B** is shorter duration (**45** min) with mixed micro-drills + **Lesen unter Druck** (MR=MC meaning, log-approx caveat) |
| Weak **chain** within one stem | **Block A** extends Kurvendiskussion to **4** linked steps (stationär → Max → Min → Wendepunkt) on one $f(x)$ |

---

## Exact new / expanded exam-style tasks

### `mock_exam_1` — Übungsklausur-Simulation A

- **Metadata:** **90** min (was 60), new **title/subtitle** (honest non-archive).
- **Block A (40 Pkt., 4 Fragen):** $f(x)=\tfrac13 x^3-4x$ — $f'$, stationäre Punkte, lokales Max/Min mit $f''$, Wendepunkt.
- **Block B (30 Pkt., 3 Fragen):** $\ln(2x-1)=0$; inverse $P(Q)$ aus $Q(P)=60-3P$ inkl. $P(15)$; Log-Zerlegung $\ln(4a^2/b)$.
- **Block C (30 Pkt., 3 Fragen):** konkretes $2\times2$-Produkt $AB$; **Kommutativität** ja/nein; $\det(A)$ für gegebenes $A$.
- **Block D (30 Pkt., 3 Fragen):** Gewinn $\pi(Q)$ BEO+BZO; bestimmtes Integral $\int_0^2(10-2q)\,dq$; **Stichwort-Transfer** Tangentialbedingung / GRS vs. Preisverhältnis.

**Gesamt:** **130** Punkte (Anzeige im Picker: Summe der Block-Punkte), **13** Fragen.

### `mock_exam_2` — Übungsklausur-Simulation B

- **Metadata:** **45** min, **Misch** / Zeitdruck.
- **Teil 1 (30 Pkt., 3 Fragen):** Kettenregel $\ln(3+5x)$; kritische Punkte $f(x,y)=-x^2-y^2+4x$; Zeilen-Spalten-Produkt **11**.
- **Teil 2 (20 Pkt., 2 Fragen):** Bedeutung $MR=MC$ in einem Satz; wann $\ln Y_t-\ln Y_{t-1}$ nur **Näherung** für relative Änderung.

**Gesamt:** **50** Punkte, **5** Fragen.

---

## Exact new `BASE_STEP_PROBLEMS` (Schnelltest / step factory seed)

| Concept id | Problem title | Steps (count) | Pressure / transfer note |
|------------|---------------|---------------|---------------------------|
| `funktionen_grundlagen` | Nullstelle und ökonomische Lesart | **3** | Gleichgewicht + Vorzeichen |
| `logarithmus_umkehr` | Log-Gleichung und Domäne | **3** | injektives $\ln$ + Definitionsbereich |
| `ableitung` | *(existing)* Marginale Analyse | 2 | — |
| `ableitung` | Kettenregel unter Zeitdruck | **2** | äußer/innen + $-3(10-Q)^2$ |
| `optimierung` | *(existing)* Gewinnmaximierung | 3 | — |
| `optimierung` | Rand vs. Inneres | **2** | Intervall $[0,10]$ |
| `lagrange` | Haushalt mit Cobb-Douglas | **3** | MRS → Preisverhältnis → Budget |
| `linalg_matrizen` | Zeile-mal-Spalte | **2** | Dimension + Skalar **5** |
| `linalg_det_inverse_lgs` | Determinante entscheidet | **3** | singulär + **OLS/Multikollinearität** Transfer |
| `integral` | Konsumentenrente (Zahlen) | **3** | Integral → Rechteck → **KR** |

**Note:** `ensureMinimumStepProblems` still pads to minimum steps where totals stay **below** 10 per concept; authored chains **reduce** reliance on purely generated filler for these ids.

---

## Autograding caveat (unchanged engine)

`defaultExamEvaluate` uses **substring** matching on **keyword** lists. Short tokens (e.g. **„2“**, **„3“**) can **false-positive** on sloppy input. This pass keeps the **legacy** behavior; tightening would be a **portal-core** or per-question evaluator change (out of scope).

---

## Remaining gaps (explicit)

1. **Kein Archiv-Parity:** Weiterhin **keine** behauptete Übereinstimmung mit Originalklausuren; `source-materials/Mathematik` fehlt im Workspace weiterhin für PDF-Abgleich.
2. **Grafikfreie Klausur:** Keine Canvas- oder Graph-Fragen in `FULL_EXAMS` (Mathematik-Graph-Stack bleibt ohne klausurspezifische Erweiterung).
3. **WF-/MC-Blöcke:** Nur **text**-Fragen; keine Erweiterung auf `wf-block`-Typen in diesem Pass.
4. **Konzeptanzahl vs. VL:** Die **8** Karten / **10** VL-Lücke bleibt; dieser Pass adressiert nur **Assessment**, nicht **Granularität** oder **E1/E3**-Inhalt.
5. **Mistake-backbone:** `appendMistakeLogEntry` wird im Mathematik-`fullExam`-Adapter weiter **nicht** gesetzt — `concept_id` auf Einzelfragen daher ohne zentrale Fehleranalyse-Pipeline.

---

## Ob ein weiterer begrenzter Pass sinnvoll ist

- **Ja, optional:** schärfere **Bewertungslogik** (längere `correct`-Phrasen, numerische Toleranz) oder **ein** zusätzlicher **Misch**-Mock mit Fokus **Lagrange-Rechnung** (Zahlen), sobald gewünscht.
- **Nein als nächstes, wenn:** Priorität auf **Quellen im Repo** oder **theorie/offene VL-Lücken** liegt — dann zuerst Content-/Corpus-Pass, nicht weiteres Exam-Only.

---

## Summary

Mathematik hat jetzt **zwei** klar als **Simulation** und **nicht-archiv** gekennzeichnete Übungsklausuren mit **mehrstufigen** Blöcken und **Transfer**-Anteilen sowie **acht** Konzepte mit **eigenen** mehrstufigen Schnelltest-Samen. Schwächen in **Autograde-Präzision**, **Graphik**, und **Source-Fidelity** bleiben transparent offen.
