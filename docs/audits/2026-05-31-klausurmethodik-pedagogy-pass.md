# Klausurmethodik pedagogy pass — 2026-05-31

## Problem (student report)

Klausurmethodik cards for **„Exkurs: Maximierung unter einer Nebenbedingung“** (concept `lagrange`, family `mikro1.taskfamily.lagrange-vl-pattern`) were unusable in exam prep:

| Field | Before |
|-------|--------|
| Ziel | Repeated section title verbatim |
| Vorgehen | Generic „VL-Abschnitt lesen … Anker … abgleichen“ |
| Typische Klausurfrage | Title again |
| Häufiger Fehler | „Anker auswendig“, „Übungsblatt verwechseln“ |
| Footer | „Quellen anzeigen · N VL-Stellen“, gap note „Übungsformat (Plattform)…“ |

Root cause: `renderTaskFamilyCard` mapped `topic` → Ziel and `title` → Klausurfrage; `generate-vl-layers.mjs` emits registry-oriented `method` / `commonTraps` for all VL families.

## Strategy

1. **Display-time enrichment (fleet-wide)** in `assets/js/portal-core/ui/klausurmethodikEnrichment.js` — synthesize Ziel, Vorgehen, Klausurfrage, and traps from concept `theorie` (warn-boxes, Lösungsrezept), `aufgaben[0]`, `intuition.exam`, and `formulaCards.commonMistakes` when data is generic.
2. **Renderer** uses enrichment for all modules; strips module prefix from accordion titles; footnote **„Zur Vorlesung“** only (no anchor count).
3. **Golden template** — hand-curated `examPedagogy` on mikro1 `lagrange` `-vl-pattern` and `-vl-apply` families (source: `mikro1/js/data/chapters.js` lagrange block + VL anchors).
4. **Gap note** — `studentizeTaskGapNote` humanized (no „Plattform“ jargon).

Generator (`tools/exam-os/generate-vl-layers.mjs`) unchanged; regen still writes generic rows — enrichment covers students at render time.

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/klausurmethodikEnrichment.js` | **New** — enrichment + title strip |
| `assets/js/portal-core/ui/renderer.js` | Wire enrichment; short titles; „Zur Vorlesung“ |
| `assets/js/portal-core/utils/studentFacingText.js` | Humanized official-task gap note |
| `mikro1/js/data/taskFamilies.js` | `examPedagogy` on lagrange families; `family()` passes field through |

## Example card AFTER fix — Nebenbedingung (`lagrange-vl-pattern`)

**Title:** Exkurs: Maximierung unter einer Nebenbedingung · 10 Min.

**Ziel:** Nach 10 Min kannst du \(\mathcal{L}=u+\lambda(m-p_1x_1-p_2x_2)\) aufstellen, drei FOCs (inkl. Budget) ableiten, die Tangentialbedingung \(MU_1/MU_2=p_1/p_2\) nutzen und \(\lambda\) als Grenznutzen des Einkommens erklären.

**Vorgehen:**

1. Lagrange-Funktion \(\mathcal{L}=u(x_1,x_2)+\lambda(m-p_1x_1-p_2x_2)\) aufstellen (Vorzeichenkonvention festhalten).
2. FOCs: \(\partial\mathcal{L}/\partial x_1=0\), \(\partial\mathcal{L}/\partial x_2=0\), \(\partial\mathcal{L}/\partial\lambda=0\) (Budget).
3. Aus den ersten beiden FOCs Tangentialbedingung \(MU_1/MU_2=p_1/p_2\) ableiten.
4. Optional: \(x_2\) als Funktion von \(x_1\) aus der Tangentialbedingung und in die Budgetrestriktion einsetzen.
5. \(\lambda\) als \(MU_i/p_i\) interpretieren (Grenznutzen pro Euro im Optimum).

**Typische Klausurfrage:** Gegeben \(u(x_1,x_2)\) und Budget \(p_1x_1+p_2x_2=m\). Stellen Sie \(\mathcal{L}\) auf, leiten Sie die FOCs her und formulieren Sie die Tangentialbedingung.

**Häufiger Fehler:**

- Dritte FOC nicht vergessen — Ableitung nach \(\lambda\) liefert die Budgetrestriktion.
- Vorzeichen bei \(\mathcal{L}=u-\lambda(\cdots)\) vertauscht — \(\lambda\) ändert dann das Vorzeichen.
- Tangentialbedingung mit Budgetsteigung \(-p_1/p_2\) verwechseln — GRS ist \(MU_1/MU_2>0\).

**Footer:** Zur Vorlesung (opens Quellen tab)

## Validation

- `npm run trust:pass1` — Klausurmethodik student-text scrub + Formeln tab smoke (see commit).

## Remaining risks

- Modules without rich `theorie` warn-boxes / `aufgaben` still get heuristic defaults (better than title-echo, not as strong as mikro1 lagrange golden row).
- Regenerated `taskFamilies.js` without `examPedagogy` relies on enrichment heuristics; consider optional `examPedagogy` curation for high-traffic concepts.
- `officialTaskGap` on mikro1 families still triggers gap footnote until OCR mapping ships (copy improved, not removed).

## Source materials used (lagrange golden)

- `mikro1/js/data/chapters.js` — concept `lagrange` (`theorie`, `formeln`, `aufgaben`)
- VL anchors: `mikro1.lagrange.vl02.p17.nebenbedingung`, `mikro1.lagrange.vl02.p20.nebenbedingungen`
