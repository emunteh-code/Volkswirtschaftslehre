# Student exam-stress evaluation v4 — 2026-05-31 (post fleet parity)

**Evaluator lens:** B.Sc. VWL student, first visit, ≤14 days to exam, mobile + laptop, high cognitive load.  
**Live URL:** https://emunteh-code.github.io/Volkswirtschaftslehre/  
**Codebase HEAD:** `ff0c2fe` — *Document fleet mikro1 parity completion with refreshed readiness reports.*  
**Prior audits:** [v1](./2026-05-31-student-exam-stress-evaluation.md), [v2](./2026-05-31-student-exam-stress-evaluation-v2.md), [v3](./2026-05-31-student-exam-stress-evaluation-v3.md)  
**Context:** Fleet parity [ff0c2fe](./2026-05-31-fleet-mikro1-parity-complete.md); deploy bundle fix [4c39b6f](./2026-05-31-v3-deploy-bundle-fix.md).  
**Method:** `npm run smoke:deploy` against live URL first, then live browser journey (landing → mikro1 → statistik → mikro2 → recht), 375×812 mobile emulation, compared to v3 friction table. No code changes in this pass.

---

## 1. Student verdict

**On the live public URL today:** I would **rely on Mikro I and Statistik as my primary exam drill companion** — landing tells me what to do (14-Tage block, activity strip), cold deep links open the right tab, mobile at 375px works, Beherrschungsziele read like human goals (not `[object Object]`), Klausurmethodik cards no longer leak OCR/anchor IDs, and Quellen gives me a **Zum Kurs in ILIAS** escape hatch. I would **still open ILIAS for official VL PDFs** and would **not treat the portal as my only source** until PDFs ship on deploy or course-specific ILIAS deep links exist.

**Gap vs v3:** The v3 remainder pass (`82d395e` → `4c39b6f`) **is now live**. Deploy smoke is green on all five portal-core assets. Trust polish that blocked an A-grade recommendation in v3 is resolved on the public URL.

---

## 2. v1 → v4 delta (top 10 friction items)

| # | Friction | v1 (live) | v3 (live @ audit) | v4 (live @ audit) |
|---|----------|-----------|-------------------|-------------------|
| 1 | **Official PDFs on deploy** | 404; dev-path copy | ILIAS copy; PDFs 404; no ILIAS link | **Unchanged on PDFs** — `source-materials/` → 404; **Improved** — Quellen **Zum Kurs in ILIAS** link live (`officialMaterialsUrl` set) |
| 2 | **Mobile 375px shell** | Critical fail (~75% empty) | Fixed | **Fixed** — drawer, Aufgaben tab + hash on mobile |
| 3 | **Hash `#concept/tab` cold load** | Tab ignored | Fixed | **Fixed** — `#budget/aufgaben`, `#deskriptiv/aufgaben` → Aufgaben selected |
| 4 | **Landing “what now?”** | Module shelf only | Fixed (14-Tage + strip) | **Fixed** — `#exam-cram-plan`, Lesen/Üben/Probeklausur, Mikro/Statistik CTAs |
| 5 | **PDF / dev-path messaging** | `source-materials/` on landing | Fixed (ILIAS copy) | **Fixed** — no dev path on landing |
| 6 | **Formeln tab discoverability** | Hidden in “Formeln” | Fixed (rename) | **Fixed** — **Formeln und Klausurmethodik** |
| 7 | **Concept numbering gaps** | Konzept 7→13 on home | Fixed (chapter-local) | **Fixed** — e.g. `Haushaltstheorie I · Stelle 2 von 6` |
| 8 | **Klausurmethodik dev jargon** | N/A (v1) | **Fail** — OCR/anchor IDs; `studentFacingText.js` 404 | **Fixed live** — no OCR/Review, no `mikro1.budget.vl01…`; asset **200** |
| 9 | **Mastery checklist labels** | N/A (v1) | **Fail** — `[object Object]`; `masteryLabel.js` 404 | **Fixed live** — human labels; asset **200** |
| 10 | **Deploy freshness / bundle integrity** | Pre-fix chaos | Partial — `82d395e` not live | **Fixed** — smoke **all passed**; `#jsError` absent from DOM after load |

**Net:** v3’s four blocking live regressions (items 8–10 + ILIAS link) are **closed on deploy**. Item 1 (PDF availability) remains the main A+ blocker.

---

## 3. Sections A–G (severity on **live deploy**)

