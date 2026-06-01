# Formeln tab — visual unification (one family, four roles)

**Date:** 2026-06-01  
**Scope:** Fleet-wide Formeln & Klausurmethodik tab — `premium-refinement.css`, `renderer.js`  
**Validation:** `cd tools/clickthrough && npm run trust:pass1` — **passed**  
**Spot-check:** mikro1 `budget` → Formeln tab (browser)

## Problem

After Pass 59–60, **Herleitungen**, **Einsatzgrenzen**, and **Klausurmethodik** read as three separate design systems:

- Herleitung blocks: math-ink tint fill, 4px accent, “Ableitung” pill (duplicate of section title)
- Einsatzgrenzen: full amber gradient panels, saturated trap icon, warning-colored body text
- Klausurmethodik: accent-tinted outer shell; accordions on different radius/shadow than formula cards

Users preferred the neutral **formula-card** grid as the baseline.

## Design direction

**One family, four roles** — shared `.formula-support-card` shell aligned to `.formula-card`:

| Role | Differentiation |
|------|-----------------|
| **Formeln** (baseline) | Neutral `var(--card)`; accent only on `.f-eq` inner well |
| **Herleitungen** | Same shell + `border-left: 3px` at 40% `--module-accent`; numbered steps; no tint fill |
| **Einsatzgrenzen** | Same shell + subtle amber `border-left`; trap groups only in light warn-box (Theorie-style) |
| **Klausurmethodik** | Transparent section wrapper; accordions use formula-card chrome; fields use `.formula-support-field` |

**Removed:** rainbow backgrounds, block-level trap icons, duplicate “Ableitung” kicker, limits-section H3 warning tint, magenta Klausurmethodik panel.

**Kept:** Numbered section rails (Pass 60), non-collapsible formula grid, accordion Klausurmethodik, field labels (Ziel / Vorgehen / …).

## Design tokens used

| Token | Use |
|-------|-----|
| `var(--card)` | Support-card and accordion surface |
| `color-mix(… var(--border) 90%, var(--text) 10%)` | Support-card border (matches formula-card) |
| `18px` border-radius | Support-card + Klausurmethodik accordion |
| `20px` padding | Support-card (matches formula-card Pass 60) |
| `var(--module-accent, var(--accent))` at **40%** | Herleitung left accent |
| `var(--sys-orange, #d97706)` at **48–52%** | Einsatzgrenzen left accent + trap group border |
| `var(--warning-border)` / `var(--warning-surface)` at **10–42%** mix | Trap / Fehler micro-boxes only |
| `.formula-support-field-label` | Uppercase muted labels (11px / 0.08em) — shared with Klausurmethodik |
| `13.5px` / `1.58` line-height | Support field body, steps, lists |

## Toned down

| Before | After |
|--------|--------|
| Herleitung: tinted `math-ink` background, 4px accent, “Ableitung” pill | Neutral card; 3px module accent; title only (f-label style) |
| Einsatzgrenzen: gradient warn panel + 30px icon tile | Neutral card; amber left rail; icon only on fails/mistakes group title (CSS mask, 72% opacity) |
| Limits section H3 in `--warning-title` | Same typography as other numbered sections |
| Klausurmethodik panel: `surface` + 8% accent fill | Transparent wrapper |
| Accordion: 12px radius, accent open glow | 18px radius, hairline shadow (formula-card parity) |
| Trap list text in saturated orange | Body text; warn surface only on **Häufiger Fehler** field + einsatz fails/mistakes groups |

## CSS classes

| Class | Role |
|-------|------|
| `.formula-support-card` | Shared shell (herleitung + einsatz blocks) |
| `.formula-support-field` / `-label` / `-body` | Klausurmethodik (and future) labeled fields |
| `.formula-herleitung-block` | Role modifier: left accent |
| `.formula-einsatzgrenzen-block` | Role modifier: amber left accent |
| `.formula-einsatzgrenzen-group--fails` / `--mistakes` | Light warn-box bullets |
| `.klausurmethodik-field--fehler` | Trap field warn-box |

**Removed from markup:** `.formula-herleitung-kicker`, `.formula-einsatzgrenzen-icon`, `.formula-einsatzgrenzen-head-text`

Legacy hooks retained: `.klausurmethodik-*`, `.formula-klausurmethodik`, `.task-family-card`.

## Files changed

- `assets/css/premium-refinement.css` — Pass 60 support-card family
- `assets/js/portal-core/ui/renderer.js` — simplified herleitung/einsatz heads; `formula-support-field` on Klausurmethodik
- `assets/js/portal-core/ui/semanticMathSurfaces.js` — skip zone includes `.formula-support-card`

## Trust / regression

```bash
cd tools/clickthrough && npm run trust:pass1
# trust-regression-pass-1: all checks passed.
```

Includes `formeln-klausurmethodik` on mikro1/budget and statistik/deskriptiv.

## Risks / gaps

- Modules without `formulaCardsByConcept` unchanged (grid-only or Klausurmethodik-only).
- Very long derivation stacks may still need content trimming per concept (not a layout issue).
- Exam-transfer panel (Aufgaben tab) still uses standalone `.klausurmethodik-kicker` — intentional, out of Formeln tab scope.
