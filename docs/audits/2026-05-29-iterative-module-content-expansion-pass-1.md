# Iterative module content expansion — pass 1

**Date:** 2026-05-29  
**Goal:** Raise per-concept theory/task depth toward Mikro I granularity on the thinnest fleet modules, source-faithfully (no invented curriculum).

## Modules touched

| Module | Status | Theory chars (before → after) | Theory % of mikro1 (before → after) | Portal tasks (before → after) |
|--------|--------|-------------------------------|-------------------------------------|-------------------------------|
| `jahresabschluss` | **expanded** | 24 489 → 26 889 | 27% → 30% | 42 → 47 |
| `internationale-wirtschaftsbeziehungen` | **expanded** | 29 370 → 30 642 | 32% → 34% | 41 → 44 |
| `finanzwirtschaft` | **expanded** | 38 013 → 38 013* | 42% → 42% | 66 → 66 |
| `recht` | deferred | — | — | — |
| `makro1` | deferred | — | — | — |
| `mikro2` | deferred | — | — | — |

\*Fleet counter unchanged at module level; expanded concepts gained sections/tasks locally (see below).

## Source files used

### jahresabschluss
- `docs/audits/source-syllabus/jahresabschluss.generated.json` (Companion TOC: Kap. 1 Grundlagen, Kap. 3 Buchen, Kap. 6.3 Werkstoffbuchungen)
- `source-materials/Jahresabschluss/` corpus via registry (HGB Jahresabschluss Companion, JA exercises)

### internationale-wirtschaftsbeziehungen
- `docs/audits/source-syllabus/internationale-wirtschaftsbeziehungen.generated.json` (VL12 monetäres Trilemma; handelspolitik / Quoten)
- `source-materials/Internationale Wirtschaftsbeziehungen/` (Krugman et al. chapter signals)

### finanzwirtschaft
- `docs/audits/source-syllabus/finanzwirtschaft.generated.json` (VL „Aufzinsen und Abzinsen“; IZF Wiederanlage-/Refinanzierungsprämisse; intertemporale Wahl)
- `source-materials/Finanzwirtschaft/` (12 PDFs indexed)

## Concepts expanded

### jahresabschluss
| Concept | Before (theory est.) | After (theory est.) | Changes |
|---------|---------------------|---------------------|---------|
| `rechnungswesen_intro` | ~1.3k, 3 sections, 2 tasks | +1 section (Adressaten), +1 formel, +1 aufgabe | ~1.7k |
| `buchen_konten` | ~1.0k, 3 sections, 2 tasks | +2 sections (GuV-Abschluss, Prüfungsroutine), +1 formel, +2 aufgaben | ~2.4k |
| `werkstoffe_erzeugnisse_buchungen` | ~1.0k, 3 sections, 2 tasks | +2 sections (Fortschreibung/Inventur detail), +1 formel, +2 aufgaben | ~2.5k |

### internationale-wirtschaftsbeziehungen
| Concept | Before | After | Changes |
|---------|--------|-------|---------|
| `quoten_sanktionen` | ~1.4k, 3 sections, 2 tasks | +1 section (dynamische Quote), +1 formel, +1 aufgabe | ~1.9k |
| `trilemma` | ~1.3k, 3 sections, 2 tasks | +2 sections (VL12 Evidenz, flex. Kurse), +1 formel, +2 aufgaben | ~2.2k |

### finanzwirtschaft
| Concept | Before | After | Changes |
|---------|--------|-------|---------|
| `intertemporale_wahl` | ~1.2k, 3 sections, 2 tasks | +2 sections (Investitionsverschiebung, Fisher klausurnah), +1 formel, +1 aufgabe | ~1.9k |
| `auf_abzinsen` | ~1.0k, 3 sections, 3 tasks | +2 sections (Zeitachse, Soll/Habenzins), +1 formel | ~1.8k |
| `izf_grenzen` | ~1.0k, 3 sections, 2 tasks | +2 sections (Refinanzierung, Kapitalwert-Regel), +1 formel, +1 aufgabe | ~1.7k |

*Per-concept “est.” = raw `theorie` array character length in `chapters.js` (HTML included); module totals from `audit-current-state.mjs`.*

## Files changed

- `jahresabschluss/js/data/chapters.js`
- `jahresabschluss/js/data/formulaCards.js` (regenerated)
- `jahresabschluss/js/data/taskFamilies.js` (regenerated)
- `jahresabschluss/js/data/masteryData.js` (regenerated)
- `internationale-wirtschaftsbeziehungen/js/data/chapters.js`
- `internationale-wirtschaftsbeziehungen/js/data/formulaCards.js` (regenerated)
- `internationale-wirtschaftsbeziehungen/js/data/taskFamilies.js` (regenerated)
- `internationale-wirtschaftsbeziehungen/js/data/masteryData.js` (regenerated)
- `finanzwirtschaft/js/data/chapters.js`
- `finanzwirtschaft/js/data/formulaCards.js` (regenerated)
- `finanzwirtschaft/js/data/taskFamilies.js` (regenerated)
- `finanzwirtschaft/js/data/masteryData.js` (regenerated)
- `docs/audits/module-parity-vs-mikro1.generated.{json,md}` (regenerated)
- `docs/audits/audit-current-state.generated.json` (regenerated)
- `docs/audits/check-readiness.generated.json` (regenerated)

## Validation

```bash
node tools/exam-os/ci-validate.mjs                    # OK
node tools/exam-os/audit-current-state.mjs --write    # 11/11 modules
node tools/exam-os/build-module-parity-report.mjs --write
node tools/exam-os/check-readiness.mjs --write      # blockers: []
```

Per-module generators run for all three touched modules (`generate-vl-layers.mjs`, `generate-mastery-scaffold.mjs`).

## Remaining gaps (next iteration)

1. **recht** (42% theory) — expand thin liability/contract concepts; source: `source-materials/Recht/`
2. **makro1** (42% theory) — deepen IS-LM / policy chapters with VL anchors
3. **jahresabschluss** — still ~30% module theory vs mikro1; next: `buchfuehrung_orga`, `umlauf_*`, `eigenkapital_*` (3-section concepts)
4. **finanzwirtschaft** — task-family parity still low (38%); expand `liquiditaetsplanung`, `izf_kapitalwertfunktion`, `finanz_denkweise`
5. **internationale-wirtschaftsbeziehungen** — `gravitation`, `kaufkraftparitaet`, `verteilung_handel` still thin; official exam item OCR backlog
6. **mikro2** — `gleichgewicht_*`, `wohlfahrt_*` supplemental blocks only where VL anchors exist

## Recommended next priority

1. `recht` + `makro1` (same theory band, no pass-1 touch)
2. Second pass on `jahresabschluss` UV/EK chapters (largest remaining gap vs mikro1 among accounting modules)
3. `finanzwirtschaft` task-family depth (families 38% vs mikro1) alongside theory on `liquiditaetsplanung` / IZF block
