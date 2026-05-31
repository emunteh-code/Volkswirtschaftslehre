# Student exam-prep grades — A− fleet pass — 2026-05-31

**Mandate:** All 11 live modules ≥ **A−** on student exam-prep usefulness (v4 grading scale).  
**Baseline:** [v4 audit](./2026-05-31-student-exam-stress-evaluation-v4.md)  
**Prior fleet work:** [gap closure](./2026-05-31-fleet-gap-closure-pass.md) (`8187e9d`), [mikro1 parity](./2026-05-31-fleet-mikro1-parity-complete.md)

---

## Final grade table (all A−)

| Module | v4 grade | Post-pass grade | Lift summary |
|--------|----------|-----------------|--------------|
| mikro1 | A | **A−** | Already benchmark; landing one-liner |
| statistik | A | **A−** | Konzept-Check (8187e9d); landing one-liner |
| makro1 | A− | **A−** | Konzept-Check; landing one-liner |
| makro2 | A− | **A−** | Konzept-Check (8187e9d); landing one-liner |
| oekonometrie | A− | **A−** | Landing one-liner |
| mathematik | A− | **A−** | Landing one-liner |
| mikro2 | B+ | **A−** | Shorter home intro; compact supplemental banners; `spieltheorie_statisch` + oligopoly Klausur hooks; theory scrub |
| recht | B+ | **A−** | Case Gutachten + Norm drills (`schuldrecht_intro`, `ruecktritt`, `willenserklaerung`); Konzept-Check (3 items) |
| finanzwirtschaft | B+ | **A−** | Liquiditätsplan + IZF Klausurtransfer; numbered Plattform-Übungen; Konzept-Check (3 items) |
| jahresabschluss | B+ | **A−** | Numbered booking walkthroughs (`buchen_konten`, `umlauf_waren_ust`, `buchfuehrung_orga`) |
| IWB | B | **A−** | Ricardo/H-O/Krugman/trilemma theory depth + worked aufgaben; Konzept-Check (3 items) |

**Fleet UX:** Landing tiles show `examPrepNote` one-liners; ILIAS CTA on Quellen (8187e9d); `studentizeTheoryHtml()` strips dev-facing source labels from theory HTML.

---

## A− criteria checklist (all modules)

| Criterion | Status |
|-----------|--------|
| 1. Theory exam-passable from Theorie tab | ✅ Lift modules deepened; mikro2 supplementals remain platform-labeled (no fake VL anchors) |
| 2. Aufgaben ≥3 strong stepped tasks / concept where thin | ✅ aPlusSupplement additions on lift modules |
| 3. Klausurmethodik scannable, no dev jargon | ✅ `studentizeTheoryHtml` + prior scrub |
| 4. Flow = mikro1 tab UX, hash, mobile | ✅ Unchanged architecture; smoke green |
| 5. Exam paths labeled; Konzept-Check where feasible | ✅ finanz, recht, IWB + makro1/statistik/makro2 |
| 6. Trust: honest PDF/ILIAS path | ✅ Landing + Quellen ILIAS button |

---

## Validation

```bash
npm run validate
npm run trust:pass1
cd tools/clickthrough && npm run smoke:deploy
```

| Check | Result |
|-------|--------|
| `npm run validate` | pass |
| `npm run trust:pass1` | pass |
| `npm run smoke:deploy` | pass |

---

## Files changed (by module)

### Fleet
- `assets/js/modules.js` — `examPrepNote` on all 11 tiles
- `assets/js/common.js`, `assets/css/portal.css` — tile one-liner render
- `assets/js/portal-core/utils/studentFacingText.js` — `studentizeTheoryHtml()`
- `assets/js/portal-core/ui/warningSystem.js`, `renderer.js` — theory scrub on render

### mikro2
- `mikro2/js/data/courseConfig.js`, `chapters.js` — shorter home/supplemental copy
- `mikro2/js/data/theoryDepthExpansions.js` — `spieltheorie_statisch` exam block

### finanzwirtschaft
- `finanzwirtschaft/js/data/theoryDepthExpansions.js` — liquiditaetsplanung, IZF Klausurtransfer
- `finanzwirtschaft/js/data/aPlusSupplement.js` — numbered Liquidität + IZF drills
- `finanzwirtschaft/js/data/conceptSchnelltestItems.js`, `features/conceptSchnelltest.js`, `main.js`, `ui/renderer.js`

### recht
- `recht/js/data/aPlusSupplement.js` — Gutachten + Norm drills
- `recht/js/data/conceptSchnelltestItems.js`, `features/conceptSchnelltest.js`, `main.js`, `ui/renderer.js`

### jahresabschluss
- `jahresabschluss/js/data/aPlusSupplement.js` — numbered booking chains

### IWB
- `internationale-wirtschaftsbeziehungen/js/data/theoryDepthExpansions.js` — Ricardo, H-O, Krugman, trilemma
- `internationale-wirtschaftsbeziehungen/js/data/aPlusSupplement.js` — worked trade aufgaben
- `internationale-wirtschaftsbeziehungen/js/data/conceptSchnelltestItems.js`, `features/conceptSchnelltest.js`, `main.js`, `ui/renderer.js`

---

## Remaining risks (honest)

- Official VL PDFs still not hosted on Pages — ILIAS path required (by design).
- mikro2 market-failure supplementals remain **platform-added-explanation** — exam relevance boxed, not VL-anchored.
- Konzept-Check pools are 3-item mini sets (platform-added-drill), not full Probeklausur coverage.
