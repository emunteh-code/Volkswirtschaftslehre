# Exam content expansion — pass 2 (makro1 PK2/PK3, recht cases, makro2 optional)

## Scope

- Continuation of **pass 1** (`docs/audits/exam-content-expansion-pass-1.md`): closes **remaining high-value gaps** called out there.
- **makro1:** `probeklausur_2` and `probeklausur_3` only (PK1 was expanded in pass 1).
- **recht:** **Aufgaben 2–3** — deeper **case preambles** and **fourth subparts** per targeted text block (all three Probeklausuren).
- **makro2 (optional):** **Aufgabe 3** on **PK2** (Taylor transfer) and **PK3** (Schulden-Stabilisator transfer); PK1 Aufgaben 2–3 already had solid numeric + regime depth from pass 0.

**Not done:** infrastructure, provenance, quick exams, `stepProblems`.

## Exact files changed

| File |
|------|
| `makro1/js/data/fullExams.js` |
| `makro2/js/data/fullExams.js` |
| `recht/js/data/fullExams.js` |
| `docs/audits/exam-content-expansion-pass-2.md` (this document) |

---

## makro1 — `probeklausur_2` (IS-LM / Realzins)

### Aufgabe 1 (wf-block)

- **Points:** 18 → **27**
- **New group:** `Zinsuntergrenze, Erwartungen und Politikmix (Fallen)`
- **New items:** `m1_pk2_7` (Liquiditätsfall / schwache Gütermarktwirkung), `m1_pk2_8` (erwarteter Realzins für Investition), `m1_pk2_9` (Fiskal + Geld können beide Kurvenlogiken treffen — **Falle** „nur eine Kurve“).

### Aufgabe 2 (text-block, `islm`)

- **Points:** 22 → **24**
- **Subpart points redistributed:** `m1_pk2_2a`–`2c` → **6+6+6**
- **New:** `m1_pk2_2d` (**6**) — Transfer: **reine Zinssenkung** bei unveränderter Fiskalpolitik → Investitionen und **Y** qualitativ.

### Aufgabe 3 (text-block, `realzins_risikopraemie_krisenkanal`)

- **Points:** 20 → **24**
- **Subpart points:** `m1_pk2_3a` **5**, `3b` **6**, `3c` **5**
- **New:** `m1_pk2_3d` (**8**) — **Transfer:** $\pi^e$ fällt von $1\%$ auf $-0{,}5\%$, Nominalzins **4 %**, Risikoprämie unverändert → **neuer Realzins $4{,}5\%$** und Richtungsfolge für Investitionsanreize.

---

## makro1 — `probeklausur_3` (Arbeitsmarkt / Phillips)

### Aufgabe 1 (wf-block)

- **Points:** 18 → **27**
- **New group:** `Phillipskurve, Schocks und Erwartungen (Transferfallen)`
- **New items:** `m1_pk3_7` ($\pi^e$ verschiebt PC nach oben), `m1_pk3_8` (negativer Angebotsschock: $\pi$ hoch, **Y** unter $Y_n$), `m1_pk3_9` (**Falle:** Nachfrageschock senkt **nicht** kurzfristig die Inflation).

### Aufgabe 2 (text-block, `arbeitsmarkt`)

- **Points:** 22 → **24**
- **Subparts:** `m1_pk3_2a`–`2c` → **7+7+5**
- **New:** `m1_pk3_2d` (**5**) — **Transfer:** $\mu$ steigt auf **0,25**, WS unverändert → **neuer PS-Reallohn** $W/P = 0{,}8$ (ohne erneutes Schnittpunkt-Rechnen verlangt).

### Aufgabe 3 (text-block, `phillips`)

- **Points:** 20 → **24**
- **Subparts:** `m1_pk3_3a`–`3c` → **6+6+5**
- **New:** `m1_pk3_3d` (**7**) — **Fallvariante:** negativer **Angebotsschock** verschiebt PC nach oben → kurzfristig **Stagflationstypische** $\pi$/Arbeitsmarkt-Logik.

---

## recht — case depth (Aufgaben 2–3)

### `probeklausur_1`

