# First-time student experience — 2026-05-31

**Lens:** B.Sc. VWL, first visit to the public portal, Klausur in ~2 Wochen, Laptop + Handy (375px).
**Live:** https://emunteh-code.github.io/Volkswirtschaftslehre/
**Method:** Live browser walkthrough (landing → mikro1 `#budget` → statistik `#deskriptiv` → recht `#willenserklaerung` → mikro2 oligopol/Cournot), mobile emulation 375×812, cross-check with recent passes ([v4 exam-stress](./2026-05-31-student-exam-stress-evaluation-v4.md), [landing cleanup](./2026-05-31-landing-cleanup-pass.md) `6dc408d`, [theory recipe](./2026-05-31-theory-recipe-fleet-fill-pass.md) `fa18b6a`, [intuition fusion](./2026-05-31-theorie-intuition-fusion-pass.md), [learning visual](./2026-05-31-learning-visual-distinction-pass.md) `61b598a`, [Quellen-only provenance](./2026-05-31-theorie-sources-to-quellen-only.md), [object fix](./2026-05-31-visual-quality-object-object-fix.md) `3684a46`, [concept header](./2026-05-31-theorie-tab-visual-cards-pass.md) `4b9ca6d`).
**Checks requested:** `#budget/aufgaben`, mobile, Formeln/Quellen tabs, no „Mehr“ button, no beta badges on landing.

---

## 1. First 60 seconds — what you see, can you start?

You land on a calm Göttingen-branded page: **„VWL Lernportal — Wähle ein Modul, um mit der Klausurvorbereitung zu beginnen.“** Two shelves — **Prüfungsbereit** (Mikro I, Makro II, Statistik, Ökonometrie, Mathematik) and **Weitere Module** (Mikro II, Makro I, Finanz, Jahresabschluss, Recht, IWB). Mikro I is pre-selected; **Modul starten →** in the hero is the obvious next click.

**Can you start?** Yes, if you already know you need Mikro I or Statistik. **No guided panic path:** the old **„Klausur in 14 Tagen?“** block and activity strip (Lesen / Üben / Probeklausur) are **gone** on live (landing cleanup `6dc408d`). As a stressed first-timer I scroll past eleven tiles with **„A−:“** one-liners and nine **„Neu“** labels before I feel sure where to click. That reads more like a product changelog than exam week.

**Good:** No **Beta** badges on landing (confirmed). Footer / „Über dieses Portal“ honestly says ILIAS has the official PDFs.
**Rough:** Mikro II’s shelf line says **„VL-Quellen im Repo; Ergänzungen gekennzeichnet“** — I don’t know what a „Repo“ is in exam week. Recht’s tile shows **„7%“** with no explanation (looks like broken progress). **„Modul öffnen →“** on the shelf didn’t navigate in one click during this session; **Modul starten →** or typing `/mikro1/` worked.

---

## 2. First 15-minute session — path I’d take

1. **Landing** → **Modul starten →** (Mikro I).
2. Sidebar search or scroll to **Budgetmenge & Budgetgerade** (`Haushaltstheorie I · Stelle 2 von 6` — numbering finally makes sense).
3. Tab **Aufgaben** — cold link `…/mikro1/#budget/aufgaben` opens **Aufgaben** selected (pass). One stepped task, **Lösung anzeigen**, check **Minimale Beherrschungsziele** (human sentences, not `[object Object]`).
4. Tab **Formeln und Klausurmethodik** — formula cards, Einsatzgrenzen, Klausurmethodik with **Zur Vorlesung** (jumps to Quellen).
5. If Statistik is on the plan: `…/statistik/#deskriptiv/aufgaben` — many drill tasks + optional **R-Übung** tab later.

On phone (375px): **Seitenleiste öffnen** appears; hash routing still lands on **Aufgaben**. Usable, but lots of horizontal chrome before the task text.

---

## 3. What works well (specific, with module names)

