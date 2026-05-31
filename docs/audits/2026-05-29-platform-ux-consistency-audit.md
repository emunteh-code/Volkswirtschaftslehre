# Platform UX consistency audit — 2026-05-29

Generated: 2026-05-31  
Scope: 11 live curriculum modules (mikro1, mikro2, makro1, makro2, statistik, oekonometrie, mathematik, finanzwirtschaft, jahresabschluss, recht, internationale-wirtschaftsbeziehungen).  
Benchmark: **mikro1** (shell, tabs, provenance strip, sidebar Werkzeuge, home cards).

## Executive summary (student impact)

Students encounter **one shared product vocabulary** (Theorie / Aufgaben / Formeln / Intuition, Schnelltest, Dashboard, Wiederholen) but **uneven chrome and affordances** depending on which module they open. The biggest distraction was **hidden Quellen access**: five modules wired a full source companion in JS but did not expose the sidebar button—students could not discover official PDF browsing without knowing keyboard/dev shortcuts. Secondary friction comes from **CSS architecture split** (four modules inherit mikro1 styles; seven maintain near-full forks), **renderer weight split** (mikro1/oekonometrie carry ~900-line custom renderers vs ~50-line thin wrappers elsewhere), and **home-level feature gaps** (Konzept-Check card only on makro1; pilot dashboard notes only on statistik/makro2).

Automated trust regression (`tools/clickthrough` `trust:pass1`) **passed before and after** this pass. No raw TeX leaks, dead tab IDs, or empty formula panels were detected on spot-checked concepts. Visual browser spot-check (mikro1 budget, statistik home) confirmed tab row, provenance footer (`Basis nach Bereichen`), and math typesetting render correctly on a local static server.

**Verdict:** look-and-feel is **partially consistent**—shell and tab model align; navigation affordances and styling maintenance paths still diverge.

---

## Cross-module comparison matrix

| Module | CSS base | Renderer | Standard tabs | R-Übung tab | Quellen btn | Source companion | Full exam | Konzept-Check | Motivation banner | jsError fallback | Search a11y |
|--------|----------|----------|---------------|-------------|-------------|------------------|-----------|---------------|-------------------|------------------|-------------|
| mikro1 | fork (~3425 LOC) | custom (~899 LOC) | ✓ | — | ✓ | ✓ | ✓ | — | ✓ | ✓ | explicit |
| mikro2 | fork (~2974) | thin (~52) | ✓ | — | ✓ | ✓ | ✓ | — | ✓ | ✓ | explicit |
| makro1 | import mikro1 | thin (~56) | ✓ | — | ✓ **fixed** | ✓ | ✓ | home card | ✓ | — | fallback **fixed** |
| makro2 | import mikro1 | thin (~49) | ✓ | — | ✓ **fixed** | ✓ | ✓ | — | ✓ | ✓ | explicit |
| statistik | fork + r-practice | thin (~69) | ✓ | ✓ | ✓ **fixed** | ✓ | ✓ | — | **opt-out** | — | fallback **fixed** |
| oekonometrie | fork + r-practice | custom (~893) | ✓ | ✓ | ✓ **fixed** | ✓ | ✓ | — | ✓ | ✓ | explicit |
| mathematik | import mikro1 + r-practice | thin (~87) | ✓ | ✓ | ✓ **fixed** | ✓ | ✓ | — | ✓ | — | fallback **fixed** |
| finanzwirtschaft | import mikro1 | thin (~51) | ✓ | — | — | — | ✓ | — | ✓ | — | fallback **fixed** |
| jahresabschluss | fork (~3161) | thin (~51) | ✓ | — | — | — | ✓ | — | ✓ | — | fallback **fixed** |
| recht | fork (~3149) | thin (~51) | ✓ | — | — | — | ✓ | — | ✓ | — | fallback **fixed** |
| iwb | fork (~3256) | thin (~51) | ✓ | — | — | — | ✓ | — | ✓ | — | fallback **fixed** |

Shared stack (all modules): `assets/js/portal-core/` (`createRenderer`, provenance UI, exam, dashboard), `assets/css/premium-refinement.css`, MathJax 3.2.2, Google fonts Inconsolata + Syne, `#tabRow.visible` show/hide pattern.

**Tab naming:** German labels consistent (Theorie, Aufgaben, Formeln, Intuition). Graph tab exists in HTML with `display:none` until `updateTabButtons()` enables it—**not dead** when graphs exist. R tab label standardized to **R-Übung** (HTML + runtime in `portal-core/ui/renderer.js`).