### A. Usefulness & first impression — **Pass (was Critical in v1)**

| Check | Severity if fail | v4 live |
|-------|------------------|---------|
| 14-Tage CTA + activity strip | — | **Pass** — region “Klausur in 14 Tagen?”, deep links to Aufgaben |
| ILIAS/PDF copy (not dev path) | Critical | **Pass** — ILIAS/Vorlesungsordner copy on landing + modules |
| ILIAS one-click link | Major | **Partial** — **link on Quellen tab**, not on landing hero |
| Prüfungsbereit vs Beta | Major | **Pass** — mikro2 tile 2-line beta note |

### B. Confusion points — **Mostly resolved**

| Issue | Severity | v4 evidence |
|-------|----------|-------------|
| Deep links | — | **Resolved** |
| Quellen PDF boundary | Major | **Mostly resolved** — disabled PDF buttons + ILIAS link + honest copy |
| Klausurmethodik jargon | Major | **Resolved** — student-facing scrub live |
| Mastery `[object Object]` | Major | **Resolved** — mikro1 + statistik checked |
| `#jsError` ghost node | Minor–Major | **Resolved** — `jsError: false` in DOM after load |
| Plattform-Übung on Aufgaben panel | Minor | **Pass (mikro1)** — `.practice-panel-header` “PLATTFORM-ÜBUNG” on concept Aufgaben |
| Internal source-status strings | Minor | **Partial** — mikro2 shows `platform-added-explanation` / `source-distilled` in theory (student-visible) |
| Konzept-Check fleet gap | Minor | **Unchanged** — makro1 only |

### C. Quality of explanations (Theorie) — **Good**

| Concept | Module | Pass alone? | vs v3 |
|---------|--------|-------------|-------|
| Budgetmenge | mikro1 | **Yes** | Same depth |
| Deskriptive Statistik | statistik | **Yes** | Same; R-Übung tab added depth |
| Spieltheorie | mikro2 | **Partial** | **Better scope** — monopoly, intertemporal, GE blocks now in sidebar; supplemental copy still requires self-filter |
| Willenserklärung | recht | **Better** | Mini-Gutachten §§ 433, 145, 151 **live** |

### D. Value for exam preparation — **Good with external PDFs**

| Surface | v4 live |
|---------|---------|
| **Aufgaben** | Best path; hash + Schnellstart ~1–2 min warm / ~2–3 min cold |
| **Formeln & Klausurmethodik** | Scannable accordion; **trustworthy** after scrub |
| **R-Übung** | Statistik deskriptiv — guided WebR blocks, Ausführen/Lösung einfügen, WebR caveat banner |
| **Official PDFs** | Still external; ILIAS login link reduces friction vs v3 |

### E. Example questions — **Strong drills**

- Stepped Aufgaben (mikro1/budget, statistik/deskriptiv): multiple tasks, Musterlösungen — **A-level**.
- Beherrschungsziele: **usable** — checkbox labels human-readable.
- R-Übung: exam-oriented pipeline tasks; WebR disclaimer sets correct expectations.

### F. Flow & mobile — **Pass**

- **375×812:** `Seitenleiste öffnen`, Aufgaben tab selected on `#budget/aufgaben`, mastery labels intact.
- **Decisions:** landing strip helps; module home still 6+ cards.

### G. Emotional / trust — **Improved to clean**

- **Positive:** v3 trust breaks fixed on live; deploy smoke gives confidence the bundle is whole; fleet parity visible in mikro2 sidebar breadth.
- **Negative:** PDF dead end persists; occasional internal provenance labels visible to students; landing lacks ILIAS button (copy only).

---

## 4. Module grades (exam-prep usefulness on **live**)

| Module | Grade | Rationale |
|--------|-------|-----------|
| **mikro1** | **A** | Deepest theory, graphs, stepped Aufgaben; hash + mobile + mastery + Klausurmethodik polish **live** |
| **statistik** | **A** | Strong DS theory + R-Übung + Aufgaben hash; mastery labels fixed |
| **makro2** | **A−** (inferred) | Prüfungsbereit tier; fleet parity; not deep-spotted this session |
| **oekonometrie / mathematik** | **A−** (inferred) | Core tier; R where applicable; same shell |
| **mikro2** | **B+** | Expanded VL-backed concepts (monopol, intertemporal, GE); beta/supplemental + visible source tags need self-filter |
| **recht** | **B+** | Gutachten structure + mini-example live; text-heavy vs mikro1 |
| **IWB** | **B** (inferred) | Not re-spotted; v2/v3 grade stands |
| **makro1 / finanz / jahresabschluss** | **B+** (inferred) | Beta tier with structural A+ per fleet audit; below mikro1 drill depth |

