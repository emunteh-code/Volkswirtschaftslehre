# Landing „Über dieses Portal“ — relocation pass

**Date:** 2026-04-12  
**Priority:** Public-facing UX — boundary copy should **close** the landing narrative, not **open** it.

---

## Problem

`section.lp-about#ueber-portal` sat **immediately after the hero** and **before** „Empfohlener Einstieg“ and the module grids. That pushed product-boundary prose ahead of module discovery and weakened first-impression flow.

---

## Required order (achieved)

1. Hero (`#heroShelf`)  
2. Empfohlener Einstieg / trusted core (`#trusted-core`)  
3. Full module overview — weitere Module (`#modules` / `#moduleGrid`)  
4. **Über dieses Portal** (`#ueber-portal`)  
5. Footer (`.lp-footer`)

**Completion rule:** „Über dieses Portal“ must **not** appear above the main module-discovery area — **satisfied**: the about block is now the **last** main landmark before the footer.

---

## What changed

| Area | Change |
|------|--------|
| **`index.html`** | Cut the full `section.lp-about` block from between hero and trusted core; pasted it **after** `section#modules` and **before** `footer.lp-footer`. Added class **`lp-about--after-modules`** on the section for placement-specific spacing only. |
| **`assets/css/portal.css`** | New rules for **`.lp-about.lp-about--after-modules`** (vertical padding + slightly softened top border). **`.lp-shelf--further-modules`** gets **`padding-bottom: 52px`** so the hand-off to the about block stays tight without a cavern. Responsive overrides for the modifier at **768px** and **480px** breakpoints. |

**Unchanged (by design):**

- Full copy, heading **Über dieses Portal**, `id="ueber-portal"`, `aria-labelledby`, inner structure (`.lp-about-inner`, `.lp-about-title`, `.lp-about-body`, `.lp-about-closing`).
- No accordion, no footer merge, no removal.

Typography and colour tokens for `.lp-about` / title / body / closing are **unchanged**; only placement and spacing deltas for the new position.

---

## Prior documentation note

`docs/audits/landing-about-section-implementation-pass.md` described DOM order as hero → **about** → shelf. That order is **superseded** on the landing page by this pass for UX reasons; content and styling intent of the about block remain the same.

---

## Verification (manual)

Check **`/`** (`index.html`):

| Viewport | Checks |
|----------|--------|
| **Desktop** (e.g. ≥1280px) | Scroll: hero → trusted four tiles → weitere six tiles → **Über dieses Portal** → footer. About does not sit under the hero. |
| **Tablet** (~768px) | Same order; about readable width (`max-width: 40rem` inner); no horizontal clipping. |
| **Mobile** (~390px) | Same order; trusted + grids stack; about follows grids with comfortable padding (`lp-about--after-modules` mobile overrides). |

**Automated:** No Playwright change required; landing content order is static HTML.

---

## Files touched

- `index.html`  
- `assets/css/portal.css`  
- `docs/audits/landing-about-section-relocation-pass.md`

---

## Completion

**Complete:** „Über dieses Portal“ is **below** both trusted-core and weitere-module areas and **above** the footer only; section remains a full, visible block with the same premium academic styling family.
