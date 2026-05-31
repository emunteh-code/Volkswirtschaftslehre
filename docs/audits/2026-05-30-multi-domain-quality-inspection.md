# Multi-domain quality inspection — 2026-05-30

**Generated:** 2026-05-31  
**Audited URL:** https://emunteh-code.github.io/Volkswirtschaftslehre/  
**Public remote:** https://github.com/emunteh-code/Volkswirtschaftslehre.git  
**Scope:** Landing page + 11 curated curriculum modules (`mikro1`, `mikro2`, `makro1`, `makro2`, `statistik`, `oekonometrie`, `mathematik`, `finanzwirtschaft`, `jahresabschluss`, `recht`, `internationale-wirtschaftsbeziehungen`) + supplementary routes (`r/`, `politisches-system-brd/`).  
**Automated checks:** `cd tools/clickthrough && npm run trust:pass1` → **PASS**; `node tools/exam-os/ci-validate.mjs` → **OK**; Lighthouse CLI on index + `mikro1/index.html`.  
**Prior audits consulted:** `docs/audits/2026-05-29-platform-ux-consistency-audit.md`, `docs/audits/2026-05-29-a-plus-readiness-pass.md`, `docs/audits/2026-05-30-mikro1-parity-all-modules-pass.md`.

---

## 1. Repository and code quality

### Critical

**R1-C1 — `source-materials/` excluded from deployable artifact**  
- **Location:** `.gitignore` line 7 (`source-materials/`); GitHub Pages deploy (`.github/workflows/deploy.yml` uploads repo root `.`).  
- **Defect:** Official PDF corpus never ships to production; all `sourceCompanion` modules point at `source-materials/...` paths that 404 on GitHub Pages (`curl -I …/Volkswirtschaftslehre/source-materials/` → HTTP 404).  
- **Why defective:** AGENTS.md rule 1 (“actual course materials are the only academic source of truth”) is violated in the live product; Quellenbrowser is non-functional for students on the public URL.  
- **Correct implementation:** Deploy a redistributable PDF subset (LFS or separate artifact bucket) or gate Quellen behind explicit “local clone required” with disabled production button; never show live PDF links that 404.

**R1-C2 — Root-absolute favicon breaks on GitHub Pages subpath**  
- **Location:** All 14 `*/index.html` + root `index.html` use `href="/assets/brand/favicon-mark.svg"` (e.g. `index.html:12–13`, `mikro1/index.html:10–11`).  
- **Defect:** Browser requests `https://emunteh-code.github.io/assets/brand/favicon-mark.svg` (404); Lighthouse `errors-in-console` logs network 404.  
- **Why defective:** Broken resource on every page load; fails basic deploy hygiene for project Pages (`/Volkswirtschaftslehre/` base).  
- **Correct implementation:** Use relative paths (`./assets/…` or `../assets/…`) or `<base href>` consistent with repo Pages root.

### Major

**R1-M1 — No LICENSE file**  
- **Location:** Repository root (missing); `ls LICENSE` fails.  
- **Defect:** No explicit redistribution/terms for code or UI assets.  
- **Why defective:** Open-source / academic deployment standard requires license clarity.  
- **Correct implementation:** Add `LICENSE` (e.g. MIT for code + separate note for third-party fonts/MathJax).

**R1-M2 — No CONTRIBUTING.md**  
- **Location:** Repository root (missing).  
- **Defect:** No documented PR workflow, content-source rules, or exam-OS gate expectations for external contributors.  
- **Why defective:** README describes extension steps but not review gates (`trust:pass1`, `ci-validate.mjs`).  
- **Correct implementation:** Add CONTRIBUTING.md referencing AGENTS.md, source-materials rule, and CI commands.

**R1-M3 — No root `package.json`; fragmented tooling**  
- **Location:** Only `tools/clickthrough/package.json`, `mikro1/package.json`, `makro2/package.json` exist.  
- **Defect:** No unified `npm test` / lint at repo root; README claims `makro2/` verified with npm but other modules lack parallel scripts.  
- **Why defective:** Onboarding friction; CI cannot run unit tests fleet-wide.  
- **Correct implementation:** Root workspace `package.json` with scripts delegating to module tests and clickthrough.

**R1-M4 — Unit tests limited to mikro1 + makro2 TypeScript pockets**  
- **Location:** `mikro1/src/tests/*.test.ts`, `makro2/src/tests/*.test.ts`; no tests under `assets/js/portal-core/`.  
- **Defect:** Shared renderer, SRS, exam, and source companion logic untested outside Playwright pass.  
- **Why defective:** Regression risk on highest-traffic shared code (`assets/js/portal-core/ui/renderer.js`, 1300+ LOC).  
- **Correct implementation:** Vitest coverage for portal-core utilities (answer checking, SRS, provenance builders).

**R1-M5 — 136 remote branches, many stale feature branches**  
- **Location:** `git branch -r` (136 lines); e.g. `feature/final-benchmark-hardening-v2` … `v12.1-adversarial`.  
- **Defect:** Branch hygiene debt; unclear which branches are authoritative.  
- **Why defective:** Increases mistaken merges and confuses audit baseline.  
- **Correct implementation:** Archive/delete merged branches; document active lines (`main` only for Pages).

