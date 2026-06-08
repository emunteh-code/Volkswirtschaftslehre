# Visual Design System Pass 3 — source hardening & regression prevention

Polish-only pass: no IA, routes, or visible redesign unless removing source-level debt.

## 1. Codegen hardening

| Item | Detail |
|------|--------|
| **Upstream** | No separate codegen binary. Shell markup lives in per-module `index.html` and inline template in `assets/js/generated-portal/main.js`. |
| **Canonical source** | `tools/exam-os/snippets/portal-tab-row.html` — tab row without Intuition (fused into Theorie). |
| **CI guard** | `tools/exam-os/check-portal-shell.mjs` — fails on `data-tab="intuition"`, orphaned `>Intuition</button>`, or ARIA text fragments. Wired into `npm run validate`. |
| **Fallback** | `renderer.js` `updateTabButtons()` still hides legacy `[data-tab="intuition"]`. |
| **Test fix** | `tools/clickthrough/verification-pass2.mjs` — Intuition tab click replaced with Theorie transfer check. |

## 2. Warning source cleanup (Statistik)

| File | Change |
|------|--------|
| `statistik/js/data/chapters.js` | Removed duplicate `Modellannahmen` warn-box from `varianzanalyse` Mechanismus section; kept single copy in Häufige Fehler. |
| `statistik/js/data/theoryDepthExpansions.js` | Removed redundant `Modellannahmen` warn from Post-hoc expansion block. |
| `warningSystem.js` | `dedupeRailWarnings()` unchanged (defensive). |

Rendered right rail: one Modellannahmen card per concept (verified via dedupe + source dedup).

## 3. Mikro1 graph-panel audit

| Kept (module exceptions) | Removed / neutralized |
|--------------------------|----------------------|
| `.graph-panel-title`, `.graph-info`, `.gi-*` legend rows | Harsh local `.warn-box` red styling (fleet `.learning-trap` wins) |
| `--graph-shell-max`, graph tab `#content[data-tab="graph"]` width | Legacy `.hc-num` / `.hc-cat` home-card footer rules |
| Graph math `mjx-container` sizing under `.graph-panel-title` | Duplicate `--content-body-max: 1240px` (aligned to fleet 980px reading) |

## 4. Width containment

| Surface | Width |
|---------|-------|
| Theory / concept header | `var(--reading-measure)` (78ch mikro1) |
| Default content column | `var(--content-body-max)` — fleet `clamp(900px, 82vw, 980px)` |
| Grafik tab | `var(--graph-shell-max)` up to 1400px |
| `premium-refinement.css` | Removed fleet `:root` override that forced 1240px body max |

## 5. Regression notes

Maintenance doc: `docs/architecture/visual-design-maintenance.md`

Covers: canonical tokens, allowed module CSS exceptions, Intuition tab policy, warning dedupe, landing vs module shadows.

## Validation

```bash
npm run validate
npm run trust:pass1
```

| Check | Result |
|-------|--------|
| `npm run validate` | **OK** (includes portal-shell guard) |
| `npm run trust:pass1` | **OK** — all checks passed |
| `check-portal-shell.mjs` | OK — 14 shell paths scanned |

## Manual inspect checklist

- [ ] Landing — `portal.css` tiles, progress pill
- [ ] Mikro1 graph panel — title, info strip, dark mode contrast
- [ ] Statistik `varianzanalyse` — right rail single Modellannahmen
- [ ] Module `#tabRow` — no Intuition text
- [ ] Lesson header — `Lektion N/M` meta badge
- [ ] `#shortcutHint` utility bar
- [ ] Dark mode — graph info, theory reading measure

## Remaining debt

- Mikro1 `.section-block` card chrome still overlaps fleet theory-recipe cards (low blast radius).
- Sidebar `.progress-bar` (3px) differs from landing `.progress-pill` — intentional sidebar compactness.
- `generated-portal/main.js` shell is hand-edited; sync with snippet on tab changes.

## Files changed

- `tools/exam-os/snippets/portal-tab-row.html` (new)
- `tools/exam-os/check-portal-shell.mjs` (new)
- `tools/exam-os/ci-validate.mjs`
- `docs/architecture/visual-design-maintenance.md` (new)
- `assets/js/generated-portal/main.js`
- `statistik/js/data/chapters.js`
- `statistik/js/data/theoryDepthExpansions.js`
- `mikro1/css/styles.css`
- `assets/css/premium-refinement.css`
- `tools/clickthrough/verification-pass2.mjs`
- `docs/audits/2026-06-03-visual-design-system-pass-3.md`
