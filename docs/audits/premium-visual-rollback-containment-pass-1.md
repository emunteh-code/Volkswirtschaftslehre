# Premium visual-system rollback and containment — pass 1

Date: 2026-04-10  
Reference baseline: git commit **`365902c`** (`freeze`) — the **release-candidate freeze** described in `docs/audits/release-candidate-freeze-pass-1.md`.

## 1. What caused the regression

**Primary destabiliser:** `assets/css/premium-visual-system.css` (untracked in git; loaded **after** every module shell). It:

- Replaced **global** design tokens on **`:root`** and **`body.light-mode`** (colours, shadows, radii aliases, nav tokens, semantic colours), diverging from the long-standing mikro1 token stack shipped in each module `styles.css`.
- Overrode **layout-adjacent** and **typography-adjacent** behaviour across the app: `#content .section-block > h3`, `.concept-title`, `.concept-tag`, `#topbar`, `#rightPanel`, home tiles, exam/dashboard surfaces, **`@keyframes fadeIn`** (used widely in module shells), panel enter animation, formula/warn/right-rail treatments, landing `body[data-page="landing"]` themes, and the large **graph–text integration** block.
- Depended on module `styles.css` files having **removed** their inlined `:root` / `body.light-mode` blocks (comment-only pointer to the premium sheet). Any load-order or token mismatch then broke **overview, sidebar, cards, and spacing** in ways that are hard to reason about because two layers were fighting for “source of truth.”

**Secondary coupling:** Edits to **`assets/css/portal.css`**, **`assets/css/common.css`**, and **`assets/css/generated-portal.css`** that assumed premium as the token source for landing/auxiliary shells increased the blast radius when premium globals were wrong.

**Net effect:** A **cross-portal polish sweep** without a frozen token contract — exactly the regression risk called out in the release-candidate freeze (“another cross-portal polish sweep without a reproduced blocker”).

## 2. Rollback performed (restore RC visual baseline)

### Restored from `HEAD` (freeze / release-candidate)

All of the following were reset to the **`365902c`** tree with `git checkout HEAD -- <paths>`:

| Path | Restores |
|------|-----------|
| `mikro1/css/styles.css` | Full **`:root`** + **`body.light-mode`** tokens and pre-premium shell |
| `mikro1/index.html` | No premium stylesheet link |
| `mikro2/css/styles.css`, `mikro2/index.html` | Same pattern |
| `oekonometrie/css/styles.css`, `oekonometrie/index.html` | Same |
| `statistik/css/styles.css`, `statistik/index.html` | Same |
| `recht/css/styles.css`, `recht/index.html` | Same |
| `jahresabschluss/css/styles.css`, `jahresabschluss/index.html` | Same |
| `internationale-wirtschaftsbeziehungen/css/styles.css`, `internationale-wirtschaftsbeziehungen/index.html` | Same |
| `makro1/index.html`, `makro2/index.html`, `mathematik/index.html`, `finanzwirtschaft/index.html` | No premium link |
| `index.html` | Landing: **`portal.css` only** + `theme-color` **`#0f1114`** (RC) |
| `assets/css/portal.css` | Full landing tokens + layout (RC) |
| `assets/css/common.css` | RC auxiliary shell |
| `assets/css/generated-portal.css` | RC generated shell (including `generated-graph-canvas` placeholder styling) |
| `r/index.html`, `politisches-system-brd/index.html` | No `premium-visual-system.css` link |

### Removed

- **`assets/css/premium-visual-system.css`** — deleted from the working tree so it cannot be linked accidentally.

### Graph / text integration

The recent **graph–text integration** refinements lived **only** in `premium-visual-system.css`. Per mission priority (**stability over preserving recent polish**), they are **rolled back** with the removal of that sheet. Module `styles.css` again carries the original graph panel rules from the freeze.

## 3. Verification performed

| Check | Method | Result |
|-------|--------|--------|
| No remaining references to `premium-visual-system` in HTML/CSS/JS | ripgrep | **None** |
| `mikro1/index.html` stylesheets | `curl` to local static server | **Only** `css/styles.css` (plus fonts) |
| `index.html` stylesheets | `curl` | **Only** `./assets/css/portal.css` (plus fonts) |
| Module tokens present in `mikro1/css/styles.css` | `curl` / read | **`:root` + `body.light-mode`** blocks present |

**Browser note:** Automated pixel/visual regression was not run in CI; the rollback is **byte-identical to `365902c`** for all restored paths. A short manual open of **landing**, **mikro1 home + sidebar + Theorie card**, and **one secondary module** is sufficient to confirm perceived stability.

## 4. Explicit baseline statement

For every file restored via `git checkout HEAD -- …` above, the repository now matches the **stable release-candidate visual baseline** from **`365902c`**. The portal is **not** applying the withdrawn premium global layer; design tokens and shell layout again follow the **module-local + portal-local** model that was frozen for release.

## 5. Containment policy — future “premium” work (narrow pass only)

Any revived **`premium-visual-system.css`** (or similarly named sheet) must be **additive and scoped**, not a second global theme:

**Allowed (optional, one narrow pass at a time):**

- **Cards:** e.g. `#content .section-block` hover border/shadow only — **no** changing `--card` / `--bg` globally.
- **Tabs:** e.g. `#tabRow .tab-btn` / `.active` only.
- **Sidebar active states:** e.g. `#sidebar .nav-item.active` / hover only.
- **Hover / focus / motion:** transitions and `:focus-visible` **without** redefining `@keyframes fadeIn` globally unless the module shell is updated in the same change.
- **Dark-mode tokens:** only if implemented as **optional** overrides behind a clear scope (e.g. data-attribute), not wholesale `:root` replacement.

**Disallowed without a dedicated, reviewed token migration:**

- Removing **``:root` / `body.light-mode`** from module `styles.css` in favour of a shared sheet.
- Global **`body.light-mode` / `:root`** replacement from a second stylesheet.
- Broad **`#content` typography** changes (concept headers, section `h3` system) from the shared sheet.
- Re-defining **landing** tokens in a sheet loaded **without** restoring full **`portal.css`** self-sufficiency.

## 6. Superseded audit drafts removed

The following untracked audit files described the withdrawn premium and graph-integration layers and were **deleted** to avoid contradicting the restored baseline:

- `docs/audits/premium-visual-system-implementation-pass-1.md`
- `docs/audits/graph-text-integration-refinement-pass-1.md`

## Source status

**platform / engineering only** — no academic or `source-materials/` changes.
