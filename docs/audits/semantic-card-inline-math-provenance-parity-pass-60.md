# Semantic card, inline math, and provenance parity — Pass 60

**Date:** 2026-04-12  
**Scope:** Project-wide, student-visible, trust-critical surfaces.

---

## Failure classes addressed

### A — Heavy grey semantic / concept cards

- **Symptom:** Grouped teaching blocks (e.g. Prüfungsschema grids using `.info-card`, and shared `.semantic-schema` / `.semantic-reference` frames) read as dull grey slabs (`--surface2`-heavy fills, tinted chip fills).
- **Cause:** Module defaults (e.g. `background: var(--surface2)` on `.info-card`) plus Pass 4.1 semantic containers still mixing noticeable `surface2` / math-soft into large areas.
- **Fix:** **Shared CSS only** in `premium-refinement.css`: border-led, near-transparent or card-native surfaces; chips use a very light card mix instead of a second “widget” slab.

### B — Inline / step math leaking as raw LaTeX-like text

- **Symptom:** Undelimited LaTeX such as `\hat p(\text{bestanden}\mid \text{Vorkurs}) = \frac{78}{100} = 0{,}78` appeared as broken prose (e.g. `\frac78100`, stripped `\mid`) in revealed solution steps.
- **Cause:** `parseLegacyString` ran `normalizePlainSchemaText` before schema heuristics; brace stripping mangled `\frac{78}{100}`. Connector-split schema logic then treated `=`-split fragments as **semantic schema terms** and rendered them with `escapeHtml` → **no MathJax**, visible TeX debris.
- **Fix:** **Shared logic** in `semanticContent.js`:
  1. **Early math routing:** `isUndelimitedStructuredTexMath()` returns math mode for common real-math constructs (`\frac`, `\hat`, `\mid` in text-math context, `\mathbb`, etc.) before connector/schema normalization.
  2. **Connector-split guard:** `parsePlainConnectorSplitSchema` and `parseMixedArrowChain` return `null` if any non-connector segment still contains a TeX command (`\foo`).
  3. **`shouldCoerceUndelimitedTexMathBlock`:** Removed the blanket rejection of any string containing `\`; German-decimal `{,}` lines that include TeX (e.g. with `\frac`) can coerce to a display math block when comparison markers apply.

### C — Provenance strip without a consistent info mark

- **Symptom:** Default footer showed `Basis: …` without the intended faint **ⓘ** trust cue; expandable mode put **ⓘ** only on the toggle button.
- **Cause:** `buildConceptProvenanceStripHtml` omitted a leading mark for static footers; expandable used ⓘ as the button label.
- **Fix:** **Shared UI** in `sourceProvenanceUi.js` + `premium-refinement.css`: every footer includes `<span class="source-provenance-mark">ⓘ</span>` before the line; expandable footers use a **▾** glyph on the button (with `aria-label`). Styling aligns the row and mutes the icon.

---

## Files changed

| File | Shared / local | Change |
|------|------------------|--------|
| `assets/css/premium-refinement.css` | **Shared** | Lighter `.semantic-schema` / `.semantic-reference` / chip fills; Pass 60 `#content .info-card` overrides; provenance mark + inner alignment; expand button glyph sizing. |
| `assets/js/portal-core/ui/semanticContent.js` | **Shared** | TeX math early detection; connector-split TeX guard; `{,}` coercion with backslashes allowed. |
| `assets/js/portal-core/ui/sourceProvenanceUi.js` | **Shared** | ⓘ mark on all strips; expandable toggle uses ▾ + `aria-label`. |

**Module-local:** None — all teaching modules already load `premium-refinement.css` and use `createRenderer` + `getConceptProvenance` where enabled.

---

## Before / after (behaviour)

| Area | Before | After |
|------|--------|--------|
| Prüfungsschema / info-grid | Strong `surface2` card fill | Mostly `card`, border-led |
| Semantic schema containers | Noticeable grey mix | Transparent + border |
| Semantic chips | Grey-tinted pills | Very light fill, calmer border |
| Step `eq` with `\frac` + `\text` | Schema path → escaped garbage | Math path → MathJax |
| `shouldCoerce…` + `{,}` + `\frac` | Blocked by `\` rule | Can coerce to display math |
| Provenance static | Text only | ⓘ + text |
| Provenance expandable | ⓘ button only | ⓘ + line + ▾ toggle |

---

## Browser verification notes

Automated browser run was not executed in this pass. Recommended manual checks:

1. **Semantic cards:** Mathematik (or any module) concept with **Prüfungsschema** / `info-grid`; second module with the same pattern.
2. **Inline / step math:** Statistik — Kreuztabelle / bedingte Anteile task — revealed steps with `\hat p(\text{bestanden}\mid \text{Vorkurs}) = \frac{78}{100} = 0{,}78`; one other Aufgabe with step `eq`; one Theorie paragraph with `$...$`; one graph interpretation line if present.
3. **Provenance:** Any source-backed concept — Theorie, Grafik, Aufgaben, R-tab — confirm ⓘ + `Basis: …` and, where multiple layers differ, ▾ opens compact rows without bullet dumps.

---

## Remaining outliers (honest)

- **Undelimited TeX** that uses only unusual commands not listed in `isUndelimitedStructuredTexMath` may still fall through to legacy parsing; the **connector-split TeX guard** still prevents the worst escaped-leak class.
- **Module `styles.css`** may define other card classes outside `#content .info-card` / semantic family; those were not part of this pass.
- **`assets/js/generated-portal/main.js`** is not updated here; modules that load **only** that bundle (if any) would need a separate bundle rebuild to pick up `semanticContent` changes. Course modules use `type="module"` entry points that import `portal-core` directly.

---

## Completion criteria (Pass 60)

- [x] Semantic mini-cards / schema surfaces materially lightened at the shared layer.
- [x] Statistik-style step `eq` no longer misclassified as schema → raw TeX leakage eliminated for that failure class.
- [x] Provenance shows faint ⓘ on the default line project-wide (via shared strip + CSS).
- [x] Expandable provenance remains concise; no default bullet audit prose.
