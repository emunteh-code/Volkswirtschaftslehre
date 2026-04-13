# Trust-critical regression protection — Pass 1

**Date:** 2026-04-12  
**Goal:** Automated guards against **silent trust regressions** (polish still looks fine while pedagogy/trust breaks).  
**Non-goals:** Visual redesign; full pixel-perfect graph diff; proving mathematical correctness.

---

## What this pass now prevents (examples)

- **Raw math / markup leaks** returning in visible `#content` (e.g. `$$`, `\[`…`\]`, `\begin{`, `\texttt{`, `legal-schema__` in `innerText`).
- **Provenance footers** disappearing or losing the **ⓘ** mark / summary line on curated concepts listed below.
- **Graph shells** collapsing (missing `#graph_canvas`, tiny layout, missing title, visible render error).
- **Aufgaben Lösung** reveal not toggling `.solution-block.show` after clicking a reveal control.
- **Prüfungstransfer / exam drill** toggle not opening `[id^="examDrill_"]` when a drill control exists on **mikro1 / budget / Intuition**.
- **Right-panel fallback** regressions: duplicate visible Verbindungen at narrow widths; broken integrated mistakes structure (`theorie-fallback-support` ≠ 1 or legacy warning cards reappearing).
- **Focus mode** breaking parity (rail should hide, mistakes mirror should show at 1400px).
- **R tab** structural embarrassment: missing editor, output region, or run control; **Kernzeile** toolbar label missing on **Ökonometrie / matrix_notation / R-Anwendung**.
- **Horizontal overflow** on **Statistik deskriptiv Theorie** at tablet/mobile widths (spot check).

---

## Systems protected

| System | How protected |
|--------|----------------|
| **Math / rendering** | `innerText` scan on selected theory/formeln surfaces. |
| **Provenance** | DOM assertions on `footer.source-provenance` (count, mark, line length). |
| **Graph integrity** | Canvas presence, min size, panel title, no empty-state error — **two viewports** (1400, 1199). |
| **Aufgaben reveal** | Playwright click + `.solution-block.show`. |
| **Prüfungstransfer** | Optional exam-drill open when control exists. |
| **Right-panel fallback** | Narrow + integrated mistakes + duplicate Verbindungen; focus-mode snapshot. |
| **R tab** | Shell DOM + Kernzeile label — desktop + mobile width. |
| **Responsive trust** | `scrollWidth` vs `innerWidth` spot checks. |

**Still unprotected (recommended next expansion):**

- **Pixel / curve golden images** for graphs (would need baselines + `pixelmatch` or Playwright snapshots).
- **Full WebR execution** and output correctness (CI env flaky); failure-state UX audit is manual unless UI selectors for error banners exist.
- **Every concept / every tab** permutation (would explode runtime).
- **Generated portal routes** (`r/`, `politisches-system-brd/`) — different boot stack; not in this harness.
- **FullExam / Klausurmodus** flows.
- **Accessibility** (axe) and **contrast**.

---

## Routes / modules covered

| Area | Route | Concept / tab |
|------|-------|-----------------|
| Math | `statistik`, `mikro1` | deskriptiv / budget; formeln |
| Provenance | mikro1, statistik, makro1, makro2, finanz, jahresabschluss, recht, IWB, mathe, ökonometrie | See script `PROVENANCE_EXPECT` |
| Graph | mikro1, makro1, makro2, statistik, ökonometrie, finanz | budget, islm, mundell_fleming, bivariat, ols_objective, liquiditaetsplanung |
| Reveal | statistik | deskriptiv / aufgaben |
| Exam drill | mikro1 | budget / intuition (if drill present) |
| Fallback | statistik | deskriptiv / theorie @ 1199, 390 + focus 1400 |
| R shell | ökonometrie | matrix_notation / r-anwendung @ 1280, 390 |
| Overflow | statistik | deskriptiv / theorie @ 390, 1200 |

---

## Failure output format

Each failure is a JSON object:

1. `system` — e.g. `graph-integrity`, `provenance-footer`  
2. `route` — human label  
3. `surface` — tab / region  
4. `viewport` — e.g. `edge-1199`, `mobile-390`  
5. `type` — short machine code  
6. `why` — student-trust explanation  

---

## Scripts / commands

From repo root (after `cd tools/clickthrough && npm ci && npx playwright install chromium`):

```bash
cd tools/clickthrough
node trust-regression-pass-1.mjs
```

Optional port (default **8900** to avoid colliding with `verify-right-panel-fallback.mjs` on **8898**):

```bash
TRUST_REGRESSION_PORT=8900 node trust-regression-pass-1.mjs
```

npm shortcut:

```bash
cd tools/clickthrough && npm run trust:pass1
```

**Existing harness (unchanged):** `node verify-right-panel-fallback.mjs` — deeper viewport matrix for right-panel parity only.

---

## Files added / changed

| File | Role |
|------|------|
| `tools/clickthrough/trust-regression-pass-1.mjs` | **New** — Pass 1 regression runner. |
| `tools/clickthrough/package.json` | **Scripts** `trust:pass1`, `verify:right-panel-fallback`. |

---

## Browser verification (this session)

`node trust-regression-pass-1.mjs` → **exit code 0** (~53s), Chromium, local `python3 -m http.server` on port **8900**.

---

## Completion

Pass 1 delivers **reusable automated checks** for the highest-trust-risk **curated** surfaces named above. It does **not** replace human graph review or course PDF parity; it **reduces silent regression** risk on structure, provenance presence, and core interactions.
