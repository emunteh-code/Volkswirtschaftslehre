# Grafik tab space cleanup — pass 1

Targeted layout pass: chart as primary object, compact controls, less vertical nesting. No route or token renames; no product redesign.

## Primary inspect target

Statistik → Bivariate Analyse → **Grafik** tab (`bivariat`).

## Before

| Issue | Detail |
|-------|--------|
| Vertical stretch | Tall card padding, 23:14 canvas with high min-height, fragmented chrome above plot |
| Control strip | Per-slider mini-cards (label stacked above slider above value) |
| Explanation split | `graph-see-line`, `graph-control-hint`, footer `Regler` line, and pedagogy footer duplicated guidance |
| Legend | Full-width row above canvas consumed vertical space |
| Width drift | `#content[data-tab="graph"]` hard-coded in `premium-refinement.css`; `--graph-shell-max` only in mikro1 `:root` |

## After

| Change | Detail |
|--------|--------|
| Structure | Title → `graph-context` (Was du sehen sollst + Regler) → compact control strip → `graph-stage` (overlay legend + canvas) → live `graph_info` → slim pedagogy footer |
| Controls | Single toolbar; each row = label \| slider \| live value (no inner card boxes) |
| Canvas | Wider 5:3 aspect, lower min-height, 1100×660 intrinsic size; legend floats top-right inside stage |
| Width | Fleet token `--graph-shell-max: min(100%, clamp(1120px, 90vw, 1480px))` in `module-tokens.css`; graph tab uses `var(--graph-shell-max)` |
| Legacy chrome | `graph-control-hint` and footer `graph-pedagogy-slider` hidden/suppressed to avoid duplicate Regler copy |

## Files changed

| File | Why |
|------|-----|
| `assets/css/module-tokens.css` | Fleet `--graph-shell-max` |
| `assets/css/premium-refinement.css` | Graph pass layout, control strip, stage/legend, graph-tab width |
| `mikro1/css/styles.css` | Base graph shell, horizontal controls, aligned `--graph-shell-max`, responsive ctrl rows |
| `assets/js/portal-core/ui/graphClarity.js` | `renderGraphContextBlock`, label → „Was du sehen sollst“ |
| `assets/js/portal-core/ui/graphShell.js` | Flat shell markup, `graph-stage`, wider canvas |
| `assets/js/portal-core/ui/graphPedagogy.js` | Idempotent chrome without duplicate hints; slimmer footer |

## Width audit

| Surface | Rule |
|---------|------|
| Theory / reading | `--reading-measure` / `--content-body-max` (unchanged) |
| Default `#content` | `--content-shell-max` |
| Grafik tab | `--graph-shell-max` via `#content[data-tab="graph"]` and `#content[data-tab="graph"] > *` (mikro1) |
| Graph container | 100% of graph shell (no inner 980px island) |

## Validation

```bash
npm run validate
npm run trust:pass1
```

Record results in PR / follow-up if CI differs from local.

| Check | Result |
|-------|--------|
| `npm run validate` | **OK** — portal-shell, math-literals, right-rail, learner-ui-literals |
| `npm run trust:pass1` | **OK** — all checks passed (~306s) |

## Manual inspect — Statistik Bivariate Grafik

- [ ] Grafik tab uses full graph shell width (wider than Theorie column)
- [ ] Title + two-line context (sehen / Regler) sit above controls without extra cards
- [ ] Korrelation and Niveau sliders: label left, track center, value right
- [ ] Scatter plot dominates viewport; legend sits unobtrusively on plot (desktop) or above canvas (≤900px)
- [ ] Moving `r` updates plot and `#graph_info` without layout jump
- [ ] Vorhersage footer still visible; no second Regler paragraph
- [ ] Hash `#bivariat/graph` still loads Grafik tab

## Remaining risks

- Legacy module graph panels without `renderGraphShell` still get pedagogy injection via `ensureGraphPedagogyChrome` (may add `graph-context` + legend only).
- Makro `graph-container--macro-focus` shells unchanged (intentional exception).
- Generated portal bundle (`assets/js/generated-portal/main.js`) not regenerated in this pass; statistik uses module `graphPanel.js` + shared shell.
