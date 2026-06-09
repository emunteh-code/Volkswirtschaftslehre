# Generated-portal outlier decision

**Date:** 2026-06-09  
**Context:** Post Phase 2 visual layer merge (#33) and Phase 3 cleanup (#34).

## Outlier modules

| Module | Shell | Stylesheets |
|--------|-------|-------------|
| `r/` | `generated-portal/main.js` | `portal.css` (shim → `visual-landing.css`) + `generated-portal.css` |
| `politisches-system-brd/` | `generated-portal/main.js` | same |

Fleet modules (statistik, mikro1, …) load `mikro1/css/styles.css` → `assets/css/visual/*`.

## Decision: **Option C — token alignment, deferred fleet migration**

1. **Keep** generated-portal shells on their alternate bootstrap (`generated-portal/main.js`) for this release cycle.
2. **Keep** `portal.css` as a one-line shim importing `visual/visual-landing.css` so outliers share landing rules without duplicating files.
3. **Do not** reintroduce `premium-refinement.css` or `module-tokens.css`.
4. **Next milestone (separate PR):** evaluate full fleet migration (Option A) only if `r/` and `politisches-system-brd/` remain in the product roadmap with Grafik/R tabs requiring parity guards.

## Rationale

- Generated modules use a different tab/renderer contract and purple `common.css` theme; forcing visual-shell parity risks regressions without dedicated screenshot coverage.
- Landing shim alignment removes duplicate `portal.css` maintenance on the fleet index while preserving outlier entry points.
- CI guards (`check-css-orphans`, `check-visual-tokens`) apply to fleet visual files; `generated-portal.css` and `common.css` remain explicit allowlist outliers.

## Validation for outliers (manual until dedicated capture)

- Smoke `r/index.html` and `politisches-system-brd/index.html` after CSS cleanup merges.
- No requirement to recapture generated-portal screenshots in Phase 3 unless outlier HTML/styles change.
