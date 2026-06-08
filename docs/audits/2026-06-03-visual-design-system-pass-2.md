# Visual Design System Pass 2 — 2026-06-03

Polish-only continuation: token deduplication, Intuition tab codegen cleanup, in-lesson header labels, right-rail dedup, grid rhythm, math surfaces, utility bar, landing continuity. No IA, routes, or functionality changes.

Builds on:
- `docs/audits/2026-06-03-visual-design-system-pass.md`
- `docs/audits/2026-06-03-homepage-lesson-card-cleanup.md`
- `docs/audits/2026-06-03-visual-consistency-audit-pass.md`

---

## Task summaries

### 1. Token deduplication

**What:** Removed fleet-level token duplication from `mikro1/css/styles.css` (base shell imported by all modules). Fleet tokens now live only in `assets/css/module-tokens.css` (via `premium-refinement.css`).

**Module exceptions retained:** fonts, `--content-body-max` (wider mikro1 theory column), `--graph-shell-max`, `--surface3`, nav/link/graph semantics (`--accent2`, `--link-*`, `--sys-*`).

**Also:** Removed duplicate motion `:root` block from `premium-refinement.css` (already in `module-tokens.css`).

| File | Change |
|------|--------|
| `mikro1/css/styles.css` | Fleet tokens → comment + module-only exceptions |
| `assets/css/module-tokens.css` | Canonical token layer (pass 1, extended) |
| `assets/css/premium-refinement.css` | Removed duplicate motion tokens |

### 2. Deprecated Intuition tab cleanup

**What:** Removed live Intuition button from generated-portal shell. Renderer defensive hide (`updateTabButtons`) retained.

**Verified:** All module `index.html` `#tabRow` blocks — no orphaned ARIA fragments (pass 1 fix held).

| File | Change |
|------|--------|
| `assets/js/generated-portal/main.js` | Removed `<button data-tab="intuition">` |
| `mikro1/index.html`, `oekonometrie/index.html`, `makro2/index.html` | Orphan fragment removal (pass 1) |

### 3. In-lesson concept header polish

**What:** Replaced learner-facing `Stelle N von M` → `Lektion N/M` (category sections) or `Abschnitt N` (fallback). Sidebar aria-labels aligned.

**Style:** `.concept-tag` uses quiet `.badge--meta` family (matches `module-lesson-card__meta`). Source status pills remain on header where pedagogically useful; Quellen tab untouched.

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/renderer.js` | `formatLessonPositionLabel`, header tag copy |
| `assets/js/portal-core/ui/chapterNavigation.js` | Aria-label `Lektion N/M` |
| `assets/css/premium-refinement.css` | `.badge--meta` / `.concept-tag` quiet metadata |

### 4. Right rail content differentiation

**What:** Deduplicate rail warnings by normalized title at render time (e.g. duplicate „Modellannahmen“ from theory depth + chapter body). Distinct bodies appended as addendum paragraph.

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/warningSystem.js` | `dedupeRailWarnings()` before rail emit |
| `assets/css/premium-refinement.css` | `.rp-mistake-body-addendum` styling |

### 5. Homepage grid rhythm

**What:** Wide desktop (≥901px) caps concept sections at 2–3 columns with card-count-aware layouts (1 → single column, 2 → two-up, 3/6 → three-up). Mobile single-column preserved.

| File | Change |
|------|--------|
| `assets/css/premium-refinement.css` | Pass 2 grid `@media` + `:has()` rules |
| `assets/js/portal-core/ui/renderer.js` | Lesson tile markup (pass 1 / consistency pass) |

### 6. Formula / math surface audit

**What:** Unified `FormulaBox` / `.formula-card` / `.rp-formula` / `.math-block` radius, border, padding via shared tokens. Purple (`--math-ink`) for math only. Nested inner borders stripped inside `.f-eq`.

| File | Change |
|------|--------|
| `assets/css/premium-refinement.css` | Pass 2 math surface block (light + dark) |

### 7. Bottom utility bar polish

**What:** `#shortcutHint` → subtle utility strip: muted background, lighter border, keycap badges with inset shadow — not debug-toolbar weight.

| File | Change |
|------|--------|
| `assets/css/premium-refinement.css` | Pass 2 `#shortcutHint` / `.sc-key` rules |

### 8. Landing-to-module continuity

**What:** Landing `lp-tile` aligned with module shell cards: `--r-md` radius, `--card` surface, calmer hover (no scale bounce), unified progress pill width, badge status class on tile footer.

| File | Change |
|------|--------|
| `assets/css/portal.css` | Tile hover, radius, progress pill |
| `assets/js/common.js` | `.progress-pill`, `.badge--status` on landing tiles |

---

## Validation

| Command | Result |
|---------|--------|
| `npm run validate` | **OK** — CI validate (exam-OS layers + generated audits) |
| `npm run trust:pass1` | **OK** — trust-regression-pass-1: all checks passed |

## Manual light/dark checklist

Spot-check after deploy:

| Surface | Light | Dark |
|---------|-------|------|
| Landing (`index.html`) | Tile border/hover calm; progress pill visible | Elevated card on `#0f1218`-aligned bg |
| Module home | 2–3 col grid; meta badges muted | Same rhythm; no sparse 4-col gaps |
| Theory tab | Concept tag `Lektion N/M`; nested sections left-accent | Warning amber soft, not alarm red |
| Aufgaben | Secondary „Lösung anzeigen“ buttons | Same |
| Formeln | Single border on formula cards; purple math only | No nested magenta frames |
| Right rail | Deduped mistakes; green connection boxes | Elevated `#222832` sections |
| Utility bar | Muted keycaps at bottom | Low-contrast, hides in focus mode |

## Remaining visual debt

- `mikro1/css/styles.css` still carries graph-panel and legacy component rules that partially overlap premium-refinement — acceptable module exceptions for now.
- `generated-portal/main.js` is hand-maintained; no separate codegen template — Intuition removal is direct edit.
- Statistik chapter source still contains duplicate `Modellannahmen` warn-box nodes; render-time dedup handles display but source cleanup deferred.
- Landing `--shadow-*` inset style differs slightly from module flat shadows — intentional calm landing feel.
- Per-module `--content-body-max` (mikro1 wider) vs fleet default may need documented exception table in architecture docs.