**R1-M6 — `innerHTML` assignment without centralized sanitization (XSS surface)**  
- **Location:** 50+ files; high-risk cluster: `assets/js/portal-core/ui/renderer.js` (13 uses), `assets/js/portal-core/features/exam.js` (7), `assets/js/portal-core/ui/rightPanel.js` (9), `assets/js/portal-core/ui/jsErrorFallback.js:15` (static overlay).  
- **Defect:** User-facing HTML built via string concat + `innerHTML`; content mostly author-controlled but pattern is unsafe if any field becomes user-editable.  
- **Why defective:** OWASP DOM XSS guidance — prefer `textContent` / templating with explicit escape (partial escape exists in some modules only).  
- **Correct implementation:** Central `setSafeHtml(el, trustedHtml)` with allowlist, or DOM APIs; audit every `innerHTML` call site.

**R1-M7 — Landing page imports 18 343-line `dataFactory.js` for all modules**  
- **Location:** `assets/js/common.js:8` imports `./generated-portal/dataFactory.js`; used for progress resume + module metadata.  
- **Defect:** ~331 KiB transfer on index alone (Lighthouse network audit); 69 KiB minify savings flagged.  
- **Why defective:** Violates performance budget for a static landing page.  
- **Correct implementation:** Split resume metadata into small JSON manifest; lazy-import per module slug.

### Minor

**R1-m1 — `.gitignore` ignores `.DS_Store` only for macOS clutter; no `.env` pattern**  
- **Location:** `.gitignore`.  
- **Defect:** No explicit `*.env` / credentials ignore (none found, but pattern missing).  
- **Correct implementation:** Add standard secret patterns.

**R1-m2 — `.github/copilot-instructions.md` present but no human CODEOWNERS**  
- **Location:** `.github/`.  
- **Defect:** No ownership routing for module directories.  
- **Correct implementation:** Add `CODEOWNERS` for `assets/js/portal-core/` and `*/js/data/`.

**R1-m3 — CI runs exam-OS validate only on path filters; no deploy gate**  
- **Location:** `.github/workflows/exam-os.yml` (content paths only); `.github/workflows/deploy.yml` (no validation step).  
- **Defect:** Broken content can deploy to Pages without `ci-validate.mjs`.  
- **Correct implementation:** Add validate job as deploy prerequisite.

**R1-m4 — Clickthrough trust suite not in CI**  
- **Location:** `tools/clickthrough/trust-regression-pass-1.mjs` (manual/npm script only).  
- **Defect:** Math leak / tab regressions not blocked on PR.  
- **Correct implementation:** GitHub Action with Playwright install + `npm run trust:pass1`.

**R1-m5 — Duplicate i18n / answerChecker copies per module**  
- **Location:** `statistik/js/utils/i18n.js`, `recht/js/utils/i18n.js`, `oekonometrie/js/utils/i18n.js`, etc. (identical headers).  
- **Defect:** Fork drift risk.  
- **Correct implementation:** Single export from `portal-core/utils/`.

**R1-m6 — `politisches-system-brd/` uses separate generated stack not in `PUBLIC_MODULES`**  
- **Location:** `assets/js/modules.js:180` (`GENERATED_PORTAL_ROUTE_PREFIXES`); orphan `politisches-system-brd/index.html`.  
- **Defect:** Second product class without landing integration; trust boundary only in-page.  
- **Correct implementation:** Link from landing with clear badge or remove from deploy.

**R1-m7 — README lists `mikro2` as live but `modules.js` marks `status: "hidden"`**  
- **Location:** `README.md:42–43` vs `assets/js/modules.js:32` (`status: "hidden"`).  
- **Defect:** Documentation / product registry mismatch.  
- **Correct implementation:** Align README and `MODULES` status.

**R1-m8 — No source maps for large first-party JS (Lighthouse best-practices)**  
- **Location:** `assets/js/generated-portal/dataFactory.js` and module `chapters.js` files.  
- **Defect:** Production debugging harder.  
- **Correct implementation:** Optional source maps in CI artifact (not necessarily public).

**R1-m9 — Hardcoded Universität Göttingen branding without config**  
- **Location:** `index.html:31`, all module shells (`sidebar-university` copy).  
- **Defect:** Institution string duplicated ~15×.  
- **Correct implementation:** Single `siteConfig.js`.

**R1-m10 — `mikro1/js/ui/renderer.js` ~900 LOC custom fork vs ~50 LOC thin wrappers elsewhere**  
- **Location:** `mikro1/js/ui/renderer.js`, `oekonometrie/js/ui/renderer.js` vs `statistik/js/ui/renderer.js`.  
- **Defect:** Maintenance split already noted in UX audit; still open.  
- **Correct implementation:** Finish portal-core semantic math migration.

---

## 2. Performance

**Audited pages:** Landing (`/`), module benchmark (`/mikro1/index.html`). Mobile emulation default (Moto G Power class).

### Lighthouse scores — landing (`/`)

| Category | Score |
|----------|------:|
| Performance | **44** |
| Accessibility | **100** |
| Best Practices | **96** |
| SEO | **100** |

| Metric | Value |
|--------|------:|
| TTFB (server-response-time) | **130 ms** |
| FCP | **4.6 s** |
| LCP | **7.1 s** |
| TBT | **0 ms** |
| CLS | **0.332** |
| TTI / Interactive | **7.1 s** |
| Speed Index | **7.2 s** |
| Max Potential FID | **20 ms** |

### Lighthouse scores — mikro1 (`/mikro1/index.html`)

| Category | Score |
|----------|------:|
| Performance | **69** |
| Accessibility | **100** |

| Metric | Value |
|--------|------:|
| TTFB | **110 ms** |
| FCP | **2.5 s** |
| LCP | **4.6 s** |
| TBT | **320 ms** |
| CLS | **0** |
| TTI | **4.6 s** |
| Speed Index | **5.6 s** |

### Critical

