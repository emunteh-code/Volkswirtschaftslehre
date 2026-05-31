# Student top-8 fixes — implementation audit

**Date:** 2026-05-31  
**Source audit:** [2026-05-31-student-exam-stress-evaluation.md](./2026-05-31-student-exam-stress-evaluation.md)  
**Validation:** `cd tools/clickthrough && npm run trust:pass1`

## Summary

All eight student-impact items from the exam-stress evaluation were implemented in this pass. No `source-materials/` corpus was added to the repo (remains gitignored; legal OK required before shipping PDFs).

| # | Fix | Status | Key files |
|---|-----|--------|-----------|
| 1 | PDF / Quellen upfront messaging + disabled open buttons | Shipped | `deployEnvironment.js`, `quellenPanel.js`, `sourceProvenanceUi.js`, `sourceCompanionModule.js` |
| 2 | Mobile shell 375px (drawer, full-width content, sticky tabs) | Shipped | `premium-refinement.css`, `mikro1/css/styles.css` (existing drawer) |
| 3 | Hash routing `#concept/tab` | Shipped | `hashRouting.js`, `app.js` |
| 4 | Formeln tab → **Formeln & Klausurmethodik** | Shipped | All 11 module `index.html` shells |
| 5 | Chapter-local **Stelle X von Y** labels | Shipped | `renderer.js`, `chapterNavigation.js` |
| 6 | Landing 14-Tage-Plan CTA | Shipped | `index.html`, `common.js`, `portal.css` |
| 7 | Konzept-Check fleet gate (makro1 only) | Shipped | `renderer.js`, `makro1/js/ui/renderer.js` |
| 8 | Early deploy probe + module-home banner | Shipped | `deployEnvironment.js`, `app.js`, `renderer.js` |

---

## 1 & 8 — PDF / deploy messaging

**Problem:** Students clicked PDF buttons on GitHub Pages and got 404s; no upfront explanation.

**Solution:**
- `primeSourceMaterialsAvailability()` sets pessimistic `window.__sourceMaterialsAvailable = false` on public deploy before async probe.
- Student message: *„Offizielle PDFs: ILIAS / Vorlesungsordner (nicht in dieser Web-Version). Die Zuordnung Konzept ↔ Quelle bleibt hier sichtbar.“*
- Notice rendered on: Quellen tab, module home (`renderHome`), source companion drawer.
- PDF open buttons render `disabled` + `aria-disabled="true"` when `sourcePdfOpenDisabledByDefault()` — no click-then-404.
- Optional ILIAS link via `SITE_CONFIG.officialMaterialsUrl` (currently `null`; no placeholder URL).

**Risk:** Local dev without `source-materials/` also disables opens until probe completes; probe refreshes Quellen status async.

---

## 2 — Mobile shell 375px

**Problem:** Content felt squished; sidebar consumed horizontal space on phones.

**Solution:** `premium-refinement.css` mobile block (≤900px):
- Fixed drawer `#sidebar` with overlay
- `#main` / `#content` full width
- Sticky `#tabRow` with horizontal scroll for tabs
- Hide `#rightPanel`, `#shortcutHint`, `.focus-btn`

Trust adds `runMobileShell375` — checks content width ≥88% viewport and no horizontal overflow at 375×667.

---

## 3 — Hash routing

**Format:** `#conceptId/tab` — e.g. `#budget/aufgaben`, `#lagrange/grafik`, `#deskriptiv/r`

**Aliases:** `grafik` → internal `graph`; `r` → `r-anwendung`

**Behavior:**
- On load: hash route beats `loadLastId()`
- On tab switch: `history.replaceState` updates hash (shareable)
- `hashchange` re-applies route

**Example live URL:**  
`https://emunteh-code.github.io/Volkswirtschaftslehre/mikro1/index.html#budget/aufgaben`

---

## 4 — Formeln tab rename

All 11 module shells: visible label and `aria-label` → **Formeln & Klausurmethodik** (or `Formeln &amp; Klausurmethodik` in HTML entities).

Modules: mikro1, mikro2, makro1, makro2, statistik, mathematik, oekonometrie, recht, finanzwirtschaft, jahresabschluss, internationale-wirtschaftsbeziehungen.

---

## 5 — Sequential concept labels

Removed misleading global **Konzept N** in home grid when syllabus has gaps (e.g. mikro1 Konzept 7→13).

Home cards now show: `{Kapitel} · Stelle X von Y` (chapter-local order).

Sidebar chapter navigation already used the same phrasing via `chapterNavigation.js`.

---

## 6 — Landing 14-Tage-Plan CTA

New shelf `#exam-cram-plan` on landing page with buttons:
- **Mikro I: Budget + Aufgaben starten →** `./mikro1/index.html#budget/aufgaben`
- **Statistik: Deskriptiv + Aufgaben →** `./statistik/index.html#deskriptiv/aufgaben`

Exam-policy copy updated: removed dev-only `source-materials/` path reference.

---

## 7 — Konzept-Check fleet

Grep confirmed `conceptSchnelltestItems.js` exists only under **makro1**.

- `buildKonzeptCheckHomeCardHtml(enabled)` in shared renderer — returns empty string when `false`.
- Only `makro1/js/ui/renderer.js` passes `true`.
- Other modules: no dead Konzept-Check card (AGENTS.md compliance).

---

## Trust regression extensions

Added to `trust-regression-pass-1.mjs`:
- `runHashRouting` — load `#budget/aufgaben`, verify tab active, tab switch updates hash
- `runMobileShell375` — 375px layout sanity

---

## Files changed (this pass)

- `assets/js/portal-core/utils/deployEnvironment.js`
- `assets/js/portal-core/utils/hashRouting.js` (new)
- `assets/js/portal-core/app.js`
- `assets/js/portal-core/ui/renderer.js`
- `assets/js/portal-core/ui/quellenPanel.js`
- `assets/js/portal-core/ui/sourceProvenanceUi.js`
- `assets/js/portal-core/features/sourceCompanionModule.js`
- `assets/js/siteConfig.js`
- `assets/js/common.js`
- `assets/css/premium-refinement.css`
- `assets/css/portal.css`
- `index.html`
- `makro1/js/ui/renderer.js`
- All 11 module `index.html` (Formeln label)
- `tools/clickthrough/trust-regression-pass-1.mjs`

## Remaining gaps

- `officialMaterialsUrl` not set — add real ILIAS URL in `siteConfig.js` when available.
- Konzept-Check remains makro1-only until other modules ship `conceptSchnelltestItems.js`.
- Full 320px manual spot-check documented via trust 375px test; extend to 320 if needed.
