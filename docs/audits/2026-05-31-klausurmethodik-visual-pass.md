# Klausurmethodik visual pass + platform alignment

**Date:** 2026-05-31  
**Scope:** Fleet-wide UX — Klausurmethodik (Formeln tab), Prüfungsvorbereitung surfaces, shell alignment  
**Validation:** `cd tools/clickthrough && npm run trust:pass1` — **passed**

## Part A — Klausurmethodik redesign

### Problem
Klausurfamilien on the Formeln tab rendered as a dense card grid with provenance badges, meta lines, and unstructured prose — hard to scan under exam-prep time pressure.

### Solution
Restructured `renderTaskFamilyPanel` / `renderTaskFamilyCard` in `assets/js/portal-core/ui/renderer.js`:

| Before | After |
|--------|-------|
| Multi-column card grid | Single-column accordion list |
| Source/official-task badges on every card | Small footnote link → Quellen tab |
| Unlabeled method paragraph | **Ziel** · **Vorgehen** (≤5 steps) · **Typische Klausurfrage** · **Häufiger Fehler** |
| All cards expanded | `<details>` accordion — first family open by default |
| No difficulty affordance | Subtle chip (`mittel` / `schwer`) |
| Silent empty | Friendly one-liner empty state |

### CSS classes added (`assets/css/premium-refinement.css`)

- `.klausurmethodik-panel`, `.klausurmethodik-kicker`, `.klausurmethodik-heading`, `.klausurmethodik-intro`, `.klausurmethodik-empty`
- `.klausurmethodik-accordion-list`, `.klausurmethodik-accordion`, `.klausurmethodik-accordion-head`, `.klausurmethodik-accordion-title`, `.klausurmethodik-accordion-title-wrap`
- `.klausurmethodik-step-num`, `.klausurmethodik-time`, `.klausurmethodik-difficulty`, `.klausurmethodik-difficulty--mittel`, `.klausurmethodik-difficulty--schwer`
- `.klausurmethodik-card-body`, `.klausurmethodik-field`, `.klausurmethodik-field--ziel|vorgehen|frage|fehler`, `.klausurmethodik-label`
- `.klausurmethodik-text`, `.klausurmethodik-steps`, `.klausurmethodik-list`, `.klausurmethodik-list--traps`
- `.klausurmethodik-gap-note`, `.klausurmethodik-footnote`, `.klausurmethodik-source-link`, `.klausurmethodik-exam-transfer`

Legacy hooks retained for trust tests: `.formula-klausurmethodik`, `.task-family-card`, `.task-family-grid`.

### Prüfungsvorbereitung shared system
- **Prüfungstransfer** deck (Aufgaben tab): same `.klausurmethodik-kicker` kicker as Klausurmethodik.
- **Home action row** (Schnelltest, Konzept-Check, Probeklausuren): grid rhythm + 44px touch targets via platform pass.

### Data mapping (no schema change)
| Label | Source field |
|-------|----------------|
| Ziel | `topic` → fallback `title` |
| Vorgehen | `method` split into ≤5 bullets |
| Typische Klausurfrage | `title` |
| Häufiger Fehler | `commonTraps[]` |
| Quellen footnote | `sourceAnchorIds.length` + `window.__openQuellen()` |

Removed from card face (still in Quellen tab): `sourceStatus`, `officialTaskCoverage`, `gradingRubric`, `currentCoverage` badges.

## Part B — Platform alignment pass

Centralized in `premium-refinement.css` (no per-module CSS forks):

| Token / rule | Purpose |
|--------------|---------|
| `--content-shell-max`, `--content-body-max`, `--content-rail-max` | Consistent max-width / centering |
| `--right-panel-width` | Sidebar width parity across modules |
| `--tab-row-pad-x` | Tab bar horizontal rhythm |
| `#tabRow.tab-row` padding + gap | Active indicator alignment |
| `#content .panel.active > …` rail width | Formula cards, section blocks, Quellen, Aufgaben |
| `#content .home-action-row` / `.home-grid` | Module home grid alignment |
| `.lp-shelf-grid` gap | Landing page module tiles |

Mobile: 320px — accordion heads ≥44px; card body padding reduced; difficulty chip wraps under title.

## Files changed

- `assets/js/portal-core/ui/renderer.js` — Klausurmethodik markup + Prüfungstransfer kicker
- `assets/css/premium-refinement.css` — visual system + fleet alignment tokens

## Trust / regression

```
trust-regression-pass-1: all checks passed.
```

Spot checks include:
- `formeln-klausurmethodik` — `.formula-klausurmethodik` + `.task-family-card` present on mikro1/budget and statistik/deskriptiv
- Provenance footer, tab visibility, Aufgaben practice-only rules unchanged

## Modules visually checked

- mikro1 — Formeln / Klausurmethodik (budget concept, task families)
- statistik — Formeln / Klausurmethodik (deskriptiv)
- Trust pass covers additional provenance + tab surfaces fleet-wide

## Remaining gaps

- Browser screenshot not captured in CI; manual spot-check recommended on narrow (320px) viewports.
- `gradingRubric` / portal coverage no longer shown on Klausurmethodik cards — intentional de-clutter; still available in source companion / Quellen layers.
