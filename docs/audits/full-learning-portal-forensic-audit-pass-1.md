# Full Learning-Portal Forensic Audit Pass 1

Date: 2026-04-10  
Workspace state note: this audit reflects the current local workspace state, including uncommitted reconstruction work already present in `statistik/`, `recht/`, and `internationale-wirtschaftsbeziehungen/`.

## Executive Verdict

The portal is **not fully release-ready as a serious learning product**, even though it is much stronger than a typical prototype and several modules now feel close to `mikro1` benchmark level.

The true current quality level is:

- **strong advanced beta / near-release** at the platform level
- **flagship quality** in `mikro1`
- **close-to-flagship** in `oekonometrie`, `makro2`, `recht`, `statistik`, `finanzwirtschaft`, and `internationale-wirtschaftsbeziehungen`
- **still visibly second-tier** in `mikro2`, `mathematik`, and parts of `jahresabschluss` / `makro1`

What still visibly undermines the portal:

- `mikro2` is still a live module without source-corpus parity and still feels lighter than `mikro1`
- `mathematik` still lacks full backbone parity with the rest of the portal and still feels structurally like a partial special case
- dashboards and mistake-review surfaces are functional but still read like pilot tooling, not polished student product
- the shared R surface is much better than raw WebR, but still too tool-first in wording and status language
- concept-page density is still uneven across modules; several sampled theory pages remain visibly lighter than strong `mikro1`
- there is still product-family drift in infrastructure depth, not mostly in shell visuals anymore

Blunt verdict: the portal is **coherent enough to impress**, but **not yet coherent enough to ship without caveats** if it is going to be judged as a serious, source-faithful, exam-focused learning platform.

## System Map

### Live Modules

- `mikro1`
- `mikro2`
- `makro1`
- `makro2`
- `oekonometrie`
- `statistik`
- `finanzwirtschaft`
- `mathematik`
- `jahresabschluss`
- `recht`
- `internationale-wirtschaftsbeziehungen`

### Strongest Modules

- `mikro1`
- `oekonometrie`
- `makro2`
- `recht`
- `statistik`

### Weakest / Most Exposed Modules

- `mikro2`
- `mathematik`
- `jahresabschluss`
- `makro1`

### Quarantined / Blocked / Special-Status Surfaces

- `mikro2`
  - live, but still academically special-case because the repo has no real Mikro II source corpus
  - cannot honestly claim `direct-source` parity with the source-backed modules
- `r/`
  - still exists as a separate surface outside the main module registry
- `politisches-system-brd/`
  - exists in repo, not part of the live module registry

### Benchmark Modules

- primary benchmark: `mikro1`
- secondary internal benchmark for strong interactive infrastructure: `oekonometrie`

### Shared Systems

- landing page and registry: `index.html`, `assets/js/modules.js`, `assets/js/common.js`
- shared runtime shell: `assets/js/portal-core/app.js`
- shared renderer: `assets/js/portal-core/ui/renderer.js`
- shared exams: `assets/js/portal-core/features/fullExam.js`
- shared mistake review: `assets/js/portal-core/features/mistakeReview.js`
- shared R surface: `assets/js/portal-core/features/rPractice.js`
- generated secondary portal path: `assets/js/generated-portal/main.js`

### Likely Shared Defect Zones

- shared R surface wording and hierarchy
- dashboard and mistake-review product tone
- mixed CSS inheritance strategy across modules
- landing-page / module-registry split from repo reality
- backbone parity gaps for modules that do not fully use manifest / portal-bridge patterns
- stale QA assumptions caused by markup drift in the live product

### Early First-Time Student Risk Assessment

Modules or surfaces most likely to fail a first-time student confidence test:

- `mikro2`
  - because it still feels thinner and structurally less backed than source-grounded flagship modules
- `mathematik`
  - because it still feels like a partially special-cased module with weaker portal-backbone parity
- dashboard / mistake review
  - because the surfaces are usable but still read like internal pilot tools
- R tabs
  - because the student still sees tool-state language faster than pedagogical meaning in some shared surfaces

## Method

This pass combined:

- static repo / architecture inspection
- review of existing audit and status docs
- module concept-count and data-surface inspection
- real browser click-through on the landing page and all live modules
- representative checks for theory, tasks, graph tabs, R tabs, dashboard, mistake review, and full-exam flow

