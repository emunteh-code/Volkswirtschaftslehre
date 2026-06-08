# Visual design system — maintenance notes

Pass 3 reference for contributors and regeneration workflows.

## Canonical tokens

| Layer | Path | Role |
|-------|------|------|
| **Fleet tokens** | `assets/css/module-tokens.css` | Single source for radius, spacing, surfaces, typography scale, accents, `--content-body-max`, `--reading-measure`, dark/light surfaces |
| **Fleet components** | `assets/css/premium-refinement.css` | Cards, tabs, rails, lesson tiles, buttons, warnings, formula surfaces, landing continuity |
| **Landing** | `assets/css/portal.css` | Platform landing only; may use slightly stronger inset shadows than module shells (intentional) |

Import order on module pages: local `styles.css` (exceptions only) → `premium-refinement.css` (imports `module-tokens.css`).

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

## Landing vs module shadows

- **Landing** (`portal.css` `.lp-tile`): subtle inset/elevation for dashboard discovery on off-white page bg.
- **Module shells:** flat elevated cards (`--card` on `--surface`), minimal shadow — study focus, not marketing cards.
- Intentional difference; do not force pixel parity.

## Regression checks

```bash
npm run validate          # includes portal-shell Intuition guard
npm run trust:pass1       # Playwright fleet UI regression
```

Manual spot-check after CSS/shell edits: landing, module home tiles, theory tab, Aufgaben, Formeln, right rail, `#shortcutHint`, dark mode.
