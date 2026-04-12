# Revealed-step math rendering parity — pass 65

## Problem (student-visible)

In Musterlösung steps, `step.eq` is rendered via `renderTaskMathBlock` → `normalizeDisplayContent` → `parseLegacyString` → `renderSemanticBlock`. Lines **with** TeX (e.g. `\bar{x}`, `\frac`) were classified as **`mode: "math"`** and got the usual MathJax treatment (magenta math styling). Lines that were **plain ASCII** but still real mathematics—especially chains with spaced `+`, `=`, `/`—matched **`parsePlainConnectorSplitSchema`** / **`PLAIN_CONNECTOR_PATTERN`** and were emitted as **`mode: "schema"`** (semantic connector UI: plain styled text). That produced **two visual languages in one solution**.

Canonical repro (Statistik, deskriptive Statistik / Varianz): `statistik/js/data/chapters.js` — steps with `eq` such as `(2-4)^2 + (4-4)^2 + (6-4)^2 = 4 + 0 + 4 = 8` and `8 / (3-1) = 4` next to `\bar{x} = (2+4+6)/3 = 4`.

## Root cause (exact failure path)

1. `assets/js/portal-core/ui/renderer.js` — `renderTaskMathBlock` calls `renderSemanticBlock(value, { variant: "task" })`.
2. `assets/js/portal-core/ui/semanticContent.js` — `normalizeDisplayContent` string path calls `parseLegacyString`.
3. For undelimited strings **without** `\` that still contain spaced connectors (`+`, `=`, `/`, …), **`parsePlainConnectorSplitSchema(normalizedText)`** (and failing that, **`PLAIN_CONNECTOR_PATTERN`** + `splitPlainSchemaParts`) returned **`schemaSequence`** → **`mode: "schema"`** instead of math.

Strings containing `^` (ASCII exponent) or digit-heavy division like `8 / (3-1)` were particularly affected because they are clearly arithmetic but had no LaTeX backslash.

## Step classes that were wrongly plain (schema)

- **Arithmetic chains** with spaced `=` / `+` / `-` / `/`, e.g. squared deviations summed to a total.
- **Compact divisions** written as `digit / (expression) = …` without `\frac`.
- **Pure numeric equalities** such as `2 + 3 = 5` or single-letter `n = 10` (still math, not economic “bridge” schema).

These were **not** malformed content; the **classifier** treated them as semantic connector chains.

## Fix (shared)

**File:** `assets/js/portal-core/ui/semanticContent.js`

- Added **`looksLikeStepArithmeticMath(decoded)`** before `normalizePlainSchemaText` / connector-schema parsing in **`parseLegacyString`**.
- Heuristic (conservative, no `\` in string — TeX lines keep existing early paths):
  - **Exponent** `^` → math (covers squared-deviation rows).
  - **Digit division** `\d / (` or `\d / \d` → math.
  - **Single-letter (Unicode letter) = numeric** → math (e.g. `n = 10`, Greek one-letter labels).
  - **After stripping optional leading `\p{L} =`**, if the remainder is only digits / operators / punctuation used in arithmetic and contains `=` → math (e.g. `r = 10 / 20 = 0.5`, `x = 2 + 3`).

**Intentionally left as schema** (examples): `p + q = 1`, `MC = MR`, `Y = C + I + G` — letter-heavy “economic notation” chains without the numeric/arithmetic signals above.

## Fix (module-local)

**File:** `mikro1/js/ui/renderer.js`

- **`renderGuidedTasks`** previously injected **`step.eq` raw** inside `<div class="math-block">`, bypassing `renderSemanticBlock` / display-mode logic entirely.
- Replaced with **`renderTaskMathBlock(step.eq)`** so Mikro I guided solutions use the **same pipeline** as the portal-core renderer (including pass-65 classification).

## Data changes

None required for the primary Statistik repro; the shared classifier fix addresses undelimited ASCII math at parse time.

## Browser verification (recommended)

Automated checks: `getDisplayMode` on sample strings (Node) confirms `(2-4)^2 + … = 8`, `8 / (3-1) = 4`, `2 + 3 = 5`, `n = 10` → **`math`**; `p + q = 1` → **`schema`**.

Manual browser checks (user list):

1. Statistik — Varianz / deskriptive task: screenshot case; arithmetic rows match `\bar{x}` row styling.
2. Statistik — covariance / correlation task with similar `step.eq` chains.
3. Longer deskriptive derivation with multiple `eq` lines.
4. Ökonometrie — calculation-style `step.eq` without backslashes.
5. Mathematik — derivation steps (portal uses core renderer where applicable; `mathematik/.../practiceConfig.js` still uses a local `renderMathBlock` that wraps raw TeX in `$$` — separate from schema split; note below).
6. Result row with multiple symbols (usually `result` + `renderTeachingProse` / `$...$`; unchanged by this pass).

## Unavoidable / follow-up gaps

- **`eq` fields that mix German prose and math in one string** (e.g. `Mittelwert berechnen: \bar{x} = …`) are still a **content modeling** issue: one string cannot be split into prose + math without structured fields or a dedicated splitter. Pass 65 does not add a prose/math splitter for `eq`; it fixes **pure arithmetic misclassified as schema**.
- **`mathematik/js/data/practiceConfig.js`** — `renderMathBlock` escapes HTML and wraps in `$$`; MathJax integration depends on how that module typesets `math-block`. Not changed in pass 65.
- Very long “word equations” that are actually math but use only letters and `=` may remain schema until content adds TeX or numeric structure.

## Files changed

- `assets/js/portal-core/ui/semanticContent.js` — `looksLikeStepArithmeticMath`, `parseLegacyString` hook.
- `mikro1/js/ui/renderer.js` — guided-task `step.eq` → `renderTaskMathBlock`.
- `docs/audits/revealed-step-math-rendering-parity-pass-65.md` — this audit.
