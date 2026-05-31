# Theory quality pass 2 — 2026-05-31

Generated: 2026-06-01  
Follow-up to [pass 1](./2026-05-31-theory-quality-pass.md) (commit `7818510`).  
Method: substantive `*_KLAUSUR_DEPTH` / `*_MECHANISM_BOOST` merges in module `chapters.js` — not generic `theoryDepthExpansions` padding.

## Thin concept counts (theorie &lt; 2 500 chars)

| Module | Pass 1 (before) | Pass 2 (after) | Δ |
|--------|-----------------|----------------|---|
| makro2 | 24/30 | **0/30** | −24 |
| oekonometrie | 25/32 | **0/32** | −25 |
| recht | 3/14 | **0/14** | −3 |
| mikro1 | 10/33 | **0/33** | −10 |
| mikro2 (mandate concepts) | externa_pigou, externa_institutionen, public_goods below gate | **3/3 ≥ gate** | ✓ |

**mikro2 overall:** 10/18 concepts still &lt;2 500 (oligopoly, information, intertemporal blocks — outside pass-2 mandate; remain for source-parity reconstruction).

## Average theory length (after pass 2)

| Module | Pass 1 avg | Pass 2 avg | Min | Max |
|--------|-----------|-----------|-----|-----|
| makro2 | 2 255 | **2 807** | 2 538 | 3 381 |
| oekonometrie | 2 189 | **2 692** | 2 505 | 3 067 |
| recht | 2 964 | **3 125** | 2 551 | 4 769 |
| mikro1 | 2 749 | **2 913** | 2 521 | 3 366 |
| mikro2 | 2 514 | **2 585** | 1 921 | 4 153 |

## What changed

### makro2 (`makro2/js/data/chapters.js`)
- `MAKRO2_KLAUSUR_DEPTH` — **In der Klausur** + warn-boxes for open-economy, IS-LM, Mundell-Fleming, Phillips, Solow, monetary-policy concepts (24 concepts).
- `MAKRO2_MECHANISM_BOOST` + `MAKRO2_FINAL_BOOST` — VL-grounded mechanism and notation sections for concepts still under gate after first merge.
- **Source:** `source-materials/Makroökonomik II/`, `docs/audits/source-syllabus/makro2.generated.json`.

### oekonometrie (`oekonometrie/js/data/chapters.js`)
- `OEK_KLAUSUR_DEPTH` — estimator properties, OLS assumptions, hypothesis tests, HAC/robust blocks (25 concepts).
- `OEK_MECHANISM_BOOST` + `OEK_FINAL_BOOST` — mechanism/notation push for remaining sub-gate concepts.
- Base curriculum unchanged; merges apply at render time in `chapters.js`.
- **Source:** `source-materials/Ökonometrie/`, syllabus JSON.

### mikro2 (`mikro2/js/data/chapters.js`)
- `externa_pigou`, `externa_institutionen`, `public_goods` — **In der Klausur** sections with `platform-added-explanation` disclaimer; no fake VL anchors.
- Restored Fehleranalyse warn-boxes on `externa_institutionen`.
- **Labels:** `MARKET_FAILURE_SOURCE_BOUNDARY`, `platform-added-notice`.

### recht (`recht/js/data/chapters.js`)
- `RECHT_KLAUSUR_DEPTH` for `trennung_abstraktion`, `dissens`, `schuldrecht_intro` — subsumption/case-reasoning depth, 2 warn-boxes each.
- **Source:** Recht VL materials / companion structure.

### mikro1 (`mikro1/js/data/chapters.js`)
- `MIKRO1_KLAUSUR_DEPTH` for 10 marginally thin concepts: `shephard`, `hicks`, `psubst`, `lambda`, `ausgaben`, `homothet`, `pkomp`, `gewinn`, `marshall`, `anfang`.

## Quality gate spot-check

All expanded concepts in scope meet:
- ≥2 500 chars in merged `theorie`
- ≥4 `section-block`s
- ≥2 `warn-box`es
- **In der Klausur …** bridge (or platform-added Klausur section for mikro2 externa block)

## Validation

| Check | Result |
|-------|--------|
| `node tools/exam-os/ci-validate.mjs` | OK |
| `npm run trust:pass1` (clickthrough) | OK |
| VL layers regenerated | makro2, oekonometrie, mikro2, recht, mikro1 |

## Remaining honest gaps

| Module | Gap |
|--------|-----|
| mikro2 | 10/18 concepts still thin (oligopoly, game theory, information, GE production — source-parity work) |
| jahresabschluss | 6 concepts still thin (pass 1 scope) |
| finanzwirtschaft | 7/19 thin (pass 1 scope) |

## Files touched

- `makro2/js/data/chapters.js`
- `oekonometrie/js/data/chapters.js`
- `mikro2/js/data/chapters.js`
- `recht/js/data/chapters.js`
- `mikro1/js/data/chapters.js`
- Regenerated `formulaCards.js` / `taskFamilies.js` per module above
