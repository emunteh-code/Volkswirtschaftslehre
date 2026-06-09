# Visual layer cleanup — Phase 3 plan

**Status:** implemented in PR #34 (cleanup + hardening; no UI redesign)  
**Base:** `main` @ merge `5b69a22` (clean visual layer Phase 2)  
**Prerequisite:** PR #33 merged — runtime now uses `assets/css/visual/*` via `mikro1/css/styles.css` shim.

## Goal

Remove orphaned presentation debt without regressing the clean visual layer. No product-logic changes; CSS/import hygiene and token purity only.

---

## 1. Delete orphaned `premium-refinement.css`

| Item | Detail |
|------|--------|
| File | `assets/css/premium-refinement.css` (~11.3k lines) |
| Runtime today | **Not loaded** — removed from all module `index.html` in #33 |
| Depends on | `module-tokens.css` (imported at top of premium file only) |
| Risk | Stale comments in `visual-*.css` still reference premium; grep and update comments only |
| Gate | `npm run validate`, `npm run trust:pass1`, recapture `clean-visual-layer-pass` if any rule was still duplicated from premium |

**Steps**

1. Grep repo for `premium-refinement` (html, css, js, docs).
2. Confirm zero runtime `<link>` / `@import` paths.
3. Delete file.
4. Extend `check-visual-tokens.mjs` or add `check-no-orphan-css.mjs` to fail if `premium-refinement.css` is re-linked.

---

## 2. Delete or migrate `module-tokens.css`

| Item | Detail |
|------|--------|
| File | `assets/css/module-tokens.css` (~145 lines) |
| Consumer today | **Only** `premium-refinement.css` (`@import` line 1) |
| Canonical tokens | `assets/css/visual/visual-tokens.css` |

**Decision:** **Delete** after premium removal, after verifying no unique tokens remain only in `module-tokens.css`.

**Migration checklist**

- [ ] Diff `:root` / `body.light-mode` vars in `module-tokens.css` vs `visual-tokens.css`
- [ ] Port any missing layout tokens (`--content-body-max`, motion primitives) into `visual-tokens.css` if still referenced in `visual-shell.css`
- [ ] Remove file and update any doc references

---

## 3. Finish token purity

**Current guards:** `check-visual-tokens.mjs`, `check-math-ink.mjs` (in `ci-validate.mjs`).

**Remaining debt**

- Raw hex / `rgb(` in `visual-*.css` outside allowlist (audit with extended checker)
- Stale comments pointing at premium-refinement
- `portal.css` landing rules may duplicate token names
- `generated-portal.css` / `common.css` purple theme vars diverge from fleet

**Target**

- Single source of truth: `visual-tokens.css` (+ `portal-critical.css` allowlist for landing FOUC)
- All semantic colors via `var(--*)` in visual layer files
- CI fails on new raw color literals in `assets/css/visual/`

---

## 4. Migrate landing away from `portal.css`

| Item | Detail |
|------|--------|
| Landing shell | `index.html` |
| Current stack | `portal-critical.css` (inline) → `visual-tokens` → `visual-base` → `visual-learning` → `visual-dark` → **`portal.css`** (~942 lines) |
| Phase 1 audit | Phase 9: port landing from `portal.css` into visual stack |

**Steps**

1. Inventory `portal.css` selectors used on landing (`data-page="landing"`, `.lp-*`).
2. Port landing-only rules into `visual-shell.css` or new `visual-landing.css` imported from `index.html`.
3. Retain `portal-critical.css` for above-the-fold subset until full port verified.
4. Delete or shrink `portal.css` to zero landing rules.
5. Recapture `landing-*.png` in `clean-visual-layer-pass`.

---

## 5. Clean duplicate R imports

| Path | Import |
|------|--------|
| `assets/css/visual/visual-labs.css` | `@import '../r-practice.css'` (canonical via fleet shim) |
| `oekonometrie/css/styles.css` | mikro1 shim **+** direct `r-practice.css` |
| `mathematik/css/styles.css` | mikro1 shim **+** direct `r-practice.css` |
| `assets/css/generated-portal.css` | `@import './r-practice.css'` |

**Action:** Remove redundant `@import` from `oekonometrie` and `mathematik` module `styles.css` (shim → visual-labs already loads R styles). Document exception if module needs R before labs load order.

**Gate:** `check-r-tab-lab`, bivariat R screenshots, ökonometrie R tab smoke.

---

## 6. Generated-portal outliers

**Modules:** `r/`, `politisches-system-brd/`

| Asset | Role |
|-------|------|
| `assets/css/generated-portal.css` | Separate theme (purple), imports `r-practice.css` |
| `assets/css/portal.css` | Shared with landing |
| `assets/js/generated-portal/main.js` | Alternate shell bootstrap |

**Options (pick one in implementation PR)**

| Option | Pros | Cons |
|--------|------|------|
| A. Fleet migrate | One visual stack, one validation surface | Requires renderer parity audit |
| B. Quarantine + deprecate | Low risk to statistik/mikro1 | Two systems persist |
| C. Visual tokens only | Import `visual-tokens.css` into generated-portal; keep layout separate | Partial convergence |

**Recommendation:** Option C short-term (token alignment), Option A long-term if modules stay in fleet.

**Gate:** Manual smoke on `r/index.html` and `politisches-system-brd/index.html`; no dead tabs.

---

## Suggested implementation order

| Step | Work | Risk |
|------|------|------|
| 1 | Duplicate R import cleanup | Low |
| 2 | Delete `premium-refinement.css` + `module-tokens.css` | Low (orphaned) |
| 3 | Comment/stale-reference cleanup in `visual-*.css` | Low |
| 4 | Token purity CI hardening | Medium |
| 5 | Landing port off `portal.css` | Medium |
| 6 | Generated-portal decision + migration | High |

---

## Validation matrix (every merge step)

```bash
npm run validate
npm run trust:pass1
node tools/exam-os/capture-clean-visual-layer-pass.mjs   # when CSS surfaces change
```

---

## Files touched (expected)

- Delete: `assets/css/premium-refinement.css`, `assets/css/module-tokens.css` (after migration)
- Shrink: `assets/css/portal.css`
- Edit: `oekonometrie/css/styles.css`, `mathematik/css/styles.css`, `index.html`, `assets/css/visual/*`, `tools/exam-os/ci-validate.mjs`
- Maybe: `assets/css/generated-portal.css`, `r/index.html`, `politisches-system-brd/index.html`

**Explicitly out of scope for this PR:** product logic, chapter data, graph/R JS behavior changes.
