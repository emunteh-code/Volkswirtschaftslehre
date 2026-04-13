# Public-core certification — Pass 1

**Date:** 2026-04-12  
**Scope:** The four trusted-core modules only: **mikro1**, **statistik**, **recht**, **oekonometrie**.  
**Nature:** **Certification decision** — not a new hardening sweep and not a line-by-line re-audit. Evidence base: `public-core-module-hardening-pass-1.md`, `trusted-core-publication-layer-pass-1.md`, concept-level source-diff passes **2 (mikro1)**, **3 (statistik)**, **4 (recht)**, **5 (oekonometrie)**, and the current **trust-regression-pass-1.mjs** coverage described in the hardening audit.

---

## Certification table (required)

| Module | Source-diff result | Rendering trust | Pedagogy trust | Public representativeness | Remaining trust debt | Certification tier | Required caveat | Recommended public role |
|--------|-------------------|-----------------|----------------|---------------------------|------------------------|----------------------|-----------------|---------------------------|
| **mikro1** | **Material:** VL PDF text diffed for audited concepts; real mismatches fixed (e.g. KMM Additivität, Budget/VL1 bridge, GRS task rhetoric). **Partial:** 33 concepts not exhaustively diffed in one pass (`public-core-concept-level-source-diff-pass-2-mikro1.md` coverage gap). | **High** on trust-regression surfaces (e.g. budget Theorie/Formeln, lagrange Formeln, graph, Prüfungstransfer on mikro1); not universal proof for every tab of every concept. | **Strong:** breadth, graphs, drills, intuition loop; benchmark depth for the repo. | **Yes** — first-click still shows a coherent, high-quality economics companion. | **Moderate but bounded:** compressed synthesis vs. full slide map; some concepts only spot-checked. | **certified public-core module** | Not a slide-for-slide substitute; pair with official VL/Übung. | **flagship core module** |
| **statistik** | **Material** on audited slices (deskriptiv, testen, bivariat, schaetzen CI): VL-aligned fixes (p-Wert wording, Ablehnungsbereich, n vs n−1 honesty, H₀ notation). **Gaps:** many chapters not in pass 3 scope; `nichtparametrisch` still has **empty** primary `source_refs` per provenance pass 1. | **High** on scanned routes (deskriptiv/bivariat Theorie+Formeln, graph, reveal); MathJax edge cases always possible in principle. | **Strong** on revision structure; inference-heavy paths improved where touched. | **Mostly yes**, but a skeptical statistician can still hit unaudited concepts or the provenance hole. | **Moderate:** partial VL coverage; one concept without file-level anchor; subtle inference wording can always regress without discipline. | **public-core module with explicit caution** | Use **with** VL/Tutorium; do not treat every chapter as VL-certified from pass 3 alone. | **strong core module** |
| **recht** | **Material:** VL §1, §2, §3 content expanded/corrected in portal (Gewaltenteilung, Rechtsquellen, Radbruch context; Strafrecht-Dreieck; Gutachtenstil **einleitender Obersatz + Merkmalsketten**, Konjunktiv II / Indikativ; removal of IRAC drift in one task). Not a full doctrinal map of all 14 units line-by-line. | **High** on scanned surfaces (was_ist_recht Theorie+Formeln, Aufgaben reveal); semantic/legal schema complexity remains a maintenance risk. | **Strong** on method, sequence, exam-style scaffolding; case depth limited by design. | **Yes** for structure and “how to write”; **no** as stand-alone legal authority. | **Moderate:** black-letter nuance and exam-board variance need human legal QA beyond repo PDFs. | **public-core module with explicit caution** | Companion to **named** VL/Übung PDFs, not a codex replacement. | **core module with visible caution** |
| **oekonometrie** | **Material:** Critical **formula/teaching** errors corrected (Gauss–Markov display; F-test/ANOVA null wording; t-test assumptions/df sentence). **Gaps:** 32 concepts — only a subset audited in pass 5; mega-PDF `Einf_WiSe2024.pdf` without page anchors. | **High** on scanned Formeln + R tab + matrix_notation reveal; **graph integrity loop in trust-regression does not include** oeko graphs (see pass 5 notes) — automation gap. | **Strong** curriculum spine (matrix → OLS → inference → diagnostics); R didactic, not a full computing course. | **Mixed:** technical face is impressive; a hostile expert can still probe unaudited shortcuts. | **Moderate–major for breadth:** notation + R + graphs dense; only high-blast-radius slices were fixed in pass 5. | **public-core module with explicit caution** | Pair with Übung scripts + tables; graphs/R are pedagogical, not authoritative replication. | **strong core module** |

