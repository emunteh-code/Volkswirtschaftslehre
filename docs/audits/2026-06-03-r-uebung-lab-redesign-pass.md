# R-Übung guided lab redesign — fleet pass

Platform-wide R-Übung / coding-practice tab redesign via `portal-core/features/rPractice.js` and shared `assets/css/r-practice.css`.

## Scope

- **Fleet modules:** Statistik, Ökonometrie, Mathematik, generated-portal modules with `rPracticeBlocks`
- **Surfaces:** dedicated `r-anwendung` tab + embedded `renderRPracticeMarkup` blocks in Theorie
- **No route/IA changes** — tab label remains „R-Übung“

## What changed

| # | Requirement | Implementation |
|---|-------------|----------------|
| 1 | Two-zone lab layout (48/52, gap 28px; mobile stack) | `.r-lab-grid` — explain left, workspace right |
| 2 | Exercise header (R-Übung, title, Interaktiv badge, short goal) | `renderExerciseHeader` |
| 3 | Environment note — collapsible Browser-R | `renderEnvironmentNote` — summary „Laufumgebung: Browser-R“ |
| 4 | Left sections (Idee, Ziel der Änderung, Statistik-Idee/R-Übersetzung, Zielzeile, Auftrag, Fehler vermeiden, Nicht ändern) | `renderTaskBriefs` relabelled + collapsible pitfalls |
| 5 | Code editor (180–320px, 13.5px mono, „Code bearbeiten“, target line highlight) | `renderHighlightEditor` + `.r-hl-target-line` |
| 6 | Staged buttons | Primary Ausführen; secondary Tipp/Lösung prüfen; tertiary Zurücksetzen; low-emphasis Lösung anzeigen/einsetzen |
| 7 | Output states | `data-output-state`, `setOutputState`, state pill, aria-live |
| 8 | Output interpretation | „Was zählt im Output?“ panel below console |
| 9 | Selbstcheck checklist | `renderSelfCheckPanel` with visual checklist rows |
| 10 | Mixed-case labels | Statistik-Idee, R-Übersetzung, Zielzeile, Auftrag, Nicht ändern |
| 11 | Task contract | `renderTaskContract` — Dein Auftrag + Erfolgskriterium before code |
| 12 | Visual balance | Collapsible translation + pitfalls; fewer nested cards |
| 13 | Right rail | Unchanged in this pass (prior compact warnings pass) |
| 14 | Accessibility | aria-labels on buttons, aria-live output/check feedback, focus-visible |

## Files changed

- `assets/js/portal-core/features/rPractice.js` — markup, mount logic, solution check, output states
- `assets/css/r-practice.css` — lab grid, environment note, task contract, buttons, selfcheck, target line
- `tools/clickthrough/trust-regression-pass-1.mjs` — R shell checks updated for new grammar
- `tools/exam-os/check-r-tab-lab.mjs` — CI guard against legacy R-tab patterns
- `tools/exam-os/ci-validate.mjs` — wires new check

## Modules covered

All modules consuming `renderRAnwendungTab` / `renderRPracticeMarkup` / `mountRPracticeBlocks`:

- statistik (`statistik/js/ui/renderer.js`)
- oekonometrie (`oekonometrie/js/ui/renderer.js`)
- mathematik (`mathematik/js/ui/renderer.js`)
- generated-portal (`assets/js/generated-portal/main.js`)

## Validation

```bash
npm run validate
npm run trust:pass1
```

## Manual inspect checklist

- [ ] **Statistik → Regression: Diagnostik & Prognose → R-Übung** — two columns desktop; mobile explain → editor → output
- [ ] Environment note collapses; not dominant in header
- [ ] Zielzeile highlighted in editor when line known
- [ ] Lösung prüfen gives correct/wrong feedback; Ausführen sets output state
- [ ] Selbstcheck list visible below interpretation
- [ ] Ökonometrie matrix_notation R tab — same shell
- [ ] Mathematik funktionen_gleichungen R tab — Mathe-Idee label

## Remaining gaps

1. Plot-heavy blocks still rely on console output; plot-as-evidence messaging unchanged.
2. `guided` runtime blocks disable Ausführen — intentional; desktop-R copy path preserved.
3. Module-specific R block content (`chapters.js` data) not re-authored — UI shell only.

## Risks

- Trust pass `r-tab-shell` now requires staged controls; guided-only concepts with no live editor must still expose tip/check buttons (they do via shared renderer).
- Collapsed environment note: truth banner inside `<details>` — first-run hint attaches after environment block.
