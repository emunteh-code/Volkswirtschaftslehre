# Mikro2 Source-Metadata + Readiness Pass — 2026-06-03

## Mandate

Continue Mikro II toward source-faithful exam-OS parity. The recommended slice
was a "source-metadata + readiness pass" on the premise that mikro2 still had
supplementals without VL anchors, incomplete provenance, and trust failures from
recent fleet work.

## Audit-first finding: the premise was already largely resolved

Before touching content, the existing state was measured with the repo's own
tooling (`tools/exam-os/audit-current-state.mjs`, `tools/exam-os/check-readiness.mjs`)
and the trust harness (`npm run trust:pass1`).

| Gate | mikro2 status (measured) |
|---|---|
| Source files local | complete (31 registry docs, 348 indexed pages) |
| Page index | complete |
| Source-ref coverage | 100% of source-eligible concepts (15/15) |
| Source-anchor coverage | 100% of source-eligible concepts (15/15) |
| Provenance | complete |
| `npm run validate` | passes |
| `npm run trust:pass1` | **all checks passed** (no failures) |

So the two headline premises — "supplementals without VL anchors / incomplete
provenance" and "trust failures from recent fleet work" — no longer hold:

- All 18 concepts carry provenance; the 3 platform-boundary concepts
  (`externa_pigou`, `externa_institutionen`, `public_goods`) are explicitly
  labeled `platform-added-*` with `NOTES_UNMAPPED` (no VL anchor invented).
- The full Playwright trust regression suite (`trust-regression-pass-1.mjs`,
  ~30 systems across the fleet) passed end-to-end on this machine.

The remaining hard blockers for mikro2 (official exam bank, evidence-based
adaptive mastery, Mikro1-depth certification) all depend on an **official
task/exam corpus that does not exist** in the supplied materials
(`source-materials/Mikroökonomik II/` is lecture slides + literature only, no
exercise/solution/exam PDFs). That is a human/source gap and was **not**
fabricated.

## Slice actually executed: VL page-anchor verification

The highest-leverage *auditable, source-faithful* work left was to convert
"anchors a prior pass recorded" into "anchors verified by reading the actual VL
slides." A prior pass (`codex-source-pass-3`, 2026-05-27) recorded 47 page-level
anchors but several page numbers had drifted from the slide where the topic
actually appears.

All 47 anchors in `mikro2/js/data/sourceAnchors.js` were re-checked this pass by
extracting each anchored slide from the official PDFs (Poppler `pdftotext
-layout` per page, plus full per-PDF title maps). 13 anchors had a drifted page
locator and were corrected to the verified slide.

### Sources reviewed (native text extraction, per-page)

All under `source-materials/Mikroökonomik II/Vorlesungsfolien/`:

- `Mikro_2_2.pdf` (16 S.) — monopoly pricing & welfare
- `Mikro_2_3.pdf` (15 S.), `Mikro_2_4.pdf` (11 S.) — price discrimination 3rd/2nd degree
- `Mikro2_5.pdf` (15 S.) — Stackelberg
- `Mikro2_6.pdf` (19 S.) — Cournot
- `Mikro2_8.pdf` (14 S.) — Bertrand
- `Mikro2_9.pdf` (17 S.), `Mikro2_10.pdf` — static game theory
- `Mikro2_14.pdf` (12 S.) — insurance / risk premium
- `Mikro2_15.pdf` (17 S.), `Mikro2_16.pdf` (18 S.) — general equilibrium / Walras / Edgeworth
- `Mikro2_18.pdf` (11 S.), `Mikro2_20.pdf` (11 S.) — asymmetric information

## Anchor corrections (page locator drift → verified slide)

| Concept | Anchor id | Old page | Verified page | Verified slide title |
|---|---|---:|---:|---|
| `wohlfahrt_messung` | `vl02.p05.monopoly-welfare` | 5 | 7 | "Wohlfahrtswirkung des Monopols" |
| `wohlfahrt_messung` | `vl02.p09.surplus` | 9 | 11 | "Wohlfahrt im Monopol und bei vollkommener Konkurrenz" (KRM/PRM/WM/DWLM) |
| `oligopol_cournot_bertrand` | `vl06.p03.reaction` | 3 | 4 | "Reaktionsfunktionen und Cournot-Gleichgewicht" |
| `oligopol_cournot_bertrand` | `vl08.p03.bertrand-paradox` | 3 | 3 | "Preiswettbewerb mit identischen Gütern: Marktergebnis" (p = c) — section text only |
| `oligopol_stackelberg` | `vl05.p02.stackelberg-model` | 2 | 3 | "Das Stackelberg-Modell" |
| `spieltheorie_statisch` | `vl09.p05.nash` | 5 | 6 | "Nash-Gleichgewicht" |
| `gleichgewicht_tausch` | `vl16.p05.contract` | 5 | 6 | "Pareto-Effizienz und die Kontraktkurve" |
| `gleichgewicht_walras` | `vl15.p02.robinson` | 2 | 3 | "Die Robinson-Crusoe Ökonomie" |
| `gleichgewicht_walras` | `vl16.p09.market-clearing` | 9 | 11 | "Güterpreise im allgemeinen Gleichgewicht" |
| `unsicherheit_versicherung` | `vl14.p03.risk-premium` | 3 | 5 | "Versicherung, Sicherheitsäquivalent, und Risikoprämie" |
| `information_adverse` | `vl18.p03.adverse-selection` | 3 | 4 | "Unvollständige Information" ("Dieses Problem wird Adverse Selektion genannt") |
| `information_moralhazard` | `vl18.p04.principal-agent` | 4 | 5 | "Prinzipal-Agenten-Theorie" |
| `information_moralhazard` | `vl20.p02.contract` | 2 | 3 | "Managervertrag als Prinzipal-Agenten Problem" |

