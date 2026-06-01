# Landing cleanup pass — 2026-05-31

## Mandate

Simplify platform landing (`index.html`, `assets/js/common.js`, `assets/js/modules.js`, `assets/css/portal.css`) after fleet quality parity: remove exam-stress CTAs and beta signaling; keep hero, module shelves, resume, and honest PDF boundary copy in about/footer tone.

## Removed

| Surface | What |
|--------|------|
| `index.html` | **Was möchtest du tun?** activity chooser strip (`#activity-chooser`) |
| `index.html` | **Klausur in 14 Tagen?** block (`#exam-cram-plan`) |
| `index.html` | ILIAS CTA placeholder (`#officialMaterialsLandingCta`) |
| `common.js` | `examCramActions` wiring, `officialMaterialsLandingCta` / `lp-ilias-btn` builder |
| `common.js` | Tier badges on landing tiles (`lp-tier-badge`, release-tier tooltips) |
| `portal.css` | `.lp-activity-*`, `.lp-exam-cram-*`, `.lp-ilias-btn`, `.lp-tier-*` (landing-only; Quellen panel keeps `.official-materials-ilias-btn`) |

## Kept / updated

- **Hero** with module-aware **Fortsetzen →** / **Modul starten →** (`updateHeroShelf`, `pickInitialLandingModule`).
- **Two shelves:** `Prüfungsbereit — empfohlener Einstieg` (Schnellstart, 5 modules) + **Weitere Module** — no quality tier split on tiles.
- **Shelf notes:** shortened; simulation policy one line; no prominent ILIAS button on landing.
- **Über dieses Portal:** ILIAS/PDF boundary in prose only (subtle, not a CTA).
- **`modules.js`:** all live modules `releaseTier: "core"`; mikro2 `sourceStatusNote` shortened.

## Source files touched

- `index.html`
- `assets/js/common.js`
- `assets/js/modules.js`
- `assets/css/portal.css`
- `docs/audits/2026-05-31-landing-cleanup-pass.md`

## Validation

- `npm run trust:pass1` (tools/clickthrough) — module/regression suite; landing no longer asserts removed DOM ids.

## Risks / gaps

- `RELEASE_TIER_*` labels remain in `modules.js` for possible non-landing use; all registry entries are `core`.
- `examPrepNote` still renders on tiles when set (short A− one-liners); remove in a follow-up if shelves should be title+summary only.
