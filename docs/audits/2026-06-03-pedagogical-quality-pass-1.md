# Pedagogical Quality Pass 1 — first-time learner effectiveness

Learning-effectiveness pass across the fleet. **No visual redesign** — existing tokens, layout, and shell chrome preserved.

## Validation

| Check | Result |
|-------|--------|
| `npm run validate` | OK (includes `check-portal-shell.mjs`, `check-math-literals.mjs`, `check-right-rail.mjs`) |
| `npm run trust:pass1` | OK (`tools/clickthrough/trust-regression-pass-1.mjs` — all checks passed) |

## Task matrix

| # | Task | Status | Implementation |
|---|------|--------|----------------|
| 1 | Math rendering / CI guard | **Done** | Statistik `#\{` → `\left\|\{...\}\right\|` in `chapters.js` + `formulaCards.js`; `tools/exam-os/check-math-literals.mjs` (raw `#\{`, MathJax/KaTeX error strings incl. `You can't use`, `Missing open brace`, `ParseError`, `Undefined control sequence`, error color markup); wired in `ci-validate.mjs`; inline-math `white-space: nowrap` for short variables in `premium-refinement.css` |
| 2 | Landing orientation + trust | **Done** | Portal-first hero (`updateHeroShelf(null)` on load); exact trust copy in `index.html`; recommended module as `#heroFeatured` card (hero title/desc stay portal-wide); tile action badges via `getLandingNextAction` |
| 3 | Learning-state module cards | **Done** | Weiterlernen / Starten / Wiederholen / Test starten badges on tiles (`common.js`, `learnerPedagogy.js`) |
| 4 | Lesson outcomes | **Done (fleet)** | `renderLessonOutcomes` at top of theory tab from `entry.objectives` (`renderer.js`) |
| 5 | Tab workflow hint | **Done** | Injected after `#tabRow` in `app.js` when concept view active |
| 6 | Formula pedagogy extras | **Done (fleet)** | `renderFormulaPedagogyExtras`: Warum / Wann / Fehler on every formula card; `f-variables` list when data provides `variables`; per-formula `whenToUse` / `commonMistake` where enriched in data |
| 7 | Derivation step chain | **Done (fleet UI)** | Collapsible Herleitungen `<details>`; `getDerivationStepRole` labels (Ausgangspunkt, Schritt, Bedeutung, Ergebnis, Warum erlaubt?, Klausurregel); `whyAllowed` / `meaning` / `klausurregel` rendered when present in `derivationSteps` |
| 8 | Active fehler checks | **Done (fleet)** | `renderFehlerChecklist` converts rail warnings to checkbox prompts on theory tab |
| 9 | Vor den Aufgaben | **Done** | Concrete readiness checklist fallback in `theoryStructure.js` (no “Lern-Checkliste” placeholder) |
| 10 | Mastery checkpoint | **Done (fleet)** | End of theory tab: recall + formula + application + error + CTA to Aufgaben |
| 11 | Micro-retrieval | **Partial** | One revealable check after outcomes (`buildTheoryMicroCheck`); not yet after every major theory block |
| 12 | Staged Aufgaben flow | **Done (guided tasks)** | `renderStagedPracticeCard`: Hinweis → Ansatz → Schritt → Lösung → Fehlercheck; **ähnliche Aufgabe** scrolls to next task in list (`__scrollToSimilarTask`) |
| 13 | Klausurerkennung | **Done (fleet)** | `renderExamRecognitionBlock` on theory tab (generic from concept metadata) |
| 14 | Confidence 0–3 | **Done (fleet)** | `renderConfidenceCheckpoint` + localStorage; low confidence schedules SRS due, high calls `updateSRS` |
| 15 | Review controls | **Done (fleet)** | Unsicher / Wiederholen / Beherrscht UI + localStorage; wired to SRS (`loadSRS`/`saveSRS`/`updateSRS` in `app.js`) |
| 16 | Visual intuition diagrams | **Partial** | Density diagram on Statistik `nichtparametrisch`; other visual topics not fleet-covered |
| 17 | Label clarity | **Mostly done** | `LEARNER_LABELS` in pedagogy helper; fleet renderer uses Wichtigste Formel / In den Quellen prüfen / Klausurähnliche Übung; legacy module renderers (mikro1/oekonometrie forks) still use old strings |
| 18 | Progressive disclosure | **Partial** | Herleitungen collapsible; source-use in `<details>`; long theory bodies unchanged |
| 19 | Source-use pedagogy | **Done** | `renderSourceUsePedagogy` at theory tab tail |
| 20 | Right-rail empty-section guard | **Done** | `rightPanel.js` hides empty sections and uses compact formula index chips; `check-right-rail.mjs` wired into CI |

## Files changed (this pass)

| Area | Files |
|------|-------|
| Pedagogy core | `assets/js/portal-core/pedagogy/learnerPedagogy.js` |
| Renderer / theory | `assets/js/portal-core/ui/renderer.js`, `assets/js/portal-core/ui/rightPanel.js`, `theory/theoryStructure.js` |
| Shell | `assets/js/portal-core/app.js`, `assets/js/common.js` |
| Landing | `index.html` |
| Statistik content | `statistik/js/data/chapters.js`, `formulaCards.js` |
| CI | `tools/exam-os/check-math-literals.mjs`, `tools/exam-os/check-right-rail.mjs`, `ci-validate.mjs` |
| Styles | `assets/css/premium-refinement.css` (pedagogy block only) |
| Clickthrough | `tools/clickthrough/verification-pass2.mjs` (Intuition → Theorie) |

## Manual spot-check (recommended)

- [ ] Landing: hero = “VWL Lernportal”, trust note visible, featured card on tile focus, tile action badges
- [ ] First lesson (e.g. mikro1 budget): outcomes block, micro-check, tab workflow, mastery tail
- [ ] Formeln tab: pedagogy extras, collapsible Herleitungen with step-role badges
- [ ] Statistik `nichtparametrisch`: density diagram + fixed count notation
- [ ] Aufgaben: staged buttons on guided tasks; “Ähnliche Aufgabe” scrolls to next card
- [ ] Dark mode: pedagogy blocks readable
- [ ] Right rail: fehler checklist mirrors warnings without duplicate harsh styling
- [ ] Confidence + review controls update SRS due badges in nav

## Remaining gaps (Pass 2 candidates)

1. Fleet math literal scan beyond data JS (HTML templates, inline theory strings in all modules).
2. Enrich `formulaCards` fleet-wide with `whenToUse`, `commonMistake`, structured `derivationSteps` (`whyAllowed`, `klausurregel`).
3. Wire `renderMicroRetrievalCheck` after major theory sections (per-section metadata).
4. “Ähnliche Aufgabe” with task-pool rotation per family (not only next-in-list scroll).
5. Migrate mikro1/oekonometrie legacy renderer label strings to `LEARNER_LABELS`.
6. Visual intuition diagrams for other graph-heavy concepts (mikro1 surplus, makro IS-LM, etc.) — source-grounded only.

## Source materials used

- Statistik NP density: `source-materials/Statistik/` (lecture notation for count-in-window; diagram is platform-added-explanation).
- No new academic claims beyond existing module data + platform-added drill/explanation blocks (tagged in UI).
