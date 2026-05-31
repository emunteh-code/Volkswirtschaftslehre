# Student exam-stress evaluation v3 — 2026-05-31

**Evaluator lens:** B.Sc. VWL student, first visit, ≤14 days to exam, mobile + laptop, high cognitive load.  
**Live URL:** https://emunteh-code.github.io/Volkswirtschaftslehre/  
**Codebase HEAD:** `82d395e` — *Close student v2 remainder fixes for exam-stress audit.*  
**Method:** Live browser journey + `curl -I` probes on deploy (landing → mikro1 `#budget/aufgaben` → statistik → mikro2 → recht), 375×812 mobile emulation, compared to v1/v2 audits and `2026-05-31-student-v2-remainder-fixes.md`. No code changes in this pass.

---

## 1. Student verdict

**On the live public URL today:** I would **use Mikro I and Statistik as my primary drill companion** — landing now tells me what to do (14-Tage block, activity strip), deep links like `#budget/aufgaben` open the right tab, mobile at 375px is usable, and PDF messaging is honest (ILIAS copy, disabled buttons). I would **still open ILIAS for official PDFs** and would **not treat Klausurmethodik cards as fully polished** until dev strings and broken mastery checklists are fixed on deploy.

**Gap vs expectation:** `origin/main` is at `82d395e`, but GitHub Pages last deployed **`a254ea0`-era assets** (~`2026-05-31T22:53:51Z`). The remainder pass (mastery labels, student-facing Klausurmethodik scrub, ILIAS deep link, Aufgaben panel badge, `#jsError` DOM removal) is **in repo, not on live**. For a ≤14-day cram I can rely on theory + stepped Aufgaben; I cannot rely on Beherrschungsziele checklists or screen-reader trust signals yet.

---

## 2. v1 → v2 → v3 delta (top 10 friction items)

| # | Friction | v1 (live) | v2 (live / codebase) | v3 (live @ audit) |
|---|----------|-----------|------------------------|-------------------|
| 1 | **Official PDFs on deploy** | 404; dev-path copy | ILIAS copy in code; live stale | **Partial fix live** — ILIAS/Vorlesungsordner copy; PDFs still 404; no one-click ILIAS link (`officialMaterialsUrl: null` on live) |
| 2 | **Mobile 375px shell** | Critical fail (~75% empty) | Fixed in codebase; live stale | **Fixed live** — drawer (`Seitenleiste öffnen`), full-width content, sticky `#tabRow`, no horizontal overflow |
| 3 | **Hash `#concept/tab` cold load** | Tab ignored | Partial in code; `hashRouting.js` 404 on live | **Fixed live** — `#budget/aufgaben`, `#deskriptiv/aufgaben` → **Aufgaben** selected; `assets/js/portal-core/utils/hashRouting.js` → **200** |
| 4 | **Landing “what now?”** | Module shelf only | 14-Tage + strip in code; not on live | **Fixed live** — `#exam-cram-plan`, Lesen/Üben/Probeklausur strip, Mikro/Statistik deep links |
| 5 | **PDF / dev-path messaging** | `source-materials/` on landing | Fixed in code; live stale | **Fixed live** — “ILIAS / Vorlesungsordner (nicht in dieser Web-Version)” on landing + module home + Quellen |
| 6 | **Formeln tab discoverability** | Hidden in “Formeln” | Renamed in code | **Fixed live** — tab reads **Formeln und Klausurmethodik** |
| 7 | **Concept numbering gaps** | Konzept 7→13 on home | Chapter-local labels in code | **Fixed live** — e.g. `Haushaltstheorie I · Stelle 2 von 6` on module home + sidebar |
| 8 | **Klausurmethodik dev jargon** | N/A (v1) | OCR/anchor IDs in cards (live) | **Still broken on live** — “OCR/Review”, `mikro1.budget.vl01.p16…` in method cards; `studentFacingText.js` → **404** |
| 9 | **Mastery checklist labels** | N/A (v1) | `[object Object]` (v2 finding) | **Still broken on live** — checkboxes announce `[object Object]`; `masteryLabel.js` → **404**; live `mastery.js` lacks `getMasteryItemLabel` |
| 10 | **Deploy freshness** | Pre-fix | Stale vs `bbaf5fe` | **Partial** — ~`a254ea0` on Pages; **`82d395e` not yet live** (~4 min after last deploy timestamp) |

---

## 3. Sections A–G (severity on **live deploy**)

### A. Usefulness & first impression — **Major improvement (was Critical in v1)**