**Right panel:** recht uses **Paragraphen** instead of Formeln (domain-appropriate). All others use Formeln / Verbindungen / Häufige Fehler.

**Provenance footer:** Shared `buildConceptProvenanceStripHtml` in `assets/js/portal-core/ui/sourceProvenanceUi.js`; `data-provenance-coverage` values `page-anchors` | `refs` | `manifest-only` driven by manifest layers. Per-module tooltip strings in `getConceptSourceSummary()` still carry module-specific copy (e.g. “Mikro-I-Seitenanker” vs generic Recht strings)—cosmetic, not broken.

---

## P0 / P1 / P2 issues

### P0 — high student distraction

| ID | Issue | Paths | Status |
|----|-------|-------|--------|
| P0-1 | Quellen sidebar missing despite wired `sourceCompanion` (makro1, makro2, statistik, oekonometrie, mathematik) | `*/index.html`, `*/js/main.js` | **Fixed in-pass** |
| P0-2 | `jsError` overlay could remain in DOM after successful module load (mikro1, mikro2, makro2, oekonometrie) | `assets/js/portal-core/app.js`, `*/index.html` | **Fixed in-pass** (hide on `DOMContentLoaded`) |

### P1 — moderate inconsistency

| ID | Issue | Paths | Status |
|----|-------|-------|--------|
| P1-1 | CSS maintenance fork: 7 modules duplicate ~3k lines instead of `@import mikro1` | `statistik/css/styles.css`, `recht/css/styles.css`, `oekonometrie/css/styles.css`, `mikro2/css/styles.css`, `jahresabschluss/css/styles.css`, `internationale-wirtschaftsbeziehungen/css/styles.css` | Backlog |
| P1-2 | Renderer weight split: mikro1/oekonometrie custom semantic math paths vs thin `createRenderer` wrappers | `mikro1/js/ui/renderer.js`, `oekonometrie/js/ui/renderer.js` vs other `*/js/ui/renderer.js` | Backlog (extract shared math pass to portal-core) |
| P1-3 | Statistik opts out of concept motivation banner | `statistik/js/ui/renderer.js` (`showConceptMotivationBanner: false`) | Backlog (confirm intentional) |
| P1-4 | Konzept-Check home card only on makro1 | `makro1/js/ui/renderer.js`, `assets/js/portal-core/features/conceptSchnelltest.js` | Backlog (roll out where items exist) |
| P1-5 | R tab HTML label was “R-Anwendung” while runtime uses “R-Übung” | `statistik/index.html`, `oekonometrie/index.html`, `mathematik/index.html` | **Fixed in-pass** |
| P1-6 | Search input `aria-label` missing on 9/11 modules | `*/index.html` | **Fixed in-pass** via portal-core fallback |

### P2 — polish / backlog

| ID | Issue | Paths | Status |
|----|-------|-------|--------|
| P2-1 | `homeLernDashboardPilotNote` only on statistik + makro2 | `statistik/js/ui/renderer.js`, `makro2/js/ui/renderer.js` | Backlog |
| P2-2 | `jsError` file:// fallback block absent on 7 modules | recht, statistik, makro1, finanzwirtschaft, jahresabschluss, iwb, mathematik `index.html` | Backlog |
| P2-3 | Module-specific provenance badge tooltip strings | `*/js/data/contentManifest.js` | Backlog (unify templates) |
| P2-4 | recht right panel “Paragraphen” vs “Formeln” | `recht/index.html` | Accept (domain label) |
| P2-5 | Graph tab always present in HTML (hidden) — acceptable pattern | all `index.html` | No action |

### Dead buttons / tabs audit (AGENTS.md)

| Finding | Verdict |
|---------|---------|
| Graph tab with `style="display:none"` | **Live** — shown when `graphConcepts` has entry |
| R-Übung tab hidden by default | **Live** — shown when `hasRBlock()` true |
| Quellen before fix on 5 modules | **Was dead UI** — companion callable only if invoked elsewhere; **fixed** |
| Probeklausuren home card | **Live** — gated on `window.__showFullExamSelect` (all 11 modules import fullExam) |
| Sidebar Schnelltest / Dashboard / Wiederholen | **Live** on all modules |
| No manifest tab IDs without renderer handlers | **Clean** (trust script tab click path) |

---

