# Visual design system — maintenance notes

Post Phase 2/3 reference for contributors.

## Canonical tokens

| Layer | Path | Role |
|-------|------|------|
| **Fleet tokens** | `assets/css/visual/visual-tokens.css` | Single source for radius, spacing, surfaces, typography, accents, `--math-ink`, layout max-widths |
| **Fleet components** | `assets/css/visual/visual-*.css` | Shell, primitives, learning, labs, responsive, dark |
| **Landing** | `assets/css/visual/visual-landing.css` | Platform landing (`body[data-page="landing"]`); token literals allowed here |
| **Landing shim** | `assets/css/portal.css` | `@import` shim for generated-portal outliers only |

Import order on module pages: local `styles.css` → `mikro1/css/styles.css` shim → `assets/css/visual/*` (+ `r-practice.css` via `visual-labs.css`).

**Deleted (do not restore):** `premium-refinement.css`, `module-tokens.css`.

## Generated-portal outliers

See `docs/audits/2026-06-09-generated-portal-outlier-decision.md` for `r/` and `politisches-system-brd/`.

## Allowed module CSS exceptions

Module `*/css/styles.css` may define **only**:

- Module fonts (if not using fleet stack)
- Layout exceptions: `--graph-shell-max`, graph panel title/info
- Graph-specific legend/axis colors
- Legacy sidebar chrome not yet migrated (minimize new rules)

Do **not** re-declare fleet `--bg`, `--surface`, `.btn`, `#tabRow`, or warning surfaces.

## CI guards

```bash
npm run validate   # includes check-visual-tokens, check-math-ink, check-css-orphans
npm run trust:pass1
```

- Raw hex/rgb outside `visual-tokens.css`, `visual-landing.css`, `portal-critical.css`, `generated-portal.css`, `common.css` → fail.
- References to deleted `premium-refinement.css` / `module-tokens.css` in runtime HTML/CSS/JS → fail.

## Landing vs module shadows

Landing may use stronger inset shadows than module shells — intentional; do not force pixel parity.
