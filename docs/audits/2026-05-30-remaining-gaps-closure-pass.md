# Remaining gaps closure pass — 2026-05-30

**Scope:** Post–fleet-granularity gaps (theory depth, mikro2 supplementals, Pass 3 task-family quality, OCR backlog status).  
**Baseline:** `docs/audits/2026-05-29-a-plus-readiness-pass.md` (structural A+ 100% fleet-wide).

## Theory volume (% of mikro1 = 90 727 chars)

| Module | Before (A+ pass) | After (this pass) | Δ | Notes |
|--------|------------------|-------------------|---|--------|
| makro2 | 71% | **59%** | −12 pp | Removed duplicate generic `platform-added` padding loop; added `theoryDepthExpansions.js` (30 concepts, source-distilled open economy + growth + money) |
| makro1 | 47% | **47%** | — | `theoryDepthExpansions.js` for 8 thin blocks (VGR, Geld, Banken, Erwartungen, …) |
| recht | 44% | **46%** | +2 pp | 4 concepts: `privatrecht`, `willenserklaerung`, `trennung_abstraktion`, `geschaeftsfaehigkeit` |
| mikro2 | 39% | **40%** | +1 pp | Supplemental disclaimers + platform drills on `externa_*`, `public_goods` |
| statistik | 33% | **33%** | — | Pass 3 method-string enrichment only (no chapter inflation) |
| mathematik | 53% | **53%** | — | `r_begleitpraxis` +1 VL-aligned section (Kleinübung mapping) |
| oekonometrie | 60% | **60%** | — | Pass 3 method enrichment; curriculum already ≥4 rendered sections |

**Interpretation:** Aggregate % is not the primary success metric this pass. **makro2** character count dropped because inflated duplicate Prüfungsstandard/platform blocks were removed in favour of per-concept `theoryDepthExpansions` blocks. Runtime section count remains **30/30 ≥4 sections** (verified via dynamic `chapters.js` import).

## Structural A+ (unchanged)

All touched modules: **100%** concepts meet ≥4 sections, ≥3 formeln, ≥3 aufgaben (`audit-a-plus-readiness.mjs`).

## 1. Theory depth (source-faithful, no concept inflation)

| Module | Change |
|--------|--------|
| **makro2** | New `makro2/js/data/theoryDepthExpansions.js` + merge in `chapters.js`; fixed stale `sectionCount` bug; dropped second generic platform padding block |
| **makro1** | New `makro1/js/data/theoryDepthExpansions.js` + merge loop |
| **recht** | New `recht/js/data/theoryDepthExpansions.js` + merge loop |
| **mathematik** | `curriculum.js` → `r_begleitpraxis` third section (Kleinübung ↔ R-Sheet) |
| **oekonometrie** | No thin curriculum rows (≤3 sections); depth via existing VL curriculum |

**Source basis:** Makro II open-economy / Solow / monetary blocks (course logic + `source-materials/Makroökonomik II/`); Recht/Makro I AT–BGB structure from existing chapter prose; Mathematik Kleinübung `R.*` PDF refs in `r_begleitpraxis.sourceRefs`.

## 2. mikro2 supplementals (`externa_pigou`, `externa_institutionen`, `public_goods`)

| Item | Status |
|------|--------|
| Student-facing disclaimer | `MARKET_FAILURE_SOURCE_BOUNDARY` + per-concept `platform-added-notice` blocks in `chapters.js` |
| Manifest / provenance | `contentManifest.js` — `UNMAPPED_CURRENT_CONCEPTS` → `platform-added-explanation` / `platform-added-drill` |
| Drills | `aPlusSupplement.js` platform-added drills for all three; `externa_institutionen` theory section on price vs quantity instruments |
| VL anchors | **Still none** (`sourceAnchors.js` empty arrays) — by design until official corpus mapping |

## 3. Pass 3 — statistik / oekonometrie task families

| Action | Result |
|--------|--------|
| `tools/exam-os/enrich-pass3-registry-families.mjs` | **statistik:** 14 `method` strings extended with 4-step VL rubric suffix; **oekonometrie:** 32 |
| Dedupe | No near-duplicate family IDs removed (CI would flag anchor collisions; manual review deferred) |
| Regenerate | `generate-vl-layers.mjs --write` per module; enrich script re-run after regenerate |

## 4. OCR / official-task-source

| Metric | Value |
|--------|-------|
| `ocr-weak-pages.mjs --write` | Backlog refreshed; **Status** section added (2026-05-30) |
| Fleet weak pages | 351 / 8694 indexed (~4%) |
| **official-task-source families** | **0** (unchanged — no promotion without OCR + human review) |
| Automation limit | Script is index-only; Tesseract batch not run |

**Human review still required for:** Mikro1 Probeklausur JPGs, oekonometrie high weak-page share (14%), statistik exam PDFs (6%).

## Validation

| Check | Result |
|-------|--------|
| `node tools/exam-os/ci-validate.mjs` | OK |
| `node tools/exam-os/check-readiness.mjs` | `blockers: []` |
| `npm run trust:pass1` (tools/clickthrough) | passed |

## Files changed (representative)

- `makro2/js/data/{chapters,theoryDepthExpansions}.js`
- `makro1/js/data/{chapters,theoryDepthExpansions}.js`
- `recht/js/data/{chapters,theoryDepthExpansions}.js`
- `mikro2/js/data/{chapters,aPlusSupplement}.js`
- `mathematik/js/data/curriculum.js`
- `{makro2,makro1,recht,mikro2,statistik,oekonometrie,mathematik}/js/data/{taskFamilies,formulaCards}.js` (regenerated)
- `tools/exam-os/{enrich-pass3-registry-families,ocr-weak-pages}.mjs`
- `docs/audits/ocr-weak-pages-backlog.generated.md`

## Still blocked (honest)

1. **official-task-source** item-level ingest — needs OCR pipeline + human item mapping  
2. **makro2 aggregate theory %** vs mikro1 — smaller syllabus; quality now in expansions, not padding  
3. **mikro2 supplementals** — remain platform-added until VL page anchors exist  
4. **statistik theory %** — low vs mikro1 by syllabus size; not addressed by concept inflation this pass  
5. **Task-family dedupe** — deferred where CI anchor uniqueness would break

## Recommended next iteration

1. Human OCR pilot on oekonometrie/statistik highest-yield weak pages  
2. Map mikro2 market-failure topics if/when official Mikro II PDFs include them  
3. Continue per-concept `theoryDepthExpansions` pattern for makro1 blocks that stayed flat in char count
