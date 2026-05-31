# Student exam-stress evaluation v2 — 2026-05-31

**Evaluator lens:** B.Sc. VWL student, first visit, ≤14 days to exam, mobile + laptop, high cognitive load.  
**Live URL:** https://emunteh-code.github.io/Volkswirtschaftslehre/  
**Codebase HEAD:** `bbaf5fe` — *Address student exam-stress eval sections A–G.*  
**Method:** Fresh browser journey on **live deploy + local codebase** (landing → mikro1 `#budget/aufgaben` → statistik → mikro2 → recht), 375px mobile checks, Quellen/Formeln/Aufgaben tab review, `git log -5 --oneline`. Prior audits read for context only; findings below are from this session.

**Critical deploy note:** `origin/main` is at `bbaf5fe`, but **GitHub Pages is still serving a pre-fix build**. Evidence: live `index.html` still says `PDFs liegen nur lokal unter source-materials/`; `hashRouting.js` returns **404** on deploy; landing has no `#exam-cram-plan`. Students hitting the public URL today largely still see **v1 friction**. Ratings below split **codebase (post-fix)** vs **live (what students actually get)**.

---

## 1. Student verdict

**On the current codebase (after bbaf5fe):** I would **rely on this for Mikro I and Statistik exam prep** as a structured drill companion — theory, stepped Aufgaben, Klausurmethodik cards, and honest simulation labels are genuinely useful. I would still pair it with **ILIAS PDFs**; the portal cannot replace official materials until PDFs ship or a real ILIAS link is wired.

**On the live public URL today:** I would **not** trust it yet for a ≤14-day cram. The deploy lag means broken mobile layout, missing 14-Tage entry, old PDF copy, no hash routing assets, and home-grid numbering gaps are still what classmates see. **Redeploy first**, then re-evaluate.

---

## 2. Improved since v1 (fixes that actually helped — codebase verified)

| Fix | v1 pain | v2 status (codebase) | Live deploy |
|-----|---------|----------------------|-------------|
| Landing 14-Tage-Plan + activity strip | No “what do I do now?” | **Fixed** — `#exam-cram-plan`, Lesen/Üben/Probeklausur links | **Not deployed** |
| PDF / ILIAS messaging upfront | Dev-path `source-materials/` copy | **Fixed** — ILIAS/Vorlesungsordner copy on landing + module home | **Not deployed** |
| Mobile 375px shell | Content squished, ~75% empty viewport | **Fixed** — content/main 100% width, drawer sidebar, right rail hidden, no horizontal overflow (CDP @375×812) | Partial — drawer button exists; full CSS block likely not live |
| Formeln tab rename | Klausurmethodik hidden in “Formeln” | **Fixed** — tab reads **Formeln & Klausurmethodik**; formula block collapsed when method cards present | **Not deployed** |
| Chapter-local labels | Konzept 7→13 gaps on home | **Fixed** on home cards — `Haushaltstheorie I · Stelle 2 von 6` | Sidebar fixed on live; **home grid still Konzept N on live** |
| Hash `#concept/tab` | Deep links ignored tab | **Partial** — concept loads; **tab stays Theorie on cold load** (see C3); tab switches update hash once inside module | **Not deployed** (`hashRouting.js` 404) |
| Plattform-Übung labeling | Unclear vs official Übungsblatt | **Partial** — badge on Schnellstart/home cards + `renderQuestionCard`; guided Aufgaben cards have badge in DOM but easy to miss visually | Not on live home cards |
| Onboarding tone | “Hard Zero” intimidation | **Fixed** — softer welcome modal copy | Unknown on live |
| mikro2 landing wall of text | Stressful beta note | **Fixed** — 2-line note + Modul öffnen | **Not deployed** |
| recht Willenserklärung | Thin Gutachten drill | **Fixed** — Mini-Gutachten with §§ 433, 145, 151 worked example | Content likely not live |
| Module-home exam flow | Tab order unclear | **Fixed** — `Prüfungsflow: 1 Theorie → 2 Aufgaben → 3 Formeln & Klausurmethodik` | **Not deployed** |
| Quellen PDF gating | Click-then-404 | **Fixed in code** — disabled buttons + upfront notice when `__sourceMaterialsAvailable === false` | Live still shows old disabled “PDF nur lokal” pattern from v1 |

**Recent commits (`git log -5 --oneline`):**

