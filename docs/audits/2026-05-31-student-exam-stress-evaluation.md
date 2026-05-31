# Student exam-stress evaluation — 2026-05-31

**Evaluator lens:** B.Sc. VWL student, first visit, ≤14 days to exam, mobile + laptop, high cognitive load.  
**Live URL audited:** https://emunteh-code.github.io/Volkswirtschaftslehre/  
**Method:** Independent journey on deploy (landing → mikro1, statistik, mikro2, recht, IWB sample) + tab cycling + code/audit cross-check. Prior audits read for context; findings below are from this session.

---

## 1. Student verdict

I would **use this portal as a structured study companion for Mikro I and Statistik**, especially for theory recap, stepped Aufgaben, and interactive graphs — but **I would not treat it as my only exam source** on the public URL. The moment I need the official VL PDF the platform points at (`source-materials/…`), I hit a dead end on GitHub Pages. That breaks trust exactly when exam stress peaks. Beta modules (Mikro II, Recht, IWB) are usable for revision, but the mix of “Prüfungsbereit” badges, “Beta” badges, supplemental chapters, and “partial · not yet represented” Klausurfamilien forces me to constantly judge what is “real exam scope” instead of just learning.

---

## 2. What works well

- **Mikro I content depth** — Concepts like Budgetmenge ship with Lernziele, formal definitions, numerische Beispiele, warn-boxes, and VL page refs; this is genuinely exam-oriented, not filler.
- **Stepped Aufgaben with reveal** — Budget/Aufgaben tab exposes multiple tasks with “Lösung anzeigen”, step lists, and Musterlösungen; fast path to active practice (~3–4 clicks from module home).
- **Honest simulation labeling** — “Plattform-Simulationen — keine offiziellen Klausur-PDFs” on Probeklausur cards and landing policy note sets correct expectations.
- **Resume affordances** — Module home “Weitermachen …” card and landing hero “Fortsetzen →” when progress exists; localStorage resume is discoverable.
- **Klausurmethodik accordion (Formeln tab)** — Post-redesign cards with Ziel / Vorgehen / Typische Klausurfrage / Häufiger Fehler are scannable; difficulty chips help triage under time pressure.
- **Tier shelf copy** — “Prüfungsbereit — empfohlener Einstieg” plus explicit “kein Qualitätsranking — Beta-Module ebenfalls nutzbar” reduces badge panic if you read it.

---

## 3. Critical friction (would make student leave or fail)

| # | Issue | Severity | Evidence |
|---|--------|----------|----------|
| C1 | **Official PDFs unavailable on deploy** | Critical | `curl -I …/source-materials/` → **404**. Quellen tab shows disabled **“PDF nur lokal verfügbar”** buttons (statistik/deskriptiv). Student cannot open VL primary sources from the product they were sent. |
| C2 | **Mobile layout broken at 375px** | Critical | Browser at 375×812: module home collapses into a narrow left strip with ~75% empty viewport; sidebar “Seitenleiste öffnen” required for navigation; tab row + right rail unusable without extra taps. Unacceptable for “mobile + laptop” exam cram. |
| C3 | **Deep links ignore tab hash** | Critical | `#budget/aufgaben` and `#gravitation/formeln` load concept but stay on **Theorie** until manual tab click. Bookmark/share “go practice this concept” links fail the stated intent. |

---

## 4. Major friction

| # | Issue | Severity | Evidence |
|---|--------|----------|----------|
| M1 | **Klausurmethodik hidden inside “Formeln”** | Major | Exam-method content lives on Formeln tab, not Aufgaben; name suggests formula sheet only. Student hunting “how do I solve this in the exam?” must discover sub-tab logic. |
| M2 | **Concept numbering gaps** | Major | mikro1 home cards: Konzept **7 → 13** (Haushaltsoptimum). statistik: **8 → 12 → 9 → 10 → 14 → 11**. Under stress reads as missing content or broken build. |
| M3 | **Landing PDF policy uses dev path** | Major | `index.html`: “PDFs liegen nur lokal unter `source-materials/`” — meaningless on GH Pages; feels like the product is not for students, only for repo clones. |
| M4 | **Information triplication** | Major | Same formulas/errors appear in main Theorie, right rail, and Quellen tab; cognitive load deciding which surface is authoritative. |
| M5 | **Beta / supplemental signaling overload** | Major | mikro2 tile on landing includes long `sourceStatusNote`; concepts 14–16 tagged **Supplemental**; theory blocks carry `source-boundary-notice`. Necessary honesty, but exhausting when choosing what to study. |
| M6 | **Klausurfamilien “partial · not yet represented”** | Major | IWB/gravitation Formeln → Klausurmethodik footnote: “Portalabdeckung: concept tasks · partial · not yet represented”. Under ≤14-day stress this reads as “don’t trust this for the exam”. |
| M7 | **jsError fallback in accessibility tree** | Major | Hidden `#jsError` overlay (6s timeout on HTTP) still appears in page snapshots alongside live content; screen-reader users may hear “JavaScript-Module konnten nicht geladen” even when app works. |
| M8 | **First-impression onboarding tone** | Major | Landing onboarding: “Hard Zero”, “Pfad-Abhängigkeit”, “strenge Logikbewertung” before any module — intimidating before value is shown. |
| M9 | **Hash → home flash on cold load** | Major | Direct concept URLs often paint module **home grid** first; student must click concept or “Weitermachen” before tabs appear (~5–10s lost on first visit). |

