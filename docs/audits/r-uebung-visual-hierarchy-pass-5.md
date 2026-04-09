## R-Übung Visual Hierarchy Pass 5

### Reproduced issue

Representative R-Übung pages still feel too flat and tool-like:

- the orientation card, workspace cards, and bottom cards use surfaces that are too close to the page background
- multiple pale blue treatments compete without creating clear hierarchy
- editor, output, mini-task, and pitfalls surfaces do not separate strongly enough by role
- the first scan does not clearly answer: orientation first, then action, then evidence, then retention

### Root cause

Shared styling drift in:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/css/r-practice.css`

The current dedicated R-tab styles rely on several lightly tinted blue/grey surfaces that are individually clean but collectively too similar.

### High-value fix for this pass

Use the smallest shared visual correction that materially improves the hierarchy:

1. make the orientation card read as a distinct top-level briefing surface, not as another pale panel
2. move inner orientation blocks to clearer neutral cards
3. separate editor/action and output/evidence cards with stronger contrast in background and border logic
4. give the bottom row cards cleaner role separation without adding decorative clutter
5. reduce blue-on-blue drift and reserve accent color mainly for labels, borders, and the decisive cue line

### Files expected to change

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/css/r-practice.css`

### Files changed

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/css/r-practice.css`

### Exact visual corrections made

1. Orientation hierarchy

- the top `R-Übung` briefing card was changed from another pale blue panel into a clearer elevated top-level surface
- `Lernziel`, `Mathe ↔ R-Übersetzung`, and `Arbeitsauftrag` are now each housed in their own neutral inner cards instead of blending into one flat blue field
- the `Kernzeile` block remains the main accented cue, but it now sits inside a calmer card family instead of competing with multiple other blue backgrounds

2. Workspace separation

- editor and output cards now have visibly different neutral roles:
  - editor = brighter action surface
  - output = slightly cooler evidence surface
- box shadows and borders were strengthened so the cards separate from the page background
- the runtime note was visually subordinated so it no longer competes with the pedagogy

3. Bottom-row separation

- `Mini-Task` remains the primary retention card on a clean white surface
- `Häufige Fehler` now uses a light warning-tinted card instead of another almost-identical neutral/blue block
- solution helper cards inside the mini-task were shifted toward cleaner neutral surfaces with less blue wash

4. Color discipline

- reduced blue-on-blue surfaces across the tab
- reserved accent color mainly for small kickers, the decisive `Kernzeile`, and a few cue edges instead of filling whole cards with blue-tinted backgrounds

### Verification

Verified live in browser on:

- `mathematik` → `funktionen_gleichungen`
- `mathematik` → `summen_logik_beweise`
- `statistik` → `regression_diagnostik_prognose`

Artifacts captured:

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/r-visual-pass5-funktionen.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/r-visual-pass5-summen.png`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/.qa/r-visual-pass5-statistik.png`

Visible improvement achieved:

- orientation now reads as the first scan target instead of blending into the page
- editor, output, mini-task, and pitfalls no longer share the same visual weight
- the card family is more professional and easier to scan because the main surfaces are neutral and role-driven
- the previous blue-on-blue drift is materially reduced

### Remaining limitation

- this pass closes the hierarchy and surface-color problem, but it does not change the underlying pedagogical content density of any individual R block
- if a specific R page still feels weak after this pass, the likely next issue is concept content, not shared visual structure

### Checks run

- `node --check /Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/assets/js/portal-core/features/rPractice.js`
- live browser verification via Playwright on the three representative pages above

### Verification plan

Check the live R-Übung surface on at least:

- `mathematik` → `funktionen_gleichungen`
- `mathematik` → `summen_logik_beweise`
- one non-math R page inheriting the shared surface

Success means the page reads in this order without visual search burden:

1. orientation
2. core line / task
3. code action
4. output evidence
5. retention blocks