Notable correctness fix: on `Mikro2_18.pdf`, the lecture distinguishes
**unvollkommene Information** (hidden action / moral hazard, p3, examples 1–2)
from **unvollständige Information** (hidden characteristics / adverse selection,
p4, "Dieses Problem wird Adverse Selektion genannt"). The adverse-selection
anchor now points to p4, the principal-agent anchor to p5 — matching the source
taxonomy instead of the earlier off-by-one/-two locators.

### Anchors verified correct (no change, spot examples)

`monopol_preissetzung` p1/p2 (Programm + markup `p(y)=(1-1/|ε_xp|)^{-1} C'(y)`),
`preisdiskriminierung` Mikro_2_3 p2/p3 + Mikro_2_4 p2, `gleichgewicht_tausch`
Edgeworth p3, `wohlfahrt_theoreme` p7/p17, `intertemporaler_konsum` p5,
`spieltheorie_dynamisch` p4, `gleichgewicht_produktion` p2/p3 — all matched the
recorded section text against the actual slide.

### Why ids were kept stable

Anchor `id` strings (e.g. `...vl02.p05.monopoly-welfare`) are referenced from
`mikro2/js/data/taskFamilies.js` and `mikro2/js/data/formulaCards.js`. To avoid
cross-file breakage and unnecessary churn, the `pNN` label inside the id is left
as a historical tag; the corrected, student-facing truth is `locator.page` /
`locator.slide` and `section`, which is what the Quellen panel renders. This is
documented in a header comment in `sourceAnchors.js`.

## Notation faithfulness check

Spot-checked notation against slides while verifying pages — no drift introduced:
elasticity `|ε_xp|`, Cournot inverse demand `p = 1 - y1 - y2`, third-degree FOC
`E1'(y1) = E2'(y2) = C'(y1+y2)`, monopoly welfare `DWL_M = (1-c)^2/8`. All present
verbatim in source.

## Validation

- `npm run validate` → `CI validate OK (exam-OS layers + generated audits).`
- `npm run trust:pass1` → `trust-regression-pass-1: all checks passed.` (full
  Playwright run, this machine)
- `sourceAnchors.js` re-imports cleanly; 47 anchor records, counts unchanged
  (only page/section facts corrected), so aggregate readiness/audit numbers are
  unchanged.

## Readiness scores (mikro2, unchanged by this pass)

- Source / pages / anchors / provenance: complete (100% concept coverage)
- Exam bank: **incomplete** — official task source corpus missing/unavailable
- Adaptive mastery: gated on exam bank
- Mikro1-depth: not certified (gated on official task-source review)

## Gaps needing OCR / human review (unchanged, restated honestly)

1. **Official task/exam corpus absent.** The supplied Mikro II materials contain
   lecture slides + literature only. Exam-bank, evidence-based adaptive mastery,
   and Mikro1-depth certification cannot be closed without official
   exercises/solutions/exams. Do not synthesize these as "official."
2. **`externa_pigou` / `externa_institutionen` / `public_goods`** have no direct
   anchor in the official Mikro II corpus. They remain labeled `platform-added-*`.
   Pedagogical decision still pending: keep as platform extras, relocate, or
   remove if outside the official Mikro II line.
3. **Second-degree price discrimination (`Mikro_2_4.pdf`)** menu IC/IR algebra is
   on OCR-heavier slides; deep formula reconstruction still needs a human/OCR
   pass beyond the page-level anchor.
4. **CDF interactives** (`Cournot.cdf`, `Robinson_Crusoe_*.cdf`) are referenced as
   primary refs but not page-anchorable; they remain file-level refs only.

## Files changed

- `mikro2/js/data/sourceAnchors.js` — 13 page-locator corrections + section text
  refinements; review metadata updated to `2026-06-03` /
  `codex-source-verify-pass-2026-06-03`; header comment on id-vs-page policy.
- `docs/audits/2026-06-03-mikro2-source-metadata-readiness-pass.md` — this report.
