# Mikro2 Dashboard Source Status Correction Pass 17 - 2026-05-27

## Finding

The Mikro2 dashboard still says the official Mikro-II source corpus is missing from the repository. That statement is outdated: the official source corpus is present under `source-materials/Mikroökonomik II/`.

## Risk

The dashboard is a high-visibility launch/status surface. A stale source warning can confuse students and contradict the source companion, provenance layer, and generated readiness reports.

The correct status is more nuanced:

- official Mikro II corpus is present
- the portal is partially source-backed
- three current market-failure concepts remain supplemental without direct anchors
- official exercise sheets, solution keys, Probeklausuren, and old exams are still missing

## Implementation Target

- Replace the stale “corpus missing” dashboard copy.
- Show the current source status in a compact dashboard section.
- Link students to the source companion for inspection.
- Keep the dashboard honest: no full source-parity or A+-readiness claim.

## Implemented

- `mikro2/js/features/dashboard.js` now derives source counts from `PROVENANCE_BY_CONCEPT`.
- Dashboard copy now states that the official Mikro-II corpus is present, while reconstruction remains partial.
- Dashboard shows counters for Seitenanker, Quellenreferenzen, Supplemental concepts, and Offizielle Aufgaben.
- Dashboard links directly to the Quellenbrowser.
- `mikro2/css/styles.css` now styles the source-status counter grid.

## Validation

- `node --check mikro2/js/features/dashboard.js`
- Node provenance check returned `15` anchored concepts, `15` referenced concepts, and the three supplemental concepts: `externa_pigou`, `externa_institutionen`, `public_goods`.
- `git diff --check`
- Browser smoke test at `http://127.0.0.1:4188/mikro2/index.html?qa=1`: `window.__showDashboard()` rendered the new status, no longer contained the stale corpus-missing sentence, showed `15/18`, `Supplemental 3`, `Offizielle Aufgaben 0`, and included `Quellenbrowser öffnen`.

## Changed Files

- `mikro2/js/features/dashboard.js`
- `mikro2/css/styles.css`
- `docs/audits/mikro2-dashboard-source-status-correction-pass-17-2026-05-27.md`

## Definition of Done for This Pass

- Dashboard no longer says the official Mikro-II source corpus is missing.
- Dashboard explicitly mentions partial source-backed status and missing official task archive.
- Dashboard includes source companion access.
- The portal remains deployable.

## Remaining Gaps

- Mikro2 remains blocked on complete source reconstruction, official task archive ingestion, and official task-source evidence.