---

## 5. Module-by-module mini grades (exam-prep usefulness)

| Module | Grade | Rationale |
|--------|-------|-----------|
| **mikro1** | **A** | Deepest theory, graphs, stepped Aufgaben, Lernziele, warn-boxes; best “could I pass from this?” yes for core micro I topics — still need PDFs for edge cases. |
| **statistik** | **A−** | Strong DS1-style theory (Klausurzugriff sections, IQR/Boxplot logic); extra R-Übung tab; concept numbering chaos hurts trust. |
| **makro2** | **A−** | Prüfungsbereit tier; not deeply browsed live this session but structurally peer to mikro1 per fleet audits. |
| **mikro2** | **B** | Live, 18 concepts, good oligopoly/game-theory depth; supplemental market-failure block + beta badge + long landing note = student must self-filter scope. |
| **recht** | **B** | Clear Gutachten-oriented theory (Willenserklärung, §130 BGB); text-heavy; no graph intuition; adequate for BGB-AT revision, not sole source. |
| **IWB** | **B−** | 16 concepts structurally complete; theory ~4 short blocks vs mikro1’s multi-section depth; Klausurfamilien often “partial”; GDPᵢ math **renders correctly** on deploy (title-math pass verified live). |
| **oekonometrie / mathematik** | **A−** (inferred) | Core tier, not live-spotted this session; same shell as statistik. |
| **makro1 / finanz / jahresabschluss** | **B** (inferred) | Beta tier, structural A+ per audits; depth below mikro1 benchmark. |

---

## 6. Ideal 15-minute study session vs platform reality

### Ideal (what a stressed student wants)

1. Open portal → **instant resume** last weak topic (30s).
2. Skim **one-page exam hook** for that topic (2 min).
3. Do **2 guided Aufgaben** with step hints, not full solutions upfront (8 min).
4. Hit **one Klausurmethodik card** (“typische Falle + 5-step method”) (3 min).
5. Mark weak point for **SRS / dashboard** tomorrow (1 min).

### Reality on deploy today

1. Landing → read tier notes + simulation policy + onboarding modal (**60–90s**, many policy decisions).
2. Pick module → module home with **6 action cards** (Dashboard, Schnelltest, Gemischter Schnelltest, Wiederholung, Probeklausuren, concept grid) — no single “continue weakest topic” beyond Weitermachen if prior visit exists.
3. Select concept → default **Theorie** tab (long scroll); Klausurmethodik requires **Formeln** tab discovery.
4. Switch to **Aufgaben** manually even when URL says `/aufgaben`.
5. Quellen tab → **PDF buttons disabled**; student leaves for Drive/ILIAS anyway.
6. On phone: open sidebar → concept → tabs → scroll; layout fight consumes minutes.

**Time to first practice problem (mikro1, warm session):** ~**2–3 min** (home → Weitermachen → Aufgaben).  
**Time cold start with onboarding + concept pick:** ~**5–7 min**.  
**Time if student expects PDF from Quellen:** **dead end**.

---

## 7. Top 8 fixes ranked by student impact

1. **Ship readable PDFs on deploy** (or a single “Kursmaterialien herunterladen” bundle) — without this, Quellen tab and “source-faithful” promise fail for real students.
2. **Fix mobile shell at 375px** — sidebar drawer, full-width content, sticky tab row; exam cram is often on phone.
3. **Honor `#concept/tab` in routing** — `/aufgaben` must open Aufgaben; shareable links must work.
4. **Rename or split Formeln tab** — e.g. “Formeln & Klausurmethodik” or move Klausurmethodik to Aufgaben header; reduce exam-method hide-and-seek.
5. **Sequential concept labels** — remove global Konzept N gaps or replace with chapter-local “Stelle 2 von 6” only (sidebar already has this).
6. **Landing “14-Tage-Plan” CTA** — one sentence + button: “Exam in Mikro I? Start here → Budget + 3 Aufgaben” instead of module shelf alone.
7. **Fleet-wide Konzept-Check or remove** — feature exists in portal-core but only **makro1** wires `KONCEPT_CHECK_HOME_ACTION_CARD_HTML`; students see inconsistent quick-drill surface.
8. **Student-facing PDF messaging** — replace `source-materials/` with “Offizielle PDFs: ILIAS / Vorlesungsordner” + disable Quellen PDF buttons until deployable, not after click.

---

## Appendix — evaluation sections A–G (severity + evidence)

### A. Usefulness & first impression

| Question | Assessment |
|----------|------------|
| Landing: “what do I do now?” | **Partial.** Hero + Prüfungsbereit shelf + tile selection answer it for *which module*; not *which activity* (read vs drill vs mock exam). |
| Trusted core vs beta badges | **Mostly helpful** if student reads shelf note; **stressful** if they treat Beta as “will fail exam” despite copy saying otherwise. mikro2 landing tile wall of text is harmful. |
| Resume path clarity | **Good** on second visit (Weitermachen, Fortsetzen); **weak** on first visit and on deep links. |