```
bbaf5fe Address student exam-stress eval sections A–G.
d880d08 Close theory quality pass-2 gaps for makro2, oekonometrie, recht, mikro2.
9823207 Tighten header-math trust check to require typeset only when label HTML has $ delimiters.
659ccba Fix card title LaTeX rendering for undelimited subscripts.
b6cd7f7 Redesign Klausurmethodik accordion UX and fleet shell alignment.
```

---

## 3. Still hurts under stress

### Critical

| # | Issue | Evidence |
|---|--------|----------|
| C1 | **GitHub Pages not redeployed** | Live HTML/assets ≠ `bbaf5fe`; students don't get the fix pass. |
| C2 | **Official PDFs still 404 on deploy** | `curl -I …/source-materials/` → 404. ILIAS copy helps only after redeploy. |
| C3 | **Hash tab routing broken on cold load** | `#budget/aufgaben`, `#deskriptiv/aufgaben`: concept opens, **active tab = Theorie** (CDP). Likely cause: `resolveAvailableTab()` checks `offsetParent` before `#tabRow.visible` is applied. Tab hash works after manual tab click. |
| C4 | **Live mobile layout (pre-fix)** | v1 C2 still applies on public URL until CSS ships. |

### Major

| # | Issue | Evidence |
|---|--------|----------|
| M1 | **14-Tage CTA dead on live** | Best exam entry (`#budget/aufgaben`) exists in code but not on deployed landing. |
| M2 | **Klausurmethodik dev jargon remains** | Formeln tab still shows strings like “Probeklausur item-level mapping blockiert bis OCR/Review” and internal anchor IDs (`mikro1.budget.vl01.p16…`) in method cards. |
| M3 | **Konzept-Check fleet gap** | Only makro1 wires home card; other modules have no quick concept drill entry. |
| M4 | **jsError in accessibility tree** | `#jsError` is visually hidden (`display:none`, `aria-hidden=true`) but still exposed to screen readers in snapshots — v1 M7 persists. |
| M5 | **Mastery checkboxes a11y** | Aufgaben “Minimale Beherrschungsziele” checkboxes announce `[object Object]` in a11y tree. |
| M6 | **Beta / supplemental load** | mikro2 supplemental chapters + source-boundary notices still require self-filtering under time pressure (better copy, same cognitive load). |
| M7 | **No real ILIAS URL** | `officialMaterialsUrl` null — honest copy but no one-click escape to course materials. |

### Minor

| # | Issue | Evidence |
|---|--------|----------|
| m1 | Plattform-Übung badge placement | On guided task cards, badge sits below solution block — low visual salience vs Probeklausur cards. |
| m2 | Information density on Formeln tab | Klausurmethodik + collapsed formulas still long scroll on budget concept. |
| m3 | Trust regression not runnable without server | `npm run trust:pass1` failed (connection refused @8900) — automated hash/mobile checks not verified in CI this session. |
| m4 | Module home still 6+ cards | Better ordering (Schnellstart first) but decision count unchanged. |

---

## 4. Sections A–G (compare to v1)

### A. Usefulness & first impression

| Question | v1 | v2 codebase | v2 live |
|----------|-----|-------------|---------|
| “What do I do now?” | Partial — module shelf only | **Good** — activity strip + 14-Tage buttons | **Weak** — still module shelf + old PDF note |
| Prüfungsbereit vs Beta | Stressful if unread | **Better** — shorter beta tooltips/notes | Old mikro2 wall of text |
| Resume path | Good 2nd visit | **Good** — Weitermachen + Aufgaben-Schnellstart | Weitermachen exists |

### B. Confusion points

1. **Tab order** — unchanged pedagogically; **Formeln & Klausurmethodik** rename helps discoverability (codebase).
2. **Quellen vs rail** — right rail formulas hidden on Formeln tab (codebase); triplication reduced, not gone.
3. **PDF boundary** — ILIAS messaging upfront (codebase); live still dev-path wording.
4. **Platform vs official Übungen** — clearer on home/Schnelltest; Aufgaben tab still easy to misread without prominent badge.
5. **Concept numbering** — **fixed** in codebase home grid; **live home still Konzept N gaps**.
6. **Deep links** — v1 C3 **not fully fixed** — tab portion fails on cold load.

### C. Quality of explanations (Theorie tab)