Concrete browser checks completed:

- landing page
- one representative concept page per live module
- theory tab for every live module
- Aufgaben tab for every live module
- graph path for graph-bearing representative modules
- R path for `mathematik`, `oekonometrie`, and `statistik`
- dashboard and mistake review representative flows
- full exam overview and first exam render for `mikro1`

## Module-by-Module Table

| Module | Visual / Product Quality | Pedagogy Quality | Content Density | Formula / Graph / R Quality | Exam Layer | Benchmark Status vs `mikro1` | Top Remaining Weakness |
|---|---|---|---|---|---|---|---|
| `mikro1` | Strong flagship | Strong flagship | Strong | Strong graph pedagogy, strong formula support | Good | Benchmark | Dashboard and mistake-review still feel colder and more pilot-like than the concept pages |
| `mikro2` | Visually coherent, but structurally thinner | Mixed; better than before but not flagship | Too thin | Graph family improved, but sampled theory density still light and formula support sparse | Functional but lighter | Below benchmark; quarantined | Live module without source corpus parity, no mistake review, no manifest/bridge parity, still lighter than flagship modules |
| `makro1` | Coherent | Good but lighter | Medium | Graphs work; formula support adequate but not rich | Functional | Below strongest benchmark | Sampled theory page density is still too light for a flagship module |
| `makro2` | Strong and coherent | Strong | Strong | Graph interpretation good; formula support decent | Good | Close to benchmark | Some theory pages still read lighter than strong `mikro1` concept pages |
| `oekonometrie` | Strong, serious product feel | Strong | Strong | Graphs strong, R important and functional, formula support a bit uneven | Good | Close to benchmark | Shared R surface still reads too tool-first; some theory pages still light on formal support |
| `statistik` | Strong and coherent | Strong | Strong | Graphs solid, formulas solid, R much improved but still generic in shared framing | Good | Close to benchmark | Remaining thinness in supplementary clusters and still-generic R surface language |
| `finanzwirtschaft` | Coherent and serious | Strong | Medium-strong | Graphs and formulas work, but some theory pages remain compact | Good | Close to benchmark | Late capital-structure / method-selection cluster still lighter than strongest benchmark pages |
| `mathematik` | Much improved, but still visibly special-case | Good and improving | Medium | Graph and formula surfaces improved; R still generic in shared framing | Functional | Still below benchmark at module level | Backbone parity gap, no mistake review, still coarser and more synthetic-feeling than `mikro1` |
| `jahresabschluss` | Coherent but lighter | Good | Medium | No graph issue; formula / doctrinal anchors adequate but compact | Functional | Below benchmark | Concept pages still feel compact relative to source richness and flagship density |
| `recht` | Strong and coherent | Strong | Strong | Law-appropriate anchor / distinction support is good | Good | Close to benchmark | Exam-bank breadth still trails the strongest modules |
| `internationale-wirtschaftsbeziehungen` | Strong and coherent | Strong | Strong | Graph/model interpretation much better; formula support okay | Good | Close to benchmark | Some drill breadth remains source-distilled rather than as rich as the source corpus allows |

## Shared System Defects

| Issue | Likely Root Cause | Severity | Classification | Patched or Documented |
|---|---|---:|---|---|
| Landing page triggers a 404 on initial load | Missing site icon / missing explicit favicon handling | Low | E | Documented |
| Dashboard and mistake-review pages still use pilot-like copy such as `Kennzahlen aus dem Lernprotokoll (Pilot)` and `Noch nicht verfügbar` | Shared dashboard/mistake-review product copy never graduated from internal-state honesty into polished student UX | High | B | Documented |
| Shared R runtime still foregrounds system labels such as `Runtime: bereit` and generic `Mini-Transfer` language | Shared `rPractice.js` copy and hierarchy still too tool-first | High | B | Documented |
| Mixed CSS inheritance strategy across modules | Some modules import `mikro1` CSS directly; others maintain large local CSS copies with their own token definitions | Medium | B | Documented |
| Live-product markup has drifted away from older QA assumptions | Product evolved but older clickthrough/audit selectors were not maintained | Medium | B | Documented |
| Backbone parity is inconsistent across modules | Some modules still lack manifest/portal-bridge/mistake-review parity | High | A | Documented |
| Repo contains live-adjacent surfaces outside the module registry (`r/`, `politisches-system-brd/`) | Product boundary is not fully codified at platform level | Medium | B | Documented |
| Shared placeholder filtering exists, which is good, but it also signals that the renderer still expects degraded input states | Shared renderer is carrying too much fallback responsibility for uneven data quality | Medium | B | Documented |