| Area | Module | Why it helps exam prep |
|------|--------|-------------------------|
| **Theory recipe** | mikro1 (budget), recht (Willenserklärung) | Same spine everywhere: Lernziele → Kernidee → Formale Darstellung → Klausurtransfer → Fehler. Intuition is inside Kernidee (no separate Intuition tab). Reads like a structured Skript, not a wiki dump. |
| **Stepped Aufgaben** | mikro1, statistik | Many tasks per concept, Musterlösungen, VL-style numbers (budget: Drehpunkt, Parallelverschiebung). Best surface for active recall. |
| **Formeln + Klausurmethodik** | mikro1 | Tab name is discoverable; traps (Vorzeichen, Drehpunkt) are exam-focused; **Formel kopieren** works. |
| **Quellen** | mikro1 (and fleet pattern) | Single place for provenance: **Kursmaterialien in ILIAS öffnen**, disabled PDF buttons with honest copy, Seitenanker. Theorie tab is clean (no `platform-added-*` clutter there anymore). |
| **Hash routing** | mikro1, statistik, recht | `#budget/aufgaben`, `#deskriptiv/aufgaben`, `#willenserklaerung/theorie` open the right tab on cold load. |
| **Trust fixes** | fleet | No **Mehr** expand button on theory (0 matches). No **`[object Object]`** in body text. No beta badges on landing. |
| **Recht gutachten tone** | recht | Willenserklärung: § 130, Angebot/Annahme/Zugang in recipe cards; feels closer to Klausurstil than Mikro graphs. |
| **Mikro II breadth** | mikro2 | Live module home lists Monopol, Spieltheorie, Cournot/Stackelberg, intertemporal, Unsicherheit, GE blocks; **Supplemental** vs **Quelle** on cards helps filter Marktversagen add-ons. |

---

## 4. Still confusing or janky (with locations)

| Issue | Where | Student impact |
|-------|--------|----------------|
| **No exam-week landing guide** | `index.html` landing | Removed 14-Tage + activity chooser; I must invent my own plan under time pressure. |
| **Grading copy on every tile** | Landing shelves | Eleven **„A−:“** strings + **„Neu“** — noise; I can’t tell if „A−“ is your grade or mine. |
| **Developer-facing Mikro II line** | Landing, Mikro II tile | „VL-Quellen im Repo…“ — should be student language (ILIAS / Ergänzungen). |
| **Mystery „7%“** | Landing, Recht tile | Looks like a broken progress bar. |
| **Mikro II deep links don’t open concepts** | `mikro2/#oligopol/theorie`, `#cournot/theorie`, `#oligopol_cournot/theorie` | URL changes but main view stays **Modul-Übersicht** with concept cards — bad for bookmarks and WhatsApp links. mikro1 deep links work. |
| **PDFs not in browser** | Quellen tab (all modules checked) | **PDF nur lokal verfügbar** disabled — I still need ILIAS for VL PDFs every session. |
| **No ILIAS button on landing** | Landing hero / shelves | ILIAS only after I’m inside a module (Quellen) or in footer prose. |
| **Mikro II first-visit modal** | mikro2 module load | „Ignorieren / Verstanden & Weiter“ blocks the Cournot link I wanted. |
| **Module home information load** | mikro2 Übersicht | Dashboard, Schnelltest, Probeklausur, 18 concept cards — more choices than mikro1’s „pick a concept and drill“. |
| **Konzept-Check inconsistency** | mikro2 note on home | „Konzept-Check: Makro I, Statistik, Makro II“ — I’m in Mikro II wondering why there’s no Check here. |
| **Right-rail duplication** | mikro1 budget | Snapshot shows **Häufige Fehler** / **Verbindungen** both in recipe and side rail — same ideas twice on a narrow phone. |

---

## 5. Module grades (exam prep, honest)

Grades = *would I drill here daily for two weeks before the exam?*

