# Mikro2 Official Source Ingest Pass 1

Date: 2026-05-26

## Scope

The user supplied the official Mikroökonomik II source documents:

- `/Users/enowmunteh/Downloads/Vorlesungsfolien-3.zip`
- `/Users/enowmunteh/Downloads/Weitere_Unterlagen-2.zip`

This pass ingests those files into the repository, updates Mikro2 source-status metadata, and records the source-parity implications. It does not yet rebuild the full Mikro2 learning surface.

## Files Added

Source root:

- `source-materials/Mikroökonomik II/Vorlesungsfolien/`
- `source-materials/Mikroökonomik II/Weitere_Unterlagen/`

Lecture PDFs:

| File | Pages | Main first-page topic |
| --- | ---: | --- |
| `Mikro_2_1.pdf` | 16 | Organisation, course overview, competition / monopoly recap |
| `Mikro_2_2.pdf` | 16 | Monopoly pricing, elasticity, welfare, price discrimination I |
| `Mikro_2_3.pdf` | 15 | Third-degree price discrimination |
| `Mikro_2_4.pdf` | 11 | Second-degree price discrimination |
| `Mikro2_5.pdf` | 15 | Oligopoly I, Stackelberg |
| `Mikro2_6.pdf` | 19 | Cournot duopoly and n-firm Cournot |
| `Mikro2_7.pdf` | 15 | Differentiated goods, collusion, punishment strategies |
| `Mikro2_8.pdf` | 14 | Bertrand, price competition, differentiated goods |
| `Mikro2_9.pdf` | 17 | Game theory I, matrix games, dominant strategies, Nash |
| `Mikro2_10.pdf` | 23 | Mixed strategies, reaction curves, special games |
| `Mikro2_11.pdf` | 12 | Sequential games, subgame-perfect Nash, entry deterrence |
| `Mikro2_12.pdf` | 16 | Intertemporal consumption |
| `Mikro2_13.pdf` | 18 | Decisions under uncertainty, expected utility, insurance |
| `Mikro2_14.pdf` | 12 | Insurance market, risk aversion, limits of expected utility |
| `Mikro2_14_lecture.pdf` | 16 | Expanded lecture 14 variant |
| `Mikro2_15.pdf` | 17 | General equilibrium I, Robinson Crusoe economy, Walras law |
| `Mikro2_16.pdf` | 18 | Exchange economy, Pareto efficiency, welfare theorems |
| `Mikro2_17.pdf` | 18 | General equilibrium with production |
| `Mikro2_18.pdf` | 11 | Asymmetric information I, moral hazard and adverse selection |
| `Mikro2_19.pdf` | 12 | Adverse selection and signalling |
| `Mikro2_20.pdf` | 11 | Manager compensation and imperfect information |

Additional source files:

- `Weitere_Unterlagen/Vorlesungsplanung_Mikroökonomik_2.pdf`
- `Weitere_Unterlagen/Breyer_46.pdf`
- `Weitere_Unterlagen/Tirole_Lemon_Problem.pdf`
- `Weitere_Unterlagen/Ray_1998_PrincipalAgent.pdf`
- `Weitere_Unterlagen/cdf-Files/Cournot.cdf`
- `Weitere_Unterlagen/cdf-Files/Cournot_n.cdf`
- `Weitere_Unterlagen/cdf-Files/Robinson_Crusoe_Ökonomie_Allgemeines_Gleichgewicht.cdf`
- `Weitere_Unterlagen/cdf-Files/Robinson_Crusoe_Ökonomie_Gewinnmaximierung.cdf`

## Immediate Metadata Changes

Updated:

- `mikro2/js/data/contentManifest.js`
- `mikro2/js/data/courseConfig.js`
- `mikro2/js/main.js`
- `assets/js/modules.js`
- `AGENTS.md`
- `README.md`

The old premise, “Mikro2 has no in-repo source corpus,” is superseded. Mikro2 is now a source-backed module, but it is not yet a full source-parity module.

## Current Concept Source Mapping

| Current portal concept | Source status after ingest | Primary refs |
| --- | --- | --- |
| `spieltheorie_statisch` | source-distilled | `Mikro2_9.pdf`, `Mikro2_10.pdf` |
| `spieltheorie_dynamisch` | source-distilled | `Mikro2_10.pdf`, `Mikro2_11.pdf` |
| `oligopol_cournot_bertrand` | source-distilled | `Mikro2_5.pdf` through `Mikro2_8.pdf`, Cournot CDF files |
| `oligopol_stackelberg` | source-distilled | `Mikro2_5.pdf`, `Mikro2_6.pdf` |
| `gleichgewicht_tausch` | source-distilled | `Mikro2_16.pdf` |
| `gleichgewicht_walras` | source-distilled | `Mikro2_15.pdf`, `Mikro2_16.pdf` |
| `wohlfahrt_theoreme` | source-distilled | `Mikro2_16.pdf`, `Mikro2_17.pdf` |
| `wohlfahrt_messung` | source-distilled | `Mikro_2_2.pdf`, `Mikro2_16.pdf` |
| `information_adverse` | source-distilled | `Mikro2_18.pdf`, `Mikro2_19.pdf`, `Tirole_Lemon_Problem.pdf` |
| `information_moralhazard` | source-distilled | `Mikro2_18.pdf`, `Mikro2_20.pdf`, `Ray_1998_PrincipalAgent.pdf` |
| `externa_pigou` | platform-added-explanation / drill | no direct primary anchor found in supplied Mikro2 lecture corpus |
| `externa_institutionen` | platform-added-explanation / drill | no direct primary anchor found in supplied Mikro2 lecture corpus |
| `public_goods` | platform-added-explanation / drill | no direct primary anchor found in supplied Mikro2 lecture corpus |

## Official Blocks Missing Or Underrepresented In Current Portal

These are official source blocks that should be added or expanded before Mikro2 can claim Mikro1-style completeness:

1. Monopoly recap and pricing:
   - `Mikro_2_1.pdf`
   - `Mikro_2_2.pdf`
2. Price discrimination:
   - `Mikro_2_2.pdf`
   - `Mikro_2_3.pdf`
   - `Mikro_2_4.pdf`
3. Intertemporal consumption:
   - `Mikro2_12.pdf`
4. Decisions under uncertainty and insurance:
   - `Mikro2_13.pdf`
   - `Mikro2_14.pdf`
   - `Mikro2_14_lecture.pdf`
   - `Breyer_46.pdf`
5. Production-side general equilibrium:
   - `Mikro2_17.pdf`
6. Officially grounded reconstruction of current market-failure pages:
   - no direct source hit was found for Pigou / Coase / public goods in the supplied PDFs during this pass.

## Trust Judgment

Mikro2 has moved from:

> source-missing / cannot verify fully

to:

> source corpus present; current portal partially source-backed, but not source-complete.

The module should remain live only with an explicit partial-reconstruction status until the missing lecture families are added and the current unanchored concepts are resolved.

## Next Reconstruction Pass

Recommended next implementation order:

1. Add concepts for monopoly pricing and price discrimination from lectures 1-4.
2. Add intertemporal consumption from lecture 12.
3. Add uncertainty, expected utility, insurance, and risk aversion from lectures 13-14.
4. Expand general equilibrium with production from lecture 17.
5. Decide whether Pigou / Coase / public goods remain platform-added extras, move to another module, or get removed/replaced if they are not part of the official Mikro2 course line.
6. Build a concept-level source manifest with page-range anchors after content reconstruction.
7. Only then reconsider whether Mikro2 should be moved from `hidden` to normal public landing visibility.
