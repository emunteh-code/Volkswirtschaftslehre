# Mikro2 Reconstruction Pass 2 — Official Lecture Families

Date: 2026-05-27

## Scope

This pass moves Mikro2 from a mostly oligopoly/game-theory/general-equilibrium cockpit toward lecture-sequence parity with the official Mikro II corpus under `source-materials/Mikroökonomik II/`.

The change is intentionally not a final certification. It adds source-backed concept surfaces for major official blocks that were previously missing or compressed, while leaving the readiness gate red for page-level anchors, exhaustive official tasks, item-level provenance, and adaptive evidence.

## Added Live Concepts

| Concept id | Portal title | Primary official source files |
|---|---|---|
| `monopol_preissetzung` | Monopol: Preissetzung, Elastizität und Wohlfahrt | `Mikro_2_1.pdf`, `Mikro_2_2.pdf` |
| `preisdiskriminierung` | Monopolistische Preisdiskriminierung | `Mikro_2_2.pdf`, `Mikro_2_3.pdf`, `Mikro_2_4.pdf` |
| `intertemporaler_konsum` | Intertemporaler Konsum | `Mikro2_12.pdf` |
| `unsicherheit_versicherung` | Unsicherheit, Erwartungsnutzen und Versicherung | `Mikro2_13.pdf`, `Mikro2_14.pdf`, `Mikro2_14_lecture.pdf`, `Breyer_46.pdf` |
| `gleichgewicht_produktion` | Allgemeines Gleichgewicht mit Produktion | `Mikro2_17.pdf`, Robinson-Crusoe CDF supplements |

## What Changed

- Added the missing official Mikro II lecture families to `mikro2/js/data/chapters.js`.
- Added file-level primary references for the new concepts in `mikro2/js/data/contentManifest.js`.
- Updated concept dependencies in `mikro2/js/data/conceptLinks.js`.
- Kept all new practice tasks as portal-authored drills, not official exercises.
- Kept externalities and public-goods concepts explicitly unanchored/platform-added until a source-backed decision is made.

## Source-Faithfulness Notes

- The monopoly block follows lecture notation around `E'(y)`, `p(y)`, `C'(y)`, and `|ε_xp|`.
- The price-discrimination block preserves the course split between second-degree self-selection and third-degree group pricing.
- The intertemporal block preserves the two-period notation `c_1`, `c_2`, `m_1`, `m_2`, and `r`.
- The uncertainty block separates state-contingent consumption from intertemporal notation to prevent the most likely notation drift.
- The production-equilibrium block uses the official two-consumer, two-good, two-factor frame and the factor-box efficiency language.

## Remaining Gaps

- Page/slide anchors are not yet reviewed at item level.
- Official exercise/tutorial/exam tasks are not yet converted into canonical task-bank records.
- Formula cards still need assumptions, failure cases, derivations, graph interpretations, and reviewed anchors.
- Mikro2 remains not certified as Mikro1-depth.
- `externa_pigou`, `externa_institutionen`, and `public_goods` remain platform-added/unanchored relative to the supplied Mikro II corpus.

## Next Pass

1. Extract Mikro2 lecture pages into reviewed anchor records for these five added concepts.
2. Build a Mikro2 formula-card inventory from lectures 1-4, 12-14, and 17.
3. Start official-task archive generation from available exercises/examples or record missing exercise sources explicitly.