**P2-C1 — Landing CLS 0.332 (layout shift in “Über dieses Portal”)**  
- **Location:** Live `/`; Lighthouse `cumulative-layout-shift`, culprit `section#ueber-portal` (`body.theme-light > section#ueber-portal`).  
- **Defect:** Main content jumps after hero/module grids hydrate (~0.33 exceeds “good” ≤0.1).  
- **Why defective:** Core Web Vitals LCP/CLS budget for mobile search ranking and perceived stability.  
- **Correct implementation:** Reserve min-height for `#heroContent`, `#trustedCoreGrid`, `#moduleGrid` before `common.js` paints; skeleton placeholders.

**P2-C2 — Landing LCP 7.1 s driven by render-blocking CSS + font chain**  
- **Location:** `index.html:15–20` Google Fonts; `portal.css`, `premium-refinement.css`.  
- **Defect:** `render-blocking-insight` estimates **1 940 ms** savings; LCP element late text node in about section.  
- **Correct implementation:** `font-display: swap` self-hosted subsets; critical CSS inline; defer non-critical CSS.

### Major

**P2-M1 — `dataFactory.js` 331 KiB on landing (unused JS 299 KiB flagged)**  
- **Location:** `assets/js/generated-portal/dataFactory.js` (18 343 lines).  
- **Defect:** Parsed on every index visit for resume cards.  
- **Correct implementation:** See R1-M7.

**P2-M2 — Sync Google Fonts from third party on every page**  
- **Location:** All module `index.html` + landing: `fonts.googleapis.com/css2?family=Inconsolata…&family=Syne…`.  
- **Defect:** Extra DNS/TLS; privacy; blocking; no `preload` for critical woff2.  
- **Correct implementation:** Self-host under `assets/fonts/` with `rel=preload`.

**P2-M3 — MathJax 3.2.2 loaded from jsDelivr CDN on all curriculum modules**  
- **Location:** Module shells (e.g. `mikro1/index.html` script block).  
- **Defect:** mikro1 Lighthouse: **120 KiB unused JavaScript** from `tex-chtml.js`; TBT **320 ms**.  
- **Correct implementation:** Lazy-load MathJax on first tab needing math; use `tex-mml-chtml` subset or local bundle.

**P2-M4 — Multiple large `chapters.js` / `curriculum.js` without minification**  
- **Location:** e.g. `mikro1/js/data/chapters.js` (54 KiB), `oekonometrie/js/data/curriculum.js` (47 KiB) per network audit.  
- **Defect:** `unminified-javascript` audit fails fleet-wide.  
- **Correct implementation:** Build step emitting minified ES modules for production deploy.

**P2-M5 — GitHub Pages cache TTL ~600 s for static assets**  
- **Location:** Response headers `cache-control: max-age=600` on assets.  
- **Defect:** `cache-insight` estimates **877 KiB** repeat-download waste on landing.  
- **Correct implementation:** Versioned filenames + long-cache headers (requires CDN config or service worker).

**P2-M6 — Landing total transfer ~1 MiB excluding HTML**  
- **Location:** Lighthouse network sum ≈ **1 020 430 bytes** non-document resources on `/`.  
- **Defect:** Heavy for mobile exam-cram session on cellular.  
- **Correct implementation:** Code-split module metadata; compress PNG (`portal-logo.png` 178 KiB — `image-delivery-insight` 138 KiB savings).

### Minor

**P2-m1 — `premium-refinement.css` unused rules ~25–38 KiB**  
- **Location:** `assets/css/premium-refinement.css`.  
- **Correct implementation:** PurgeCSS scoped to used selectors.

**P2-m2 — FCP 4.6 s on landing (score 0.14)**  
- **Location:** `/`.  
- **Correct implementation:** Address P2-C2 + P2-M1.

**P2-m3 — Speed Index 7.2 s landing (score 0.30)**  
- **Correct implementation:** Same as above.

**P2-m4 — mikro1 LCP 4.6 s still “needs improvement” (score 0.34)**  
- **Location:** `/mikro1/index.html`.  
- **Correct implementation:** Defer graph engine until Graph tab opened.

**P2-m5 — mikro1 max-potential-fid 220 ms (score 0.59)**  
- **Location:** Main-thread work from MathJax + renderer init.  
- **Correct implementation:** Split long tasks via `requestIdleCallback`.

**P2-m6 — No service worker / offline shell**  
- **Location:** Entire site.  
- **Defect:** Repeat visits reload full JS corpus.  
- **Correct implementation:** Optional SW cache for static assets (exam mode).

**P2-m7 — `common.js` dynamic-imports every module `chapters.js` for resume validation**  
- **Location:** `assets/js/common.js:95–116`.  
- **Defect:** N parallel module chunk loads on landing after first paint.  
- **Correct implementation:** Static manifest of concept IDs per slug.

---

## 3. Accessibility

Lighthouse automated a11y **100** on landing and mikro1; manual / assistive-tech inspection found failures Lighthouse misses.

### Critical

**A3-C1 — Semantic math spans break screen-reader word boundaries (mikro1 + oekonometrie)**  
- **Location:** `assets/js/portal-core/ui/semanticMathSurfaces.js` + `mikro1/js/ui/renderer.js` (`prepareSemanticMathData`, `decorateSemanticMathSurfaces`); live mikro1 home + `budget` Theorie tab.  
- **Defect:** VoiceOver/accessibility tree reads `"F ormale Definition"`, `"L ern-Dashboard"`, `"x 1 , x 2"` — per-character fragmentation.  
- **Why defective:** WCAG **1.3.2 Meaningful Sequence** (reading order destroyed); **4.1.2 Name, Role, Value** (controls misnamed).  
- **Correct implementation:** Wrap semanticized tokens in `<span aria-hidden="true">` with plain-text duplicate for SR, or use MathJax-only path with `aria-label` on containers; never semanticize home chrome / buttons.