## Module-Local Defects

| Module | Issue | Severity | Classification | Patched or Documented |
|---|---|---:|---|---|
| `mikro2` | Live despite no source corpus in repo; still weaker than source-backed flagship modules | High | A | Documented |
| `mikro2` | No mistake-review entry point on home surface | High | A | Documented |
| `mikro2` | Sampled theory page had only 1 visible formula support and still felt summary-like | High | B | Documented |
| `mathematik` | No mistake-review entry point on home surface | High | A | Documented |
| `mathematik` | Still lacks full parity with content-manifest / portal-bridge backbone used elsewhere | High | A | Documented |
| `mathematik` | Module still feels coarser than its source structure supports | High | B | Documented |
| `makro1` | Sampled theory page (`islm`) still too compact for flagship-level density | Medium | B | Documented |
| `makro2` | Sampled theory page (`wirtschaftspolitik_offen`) still lighter than strong `mikro1` pages | Medium | B | Documented |
| `oekonometrie` | Sampled theory page (`fwl_partial_regression`) showed only 1 formula support | Medium | B | Documented |
| `statistik` | Nonparam / supplementary clusters still lighter than core flagship pages | Medium | B | Documented |
| `finanzwirtschaft` | `wacc` and related late-capital-structure pages still too compact | Medium | B | Documented |
| `jahresabschluss` | Sampled core pages remain compact versus source richness | Medium | B | Documented |
| `recht` | Mock exam bank still smaller and more block-oriented than ideal | Medium | B | Documented |
| `internationale-wirtschaftsbeziehungen` | Drill breadth still somewhat source-distilled in places where source corpus appears richer | Medium | B | Documented |

## Copy / Spelling / Wording Findings

### Shared / System-Wide

- `Runtime: bereit`
  - visible on sampled R pages
  - technically clear, pedagogically cold
  - reads like system status, not like student guidance
- `Mini-Transfer: Welche eine Prüfungsregel nimmst du aus dieser R-Übung in die Klausur mit?`
  - still generic and repeated
  - acceptable as fallback, weak as flagship copy
- `Kennzahlen aus dem Lernprotokoll (Pilot)`
  - honest, but visibly unfinished product language
- `Noch nicht verfügbar: keine Konzept-Check-Läufe im Attempt-Log.`
  - honest, but reads like internal tooling copy
- `Einträge aus dem lokalen Lernprotokoll. „Erledigt“ ist nur eine lokale Markierung zum Abhaken — keine Bewertung.`
  - informative, but too dense and caution-heavy for a first screen

### Module-Specific / Surface-Specific

- `mikro2`
  - module remains vulnerable to vague `source-distilled` / platform-authored tone because no source corpus exists
- dashboard surfaces generally
  - copy is accurate but not confidence-building
- R tabs generally
  - student-facing wording is still more operational than concept-led

### Naming / Consistency

- `Int. Wirtschaftsbeziehungen` style abbreviations appear in some secondary surfaces while the full course title appears elsewhere
- product-family naming is mostly consistent now, but secondary surfaces still compress names more aggressively than the main shell

## Graph / Formula / LaTeX Findings

### Strong

- Sampled graph pages across `mikro1`, `mikro2`, `makro1`, `makro2`, `oekonometrie`, `statistik`, `finanzwirtschaft`, `mathematik`, and `internationale-wirtschaftsbeziehungen` all rendered live graph canvases
- Legacy graph interpretation families were not reproduced in the sampled runtime
- No raw LaTeX leak or `undefined` content leak was reproduced in the sampled theory / graph / task surfaces

### Below Standard

- `mikro2 / spieltheorie_statisch`
  - only 1 visible formula support on sampled theory page
- `makro1 / islm`
  - graph works, but theory density around it is too light
- `makro2 / wirtschaftspolitik_offen`
  - theory density still lighter than graph seriousness suggests
- `oekonometrie / fwl_partial_regression`
  - concept page is strong overall, but visible formula support is thinner than it should be
- `finanzwirtschaft / wacc`
  - formulas are present, but the page still risks feeling method-compressed
