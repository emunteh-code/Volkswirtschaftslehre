# Jahresabschluss Granularity Check Pass 2 (Audit Only)

## Scope
- Audit-only check after `jahresabschluss` concept granularity pass 1.
- No code changes in this pass.
- Focus: under-splitting vs appropriate granularity vs over-splitting.

## Exact files inspected

### Portal/module files
- `docs/audits/jahresabschluss-concept-granularity-pass-1.md`
- `jahresabschluss/js/data/chapters.js`
- `jahresabschluss/js/data/stepProblems.js`
- `jahresabschluss/js/data/conceptLinks.js`
- `jahresabschluss/js/data/intuition.js`
- `jahresabschluss/js/data/masteryData.js`

### Source files (for grounding check)
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel6.1-6.5.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel6.6-6.7.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel7.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel8.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel9.pdf`
- `source-materials/Jahresabschluss/Jahresabschluss/Kapitel10.pdf`

## Current concept count
- Current `jahresabschluss` concept count: **15**

## Post-split judgment
- **Overall judgment:** the module is now **appropriately granular** for its current maturity.
- **Under-split status:** no high-value, source-backed split is currently mandatory.
- **Over-split status:** no new split appears artificially inflated or purely cosmetic.

## Check of new split quality (pedagogical realism + navigation utility)

1. **`gob_rechtsgrundlagen` + `inventur_inventar_bilanzansatz`**
   - **Pedagogically real:** yes; separates normative framework (GoB/Rechtsrahmen) from procedural inventory/ansatz workflow.
   - **Navigation-useful:** yes; aligns with legal-principle vs execution-stage distinction in exam solving.

2. **`umlauf_bewertung_verfahren` + `werkstoffe_erzeugnisse_buchungen`**
   - **Pedagogically real:** yes; mirrors source chapter structure (6.1/6.2 vs 6.3/6.4/6.5).
   - **Navigation-useful:** yes; separates valuation procedures from booking workflow and bestandsbezogene GuV logic.

3. **`eigenkapital_kapitalgesellschaften` + `eigenkapital_personengesellschaften`**
   - **Pedagogically real:** yes; strongly source-backed by Kapitel 7.2 vs 7.3 and different exam error patterns.
   - **Navigation-useful:** yes; legal-form-first routing is materially improved.

4. **`verbindlichkeiten` + `rueckstellungen`**
   - **Pedagogically real:** yes; central exam distinction (sicher vs ungewiss, ansatz/bewertung/folge).
   - **Navigation-useful:** yes; reduces confusion from mixed debt-treatment paths.

## Concepts that may still be broad (watchlist, not mandatory split now)

1. **`rechnungsabgrenzung`**
   - Bundles transitorische and antizipative RAP branches.
   - Still acceptable as one concept currently because both branches are taught as a tight comparative unit in source flow.

2. **`erfolgsrechnung`**
   - Contains both GKV and UKV plus periodenübergreifende Ausgleichslogik.
   - Still acceptable as one concept due to direct paired comparison logic in source chapter 10.

3. **`anlagevermoegen`**
   - Covers planmäßig/außerplanmäßig + Zuschreibung in one slot.
   - Still acceptable; current issue is more drill depth than map granularity.

## Concepts that may now be thin (check)
- **Potentially thinner than others:** `gob_rechtsgrundlagen`.
  - This is a **depth** issue, not a granularity error: concept is academically real and justified by source/legal framing.
  - Recommendation is to densify drills/examples later, not to merge back.

No other split concept appears too thin to justify its own slot given current source alignment and exam logic.

## Recommendation on pass-2 structural action
- **No further granularity split/merge is warranted now.**
- Next high-value step (if requested) should be **content-depth enrichment within current 15-concept map**, especially:
  - richer drill density in `gob_rechtsgrundlagen`,
  - deeper branch drills in `rechnungsabgrenzung`,
  - more trap-aware comparative retrieval in `erfolgsrechnung` (GKV vs UKV).

## Explicit conclusion
- The pass-1 split set is pedagogically real, source-grounded, and navigation-useful.
- Current map is **not over-split** and **not materially under-split** in high-value exam areas.
- **No further granularity changes are warranted at this stage.**
