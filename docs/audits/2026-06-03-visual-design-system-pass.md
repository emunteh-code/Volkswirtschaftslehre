# Visual Design System Pass — 2026-06-03

Polish-only pass: fixed tab markup leak, established shared tokens, standardized component surfaces. No IA, content, or functionality changes.

## Tab bug — root cause & fix

**Root cause:** Three module `index.html` files had a **truncated Intuition tab button**. The opening `<button class="tab-btn" data-tab="intuition"` tag was removed (intuition is now fused into Theorie), but orphaned attribute fragments remained as raw text nodes inside `#tabRow`:

```html
<!-- broken fragment after Formeln button -->
role="tab" aria-selected="false" tabindex="0">Intuition</button>
```

Browsers rendered this as visible tab-bar text: `role="tab" aria-selected="false" tabindex="0">Intuition`.

**Fix:** Removed the orphaned lines entirely. `assets/js/portal-core/ui/renderer.js` already hides any `[data-tab="intuition"]` buttons via `updateTabButtons()`.

| File | Change |
|------|--------|
| `mikro1/index.html` | Removed orphaned Intuition fragment |
| `oekonometrie/index.html` | Removed orphaned Intuition fragment |
| `makro2/index.html` | Removed orphaned Intuition fragment |

## Files changed

| File | Purpose |
|------|---------|
| `mikro1/index.html` | Tab markup repair |
| `oekonometrie/index.html` | Tab markup repair |
| `makro2/index.html` | Tab markup repair |
| `assets/css/module-tokens.css` | Canonical design token layer |
| `assets/css/premium-refinement.css` | Component aliases + fleet polish (append block) |
| `assets/css/portal.css` | Landing radius token alignment |

## Token table

| Token | Value (dark / light) | Use |
|-------|----------------------|-----|
| `--bg` | `#0f1218` / `#f6f6f4` | Page background (soft off-white, deep neutral) |
| `--surface` | `#181c24` / `#f0f1ee` | Sidebar, tab row base |
| `--surface-elevated` | `#222832` / `#ffffff` | Right rail sections, elevated dark |
| `--card` | `#161a22` / `#ffffff` | Content cards |
| `--border` | `#2a3140` / `#d8dcd4` | Subtle neutral borders |
| `--accent` | `#3b82f6` / `#2563eb` | Academic blue primary |
| `--accent-soft` | `rgba(59,130,246,0.1)` / `rgba(37,99,235,0.08)` | Soft-primary buttons |
| `--semantic-green` | `#34d399` / `#10b981` | Connections, prerequisites |
| `--semantic-amber` | `#f59e0b` / `#d97706` | Warnings (soft, not harsh red) |
| `--math-ink` | `#C91FEA` | Formula variables only |
| `--r-sm` | `8px` | Buttons, badges |
| `--r-md` | `12px` | Cards |
| `--space-xs`–`--space-2xl` | `8–48px` | Padding/spacing scale |
| `--type-micro` | `11px` | Micro labels (uppercase, limited) |
| `--type-base` | `15px` | Body (`line-height: 1.65`) |
| `--type-md` | `18px` | Section headings |
| `--type-xl`–`--type-2xl` | `28–32px` | Page titles |
| `--content-body-max` | `clamp(900px, 82vw, 980px)` | Theory/task central column |
| `--shadow-sm` | Card shadow (sparingly) | One border + subtle shadow |

## Component classes (CSS aliases)

| Class alias | Maps to |
|-------------|---------|
| `.Card` | `.section-block`, `.problem-card`, `.home-card` |
| `.Tab` | `#tabRow .tab-btn` |
| `.SidebarItem` | `#sidebar .nav-item` |
| `.Badge` | `.nav-badge`, `.result-badge` |
| `.Button` | `#content .btn` |
| `.AlertBox` | `.warning-card`, `.warn-box` |
| `.FormulaBox` | `.formula-card`, `.rp-formula` |
| `.ConnectionBox` | `.rp-conn`, `.cf-conn` |
| `.ModuleCard` | `.home-card`, `.lp-tile` |

## Before / after notes

### Tabs
- **Before:** Raw ARIA/HTML leaked as visible label text on mikro1, ökonometrie, makro2.
- **After:** Clean labels only; equal 40px height, 8px radius, integrated tab row on surface tint.

### Sidebar
- **Before:** Adequate but noisy section titles; active state varied by module base.
- **After:** 11px uppercase section titles, accent-soft active fill + 3px left bar, calmer spacing.

### Right rail (Formeln / Verbindungen / Fehler)
- **Before:** Red-tinted mistake cards; heavy section borders.
- **After:** Elevated surface sections; amber left-accent warnings; green-tinted connection boxes.

### Dashboard module cards
- **Before:** Mixed hover/shadow; progress bar styling inconsistent.
- **After:** 12px radius, unified progress pill, intentional inactive opacity.

### Dark mode
- **Before:** Near-black inversion feel on some surfaces.
- **After:** Deep neutral `#0f1218` page, elevated `#222832` rail — not pure black.

### Buttons
- **Before:** "Lösung anzeigen" rendered as full primary blue.
- **After:** Soft-primary secondary style (accent-soft fill, accent border); primary reserved for exam/R-run/empty-state.

## Validation

| Command | Result |
|---------|--------|
| `npm run validate` | **OK** — CI validate (exam-OS layers + generated audits) |
| `npm run trust:pass1` | **OK** — trust-regression-pass-1: all checks passed |

## Remaining visual debt

- Module `styles.css` files still duplicate base tokens (mikro1 et al.); fleet override in `premium-refinement.css` wins at runtime but source duplication remains.
- `generated-portal/main.js` still ships a live Intuition tab button (properly formed); hidden by renderer but could be removed in a future codegen pass.
- Some module-specific overrides (e.g. mikro1 graph panel) may still use pre-pass border nesting.
- Landing page (`portal.css`) and module shell tokens are aligned on radius but not fully deduplicated into one import chain.
- Light-mode warning amber on long theory inline cards may need per-module contrast spot-check on projectors.
