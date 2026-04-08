# Finanzwirtschaft Content Enrichment — Pass 2

## Grounding and scope

This pass implements the high-value targets from `docs/audits/finanzwirtschaft-source-grounded-audit-pass-1.md`, using the in-repo VL materials under `source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/` (V1–V12) as the substantive reference for topics (no new concept IDs, no fabricated provenance).

## Exact files changed

1. `finanzwirtschaft/js/data/chapters.js`
2. `finanzwirtschaft/js/data/stepProblems.js`
3. `docs/audits/finanzwirtschaft-content-enrichment-pass-2.md` (this file)

## Exact concepts / sections enriched

### `kapitalmarkt_bewertung` (`chapters.js`)

- Replaced the **duplicate** second theory block „Rolle der Präferenzen“ with **„Kapitalmarktorientierung: Bewertung und Benchmark“** (perfect market as analytic reference, not reality).
- Replaced the **duplicate** second `aufgaben` task with a new task on **vollkommener Kapitalmarkt as model vs. reality**.
- **Step drills** (`stepProblems.js`): kept existing `fw_ki_1` bundle; added **„Zins als Preis des Zeittauschs“** (`fw_km_2`).

### `institutionen_marktunvollkommenheit` (`stepProblems.js`)

- Replaced the duplicated kapitalmarkt-style bundle with an **institution-focused** bundle **„Institutionen und Informationsasymmetrie“** (`fw_inst_1`).

### `renten_endwert` (`chapters.js` + `stepProblems.js`)

- **Theory:** new section **„Annuitätenmethode“** with `K₀ = a · RBWF` / `a = K₀ / RBWF`; new formula row **„Annuität aus Kapitalwert“**.
- **Drills:** three new bundles:
  - `fw_re_2`: **K₀ → EW** with K₀ = 15, i = 10 %, n = 2 → **18,15** (VL-style equivalence).
  - `fw_re_3`: **Annuität** from K₀ = 15, RBWF(2,10 %) ≈ 1,7355 → **a ≈ 8,64**.
  - `fw_re_4`: **Vollständiger Finanzplan** — meaning of „Wert-/Vermögenszuwachs“ and why period tables exceed a single NPV number.

### `izf_kapitalwertfunktion` (`chapters.js` + `stepProblems.js`)

- **Theory:** sharpened **„Kapitalwertfunktion lesen“** with **Normalinvestition vs. Finanzierung** (falling vs. mirror-shaped profile) — from VL distinction.
- **Drills:** new bundle `fw_izf_3` **„IZF vs. Kapitalwert — Wahlproblem“** using the **course table numbers** (K₀ and IZF for projects A/B/C at i = 10 %): choose **max K₀**, reject „highest IZF = best wealth“.

### `izf_grenzen` (`stepProblems.js`)

- New bundle `fw_izfg_2` **„Skalierung: gleicher IZF, anderer Kapitalwert“** (−1/1,21 vs −10 000/12 100 at i = 10 %) — matches VL scaling point.

### `bezugsrecht` (`stepProblems.js`)

- New bundle `fw_bz_2` **„Ex-Kurs und Bezugsrecht (Zahlenweg)“**: n_alt = 8 Mio., n_neu = 2 Mio., aBK = 10 €, EmK = 9 € → **nBK = 9,80 €**, **BR = 0,20 €** (VL example structure).

### `eigenkapitalkosten` (`chapters.js` + `stepProblems.js`)

- **Theory:** new section **„Kurs, erwartete Rendite und Kalkulationszins“** (market equilibrium / implied r_EK — aligned with VL dividend-discount framing).
- **Tasks:** removed erroneous **Skontofristen** mention from the EK „Formel → Bedeutung“ task (Skonto belongs under FK).
- **Drills:** replaced misplaced EK+Skonto bundle with **`fw_ek_1`** (numeric **k_E = D₁/P₀ + g** with P₀ = 40, D₁ = 2, g = 3 % → **8 %**); second bundle re-keyed to **`fw_ek_2`** (form → meaning chain, EK-only).

### `fremdkapitalkosten` (`stepProblems.js`)

- Replaced duplicated EK drills with FK-specific bundles:
  - **`fw_fk_1`:** Skonto **98 = 100/(1+r_FK)** → **r_FK ≈ 2,04 %** for the deferral period (VL-style setup).
  - **`fw_fk_2`:** FK cost as **IZF of financing cash flows**; Nullkupon +100 / −110 in t = 2; interpretation of higher repayment.

### `modigliani_miller` (`chapters.js` + `stepProblems.js`)

- **Theory:** two additive sections — **„Annahmenraum und Irrelevanz“** and **„Von der Theorie zu realen Kapitalmärkten“** (frictions: taxes, bankruptcy costs, asymmetric information — as in VL).
- **Drills:** replaced mistaken reuse of `wacc_leverage` (`fw_ks_1`) with **`fw_mm_1`** (irrelevance + EK can still move) and **`fw_mm_2`** (frictions + MM not literal reality).

### `wacc_leverage` (`stepProblems.js`)

- Unchanged bundles (**`fw_ks_1`** retained here only).

## Exact new learning objects

| Location | Type | Count / IDs |
|----------|------|-------------|
| `chapters.js` | New / replaced theory sections | 5 substantive edits (kapitalmarkt, renten, eigenkapital, izf profile, MM ×2) |
| `chapters.js` | New formula row | 1 (`renten_endwert`: Annuität) |
| `chapters.js` | New / replaced `aufgaben` tasks | 2 (kapitalmarkt task dedup + EK task fix) |
| `stepProblems.js` | New step-problem bundles | 12 (`fw_km_2`, `fw_inst_1`, `fw_re_2`–`fw_re_4`, `fw_izf_3`, `fw_izfg_2`, `fw_bz_2`, `fw_ek_1`, `fw_fk_1`, `fw_fk_2`, `fw_mm_1`, `fw_mm_2`) |
| `stepProblems.js` | Replaced / re-keyed bundles | `institutionen_*`, `eigenkapitalkosten` (2), `fremdkapitalkosten` (2), `modigliani_miller` (2) |

**New guided steps (approx.):** 23 new step items across the new/replaced bundles (excluding removed duplicate EK/FK/MM content).

## Deployability

- Additive and localized; **no** `CHAPTERS` / concept-ID changes.
- **`FINANZWIRTSCHAFT_CONCEPT_PRIMARY_REFS`** unchanged (still empty by design).
- **`fullExams.js`**, **`contentManifest.js`**, **`intuition.js`**: not modified in this pass.

## Remaining gaps (explicit)

1. **Concept-level provenance** — still not curated; enrichment did not add PDF paths.
2. **Debt-instrument taxonomy** (VL overview of FK types) — not expanded into a long portal section; only reinforced via FK/IZF and Skonto drills.
3. **Full-exam documents** — no new probeklausur blocks; drills carry the exam-near load.
4. **MM friction drill** — accepts several single-word answers; fine-grained MC-style coverage is left to the course e-exam.
5. **Participation vs. non-participation wealth parity** in rights issues — named in VL; not added as a full numeric mini-case (would require longer step chains); `fw_bz_2` stops at nBK and BR.

## Outcome

Pass 2 strengthens **method selection (NPV vs IZR)**, **sign/discounting traps (t=0, EW equivalence)**, **annuity and finance-plan interpretation**, **rights-issue arithmetic**, **FK/Skonto and FK-as-IZF**, and **MM benchmark vs. frictions**, while **separating EK vs FK vs MM** in step drills and sharpening **kapitalmarkt** theory where the source distinguishes benchmark from reality.