**A3-C2 — Hidden `#jsError` overlay remains in accessibility tree**  
- **Location:** `assets/js/portal-core/ui/jsErrorFallback.js` (injected on all modules importing script); live all module pages.  
- **Defect:** When `display:none`, snapshot still exposes `"JavaScript-Module konnten nicht geladen werden"` instructions (refs e92–e98 on mikro1).  
- **Why defective:** WCAG **4.1.2** — hidden failure UI pollutes navigation; WCAG **2.4.3 Focus Order** if ever shown incorrectly.  
- **Correct implementation:** `aria-hidden="true"` when hidden, or remove from DOM after successful load; use `inert` attribute.

### Major

**A3-M1 — Theme toggle accessible name mismatch**  
- **Location:** `index.html:36` `#themeToggle` `aria-label="Farbschema wechseln"` with visible text `"Dunkel"`.  
- **Defect:** Lighthouse `label-content-name-mismatch` score 0.  
- **Why defective:** WCAG **2.5.3 Label in Name** (visible label must be substring of accessible name).  
- **Correct implementation:** `aria-label="Dunkelmodus aktivieren"` including visible token, or hide visible text from accessibility tree with `aria-hidden` on decorative part.

**A3-M2 — Home action cards use `role="button"` on `<div>` without keyboard roving tabindex management**  
- **Location:** `assets/js/portal-core/ui/renderer.js:1232–1251` (`home-action-card` divs).  
- **Defect:** Only Enter handled via inline `onkeydown`; Space not supported; no `aria-pressed`.  
- **Why defective:** WCAG **2.1.1 Keyboard** partial failure.  
- **Correct implementation:** Native `<button>` elements or full button keyboard pattern (Space + Enter).

**A3-M3 — Consent dialog blocks interaction without focus trap verification**  
- **Location:** All module `index.html` `#consentNotice` `role="dialog" aria-modal="true"`.  
- **Defect:** No documented focus trap / return focus on dismiss in portal-core.  
- **Why defective:** WCAG **2.4.3 Focus Order** risk.  
- **Correct implementation:** Trap focus in dialog; move focus to `#content` on accept.

**A3-M4 — 35+ unnamed `role="generic"` nodes in concept view**  
- **Location:** mikro1 `budget` Theorie tab accessibility snapshot (MathJax/semantic wrappers).  
- **Defect:** Screen readers announce unlabeled groups.  
- **Why defective:** WCAG **4.1.2**.  
- **Correct implementation:** Prefer `<p>`, `<span lang="de">`; mark decorative math containers `aria-hidden`.

### Minor

**A3-m1 — Landing module grids use `role="listbox"` without active option semantics**  
- **Location:** `index.html:62–74` `#trustedCoreGrid`, `#moduleGrid`.  
- **Defect:** Cards behave as links but listbox pattern incomplete (`aria-selected` never set).  
- **Why defective:** WCAG **4.1.2** role misuse.  
- **Correct implementation:** Use `role="list"` + `role="listitem"` or plain link grid.

**A3-m2 — Graph canvases lack textual alternative when Graph tab shown**  
- **Location:** Module graph panels (`mikro1/js/ui/graphEngine.js`, etc.).  
- **Defect:** No consistent `aria-label` / data table fallback per graph.  
- **Why defective:** WCAG **1.1.1 Non-text Content**.  
- **Correct implementation:** SR description + “Daten als Tabelle anzeigen” toggle.

**A3-m3 — `#shortcutHint` marked `aria-hidden="true"` but module footers duplicate shortcuts in visible buttons**  
- **Location:** `finanzwirtschaft/index.html:127` etc.  
- **Defect:** Minor inconsistency only (hint hidden — OK); ensure hints not duplicated in SR via buttons.  
- **Correct implementation:** Keep hint decorative; verify button labels don’t embed `<kbd>` (currently OK on statistik).

**A3-m4 — Search field placeholder-only labeling on some historical builds**  
- **Location:** Fixed via portal-core fallback per UX audit; verify all 11 modules load current `app.js`.  
- **Status:** mitigated in code; re-verify on deploy commit.

**A3-m5 — Color contrast not manually verified for `--muted` on `--surface2` in dark mode**  
- **Location:** `mikro1/css/styles.css` token definitions.  
- **Defect:** Lighthouse did not flag; manual spot-check needed for WCAG **1.4.3** on provenance badges.  
- **Correct implementation:** Run axe on `#provenanceStrip` expanded state.

---

## 4. User experience

Student persona: B.Sc. VWL, exam in ≤14 days, mobile + laptop, high cognitive load.

### Critical

**UX4-C1 — Quellenbrowser promises official PDFs that 404 in production**  
- **Location:** Sidebar “Quellen” on all companion-enabled modules; `sourceCompanionModule.js` fetch against `../source-materials/...`.  
- **Defect:** Student clicks Quellen → empty/error after local-environment check fails.  
- **Severity:** critical — breaks trust during exam prep.  
- **Correct implementation:** See R1-C1; show explicit “PDFs nur lokal / nicht in Web-Deployment” before opening panel.

