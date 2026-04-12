# Warning / Trap System Unification Pass 11

Date: 2026-04-12

## Audit Findings Before Implementation

### Exact placement inconsistencies found

- Many modules still author caution content directly as inline `.warn-box` fragments inside `theorie`, even when the warnings are recurring exam traps that belong in the right rail rather than in the main mechanism flow.
- The right rail currently scrapes every `.warn-box` from theory HTML, so the portal duplicates the same warning in multiple places instead of treating right-rail caution content as a distinct pedagogical home.
- Shared/generated surfaces and module-local right panels do not agree on what counts as a “Häufige Fehler” item; they simply collect all `.warn-box` nodes, regardless of whether the warning is inline, section-level, or task-specific.
- The shared Prüfungstransfer / intuition renderers also reuse theory warnings in secondary surfaces, which makes generic caution content appear in reveals and intuition cards even when it is not task-specific.
- Dedicated recurring-mistake sections already exist in several modules but are still rendered in the main theory column:
  - `mikro1`: repeated `<h3>Fehleranalyse</h3>` blocks
  - `statistik`: repeated `<h3>Fehleranalyse</h3>` blocks
  - `makro2`: `section('Fehleranalyse', ...)`
  - `oekonometrie` and `mathematik`: generated `Typische Fehler` sections from structured `warnings`
- Other modules use module-local `warn()` helpers without an explicit placement contract, so the renderer cannot currently distinguish “keep inline” from “move to right rail”:
  - `makro1`
  - `recht`
  - `finanzwirtschaft`
  - `jahresabschluss`
  - `internationale-wirtschaftsbeziehungen`

### Exact visual inconsistencies found

- Inline `.warn-box` styling is still inherited from legacy module CSS with thick left accent strips, small uppercase labels, and utility-alert proportions.
- Right-rail `.rp-mistake` cards use a different visual language from inline warnings: smaller padding, smaller text, no shared icon/header treatment, and inconsistent tint strength.
- Dark mode warning cards still read more like generic red utility states than like deliberate premium semantic cards.
- The right-rail warning section container is visually consistent with other right-rail blocks, but the warning items inside it still look thinner, lighter, and less editorial than the premium reference direction.

## Placement Logic Decisions For This Pass

- Placement A: recurring “Fehleranalyse / Typische Fehler / Häufige Fehler” sections move to the right rail only.
- Placement B: inline warnings remain only when the authored warning is intentionally attached to the current concept explanation.
- Placement C: task/reveal warnings are allowed only when a task already carries a task-specific `hint`; generic theory warnings should no longer be auto-injected into Prüfungstransfer reveals.
- Introduce an explicit warning placement contract so the renderer can distinguish:
  - dedicated right-rail mistake sections
  - intentionally inline theory warnings
  - task-specific reveal warnings

## Implementation Plan

- Add a shared warning-system utility that:
  - classifies warning blocks by placement
  - strips right-rail warning sections out of theory HTML before render
  - emits normalized warning-card markup for inline, right-rail, and task contexts
- Replace module-local right-panel warning scraping with one shared renderer contract.
- Remove generic theory-warning reuse from shared Prüfungstransfer / intuition surfaces.
- Apply one premium warning-card design language in shared CSS instead of letting each module keep its own alert box treatment.

## Files Expected To Change

- Shared warning parsing / rendering utilities in `assets/js/portal-core/ui/*`
- Shared renderer in `assets/js/portal-core/ui/renderer.js`
- Shared premium warning styling in `assets/css/premium-refinement.css`
- Module-local right-panel adapters across the live modules
- Module data helpers where a placement annotation is needed to distinguish inline from right-rail warnings

## Notes Before Implementation

- This pass is a placement-and-rendering correction, not a broad content rewrite.
- No warning/trap source content should be deleted; the goal is to normalize where and how it appears.

## Exact Renderer / Placement Changes Implemented

### Shared placement contract

- Added [warningSystem.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/warningSystem.js).
- The new shared utility now treats warning content as one of three placements:
  - `rail`: recurring mistake blocks rendered only in the right rail
  - `inline`: theory-timed warning blocks kept in the main column
  - `task`: reveal-level warning cards rendered only from task-specific `hint` content
- Dedicated warning sections are now structurally recognized and removed from the main theory HTML before render instead of being shown inline and scraped again into the right rail.

### Shared right-rail renderer

- Added [rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/rightPanel.js) as the new shared right-panel implementation.
- Module-local right-panel files now delegate to this shared renderer instead of each scraping `.warn-box` independently.
- The shared right rail now renders normalized warning-card DOM rather than raw title/body fragments.

### Shared renderer cleanup

- In [renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/renderer.js):
  - theory tabs now render sanitized theory HTML from the warning-system utility
  - generic theory warnings are no longer auto-injected into intuition detail cards
  - generic theory warnings are no longer auto-generated into Prüfungstransfer “Fehlerkontrolle” reveals
  - task/reveal warning cards are now allowed only through existing task-level `hint` content

### Module-level placement annotations

- The following modules now explicitly mark their authored `warn()` helper output as right-rail material:
  - `recht`
  - `finanzwirtschaft`
  - `jahresabschluss`
  - `internationale-wirtschaftsbeziehungen`
  - `makro2`
- `makro1` now explicitly marks its authored `warn()` helper output as inline, preserving the intended in-flow mechanism warnings for that module.
- Dedicated `Fehleranalyse` / `Typische Fehler` sections in `mikro1`, `statistik`, `oekonometrie`, `mathematik`, `makro2`, and `mikro2` are now moved to the right rail by the shared warning parser.

## Exact Visual System Changes Implemented

