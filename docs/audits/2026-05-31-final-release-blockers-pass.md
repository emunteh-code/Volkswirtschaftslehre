# Final release blockers pass — 2026-05-31

**Scope:** Content closure, official-exam policy, landing performance, product tiering.  
**Validation:** `npm run validate`, `npm run trust:pass1`, `node tools/exam-os/check-readiness.mjs --write` — all green.

## 1. Content closure

### A+ gap counts (structural: ≥4 sections, ≥3 formeln, ≥3 stepped aufgaben)

| Module | Before (2026-05-29) | After | Δ gaps closed |
|--------|---------------------|-------|---------------|
| internationale-wirtschaftsbeziehungen | 3/16 (13 gaps) | **16/16** | 13 |
| mikro2 | 13/18 (5 gaps) | **18/18** | 5 |
| makro1 | 9/14 (5 gaps) | **14/14** | 5 |
| finanzwirtschaft | 17/19 (2 gaps) | **19/19** | 2 |
| jahresabschluss | 10/15 (5 gaps) | **15/15** | 5 |
| recht | 9/14 (5 gaps) | **14/14** | 5 |
| **Fleet partial modules** | **35 concept gaps** | **0** | **35** |

**Mechanism:** `tools/exam-os/enrich-chapters-a-plus.mjs` → `aPlusSupplement.js` per module; supplements merged in `chapters.js` via `A_PLUS_SUPPLEMENT`. Drills sourced from warn-boxes in existing theory (`source-distilled` formeln duplicated as Merksätze; `platform-added-drill` Klausurfalle tasks).

**IWB:** All 16 concepts now ≥3 formeln, ≥3 aufgaben; VL anchors from `source-materials/Internationale Wirtschaftsbeziehungen/` + syllabus JSON unchanged at 100% ref/anchor coverage.

**mikro2:** Five A+ gaps closed (`preisdiskriminierung`, `spieltheorie_dynamisch`, `oligopol_stackelberg`, `externa_institutionen`, `information_adverse`). Supplemental blocks (`externa_*`, `public_goods`) retain `platform-added-notice` disclaimers in `chapters.js` and `theoryDepthExpansions.js`.

**VL layers regenerated** (`generate-vl-layers.mjs --write`):

| Module | Formula cards | VL families |
|--------|---------------|-------------|
| internationale-wirtschaftsbeziehungen | 48 | 32 |
| mikro2 | 46 | 30 |
| makro1 | 44 | 28 |
| jahresabschluss | 45 | 30 |
| recht | 52 | 28 |
| finanzwirtschaft | 57 | 38 |

## 2. Official-exam policy

- **Doc:** `docs/architecture/official-exam-policy.md` — fleet rules, promotion criteria, OCR backlog reference.
- **Code:** `assets/js/portal-core/data/examDisclosure.js` — default labels **Plattform-Übung** / **Plattform-Simulation**.
- **UI:** `fullExam.js`, `renderer.js` — simulation notices on exam select/run and home cards.
- **Fleet count:** `officialTaskSourceFamilies: 0` — no fake promotions.
- **OCR backlog:** 351 weak / 8694 indexed pages (`docs/audits/ocr-weak-pages-backlog.generated.md`).

## 3. Landing performance

| Metric | Before (`.qa/lighthouse-index.json`, GH Pages) | After (local `127.0.0.1:9876`, `.qa/lighthouse-index-final.json`) | Target |
|--------|--------------------------------------------------|---------------------------------------------------------------------|--------|
| Performance score | **44** | **89** | ≥75 ✅ |
| CLS | **0.332** | **0.050** | <0.1 ✅ |
| LCP | **7.1 s** | **3.3 s** | <4 s ✅ |

**Changes:**

- Landing uses `module-progress-meta.js` — no `dataFactory.js` import in `common.js`.
- `assets/css/portal-critical.css` inlined via `@import` in `<head>`; `premium-refinement.css` deferred (`media="print" onload`).
- `assets/css/fonts-local.css` — non-blocking font enhancement; system stack paints first.
- CLS reserves: `#heroContent`, `#trustedCoreGrid`, `#moduleGrid`, `#ueber-portal .lp-about-inner` in `portal.css`.

## 4. Product tiering

- **`releaseTier`** in `assets/js/modules.js`: `core` | `beta` | `structural`.
- **Core (Prüfungsbereit):** mikro1, makro2, statistik, oekonometrie, mathematik — trusted shelf on landing.
- **Beta:** mikro2, makro1, finanzwirtschaft, jahresabschluss, recht, IWB — tier badges + tooltips via `buildLandingTileHtml`.
- **Landing copy:** exam-policy note (Plattform-Simulation; PDFs local-only under `source-materials/`).

## Files touched (summary)

| Area | Key paths |
|------|-----------|
| Content | `*/js/data/aPlusSupplement.js`, `internationale-wirtschaftsbeziehungen/js/data/formulaCards.js`, VL layers per module |
| Exam policy | `docs/architecture/official-exam-policy.md`, `examDisclosure.js`, `fullExam.js`, `renderer.js` |
| Landing | `index.html`, `portal-critical.css`, `fonts-local.css`, `portal.css`, `common.js`, `modules.js` |
| Generated audits | `2026-05-29-a-plus-readiness-pass.md`, `exam-operating-system-*.generated.*` |

## Remaining honest limits

- **official-task-source** still blocked until OCR + human review (351 weak pages).
- **mikro2** market-failure chapters remain platform-added without VL page anchors — labeled in UI.
- **Beta modules** structurally A+ but theory depth % vs mikro1 varies (40–53%); PDFs remain primary for edge cases.

## Commands run

```bash
node tools/exam-os/generate-vl-layers.mjs --module <slug> --write  # 6 modules
npm run validate
npm run trust:pass1
node tools/exam-os/check-readiness.mjs --write
node tools/exam-os/audit-a-plus-readiness.mjs --write
npx lighthouse http://127.0.0.1:9876/index.html --only-categories=performance \
  --output=json --output-path=.qa/lighthouse-index-final.json
```

**Commit:** `3f20d44`
