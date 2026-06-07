# Fleet Theory + Graph Mastery Pass — 2026-06-03

## Mandate

Complete coherence pass for all **11** live modules: 8-step Theorie recipe, graph pedagogy (legends, labels, learning callouts), source-faithful depth on high-traffic concepts. Provenance stays on **Quellen** tab only.

## Fleet recipe audit (8 filled steps)

Run:

```bash
node --input-type=module -e "
import { auditTheoryRecipeSteps } from './assets/js/portal-core/theory/theoryStructure.js';
const slugs=['mikro1','mikro2','makro1','makro2','statistik','oekonometrie','mathematik','recht','finanzwirtschaft','jahresabschluss','internationale-wirtschaftsbeziehungen'];
for (const slug of slugs) {
  const mod=await import('./'+slug+'/js/data/chapters.js?'+Date.now());
  let full=0,total=0,avg=0;
  for (const ch of mod.CHAPTERS) {
    const e=mod.CONTENT[ch.id]; if(!e?.theorie) continue;
    const html=typeof e.theorie==='string'?e.theorie:'';
    const a=auditTheoryRecipeSteps(html);
    total++; avg+=a.filledCount; if(a.fullEight) full++;
  }
  console.log(slug, full+'/'+total, 'avg', Math.round(avg/total*10)/10);
}
"
```

| Module | Full 8 / concepts | Avg filled | Novice→mastery (theory+graphs alone) |
|--------|-------------------|------------|--------------------------------------|
| mikro1 | 32/33 (97%) | 8.0 | **A** — benchmark; graphs + tasks carry mastery; `budget` skips Vor-den-Aufgaben card when objectives show in header |
| mikro2 | 18/18 (100%) | 8.0 | **A−** — Edgeworth/Walras graphs strong; monopoly block deepened |
| makro1 | 13/14 (93%) | 7.4 | **B+** — IS-LM/Geld graph pedagogy extended; some blocks still template-heavy |
| makro2 | 30/30 (100%) | 8.0 | **B+** — open-economy theory complete; graph coverage thinner than mikro1 |
| statistik | 13/14 (93%) | 7.9 | **B** — test logic solid; `rlab` hub uses synthesized recipe (R lives in method tabs) |
| oekonometrie | 32/32 (100%) | 8.0 | **B+** — curriculum + theoryRecipe; graphs on key concepts |
| mathematik | 14/14 (100%) | 8.0 | **B+** — recipe via `theoryRecipe.js`; R tabs separate |
| recht | 14/14 (100%) | 8.0 | **B** — methodik strong; no graphs (expected) |
| finanzwirtschaft | 19/19 (100%) | 8.0 | **B+** — NPV/Fisher mechanismus enriched |
| jahresabschluss | 15/15 (100%) | 8.0 | **B** — booking workflow fixed; broken LaTeX escapes removed on `buchen_konten` |
| internationale-wirtschaftsbeziehungen | 16/16 (100%) | 8.0 | **B+** — Ricardo numerics present |
| **Fleet** | **216/219 (98.6%)** | **7.9** | **B+ fleet average** |

**Honest limit:** Full exam mastery still requires **Aufgaben**, Mastery/SRS, and VL PDFs — theory+graphs alone reach **solid B+/A−** on core modules, not automatic **A** without drill volume.

## Core infrastructure (this pass)

| Layer | File | Change |
|-------|------|--------|
| Recipe synthesis | `assets/js/portal-core/theory/theoryStructure.js` | `synthesizeRecipeGaps()`, `MODULE_EXAM_PATH`, mechanismus/definitionen from formeln/cards, dedupe fix for definitionen |
| Runtime meta | `assets/js/portal-core/ui/warningSystem.js`, `renderer.js` | `moduleSlug` + `chapterTitle` into `fuseIntuitionIntoTheoryHtml` / `completeTheoryRecipe` |
| Module boot | `*/js/ui/renderer.js` (×11) | `moduleSlug: COURSE_CONFIG.slug` passed to `createRenderer` |
| Graph pedagogy | `assets/js/portal-core/ui/graphPedagogy.js` | makro1: `guetermarkt`, `geldnachfrage`, `phillips`, `arbeitsmarkt`, `vgr` |
| Graph info | `makro1/js/ui/graphs.js` | IS-LM + Geldmarkt Klausurlesart rows in `#graph_info` |
| Fleet normalize | `tools/exam-os/normalize-theory-structure.mjs` | `moduleSlug` in pipeline (prior pass + verified) |

## Per-module: concepts touched & sources

### mikro1 (verify benchmark)
- **Touched:** fleet normalize (33 concepts); graph pedagogy already on budget/monopol/etc.
- **Sources:** `source-materials/Mikroökonomik I/` (19 PDFs, all present per manifest)
- **Gap:** 1 concept (`budget`) — objectives in header replace Vor-den-Aufgaben card by design

