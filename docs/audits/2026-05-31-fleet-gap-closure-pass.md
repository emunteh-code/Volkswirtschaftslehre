# Fleet gap closure pass — 2026-05-31

Generated: 2026-06-01  
Follow-up to [`2026-05-31-fleet-mikro1-parity-complete.md`](./2026-05-31-fleet-mikro1-parity-complete.md) and student v3 deploy audit.

## Per-gap status

| # | Gap | Status | Notes |
|---|-----|--------|-------|
| 1 | **Live deploy lag** | ✅ | `deploy.yml` runs on `push` to `main`; added `npm run smoke:deploy` after `build-pages-dist.mjs`. [`DEPLOY.md`](./DEPLOY.md) documents 3–5 min wait + live smoke. Cannot force Pages CDN. |
| 2 | **mikro2 supplementals** | ✅ (blocked on VL anchors) | Searched official Mikro II corpus (ingest pass 1): **no** Pigou/Coase/public-goods PDF anchors. Strengthened `platform-added-banner` on concepts + home intro; expanded `theoryDepthExpansions.js`. **No fake page-anchors added.** |
| 3 | **Official PDF bundle** | ✅ (ILIAS path; no git PDFs) | `siteConfig.officialMaterialsUrl` → Uni Göttingen ILIAS login. Landing + Quellen: prominent *Kursmaterialien in ILIAS öffnen*. [`pdf-companion-policy.md`](../architecture/pdf-companion-policy.md). `source-materials/` excluded from dist. |
| 4 | **Probeklausur OCR** | ✅ (documented; promotion blocked) | Updated [`official-exam-policy.md`](../architecture/official-exam-policy.md) student + maintainer paths. OCR backlog executive summary refreshed (`ocr-weak-pages.mjs --write`). Fleet exam home cards show **Plattform-Simulation** (incl. ökonometrie + mikro1 inject). **No** item promoted; Mikro1 JPG Probeklausur remains blocked. |
| 5 | **Konzept-Check fleet** | ✅ | Added `conceptSchnelltestItems.js` + wiring for **statistik** (3 items) and **makro2** (3 items). Home cards enabled via `buildKonzeptCheckHomeCardHtml(true)`. Other modules: scope note updated. **makro1** unchanged. |

## Validation

| Check | Result |
|-------|--------|
| `node tools/exam-os/ci-validate.mjs` | **OK** |
| `npm run trust:pass1` | **passed** |
| `npm run smoke:deploy` | **passed** |

## Files touched (summary)

- `.github/workflows/deploy.yml` — deploy smoke in deploy job
- `docs/audits/DEPLOY.md`, `docs/architecture/pdf-companion-policy.md`
- `docs/architecture/official-exam-policy.md`, `docs/audits/ocr-weak-pages-backlog.generated.md`
- `assets/js/siteConfig.js` (unchanged URL), `common.js`, `index.html`, `portal.css`, `deployEnvironment.js`
- `mikro2/js/data/chapters.js`, `courseConfig.js`, `theoryDepthExpansions.js`
- `statistik/`, `makro2/` — Konzept-Check data + main + renderer
- `oekonometrie/js/ui/renderer.js`, `mikro1/js/ui/renderer.js` — Probeklausur badge

## Honest blockers (unchanged)

- Legal/hosting: cannot ship `source-materials/` PDFs on GitHub Pages.
- OCR: fleet `official-task-source` count stays **0** until human-reviewed extraction.
- mikro2 `externa_*` / `public_goods`: remain **platform-added** without VL page anchors.
