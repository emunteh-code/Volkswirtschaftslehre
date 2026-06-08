# Navigation & Sidebar Cleanup Pass — 2026-06-03

Focused pass on learner navigation chrome: remove workflow hint strip, redesign sidebar as curriculum map, replace ambiguous status dots, harmonize typography. Layout tokens and hash routing preserved.

## 1. Remove “Empfohlener Ablauf” bar

| Item | Change |
|------|--------|
| `assets/js/portal-core/app.js` | Removed `ensureTabWorkflowHint`, `setTabWorkflowVisible`, DOM injection, and visibility toggles in `navigate()` / `DOMContentLoaded`. |
| `assets/js/portal-core/pedagogy/learnerPedagogy.js` | Removed unused `renderTabWorkflowHint()` export. |
| `assets/css/premium-refinement.css` | Removed `.tab-workflow-hint` / `__label` rules. |

**Before:** Tab row followed by a learner-facing workflow strip (“Theorie lesen → …”).
**After:** Clean gap below tab row when a lesson is open; no relocated hint.

## 2. Sidebar as learning navigation

| Item | Change |
|------|--------|
| `assets/js/portal-core/ui/chapterNavigation.js` | Curriculum row markup: status marker, local lesson number, title, aside slot; section headers with lesson count. |
| `assets/js/generated-portal/main.js` | Synced `createNavigation()` with the same structure and status logic. |
| `assets/css/premium-refinement.css` | Section grouping, indentation, flex alignment, typography weights. |
| `mikro1/css/styles.css` | Removed legacy sidebar `.mastery` / `.nav-due-dot` rules (fleet CSS owns status). |

**Before:** Flat list rows with global numbering (generated portal) or bare title spans; percentage mastery pills and blue SRS dots.
**After:** Grouped curriculum blocks (Grundlagen, Theorie, …) with compact counts; rows read as lesson map with semantic status markers.

## 3. Status system (replaces blue dots)

Wired to `loadProgress()` (+ SRS due badge when applicable):

| State | Marker |
|-------|--------|
| Not started | Muted hollow ring |
| In progress | Partial arc (accent on top/right border) |
| Completed | Green checkmark |
| Current lesson | Filled accent dot with soft halo (`.active`) |

SRS due: text badge `Wdh.` (`badge--meta`, amber) instead of ambiguous blue circle.

Legacy `.mastery` percentage pills and `.nav-due-dot` removed from sidebar updates.

## 4. Typography & interaction harmonization

- Sidebar lesson numbers: tabular-nums, micro size, muted → accent when active.
- Section labels: uppercase micro, 700 weight, count in muted tabular text.
- Nav rows: `font-weight: 500` default, `600` when active; consistent `min-height` and flex centering.
- Removed sidebar entries from generic `.badge--status` mastery styling (no pill clash with markers).

## Validation

```bash
npm run validate
npm run trust:pass1
```

| Check | Result |
|-------|--------|
| `npm run validate` | **OK** — portal-shell, math-literals, right-rail, learner-ui-literals |
| `npm run trust:pass1` | **OK** — all checks passed |

## Manual inspect targets

- [ ] **Statistik** — section groups, status markers on mixed progress
- [ ] **Mikro I** — Grundlagen / Theorie blocks, active lesson dot
- [ ] **Makro** — sidebar search + filtered rows
- [ ] **Ökonometrie** — long sidebar scroll, section counts
- [ ] Tab row — no workflow strip below tabs when lesson open
- [ ] Hash routing — direct `#concept/tab` still selects correct nav row

## Files changed

- `assets/js/portal-core/app.js`
- `assets/js/portal-core/pedagogy/learnerPedagogy.js`
- `assets/js/portal-core/ui/chapterNavigation.js`
- `assets/js/generated-portal/main.js`
- `assets/css/premium-refinement.css`
- `mikro1/css/styles.css`
- `docs/audits/2026-06-03-navigation-sidebar-cleanup-pass.md`

## Remaining gaps

- Home/module tiles still use separate `lp-tile-status` chips (unchanged; out of sidebar scope).
- Sidebar footer progress bar (3px) still differs from landing progress pill (intentional compactness from pass 3).
