# Split-stack trust-boundary and public-default enforcement — Pass 1

**Date:** 2026-04-12  
**Policy inputs:** Decision Pass 3 (`full-system-decision-pass-3-public-truth-student-trust-and-publication-matrix.md`), audits Pass 1–2.  
**Goal:** **Containment** — curated stack = clear public default; generated routes = visibly different trust class; no silent parity.

**Code changes:** yes (this pass). No change to `mikro2` visibility (`status: "hidden"` unchanged).

---

## Part 4 — Curated vs generated identification (authoritative list)

### Curated stack (public default)

**Boot path:** `<slug>/js/main.js` → `createPortalApp` from `assets/js/portal-core/app.js`, module-local `renderer.js` / `rightPanel.js` / `chapters.js`, etc.

| Route (relative to repo root) | Public shelf (`PUBLIC_MODULES`)? |
|-------------------------------|----------------------------------|
| `mikro1/index.html` | yes (highlight candidate) |
| `makro1/index.html` | yes |
| `makro2/index.html` | yes |
| `statistik/index.html` | yes |
| `oekonometrie/index.html` | yes |
| `finanzwirtschaft/index.html` | yes |
| `jahresabschluss/index.html` | yes |
| `recht/index.html` | yes |
| `internationale-wirtschaftsbeziehungen/index.html` | yes |
| `mathematik/index.html` | yes |
| `mikro2/index.html` | **no** (`status: "hidden"` in `modules.js`) |

**Landing public entry:** `index.html` → `assets/js/common.js` builds `#moduleGrid` **only** from `PUBLIC_MODULES` (`modules.js`). **No** generated routes on the shelf.

### Generated stack (supplementary)

**Boot path:** `assets/js/generated-portal/main.js` (+ `dataFactory.js`, etc.)

| Route | HTML entry |
|-------|------------|
| `r/index.html` | `../assets/js/generated-portal/main.js` |
| `politisches-system-brd/index.html` | same |

**Source-trust class:** lower / non–course-mirror (per audits).  
**Public visibility class:** reachable by URL; **not** on landing module grid; **not** in `PUBLIC_MODULES`.

**Codified list:** `GENERATED_PORTAL_ROUTE_PREFIXES` in `assets/js/modules.js`.

### Hidden / sandboxed

| Item | Notes |
|------|--------|
| **mikro2** | Remains `status: "hidden"`; not promoted on landing. |

---

## Exact wording / UI added

### Generated pages (`r/`, `politisches-system-brd/`)

1. **`body data-portal-stack="generated"`** — machine-readable boundary for future guards / CSS.
2. **Header chip:** `Live` → **`Ergänzung`** with class `mono-chip--supplementary` and `title` explaining separate stack.
3. **Always-visible banner** (not dismissible) immediately under the site header, before `<main>`:
   - **Kicker:** `Ergänzende Route — anderer Aufbau`
   - **Body:** states **separate generated pipeline**, **demonstration / supplementary practice**, **not same product class** as curated live modules (examples: Mikro I, Statistik, Makro I), **official course materials remain authoritative** for exam-relevant content.
4. **Footer first paragraph** replaced: removed false claim that the page shares “the same learning logic as the other courses”; new copy states **supplementary route**, **different source/tech line**, **use official materials in parallel**.

### Landing (`index.html`)

- **`lp-shelf-note`** updated to state explicitly that the grid lists **only curated live modules** of the main portal and that **supplementary demonstration routes** (own URLs, different technical stack) **do not appear** in the grid.

---

## Files changed

| File | Change |
|------|--------|
| `index.html` | Stronger `lp-shelf-note` — curated-only grid; demo routes excluded. |
| `r/index.html` | `data-portal-stack="generated"`; chip **Ergänzung**; **`.gp-trust-boundary`** block; footer copy. |
| `politisches-system-brd/index.html` | Same as `r/`. |
| `assets/css/generated-portal.css` | `.gp-trust-boundary*`, header `.mono-chip` / `.mono-chip--supplementary`. |
| `assets/js/modules.js` | Export **`GENERATED_PORTAL_ROUTE_PREFIXES`** + JSDoc guardrail. |

---

## Browser verification notes

| Check | Expected |
|-------|----------|
| **Landing** | Module tiles = `PUBLIC_MODULES` only; note mentions curated grid + excluded demo URLs; **mikro2** absent. |
| **`r/index.html`** | Banner visible under header without scroll; chip **Ergänzung**; no dismiss on banner. |
| **`politisches-system-brd/index.html`** | Same as `r/`. |
| **Curated module** (e.g. `mikro1/index.html`) | **No** `.gp-trust-boundary` (generated-only CSS/HTML). |

**Automated:** not run in CI in this pass; verify manually at three URLs + one curated module.

---

## Split-stack decision (this pass implements)

Aligned with **Decision Pass 3 option 2**: keep both stacks reachable but **visibly differentiate** generated routes. This pass adds the **visible** layer; landing copy reinforces **public default = curated**.

---

## Completion

- Generated routes are **no longer** rhetorically equivalent to curated modules (footer + chip + banner).
- Landing **explicitly** states the shelf is **curated-only**; `mikro2` remains hidden.
- Trust boundary is **explicit** (banner + `data-portal-stack` + shared constant).