### B. Confusion points

1. **Navigation / tab order** — Theorie → Grafik (mikro1) → Aufgaben → Formeln → Intuition → Quellen; Quellen last is logical for provenance but far from practice flow.
2. **Quellen vs sidebar vs right rail** — Three parallel concept indexes + rail duplicates formulas/errors.
3. **Klausurmethodik location** — Inside Formeln; intro text says Aufgaben for drills, Quellen for anchors — method sits in third place mentally.
4. **PDF “nur lokal”** — Technically accurate, **student-frustrating** on public URL; reads as broken product not honest boundary.
5. **Platform-Übung labeling** — Clear on Probeklausuren; less visible on individual Aufgaben (student may assume official Übungsblatt parity).
6. **mikro2 hidden/live** — **Resolved:** live in `modules.js`; beta tier; supplemental chapters labeled on home cards.
7. **Concept numbering gaps** — mikro1, statistik (see M2).
8. **Math in titles (GDPᵢ)** — **Fixed on deploy** (IWB gravitation Formeln + Theorie render subscripts correctly; screenshot 2026-05-31).

### C. Quality of explanations (Theorie tab)

Sampled concepts:

| Concept | Module | Pass from text alone? | Density |
|---------|--------|----------------------|---------|
| Budgetmenge & Budgetgerade | mikro1 | **Likely yes** for standard Klausur tasks (Achsenabschnitte, rotation, numerical example) | Rich; warn-boxes actionable |
| Deskriptive Statistik | statistik | **Likely yes** for interpretive DS questions | Strong Klausurzugriff; VL n vs n−1 called out |
| Willenserklärung | recht | **Partial** — good structure, but exam needs norm citation drill | Medium; needs more worked Gutachten |
| Gravitation | IWB | **Partial** — intuition + exam hook, not full derivation | Thin vs mikro1; supplement blocks add noise |

**Warn-boxes:** Helpful in mikro1/recht (e.g. Fehlgriff on gravitation as non-welfare model).  
**Klausurtransfer sections:** Present but sometimes generic (“Modell wählen → Mechanismus → Folge”); IWB adds source-status disclaimer that dilutes actionability.

### D. Value for exam preparation

| Surface | When to use | Gap |
|---------|-------------|-----|
| **Aufgaben** | Primary drill per concept; stepped solutions | Best path; buried behind tab discovery |
| **Klausurmethodik (Formeln)** | Exam typology, traps, method | Good content, poor discoverability |
| **Schnelltest** | 20-min mixed recall | Useful; simulation not official |
| **Probeklausur** | End-to-end timing | Labeled simulation; no official items |
| **SRS / Wiederholung** | Due cards | Exists; low visibility vs six home cards |
| **Dashboard** | Weak areas | Behind extra click; local-only disclaimer |

**Missing for A+ prep:** Official PDF access, fleet-wide Konzept-Check, weak-topic auto-queue, mock exams aligned to *this* university’s past papers, mobile-first drill mode.

### E. Quality of example questions

- **Aufgaben:** mikro1/budget — multiple tasks, steps, results, variable glossary; strong.
- **Klausurfamilien accordion:** Improved scannability; still dense on IWB with registry jargon (“Portalabdeckung: partial”).
- **Konzept-Check:** Infrastructure in `portal-core`; **only makro1** mounts home card + items file — fleet gap (user myth: “only mikro1” is inverted in code).

### F. Flow of information

- **Tab order logic:** Teach (Theorie) before drill (Aufgaben) before reference (Formeln/Quellen) — pedagogically sound, exam-cram unfriendly.
- **Decisions per screen:** Landing (~11 modules + filters + about); module home (~6 cards + 33 concept buttons on mikro1) — high.
- **Mobile 375px:** See C2 — **fail**.

### G. Emotional / trust factors under stress

- **False errors:** jsError overlay hidden when JS loads; still in DOM/a11y; 6s delay could flash on slow mobile networks.
- **Broken Quellen:** Disabled PDFs — trust hit (C1).
- **Walls of text:** mikro2 landing tile note, recht theory blocks, Klausurmethodik + formula cards stacked on Formeln tab.
- **Positive trust:** Simulation honesty, supplemental labeling on mikro2 market failure, progress stored locally (privacy-safe message).

---

## Session metadata

- **Browser checks:** landing, mikro1 (#budget), statistik (#deskriptiv), mikro2 (#spieltheorie_statisch), recht (#willenserklaerung), IWB (#gravitation)
- **Deploy PDF test:** `source-materials/` → 404
- **Prior audits consulted:** `2026-05-30-multi-domain-quality-inspection.md`, `2026-05-31-final-release-blockers-pass.md`, `2026-05-31-klausurmethodik-visual-pass.md`, `2026-05-31-title-math-latex-pass.md`
- **No code changes** in this pass (audit only)
