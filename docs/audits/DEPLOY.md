# GitHub Pages deploy — verification

**Live URL:** https://emunteh-code.github.io/Volkswirtschaftslehre/  
**Workflow:** `.github/workflows/deploy.yml` (runs on every push to `main` + manual dispatch)

## What CI does

1. **validate** — `node tools/exam-os/ci-validate.mjs`
2. **trust** — `npm run trust:pass1` (Playwright regression on repo root)
3. **deploy** — `node tools/build-pages-dist.mjs` → `npm run smoke:deploy` → upload `dist/` → GitHub Pages

`dist/` is a subset of the repo (no `source-materials/`, `tools/`, or `docs/`). Portal-core assets such as `studentFacingText.js` and `masteryLabel.js` must exist in `dist/` before upload.

## After you push to `main`

1. Wait **3–5 minutes** for the Pages deploy to finish (GitHub Actions → *Deploy to GitHub Pages*).
2. Run local smoke against live (optional):

```bash
DEPLOY_BASE_URL=https://emunteh-code.github.io/Volkswirtschaftslehre \
  cd tools/clickthrough && npm run smoke:deploy
```

3. Spot-check in the browser:
   - Landing: ILIAS button *Kursmaterialien in ILIAS öffnen*
   - `…/assets/js/portal-core/utils/masteryLabel.js` → HTTP 200
   - `…/assets/js/portal-core/utils/studentFacingText.js` → HTTP 200
   - Cold load `#budget/aufgaben` → Aufgaben tab active

## Local dist only

```bash
node tools/build-pages-dist.mjs
cd tools/clickthrough && npm run smoke:deploy
```

## Limits

- We **cannot** force GitHub Pages to refresh faster than Actions + CDN propagation.
- **`source-materials/` is never deployed** — official PDFs stay in ILIAS / local course folders.
- Stale browser cache: hard refresh or private window if assets 404 immediately after a green deploy.

## Related

- PDF / exam policy: `docs/architecture/pdf-companion-policy.md`, `docs/architecture/official-exam-policy.md`
- Student deploy audit: `docs/audits/2026-05-31-student-exam-stress-evaluation-v3.md`