---

## 1. what the public core has actually earned

The four modules are **not** interchangeable certificates. What the work **actually** earned is:

- **A shared engineering baseline:** extended **trust-regression** (math-leak scans, provenance footers, Aufgaben reveals, selected graphs, Ökonometrie R shell, mikro1 Prüfungstransfer) plus **file-level provenance** curation for each module (`*-provenance-curation-pass-1.md`), documented in `public-core-module-hardening-pass-1.md`.
- **A real, uneven layer of academic hardening:** **mikro1** and **statistik** received **concept-level VL/PDF diffs** with **recorded fixes**; **recht** received a **substantive doctrinal/method correction** pass against named VL PDFs; **oekonometrie** received **targeted econometric correctness fixes** where errors were objectively wrong (not merely stylistic).
- **A honest boundary:** none of the passes claim **exhaustive** hostile line-by-line certification of **every** concept, graph, and R line against **every** page of every PDF.

**Bluntly:** the public core has earned **“best supported four in this repo + regression-locked key surfaces + partial but real source-diff improvements.”** It has **not** earned **“safe as sole primary source for exams without official materials.”**

---

## 2. which modules now truly deserve to represent the portal

- **mikro1** — **Yes**, as the **flagship**: strongest combination of **product depth**, **VL-diff evidence** (pass 2), and **regression coverage**. It is the only module this pass awards **Tier 1 — certified public-core module**.
- **statistik, recht, oekonometrie** — **Yes, as recommended entry points**, but **only with visible caveats** (Tier 2). They strengthen the portal’s reputation **if** the landing copy does not flatten them to the same trust level as mikro1.

---

## 3. which modules still remain caution-heavy

- **statistik** — partial concept coverage in pass 3; **nichtparametrisch** provenance gap; inference language always sensitive to regression.
- **recht** — legal nuance and exam norms **outside** what PDF anchoring alone can guarantee; structured companion, not treatise.
- **oekonometrie** — **breadth** of unaudited curriculum + **graphs/R/notation** triad; automated graph pass gap for this module.

**mikro1** is **less** caution-heavy than the other three but is **not** “caution-free” in an absolute sense (coverage gap + distillate framing remain true).

---

## 4. whether the trusted core should stay unchanged or be revised

**Recommendation:** **keep all four but tier them internally.**

**Defense:**

- **Demoting** any of the four would **contradict** the documented improvement trajectory without a replacement that beats them on **combined** source anchors + UX + regression evidence.
- **Promoting all four to one flat “certified” label** would **overclaim** given the **uneven** depth of concept-level diffs and the **known** gaps (Statistik provenance hole, Ökonometrie partial audit, Recht legal QA ceiling).
- **Internal tiering** (flagship vs. caution trio) matches the **evidence**: one **Tier 1**, three **Tier 2 with explicit caution**, same landing grid, **sharper** public wording in marketing/About text **without** removing tiles.

---

## 5. what public-facing claim about the trusted core is now actually honest

**Use a claim shaped like:**

> „**Empfohlener Einstieg:** Vier Module mit den stärksten Kombinationen aus Kursankern im Repository, durchgängiger Plattform-Implementierung und automatisierten Vertrauenschecks auf zentralen Oberflächen. **Mikro I** ist dabei das am stärksten **zertifizierte** Flaggschiff; **Statistik, Recht und Ökonometrie** bleiben **empfohlen**, aber **ausdrücklich begleitend** zu den offiziellen Materialien und mit sichtbaren Grenzen der Prüfungstiefe.“

