# Student top-8 fixes — verification audit

**Date:** 2026-06-01  
**Source audit:** [2026-05-31-student-exam-stress-evaluation.md](./2026-05-31-student-exam-stress-evaluation.md)  
**Prior pass:** `bbaf5fe` (sections A–G, overlapping items)  
**Validation:** `cd tools/clickthrough && npm run trust:pass1` → **all checks passed**

## Verification table

| # | Fix | Status | Evidence (current main) |
|---|-----|--------|-------------------------|
| 1 | **PDF / Quellen** — ILIAS messaging; disable PDF opens on GitHub Pages; no click-then-404 | ✅ | `deployEnvironment.js` (`primeSourceMaterialsAvailability`, `sourcePdfOpenDisabledByDefault`, `OFFICIAL_PDF_STUDENT_MESSAGE`); `quellenPanel.js` (`renderPdfStatusNotice`); `sourceProvenanceUi.js` (`buildSourceOpenButtonHtml` disabled upfront); `sourceCompanionModule.js` |
| 2 | **Mobile 375px** — drawer sidebar, full-width content, sticky tab row | ✅ | `premium-refinement.css` MOBILE MODULE SHELL block (≤900px / 375px); trust `runMobileShell375` |
| 3 | **Hash routing** — `#concept/tab` on load + hashchange; URL updates on tab switch | ✅ | `hashRouting.js`, `app.js` (`applyConceptHashRoute`, `replaceConceptHash`); trust `runHashRouting` |
| 4 | **Formeln tab label** — **Formeln & Klausurmethodik** on all 11 module shells | ✅ | `mikro1`, `mikro2`, `makro1`, `makro2`, `statistik`, `mathematik`, `oekonometrie`, `recht`, `finanzwirtschaft`, `jahresabschluss`, `internationale-wirtschaftsbeziehungen` `index.html` |
| 5 | **Concept labels** — **Stelle X von Y** only; no global Konzept N gaps on home | ✅ | `renderer.js` home cards + concept header; `chapterNavigation.js` sidebar |
| 6 | **14-Tage-Plan CTA** — Mikro I → `#budget/aufgaben` | ✅ | `index.html` `#exam-cram-plan`; `common.js` wired buttons |
| 7 | **Konzept-Check** — home card only where `conceptSchnelltestItems.js` exists (makro1) | ✅ | `buildKonzeptCheckHomeCardHtml(false)` default; only `makro1/js/ui/renderer.js` passes `true` |
| 8 | **PDF messaging** — module home + Quellen banner before click | ✅ | `renderer.js` `renderHome` + `module-home-pdf-notice`; Quellen tab `renderPdfStatusNotice`; landing policy copy in `index.html` |

**Example URL:** `https://emunteh-code.github.io/Volkswirtschaftslehre/mikro1/index.html#budget/aufgaben`

---

## Re-verification pass (2026-06-01)

Compared working tree to `bbaf5fe`. All eight items were present in that commit; two runtime bugs blocked deploy/trust validation and were fixed in this pass:

### Bug A — `sourceProvenanceUi.js` syntax (Critical)

`buildSourceOpenButtonHtml` body was orphaned outside any function (`Illegal return statement`), breaking **all** module JS loads (statistik, mikro1, fleet). Restored function wrapper.

### Bug B — Hash tab not applied on cold load (Critical)

`resolveAvailableTab` used `offsetParent` while `#tabRow` was still `display: none` (before `.visible`). Deep links like `#budget/aufgaben` opened the concept on **Theorie**. Fixed by:

- Showing `#tabRow` before tab resolution in `app.js` `navigate()`
- Relaxing `isTabAvailable()` in `hashRouting.js` (no `offsetParent` gate)

---

## Item notes

### 1 & 8 — PDF / deploy messaging

- Pessimistic `window.__sourceMaterialsAvailable = false` on public deploy before async probe
- Student copy: *„Offizielle PDFs: ILIAS / Vorlesungsordner (nicht in dieser Web-Version)…“*
- PDF open buttons render `disabled` + `aria-disabled="true"` when unavailable — no click-then-404 loop
- Optional ILIAS URL via `SITE_CONFIG.officialMaterialsUrl` (currently `null`)

### 3 — Hash routing

**Format:** `#conceptId/tab` — e.g. `#budget/aufgaben`, `#lagrange/grafik`, `#deskriptiv/r`  
**Aliases:** `grafik` → `graph`; `r` → `r-anwendung`  
**Behavior:** hash beats `loadLastId()` on load; tab switch updates hash via `history.replaceState`; `hashchange` re-applies route

### 5 — Sequential concept labels

Home cards: `{Kapitel} · Stelle X von Y` (chapter-local). Sidebar matches via `chapterNavigation.js`.

### 7 — Konzept-Check fleet gate

`conceptSchnelltestItems.js` exists only under **makro1**. Other modules get empty `extraHomeActionCardsHtml` — no dead cards.

---

## Trust regression

`tools/clickthrough/trust-regression-pass-1.mjs` includes:

- `runHashRouting` — `#budget/aufgaben` opens Aufgaben; tab switch updates hash
- `runMobileShell375` — content width ≥88% viewport at 375×667

Run: `cd tools/clickthrough && npm run trust:pass1`

---

## Files changed (re-verification pass)

- `assets/js/portal-core/ui/sourceProvenanceUi.js` — restore `buildSourceOpenButtonHtml`
- `assets/js/portal-core/utils/hashRouting.js` — `isTabAvailable` without hidden-row false negative
- `assets/js/portal-core/app.js` — show tab row before tab resolution
- `docs/audits/2026-05-31-student-top8-fixes.md` — this verification table

## Remaining gaps (unchanged)

- Ship PDFs on deploy (C1) — still needs hosting strategy; messaging + disabled buttons mitigate only
- `officialMaterialsUrl` not set — add real ILIAS URL in `siteConfig.js` when available
- Konzept-Check remains makro1-only until other modules ship `conceptSchnelltestItems.js`
