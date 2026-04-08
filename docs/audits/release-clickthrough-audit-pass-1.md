# Release click-through audit — pass 1

**Date:** 2026-04-08  
**Perspective:** First-year student paths exercised by **automated Playwright** (Chromium, headless).  
**Environment:** Static site served with `python3 -m http.server 8765 --bind 127.0.0.1` from the repository root; base URL `http://127.0.0.1:8765/`.  
**Repro harness:** `tools/clickthrough/` (`npm install`, `npx playwright install chromium`, `node audit-pass1.mjs`). The script pre-seeds `localStorage` for all module consent keys and `lernportal_onboarding_v1` so the landing overlay does not block clicks (see below).

---

## Modules and paths actually exercised

| Area | Module / page | Actions performed |
|------|----------------|---------------------|
| Landing | `/index.html` | Load page; assert title and ≥10 module tiles; open **Mikro I** via `#lpTile_mikro1`. |
| Deep path | **mikro1** | First chapter in nav; tabs **Theorie**, **Aufgaben**, **Formeln**, **Intuition**; **Grafik** if visible; **Prüfung** if visible; sidebar **Dashboard**; **Fehlerprotokoll anzeigen**; breadcrumb **Übersicht** → home; **Probeklausuren** → list → first exam card → exam body. |
| Exam path | **mikro2** | Load module; `window.__renderHome()`; **Probeklausuren** → list heading → first exam → body. |
| R path | **oekonometrie** | Chapter **Designmatrix & Matrixnotation** (`#nav-matrix_notation`); tab **R-Anwendung**; assert non-empty body mentioning R / `lm`. |
| Tab smoke | **statistik** | First nav chapter; tabs **Theorie**, **Aufgaben**, **Formeln**, **Intuition**. |

**Not exercised in this pass (explicit gap):** `makro1`, `makro2`, `finanzwirtschaft`, `mathematik`, `jahresabschluss`, `recht`, `internationale-wirtschaftsbeziehungen`; sidebar **Schnelltest**; submitting answers or timers in full exams; MathJax / external CDN failure modes; mobile layout.

---

## Issues reproduced (trust-breaking / release-damaging)

### 1. Duplicate „Probeklausuren“ cards on module home (mikro1; same pattern ökonometrie)

**Reproduced:** On **mikro1** home after `renderHome`, Playwright found **two** `.home-action-card` elements matching „Probeklausuren“ (strict-mode violation). One comes from `createRenderer` in `assets/js/portal-core/ui/renderer.js` (inline `__showFullExamSelect`); the other from **`ensureMikroHomeExamCard()`** in `mikro1/js/ui/renderer.js`, which only checked `[data-home-action="full-exams"]` and therefore always inserted a second card.

**Student impact:** Two nearly identical CTAs for the same action — confusing and unprofessional.

**Fix applied (tiny, high-confidence):**

- `mikro1/js/ui/renderer.js` — at the start of `ensureMikroHomeExamCard()`, return if `.home-action-card[onclick*="__showFullExamSelect"]` already exists.
- `oekonometrie/js/ui/renderer.js` — same guard in `ensureEconometricsHomeExamCard()` (same structural bug).

**Files changed:** `mikro1/js/ui/renderer.js`, `oekonometrie/js/ui/renderer.js`.

### 2. Landing onboarding overlay blocks first interaction (automation / fresh profile)

**Reproduced:** Without seeding `lernportal_onboarding_v1`, Playwright could not click `#lpTile_mikro1` because `.onboarding-overlay` intercepted pointer events.

**Student impact:** **None** for normal use — the overlay is intentional and dismissible („Verstanden & Starten“). It only affects **cold profiles** and automated tests.

**Fix:** **Test harness only** — `audit-pass1.mjs` sets `localStorage.lernportal_onboarding_v1` in `addInitScript`. **No product code change.**

---

## Automated run result

After the duplicate-card fix and harness adjustments, `node audit-pass1.mjs` completed with:

- `failed`: **[]** (all scripted assertions passed)
- `pageErrors`: **[]**
- `consoleErrors`: **[]**

This does **not** imply the whole platform is error-free — only that this script’s checks passed in this environment.

---

## Fixes made (summary)

| Change | Why |
|--------|-----|
| Dedupe Probeklausuren home card (mikro1 + oekonometrie) | Remove duplicate CTA when portal core already renders the exam selector card. |
| `tools/clickthrough/package.json` + `audit-pass1.mjs` + `package-lock.json` | Reproducible real click-through for future passes. |
| Playwright: dismiss onboarding via `localStorage` in init script | Unblock automation without changing student UX. |
| Playwright: `__renderHome()` on mikro2 instead of breadcrumb label | Boot uses `renderHome()` breadcrumb **„Übersicht“**, not static HTML „Mikroökonomik II“. |
| Playwright: click `.home-action-card[onclick*="__showFullExamSelect"]` | Stable selector for the portal-provided exam card. |

---

## Remaining acceptable limitations for release

- **Coverage:** Seven modules were **not** opened in this pass; issues there remain unknown until pass 2 or manual QA.
- **Schnelltest:** Not clicked; wiring is shared (`__startExam`) but not runtime-verified here.
- **Full exams:** Only **opened** first exam per module; no submit / score / timer verification.
- **R-Anwendung:** Only **ökonometrie** chapter `matrix_notation`; no execution of R in the browser beyond DOM text checks.
- **External assets:** MathJax CDN and similar resources were not asserted; failures would require network-specific testing.
- **mikro1-specific subtitle** on the duplicate card („Vollständige Mikro-I-Klausuren…“) is **no longer shown** when the portal default card is present; the remaining card uses the shared description („Vollständige Klausursets mit Lösungen“). **Trade-off accepted** to remove duplication.

---

## How to re-run

```bash
# Terminal 1 — repo root
python3 -m http.server 8765 --bind 127.0.0.1

# Terminal 2
cd tools/clickthrough && npm install && npx playwright install chromium && node audit-pass1.mjs
```

Optional: `CLICKTHROUGH_BASE=http://127.0.0.1:PORT node audit-pass1.mjs`.