**UX4-C2 — Mikro II hidden from landing despite substantial live module**  
- **Location:** `assets/js/modules.js` `status: "hidden"`; README claims live.  
- **Defect:** Students must discover via direct URL or README; 18 concepts unavailable in module picker.  
- **Severity:** critical for Mikro II cohort.  
- **Correct implementation:** Set `status: "live"` with honest `sourceStatusNote` banner (already in module object).

### Major

**UX4-M1 — Trusted-core vs “weitere Module” creates two-tier perception**  
- **Location:** `index.html` shelves; `TRUSTED_CORE_SLUGS` in `modules.js:6`.  
- **Defect:** Makro I/II, Mathematik, Finanz, IWB implicitly “second class” though structurally A+ ready per 2026-05-30 parity pass.  
- **Severity:** major — misallocates student time.  
- **Correct implementation:** Reframe as “Schnellstart” not quality rank; add parity badges.

**UX4-M2 — Konzept-Check home card only on makro1**  
- **Location:** `makro1/js/ui/renderer.js` extra home card; absent fleet-wide.  
- **Defect:** High-value 5-min trap-MCQ entry missing on statistik/recht/mikro1.  
- **Severity:** major — uneven exam affordance.  
- **Correct implementation:** Roll out `conceptSchnelltestItems.js` where items exist.

**UX4-M3 — Statistik suppresses concept motivation banner**  
- **Location:** `statistik/js/ui/renderer.js` (`showConceptMotivationBanner: false`).  
- **Defect:** Other modules show “why this matters” strip; statistik jumps cold into theory.  
- **Severity:** major — increases cognitive load on hardest quantitative module for many students.  
- **Correct implementation:** Re-enable or replace with statistik-specific hook.

**UX4-M4 — Consent modal on every module first visit (extra decision point)**  
- **Location:** `#consentNotice` all modules.  
- **Defect:** Two clicks before content on first visit under time pressure.  
- **Severity:** major.  
- **Correct implementation:** Single portal-level consent on landing; modules inherit.

**UX4-M5 — jsError overlay flash anxiety (2.5 s timer)**  
- **Location:** `jsErrorFallback.js:29–35`.  
- **Defect:** On slow 3G, students may see false-positive “Module konnten nicht geladen” before `__jsLoaded`.  
- **Severity:** major on mobile.  
- **Correct implementation:** Increase delay on production host; detect `location.protocol !== 'file:'` to skip overlay.

**UX4-M6 — Inconsistent home dashboard pilot note**  
- **Location:** Only `statistik/js/ui/renderer.js`, `makro2/js/ui/renderer.js` set `homeLernDashboardPilotNote`.  
- **Defect:** Explains dashboard limitations on 2/11 modules only.  
- **Severity:** major for dashboard trust.  
- **Correct implementation:** Unified note in portal-core or remove pilot label fleet-wide.

**UX4-M7 — Concept nav numbering gaps (mikro1: Konzept 7 then 13)**  
- **Location:** mikro1 sidebar order mirrors chapter pedagogical reorder.  
- **Defect:** Students search “Konzept 8” expecting sequence; increases lookup time.  
- **Severity:** major under exam stress.  
- **Correct implementation:** Display syllabus order index separate from exam numbering.

### Minor

**UX4-m1 — Mobile sidebar requires hamburger; no swipe gesture**  
- **Location:** `#mobileMenuBtn` all modules.  
- **Severity:** minor.  

**UX4-m2 — Focus mode hides right panel but shortcut bar only documents F/Enter**  
- **Location:** `#shortcutHint`.  
- **Severity:** minor discoverability.

**UX4-m3 — `politisches-system-brd/` reachable only by URL**  
- **Location:** Not in `PUBLIC_MODULES`.  
- **Severity:** minor confusion if linked externally.

**UX4-m4 — Landing `#showInstructions` href `"#"`**  
- **Location:** `index.html:106`.  
- **Defect:** Empty hash; handler in JS only.  
- **Severity:** minor — OK if JS loads.

**UX4-m5 — Resume hero on landing depends on localStorage**  
- **Location:** `assets/js/common.js` resume shelf.  
- **Defect:** Empty state gives no guided path besides trusted core.  
- **Severity:** minor for first-time users.

**UX4-m6 — Full exam description varies (“Portal-Simulationen” on mikro2 vs “Klausursets mit Lösungen” elsewhere)**  
- **Location:** mikro2 home card snapshot vs makro1.  
- **Severity:** minor honesty/consistency issue.

**UX4-m7 — R-Übung tab hidden until concept has blocks — no empty-state education**  
- **Location:** `updateTabButtons` in renderer.  
- **Severity:** minor.

**UX4-m8 — Breadcrumb “Übersicht” uses `<button>` not link**  
- **Location:** renderer breadcrumb HTML.  
- **Severity:** minor — middle-click open fails.

---

## 5. Visual design language

### Major

**V5-M1 — All modules share identical accent `#7c3aed`**  
- **Location:** `assets/js/modules.js` every module `accent: "#7c3aed"`.  
- **Defect:** No chromatic differentiation between Mathematik vs Recht vs Statistik on landing cards.  
- **Why defective:** IA at a glance suffers; modules feel like clones.  
- **Correct implementation:** Restore per-discipline accents from earlier design tokens (`--module-accent`).

**V5-M2 — Typography: Syne + Inconsolata + system stack without modular scale document**  
- **Location:** Google Fonts import; `mikro1/css/styles.css` ad-hoc `font-size` 9–22 px steps.  
- **Defect:** Heading levels (`h3` 15–18 px varying by context) inconsistent between landing (`portal.css`) and module shell.  
- **Correct implementation:** Extract type scale (`--text-xs` … `--text-2xl`) in shared CSS.

