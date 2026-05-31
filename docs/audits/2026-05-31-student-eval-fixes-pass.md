# Student eval fixes pass — 2026-05-31

**Audit basis:** `docs/audits/2026-05-31-student-exam-stress-evaluation.md`  
**Scope:** Sections A–G (student-facing UX + targeted content). Merged with in-progress portal-core work (hash routing, PDF messaging, mobile shell) — no duplicate top-8 doc existed.

---

## Checklist A–G

### A. Usefulness & first impression

| Item | Status | Evidence |
|------|--------|----------|
| Activity chooser strip (Lesen · Üben · Probeklausur) | **Done** | `index.html` `#activity-chooser`; links to `#budget/theorie`, `#budget/aufgaben`, Mikro I home |
| Shorten mikro2 landing `sourceStatusNote` | **Done** | `assets/js/modules.js` — 2-line note + `Modul öffnen →` in `common.js` |
| Beta badge calmer tooltip | **Done** | `RELEASE_TIER_TOOLTIPS.beta` → „Vollständige Struktur, VL-PDFs lokal ergänzen“ |
| 14-Tage CTA | **Done** | `index.html` `#exam-cram-plan`; wired in `common.js` → Budget/Deskriptiv Aufgaben |

### B. Confusion points

| Item | Status | Evidence |
|------|--------|----------|
| B1 Prüfungsflow hint on module home | **Done** | `renderer.js` `home-exam-flow-hint` |
| B2 Right rail formula dedup | **Done** | `rightPanel.js` hides rail formulas when Formeln tab duplicates; mobile hides `#rightPanel` (≤900px CSS) |
| B3 Tab label „Formeln & Klausurmethodik“ | **Done** | Fleet module shells (e.g. `mikro1/index.html`) |
| B3 Jump link Aufgaben → Formeln | **Done** | `renderPracticePanel` → `practice-klausur-jump` + `window.__switchTab` |
| B4 PDF messaging upfront | **Done** | `deployEnvironment.js`, landing copy, module home notice, Quellen gating |
| B5 „Plattform-Übung“ on Aufgaben blocks | **Done** | `renderQuestionCard` footer badge |
| B6 mikro2 live | **Verified** | `modules.js` `status: "live"`, beta tier |
| B7 Concept numbering (sidebar + home) | **Done** | `chapterNavigation.js` + home cards + concept header use category-local „Stelle X von Y“ |
| B8 GDP math | **Verified** | Prior pass `659ccba`; IWB gravitation titles render correctly |

### C. Quality of explanations

| Item | Status | Evidence |
|------|--------|----------|
| recht / Willenserklärung Gutachten mini-example | **Done** | `recht/js/data/chapters.js` — Mini-Gutachten + Normzitat warn-box |
| IWB / gravitation derivation + trim noise | **Done** | `chapters.js` Herleitungsskizze; trimmed `theoryDepthExpansions.js` |
| Klausurtransfer generic → actionable (3 modules) | **Done** | IWB, statistik, finanzwirtschaft fleet append blocks |

### D. Exam prep value

| Item | Status | Evidence |
|------|--------|----------|
| Aufgaben-Schnellstart card first | **Done** | `renderHome` when `loadLastId()` exists |
| SRS banner when due > 0 | **Done** | `home-srs-banner` on module home |
| Dashboard weak-area teaser | **Done** | `home-weak-teaser` → Dashboard |
| Schnelltest / Probeklausur labels visible | **Done** | `home-action-sim-badge` on home cards |

### E. Example questions

| Item | Status | Evidence |
|------|--------|----------|
| Hide registry jargon („Portalabdeckung: partial“) | **Done** | `renderStudentTaskGapNote` → „Übungsformat (Plattform)“ |
| Klausurmethodik student-facing labels | **Done** | Cards use Ziel/Vorgehen/Frage/Fehler only; gap note studentized |

### F. Flow

| Item | Status | Evidence |
|------|--------|----------|
| Hash routing `#concept/tab` | **Done** | `hashRouting.js` + `app.js` cold-load + `hashchange` |
| Mobile 375px shell | **Done** | `premium-refinement.css` MOBILE MODULE SHELL block |
| mikro1 „Empfohlener Start“ | **Done** | `mikro1/js/ui/renderer.js` `ensureRecommendedStartStrip` |

### G. Trust

| Item | Status | Evidence |
|------|--------|----------|
| jsError only after 10s on production | **Done** | `jsErrorFallback.js` http(s) delay 10000ms; hidden + `aria-hidden` on load |
| Quellen disabled PDFs upfront | **Done** | `deployEnvironment.js`, `quellenPanel.js`, module home notice |
| mikro2 landing text shortened | **Done** | `modules.js` |
| Formeln accordion collapsed when Klausurmethodik | **Done** | `renderFormulaPanel` `<details>` default closed |
| Onboarding tone softened | **Done** | `common.js` `showOnboarding` |

---

## Files changed (summary)

- **Landing:** `index.html`, `assets/js/common.js`, `assets/js/modules.js`, `assets/css/portal.css`
- **Portal-core:** `app.js`, `renderer.js`, `rightPanel.js`, `hashRouting.js`, `jsErrorFallback.js`, `deployEnvironment.js`, `quellenPanel.js`, `sourceProvenanceUi.js`, `sourceCompanionModule.js`
- **Shell:** fleet `*/index.html` Formeln tab labels
- **CSS:** `premium-refinement.css` (mobile + home/practice styles)
- **Content:** `recht/js/data/chapters.js`, IWB/statistik/finanz `chapters.js`, IWB `theoryDepthExpansions.js`
- **mikro1:** `js/ui/renderer.js` recommended start strip

---

## Remaining gaps (out of scope / blocked)

1. **Ship PDFs on deploy (C1)** — still requires hosting strategy; student messaging + disabled buttons mitigate trust hit only.
2. **Fleet-wide Konzept-Check home card** — infrastructure exists; only makro1 wires items (documented, not expanded this pass).
3. **Full theory fleet rewrite** — intentionally limited to audit samples (recht, IWB, 3× Klausurtransfer).

---

## Source materials used (content edits)

- `source-materials/` Recht VL — Willenserklärung / §§ 130, 145, 151, 433 BGB (Gutachten structure)
- `source-materials/Mikroökonomik II/` — not edited this pass
- IWB VL IntWB4 — gravitation log-linear specification (theoryDepthExpansions + chapters Herleitungsskizze)

---

## Test plan

- [ ] Landing: activity strip + 14-Tage buttons → `#budget/aufgaben` opens Aufgaben tab
- [ ] `#budget/aufgaben` cold load → Aufgaben without manual tab click
- [ ] Module home: SRS banner when due cards exist; Schnellstart when last concept set
- [ ] Aufgaben: „Plattform-Übung“ badge; jump to Formeln tab
- [ ] Formeln tab: Klausurmethodik visible; formula block collapsed when both present
- [ ] Mobile 375px: full-width content, sidebar drawer, no right rail
- [ ] GitHub Pages: Quellen PDF buttons disabled with ILIAS copy upfront