## Automated checks

| Check | Result |
|-------|--------|
| `npm run trust:pass1` (pre-fix) | PASS |
| `npm run trust:pass1` (post-fix) | PASS |
| Grep TODO / placeholder / deceptive empty panels | No module-level TODOs; portal-core filters “Intuitions-karte folgt…” placeholders |
| Tab ID vs renderer | Shared `updateTabButtons` in `assets/js/portal-core/ui/renderer.js`; no orphan tabs detected |
| Math leak patterns (`$$`, `\begin{`, etc.) | None on trust targets |

---

## Visual spot-check (browser, local `python3 -m http.server`)

| Module | View | Notes |
|--------|------|-------|
| mikro1 | Home + `budget` / Theorie | Tabs visible; H1 + section blocks; provenance expander; formulas in right rail; math rendered |
| statistik | Home | Hero + home cards; pilot dashboard note; no Quellen before fix (confirmed gap) |

Trust script covers deeper tab/formula/exam paths for statistik, recht, oekonometrie, mikro1, and six secondary modules.

---

## Fixes applied in this pass

| File | Change |
|------|--------|
| `assets/js/portal-core/app.js` | Hide `#jsError` on successful load; default `aria-label` on `#navSearch` |
| `makro1/index.html` | Add Quellen sidebar button |
| `makro2/index.html` | Add Quellen sidebar button |
| `statistik/index.html` | Add Quellen button; rename R tab label to R-Übung |
| `oekonometrie/index.html` | Add Quellen button; rename R tab label to R-Übung |
| `mathematik/index.html` | Add Quellen button; rename R tab label to R-Übung |

---

## Backlog (recommended next sprint)

1. **CSS consolidation:** migrate statistik, recht, oekonometrie, mikro2, jahresabschluss, iwb to `@import '../../mikro1/css/styles.css'` + small module overrides (pattern already used by makro1/makro2/mathematik/finanzwirtschaft).
2. **Renderer parity:** port mikro1/oekonometrie semantic math helpers into `portal-core` so thin wrappers get identical inline-math behavior without 900-line forks.
3. **Konzept-Check rollout:** add `conceptSchnelltestItems.js` + home card where trap-MCQ items exist (makro2, statistik pilot candidates).
4. **Source companion expansion:** evaluate recht/jahresabschluss/finanzwirtschaft/iwb for companion wiring + Quellen button when PDF corpus supports it.
5. **Unified jsError fallback:** single partial or portal-core inject for file:// detection on all modules.
6. **Provenance copy templates:** module-agnostic badge titles in `buildConceptSourceSummaryFromProvenance` with `{module}` interpolation.

---

## Recommended unified design tokens / shared renderer checklist

**Design tokens (target single source in `mikro1/css/styles.css` or extracted `assets/css/module-shell.css`):**

- `--accent`, `--accent2`, `--accent3`, `--accent-fg`, `--accent-soft`, `--module-accent`
- `--font-body`, `--font-heading`, `--font-mono`
- `--surface`, `--surface2`, `--border`, `--muted`, `--text`, `--math-ink`
- `--r-md` radius family

**Renderer / shell checklist (every new module):**

- [ ] `createRenderer({ … getConceptProvenance, getConceptSourceSummary, sourceMaterialBaseUrl })`
- [ ] Thin `js/ui/renderer.js` unless module-specific graph/R hooks required
- [ ] `index.html`: portal-home-link, sidebar Werkzeuge row (Dashboard → Quellen if companion → Schnelltest → Wiederholen)
- [ ] Tab row: theorie, graph (hidden), aufgaben, formeln, intuition, optional r-anwendung (hidden, label **R-Übung**)
- [ ] `#tabRow` + `.visible` class (no inline tab-row hide hacks)
- [ ] `premium-refinement.css` linked
- [ ] MathJax 3.2.2 config block identical to mikro1
- [ ] `js/portalHub.js` + `js/main.js` via portal-core `createApp`
- [ ] Provenance footer on every concept tab render
- [ ] Trust pass1 green before merge

---

## Is L&F “consistent” today?

**Partial.** Shared portal-core renderer, tab model, exam flows, and premium refinement layer give a coherent baseline. Remaining gaps: CSS fork drift, two heavy custom renderers, optional home features (Konzept-Check, pilot notes), and modules without source companion. Post-fix, **Quellen discovery parity** matches mikro1/mikro2 for all companion-enabled modules.
