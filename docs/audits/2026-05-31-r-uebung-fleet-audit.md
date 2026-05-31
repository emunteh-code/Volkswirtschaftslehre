# R-Übung fleet audit — 2026-05-31 (pass 2)

**Mandate:** Functional R-Übung tabs, source-faithful where possible, honest WebR boundaries.  
**Pass 1 commit:** `b63de8c` · **Pass 2:** breadth + parity + Mathematik scope (this document).

**Shared stack:** `assets/js/portal-core/features/rPractice.js`, `assets/css/r-practice.css`, tab `r-anwendung` → **R-Übung**.

---

## Fleet counts (after pass 2)

| Module | Concepts with R tab | R blocks | Δ pass 2 |
|--------|---------------------:|---------:|---------:|
| **statistik** | 8 (+1) | 9 (+1) | `verteilungen` ← TUT_03 |
| **oekonometrie** | 31 (+2) | 31 (+2) | `confidence_intervals`, `monte_carlo` |
| **mathematik** | 8 | 8 | scope note only (base R) |
| **Total** | **47** | **48** | **+3 blocks** |

*Note: `autocorrelation` already had an R block from pass 1; not counted again.*

---

## Gap 1 — Breadth review (source scripts vs portal)

### Statistik — concepts reviewed

| Concept | VL R script | Decision |
|---------|-------------|----------|
| `deskriptiv` | TUT_01, TUT_02 | already linked |
| `verteilungen` | **TUT_03** | **added** (direct-source) |
| `bivariat` | TUT_04 | already linked |
| `wahrscheinlichkeit` | — | no dedicated TUT `.R` in corpus |
| `schaetzen_verfahren` | — | no script |
| `nichtparametrisch` | — | no script |
| `schaetzen_eigenschaften_intervalle` | inductive / t.test | already linked |
| `testen` | t.test | already linked |
| `z_test`, `zwei_stichproben` | — | no TUT match |
| `regression_*` | Modellierung | already linked |
| `varianzanalyse` | TUT_11 | already linked |
| `rlab` | orientation only | no tab (by design) |
| TUT_08 | `Zuckerrohr.csv` | **not added** — external CSV not in WebR prelude |

**Blocks added (Statistik):** 1 (`verteilungen`).

### Ökonometrie — concepts reviewed

| Concept | VL `.R` in `source-materials/Ökonometrie/.../R/` | Decision |
|---------|--------------------------------------------------|----------|
| All with existing `rBlock` | 01–12, Wiederholung, Tutorium | pass |
| `confidence_intervals` | 09 + `confint(lm)` workflow | **added** (direct-source) |
| `monte_carlo` | 10 (simulation pattern) | **added** (`platform-added-drill`) |
| `consistency` | — | no literal script — theory only |
| `monte_carlo` vs `asymptotic_normality` | 10 | drill on MC concept, not duplicate tab on asymptotic |

**Blocks added (Ökonometrie):** 2.

### Mathematik

All eight concepts already map to Kleinübung `R.E*` / `R.LA*` / `R.AN*` / `R.OP*` paths; no new blocks (base R only).

---

## Gap 2 — Numerical parity (WebR ≠ desktop R)

| Change | Location |
|--------|----------|
| Truth banner: WebR can differ from Desktop-R; no package install; RStudio for exams | `renderRTruthBanner(moduleSlug)` in `rPractice.js` |
| Mathematik cross-links in banner to Ökonometrie + Statistik for package workflows | same |
| Guided blocks: **Desktop-R empfohlen** + copy-paste `<pre class="r-copy-paste-script">` | `renderGuidedDesktopBanner()` |
| Default guided `runtimeNote` mentions RStudio + copy script | `buildRuntimeExpectation()` |
| **Selbstcheck** on every block: compare with Soll-Output | `inferSelfCheckLine()` → `.r-self-check-line` |
| No promise of `install.packages` in WebR | banner + guided copy |

**Banner text (canonical):**  
*„Browser-R (WebR): Kann von Desktop-R abweichen (Pakete, Zahlen, Plotdetails). Kein Ersatz für RStudio in der Prüfung — bei Paket-Skripten lokal ausführen. WebR installiert keine Zusatzpakete.“*

---

## Gap 3 — Mathematik (base R only)

| Item | Detail |
|------|--------|
| Scope note in truth banner | `renderRTruthBanner('mathematik')` — Basis-R, links to Ökonometrie/Statistik |
| Module intro | `mathematik/js/data/curriculum.js` → `r_begleitpraxis` motivation |
| Prelude | **No** stats/econ prelude (`getRuntimePrelude` returns `''` for mathematik) |
| Package check | grep: no `library(` in mathematik `curriculum.js` rBlocks |
| Cross-link | Relative links in banner: `../oekonometrie/...`, `../statistik/...` |

---

## Per-module status (unchanged concepts = pass)

Statistik, Ökonometrie, Mathematik blocks from pass 1 remain valid. New blocks follow same `renderRAnwendungTab` pipeline.

**Guided (package) blocks:** `heteroskedasticity`/`robust_gls` (sandwich path on robust_gls), `hac_newey_west` — desktop copy + no live run.

---

## Tests

```bash
cd tools/clickthrough && npm run trust:pass1
```

Spot-check: `statistik/verteilungen`, `oekonometrie/confidence_intervals`, `mathematik/funktionen_gleichungen` R tabs.

---

## Files changed (pass 2)

- `assets/js/portal-core/features/rPractice.js` — banners, guided desktop, self-check
- `assets/css/r-practice.css` — guided + self-check styles
- `statistik/js/data/chapters.js` — `verteilungen` R block + rlab list
- `oekonometrie/js/data/curriculum.js` — `confidence_intervals`, `monte_carlo` blocks
- `mathematik/js/data/curriculum.js` — scope note on `r_begleitpraxis`
- `docs/audits/2026-05-31-r-uebung-fleet-audit.md` (this file)

---

## Remaining intentional gaps

- Statistik TUT_08 (needs `Zuckerrohr.csv`), z_test / zwei_stichproben (no VL R script in repo mapping).
- Ökonometrie `consistency` (no standalone `.R` exercise file).
- WebR numerical parity with desktop R — documented, not eliminated.
