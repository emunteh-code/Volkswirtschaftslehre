# Visual Shell + Navigation Parity Pass 1

## Scope

- Benchmark reference: `mikro1`
- Focus of this pass:
  - shell/layout parity
  - navigation parity
  - color/token parity
  - small related visual cleanup only when clearly tied to shell drift

## Modules checked

- `mikro1` (reference)
- `statistik`
- `mathematik`
- `finanzwirtschaft`
- `mikro2`

## Reproduction notes

- Compared visible home and theory surfaces against `mikro1` using browser screenshots:
  - `.qa/mikro1-shell-home-current.png`
  - `.qa/statistik-shell-home-current.png`
  - `.qa/mathematik-shell-home-current.png`
  - `.qa/finanzwirtschaft-shell-home-current.png`
  - `.qa/visual-shell-pass1/mikro2-home.png`
- Confirmed representative shell/token state with live browser probes on:
  - `statistik/index.html?qa=1`
  - `mathematik/index.html?qa=1`
  - `finanzwirtschaft/index.html?qa=1`
  - `mikro2/index.html?qa=1`

## Exact issues reproduced before fixes

### 1. `statistik` visibly drifted from `mikro1`

- Visible symptom:
  - olive/green + cyan accent system instead of the blue benchmark shell
  - darker black-heavy shell palette instead of the final `mikro1` token family
  - module looked like a different product family despite similar layout structure
- Root cause:
  - module-local CSS/token drift in `statistik/css/styles.css`
- Classification:
  - module-local CSS override

### 2. `mathematik` sidebar header still carried extra legacy chrome

- Visible symptom:
  - extra sidebar explanatory tagline under the university line
  - left rail header felt denser and less quiet than `mikro1`
- Root cause:
  - module-local legacy markup in `mathematik/index.html`
- Classification:
  - module-local legacy markup

### 3. `mikro2` shell required verification, but no blocker was confirmed

- Visible symptom checked:
  - sidebar/header/topbar/tab row against `mikro1`
- Result before fixes:
  - no high-value shell/navigation mismatch reproduced in the checked surfaces
- Classification:
  - no blocker confirmed in this pass

### 4. `finanzwirtschaft` shell required verification, but no blocker was confirmed

- Visible symptom checked:
  - home shell, tab row, right rail family, overall color family
- Result before fixes:
  - no shell/navigation blocker reproduced in the checked surfaces
- Classification:
  - no blocker confirmed in this pass

## Planned fixes

- Align `statistik` tokens with the frozen `mikro1` shell token family.
- Remove the extra sidebar tagline from `mathematik`.
- Add missing `--math-ink` token where that shell family is otherwise already aligned but incomplete.

## Exact files changed

- `statistik/css/styles.css`
- `mathematik/index.html`
- `mathematik/css/styles.css`
- `mikro2/css/styles.css`

## Exact fixes made

### `statistik`

- Replaced the module-local olive/cyan accent family with the frozen `mikro1` blue token family.
- Added missing `--math-ink` token for shell-level math color parity.
- Replaced the older active-sidebar treatment with the `mikro1` nav-active token logic:
  - active background
  - active border
  - active text
  - active number color
  - mastery badge tint parity

### `mathematik`

- Removed the extra sidebar tagline so the left-rail header matches the quieter `mikro1` benchmark shell.
- Added missing `--math-ink` token.
- Aligned active-sidebar and mastery badge treatment to the same `mikro1` nav token logic.

### `mikro2`

- Added missing `--math-ink` token for shell-level math color parity.
- Normalized the remaining light-mode active-sidebar and partial-mastery tint so the module does not fall back to the older green/cyan nav treatment on concept pages.

## Verification after fixes

### Browser/UI checks

- Home-shell sweep across:
  - `mikro1`
  - `makro1`
  - `makro2`
  - `statistik`
  - `finanzwirtschaft`
  - `jahresabschluss`
  - `recht`
  - `internationale-wirtschaftsbeziehungen`
  - `mathematik`
  - `oekonometrie`
  - `mikro2`
- Focused screenshot verification:
  - `statistik` home + theory
  - `mathematik` home
  - `mikro2` home + theory
  - `finanzwirtschaft` home comparison
  - `mikro1` home/theory as visual benchmark

### Visible outcome summary

- All checked module homes now expose the same benchmark shell signals as `mikro1`:
  - same blue `--accent`
  - same blue `--accent2`
  - same magenta `--math-ink`
  - same search placeholder
  - same footer tool trio
  - same default tab family
- `statistik` no longer reads as a different green product family on its visible shell surfaces.
- `mathematik` no longer carries the extra sidebar explanatory block that made its left rail visibly denser than `mikro1`.
- `mikro2` did not reproduce a major shell/layout mismatch in this pass, but its remaining nav-color fallback was normalized.

## Exact issues closed

- `statistik` shell/color mismatch vs `mikro1`
- `mathematik` sidebar-header drift vs `mikro1`
- missing shell-level `--math-ink` token in:
  - `statistik`
  - `mathematik`
  - `mikro2`
- older active-sidebar color fallback still present on sampled concept pages in:
  - `statistik`
  - `mathematik`
  - `mikro2`

## Exact issues partially improved

- `mathematik` still feels below `mikro1` overall, but after this pass the remaining difference is primarily density/granularity rather than shell/header drift.
- `statistik` shell parity is now much closer to `mikro1`, but some deeper non-shell component rules still retain older hard-coded tint values in parts of the task/exam surface.

## Exact issues still open and why

### 1. `mathematik` is still below `mikro1` in visible density

- Why still open:
  - the module currently presents only `8` visible concepts on the home surface
  - that is a content/granularity problem, not a shell/navigation problem
- Why not fixed here:
  - this pass was limited to shell/navigation/color parity
  - resolving this requires a dedicated density/granularity follow-up, not a safe visual tweak

### 2. Some deeper component-level tint rules still diverge from `mikro1`

- Affected module:
  - `statistik`
  - potentially `mathematik` where older internal accent remnants still exist in non-shell surfaces
- Why still open:
  - several older hard-coded accent backgrounds remain in deeper task/exam/helper components
  - they did not block the sampled shell/navigation surfaces after this pass, but they are not fully normalized
- Why not fully fixed here:
  - replacing every old component tint safely is larger than a shell/navigation pass

## Exact modules still below `mikro1` benchmark after this pass

- `mathematik`
  - below benchmark mainly in content density / concept granularity, not shell parity
- `statistik`
  - near shell parity, but still below full benchmark cleanliness in some deeper component tint rules
