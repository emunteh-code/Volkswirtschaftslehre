# Release smoke-test audit — pass 1

**Date:** 2026-04-08  
**Perspective:** First-year student, cold start (no prior knowledge of repo layout).  
**Method:** **Static / code-path audit** — navigation wiring, shared portal contracts, and configuration were traced in source. **No live browser session** (no Puppeteer/Playwright run) in this pass; runtime layout, MathJax, and R embeds were **not** visually verified.

## Modules in scope (registry)

All **`PUBLIC_MODULES`** from `assets/js/modules.js` (12 live modules):

`mikro1`, `mikro2`, `makro1`, `makro2`, `oekonometrie`, `statistik`, `finanzwirtschaft`, `mathematik`, `jahresabschluss`, `recht`, `internationale-wirtschaftsbeziehungen`.

---

## 1. Landing page coherence

**Checked:** `index.html`, `assets/js/common.js` (landing render, onboarding, module grid from `PUBLIC_MODULES`).

**Findings:**

- Hero, module grid, theme toggle, and footer **Anleitung** are wired; **Anleitung** calls `showOnboarding(true)` (not a dead `href="#"` only).
- **`mikro2`** is correctly flagged in data as **not** `source-materials`-anchored (`sourceCorpusInRepo: false`, `sourceStatusNote`); a cold student still sees it as a normal tile — **documented product choice**, not a broken UI.
- Minor UX nuance: footer link text is **„Anleitung“** while onboarding content is the **Hard-Zero** intro — slightly mismatched labels, **not** trust-breaking.

**Release stance:** **Acceptable** (with known mikro2 source caveat already in module metadata).

---

## 2. Module entry consistency

**Checked:** Each module’s `index.html` pattern (sidebar, progress label, topbar tabs, script entry to `js/main.js`).

**Findings:**

- Live modules follow the same **portal shell** pattern: sidebar + `createPortalApp` bootstrap.
- **`mikro2`** and **`mathematik`** intentionally omit `mistakeReview` in `main.js` (comments / minimal shell); sidebars expose **Dashboard**, **Schnelltest**, **Wiederholen** only — **no** sidebar control advertising a missing mistake-review flow.

**Release stance:** **Acceptable**; parity with “full” modules is **documented** for mikro2.

---

## 3. Progress display sanity

**Checked:** Pattern `updateProgressUI` + `CHAPTERS.length` vs static `progressText` in HTML (spot-check: `mikro2` shows `0 / 13` matching `chapters.js` length); landing `getModuleSnapshot` uses stored progress keys.

**Findings:**

- Runtime progress text is driven from **`CHAPTERS`** (or generated curriculum) in the shared navigation pattern, so static “0 / N” in HTML is a **placeholder until JS runs** — normal for static HTML.
- No cross-module progress count mismatch was found in the spot-checks performed in this pass.

**Release stance:** **Acceptable**; full enumeration of every module’s `progressText` vs `chapters.js` was **not** re-run line-by-line in this pass.

---

## 4. Dashboard access

**Checked:** `window.__showDashboard` registration in `assets/js/portal-core/app.js`; sidebar buttons across modules.

**Findings:**

- **Dashboard** is consistently reachable from the sidebar where present.
- **`mikro2`** / **`mathematik`** `js/features/dashboard.js` files reuse a **“Mikroökonomik I”** file header comment — **misleading for maintainers only**; user-visible title is **„Lern-Dashboard“**.

**Release stance:** **Acceptable** for release; comment drift is **low severity** (developer-facing).

---

## 5. Mistake review access

**Checked:** `createPortalApp({ mistakeReview })` in each `main.js`; `assets/js/portal-core/app.js` (`__showMistakeReview` only if feature passed); dashboard buttons using `window.__showMistakeReview?.()`.

**Findings:**

- Modules **with** `mistakeReview`: dashboard includes **„Fehlerprotokoll anzeigen“** with optional chaining — **no** hard error if hook missing.
- **`mikro2`** and **`mathematik`**: **no** `mistakeReview` and **no** Fehlerprotokoll block in their **local** `dashboard.js` copies — **consistent** (no dead primary CTA).

**Release stance:** **Acceptable**; students in mikro2/mathematik simply **do not** get the mistake-review pilot from the dashboard (by design / omission).

---

## 6. Exam selector behavior

**Checked:** `assets/js/portal-core/ui/renderer.js` (home renders Probeklausuren when `__showFullExamSelect` exists); `assets/js/portal-core/features/fullExam.js` (`showFullExamSelect` builds `<h2>${courseExamCollectionTitle}</h2>`); every module’s `*/js/features/fullExam.js` passes `COURSE_CONFIG.examCollectionTitle`; `*/js/data/courseConfig.js`.

**Findings (trust-breaking):**

- **`mikro2`** `courseConfig.js` **did not** define `examCollectionTitle` while `fullExam.js` passed `COURSE_CONFIG.examCollectionTitle` into the shared exam list renderer. In the browser this interpolates as the literal word **`undefined`** in the page heading — **obviously release-damaging**.

**Fix applied (tiny, high-confidence):**

| Change | File |
|--------|------|
| Added `examCollectionTitle: 'Probeklausuren Mikroökonomik II'` | `mikro2/js/data/courseConfig.js` |

All other modules with `fullExam.js` already had `examCollectionTitle` set.

**Release stance:** **Should ship with this fix**; without it, mikro2 exam picker is **not** acceptable.

---

## 7. Quick test / transfer question behavior

**Checked:** `createPortalApp` always receives `quickExam` from module `features/exam.js`; `window.__startExam` registration in `app.js`.

**Findings:**

- Wiring is **consistent** across bootstrapped modules; **no** static finding of a missing `__startExam` for a module that exposes the Schnelltest button in the checked layouts.
- **Not executed:** actual question draw, timer, or storage edge cases — would need a **runtime** pass.

**Release stance:** **Acceptable** at architecture level; **residual risk** = behavior bugs inside individual `exam.js` implementations (not audited interactively here).

---

## 8. Formula / intuition / graph tabs

**Checked:** Typical `index.html` tab row (`theorie`, `graph` with `display:none` until JS shows, `formeln`, `intuition`, optional `r-anwendung`); `mikro2` / `statistik` samples.

**Findings:**

- **Grafik** tab is hidden by default and shown when the module exposes graph content — **expected** pattern; a student may see **fewer** tabs on some concepts — **not** a broken tab strip.
- **No** cross-module verification that every chapter toggles graph visibility correctly (would need runtime).

**Release stance:** **Acceptable** as a pattern; **residual risk** = per-chapter graph metadata mistakes.

---

## Summary

| Severity | Issue | Action |
|----------|--------|--------|
| **High (trust)** | Mikro2 Probeklausuren heading showed **`undefined`** | **Fixed:** `examCollectionTitle` in `mikro2/js/data/courseConfig.js` |
| Low | Landing „Anleitung“ vs onboarding copy | Document only |
| Low | mikro2/mathematik dashboard file comment says Mikro I | Document only |
| Product | mikro2 not source-anchored | Already documented in `modules.js` / audits |

## What this pass did **not** do

- No **end-to-end** click test in a real browser.
- No verification of **MathJax**, **canvas** graphs, or **R** cells after load.
- No **full** progress denominator audit for all 12 modules (spot-checks only).

## Files touched in this audit

- `mikro2/js/data/courseConfig.js` — **fix** (`examCollectionTitle`).
- `docs/audits/release-smoke-test-audit-pass-1.md` — **this document**.