**V5-M3 — `letter-spacing: 0.08em` overused on labels**  
- **Location:** 20+ rules in `mikro1/css/styles.css` (e.g. lines 248, 292, 859).  
- **Defect:** Contributes to SR fragmentation when combined with semantic spans; visual density on mobile 320 px.  
- **Correct implementation:** Limit tracked caps to true eyebrow labels only.

**V5-M4 — Seven modules still fork full mikro1 CSS before @import migration complete**  
- **Location:** `jahresabschluss/css/styles.css`, `internationale-wirtschaftsbeziehungen/css/styles.css` (~3160 LOC forks per prior audit); statistik/recht now `@import` mikro1 (3 LOC).  
- **Defect:** Visual drift risk between forked copies and `@import` modules.  
- **Correct implementation:** Complete CSS consolidation pass (noted in 2026-05-29 UX audit P1-1).

### Minor

**V5-m1 — Landing hero CTA single anchor `#trusted-core`**  
- **Location:** `index.html:49`.  
- **Defect:** No visual hierarchy for returning users with resume data.  

**V5-m2 — Light mode hero + about section CLS shifts palette**  
- **Location:** Theme toggle on landing.  
- **Defect:** About block reflow (ties to P2-C1).  

**V5-m3 — Generated portal (`politisches-system-brd/`) uses different header chrome**  
- **Location:** `politisches-system-brd/index.html` `site-header` vs module `sidebar` layout.  
- **Defect:** Breaks single product metaphor.  

**V5-m4 — Right panel heading “Paragraphen” vs “Formeln” only on recht**  
- **Location:** `recht/index.html`.  
- **Defect:** Acceptable domain nuance but no legend for first-time users.  

**V5-m5 — Premium refinement layer adds purple graph shell (historical audits flagged magenta/purple regression)**  
- **Location:** `assets/css/premium-refinement.css`.  
- **Defect:** Economics credibility slightly undermined by decorative chrome if over-strong.  

**V5-m6 — Footer monospace note inconsistent (`SF Mono` vs Inconsolata stack)**  
- **Location:** `politisches-system-brd/index.html:68`.  

**V5-m7 — Module home stat row uses equal-weight numbers without progress visualization**  
- **Location:** renderer `stat-row`.  

**V5-m8 — Icon system absent (text-only chrome)**  
- **Location:** Global.  
- **Defect:** Scan speed lower than icon+label nav patterns.  

---

## 6. Content quality

Source truth: `source-materials/` (local only). Comparisons reference audit docs where full PDF diff was not re-run in this pass.

### Critical

**C6-C1 — Official PDFs unavailable on deployed site**  
- **Location:** Production Quellen paths (all modules).  
- **Defect:** Platform cannot be notation authority live; contradicts provenance UI “Basis nach Bereichen”.  
- **Correct implementation:** Deploy PDFs or downgrade provenance badges to `manifest-only` on web.

**C6-C2 — Zero fleet-wide `official-task-source` task families**  
- **Location:** `docs/audits/2026-05-29-a-plus-readiness-pass.md` (“0 fleet-wide in current audit”); mikro2 companion panel states 0 official task families.  
- **Defect:** Probeklausur / Aufgaben families are platform simulations, not OCR-linked official exams.  
- **Correct implementation:** Ingest official Übung/Klausur PDFs or label exams “platform-added-drill” everywhere.

### Major

**C6-M1 — Mikro II incomplete vs 20-lecture corpus**  
- **Location:** `docs/audits/mikro2-official-source-ingest-pass-1.md`; live 18 concepts vs full syllabus.  
- **Defect:** Missing/compressed blocks (monopoly depth, intertemporal, uncertainty per AGENTS.md module note).  
- **Correct implementation:** Source-grounded reconstruction per lecture PDF.

**C6-M2 — Mikro II `externa_*`, `public_goods` platform-added without VL anchors**  
- **Location:** mikro2 home snapshot labels “Supplemental Marktversagen”; `MARKET_FAILURE_SOURCE_BOUNDARY` in chapters.  
- **Defect:** Honest labeling present but content still exam-relevant without page anchors.  
- **Correct implementation:** Anchor to official PDF pages or narrow syllabus scope.

**C6-M3 — IWB 13/16 concepts below A+ formula threshold (<3 formeln)**  
- **Location:** `docs/audits/2026-05-29-a-plus-readiness-pass.md` IWB table.  
- **Defect:** Trade models (Ricardo, H-O, Krugman) lack formula density for exam transfer.  
- **Correct implementation:** Add source-faithful formula cards from `source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/`.

**C6-M4 — Theory depth aggregate still below mikro1 for mikro2 (48%), makro2 open economy, jahresabschluss (40%)**  
- **Location:** `docs/audits/2026-05-30-mikro1-parity-all-modules-pass.md`.  
- **Defect:** Narrative blocks pad length without VL-anchored edge cases.  
- **Correct implementation:** Targeted expansions from PDFs, not post-loop padding alone.

**C6-M5 — Placeholder official-task families labeled non-deceptive but present in data**  
- **Location:** `mikro1/js/data/taskFamilies.js:1449` `buildMikro1OfficialTaskPlaceholders`; similar in statistik/makro1 ingestion files.  
- **Defect:** Metadata noise for tooling; students rarely see but companion counts include placeholders.  
- **Correct implementation:** Separate companion-only registry from student task bank.

**C6-M6 — README time estimates (“45h”, “40h”) without methodology**  
- **Location:** `assets/js/modules.js` `time` fields.  
- **Defect:** Unverified planning numbers presented as facts on cards.  
- **Correct implementation:** Remove or derive from concept×task counts.

