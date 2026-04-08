# Jahresabschluss Content Enrichment — Pass 2

## Scope and grounding

This pass implements only the high-value, source-grounded targets from `docs/audits/jahresabschluss-source-grounded-audit-pass-1.md`:

- Maßgeblichkeitsprinzip
- latente Steuern
- clearer § 252 HGB linkage to Vorsicht/Realisationsprinzip
- exam-near drills for:
  - Anlagenverkauf (Bruttomethode)
  - FIFO vs. Durchschnitt
  - Rückstellungsauflösung
  - Fremdwährung

No broad infrastructure work, no concept-map redesign, and no fabricated source provenance were introduced.

## Exact files changed

1. `jahresabschluss/js/data/chapters.js`
2. `jahresabschluss/js/data/stepProblems.js`

## Exact concepts/sections enriched

### 1) `gob_rechtsgrundlagen`

Enriched in `chapters.js` with additive theory, formula cue, and tasks:

- Added theory section **"§ 252 HGB: Realisation und Vorsicht klausurnah verbinden"**
- Added theory section **"Maßgeblichkeitsprinzip und latente Steuern"**
- Added formula cue for directional latent-tax interpretation:
  - future tax burden increase -> passive latent taxes
  - future tax burden decrease -> active latent taxes
- Added new tasks:
  - § 252 HGB linkage for unrealized gains
  - why Maßgeblichkeitsprinzip and latente Steuern are tested together

### 2) Exam-near drill enrichments in `stepProblems.js`

- `gob_rechtsgrundlagen`
  - Added new drill bundle: **"Maßgeblichkeit, latente Steuern und § 252 HGB"**
  - Includes decision + interpretation + validation sequence

- `anlagevermoegen`
  - Added new drill bundle: **"Anlagenverkauf nach Bruttomethode (exam-nah)"**
  - Includes book gain/loss classification and amount calculation

- `umlauf_bewertung_verfahren`
  - Added new drill bundle: **"FIFO vs. Durchschnitt (exam-naher Rechenpfad)"**
  - Includes ending quantity, FIFO valuation, and weighted-average valuation step

- `rueckstellungen`
  - Added new drill bundle: **"Rückstellungsauflösung (exam-nah)"**
  - Includes overprovision detection and release amount

- `verbindlichkeiten`
  - Added new drill bundle: **"Fremdwährungsverbindlichkeit zum Stichtag"**
  - Includes classification-first logic and FX revaluation implication

## Exact new learning objects added

### Added content objects in `chapters.js`

- 2 new theory subsections in `gob_rechtsgrundlagen`
- 1 new formula entry in `gob_rechtsgrundlagen`
- 2 new long-form tasks in `gob_rechtsgrundlagen`

### Added drill objects in `stepProblems.js`

- 5 new step-problem bundles
- 14 new guided step items in total:
  - `gob_rechtsgrundlagen`: 3 steps
  - `anlagevermoegen`: 3 steps
  - `umlauf_bewertung_verfahren`: 3 steps
  - `rueckstellungen`: 3 steps
  - `verbindlichkeiten`: 2 steps

## Deployability and boundaries check

- Additive-only edits: existing structures preserved.
- No new concept IDs added; concept map remains unchanged.
- No provenance map changes were made in `contentManifest.js`.
- No generic platform refactor was introduced.

## Remaining gaps and why they remain

1. **Concept-level provenance anchors still empty**
   - `jahresabschluss/js/data/contentManifest.js` remains unchanged by design in this pass.
   - Reason: this pass is content enrichment only; provenance curation requires a dedicated source-mapping pass.

2. **No expansion into additional optional topics beyond audit targets**
   - Examples: broader legal deep-dives outside the identified high-value audit findings.
   - Reason: constrained to the explicitly requested source-grounded focus areas for Pass 2.

3. **No full-exam rewrite**
   - Existing full-exam sets were not overhauled.
   - Reason: requested scope was targeted enrichment, not broad exam architecture/content redesign.

## Outcome

The module is now stronger in exactly the audit-identified, exam-relevant weak spots:

- clearer legal-principle linkage (§ 252 HGB with Vorsicht/Realisationsprinzip),
- explicit handling of Maßgeblichkeitsprinzip and latente Steuern,
- and targeted exam-near drills for Bruttomethode sale, FIFO vs Durchschnitt, Rückstellungsauflösung, and Fremdwährung.