| Block | Points | Changes |
|-------|--------|---------|
| Aufgabe 2 | 22 → **24** | Sachverhalt: **Gegenangebot** 480 € nach Schweigen; **neu** `re_pk1_2d` (Annahme vs neues Angebot / kein Vertrag zu 500 €). Teilpunkte **6+6+6+6**. |
| Aufgabe 3 | 20 → **24** | Sachverhalt: **wirksamer Vertrag 500 €**, A behauptet 5.000 € gewollt; **neu** `re_pk1_3d` (Kalkulations- vs **Erklärungsirrtum** / Prüfungsabgrenzung). Teilpunkte **6+6+6+6**. |

### `probeklausur_2`

| Block | Points | Changes |
|-------|--------|---------|
| Aufgabe 2 | 22 → **24** | Sachverhalt ergänzt: **interne 5.000-€-Grenze**, Auftrag **8.000 €**; **neu** `re_pk2_2d` (interne Grenze vs **Außenvertretung** / Duldung); **`conceptId`:** `geschaeftsfaehigkeit`. |
| Aufgabe 3 | 20 → **24** | Sachverhalt: **Ladengeschäft**, AGB nur Kleingedruckt / **Widerspruch** zu mündlicher Zusage; **neu** `re_pk2_3d` (Einbeziehung scheitert vor **Inhaltskontrolle** — Überraschung / Transparenz). |

### `probeklausur_3`

| Block | Points | Changes |
|-------|--------|---------|
| Aufgabe 2 | 22 → **24** | Sachverhalt: **Nachfrist** mit Androhung, erneute Mängellieferung; **neu** `re_pk3_2d` (neben **SE stL** auch **Rücktritt** benennen). |
| Aufgabe 3 | 20 → **24** | Sachverhalt: **Widerruf** + **übermäßige Benutzung** der mangelfreien Sache; **neu** `re_pk3_3d` (**Wertersatz** / Wertminderung qualitativ). |

---

## makro2 (optional) — numerische Transfers Aufgabe 3

### `probeklausur_2` — Aufgabe 3 (`taylor_regel`)

- **Points:** 20 → **24**
- **Neu:** `pk2_3d` (**7**) — $\pi=1\%$, Outputlücke **$-1$** → **$i=0{,}7$** (Konjunktur- + Deflationsnähe in einer Rechnung).
- **Teilpunkte:** `pk2_3a`–`3c` auf **6+6+5** angepasst.

### `probeklausur_3` — Aufgabe 3 (`schuldenfinanzierung_monetarisierung`)

- **Points:** 20 → **24**
- **Neu:** `pk3_3d` (**7**) — $b=0{,}90$, $r=4\%$, $g=2\%$ → **$ps^*=1{,}8\%$** des BIP.
- **Teilpunkte:** `pk3_3a`–`3c` auf **6+6+5** angepasst.

---

## Exact new exam task / subpart IDs (pass 2)

| Module | IDs |
|--------|-----|
| makro1 | `m1_pk2_7`–`m1_pk2_9`, `m1_pk2_2d`, `m1_pk2_3d`, `m1_pk3_7`–`m1_pk3_9`, `m1_pk3_2d`, `m1_pk3_3d` |
| makro2 | `pk2_3d`, `pk3_3d` |
| recht | `re_pk1_2d`, `re_pk1_3d`, `re_pk2_2d`, `re_pk2_3d`, `re_pk3_2d`, `re_pk3_3d` |

---

## Remaining gaps (and why)

1. **makro1 PK2/PK3:** Keine zusätzliche **komplette neue Aufgabe 4**; Gesamtlänge der Probeklausur bewusst nicht nochmals gestreckt.
2. **recht:** Keine **vollständigen Gutachten-Musterschreibungen** (nur gestützte Kurzantworten); ausführliche Subsumtion wäre eher Renderer/Lernpfad-Thema.
3. **makro2 PK1 Aufgaben 2–3:** Bereits stark; **keine** weiteren Änderungen in pass 2.
4. **Punkteverteilung / Auto-Scoring:** Wie in pass 1 — falls die UI W/F-Punkte anders gewichtet, kann die Summe der Aufgaben-`points` von der tatsächlichen Gewichtung abweichen (nicht angefasst).

## Provenance

- Keine neuen Behauptungen zu Kurs-PDFs; Inhalte bleiben **platform-added-drill** im Rahmen der bestehenden Modulthemen.

## Verification

- `node --input-type=module` Import von `makro1`, `makro2`, `recht` `fullExams.js` — **ok**.