### Minor

**C6-m1 — mikro2 Probeklausuren copy “Portal-Simulationen”** — honest but easy to skim past (`mikro2` home).  
**C6-m2 — Statistik chapter nav order vs concept numbering (9 before 12)** — same as mikro1 pattern.  
**C6-m3 — Recht concepts lack case excerpts** — doctrinal depth compressed (`recht` 46% theory vs mikro1).  
**C6-m4 — Finanz `finanz_denkweise`, `liquiditaetsplanung` had aufgaben<3 in 2026-05-29 pass** — verify after 2026-05-30 pass (structural A+ claimed 100%).  
**C6-m5 — Mathematik R blocks reference legacy PUA umlaut filenames** — `mathematik/js/data/contentManifest.js` comment on U+EF84.  
**C6-m6 — Cross-module notation: mikro1 uses subscript unicode mix (x₁ vs x_1)** — trust pass prevents TeX leaks but dual conventions persist.  
**C6-m7 — Generated portal content in `dataFactory.js` not aligned with curated manifests** — second content class risk.  
**C6-m8 — Exam fullExam sets not cross-validated against university past papers** — platform-added by definition.

---

## 7. Learning design

Evidence baseline: testing effect, spaced retrieval, interleaving (Roediger & Butler; Cepeda et al.).

### Critical

**L7-C1 — No interleaving mode across concepts or modules**  
- **Location:** Exam flows (`assets/js/portal-core/features/exam.js`, `fullExam.js`) pull random tasks but stay within single-module chapter lists; no mixed-topic scheduler.  
- **Defect:** Violates interleaving evidence for exam transfer.  
- **Correct implementation:** “Mixed drill” mode sampling N concepts with explicit topic labels + blocking comparison mode.

### Major

**L7-M1 — Spaced repetition (SRS) present but opt-in via sidebar only**  
- **Location:** `assets/js/portal-core/features/exam.js` updates SRS on quick exam; `__showSRSReview` sidebar button.  
- **Defect:** No default scheduling nudge on home beyond due count; easy to ignore under cramming.  
- **Correct implementation:** Home banner when `due.length > 0`; calendar estimate.

**L7-M2 — Learning objectives not stated per concept**  
- **Location:** Chapter JSON (`*/js/data/chapters.js`) — titles yes, measurable objectives no.  
- **Defect:** Students cannot self-check readiness (missing “Du kannst danach …”).  
- **Correct implementation:** Add `objectives[]` field rendered above Theorie tab.

**L7-M3 — Worked examples before practice inconsistent**  
- **Location:** Step problems exist (`stepProblems.js`) but Aufgaben tab can appear before students open revealed steps on some concepts.  
- **Defect:** Expertise reversal risk for weak students.  
- **Correct implementation:** Gate first practice behind “Mindestens ein durchgerechnetes Beispiel ansehen” or default-expand first step problem.

**L7-M4 — Retrieval practice heavy on numeric tolerance, light on open explanation in many modules**  
- **Location:** `checkAnswerWithTolerance` default in thin renderers; free-text rubric only in fullExam subsets.  
- **Defect:** Under-trains exam essay/oral justification (especially Recht, Makro).  
- **Correct implementation:** Add short-answer prompts with structured rubric feedback.

**L7-M5 — No spaced cross-module linking despite `CONCEPT_LINKS`**  
- **Location:** `conceptLinks.js` per module — passive sidebar links only.  
- **Defect:** Misses prerequisite reinforcement (Mikro I → Statistik → Ökonometrie).  
- **Correct implementation:** SRS can pull prerequisite concept cards.

### Minor

**L7-m1 — Mastery toggle (`renderMastery`) without clear mastery criteria** — binary self-report.  
**L7-m2 — Dashboard shows weak areas but algorithm opaque** — `dashboard.js` per module.  
**L7-m3 — Intuition tab quality varies** — filtered placeholders in portal-core but uneven depth.  
**L7-m4 — Graph interaction not followed by prediction prompts** — passive exploration.  
**L7-m5 — Konzept-Check only makro1** — see UX4-M2.  
**L7-m6 — Full exams timeboxed but no break guidance** — cognitive endurance.  
**L7-m7 — Mistake review module optional** — not wired fleet-wide.  
**L7-m8 — R-Übung teaches syntax before interpretation on some stat blocks** — pedagogy order varies.

---

## 8. Technical robustness

Browser spot-check: Chrome (Cursor embedded), production URL. `trust:pass1` covers tab/math/exam/R-shell regressions locally.

### Critical

**T8-C1 — Source companion PDF fetch 404 on production**  
- **Location:** All `sourceRoot: 'source-materials/...'` configs.  
- **Defect:** Feature broken on public URL.  
- **Correct implementation:** See R1-C1.

**T8-C2 — Favicon 404 on all pages (wrong path)**  
- **Location:** `/assets/brand/favicon-mark.svg` vs correct `/Volkswirtschaftslehre/assets/brand/favicon-mark.svg`.  
- **Defect:** Console error every navigation.  
- **Correct implementation:** See R1-C2.

### Major

**T8-M1 — WebR dynamic load fails silently with fallback banner (expected) but student may not notice**  
- **Location:** `assets/js/r-lab.js`, `assets/js/portal-core/features/rPractice.js`.  
- **Defect:** R-Übung degrades to copy-paste mode; acceptable if banner seen — trust pass verifies banner.  
- **Correct implementation:** Prominent first-run tooltip on R tab.

