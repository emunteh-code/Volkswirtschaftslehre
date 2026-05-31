# Audit remediation pass — 2026-05-31

Generated: 2026-05-31  
Source audit: `docs/audits/2026-05-30-multi-domain-quality-inspection.md`  
Prior partial pass: `docs/audits/2026-05-31-ux-sprint-verification-and-p0-fixes.md`

## Executive summary

This pass closes the **top-12 prioritized remediation items** from the multi-domain
quality inspection (excluding PDF deploy pipeline and interleaving exam mode per scope).
All changes keep the site deployable; **`ci-validate`** and **`trust:pass1`** pass locally.

**Skipped (explicit):** shipping `source-materials/` to Pages (L), branch cleanup (R1-M5),
interleaved mixed-topic exam mode (L7-C1).

---

## Completed fixes (rank order)

| Rank | ID | Fix | Status |
|------|-----|-----|--------|
| 1 | R1-C1 / UX4-C1 / T8-C1 | Quellen/PDF production gate — honest DE copy, disabled open buttons, no 404 loops on Pages | ✅ (extended prior pass) |
| 2 | A3-C1 | Semantic math a11y — skip home chrome, `aria-hidden` on `.math-semantic`, mid-word letter guard | ✅ |
| 3 | R1-C2 / T8-C2 | Favicon relative paths on all `index.html` (`../assets/brand/…` for modules) | ✅ |
| 4 | P2-C1 / P2-C2 | Landing CLS reserves + Google Fonts `display=swap` (already on landing) | ✅ |
| 5 | UX4-C2 | Mikro II `status: "live"` in `modules.js` | ✅ |
| 6 | R1-M7 / P2-M1 | Landing uses `module-progress-meta.js` instead of `dataFactory.js` | ✅ |
| 7 | A3-C2 | `#jsError` `aria-hidden` + `inert` when hidden | ✅ (prior pass, verified) |
| 8 | R1-m3 / R1-m4 | CI: `ci-validate` + `trust:pass1` gates before Pages deploy; standalone trust workflow | ✅ |
| 9 | A3-M1 | Theme toggle accessible name includes visible label (landing + all modules) | ✅ |
| 10 | R1-M1 / R1-M2 | `LICENSE` (MIT + third-party note) + `CONTRIBUTING.md` | ✅ |
| 11 | T8-M2 / T8-M3 | Breadcrumb title escape; localStorage corruption toast on landing | ✅ |
| 12 | UX4-M2 / L7-m5 | Konzept-Check home card only where `conceptSchnelltestItems.js` exists (makro1) | ✅ (verified, unchanged) |

---

## Changes by area

### 1. Quellen/PDF (R1-C1)

**Files:** `deployEnvironment.js`, `sourceCompanionModule.js`, `sourceProvenanceUi.js`, `app.js`, `premium-refinement.css`

Public GitHub Pages users see concept-to-source mapping; PDF open actions are disabled with
`SOURCE_PDF_WEB_UNAVAILABLE_MESSAGE`. HEAD probe cached; no repeated 404 fetch loops on open.

### 2. Semantic math a11y (A3-C1)

**File:** `assets/js/portal-core/ui/semanticMathSurfaces.js`

- `SEMANTIC_MATH_SKIP_SELECTOR` excludes buttons, nav, breadcrumbs, home cards, provenance UI.
- `isSingleLetterInsideWord()` drops mid-word single-letter matches.
- `.math-semantic` spans use `aria-hidden="true"` in both DOM and markup builders; plain text nodes remain for SR.

### 3. Favicon paths (R1-C2)

**Files:** root + 13 module/supplementary `index.html`

`/assets/brand/favicon-mark.svg` → `./assets/brand/…` (root) or `../assets/brand/…` (modules).

### 4. Landing performance (P2-C1)

**Files:** `portal.css`, `index.html`

Reserved `min-height` on `#heroContent`, `#trustedCoreGrid`, `#moduleGrid`, `#ueber-portal .lp-about-inner`.
Fonts already use `display=swap`.

### 5. Landing metadata split (R1-M7)

**Files:** `assets/js/module-progress-meta.js`, `assets/js/common.js`, `tools/exam-os/build-module-progress-meta.mjs`

Landing progress/resume no longer imports 331 KiB `dataFactory.js`. Regenerator script counts concepts from `*/js/data/chapters.js`.

### 6. Mikro II discoverability (UX4-C2)

**File:** `assets/js/modules.js` — `mikro2.status` → `"live"` (source honesty note retained on tile).

### 7. jsError a11y (A3-C2)

**Files:** `jsErrorFallback.js`, `app.js` — hidden overlay removed from a11y tree via `aria-hidden` + `inert`.

### 8. CI gates (R1-m3 / R1-m4)

**Files:** `.github/workflows/deploy.yml`, `.github/workflows/trust-regression.yml`

Deploy job `needs: [validate, trust]`. Trust workflow also runs on PRs to `main`.

### 9. Theme toggle (A3-M1)

**Files:** `index.html`, `assets/js/common.js`, `*/js/utils/theme.js`, module `index.html` shells

Dynamic `aria-label="Farbschema wechseln: {visible label}"` satisfies label-in-name.

### 10. Governance (R1-M1 / R1-M2)

**Files:** `LICENSE`, `CONTRIBUTING.md`

MIT for code; third-party fonts/MathJax/PDF note. CONTRIBUTING references AGENTS.md, source-materials rule, CI commands.

### 11. Robustness (T8-M2 / T8-M3)

**Files:** `renderer.js` (breadcrumb escape), `common.js` (storage toast + fixed orphaned syntax)

### 12. Konzept-Check (UX4-M2)

Only `makro1/js/data/conceptSchnelltestItems.js` exists; home card wired via `extraHomeActionCardsHtml` only in makro1 renderer. No fleet-wide dead buttons.

---

## Validation

```text
node tools/exam-os/ci-validate.mjs          → OK
cd tools/clickthrough && npm run trust:pass1 → all checks passed
node --check assets/js/common.js           → OK
```

---

## Remaining gaps (out of scope)

- Ship redistributable PDF subset to Pages (legal + LFS policy)
- Root `package.json` workspace (R1-M3)
- Portal-core unit tests (R1-M4)
- Self-hosted fonts (P2-M2)
- Landing LCP deep perf (critical CSS, lazy MathJax on modules)
- Branch hygiene (136 remote branches)

---

## Files touched this pass

- `assets/js/common.js`
- `assets/js/modules.js`
- `assets/js/module-progress-meta.js` (prior)
- `assets/js/portal-core/ui/renderer.js`
- `assets/js/portal-core/ui/semanticMathSurfaces.js`
- `assets/js/portal-core/ui/jsErrorFallback.js` (prior)
- `assets/js/portal-core/features/sourceCompanionModule.js` (prior)
- `assets/js/portal-core/ui/sourceProvenanceUi.js` (prior)
- `assets/js/portal-core/app.js` (prior)
- `assets/js/portal-core/utils/deployEnvironment.js` (prior)
- `assets/css/portal.css`
- `assets/css/premium-refinement.css` (prior)
- `index.html` + 13 module `index.html` favicon/theme
- `*/js/utils/theme.js` (11 modules)
- `.github/workflows/deploy.yml`
- `.github/workflows/trust-regression.yml` (new)
- `tools/exam-os/build-module-progress-meta.mjs` (new)
- `LICENSE`, `CONTRIBUTING.md` (new)
- `docs/audits/2026-05-31-audit-remediation-pass.md` (this file)
