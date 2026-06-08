# Homepage Lesson Card Cleanup — 2026-06-03

## Mandate

Redesign module homepage lesson/concept cards so they read as polished navigation tiles, not database records. Remove raw provenance chrome, duplicate category labels, and debug-style position metadata from overview cards.

## Before

Each concept card in the category grid showed:

1. Top line: `{Category} · Stelle N von M` (database-style position string)
2. Title
3. Large outlined **QUELLE** / **Referenz** / **Plattform** badge (`hc-source-badge` / `platform-chrome-badge` family)
4. Footer duplicate: `{chapter.cat}` again (same as section header)

Recent strip and continue card repeated category without lesson position. SRS review cards used `hc-num` / `hc-cat` debug rows.

## After

### Card hierarchy (category grid)

1. **Title** — `module-lesson-card__title` / `hc-title`
2. **Optional subtitle** — short `chapter.motivation` when ≤96 chars (`module-lesson-card__subtitle`)
3. **Metadata row** — `Lektion N/M · {ContentType}` (`module-lesson-card__meta`)
   - Category omitted inside section groups (section header already names the category)
   - Content type derived: `Anwendung` (R block), `Interaktiv` (graph concept), else `Theorie`
4. **Action** — `Öffnen →` or `Weiterlernen →` based on local progress / last visited (`module-lesson-card__action`)

Whole card remains clickable with existing hover (border accent, shadow, slight lift via `premium-refinement.css` Phase 6).

### Other surfaces

| Surface | Change |
|---|---|
| Continue card | Title + meta (`Category · Lektion N/M · Type`) + `Weiterlernen →`; removed duplicate `hcc-cat` |
| Recent mini cards | Title + meta with category (no section header) |
| SRS review (`app.js`) | Same tile structure; action `Wiederholen →` |

### Removed from overview

- `renderHomeSourceBadge()` and all `hc-source-badge` on module home grids
- `hc-num` position strings (`Stelle N von M`)
- Footer `hc-cat` duplicate inside category sections

Provenance badges remain on **in-lesson** concept headers (`buildConceptPillHtml`) and Quellen tab — unchanged.

## Files changed

| File | What |
|---|---|
| `assets/js/portal-core/ui/renderer.js` | New `buildHomeLessonCardHtml` + helpers; rewired `renderHome()` cards |
| `assets/js/portal-core/app.js` | SRS review cards aligned to tile structure |
| `mikro1/css/styles.css` | Base `.module-lesson-card*` layout, equal-height grid |
| `assets/css/premium-refinement.css` | Premium overrides for lesson tiles (Phase 6 extension) |
| `assets/js/portal-core/ui/semanticMathSurfaces.js` | Exclude action label from math decoration |

## CSS class structure

```
.home-card.module-lesson-card          — primary grid tile (clickable)
  .module-lesson-card__body
    .module-lesson-card__title         — h3, shares .hc-title typography
    .module-lesson-card__subtitle      — optional motivation line
    .module-lesson-card__meta          — Lektion N/M · ContentType
  .module-lesson-card__action          — Öffnen → / Weiterlernen →

.home-mini-card.module-lesson-card--mini   — recent strip variant
.home-continue-card.module-lesson-card--continue — continue strip variant
```

Grid: `#content .home-grid` uses `align-items: stretch`; cards use `height: 100%` + `min-height` for row alignment.

## Validation

```
npm run validate
→ CI validate OK (exam-OS layers + generated audits).
```

## Remaining gaps / risks

- **Prüfungsrelevant** action label from spec examples is not wired — no fleet-wide chapter flag exists yet; only `Öffnen →` / `Weiterlernen →` / `Wiederholen →`.
- Subtitle only appears for short motivations; abbreviated `chapter.short` nav codes are intentionally not shown.
- In-lesson concept header still uses `Stelle N von M` tag — out of scope (overview-only pass).
