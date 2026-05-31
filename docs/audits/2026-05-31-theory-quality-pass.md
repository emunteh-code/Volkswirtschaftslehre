# Theory quality pass — 2026-05-31

Generated: 2026-06-01  
Benchmark: mikro1 (~2 749 chars/concept, 90 727 total)  
Method: Hand expansion in `chapters.js` / `curriculum.js` from source syllabi; avoid generic `theoryDepthExpansions` padding loops.

## Theory volume — before vs after (% of mikro1 = 90 727)

| Module | Before avg | After avg | Before % | After % | Δ thin |
|--------|-----------|-----------|----------|---------|--------|
| mikro1 | 2 749 | 2 749 | 100% | 100% | 10/33 (unchanged) |
| mikro2 | 2 434 | 2 514 | 48% | 49% | 11→10/18 |
| makro1 | 3 068 | 3 123 | 47% | 48% | 5→4/14 |
| makro2 | 2 152 | 2 255 | 71% | 74% | 27→24/30 |
| oekonometrie | 2 137 | 2 189 | 75% | 77% | 27→25/32 |
| statistik | 2 844 | 2 844 | 44% | 44% | 0/14 |
| mathematik | 3 442 | 3 442 | 53% | 53% | 0/14 |
| finanzwirtschaft | 2 551 | 2 602 | 53% | 54% | 8→7/19 |
| jahresabschluss | 2 443 | 2 688 | 40% | 44% | 9→6/15 |
| recht | 2 964 | 2 964 | 46% | 46% | 3/14 |
| IWB | 2 547 | 2 584 | 45% | 45% | 6→5/16 |

**Gate:** ≥2 500 chars/concept and ≥4 `section-block`s per concept.

## Concepts expanded (hand-authored)

### jahresabschluss
- `eigenkapital_personengesellschaften` — Buchungstechnik VL 7.3, AG-Abgrenzung, Klausurpfad
- `umlauf_waren_ust` — durchgerechnetes USt-Beispiel, Warenverbrauch, Klausurtransfer
- `anlagevermoegen` — GWG-Schwelle, Buchungskette, AfA-Falle

**Source files:** `source-materials/Jahresabschluss/` (JA Companion §7.3 Personengesellschaften, Umlauf/USt, Anlagevermögen headings in `jahresabschluss.generated.json`)

### makro2
- `wk_krisen` — first/second-generation crisis, Erwartungskanal, Klausurschema
- `phillipskurve` — NAIRU, zweite Fehleranalyse, Klausurtransfer
- `solow_basis` — numerisches Cobb-Douglas-Beispiel, Klausurpfad

**Source files:** `source-materials/Makroökonomik II/` (offene VW, Wachstum, Geldpolitik VL blocks)

### mikro2
- `preisdiskriminierung` — 1./2./3. Grad, Grenzerlös-Mechanismus, Fehleranalyse, Klausurtransfer

**Source files:** `source-materials/Mikroökonomik II/` (Monopol/Preisdiskriminierung VL)

### internationale-wirtschaftsbeziehungen
- `verteilung_handel` — Stolper-Samuelson worked intuition, Klausurtransfer

**Source files:** `source-materials/Internationale Wirtschaftsbeziehungen/` (H-O, Verteilung VL3)

### makro1
- `geldnachfrage` — IS-LM-Verknüpfung, komparative Statik, Klausurpfad

**Source files:** `source-materials/Makroökonomik I/` (Geldmarkt VL)

### finanzwirtschaft
- `finanz_denkweise` — Zahlungsreihe als Grundobjekt, Zeitwertformel, Klausurtransfer

**Source files:** `source-materials/Finanzwirtschaft/`

### oekonometrie (via `curriculum.js`)
- `ols_objective` — FOC/Normalgleichungen, SSR/TSS-Falle, Klausurtransfer
- `monte_carlo` — Prüfungsstandard Simulation, zu wenige Wiederholungen

**Source files:** `source-materials/Ökonometrie/`

## Spot-check (≥4 sections)

| Module | Concepts checked | Sections |
|--------|-----------------|----------|
| jahresabschluss | `eigenkapital_personengesellschaften`, `umlauf_waren_ust` | 6, 6 |
| makro2 | `wk_krisen`, `phillipskurve` | 7, 7 |
| mikro2 | `preisdiskriminierung`, `monopol_preissetzung` | 6, 4 |
| oekonometrie | `ols_objective`, `monte_carlo` | 6, 6 |

## Validation

| Check | Result |
|-------|--------|
| `ci-validate.mjs` | OK |
| VL layers regenerated | jahresabschluss, makro2, mikro2, IWB, makro1, finanz, oekonometrie |
| `audit-current-state.mjs --write` | refreshed |

## Honest gaps (still need PDF-anchored work)

| Module | Gap |
|--------|-----|
| makro2 | 24/30 concepts still &lt;2 500 chars; open-economy blocks need per-concept VL expansion in base `chapters.js` |
| oekonometrie | 25/32 thin; estimator-property concepts in curriculum need section-level PDF anchors |
| mikro2 | `externa_*`, `public_goods` remain platform-added with honest scope notice — no fake VL |
| jahresabschluss | 6 concepts still thin (`eigenkapital_kapitalgesellschaften`, `umlauf_bewertung_verfahren`, …) |
| recht | `trennung_abstraktion`, `willenserklaerung` need exam-transfer sections (edit blocked on Unicode quotes — next pass) |
| mikro1 | 10 concepts marginally below 2 500 (polish pass deferred) |
| statistik / mathematik | Already at gate on sections; no char expansion needed this pass |

## Tools

```bash
node tools/exam-os/generate-vl-layers.mjs --module <slug> --write
node tools/exam-os/audit-current-state.mjs --write
node tools/exam-os/ci-validate.mjs
node tools/exam-os/list-thin-concepts.mjs
```
