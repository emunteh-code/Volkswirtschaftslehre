# First-time student experience — fixes — 2026-05-31

**Mandate:** Implement priority fixes from [`2026-05-31-first-time-student-experience.md`](./2026-05-31-first-time-student-experience.md).

## What changed

### P0 — Landing exam-week entry

- Added minimal **Schnell üben** strip on `index.html` (`#exam-quick-start`) with three deep links: Mikro I `#budget/aufgaben`, Statistik `#deskriptiv/aufgaben`, Makro I `#islm/aufgaben`.
- Wired in `assets/js/common.js` via `EXAM_QUICK_LINKS` + `mountExamQuickLinks()`.
- Styles in `assets/css/portal.css` (`.lp-exam-quick-*`). No 14-Tage block, activity chooser, or tier badges.

### P0 — ILIAS on landing

- **Zum Kurs in ILIAS** CTA under the Prüfungsbereit shelf (`#examReadyShelfIlias`), URL from `SITE_CONFIG.officialMaterialsUrl` (same as Quellen). Reuses `.official-materials-ilias-btn`.

### P0 — Mikro II concept deep links

- `assets/js/portal-core/utils/hashRouting.js`: `resolveConceptHashId()` (exact id, alias map, unique prefix).
- `assets/js/portal-core/app.js`: resolves hashes on boot and `hashchange`.
- `mikro2/js/data/conceptHashAliases.js` + wired in `mikro2/js/main.js` — e.g. `#cournot/theorie`, `#oligopol/theorie` → `oligopol_cournot_bertrand`.

### P1 — Landing tile copy

- `assets/js/modules.js`: removed **A−:** prefixes from all `examPrepNote` strings; student-facing one-liners.
- Mikro II `sourceStatusNote` → ILIAS/Ergänzungen language (no “Repo”).
- `assets/js/common.js`: dropped **Neu** label; low progress shows **Begonnen** (no unexplained single-digit %).

### P1 — Module home “Start here”

- `assets/js/portal-core/ui/renderer.js`: `recommendedStartConceptId` / `recommendedStartTab` — primary **Hier starten** card when no local progress and no last concept.
- `mikro1/js/data/courseConfig.js` → `budget` / `aufgaben`; `statistik/js/data/courseConfig.js` → `deskriptiv` / `aufgaben`; passed through module renderers.

### P2 — Konzept-Check discoverability

- Home **Konzept-Check** card auto-shown when `window.__startConceptSchnelltest` exists (module wired `conceptSchnelltest` in `main.js`).
- Removed duplicate manual `buildKonzeptCheckHomeCardHtml(true)` from module renderers.
- Updated `KONCEPT_CHECK_SCOPE_NOTE` to list all modules with Konzept-Check.

## Files touched

| Area | Files |
|------|--------|
| Landing | `index.html`, `assets/js/common.js`, `assets/css/portal.css` |
| Modules registry | `assets/js/modules.js` |
| Hash routing | `assets/js/portal-core/utils/hashRouting.js`, `assets/js/portal-core/app.js`, `mikro2/js/data/conceptHashAliases.js`, `mikro2/js/main.js` |
| Module home | `assets/js/portal-core/ui/renderer.js`, `mikro1/js/data/courseConfig.js`, `statistik/js/data/courseConfig.js`, `mikro1/js/ui/renderer.js`, `statistik/js/ui/renderer.js` |
| Konzept-Check | `makro1`, `makro2`, `statistik`, `finanzwirtschaft`, `recht`, `internationale-wirtschaftsbeziehungen` `js/ui/renderer.js` |

## Validation

| Check | Result |
|-------|--------|
| `npm run validate` | **Pass** |
| `npm run trust:pass1` | **Pass** |

## Gaps / not in scope

- PDFs still not in-browser; ILIAS remains primary for VL PDFs.
- Mikro II first-visit consent modal unchanged.
- Landing **Modul öffnen →** link reliability not re-tested in browser this pass.
- No git commit (per user rules).
