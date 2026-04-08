# Jahresabschluss Concept Granularity Audit Pass 1

## Scope
- Module audited: `jahresabschluss` only.
- Focus: concept-map granularity (not broad content rewrite).
- Benchmark lens: visible granularity level of `mikro1`.

## Exact files inspected

### Portal/module files
- `jahresabschluss/js/data/chapters.js`
- `jahresabschluss/js/data/stepProblems.js`
- `jahresabschluss/js/data/conceptLinks.js`
- `jahresabschluss/js/data/intuition.js`
- `jahresabschluss/js/data/contentManifest.js`
- `mikro1/js/data/chapters.js` (granularity benchmark only)

### Source-material files (opened)
- `source-materials/Jahresabschluss/Jahresabschluss/Orga+Kapitel1.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel2.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel3.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel6.1-6.5.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel6.6-6.7.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel7.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel8.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel9.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel10.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Zusammenfassungen/Jahresabschluss VL6.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Tutorium/Tutorium_Kapitel6.pdf`

## Current concept count
- `jahresabschluss`: **11** concepts (`CHAPTERS` IDs in `jahresabschluss/js/data/chapters.js`)
- `mikro1` benchmark (visible granularity reference): **33** concepts (`CHAPTERS` IDs in `mikro1/js/data/chapters.js`)

This does **not** imply `jahresabschluss` should be forced to 33 concepts, but it indicates a visibly coarser map where several concepts currently bundle multiple exam-distinct units.

## Granularity diagnosis: depth problem vs granularity problem
- **Main diagnosis:** mixed, but **primarily a granularity problem in specific hubs**.
- **Where it is mainly granularity:** `gob_inventur`, `umlauf_werkstoffe`, `eigenkapital`, `fremdkapital`.
- **Where it is mostly depth (not splitting-first):** `buchen_konten`, `buchfuehrung_orga`, `anlagevermoegen`, `erfolgsrechnung` (these already map to coherent single exam logics; improvement here is mostly additional drills/case depth).

## Concepts identified as too broad

1. **`gob_inventur`**
   - Bundles at least three distinct exam units from Kapitel 2:
     - GoB/principles and legal framing,
     - Inventur/Inventar/Bilanz transition,
     - Bilanzansatz vs Bilanzbewertung.
   - These are different decision paths in exam solving.

2. **`umlauf_werkstoffe`**
   - Bundles multiple distinct subdomains from Kapitel 6.1-6.5:
     - UV basics + strict lower of cost/market logic,
     - Bewertungsvereinfachungsverfahren (FIFO/LIFO/Durchschnitt/Festbewertung),
     - Werkstoffbuchungen (Fortschreibungs- vs Inventurmethode, Korrekturen),
     - unfertige/fertige Erzeugnisse and bestandsbezogene GuV logic.
   - Current concept shape mixes valuation and booking workflows too early.

3. **`eigenkapital`**
   - Bundles Kapitalgesellschaft and Personengesellschaft treatment into one concept despite clearly separate source structure (Kapitel 7.2 vs 7.3).
   - Exam mistakes differ strongly by legal form (AG reserve logic vs Privatkonto/Kapitalkonten in Personengesellschaften).

4. **`fremdkapital`**
   - Bundles Verbindlichkeiten and Rückstellungen, but source and exam logic separate them clearly (Kapitel 8.2 vs 8.3).
   - Key distinction (sicher vs ungewiss, measurement, follow-up booking) is central and should be concept-visible.

## Recommended academically real splits (no cosmetic splitting)

### Split set A (high confidence)
1. `gob_inventur` ->
   - `gob_rechtsgrundlagen`
   - `inventur_inventar_bilanzansatz`
2. `eigenkapital` ->
   - `eigenkapital_kapitalgesellschaften`
   - `eigenkapital_personengesellschaften`
3. `fremdkapital` ->
   - `verbindlichkeiten`
   - `rueckstellungen`

### Split set B (high pedagogical value, still source-backed)
4. `umlauf_werkstoffe` ->
   - `umlauf_bewertung_verfahren` (6.1/6.2 focus)
   - `werkstoffe_erzeugnisse_buchungen` (6.3/6.4/6.5 focus)

Notes:
- `umlauf_waren_ust` already captures 6.6/6.7 and should remain separate.
- These splits align with chapter substructure and typical exam error clusters (valuation vs booking, legal-form-dependent EK logic, liabilities vs provisions).

## Concepts that should remain unsplit (for now) and why
- **`rechnungswesen_intro`**: foundational orientation concept; splitting would likely be cosmetic at current module maturity.
- **`buchen_konten`**: coherent core mechanics concept (double-entry baseline) even though depth can be expanded.
- **`buchfuehrung_orga`**: currently cohesive around organizational bookkeeping architecture.
- **`anlagevermoegen`**: still coherent as long as AV valuation is handled in one didactic chain; depth can grow without mandatory split.
- **`umlauf_waren_ust`**: already a useful dedicated cluster around Warenkonten + USt flow.
- **`rechnungsabgrenzung`**: transitorisch/antizipativ are distinct, but currently manageable within one concept; split can be reconsidered after observing retrieval error rates.
- **`erfolgsrechnung`**: GKV/UKV are naturally paired comparative procedures; concept split is not yet required for navigation.

## Recommended concept count after conservative split pass
- Current: **11**
- Recommended after pass: **15** (with the 4 split sets above)

This is a substantial but still conservative jump: only source-structurally real and exam-useful separations, no cosmetic inflation.

## Remaining reasons not to split further (at this stage)
1. **Avoid taxonomy inflation before retrieval pressure confirms need**
   - Several concepts are already coherent and currently need drill density, not new IDs.
2. **Preserve navigation clarity**
   - Over-splitting foundational accounting mechanics can increase switching cost without clear pedagogical return.
3. **Keep source-faithful chapter structure as guardrail**
   - Additional micro-splits beyond the recommendations are not strongly justified by current source segmentation.

## Audit conclusion
- `jahresabschluss` thinness is **not only depth**; it is materially a **granularity bottleneck** in four concepts.
- The recommended splits are academically real, source-backed, and likely to improve exam diagnostics and learner navigation without artificial concept inflation.
