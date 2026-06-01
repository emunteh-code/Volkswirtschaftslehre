# Learning visual distinction pass

**Date:** 2026-05-31  
**Scope:** Fleet-wide typography and callout system (Theorie, Aufgaben, Klausurmethodik/Formeln)  
**Validation:** `npm run trust:pass1` — statistik `deskriptiv`, recht `willenserklaerung` in regression matrix

## Problems addressed

| Surface | Before | After |
|---------|--------|-------|
| **Aufgaben** | Weak gray intro columns; duplicate Plattform-Übung badges on every card; only raw numbers visually loud | Contrasted intro cards; single panel-level badge; `.task-data` + `.learning-key` auto-highlight |
| **Klausurmethodik** | ALL-CAPS field labels; heavy orange trap boxes | Sentence-case labels aligned with `.formula-support-field`; trap fields use `.learning-trap` left-border system |
| **Theorie** | Full-width salmon `.warn-box` cards; block math breaking flow after `<p>`; flat gray body | `.learning-trap` inset callouts; short statutory refs inline; key terms accented |

## Design tokens (`premium-refinement.css`)

| Token | Role |
|-------|------|
| `--learning-highlight` | Key terms (`--module-accent` fallback) |
| `--learning-data` | Dataset values in tasks |
| `--learning-trap-border` / `--learning-trap-surface` | Exam trap callouts |
| `--learning-compare-border` / `--learning-compare-surface` | Compare callouts (`.learning-compare`) |
| `--text-muted` | Secondary copy at higher contrast (WCAG-friendly on cards) |

## CSS classes

| Class | Use |
|-------|-----|
| `.learning-term` / `.learning-key` | First-use / glossary terms in theory and tasks |
| `.task-data` | Numeric dataset values in Aufgaben prose |
| `.learning-trap` | Unified warn/trap callout (theory inset + Klausurmethodik Fehler) |
| `.learning-definition` | Legal/stat definitions (`.theory-recipe-section--definitionen` body) |
| `.learning-compare` | Compare/contrast callout (blue tint, ready for content) |

## JS changes

- `assets/js/portal-core/utils/learningHighlights.js` — `extractConceptHighlightTerms()`, `highlightPracticeText()`
- `assets/js/portal-core/ui/renderer.js` — practice highlighting; removed per-card Plattform-Übung badge
- `assets/js/portal-core/ui/warningSystem.js` — adds `.learning-trap` on theory inset warn boxes

## Source concepts verified

- `statistik` / `deskriptiv` — task data `2, 4, 6`; theory variance block math stays display block
- `recht` / `willenserklaerung` — `§ 130 BGB` math-block inline; definition section styled

## Trust

```bash
npm run trust:pass1
```

## Remaining gaps

- `.learning-compare` is styled but not yet auto-tagged from HTML; add class in content or a future parser pass for “vs.” subsections.
- Glossary term extraction is heuristic (formeln labels, theory `<strong>`, subsection titles); very long intuition cores are filtered by length.