---

## 5. Top 8 remaining fixes

1. **Ship readable PDFs on deploy** (or per-module ILIAS deep links) — still the #1 trust gap under exam stress.
2. **Landing ILIAS CTA** — copy exists; add the same **Zum Kurs in ILIAS** button as Quellen footer on landing / 14-Tage block.
3. **Hide internal source-status labels** from student theory view (e.g. `platform-added-explanation`, `source-distilled` headings on mikro2).
4. **Fleet Konzept-Check or consistent home note** — makro1-only quick drill remains inconsistent.
5. **Verify Plattform-Übung panel header fleet-wide** — confirmed mikro1; spot-check beta modules after renderer changes.
6. **Reduce information triplication** — Theorie / right rail / Quellen overlap still costs time on phone.
7. **Cold-load home flash** on some deep links — minor time loss on first visit (v1 M9; not re-measured this session).
8. **Wire post-deploy smoke into CI** — `DEPLOY_BASE_URL=… npm run smoke:deploy` after each Pages publish (tool exists; automate).

---

## 6. Deploy SHA / smoke results

### Smoke (`tools/clickthrough/deploy-smoke.mjs`)

```bash
DEPLOY_BASE_URL=https://emunteh-code.github.io/Volkswirtschaftslehre \
  cd tools/clickthrough && npm run smoke:deploy
```

| Phase | Result |
|-------|--------|
| Local `build-pages-dist` + dist manifest | **Pass** — 6 portal-core assets verified |
| Local HTTP (port 8911) | **Pass** — 5/5 assets **200** |
| Live HTTP | **Pass** — 5/5 assets **200** |

Live assets confirmed **200:** `studentFacingText.js`, `masteryLabel.js`, `hashRouting.js`, `siteConfig.js`, `app.js`.

### Deploy freshness

| Probe | v4 live |
|-------|---------|
| **Pages `Last-Modified`** | `Sun, 31 May 2026 23:20:40 GMT` (~9 min after `ff0c2fe` batch) |
| **Likely live commit** | **`ff0c2fe`** (includes `4c39b6f` deploy bundle fix + fleet parity content) |
| **Codebase HEAD** | `ff0c2fe859dafd99811bbc4af645e015375262ab` |
| **`officialMaterialsUrl`** | `https://elearning.uni-goettingen.de/ilias/login.php` |
| **`source-materials/`** | **404** (expected) |

---

## 7. Live verification checklist (this session)

| # | Requirement | Result |
|---|-------------|--------|
| 1 | Landing: 14-Tage CTA, activity strip, ILIAS copy/link | **Pass (copy + CTAs)** — ILIAS **link on Quellen**, not landing button |
| 2 | Cold `#budget/aufgaben` → Aufgaben active | **Pass** |
| 3 | Mobile 375px: drawer, usable Aufgaben + hash | **Pass** |
| 4 | Mastery labels human (not `[object Object]`) | **Pass** — mikro1 + statistik |
| 5 | Klausurmethodik: no OCR/anchor IDs | **Pass** — `#budget/formeln` |
| 6 | Aufgaben panel Plattform-Übung header | **Pass** — mikro1 `.practice-panel-header` |
| 7 | Quellen + ILIAS | **Pass** — disabled PDFs + **Zum Kurs in ILIAS** |
| 8 | R-Übung sample | **Pass** — statistik `#deskriptiv/r-uebung` (WebR editor + guided blocks) |
| 9 | Paths: mikro1, statistik, mikro2, recht | **Pass** — all load; statistik hash Aufgaben OK; recht Mini-Gutachten live |

---

## Session metadata

- **Browser:** landing; mikro1 `#budget/aufgaben`, `#budget/formeln`, `#budget/quellen`; statistik `#deskriptiv/aufgaben`, `#deskriptiv/r-uebung`; mikro2 `#spieltheorie_statisch/theorie`; recht `#willenserklaerung/theorie`
- **Mobile:** CDP emulate 375×812 on mikro1 `#budget/aufgaben`
- **Smoke:** `npm run smoke:deploy` with `DEPLOY_BASE_URL` — all checks passed
- **No code changes** in this pass (audit only)
