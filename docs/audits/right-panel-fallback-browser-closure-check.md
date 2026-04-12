# Right-panel fallback — browser closure check

**Date:** 2026-04-12  
**Type:** Verification-only (Playwright against local static server)  
**Script:** `tools/clickthrough/verify-right-panel-fallback.mjs`  
**Run:** `cd tools/clickthrough && node verify-right-panel-fallback.mjs` (requires `npm install` + `npx playwright install chromium`; serves repo root on port **8898**)

## Viewports exercised

| Label | Width × height |
|--------|----------------|
| desktop-wide | 1400 × 900 |
| edge-1201 | 1201 × 900 |
| edge-1200 | 1200 × 900 |
| edge-1199 | 1199 × 900 |
| tablet-768 | 768 × 900 |
| tablet-820 | 820 × 900 |
| mobile-390 | 390 × 844 |
| mobile-428 | 428 × 926 |

Additional: **focus mode** — `body.classList.add('focus-mode')` at **1400 × 900** on Statistik `deskriptiv` / Theorie (simulates `__toggleFocus`).

## Pages / modules / tabs

| Run block | URL | Concept | Tabs |
|-----------|-----|---------|------|
| statistik-deskriptiv | `/statistik/index.html` | `deskriptiv` | theorie, aufgaben, formeln, intuition |
| statistik-bivariat-graph | `/statistik/index.html` | `bivariat` | theorie, graph |
| recht | `/recht/index.html` | `was_ist_recht` | theorie, formeln, aufgaben |
| jahresabschluss | `/jahresabschluss/index.html` | `buchen_konten` | theorie, aufgaben |
| mikro1 | `/mikro1/index.html` | `budget` | theorie, graph, aufgaben, formeln |
| oekonometrie-r-tab | `/oekonometrie/index.html` | `matrix_notation` | `r-anwendung` only (1199px) |
| statistik-focus-1400 | `/statistik/index.html` | `deskriptiv` | theorie (focus on) |

Consent dismissed via `window.__acceptConsent()`.

## What was measured (per state)

For `#rightPanel`, `#content .content-fallback--connections`, `#content .content-fallback--mistakes`:

- `getComputedStyle(…).display` for mirrors
- **Visible** = not `display:none` / `visibility:hidden` and bounding box width/height > 1px
- **`dupConn`** = `#rpConnections` visible **and** main mirror connections visible (double-visible Verbindungen)

## Results vs intent

### A. Duplication

- **`dupConn: true` never occurred** across the full JSON output (all viewports × listed tabs × modules).
- On **1400px** and **1201px**: mirrors `display: none`, not visible; right panel `display: flex` and connections visible where content exists.

### B. Missing content (when rail hidden)

- **1199px, 1200px, tablet, mobile**: `#rightPanel` `display: none` and not visible; **connections mirror** `display: block` and visible when links exist.
- **Theorie** on those widths: **mistakes mirror** visible for Statistik `deskriptiv`, Recht, Jahresabschluss, Mikro `budget` (concepts with rail mistake content).
- **Non-Theorie tabs**: mistakes mirror correctly **absent** (only Theorie injects `Häufige Fehler`); connections mirror still present — matches implementation.

### C–D. Placement & visual weight (subjective)

- **Not scored by automation** (no screenshots / design rubric). DOM order matches spec: mistakes inside `.panel.active` after theory; connections section before provenance footer.
- **Residual:** human judgment on whether cards feel “too heavy” or Verbindungen on **Formeln** / **Intuition** feels repetitive was **not** instrumented.

### E. Breakpoint edge (1199 / 1200 / 1201)

- **1201px:** rail on, mirrors off (Statistik deskriptiv Theorie: `mirrorConnDisplay: none`, `rightPanelDisplay: flex`).
- **1200px / 1199px:** rail off, mirrors on (`mirrorConnDisplay: block`, `mirrorMistDisplay: block` on Theorie where applicable).
- No duplicate visible connections at the edges; no case where both rail and mirror connections were visible.

### F. Tab parity

**Superseded by Pass 69:** main-column **Verbindungen** mirror is **Theorie-only**; non-Theorie tabs no longer inject `.content-fallback--connections`. Instrumented checks were updated accordingly (`tools/clickthrough/verify-right-panel-fallback.mjs`).

- **Grafik / Aufgaben / Formeln / Intuition / R-Anwendung (narrow):** no connections mirror in `#content`; rail still carries Verbindungen when the layout shows the rail (wide) or hides it (narrow — use Theorie tab for the mirror).
- **Theorie (narrow):** connections mirror + mistakes mirror as before.

### Focus mode (desktop 1400px)

- `focusSnapshot`: `rightPanelDisplay: none`, `mirrorConnVisible: true`, `mirrorMistVisible: true` — matches “Fokus: rail weg, Fallback an”.

## Final judgment

| Criterion | Met in browser (instrumented)? |
|-----------|----------------------------------|
| No duplicate visible support when rail is on | **Yes** |
| No loss of Verbindungen when rail is off | **Yes** (for concepts with links) |
| No loss of Häufige Fehler in Theorie when rail is off | **Yes** (for concepts with `.warn-box` → rail data) |
| Clean 1201 vs 1200 vs 1199 | **Yes** |
| “Feels intentional” / visual polish | **Not measured** |

**Closure verdict: closed** for functional / visibility / duplication / breakpoint behavior in Chromium.

**Caveat (honest):** Checklist items **C** and **D** (pedagogic placement quality, visual loudness, Formeln-tab clutter **feel**) still deserve a **short human pass** with real eyes; if those fail, downgrade to **partially closed** without changing code.

## Artifacts

- Full machine JSON from the run used for this report: session output (~47 KB) with per-viewport `tabs` keys — re-run the script to regenerate.

## Follow-up (only if human review fails)

- Pass 70 replaced stacked `.warning-card--theorie-fallback` with one **`.theorie-fallback-support`**; see `docs/audits/inline-warning-fallback-integration-pass-70.md`.
- Optionally suppress or shorten **Verbindungen** mirror on selected tabs if repetition is judged harmful (would be a **new** product decision, not a bug in the current spec).