### mikro2
- **Touched:** `preisdiskriminierung` (mechanismus, klausurtransfer, fehler); fleet normalize 18/18
- **Sources:** `source-materials/Mikroökonomik II/Vorlesungsfolien/` (Mikro_2_*.pdf, Mikro2_*.pdf)
- **Graph:** Edgeworth (`gleichgewicht_tausch`) — prior pass per `2026-05-31-fleet-graph-pedagogy-pass.md`
- **Gap:** `monopol_preissetzung` duplicate warn-boxes in anwendung/fehler — cosmetic cleanup

### makro1
- **Touched:** graph `#graph_info` for `islm`, `geldnachfrage`; graphPedagogy entries
- **Sources:** `source-materials/Makroökonomik I/` (21 PDFs)
- **Gap:** `erwartungen` legacy array theorie in source file — runtime OK via import join

### makro2
- **Touched:** `wechselkurs` mechanismus (Mengennotation trap, source-distilled)
- **Sources:** `source-materials/Makroökonomik II/` (25 PDFs)
- **Gap:** many concepts lack interactive graphs — theory-only mastery path

### statistik
- **Touched:** `rlab` (completeTheoryRecipe), `verteilungen`, `z_test`, `varianzanalyse` (dedicated anwendung sections)
- **Sources:** `source-materials/Statistik/` (237 files — largest corpus)
- **Gap:** `rlab` is navigation hub; method R-tabs carry practice

### oekonometrie
- **Touched:** fleet normalize via `theoryRecipe.js` + curriculum (32/32)
- **Sources:** `source-materials/Ökonometrie/` (70 files)
- **Gap:** some graphs matrix-only — table fallback optional

### mathematik
- **Touched:** `theoryRecipe.js` regen with cards→definitionen dedupe fix (14/14)
- **Sources:** `source-materials/Mathematik/` (53 files, E1–E7 PDFs)
- **Gap:** mastery needs Aufgaben + R blocks, not theory alone

### recht
- **Touched:** fleet normalize (14/14); methodik already VL-deep
- **Sources:** `source-materials/Recht/` (30 files)
- **Gap:** no graphs; case subsumtion needs Aufgaben volume

### finanzwirtschaft
- **Touched:** `kapitalwert_fisher` Fisher-Separation mechanismus
- **Sources:** `source-materials/Finanzwirtschaft/` (12 files)
- **Gap:** limited graph coverage

### jahresabschluss
- **Touched:** `buchen_konten` GoB booking workflow + fixed broken formal markup
- **Sources:** `source-materials/Jahresabschluss/` (34 files)
- **Gap:** booking case diversity still needs human VL case bank

### internationale-wirtschaftsbeziehungen
- **Touched:** fleet normalize (16/16); ricardo numerics verified
- **Sources:** `source-materials/Internationale Wirtschaftsbeziehungen/` (20 files)
- **Gap:** Heckscher-Ohlin/Krugman graphs deferred

## Graph pedagogy status

| Priority | Module | Concept | Status |
|----------|--------|---------|--------|
| P0 | mikro2 | `gleichgewicht_tausch` | Done (prior pass) |
| P1 | mikro1 | budget, monopol, hausopt, … | graphPedagogy + legends in graphs.js |
| P1 | makro1 | islm, geldnachfrage, guetermarkt, phillips | graphPedagogy + `#graph_info` Klausurlesart |
| P2 | makro2, statistik, oeko | partial | graphPedagogy on key concepts; fleet axis audit deferred |

See `docs/audits/2026-05-31-fleet-graph-pedagogy-pass.md` for Edgeworth spec.

## Validation

```bash
npm run validate          # CI validate OK (2026-06-03)
npm run trust:pass1       # see note below
```

**`npm run validate`:** passed.

**`npm run trust:pass1`:** `trust-regression-pass-1: all checks passed` (2026-06-03, ~10 min local run via `npm run trust:pass1`).

## Top remaining gaps (human VL / OCR)

1. **Mikro2** — monopoly price discrimination 2nd degree: full IC/IR menu algebra from VL PDFs (OCR weak pages)
2. **Makro2** — Mundell-Fleming regime graphs: axis collision audit
3. **Statistik** — non-parametric density: source OCR for kernel details
4. **Fleet** — `examPedagogy` on task families only in mikro1; lift to makro/statistik taskFamilies
5. **examPedagogy** — lift from mikro1-only to makro/statistik taskFamilies

## Key files changed (this resume pass)

- `assets/js/portal-core/theory/theoryStructure.js`
- `assets/js/portal-core/ui/warningSystem.js`
- `assets/js/portal-core/ui/renderer.js`
- `assets/js/portal-core/ui/graphPedagogy.js`
- `*/js/ui/renderer.js` (×11, moduleSlug)
- `statistik/js/data/chapters.js`
- `mikro2/js/data/chapters.js` (preisdiskriminierung, prior)
- `makro2/js/data/chapters.js`, `finanzwirtschaft/js/data/chapters.js`
- `jahresabschluss/js/data/chapters.js`
- `makro1/js/ui/graphs.js`
