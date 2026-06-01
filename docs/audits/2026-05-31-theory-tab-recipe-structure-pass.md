# Theory tab recipe structure pass

Date: 2026-05-31  
Scope: all 11 fleet modules — unified Theorie tab (“recipe book for understanding”) without content deletion.

## Canonical section order

| Step | Heading | ID |
|------|---------|-----|
| 1 | Orientierung | `orientierung` |
| 2 | Kernidee | `kernidee` |
| 3 | Definitionen | `definitionen` |
| 4 | Formale Darstellung | `formale` |
| 5 | Mechanismus & Zusammenhänge | `mechanismus` |
| 6 | Anwendung & Klausurtransfer | `anwendung` |
| 7 | Häufige Fehler | `fehler` |
| 8 | Vor den Aufgaben | `vor_aufgaben` |

**Orientierung** for exam motivation is also shown via `entry.motivation` in the concept header (renderer). **Vor den Aufgaben** is appended at render time from `entry.objectives` when present (platform bridge checklist).

## Implementation

| Layer | File | Role |
|-------|------|------|
| Canonical spec | `assets/js/portal-core/theory/theoryStructure.js` | `THEORY_SECTION_ORDER`, `classifyTheorySection`, `normalizeTheoryHtml`, `applyTheoryRecipeChrome` |
| Migration | `tools/exam-os/normalize-theory-structure.mjs` | Re-wraps legacy `.section-block` h3 sections into `.theory-recipe-section` (dry-run / `--write`) |
| Render | `assets/js/portal-core/ui/warningSystem.js` | Applies recipe chrome before warn-box extraction |
| Styles | `assets/css/premium-refinement.css` | Step numbers, subsection h4, pre-task checklist |

Subsection titles from source material are preserved as **h4** inside `.theory-recipe-body` (no paragraph loss). `.warn-box` elements remain in source HTML; `warningSystem` still lifts them to the right-rail „Häufige Fehler“ surface.

## Fleet compliance (baked HTML)

| Module | Concepts | Normalized in `chapters.js` | Runtime normalize |
|--------|----------|----------------------------|-------------------|
| mikro1 | 33 | 33 | — |
| mikro2 | 18 | 18 | — |
| makro1 | 14 | 14 | — |
| makro2 | 30 | 30 | — |
| statistik | 14 | 13 | `rlab` via `renderStatistikRLabTheory()` |
| finanzwirtschaft | 19 | 19 | — |
| jahresabschluss | 15 | 15 | — |
| recht | 14 | 14 | — |
| internationale-wirtschaftsbeziehungen | 16 | 16 | — |
| oekonometrie | 32 | — | `renderTheoryHtml()` + depth merge |
| mathematik | 14 | — | `renderTheoryHtml()` |

**Total concepts with recipe structure:** 219 (205 persisted + 14 runtime-built).

## Heading keyword mapping (summary)

- **Definitionen:** „Formale Definition“, „Definition“, „Grundbegriffe“, axioms, core object definitions.
- **Formale Darstellung:** math-heavy blocks, Herleitung, FOC, test statistics, OLS/normal equations.
- **Anwendung & Klausurtransfer:** Klausur*, Prüfung*, Gutachten, Mini-Gutachten, Prüfungsstandard.
- **Häufige Fehler:** Fehleranalyse, warn-only blocks, Prüfungsfalle/Klassiker headings.
- **Default bucket:** Mechanismus & Zusammenhänge (examples, comparative statics, mechanisms).

## Validation

- `npm run validate` — OK
- `npm run trust:pass1` — see CI / local run (sample concepts per module)

## Remaining risks

- Keyword classifier may bucket an unusual subsection title into Mechanismus; titles remain visible as h4.
- Ökonometrie/Mathematik depend on curriculum `sections[]` titles — recipe shape is applied at build/render, not in curriculum rows.
- Modules with appended `THEORY_DEPTH_EXPANSIONS` fragments are re-normalized after merge (ökonometrie).

## Source files consulted

- `mikro1/js/data/chapters.js` (benchmark subsection density)
- Fleet `*/js/data/chapters.js`, `oekonometrie/js/data/curriculum.js`, `mathematik/js/data/curriculum.js`
- `assets/js/portal-core/ui/renderer.js` (motivation banner, theory panel)
