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
- Layout exceptions: `--graph-shell-max`, graph panel title/info, graph canvas semantics
- Graph-specific legend/axis colors (`--sys-blue`, nav link graph semantics)
- Legacy sidebar chrome not yet migrated (minimize new rules here)

Do **not** re-declare fleet `--bg`, `--surface`, `--card`, `--r-md`, `.btn` primary hierarchy, `.home-card.module-lesson-card`, `#tabRow`, or `.learning-trap` / `.warn-box` fleet styling.

**Mikro I:** `--graph-shell-max` for Grafik tab; theory/reading uses `--reading-measure` (72–78ch), not the wider graph shell.

## Deprecated Intuition tab

- Intuition content is fused into **Theorie** (Kernidee).
- **Canonical tab row:** `tools/exam-os/snippets/portal-tab-row.html`
- **Do not** add `data-tab="intuition"` to HTML shells or `generated-portal/main.js`.
- **CI guard:** `tools/exam-os/check-portal-shell.mjs` (runs in `npm run validate`).
- **Fallback:** `renderer.js` `updateTabButtons()` hides any legacy `[data-tab="intuition"]` if reintroduced.

## Warning dedupe (right rail)

- Prefer **one** `warn-box` per distinct title in source `theorie` HTML.
- **Defensive merge:** `warningSystem.js` `dedupeRailWarnings()` collapses same-title rail warnings at render time.
- Source cleanup still preferred over relying on dedupe alone.

## CI guards

```bash
npm run validate   # includes check-visual-tokens, check-math-ink, check-css-orphans, portal-shell
npm run trust:pass1
```

- Raw hex/rgb outside `visual-tokens.css`, `visual-landing.css`, `portal-critical.css`, `generated-portal.css`, `common.css` → fail.
- References to deleted `premium-refinement.css` / `module-tokens.css` in runtime HTML/CSS/JS → fail.

## Landing vs module shadows

- **Landing** (`visual-landing.css` `.lp-tile`): subtle inset/elevation for dashboard discovery on off-white page bg.
- **Module shells:** flat elevated cards (`--card` on `--surface`), minimal shadow — study focus, not marketing cards.
- Intentional difference; do not force pixel parity.

Manual spot-check after CSS/shell edits: landing, module home tiles, theory tab, Aufgaben, Formeln, right rail, `#shortcutHint`, dark mode.