- In [premium-refinement.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/css/premium-refinement.css), warning/trap cards now share one premium semantic surface:
  - outer radius `18px`
  - `1px` border
  - `20px 22px` inline/theory padding
  - consistent `warning-card-head` with icon + title
  - `15px / 600` title typography
  - `14px / 1.65` body typography
  - no thick left alert strip
- Right-rail warning items now use a subordinate but matching variant:
  - `14px 16px` padding
  - `14px` radius
  - `12px` stack gap
- Task/reveal warnings now use the same family in a slightly more restrained in-solution variant.
- Dark mode warning cards now use a deeper burgundy semantic surface with controlled red border and brighter title/icon accent instead of flat or neon warning red.
- Shared R pitfalls cards were also aligned to the same warning family so secondary caution surfaces no longer invent a separate alert language.

## Before / After System Description

### Before

- theory HTML contained a mix of inline warning boxes, dedicated warning sections, and module-local helper cards without any placement metadata
- right rails scraped every `.warn-box` they could find, regardless of whether the warning was already inline or belonged elsewhere
- intuition and Prüfungstransfer surfaces sometimes re-used generic theory warnings, creating duplication
- inline and right-rail warnings used different proportions, spacing, tone, and emphasis

### After

- the warning system has one structural placement contract
- dedicated recurring-mistake blocks move to the right rail only
- inline warnings stay only where the content explicitly keeps them inline
- task-level warning cards are now reserved for explicit task hints
- all warning/trap cards share one premium semantic warning family across theory, right rail, reveals, and R pitfalls

## Exact Files Changed

- [assets/css/premium-refinement.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/css/premium-refinement.css)
- [assets/js/generated-portal/main.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/generated-portal/main.js)
- [assets/js/portal-core/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/renderer.js)
- [assets/js/portal-core/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/rightPanel.js)
- [assets/js/portal-core/ui/warningSystem.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/warningSystem.js)
- [mikro1/js/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro1/js/ui/renderer.js)
- [mikro1/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro1/js/ui/rightPanel.js)
- [makro1/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/data/chapters.js)
- [makro1/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/rightPanel.js)
- [makro2/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro2/js/data/chapters.js)
- [makro2/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro2/js/ui/rightPanel.js)
- [mikro2/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro2/js/ui/rightPanel.js)
- [statistik/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/statistik/js/ui/rightPanel.js)
- [oekonometrie/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/oekonometrie/js/ui/rightPanel.js)
- [finanzwirtschaft/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/js/data/chapters.js)
- [finanzwirtschaft/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/js/ui/rightPanel.js)
- [jahresabschluss/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/jahresabschluss/js/data/chapters.js)
- [jahresabschluss/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/jahresabschluss/js/ui/rightPanel.js)
- [recht/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/js/data/chapters.js)
- [recht/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/js/ui/rightPanel.js)
- [internationale-wirtschaftsbeziehungen/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/internationale-wirtschaftsbeziehungen/js/data/chapters.js)
- [internationale-wirtschaftsbeziehungen/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/internationale-wirtschaftsbeziehungen/js/ui/rightPanel.js)
- [mathematik/js/ui/rightPanel.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mathematik/js/ui/rightPanel.js)
- [docs/audits/warning-trap-system-unification-pass-11.md](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/docs/audits/warning-trap-system-unification-pass-11.md)

## Browser Verification Notes

- Verified in browser on `http://127.0.0.1:8766/` with no page errors and only the pre-existing MathJax `[tex]/ams` warning.

### 1. `makro1` inline theory warning

- Page: `makro1 / makro_rahmen / Theorie`
- Result:
  - `2` inline warning cards
  - `0` right-rail warning cards
  - no stray `Fehleranalyse` / `Typische Fehler` heading in the theory column
  - inline warning style metrics:
    - `border-left-width: 0px`
    - `border-radius: 18px`
    - `padding: 20px 22px`

### 2. `oekonometrie` right-rail `Häufige Fehler`

- Page: `oekonometrie / matrix_notation / Theorie`
- Result:
  - `0` inline warning cards
  - `2` right-rail warning cards
  - no `Typische Fehler` block remains in the main theory column
  - right-rail item metrics:
    - `border-left-width: 1px`
    - `border-radius: 14px`
    - `padding: 14px 16px`

### 3. `recht` right-rail `Häufige Fehler`

- Page: `recht / methodik / Theorie`
- Result:
  - `0` inline warning cards
  - `2` right-rail warning cards
  - right-rail header remained consistent: `Häufige Fehler`
  - no warning section heading remained in the theory column

### 4. `mikro1` warning content

- Page: `mikro1 / kmm / Theorie`
- Result:
  - recurring `Fehleranalyse` warnings moved fully into the right rail
  - `0` inline warning cards in the theory body
  - `2` right-rail warning cards
  - no `Fehleranalyse` heading remained in the theory column

### 5. Dark mode premium-reference direction

- Page: `recht / methodik / Theorie` in dark mode
- Result:
  - `light-mode` class absent, so the dark theme was active
  - warning rail background rendered as a deep burgundy surface (`color(srgb 0.145412 0.089098 0.106196)`)
  - warning title/icon tone rendered as bright semantic alert accent (`rgb(255, 180, 166)`)
  - the result reads closer to the premium reference than the earlier pale utility-box treatment

## Honest Note On Remaining Content Cleanup

- The structural task-warning path is now unified, but most chapter-level `aufgaben` currently do not author explicit `hint` fields. That means reveal warnings are now correctly restricted to task-specific content, but the current content corpus does not yet populate that branch heavily.
- Some module warning copy is still text-heavy because this pass did not rewrite academic substance; future content cleanup could shorten a few right-rail bodies without changing the new placement or visual system.
