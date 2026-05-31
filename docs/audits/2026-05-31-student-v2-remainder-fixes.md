# Student v2 remainder fixes — 2026-05-31

**Basis:** `docs/audits/2026-05-31-student-exam-stress-evaluation-v2.md`  
**Prior fix:** `a254ea0` (hash tab visibility + PDF gating syntax)  
**Validation:** `node tools/build-pages-dist.mjs` · `cd tools/clickthrough && npm run trust:pass1` → **all checks passed**

---

## Summary

| ID | Issue | Status | Notes |
|----|--------|--------|-------|
| C1 | GitHub Pages deploy stale | **Workflow OK — push triggers deploy** | `.github/workflows/deploy.yml` runs on `push` to `main` after validate + trust jobs |
| C2 | PDFs 404 on deploy | **Messaging + ILIAS link** | PDFs still not in repo; `officialMaterialsUrl` wired |
| C3 | Hash cold-load tab | **Fixed** | `a254ea0` + reconcile `switchTab` after init in `app.js` |
| C4 | Mobile shell in dist | **Verified** | `premium-refinement.css` + portal-core copied via `build-pages-dist.mjs` |
| M1 | 14-Tage CTA | **Verified in dist** | `#exam-cram-plan` in `dist/index.html` |
| M2 | Klausurmethodik dev jargon | **Fixed** | `studentFacingText.js`, registry families filtered |
| M3 | Konzept-Check fleet | **Documented** | Home note when card absent; makro1 only |
| M4 | `#jsError` a11y ghost | **Fixed** | Removed from DOM on successful load |
| M5 | Mastery `[object Object]` | **Fixed** | `getMasteryItemLabel()` in mikro1 + oekonometrie |
| M6 | mikro2 supplemental copy | **Shortened** | `modules.js` |
| M7 | ILIAS URL | **Fixed** | `siteConfig.officialMaterialsUrl` → Uni Göttingen ILIAS login |
| m1 | Plattform-Übung header | **Fixed** | Panel-level badge on Aufgaben |
| m2 | Formeln collapsed default | **Verified** | `<details>` without `open` when Klausurmethodik present |
| m3 | trust:pass1 in CI | **Verified** | `deploy.yml` + `trust-regression.yml` |
| m4 | Reduce home cards | **Skipped** | Risky scope; ordering unchanged |

---

## C3 — Hash cold-load tab (detail)

**Root cause (v2 audit):** `resolveAvailableTab()` used `offsetParent` while `#tabRow` was still hidden.

**Fix chain:**
1. `a254ea0` — show `#tabRow` before tab resolution; drop `offsetParent` gate in `isTabAvailable()`.
2. This pass — after hash init `navigate()`, re-call `switchTab(hashRoute.tab)` if state mismatch.

**Verify:** `#budget/aufgaben` → Aufgaben tab active (`runHashRouting` in trust pass 1).

---

## Deploy instructions (C1/C2 live)

The public site updates **automatically** when commits land on `main`:

1. Push to `origin/main` (see commit below).
2. GitHub Actions runs **Exam-OS validate** → **trust:pass1** → **build-pages-dist.mjs** → **deploy-pages**.
3. Allow ~3–5 min; then verify:
   - Landing shows ILIAS copy (not `source-materials/` dev path).
   - `#exam-cram-plan` visible.
   - `https://…/assets/js/portal-core/utils/hashRouting.js` returns **200**.
   - `#budget/aufgaben` opens Aufgaben without manual tab click.

**Manual redeploy:** Actions → “Deploy to GitHub Pages” → Run workflow.

**Still not on deploy:** Official VL PDF files (`source-materials/` remains gitignored). Students use ILIAS link from Quellen banner.

---

## Files changed

- `assets/js/portal-core/app.js` — jsError remove; hash tab reconcile
- `assets/js/portal-core/ui/renderer.js` — student text, practice header badge, Konzept-Check note
- `assets/js/portal-core/utils/studentFacingText.js` — **new**
- `assets/js/portal-core/utils/masteryLabel.js` — **new**
- `assets/js/portal-core/data/officialTaskIngestion.js` — filter registry metadata families
- `assets/js/siteConfig.js` — ILIAS URL
- `assets/js/modules.js` — mikro2 note
- `assets/css/premium-refinement.css` — panel badge + home note styles
- `mikro1/js/features/mastery.js`, `oekonometrie/js/features/mastery.js` — label fix
- `tools/clickthrough/trust-regression-pass-1.mjs` — consent dismiss robustness

---

## Test plan

- [x] `node tools/build-pages-dist.mjs`
- [x] `npm run trust:pass1` (hash routing + mobile 375)
- [ ] Post-push: live landing ILIAS copy + `#budget/aufgaben` cold load
