# Visual Consistency Audit Pass — 2026-06-03

Final polish-only pass across portal surfaces after homepage lesson-card cleanup and design-system token pass. No IA, content, or functionality changes.

Builds on:
- `docs/audits/2026-06-03-visual-design-system-pass.md`
- `docs/audits/2026-06-03-homepage-lesson-card-cleanup.md`

## Badge families consolidated

Three semantic families — all other pill/badge patterns alias into these:

| Family | Class | Role | Aliases |
|--------|-------|------|---------|
| **Meta** | `.badge--meta` | Position, lesson count, category metadata | `.concept-tag`, `.module-lesson-card__meta`, `.hcc-label`, `.lp-tile-status:not(.started)` |
| **Status** | `.badge--status` | Source, platform, mastery, started state | `.platform-chrome-badge`, `.practice-platform-badge`, `.home-action-sim-badge`, `#sidebar .nav-badge`, `.nav-item .mastery`, `.lp-tile-status.started` |
| **Action** | `.badge--action` | Card CTAs (Öffnen →, Weiterlernen →, Wiederholen →) | `.module-lesson-card__action` |

**Before:** 8+ independent badge/pill patterns (hc-source-badge, platform-chrome-badge, home-action-sim-badge, hc-num, nav mastery dots, lp-tile-status mono font, concept-tag accent pill).

**After:** 3 families with token-backed colors in `module-tokens.css`; legacy class names retained as aliases for fleet compatibility.

## Per-surface before / after

### 1. Landing module cards (`common.js`, `portal.css`)
- **Before:** Mono-font status labels; 2px-radius progress bars; mixed hover shadow.
- **After:** `.badge--status` on `lp-tile-status`; `.progress-pill` track/fill with `--r-pill` radius; landing tokens include `--progress-track-h`.

### 2. Module home lesson/concept tiles (`renderHome`)
- **Before:** (prior pass) Clean tile hierarchy without provenance chrome.
- **After:** Meta + action rows wired to `.badge--meta` / `.badge--action`; grid gap uses `--space-sm`.

### 3. Continue strip (`home-continue-card`)
- **Before:** Mixed label styles; duplicate category possible.
- **After:** `hcc-label` → `.badge--meta`; meta line + action use badge families.

### 4. Recent mini cards
- **Before:** Title + raw meta text.
- **After:** `.badge--meta` on meta row; consistent with grid tiles.

### 5. SRS review cards (`app.js`)
- **Before:** Category-only meta without badge class.
- **After:** Same tile structure with `.badge--meta` + `.badge--action` (Wiederholen →).

### 6. In-lesson concept headers
- **Before:** Accent-tinted concept-tag pill competing with source badge row.
- **After:** `.badge--meta` on concept-tag (muted surface chip); source pills → `.badge--status`.

### 7. Top tabs (`tab-btn`, index.html)
- **Before:** Orphaned Intuition markup leaked as visible text (fixed in design-system pass).
- **After:** 40px height, 8px radius, integrated tab row — unchanged, verified.

### 8. Left sidebar lesson items
- **Before:** Noisy hover; num styling varied.
- **After:** Calmer hover (surface2 tint); muted nums; active accent-soft fill + 3px bar (design-system pass retained).

### 9. Right companion rail
- **Before:** Red-tinted mistake cards.
- **After:** Elevated `--surface-elevated` sections; amber left-accent warnings; green connection boxes (design-system pass retained).

### 10. Alert/warning boxes
- **Before:** Mixed red/amber; learning-trap used harsh borders.
- **After:** Soft amber `--warning-surface` + 3px left accent; learning-trap aligned to amber family.

### 11. Formula/math surfaces
- **Before:** Variable ink inconsistent.
- **After:** `--math-ink` on formula cards + right-rail `.rp-formula` (design-system pass retained).

### 12. Progress indicators
- **Before:** dash-bar 6px/3px radius, lp-tile 2px radius, portal progress-meter unstyled.
- **After:** Unified `.progress-pill` / `.progress-pill__fill` — 4px height, pill radius, accent fill.

### 13. Buttons + text actions
- **Before:** "Lösung anzeigen" full primary blue.
- **After:** Soft-primary secondary on problem/exam cards; primary reserved for exam/R-run/empty-state.

### 14. Dark mode variants
- **Before:** Near-black inversion on some surfaces.
- **After:** Explicit `--bg #0f1218`, `--surface-elevated #222832`; badge/progress tokens have light+dark overrides.

## Manual checklist (spot-check)

| Surface | Check |
|---------|-------|
| Landing tiles | Status badge pill + progress pill radius on hover |
| Module home grid | No QUELLE badges; meta = Lektion N/M · Type |
| Continue card | Weitermachen label + Weiterlernen → action |
| SRS review | Category meta + Wiederholen → |
| Concept header | Muted position chip; source badge in status row |
| Tabs | No leaked markup; equal height |
| Sidebar | Active left bar; calm hover |
| Right rail | Amber mistakes, green connections |
| Lösung anzeigen | Secondary (not full blue) |
| Dark mode | Elevated rail, not pure black |

## Files changed

| File | Change |
|------|--------|
| `assets/css/module-tokens.css` | Badge + progress pill tokens |
| `assets/css/premium-refinement.css` | Badge families, progress pill, sidebar, grid rhythm (audit block) |
| `assets/css/portal.css` | Landing progress pill radius + tokens |
| `assets/js/portal-core/ui/renderer.js` | Badge class wiring on headers, tiles, action cards |
| `assets/js/portal-core/app.js` | SRS card badge classes |
| `assets/js/common.js` | Landing tile status + progress pill classes |
| `mikro1/index.html`, `oekonometrie/index.html`, `makro2/index.html` | Tab markup repair |
| `mikro1/css/styles.css` | Lesson card base layout |
| `assets/js/portal-core/ui/semanticMathSurfaces.js` | Exclude action label from math decoration |

## Validation

| Command | Result |
|---------|--------|
| `npm run validate` | **OK** — CI validate (exam-OS layers + generated audits) |
| `npm run trust:pass1` | **OK** — trust-regression-pass-1: all checks passed |

## Remaining visual debt

- Module `styles.css` files still duplicate base tokens; fleet override in `premium-refinement.css` wins at runtime.
- `generated-portal/main.js` still ships a live Intuition tab button (hidden by renderer).
- `result-badge` remains a distinct result-surface (not folded into badge families — intentional).
- Dashboard weak-area bars (`dash-bar-bg` 6px) keep taller track for data viz; aliased to progress fill color only.
- Module-specific graph panel border nesting may still differ from fleet card system.
- Light-mode warning amber on long theory cards may need projector contrast spot-check.
