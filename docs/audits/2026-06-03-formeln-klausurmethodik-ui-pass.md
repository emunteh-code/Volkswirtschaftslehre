# Formeln & Klausurmethodik UI Redesign Pass

Fleet implementation via shared `portal-core` renderer, pedagogy helpers, and `premium-refinement.css`. No route/IA changes.

## Task matrix

| # | Requirement | Status | Implementation |
|---|-------------|--------|----------------|
| 1 | Einsatzgrenzen rule-card zones | **Done** | `renderFormulaEinsatzgrenzenBlock` → stacked `.rule-zone` blocks; source meta in tiny `<details>` |
| 2 | Klausurmethodik exam playbook | **Done** | `renderTaskFamilyCard` → `.klausur-playbook-card` with summary, 3 visible rows, disclosure, footer actions |
| 3 | Label renames §3 | **Done** | `FORMULA_RULE_LABELS`, `KLAUSUR_METHOD_LABELS` in `learnerPedagogy.js` |
| 4 | Definitionen glossary | **Verified** | Existing `theory-glossary-*` rows + desktop 180–220px term column |
| 5 | Vor den Aufgaben checklist | **Done** | Subtitle + `Ich kann/erkenne/kenne/weiß` items with square markers |
| 6 | Selbsttest vor der Klausur | **Done** | Subtitle + structured checkbox rows |
| 7 | Klausurerkennung decision aid | **Done** | Erkennen, Erste Entscheidung, Erster Rechenschritt, Häufige Falle, highlighted Kernsatz |
| 8 | Mastery Check checkpoint | **Done** | Subtitle + 120px label rows + separated CTA |
| 9 | Right rail warning cap | **Verified** | `renderRightRailWarnings` max 2 + overflow disclosure; compact amber styling |
| 10 | Formeln rail | **Done** | Hide section when no formulas; compact chips; cross-tab hint “Im Formeln-Tab anzeigen” |
| 11 | Typography/spacing | **Done** | Spec scale (12/14/16/18px, 4–24px gaps) in shared pedagogy CSS |
| 12 | Responsive | **Done** | Label/content stacks ≤767px; meta chips wrap |
| 13 | Shared implementation | **Done** | `.rule-card`, `.rule-zone`, `.klausur-playbook-*`, shared pedagogy rows |
| 14 | Validation | **See below** | CI guards extended in `check-learner-ui-literals.mjs`, `check-right-rail.mjs` |
| 15 | Acceptance criteria | **See below** | |

## Acceptance criteria

1. Einsatzgrenzen cards use stacked semantic zones, not table rows.
2. Use-case (green), assumptions (neutral), invalid-use (amber), mistakes (warm) are visually distinct.
3. Klausurmethodik shows recognition cue, first thought, first step above the fold.
4. Disclosure button “Methode & Fallen anzeigen” is full-width and clearly interactive.
5. Definitionen reads as glossary rows (not raw bullets for 2+ terms).
6. Vor den Aufgaben reads as a concrete readiness checklist.
7. Selbsttest has subtitle and per-row checkboxes.
8. Klausurerkennung uses labelled decision rows with highlighted Kernsatz.
9. Mastery Check has subtitle, four labelled rows, and separated CTA.
10. Right rail shows max 2 expanded warnings; overflow behind disclosure.
11. Formeln rail hidden when concept has no formulas; never an empty shell.
12. Tab reads as exam-prep reference, not generated documentation tables.

## Validation

```bash
npm run validate
npm run trust:pass1
```

## Manual inspect checklist

- [ ] Statistik → Deskriptive Statistik → Formeln & Klausurmethodik (Einsatzgrenzen zones + Klausurmethodik playbook)
- [ ] Statistik → ANOVA → Formeln & Klausurmethodik
- [ ] Mikro I → Cobb-Douglas → Formeln & Klausurmethodik
- [ ] Concept with 3+ rail warnings → max 2 expanded, “Weitere Fehler anzeigen”
- [ ] Theorie tab → Klausurerkennung, Selbsttest, Mastery Check, Vor den Aufgaben
- [ ] Right rail on Theorie (non-Formeln tab) → formula chips with “Im Formeln-Tab anzeigen”
- [ ] Mobile ≤375px — playbook rows stack; chips wrap
- [ ] Dark mode — one Formeln tab page

## Files changed

| Area | Files |
|------|-------|
| Pedagogy | `assets/js/portal-core/pedagogy/learnerPedagogy.js` |
| Enrichment | `assets/js/portal-core/ui/klausurmethodikEnrichment.js` |
| Renderer | `assets/js/portal-core/ui/renderer.js` |
| Theory | `assets/js/portal-core/theory/theoryStructure.js` |
| Right rail | `assets/js/portal-core/ui/rightPanel.js` |
| CSS | `assets/css/premium-refinement.css` |
| CI | `tools/exam-os/check-learner-ui-literals.mjs`, `check-right-rail.mjs` |
| Audit | `docs/audits/2026-06-03-formeln-klausurmethodik-ui-pass.md` |

## Remaining gaps

1. Module `chapters.js` theory strings may still contain inline metadata — stripped at render, not removed at source.
2. `renderFormulaPedagogyExtras` on formula cards still uses Warum/Wann/Fehler micro-tags (out of Einsatzgrenzen scope; separate card footer).
3. Manual browser spot-checks not run in CI.
