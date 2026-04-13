# End-to-end student study-flow validation — Pass 1

**Date:** 2026-04-12  
**Priority:** User-critical, pedagogy-critical, trust-critical, product-reality-critical.

---

## Executive status (read first)

**Real moderated user sessions were not executed in this pass.** There is no substitute here for think-aloud studies with students under time pressure. This document therefore:

- Supplies a **ready-to-run** task battery, observation lens, and results tables for facilitators.
- States **completion criteria** (Part 12) as **not met** until at least one session row in Table A is filled from **observed** behavior (not builder intuition).
- Does **not** claim learning outcomes, trust behavior, or PDF-fallback triggers from automated checks alone.

**To complete Pass 1:** Run 3–6 sessions (mix of profiles in Part 5), fill Tables A–D, then rewrite Sections 1–7 and Part 9 from those notes only.

---

## Part 1 — Test scope (routes and surfaces)

| Layer | Routes / modules | Surfaces to hit |
|-------|------------------|-----------------|
| **Landing** | Repo root `index.html` | Trusted-core bundling, copy on module depth, links to live modules |
| **Trusted core** | `mikro1`, `statistik`, `recht`, `oekonometrie` | Full tab progression per concept |
| **Secondary** | At least one of: `makro1`, `makro2`, `mathematik`, `finanzwirtschaft`, `internationale-wirtschaftsbeziehungen` | Same progression where tabs exist |
| **Cross-cutting** | Any chosen concept above | Theorie → (Formeln / Grafik as available) → Aufgaben → Prüfungstransfer; `Häufige Fehler`; `Verbindungen`; provenance footer; R tab on Ökonometrie where present |

---

## Part 2 — User task design (concrete goals)

Give each tester **one task block** per session (20–35 minutes). Do **not** tour the UI first; hand them the written goal only.

### Task set A — Navigation & entry (10 min)

**A1.** *“You have 45 minutes before a Mikro I exam on the household budget. Starting from the portal home page, open the module you would actually use and navigate to the concept that matches ‘Budgetgerade / Budgetmenge’. Say when you think you’ve arrived at the right place.”*

**A2.** *“Without using external search: from the home page, decide whether Statistik, Ökonometrie, or Mathematik is the best place to refresh ‘Hypothesentest / p-Wert intuition’. Open that module and stop on the first concept page you would trust for that topic.”*

### Task set B — Trusted core study loop (20 min)

**B1 (Mikro I).** Concept: e.g. `budget` (adjust to your syllabus). *“Read Theorie until you can state in one sentence what the slope of the budget line means economically. Then do **one** guided Aufgabe step without opening the solution. Finally open Prüfungstransfer and answer whether you could do the compact drill cold.”*

**B2 (Statistik).** Concept: e.g. `testen` or `deskriptiv`. *“Use Theorie + Grafik (if available for that concept) to explain Type-I vs Type-II in your own words, then complete one Aufgaben item that touches tests.”*

**B3 (Recht).** Concept: e.g. first chapter in syllabus. *“Find the schema or structure the module uses for your topic. Explain the legal logic in speech as if to a classmate, using only the portal (then note anything you still wanted from the statute/PDF).”*

**B4 (Ökonometrie).** Concept: e.g. `matrix_notation` or `ols_objective`. *“Follow Theorie, then open **R-Anwendung**, run or read the block as instructed, and state what single output line you would cite in an exam answer.”*

### Task set C — Secondary module stress (12 min)

**C1.** *“Pick one non-core module from the catalogue that you might use for cross-training. Repeat only Theorie → Aufgaben on one concept. Note where you lost confidence compared to Mikro I / Statistik.”*

### Task set D — Trust probes (post-task, 5 min)

Ask only **after** the task:

1. *“Where would you go if this page disagreed with your memory of the lecture?”*  
2. *“Did you notice the small line at the bottom about sources / basis?”*  
3. *“Would you trust browser-R the same as RStudio for an assignment?”*

---

## Part 3 — What to observe (facilitator checklist)

Use tick marks + short quotes per session.

- **A. Navigation:** first click, time to correct module, confusion on landing hierarchy.  
- **B. Study flow:** order of tabs used vs intended; skipped Prüfungstransfer / never opened Formeln.  
- **C. Trust:** mentions of “official slides”, “PDF”, “doesn’t say where this is from”; overconfidence phrases.  
- **D. Comprehension:** can they summarize without rereading; graph narration quality; R tab overload.  
- **E. Friction:** hesitations >5 s, mis-clicks, scroll rage, “where is…”.  
- **F. PDF fallback:** any explicit prefer-PDF moment — **capture verbatim**.

---

## Part 4 — Trust-misuse risks (explicit watch list)

Facilitators tick if observed during session:

| Risk | Observed? | Notes |
|------|-------------|-------|
| False confidence (smooth UI, thin understanding) | ☐ | |
| Wrong entry path (weak route / wrong tab first) | ☐ | |
| Graph overtrust | ☐ | |
| R overtrust (browser = authoritative) | ☐ | |
| Ignored Häufige Fehler / Verbindungen / provenance | ☐ | |

---

