# Pedagogical UI Cleanup Pass — learner-facing polish

Cleanup pass on fleet pedagogy surfaces. **No visual redesign** — existing tokens, layout, and shell chrome preserved.

## Validation

| Check | Result |
|-------|--------|
| `npm run validate` | OK (includes new `check-learner-ui-literals.mjs`) |
| `npm run trust:pass1` | OK (`tools/clickthrough/trust-regression-pass-1.mjs` — all checks passed) |

## Task matrix

| # | Task | Status | Implementation |
|---|------|--------|----------------|
| 1 | Remove internal metadata from learner UI | **Done** | Removed `pedagogy-source-note` / `platform-added-*` / `source-distilled` footnotes from `learnerPedagogy.js` and `theoryStructure.js` synthesize blocks; extended `studentizeTheoryHtml()` + `warningSystem.js` DOM strip |
| 2 | Fix raw HTML / CI guard | **Done** | Staged panels use structured markup + `escapeHtml`; new `tools/exam-os/check-learner-ui-literals.mjs` wired in `ci-validate.mjs` |
| 3 | Staged Aufgaben controls | **Done** | Forward-only main row (`Hinweis → Ansatz → Nächster Schritt → Lösung prüfen`); panel-local `Schließen`; exam self-check wording |
| 4 | Exercise reveal panel styles | **Done** | Distinct `--hint` / `--approach` / `--step` / `--fehlercheck` / `--solution` tokens in `premium-refinement.css` |
| 5 | Definitionen glossary rows | **Done** | Cards fallback now uses `theory-glossary-*` rows (not bullet list); quiet footer |
| 6 | Vor den Aufgaben | **Done** | Concrete `Ich kann …` / `Ich erkenne …` / `Ich kenne …` readiness lines; no Lern-Checkliste placeholder |
| 7 | Mastery Check | **Done** | Labelled rows (Konzept, Formel, Anwendung, Fehler) instead of numbered list |
| 8 | Klausurerkennung | **Done** | Labelled rows: Erkennen, Erste Entscheidung, Erster Rechenschritt, Häufige Falle, Kernsatz |
| 9 | Learning outcomes | **Done** | `renderLessonOutcomes` fallback uses chapter title + `entry.formeln` labels + motivation snippet |
| 10 | Formula presentation | **Done** | Tighter `formula-ref-card` spacing; `f-meaning` already present in renderer |
| 11 | Validation | **Done** | Both CI commands green |

## Files changed

| Area | Files |
|------|-------|
| Pedagogy core | `assets/js/portal-core/pedagogy/learnerPedagogy.js` |
| Theory structure | `assets/js/portal-core/theory/theoryStructure.js` |
| Renderer / warnings | `assets/js/portal-core/ui/renderer.js`, `warningSystem.js` |
| Shell | `assets/js/portal-core/app.js` (`__closeReveal`, forward-only reveal) |
| Student text strip | `assets/js/portal-core/utils/studentFacingText.js` |
| Styles | `assets/css/premium-refinement.css` (pedagogy block only) |
| CI | `tools/exam-os/check-learner-ui-literals.mjs`, `ci-validate.mjs` |
| Clickthrough | `tools/clickthrough/trust-regression-pass-1.mjs` (`Lösung prüfen` button label) |

## Remaining gaps

1. Module `chapters.js` theory strings still contain inline `platform-added-*` / `Lern-Checkliste` footnotes — stripped at render via `studentizeTheoryHtml()`, not yet removed at source in data files.
2. Legacy module renderers (mikro1/oekonometrie forks) may still emit old label strings outside fleet pedagogy helpers.
3. Micro-retrieval not yet wired after every major theory section (unchanged from Pass 1).
4. `check-learner-ui-literals.mjs` scans fleet pedagogy paths only; module data HTML not yet in scope.

## Source materials used

- No new academic claims; cleanup is presentation-only on existing fleet pedagogy and theory synthesis helpers.