- `jahresabschluss / anlagevermoegen`
  - page is usable but compact relative to flagship pages

### Verdict

Graph-family coherence is **no longer the main system problem**. The remaining issue is **uneven graph-adjacent pedagogy density** and **uneven formula richness**, not broken graph rendering.

## R Learning-Surface Findings

### Verified Pages

- `mathematik / summen_logik_beweise`
- `oekonometrie / matrix_notation`
- `statistik / regression_diagnostik_prognose`

### What Is Strong

- every sampled page had a working editor
- output guidance was present
- a clear core-line / editable-line emphasis was present
- the pages are much better than a raw code dump

### What Is Still Weak

- `Runtime: bereit` remains a visually prominent first-status cue
- generic `Mini-Transfer` language still appears in shared surfaces
- the shared R surface still feels partly tool-first instead of fully concept-first
- the code/output/meaning hierarchy is improved, but still not as scan-efficient and student-centered as the strongest `mikro1` learning surfaces

### Below Standard

- `mathematik`
  - R is more useful now, but still not yet fully integrated into the same flagship tone as the best concept pages
- `oekonometrie`
  - strongest current R usage, but still hurt by shared system-language coldness
- `statistik`
  - concept-specific R tabs are a real improvement, but shared framing still slows first-time orientation

## Granularity / Density Findings

### Modules Still Too Thin or Too Compressed

- `mikro2`
  - clearly too compressed relative to flagship benchmark
  - also blocked by missing source corpus, so honest closure is limited
- `mathematik`
  - much stronger than before, but still visibly coarser than the source structure and weaker than `mikro1`
- `makro1`
  - representative theory density still too thin
- `jahresabschluss`
  - concept-page chunking remains compact relative to source abundance

### Modules With Rich Source Support That Still Justify More Density

- `Statistik`
  - source corpus is very rich
  - current module is much improved, but still has room in nonparam / ANOVA / exam-bank breadth
- `Mathematik`
  - source corpus is very rich
  - current 14-concept map still leaves real room for finer pedagogical segmentation
- `Makro II`
  - source corpus is rich enough to justify continued density improvements in policy and long-run sections
- `Jahresabschluss`
  - source corpus is rich enough that compactness is now a product choice, not a hard source limitation

### Modules Currently Close Enough on Density

- `recht`
- `finanzwirtschaft`
- `internationale-wirtschaftsbeziehungen`
- `oekonometrie`

These are not “done,” but they no longer read like compressed summary modules.

## Source-Adequacy Findings

Source corpus depth observed in repo:

- `Statistik`: very deep source corpus
- `Mathematik`: very deep source corpus
- `Makro I` and `Makro II`: deep source corpus
- `Jahresabschluss`: deep source corpus
- `Recht`: strong source corpus
- `Finanzwirtschaft`: moderate but sufficient source corpus
- `GIWB`: strong source corpus
- `Mikro I`: strong benchmark corpus
- `Mikro II`: **no corresponding source corpus**

Implications:

- thinness in `mikro2` is partially blocked by missing source materials and cannot be honestly “solved” the same way as the source-backed modules
- thinness in `mathematik`, `statistik`, `makro1`, `makro2`, and `jahresabschluss` is **not** mainly blocked by source scarcity
- the portal has enough source support to justify continued density and exam-bank strengthening in most modules

## Release Blockers

These are the exact issues that still block a clean “serious release-ready learning platform” verdict.

1. `mikro2` is still publicly live without source-corpus parity.
   - It remains academically special-case under the repo rules.
   - It still feels lighter than source-backed flagship modules.
   - If the platform is marketed as source-faithful, this is a trust blocker.

2. `mathematik` still lacks backbone parity with the main portal family.
   - No mistake-review entry point.
   - Still structurally more special-case than the other flagship modules.
   - Still feels like a partially integrated module rather than full peer to `mikro1`.

3. Dashboard and mistake-review surfaces are still too pilot-like to ship as polished student-facing product features.
   - The copy signals partiality and internal tooling.
   - Data coverage and framing are uneven across modules.
   - These surfaces currently reduce trust rather than strengthen it.

4. Shared R tabs are still below flagship product standard.
   - They function.
   - They help.
   - But they still foreground runtime/tool cues more than student meaning, especially on first view.

