# Verbindungen navigation upgrade — Pass 47

## Goal

- **Single canonical** relationship navigation: the **right-panel `Verbindungen`** block with **Setzt voraus** / **Wird gebraucht für** as integrated **subgroups** (micro-labels + lightweight rows, directional arrow tints from Pass 33).
- **Remove** the duplicate **main-content** blue/magenta **`.concept-links`** chip strip that repeated the same `conceptLinks` data under **Theorie** and **Aufgaben**.

## Modules / surfaces affected

| Surface | Effect |
|---------|--------|
| **All portal modules** using `createRenderer` from `assets/js/portal-core/ui/renderer.js` | No more `.concept-links` after theory panel or practice + mastery on **Theorie** / **Aufgaben**. |
| **All portal modules** using `createRightPanelRenderer` without overriding `groupConnections` | **Grouped** Verbindungen (two `.rp-link-group` blocks with `.rp-group-label`) is now the **default** — same behaviour Mikro I / Ökonometrie / IWB already opted into explicitly. |

Representative modules: **Statistik**, **Makro1**, **Makro2**, **Finanzwirtschaft**, **Recht**, **Jahresabschluss**, **Mathematik**, **Mikro1**, **Mikro2**, **Ökonometrie**, **Internationale Wirtschaftsbeziehungen**, plus any build that imports portal-core unchanged.

## Root cause of the duplicate

- **`renderConceptLinks`** in `assets/js/portal-core/ui/renderer.js` appended a **main-area** `<div class="concept-links">` with **`.cl-tag`** buttons for the same `uses` / `usedBy` edges already rendered in **`#rpConnections`** by **`renderRightPanel`**.
- **`groupConnections`** defaulted to **`false`** in portal-core `rightPanel.js`, so many modules showed a **flat** rail list while Mikro I (and a few others) passed **`true`** for subgroup labels — inconsistent “Mikro1-quality” target.

## Changes made

### 1. Remove duplicate page-level strip (shared)

**File:** `assets/js/portal-core/ui/renderer.js`

- Deleted **`renderConceptLinks`** entirely.
- **Theorie:** `content.innerHTML` no longer appends `renderConceptLinks(conceptId)` after the theory panel.
- **Aufgaben:** removed `linksHtml` / `renderConceptLinks` after mastery + practice.

**Relationship data** (`conceptLinks` object, navigation handlers) unchanged; only the **duplicate DOM** was removed.

### 2. Default grouped right-rail Verbindungen (shared)

**File:** `assets/js/portal-core/ui/rightPanel.js`

- **`groupConnections`** default changed from **`false`** to **`true`**, so **`Setzt voraus`** / **`Wird gebraucht für`** subgroup markup is emitted for every module unless a future caller explicitly passes `groupConnections: false`.

### 3. Redundant module options (cleanup)

Removed redundant **`groupConnections: true`** (now the default) from:

- `mikro1/js/ui/rightPanel.js`
- `oekonometrie/js/ui/rightPanel.js`
- `internationale-wirtschaftsbeziehungen/js/ui/rightPanel.js`

### 4. Project-wide rail styling for “missing” modules (shared CSS)

**File:** `assets/css/premium-refinement.css` — **Pass 47** block at end of file.

- **`#rightPanel #rpConnections .rp-link-group`** — grid stack for label + rows.
- **Adjacent second group** — `margin-top: 14px` between prerequisite and forward blocks.
- **`.rp-group-label`** — uppercase micro-label, muted, body font (legible; avoids modules without local rules looking bare).
- **`.rp-conn`** inside **`#rpConnections`** — Mikro I–style row padding, hover, no per-item “card” chrome.

Existing **Pass 33** rules for **`.arrow--dir-back`** / **`.arrow--dir-forward`** remain the directional color distinction.

## Shared vs module-local

| Change | Scope |
|--------|--------|
| Drop main `.concept-links` | **Shared** — `portal-core/ui/renderer.js` |
| Default `groupConnections` | **Shared** — `portal-core/ui/rightPanel.js` |
| Rail look for modules without full local `.rp-link-group` rules | **Shared** — `assets/css/premium-refinement.css` |

## Browser verification notes

**Not executed in the agent environment.** Suggested checks:

1. **Mikro I** — Theorie + Aufgaben: **no** bottom `.concept-links` strip; right rail shows **two labeled groups** when both edges exist; **← / →** colors unchanged.
2. **Statistik** (had flat rail + no local `.rp-link-group`): confirm **grouped labels** and row styling match intent.
3. **Second module** (e.g. **Makro1** or **Finanzwirtschaft**): same — single navigation system.
4. **Concept with no links:** `#rpConnections` section hidden as before; main content unchanged aside from missing duplicate.

## Residual / honest outliers

- **`decorateConceptLinks`** in `mikro1/js/ui/renderer.js` and `oekonometrie/js/ui/renderer.js` still queries **`.concept-links .cl-section`**; with no `.concept-links` in the DOM this is a **no-op** (harmless). Could be removed in a later hygiene pass.
- **`.concept-links` / `.cl-tag` CSS** remains in module stylesheets for now (unused in main flow); optional future cleanup to reduce CSS weight.
- If any **non-portal** page ever inlined `.concept-links` by hand in HTML content, that would be unrelated to this pass and was not searched.
