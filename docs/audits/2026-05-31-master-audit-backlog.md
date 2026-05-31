# Master audit backlog — 2026-05-31

Consolidates open items from audits dated **2026-05-28 through 2026-05-31** plus generated reports (`ocr-weak-pages-backlog.generated.md`, `module-parity-vs-mikro1.generated.md`).

**Status legend:** `fixed` | `deferred-blocked` | `wontfix-with-reason`

**Summary (this remediation pass):** ~62 **fixed** (code or honest gate), ~38 **deferred-blocked** (external/legal/OCR/content corpus), ~19 **remaining minor** (polish, optional, or incremental).

---

## P0 — Critical

| ID | Issue | Status | Notes |
|----|-------|--------|-------|
| R1-C1 / T8-C1 / UX4-C1 | Quellen/PDF 404 on GitHub Pages | **fixed** | `deployEnvironment.js` + disabled PDF actions + deploy notice (`2026-05-31-ux-sprint-verification`) |
| A3-C1 | Semantic math SR fragmentation | **fixed** | `semanticMathSurfaces.js` skip chrome + mid-word filter |
| R1-C2 / T8-C2 | Favicon root-absolute 404 on Pages subpath | **fixed** | Relative `./` / `../assets/brand/` on landing + all modules |
| P2-C1 | Landing CLS 0.332 | **fixed** (partial) | `portal.css` min-height reserves; full LCP sprint deferred |
| A3-C2 | `#jsError` in a11y tree when hidden | **fixed** | `aria-hidden` + `inert` + `role=alertdialog` when shown |
| UX4-C2 | mikro2 hidden on landing | **fixed** | `modules.js` `status: "live"` + `sourceStatusNote` |

---

## P1 — Major (code / governance)

| ID | Issue | Status | Notes |
|----|-------|--------|-------|
| R1-M1 | No LICENSE | **fixed** | `LICENSE` (MIT) at repo root |
| R1-M2 | No CONTRIBUTING.md | **fixed** | `CONTRIBUTING.md` with CI gates |
| R1-M3 | No root package.json | **fixed** | `package.json` + `validate` / `trust:pass1` / `build:pages-dist` |
| R1-m3 / R1-m4 | CI deploy gate + trust:pass1 | **fixed** | `.github/workflows/deploy.yml` validate + trust jobs before deploy |
| A3-M1 | Theme toggle aria | **fixed** | Landing `common.js`; modules `theme.js` `syncThemeToggleAccessibleName` |
| A3-M2 | Home action cards keyboard | **fixed** | Enter + Space on portal-core home cards |
| A3-M3 | Consent focus trap | **fixed** | `app.js` `inert` on `#app` + focus primary button |
| UX4-M3 | Statistik motivation banner off | **fixed** | `showConceptMotivationBanner: true` |
| UX4-M6 | Inconsistent dashboard pilot note | **fixed** | `HOME_DASHBOARD_DISCLOSURE_NOTE` fleet default in portal-core |
| UX4-M7 | Concept nav numbering gaps | **fixed** | Category-local “Stelle N von M” via `chapterNavigation.js` |
| R1-m9 | Hardcoded university strings | **fixed** | `assets/js/siteConfig.js` + landing `data-site-*` |
| T8-M5 | Deploy uploads whole repo | **fixed** | `tools/build-pages-dist.mjs` → `dist/` artifact |
| T8-M2 | innerHTML breadcrumb XSS | **fixed** | `escapeHtml` on breadcrumb titles |
| T8-M3 | localStorage corruption silent | **fixed** | Toast in `common.js` |
| R1-m1 | `.gitignore` no `.env` | **fixed** | `.env`, `.env.*`, `dist/` |
| R1-m7 | README vs mikro2 hidden | **fixed** | Aligned with live status |
| V5-M1 | Per-module accents | **fixed** | Distinct `accent` in `modules.js` |
| V5-M2 | Typography scale tokens | **fixed** | `assets/css/module-tokens.css` |
| V5-M4 | jahresabschluss/iwb CSS forks | **fixed** | `@import mikro1` (2026-05-30 L&F pass) |
| P2-M3 | MathJax eager on all modules | **fixed** | Lazy `ensureMathJax()`; scripts removed from module `index.html` |
| L7-M2 | `objectives[]` on chapters | **fixed** (template) | Renderer block + mikro1 `budget` pilot; fleet rollout incremental |
| L7-C1 | Interleaved exam mode | **fixed** (MVP) | `__startInterleavedExam` + home card; cross-module deferred |
| P2-M1 / R1-M7 | Landing `dataFactory.js` weight | **fixed** (partial) | `module-progress-meta.js`; full factory still for generated routes |
| UX4-M2 | Konzept-Check fleet-wide | **deferred-blocked** | Only makro1 has `conceptSchnelltestItems.js` — no invented items |
| R1-M6 | innerHTML XSS surface (50+ files) | **deferred-blocked** | Central helper + top call sites only per mandate; not full fleet refactor |
| R1-M4 | portal-core unit tests | **deferred-blocked** | Vitest pocket deferred; trust:pass1 covers regressions |
| R1-M5 | 136 stale remote branches | **deferred-blocked** | Requires explicit user confirmation to delete |
| C6-M4 / content | mikro2/IWB/jahresabschluss theory depth | **deferred-blocked** | Source-grounded expansion; see `2026-05-30-remaining-gaps-closure-pass.md` |
| official-task-source | OCR → exam items | **deferred-blocked** | `ocr-weak-pages-backlog.generated.md`; fleet count 0 by policy |
| P2-M4 | chapters.js minification | **deferred-blocked** | Documented in `tools/exam-os/README-chapters-minify.md` |
| P2-C2 / P2-M2 | Fonts blocking LCP | **deferred-blocked** | Self-host + critical CSS sprint |
| UX4-M1 | Trusted-core two-tier perception | **wontfix-with-reason** | Reframed as Schnellstart in copy; not a quality rank |
| UX4-M4 | Per-module consent | **wontfix-with-reason** | GDPR-local storage notice per module origin; portal-wide consent larger change |
| UX4-M5 | jsError false positive on slow 3G | **fixed** (partial) | 6s delay on http(s); file:// keeps 2.5s |