| Module | Grade | One-line rationale |
|--------|-------|-------------------|
| **mikro1** | **A** | Deepest Aufgaben + Grafik + recipe; hash + mobile OK; my default drill home. |
| **statistik** | **A** | Strong deskriptiv/induktiv tasks; R-Übung adds transfer; same shell quality as mikro1. |
| **makro2** | **A−** | (Inferred from shelf + fleet parity; not deep-spotted this session.) |
| **oekonometrie / mathematik** | **A−** | (Inferred — core shelf, R where relevant.) |
| **recht** | **B+** | Theory recipe + Gutachten path good; fewer interactive drills than mikro1; **7%** on landing undermines trust. |
| **mikro2** | **B** | Content breadth improved, but module-home deep links fail and overview is busy; oligopol exam topics need sidebar click, not shared URL. |
| **makro1 / finanz / jahresabschluss / IWB** | **B** | (Inferred from landing copy + v4 — usable structure, less time spent drilling than mikro1.) |

---

## 6. Would you rely on this alone for the exam?

**No** — not as the only source.

**I would pair it with:**

- **ILIAS** — official VL PDFs, Übungsblätter, ggf. Altklausuren (portal states this clearly; Quellen tab links out).
- **Own Übungsgruppe / Tutoriumsblätter** — especially Recht (Gutachten-Feedback) and Statistik (Beweise, R-Skripte if WebR feels toy-like).
- **Mikro II** — I'd still cross-check oligopol/game theory against VL slides because deep links and supplemental chapters need manual filtering.

**Where the portal *is* primary:** mikro1 and statistik **Aufgaben** loops (theory → formeln → aufgaben → quellen) for calculation-heavy weeks.

---

## 7. Top 5 fixes still needed (student-prioritized)

1. **Restore a minimal exam-week entry on landing** — not necessarily the full old 14-Tage UI, but one obvious „Start: Mikro I Aufgaben“ / „Statistik Üben“ path for first visit (addresses `6dc408d` removal).
2. **Ship clickable VL PDFs or course-specific ILIAS deep links** — disabled PDF buttons are honest but painful every day.
3. **Fix mikro2 concept hash routing** — `#cournot/theorie` (and oligopol ids) should open the concept, like mikro1.
4. **Studentize landing tiles** — drop or hide **„A−:“** / **„Neu“** / **„Repo“** / unexplained **„7%“**; one plain sentence per module.
5. **One ILIAS CTA on landing** — same button as Quellen footer, above the fold for first-timers.

**Next five (if bandwidth):** landing **Modul öffnen** reliability; reduce right-rail duplication on mobile; fleet **Konzept-Check** or one line explaining why only some modules have it; mikro2 skip or shorten first-visit modal for returning deep links.

---

## 8. One paragraph verdict

Two weeks before the exam, this portal already feels like a **serious drill companion** for **Mikro I and Statistik**: I can land on `#budget/aufgaben`, work stepped tasks with real Musterlösungen, skim a consistent theory recipe, and pull VL page refs from **Quellen** without developer junk in the text. Recent polish (recipe fleet, intuition merged into Theorie, Formeln tab, no „Mehr“, no `[object Object]`, provenance only on Quellen) shows up on live and matters. What holds it back for a panicked first visit is the **stripped landing** (no „do this now“), **marketing-style A−/Neu tiles**, and **Mikro II deep links that don’t open lectures**. I wouldn’t cancel ILIAS or Übungsblätter — but I’d happily spend most calculation days here for mikro1/statistik and use Recht/Mikro II as structured review, not my only script.

---

## Live verification checklist (this session)

| Check | Result |
|-------|--------|
| Landing: no beta badges | **Pass** |
| Landing: no `#exam-cram-plan` / activity chooser | **Absent** (by design post-`6dc408d`) |
| `#budget/aufgaben` → Aufgaben active | **Pass** |
| Mobile 375px: drawer + Aufgaben | **Pass** |
| Formeln tab | **Pass** (mikro1 budget) |
| Quellen tab + ILIAS link | **Pass** |
| No „Mehr“ button | **Pass** (0 on mikro1) |
| No `[object Object]` in mastery | **Pass** |
| mikro2 oligopol/Cournot deployed | **Pass** (module loads; concept hash **fail** → home) |
| recht Willenserklärung theory | **Pass** |

**Browser:** live GitHub Pages, 375×812 emulation on mikro1.
**No code changes** in this pass.
