# Final Visual Closure Pass 8

## Scope

This pass is intentionally limited to the remaining closure items explicitly requested for issues 18-27, plus the graph label/title fidelity rule and the two additional minor closure items.

## Reproduced Issues Before Fixes

### Issue 18 — `Prüfungsfrage` reveal hierarchy still too nested
- Reproduced in shared `Prüfungstransfer` / exam-drill answer surfaces.
- Current structure still stacks:
  - outer exam card
  - revealed answer card
  - boxed internal line blocks
  - nested step/list blocks
- Main files implicated before fixes:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/css/premium-refinement.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/css/styles.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/jahresabschluss/css/styles.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/statistik/css/styles.css`

### Issue 19 — `Geführte Aufgaben` / `Prüfungstransfer` still under-proportioned
- Reproduced in shared task/exam drill card spacing and padding.
- Surfaces still feel slightly compressed and over-scaffolded.
- Main files implicated before fixes:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/css/premium-refinement.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/recht/css/styles.css`

### Issue 20 — formula / technical text readability still too fine
- Reproduced in formula-card labels, variable text, right-rail formula cards, and small magenta technical text.
- Dark mode makes the weakness more obvious.
- Main files implicated before fixes:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/css/premium-refinement.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/recht/css/styles.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/statistik/css/styles.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/assets/css/r-practice.css`

### Issue 21 — actual R control logic still wrong
- Confirmed in shared runtime layer:
  - run button does not switch into a stop state
  - solution toggle does not replace editor contents
  - reset exists, but the solution control is behaviorally wrong
- Main file implicated before fixes:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/js/portal-core/features/rPractice.js`

### Issue 22 — `statistik` content-style drift
- Reproduced as module-local presentation drift in:
  - heavier-than-family formula framing
  - module-local active-tab styling
  - math/list treatment that still reads like a separate style habit
- Main files implicated before fixes:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/statistik/css/styles.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/statistik/js/data/chapters.js`

### Issue 23 — raw notation / code residue in `jahresabschluss`
- Confirmed in accounting formula/schema content, especially transitorische RAP logic.
- Current student-facing content still contains raw LaTeX-like schema strings that should be rendered semantically.
- Main files implicated before fixes:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/jahresabschluss/js/data/chapters.js`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/jahresabschluss/js/ui/rightPanel.js`

### Issue 24 — active tab state too subtle
- Reproduced in shared tab treatment.
- Current active state is polished but too thin/minimal for immediate glance recognition.
- Main file implicated before fixes:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/css/premium-refinement.css`

### Issue 25 — formula cards still too template-driven
- Reproduced most visibly on longer / multi-line / schema-like cards, especially in `jahresabschluss`.
- Current formula-card layout adapts in height, but not enough in internal composition mode.
- Main files implicated before fixes:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/recht/css/styles.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/jahresabschluss/js/data/chapters.js`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/jahresabschluss/js/ui/rightPanel.js`

### Issue 26 — final dark-mode readability tuning still needed
- Reproduced in support surfaces, smaller technical copy, and formula-support cards.
- Main files implicated before fixes:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/css/premium-refinement.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/assets/css/r-practice.css`

### Issue 27 — remaining global blue cast
- Reproduced in shared neutral surfaces:
  - page/surface neutrals
  - support blocks
  - some secondary cards and shells
- Main files implicated before fixes:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/css/portal.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/assets/css/premium-refinement.css`

### Graph label / title fidelity rule
- To be verified on representative graph-bearing modules after the shared visual corrections.
- Focus: confirm no additional naming drift was introduced while touching graph-facing UI surfaces.

## Implementation Approach

- Fix only the listed closure issues.
- Prefer shared CSS/runtime fixes where they directly close the issue.
- Use module-local changes only where the issue is genuinely module-local:
  - `statistik` style drift
  - `jahresabschluss` schema residue
- Verify each touched surface in browser before closure is claimed.

## Files Expected To Change

- Shared CSS/runtime:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/css/premium-refinement.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/assets/css/portal.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/assets/css/r-practice.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/assets/js/portal-core/features/rPractice.js`
- Module-local:
  - `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/statistik/css/styles.css`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/jahresabschluss/js/data/chapters.js`
  - `/Users/enowmunteh/Downloads/Volkswirtschaftsle-main 4/jahresabschluss/js/ui/rightPanel.js`

## Verification Plan

- Browser verification after fixes on:
  - representative `Geführte Aufgaben`
  - representative `Prüfungstransfer`
  - shared R tabs across at least two modules
  - `statistik` theory/formula pages
  - `jahresabschluss` theory/right-rail formula/schema surfaces
  - tab row active state
  - dark mode readability
  - graph-bearing representative pages for label/title fidelity