---

## P2 — Minor (batch / backlog)

| ID | Issue | Status |
|----|-------|--------|
| R1-m2 | CODEOWNERS | **fixed** |
| R1-m5 | Duplicate i18n per module | **deferred-blocked** |
| R1-m6 | politisches-system-brd orphan | **deferred-blocked** |
| R1-m8 | Source maps | **deferred-blocked** |
| R1-m10 | mikro1 renderer fork | **deferred-blocked** (semantic math delegated; exam drill panels remain) |
| P2-M5–M7 | Graph defer, unused CSS | **deferred-blocked** |
| T8-m3 | CSP on Pages | **deferred-blocked** (GitHub Pages limitation) |
| T8-m2 | MathJax CDN SPOF | **deferred-blocked** |
| A3-m* | Graph SR, contrast axe | **deferred-blocked** |
| UX4-m* | Mobile swipe, politisches link | **deferred-blocked** |
| L7-m* | SRS nudge, mastery opacity, etc. | **deferred-blocked** |

---

## Explicitly blocked (do not fake-fix)

| Item | Status | Reason |
|------|--------|--------|
| Ship `source-materials/` PDFs on GitHub Pages | **deferred-blocked** | Legal/LFS; honest UI gate only |
| OCR Probeklausur → `official-task-source` | **deferred-blocked** | Human review required |
| Delete 136 remote branches | **deferred-blocked** | User confirmation |
| Full innerHTML refactor (50 files) | **deferred-blocked** | Central helper + hot paths only |

---

## Source audit documents indexed

| Document | Scope |
|----------|--------|
| `2026-05-30-multi-domain-quality-inspection.md` | 119 findings — primary matrix |
| `2026-05-31-ux-sprint-verification-and-p0-fixes.md` | P0 hardening verification |
| `2026-05-30-ux-sprint-lf-unification-pass.md` | L&F sprint complete |
| `2026-05-29-platform-ux-consistency-audit.md` | Quellen/jsError fixes + backlog |
| `2026-05-29-a-plus-readiness-pass.md` | Per-concept A+ gaps |
| `2026-05-30-mikro1-parity-all-modules-pass.md` | Fleet parity metrics |
| `2026-05-30-remaining-gaps-closure-pass.md` | Theory depth + OCR status |
| `ocr-weak-pages-backlog.generated.md` | OCR queue |

---

## Validation (2026-05-31)

```bash
node tools/exam-os/ci-validate.mjs   # OK
cd tools/clickthrough && npm run trust:pass1   # PASS
node tools/build-pages-dist.mjs      # dist/ written
```

Lighthouse re-run on landing: not executed in CI sandbox this pass (prior audit: Perf **44**, A11y **100**, CLS **0.332**). Re-run locally after deploy:

```bash
python3 -m http.server 8765
npx lighthouse http://127.0.0.1:8765/index.html --only-categories=performance,accessibility
```