| Check | Severity if fail | v3 live |
|-------|------------------|---------|
| 14-Tage CTA + activity strip | — | **Pass** — region “Klausur in 14 Tagen?”, links to `#budget/aufgaben` / `#deskriptiv/aufgaben` |
| ILIAS/PDF copy (not dev path) | Critical | **Pass** — no `source-materials/` on landing |
| Prüfungsbereit vs Beta | Major | **Pass** — mikro2 tile shortened to 2-line beta note + Modul öffnen |
| Module-home exam flow | Major | **Pass** — `Prüfungsflow: 1 Theorie → 2 Aufgaben → 3 Formeln & Klausurmethodik`; Aufgaben-Schnellstart with Plattform-Übung badge |

### B. Confusion points — **Mixed**

| Issue | Severity | Evidence |
|-------|----------|----------|
| Deep links | — | **Resolved** — cold `#…/aufgaben` opens Aufgaben |
| Quellen PDF boundary | Major | **Mostly resolved** — disabled “PDF nur lokal verfügbar” upfront + ILIAS copy; **no** “Zum Kurs in ILIAS” link (config null on live) |
| Klausurmethodik jargon | Major | **Fail** — OCR strings + raw anchor IDs on budget Formeln tab |
| Mastery `[object Object]` | Major | **Fail** — Aufgaben Beherrschungsziele unusable in a11y tree |
| `#jsError` ghost node | Minor–Major | **Partial** — visually hidden but still in DOM/a11y snapshots |
| Plattform-Übung on Aufgaben panel | Minor | **Fail on concept Aufgaben** — badge on home Schnellstart only; no `.practice-panel-header` in live renderer |
| Konzept-Check fleet gap | Minor | Unchanged — makro1 only; documented in codebase |

### C. Quality of explanations (Theorie) — **Good**

| Concept | Module | Pass alone? | vs v2 |
|---------|--------|-------------|-------|
| Budgetmenge | mikro1 | **Yes** | Same depth |
| Deskriptive Statistik | statistik | **Yes** | Same; chapter-local sidebar labels |
| Spieltheorie | mikro2 | **Partial** | Structure OK; supplemental/source-boundary copy still requires self-filter |
| Willenserklärung | recht | **Better** | **Mini-Gutachten** with §§ 433, 145, 151 **live** |

### D. Value for exam preparation — **Good with external PDFs**

| Surface | v3 live |
|---------|---------|
| **Aufgaben** | Best path; hash + Schnellstart shorten to ~1–2 min warm / ~2–3 min cold |
| **Formeln & Klausurmethodik** | Scannable accordion; **dev footnotes undermine trust** |
| **Schnelltest / Probeklausur** | Clearly labeled Plattform-Simulation on home |
| **Official PDFs** | Still external (ILIAS); mapping visible in Quellen |

### E. Example questions — **Strong drills, weak polish**

- Stepped Aufgaben (mikro1/budget, statistik/deskriptiv): multiple tasks, Musterlösungen — **A-level**.
- Klausurmethodik cards: layout good; **content scrub missing on live**.
- Beherrschungsziele: **broken labels** — student cannot track objectives.

### F. Flow & mobile — **Pass (v1 Critical resolved)**

- **375×812:** drawer sidebar, content uses full viewport width, sticky tab row, Aufgaben tab survives hash on mobile.
- **Decisions:** slightly reduced vs v1 via landing strip; module home still 6+ cards.

### G. Emotional / trust — **Improved but not clean**

- **Positive:** Honest simulation labels, softer onboarding (mikro2 modal), progress local-only message, redeploy visibly improved landing/hash/mobile vs v2 live note.
- **Negative:** `[object Object]` mastery, OCR jargon in exam-method cards, jsError in a11y tree, deploy lag on last fix commit (feels like “almost there”).

---

## 4. Module grades (exam-prep usefulness on **live**)

| Module | Grade | Rationale |
|--------|-------|-----------|
| **mikro1** | **A−** | Deepest theory, graphs, stepped Aufgaben; hash + mobile work; mastery checklist + Klausurmethodik polish missing on live |
| **statistik** | **A−** | Strong DS1 theory + R tab; hash Aufgaben works; same mastery bug |
| **makro2** | **A−** (inferred) | Prüfungsbereit tier; not deep-spotted this session |
| **mikro2** | **B+** | Good oligopoly/game theory; chapter-local labels; supplemental block needs self-filter |
| **recht** | **B+** | Gutachten structure + mini-example live; text-heavy vs mikro1 |
| **IWB** | **B** (inferred) | Not re-spotted; v2 grade stands |
| **oekonometrie / mathematik** | **A−** (inferred) | Core tier; same shell |