| Concept | Module | v2 pass alone? | vs v1 |
|---------|--------|----------------|-------|
| Budgetmenge | mikro1 | **Yes** — Lernziele, numerics, warn-boxes | Same strength |
| Deskriptive Statistik | statistik | **Yes** — Klausurzugriff, IQR/n−1 called out | Same strength |
| Willenserklärung | recht | **Better** — Mini-Gutachten + §-Zitate | Improved (codebase) |
| Spieltheorie (sample) | mikro2 | **Partial** — structure OK, beta scope filtering | Not deeply re-tested |

### D. Value for exam preparation

| Surface | v2 assessment |
|---------|----------------|
| **Aufgaben** | Still best drill path; Schnellstart + flow hint shorten path (~2 min warm session on codebase) |
| **Formeln & Klausurmethodik** | Scannable accordion (Ziel/Vorgehen/Frage/Fehler); some dev strings remain |
| **Schnelltest / Probeklausur** | Clearly labeled Plattform-Simulation on home cards |
| **SRS / Dashboard** | Present; SRS banner when due > 0 (codebase) |
| **Official PDFs** | Still blocking for A+ trust |

**Time to first practice (codebase, warm):** ~**1–2 min** via Aufgaben-Schnellstart or 14-Tage CTA.  
**Time cold start with hash link:** ~**+1 manual tab click** because `#…/aufgaben` opens Theorie.

### E. Quality of example questions

- **Stepped Aufgaben (mikro1/budget):** Still strong — multiple tasks, steps, Musterlösungen.
- **Klausurmethodik cards:** Improved layout; trim remaining OCR/dev footnotes.
- **Konzept-Check:** Still makro1-only.

### F. Flow of information

- **Mobile 375px:** **Pass** on codebase (full-width content, drawer, sticky tabs).
- **Decisions per screen:** Slightly reduced via activity strip; module home still busy.
- **Hash routing:** Concept resolution good; tab resolution regressed in practice.

### G. Emotional / trust factors

- **Positive:** Softer onboarding, honest simulation labels, local-only progress message, supplemental labeling on mikro2.
- **Negative:** Deploy lag (feels abandoned), PDF 404, jsError ghost node, hash links that promise Aufgaben but deliver Theorie.

---

## 5. Module grades (exam-prep usefulness)

*Grades reflect **codebase** quality; live deploy −½ letter until redeployed.*

| Module | Grade | Rationale |
|--------|-------|-----------|
| **mikro1** | **A** | Deepest theory, graphs, stepped Aufgaben, Klausurmethodik; best exam companion — PDFs external |
| **statistik** | **A−** | Strong DS1 theory + R tab; chapter-local labels fix numbering trust |
| **makro2** | **A−** | Prüfungsbereit tier; theory pass-2 in d880d08 (not live-spotted) |
| **mikro2** | **B+** | Live, good oligopoly/game theory; shorter beta copy; supplemental block needs self-filter |
| **recht** | **B+** | Gutachten structure + mini-example improved; still text-heavy vs mikro1 |
| **IWB** | **B** | Structure complete; theory thinner than mikro1; partial Klausurfamilien |
| **oekonometrie / mathematik** | **A−** (inferred) | Core tier, same shell — not live-spotted this session |

---

## 6. Top 8 fixes remaining

1. **Redeploy GitHub Pages to `bbaf5fe`** — without this, the entire fix pass is invisible to students.
2. **Fix hash cold-load tab selection** — apply hash tab after `#tabRow.visible` or don’t gate on `offsetParent` during init.
3. **Ship PDFs or wire `officialMaterialsUrl`** — single ILIAS deep link beats repeated “not in this web version”.
4. **Scrub Klausurmethodik dev strings** — remove OCR/mapping jargon from student-facing cards.
5. **Prominent Plattform-Übung on Aufgaben header** — panel-level badge, not only per-card footer.
6. **Remove or aria-hide `#jsError` from a11y tree** when JS loaded (`hidden` + `inert` or DOM removal).
7. **Fix mastery checkbox labels** — `[object Object]` breaks trust for SR users.
8. **Fleet Konzept-Check or drop until ready** — inconsistent quick-drill surface across modules.

---

## Session metadata

- **Browser:** landing, mikro1 `#budget/aufgaben`, statistik `#deskriptiv`, mikro2, recht `#willenserklaerung` — live + `localhost:8765`
- **Mobile:** CDP emulate 375×812 on codebase — content width 375px, no overflow, right panel hidden
- **Deploy probes:** live `index.html` old PDF copy; `hashRouting.js` 404; `source-materials/` 404
- **Prior audits consulted:** v1 eval, fixes pass (`bbaf5fe`), top-8 fixes doc
- **No code changes** in this pass (audit only)