**T8-M2 — `innerHTML` breadcrumb breaks if chapter title contains `<`**  
- **Location:** `renderer.js:1089` string concat with `chapter.title`.  
- **Defect:** Author-controlled data today; future CMS risk.  
- **Correct implementation:** Escape titles.

**T8-M3 — localStorage corruption handled per-key but no user-visible recovery except console**  
- **Location:** `assets/js/common.js:54–64`.  
- **Defect:** Silent data loss if JSON parse fails.  
- **Correct implementation:** Toast “Fortschritt zurückgesetzt (beschädigte Daten)”.

**T8-M4 — Graph tab `display:none` until JS runs — OK but fails closed if `graphConcepts` misconfigured**  
- **Location:** Module HTML + `updateTabButtons`.  
- **Defect:** trust pass would catch missing tabs on sampled concepts.  
- **Correct implementation:** CI graph registry validation.

**T8-M5 — Deploy uploads entire repo including `.qa/`, docs, tools**  
- **Location:** `.github/workflows/deploy.yml` `path: .`.  
- **Defect:** Larger attack surface / accidental exposure of dev artifacts if committed.  
- **Correct implementation:** Deploy dist/ subset.

### Minor

**T8-m1 — ES modules require HTTP(S)** — jsError overlay correctly guides file:// users; production OK (`__jsLoaded: true` verified on mikro1).  
**T8-m2 — MathJax CDN single point of failure** — if jsDelivr blocked, math blank.  
**T8-m3 — No CSP headers on GitHub Pages** — Lighthouse not failing but hardening gap.  
**T8-m4 — Safari WebR unsupported** — documented in R-Lab; no Safari-specific QA in trust pass.  
**T8-m5 — Firefox not in automated matrix** — Playwright Chromium only.  
**T8-m6 — Dynamic import path in `common.js` uses `import.meta.url` relative hops** — breaks if assets moved.  
**T8-m7 — Theme preference in localStorage without system sync on module pages** — landing uses `lernportal_theme_v1`, modules use module-specific keys in some legacy paths (verify unified).  
**T8-m8 — GitHub Pages no HTTP/2 push / early hints** — performance only.

---

## Prioritized remediation list

Top 10 for developers (impact → effort). Impact: student exam outcome + trust; Effort: S/M/L.

| Rank | ID | Fix | Impact | Effort |
|------|-----|-----|--------|--------|
| 1 | R1-C1 / T8-C1 | Ship or honestly disable Quellen PDFs on GitHub Pages | **Critical trust** | **L** (legal + deploy pipeline) |
| 2 | A3-C1 | Stop semantic-math fragmentation for SR (mikro1/oekonometrie); exclude home chrome | **Critical a11y** | **M** |
| 3 | R1-C2 / T8-C2 | Fix favicon paths for Pages subpath | **High polish + console** | **S** |
| 4 | P2-C1 / P2-C2 | Landing CLS + font/CSS blocking (reserve layout, self-host fonts) | **High mobile perf** | **M** |
| 5 | UX4-C2 | Unhide mikro2 on landing with source honesty banner | **High discoverability** | **S** |
| 6 | R1-M7 / P2-M1 | Split landing metadata out of `dataFactory.js` | **High perf** | **M** |
| 7 | A3-C2 | Remove `#jsError` from a11y tree when hidden | **Medium a11y** | **S** |
| 8 | L7-C1 | Add interleaved mixed-topic exam mode | **High learning science** | **L** |
| 9 | UX4-M2 / L7-m5 | Roll out Konzept-Check cards fleet-wide | **Medium UX parity** | **M** |
| 10 | R1-m3 / R1-m4 | CI: `ci-validate` + `trust:pass1` on every deploy PR | **Regression prevention** | **M** |

---

## Finding counts (by domain)

| Domain | Critical | Major | Minor | **Total** |
|--------|----------|-------|-------|-----------|
| 1. Repository & code | 2 | 7 | 10 | **19** |
| 2. Performance | 2 | 6 | 7 | **15** |
| 3. Accessibility | 2 | 4 | 5 | **11** |
| 4. User experience | 2 | 7 | 8 | **17** |
| 5. Visual design | 0 | 4 | 8 | **12** |
| 6. Content quality | 2 | 6 | 8 | **16** |
| 7. Learning design | 1 | 5 | 8 | **14** |
| 8. Technical robustness | 2 | 5 | 8 | **15** |
| **Total** | **13** | **44** | **62** | **119** |

---

## Top 3 critical issues (executive)

1. **Official PDFs / Quellenbrowser broken on production** — `source-materials/` gitignored and 404 on GitHub Pages; provenance UI overclaims.  
2. **Semantic math breaks screen-reader reading** on mikro1 (and oekonometrie) — theory and home controls read as letter soup (WCAG 1.3.2 / 4.1.2).  
3. **Landing performance collapse** — Performance score **44**, CLS **0.332**, LCP **7.1 s** from blocking fonts/CSS + ~1 MiB JS/CSS payload including monolithic `dataFactory.js`.

---

## Audit method notes

- **Lighthouse:** `npx lighthouse` with `--only-categories=performance,accessibility,best-practices,seo` on index; performance+a11y on mikro1.  
- **Browser MCP:** Live navigation mikro1, statistik, makro1, mikro2; accessibility snapshots; CDP verify `window.__jsLoaded`.  
- **trust:pass1:** all checks passed (math leaks, tabs, R-shell, overflow spot checks at 320/375/768/1280 widths in script matrix).  
- **Content depth:** structural metrics from generated audit docs; full PDF re-diff not repeated in this pass (local `source-materials/` unavailable in CI sandbox).
