# Jahresabschluss Concept Granularity Pass 1

## Scope
- Module: `jahresabschluss` only.
- Goal: implement exactly the source-grounded split set from `docs/audits/jahresabschluss-concept-granularity-audit-pass-1.md`.
- No broad content rewrite, no infrastructure redesign.

## Splits implemented (exact)
1. `gob_inventur` -> `gob_rechtsgrundlagen`, `inventur_inventar_bilanzansatz`
2. `umlauf_werkstoffe` -> `umlauf_bewertung_verfahren`, `werkstoffe_erzeugnisse_buchungen`
3. `eigenkapital` -> `eigenkapital_kapitalgesellschaften`, `eigenkapital_personengesellschaften`
4. `fremdkapital` -> `verbindlichkeiten`, `rueckstellungen`

## Concept count
- Before: **11**
- After: **15**

## What changed

### 1) Concept map and chapter structure updated
- File: `jahresabschluss/js/data/chapters.js`
- Changes:
  - Replaced the 4 broad IDs with 8 split IDs in `CHAPTERS`.
  - Added dedicated `CONTENT` blocks for each new split concept.
  - Reused and redistributed prior learning objects conservatively:
    - GoB/legal framing moved into `gob_rechtsgrundlagen`.
    - Inventur/Inventar/Ansatz sequence moved into `inventur_inventar_bilanzansatz`.
    - UV valuation procedures and strict lower-of-cost-or-market logic moved into `umlauf_bewertung_verfahren`.
    - Werkstoff-/Erzeugnis booking workflow moved into `werkstoffe_erzeugnisse_buchungen`.
    - Kapitalgesellschaft and Personengesellschaft EK logic separated.
    - Verbindlichkeiten and Rückstellungen separated into distinct Fremdkapital concepts.

### 2) Drill mappings aligned to new concept IDs
- File: `jahresabschluss/js/data/stepProblems.js`
- Changes:
  - Re-keyed drill bundles from old IDs to new IDs.
  - Added split-specific drill bundles where needed to preserve concept coverage:
    - `inventur_inventar_bilanzansatz`
    - `werkstoffe_erzeugnisse_buchungen`
    - `eigenkapital_personengesellschaften`
    - `rueckstellungen`
  - Existing drill semantics were preserved and only split-specific ordering/phrasing was adjusted.

### 3) Concept dependencies updated
- File: `jahresabschluss/js/data/conceptLinks.js`
- Changes:
  - Replaced old broad-node dependency graph with split-node graph.
  - Preserved progression logic while making separate paths visible for:
    - GoB vs Inventur/Ansatz
    - UV valuation vs UV booking workflows
    - EK by legal form
    - Verbindlichkeiten vs Rückstellungen

### 4) Intuition and mastery layers aligned
- Files:
  - `jahresabschluss/js/data/intuition.js`
  - `jahresabschluss/js/data/masteryData.js`
- Changes:
  - Replaced old broad keys with split keys.
  - Kept prior pedagogical intent and redistributed it to the new concept boundaries.
  - Added split-specific mastery outcomes for each new concept.

## Exact files changed
- `jahresabschluss/js/data/chapters.js`
- `jahresabschluss/js/data/stepProblems.js`
- `jahresabschluss/js/data/conceptLinks.js`
- `jahresabschluss/js/data/intuition.js`
- `jahresabschluss/js/data/masteryData.js`
- `docs/audits/jahresabschluss-concept-granularity-pass-1.md`

## Deployability consistency checks
- Concept IDs now align across:
  - chapter map (`CHAPTERS`)
  - content map (`CONTENT`)
  - step problems
  - intuition map
  - mastery map
  - concept links
- No runtime/platform APIs were changed.
- Manifest/provenance continues to derive concept keys from `CHAPTERS`, so split IDs are automatically covered.

## Remaining broad concepts intentionally left unsplit
- `rechnungswesen_intro`: foundational orientation concept; split would be mostly cosmetic at current density.
- `buchen_konten`: still a coherent mechanics block; main gap is depth, not map granularity.
- `buchfuehrung_orga`: structurally cohesive around bookkeeping organization.
- `anlagevermoegen`: currently coherent as one valuation chain.
- `umlauf_waren_ust`: remains a coherent pair (Warenkonten + USt flow) with strong exam linkage.
- `rechnungsabgrenzung`: transitorisch/antizipativ remain manageable in one node for now.
- `erfolgsrechnung`: GKV/UKV comparison remains pedagogically coherent in one concept.