**Shorter variant (safe):**

> „Die vier empfohlenen Module sind die **am besten abgesicherten Einstiege** dieses Portals (Anker-PDFs + Regressionsschutz + gezielte Quellen-Härtungen); sie **ersetzen** weder Vorlesung noch Übung.“

---

## 6. what still cannot be claimed even after hardening

- **Not:** „Vollständig gegen alle VL-Folien Zeile für Zeile zertifiziert.“
- **Not:** „Jede Aufgabe, jeder Graph und jedes R-Skript ökonometrisch/juristisch **bewiesen**.“
- **Not:** „Rechtstext mit unabhängiger juristischer Sign-Off-Garantie.“
- **Not:** „Statistik ohne Risiko subtiler Inferenz- oder Notationsdrift bei künftigen Edits.“
- **Not:** „Ökonometrie-Graphiken sind in jeder CI-Lauf automatisch auf ökonometrische Korrektheit geprüft.“
- **Not:** „Primärquelle für Prüfung statt offizieller Kursunterlagen.“

---

## Special focus (required)

### mikro1

**Still the benchmark — not only polish.** Pass 2 shows **concrete VL mismatches found and fixed** (assumption lists, budget framing, GRS economic wording). The **reputation** rests on **integration + evidence**, not styling alone. **Tier 1** is justified **with** the caveat that **not every** concept has been through the same depth of diff.

### statistik

Hardening **did** reduce **measurable** inference/notation risk on **audited** surfaces (p-Wert, α, variance convention honesty). The module is **safer** than before on those paths, but it remains **easy** for subtle wording to creep back in **unaudited** chapters — hence **Tier 2**, not Tier 1, until broader coverage or ongoing diff discipline is explicit.

### recht

Hardening **did** improve **doctrinal defensibility** on the **methodik / Was ist Recht? / Privatrecht** spine (VL-aligned structure and German exam idiom). It still functions partly as a **structured companion**; **Tier 2** reflects that **legal** trust cannot be closed by repository tooling alone.

### oekonometrie

Hardening **materially** removed **objectively wrong** teaching (Gauss–Markov inequality object; ANOVA null description) and tightened **t-test** framing — that is **real technical trust**, not polish. The module **still** inherits **intrinsic fragility** (dense notation, browser-R pedagogy, graphs not in the default graph-regression list) and **partial** curriculum audit — **Tier 2**.

---

## Certification outcomes (no ambiguity)

| Question | Answer |
|----------|--------|
| Which modules are **certified** (Tier 1)? | **mikro1** only. |
| Which are **caution-heavy** (Tier 2)? | **statistik**, **recht**, **oekonometrie**. |
| Should the trusted core stay the same four? | **Yes**, with **internal tiering** (flagship + three caution). |
| What public statement is now truthful? | See **Section 5**; avoid flattening all four to one certification tier. |

---

## Deliverables

1. **This report:** `docs/audits/public-core-certification-pass-1.md`  
2. **Code changes:** **None** (certification-only pass).

---

## Files referenced (evidence index)

| Document | Role |
|----------|------|
| `docs/audits/public-core-module-hardening-pass-1.md` | Regression scope, pre-certification trust table |
| `docs/audits/trusted-core-publication-layer-pass-1.md` | Landing / product framing |
| `docs/audits/public-core-concept-level-source-diff-pass-2-mikro1.md` | mikro1 VL diffs + fixes |
| `docs/audits/public-core-concept-level-source-diff-pass-3-statistik.md` | Statistik VL diffs + coverage limits |
| `docs/audits/public-core-concept-level-source-diff-pass-4-recht.md` | Recht VL diffs + Gutachtenstil |
| `docs/audits/public-core-concept-level-source-diff-pass-5-oekonometrie.md` | Ökonometrie corrections + automation gap note |
