# V3 deploy bundle fix — 2026-05-31

**Basis:** `docs/audits/2026-05-31-student-exam-stress-evaluation-v3.md`  
**Prior commit:** `82d395e` (remainder pass in repo, not yet live)  
**This pass:** fleet mastery labels, dist manifest guard, deploy smoke, trust extensions, mikro1 practice header + Quellen ILIAS link

---

## Root cause (v3 live gaps)

| Symptom on live (~`a254ea0`) | Cause |
|-------------------------------|--------|
| `studentFacingText.js` / `masteryLabel.js` → 404 | Deploy stale; files exist in repo but Pages had not picked up `82d395e` |
| Mastery `[object Object]` | Object-shaped mastery items rendered with `${item}` in statistik + 7 other module `mastery.js` files (only mikro1/oekonometrie used `getMasteryItemLabel`) |
| Klausurmethodik OCR/anchor IDs | Same stale deploy (`studentFacingText.js` 404) |
| `officialMaterialsUrl: null` on live | Stale `siteConfig.js` on Pages |
| Aufgaben panel badge missing | mikro1 `buildMicroPracticePanel()` replaced portal-core panel and dropped `.practice-panel-header` |
| `#jsError` in a11y tree | Stale `app.js` on Pages |

---

## Changes

| Area | Fix |
|------|-----|
| **Dist manifest** | `tools/build-pages-dist.mjs` — post-copy verify for 6 portal-core assets; fail build if missing |
| **Mastery labels** | `getMasteryItemLabel()` wired in statistik, recht, makro1/2, mathematik, finanzwirtschaft, jahresabschluss, IWB |
| **mikro1 Aufgaben** | `buildMicroPracticePanel()` — add `.practice-panel-header` + Plattform-Übung badge |
| **ILIAS link** | `quellenPanel.js` — always render ILIAS footer link when `siteConfig.officialMaterialsUrl` is set |
| **Deploy smoke** | `tools/clickthrough/deploy-smoke.mjs` + `npm run smoke:deploy` |
| **Trust CI** | `trust-regression-pass-1.mjs` — mastery labels, Klausurmethodik scrub, practice header, jsError removal, ILIAS link |

---

## Dist manifest (required assets)

Verified in `dist/` after `node tools/build-pages-dist.mjs`:

- `assets/js/portal-core/utils/studentFacingText.js`
- `assets/js/portal-core/utils/masteryLabel.js`
- `assets/js/portal-core/utils/hashRouting.js`
- `assets/js/siteConfig.js`
- `assets/js/portal-core/app.js`
- `assets/js/portal-core/ui/renderer.js`

---

## Smoke checklist

### Local (pre-push)

```bash
node tools/build-pages-dist.mjs
cd tools/clickthrough && npm run smoke:deploy
cd tools/clickthrough && npm run trust:pass1
```

Expected: all pass; smoke prints `200` for the five curl probes on local dist.

### Post-deploy (~3–5 min after push to `main`)

```bash
DEPLOY_BASE_URL=https://emunteh-code.github.io/Volkswirtschaftslehre \
  cd tools/clickthrough && npm run smoke:deploy
```

Manual browser spot checks:

| # | Check | Pass criteria |
|---|--------|---------------|
| 1 | Asset HEAD | `studentFacingText.js`, `masteryLabel.js`, `hashRouting.js` → **200** |
| 2 | `#budget/aufgaben` | Aufgaben tab active; `.practice-panel-header` visible |
| 3 | Beherrschungsziele | Checkbox labels are human text, not `[object Object]` |
| 4 | `#budget/formeln` | No `OCR/Review`, no `mikro1.budget.vl01…` anchor IDs |
| 5 | Quellen tab | “Zum Kurs in ILIAS” link present |
| 6 | a11y | `#jsError` absent from DOM after load |

---

## Test results (this pass)

- [x] `node tools/build-pages-dist.mjs` — manifest verified
- [x] `npm run smoke:deploy` — local dist HTTP 200 on all key assets
- [x] `npm run trust:pass1` — all checks passed (incl. new v3 guards)
- [ ] Post-push live smoke — run after deploy completes

---

## Files changed

- `tools/build-pages-dist.mjs`
- `tools/clickthrough/deploy-smoke.mjs` (new)
- `tools/clickthrough/package.json`
- `tools/clickthrough/trust-regression-pass-1.mjs`
- `assets/js/portal-core/ui/quellenPanel.js`
- `mikro1/js/ui/renderer.js`
- `*/js/features/mastery.js` (8 modules)
- `docs/audits/2026-05-31-v3-deploy-bundle-fix.md` (this file)