## Part 5 — Tester profile (record per session)

| Session ID | Profile (strong / average / low patience) | Prior portal familiarity | Date |
|------------|---------------------------------------------|---------------------------|------|
| S1 | *pending* | *pending* | |
| S2 | *pending* | *pending* | |
| S3 | *pending* | *pending* | |

---

## Part 6 — Method (lightweight)

1. Quiet room or stable video call; screen share optional.  
2. Read task **only**; no UI tour.  
3. Encourage think-aloud; minimize prompting.  
4. After task, use **Task set D** probes.  
5. Facilitator fills Tables A–D same day.

---

## Part 7 — Required output tables

### Table A — Study-flow task results

| Tester | Task | Completed successfully? | Major friction points | Trust behavior observed | Learning outcome quality | Notes |
|--------|------|-------------------------|------------------------|---------------------------|----------------------------|-------|
| *—* | *—* | *No sessions run* | *—* | *—* | *—* | Fill after S1… |

### Table B — Feature usage / neglect

| Feature / surface | Noticed? | Used? | Used correctly? | Helped? | Problem observed? |
|--------------------|----------|-------|-----------------|---------|---------------------|
| Trusted-core selection | | | | | |
| Theorie | | | | | |
| Aufgaben | | | | | |
| Prüfungstransfer | | | | | |
| Graph | | | | | |
| Häufige Fehler | | | | | |
| Verbindungen | | | | | |
| Provenance footer | | | | | |
| R tab (Ökonometrie) | | | | | |

*Fill per session or aggregate after 3+ sessions.*

### Table C — Most serious user-facing problems

| Problem | Where it occurred | Why it matters | Severity (1–5) | Recommended fix |
|---------|-------------------|----------------|------------------|-------------------|
| *—* | *—* | *—* | *—* | *—* |

### Table D — Reasons users still revert to PDFs

| Trigger | Module / surface | What the user wanted instead | Severity (1–5) | Recommended response |
|-----------|------------------|------------------------------|------------------|------------------------|
| *—* | *—* | *—* | *—* | *—* |

---

## Part 8 — Required written sections

### 1. What real users understood immediately

*Pending user data.*

### 2. What they misunderstood or missed

*Pending user data.*

### 3. Where the portal genuinely helped learning

*Pending user data.*

### 4. Where the portal still lost to PDFs

*Pending user data.*

### 5. Where the portal created false confidence or trust confusion

*Pending user data.*

### 6. What should be fixed next based on actual student behavior

*Pending user data. Do not use this section for backlog from internal audits until sessions exist.*

### 7. Whether the trusted core actually works as intended in practice

*Pending user data.*

---

## Part 9 — Final judgment (only after sessions)

Answer from **observed behavior** only. Until then:

1. **Can real students use the trusted core effectively without guidance?** — *Not evidenced in this pass.*  
2. **Does the portal genuinely improve study flow over scattered PDFs in practice?** — *Not evidenced in this pass.*  
3. **Which features are actually valuable to users?** — *See Table B after sessions.*  
4. **Which features are mostly theoretical or ignored?** — *See Table B after sessions.*  
5. **What are the top 5 user-behavior-based fixes now?** — *Derive only from filled Table C after sessions.*  
6. **Is the portal ready to be shown more broadly as a serious study companion?** — *Requires explicit criterion (e.g. ≥4/5 sessions complete core loop without PDF fallback) — not decided here.*

---

## Part 10 — Non-substitutes (explicit)

The following **do not** satisfy this pass’s completion rule:

- Code review, audit markdown, or trust-regression Playwright runs alone  
- Builder walkthrough or AI-simulated “as a student” narrative without participants  
- “Users would probably…” reasoning

---

## Part 11 — Deliverables checklist

| Deliverable | Status |
|-------------|--------|
| `docs/audits/end-to-end-student-study-flow-validation-pass-1.md` (this file) | **Delivered** — protocol + tables + incompleteness |
| Code changes from this pass | **None** (per scope: no tiny fix required to ship this document) |

---

## Part 12 — Completion rule

**Pass 1 is incomplete** until Table A contains at least **one row** derived from a **real** moderated session (think-aloud or structured task completion with observation notes), and Sections 1–7 plus Part 9 are revised to cite those observations.

**Success (when complete):** The next improvement phase is grounded in **observed** study behavior, not only internal logic.

---

## Appendix A — Optional supplementary material (does not replace users)

- **Automated:** `tools/clickthrough/trust-regression-pass-1.mjs` covers structural trust (math leaks, provenance strip presence, graph shell, R shell, etc.) — useful regression safety, **not** learning effectiveness.  
- **Existing audits:** Cross-link for internal context only: `docs/audits/public-core-certification-pass-1.md`, `docs/audits/trusted-core-publication-layer-pass-1.md`, provenance/R passes — **do not** paste their conclusions into Table A as if they were user sessions.

---

## Appendix B — Session log template (copy per session)

```
Session ID:
Date:
Tester profile:
Task ID (A1/B1/…):
Start time / End time:
Tabs used in order:
Verbatim PDF / trust quotes:
Facilitator 3-line summary:
Table A row filled: yes/no
```
