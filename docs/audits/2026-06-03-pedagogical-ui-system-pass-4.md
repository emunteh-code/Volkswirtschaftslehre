# Pedagogical UI System Pass 4 — platform-wide closure

Fleet implementation via `portal-core` + shared CSS. No route/IA changes.

## Post-Pass 4 defect fix (2026-06-09)

| Defect | Before | After |
|--------|--------|-------|
| Raw HTML leakage (`<strong>`, `<em>`, `<br>`, entity-escaped tags) | Tags visible in Kernsatz, Klausurerkennung, theory body | `studentizeTheoryHtml` strips inline tags + entities; `sanitizeLearnerPlainText` at extraction; CI escaped-tag patterns |
| Markdown `>` markers | Glossary terms like `>Arithmetisches Mittel` | `sanitizeLearnerPlainText` strips leading `>`; CI line-start blockquote scan |
| Definitionen glossary rows | Bullet `<ul><li><strong>…</strong>` lists | `convertDefinitionListsToGlossary` → `theory-glossary-*` rows; formeln-linked terms; CSS no bullets |
| Vor den Aufgaben | “Lern-Checkliste.” / vague “Kernrelationen aktivieren” fallback | Vague paragraphs stripped; concrete Ich kann/erkenne/kenne/weiß synthesis from objectives; CI warns on Lern-Checkliste |
| Selbsttest vor der Klausur | Raw `• ☐` pattern | Structured `fehler-checklist__*` checkbox rows; concept-specific prompts from warning title + body |
| Klausurerkennung grid | Cramped 140px labels, tight gap | Grid 150px label column, 20px gap, 9px row padding; highlighted Kernsatz row |
| Right rail warnings | Full-length bodies | Truncate at 320 chars with “Mehr anzeigen”; max 2 rows + overflow disclosure |
| ConceptAnchor density | Long Kernsatz blocks, raw HTML | Split labelled rows; “Mehr anzeigen” over 200 chars; Kernsatz highlight row |

## Task matrix

| # | Requirement | Status | Implementation |
|---|-------------|--------|----------------|
| 1 | Empfohlener Ablauf — zero learner-facing | **Done** | Removed in nav pass; CI grep in `check-learner-ui-literals.mjs` |
| 2 | Sidebar — highlight bar, no blue dots | **Done** | `chapterNavigation.js`, `generated-portal/main.js`, CSS: 3px active bar, ✓ in aside only |
| 3 | Aufgaben — fleet staged panel | **Done** | mikro1/oekonometrie forks stop overriding Aufgaben tab; fleet `renderPracticePanel` |
| 4 | QUELLE pills → source links | **Done** | `buildConceptPillHtml` → `concept-source-link` copy |
| 5 | Internal metadata CI §19.3 | **Done** | Extended `check-learner-ui-literals.mjs` |
| 6 | Raw HTML / strong leak | **Done** | `studentizeTheoryHtml` strip + CI broken-tag patterns |
| 7 | Lesson intro card | **Done** | `renderLessonIntroCard` wired in theory tab |
| 8 | Klausur-Erkennung rows | **Done** | Signalwörter, Erster Gedanke, Erster Schritt, Häufige Falle, Kernsatz |
| 9 | Kernidee ConceptAnchor | **Done** | `renderConceptAnchor` in `buildIntuitionFusionFragments` |
| 10 | Definitionen glossary | **Verified** | Existing `theory-glossary-*` in `theoryStructure.js` |
| 11 | Mastery Check rows | **Verified** | Existing labelled rows in `learnerPedagogy.js` |
| 12 | Vor den Aufgaben checklist | **Verified** | `readiness-checklist` synthesis in `theoryStructure.js` |
| 13 | Right rail warnings cap | **Done** | `renderRightRailWarnings` + details overflow |
| 14 | Formeln rail never empty | **Done** | `rp-formula-fallback` in `rightPanel.js` |
| 15 | Grafik micro-check | **Done** | `renderGraphPedagogyFooter` micro-retrieval |
| 16 | Formula/Klausurmethodik cards | **Verified** | Prior passes; compact cards unchanged |
| 17 | Typography harmonization | **Done** | Reduced all-caps on pedagogy micro labels (CSS) |
| 18 | Landing hero/trust | **Verified** | Prior passes (`common.js`, `lp-hero-trust`) |
| 19 | Validation extended | **Done** | `check-sidebar-markers.mjs`, updated `check-right-rail.mjs` |
| 20 | Audit doc | **Done** | This file |

## Validation

```bash
npm run validate
npm run trust:pass1
```

## Manual inspect checklist

- [ ] **Statistik** — lesson intro card on Theorie; Klausur-Erkennung two-column on desktop
- [ ] **Mikro I** — Aufgaben tab uses Übungsmodus header (no PLATTFORM-ÜBUNG); Grafik micro-check
- [ ] **Ökonometrie** — fleet Aufgaben panel (no fork override)
- [ ] Sidebar — active lesson 3px bar only; completed ✓ in aside when progress ≥80%
- [ ] Concept header — Quellen link text (not QUELLE pill)
- [ ] Right rail — max 2 mistakes expanded; „Weitere Fehler anzeigen“ when >2
- [ ] Formeln rail — fallback chip when concept has no sidebar formulas
- [ ] Landing — hero trust note + module cards

## Remaining gaps

1. Module `chapters.js` theory strings still contain inline `platform-added-*` footnotes — stripped at render, not removed at source.
2. Dead `buildMicroPracticePanel` helpers remain in mikro1/oekonometrie forks (unused after Pass 4).
3. mikro1 `buildMicroIntuitionPanel` still active on legacy Intuition tab hash (hidden tab; low traffic).

## Files changed

| Area | Files |
|------|-------|
| Pedagogy | `assets/js/portal-core/pedagogy/learnerPedagogy.js` |
| Theory | `assets/js/portal-core/theory/theoryStructure.js` |
| UI | `renderer.js`, `warningSystem.js`, `rightPanel.js`, `chapterNavigation.js`, `graphPedagogy.js` |
| Text strip | `assets/js/portal-core/utils/studentFacingText.js` |
| CSS | `assets/css/premium-refinement.css` |
| Exam labels | `assets/js/portal-core/data/examDisclosure.js`, `features/fullExam.js` |
| Generated portal | `assets/js/generated-portal/main.js` |
| CI | `check-learner-ui-literals.mjs`, `check-right-rail.mjs`, `check-sidebar-markers.mjs`, `ci-validate.mjs` |
| Audit | `docs/audits/2026-06-03-pedagogical-ui-system-pass-4.md` |