*Grades would return to v2 codebase targets (mikro1 **A**) once `82d395e` ships.*

---

## 5. Top 8 remaining fixes

1. **Redeploy GitHub Pages to `82d395e`** — remainder pass invisible until deploy completes (~3–5 min after push).
2. **Verify post-deploy:** `studentFacingText.js`, `masteryLabel.js` → 200; mastery checkboxes show human labels; Klausurmethodik free of OCR/anchor IDs.
3. **Wire ILIAS link on live** — `siteConfig.officialMaterialsUrl` → Uni Göttingen ILIAS (set in `82d395e`, null on current live).
4. **Aufgaben panel Plattform-Übung header** — in `82d395e` renderer; confirm after redeploy.
5. **`#jsError` DOM removal** — `82d395e` uses `jsError.remove()`; live still keeps node (a11y ghost).
6. **Ship PDF bundle or stable ILIAS deep link** — copy alone is not enough for A+ trust under exam stress.
7. **Fleet Konzept-Check or consistent home note** — makro1-only quick drill remains inconsistent.
8. **Automated deploy SHA smoke test** — curl key assets after each Pages deploy to catch partial/stale publishes.

---

## 6. Deploy status: live vs expected

| Probe | Expected (`82d395e`) | Live @ audit |
|-------|----------------------|--------------|
| **Git ref** | `82d395e` | **`~a254ea0`** (deploy `Last-Modified: Sun, 31 May 2026 22:53:51 GMT`; commit `82d395e` at `2026-06-01 00:57:46 +0200`) |
| Landing `#exam-cram-plan` | Yes | **Yes** |
| ILIAS copy (not `source-materials/`) | Yes | **Yes** |
| `hashRouting.js` (`utils/`) | 200 | **200** |
| `#budget/aufgaben` → Aufgaben | Yes | **Yes** |
| Mobile 375px shell | Pass | **Pass** |
| Quellen PDF disabled upfront | Yes | **Yes** |
| ILIAS one-click link | Yes | **No** (`officialMaterialsUrl: null`) |
| `studentFacingText.js` | 200 | **404** |
| `masteryLabel.js` | 200 | **404** |
| Mastery labels | Human text | **`[object Object]`** |
| Klausurmethodik scrub | No OCR/IDs | **OCR + anchor IDs present** |
| Aufgaben panel badge | Header badge | **Missing on concept view** |
| `#jsError` after load | Removed from DOM | **Hidden, still in a11y tree** |
| `source-materials/` | 404 | **404** (expected) |

**Note:** Wrong path `assets/js/portal-core/hashRouting.js` (no `utils/`) still **404** — app correctly loads `utils/hashRouting.js`.

---

## 7. Live verification checklist (this session)

| # | Requirement | Result |
|---|-------------|--------|
| 1 | Landing: 14-Tage CTA, activity strip, ILIAS copy | **Pass** |
| 2 | `hashRouting.js` loads (200) | **Pass** (`utils/hashRouting.js`) |
| 3 | Cold `#budget/aufgaben` → Aufgaben active | **Pass** |
| 4 | Mobile 375px: drawer, full-width, sticky tabs | **Pass** |
| 5 | Quellen: PDF disabled upfront, ILIAS link if configured | **Partial** — disabled PDFs + copy; **no ILIAS link** |
| 6 | Formeln & Klausurmethodik: no OCR jargon, no raw anchor IDs | **Fail** |
| 7 | Aufgaben: panel Plattform-Übung header; mastery not `[object Object]` | **Fail** (home Schnellstart badge only) |
| 8 | Sample paths: mikro1, statistik, mikro2, recht | **Pass** — all load; hash/statistik Aufgaben OK; recht Mini-Gutachten live |

---

## Session metadata

- **Browser:** landing, mikro1 `#budget/aufgaben` + Formeln + Quellen, statistik `#deskriptiv/aufgaben`, mikro2 `#spieltheorie_statisch/theorie`, recht `#willenserklaerung/theorie`, mikro1 module home
- **Mobile:** CDP emulate 375×812 on mikro1 `#budget/aufgaben`
- **curl:** live asset headers + HTML grep; `source-materials/` → 404
- **Prior audits:** v1, v2, `2026-05-31-student-v2-remainder-fixes.md`
- **No code changes** in this pass (audit only)