These are not the only defects, but they are the most important remaining blockers to a clean release-ready verdict.

## Shared System Defect Detail

### Dashboard / Mistake Review

- Problem
  - honest but under-finished copy
  - uneven data richness
  - not enough product confidence or student guidance
- Impact
  - makes the portal feel partially internal / pilot
- Root cause
  - backbone analytics grew after the learning surfaces and never received a full product-language and parity pass

### Shared R Surface

- Problem
  - runtime status and generic transfer copy are still too prominent
  - the surface still partly feels like an instructional IDE wrapper rather than a flagship learning tab
- Impact
  - students with light prior R experience still need more inference than they should
- Root cause
  - the shared `rPractice` layer has improved pedagogically, but not enough of the remaining product-tone and hierarchy debt has been paid down

### Backbone Parity

- Problem
  - not every live module participates equally in mistake review, manifest coverage, and adjacent backbone affordances
- Impact
  - some modules still feel like second-class citizens even when their concept pages improved
- Root cause
  - module reconstruction outpaced portal-backbone normalization

### Mixed CSS Inheritance

- Problem
  - some modules fully inherit `mikro1` shell CSS, others maintain large local copies
- Impact
  - future drift risk remains high even if current visible drift is much lower
- Root cause
  - historical convergence work standardized the look, but not the entire maintenance strategy

## Copy / Spelling / Language Findings

No catastrophic spelling breakdowns were reproduced in this pass, but the remaining language-quality issues are mostly **tone and scan speed**, not basic grammar.

Highest-value wording problems:

- pilot-language on dashboard surfaces
- system-status wording on R surfaces
- over-explanatory caution copy on mistake review
- residual genericity in some module-authored transfer phrasing outside `mikro1`

## Release-Readiness Verdict by Area

| Area | Verdict |
|---|---|
| Landing page | Good, but still slightly under-finished because of the 404 and registry/scope ambiguity |
| Shell / navigation | Largely coherent |
| Theory pages | Uneven but mostly strong |
| Aufgaben / Prüfungstransfer | Stronger than before, but still uneven across modules |
| Graph surfaces | Coherent and mostly strong |
| Formula support | Improved, still uneven |
| R surfaces | Useful, but not yet flagship-standard |
| Dashboard / mistake review | Functional but under-polished |
| Exams | Functional and credible, but uneven in breadth and polish across modules |

## Priority Roadmap

### First

Run a **portal-backbone trust and parity pass**:

- dashboard productization
- mistake-review productization
- `mathematik` backbone parity
- explicit quarantine / status handling for `mikro2`
- low-level registry / scope cleanup for live vs non-live surfaces

Why first:

- this is the biggest remaining product-coherence and trust problem
- it affects the whole platform more than another single-module density pass

### Second

Run a **flagship density equalization pass** for the modules that still feel lighter than `mikro1` on representative theory pages:

- `makro1`
- `jahresabschluss`
- `finanzwirtschaft` late capital-structure cluster
- remaining `mathematik` granularity gaps

Why second:

- the biggest remaining pedagogy problem after backbone trust is uneven concept-page density

### Third

Run a **shared R and exam-surface polish pass**:

- shared R wording / hierarchy / evidence framing
- exam-bank breadth and realism where still thin
- product-tone cleanup for secondary surfaces

Why third:

- these are high-value and visible, but less foundational than backbone parity and flagship density

### Freeze / Do-Not-Touch Notes

- do **not** source-ground `mikro2` until a real Mikro II source corpus exists
- do **not** do a broad shell redesign right now; shell drift is no longer the main blocker
- do **not** broaden platform-wide density rewrites before backbone parity issues are closed
- freeze the current graph-family direction unless a concrete rendering defect appears; graph-family coherence is now one of the platform’s stronger shared areas

## Final Verdict

This portal is no longer “rough.” It is a serious, ambitious product with several genuinely strong modules and a coherent interactive learning vision.

But it is still **not honestly release-ready without caveats**.

The remaining problems are not mostly broken buttons or chaotic visuals anymore. They are the more consequential second-order issues:

- trust asymmetry between modules
- backbone parity gaps
- uneven flagship density
- under-polished dashboards / mistake review
- shared R surfaces that still feel partially tool-first

That means the next work should not be random polish. It should be a strict final-mile quality program focused on **product trust, parity, and flagship consistency**.
