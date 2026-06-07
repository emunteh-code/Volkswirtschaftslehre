# Exam Operating System Readiness Gate — 2026-06-07

A module is final only when sourceComplete, pageIndexed, anchorComplete, examBankComplete, provenanceComplete, adaptiveReady, and mikro1DepthAchieved are all true. Exam-bank completeness requires reviewed official-task-source families, not only portal simulations or document registry metadata.

## Module Gates

| Module | Source | Pages | Anchors | Exam bank | Provenance | Adaptive | Mikro1 depth | Weak pages | Task pages | Formula pages |
|---|---|---|---|---|---|---|---|---:|---:|---:|
| `mikro1` | yes | yes | yes | no | yes | no | no | 4 | 18 | 233 |
| `mikro2` | yes | yes | no | no | no | no | no | 13 | 11 | 190 |
| `makro1` | yes | yes | yes | no | yes | no | no | 6 | 115 | 335 |
| `makro2` | yes | yes | yes | no | yes | no | no | 1 | 46 | 249 |
| `oekonometrie` | yes | yes | yes | no | yes | no | no | 180 | 298 | 811 |
| `statistik` | yes | yes | yes | no | yes | no | no | 132 | 619 | 1046 |
| `finanzwirtschaft` | yes | yes | yes | no | yes | no | no | 0 | 8 | 118 |
| `mathematik` | yes | yes | yes | no | yes | no | no | 0 | 253 | 892 |
| `jahresabschluss` | yes | yes | yes | no | yes | no | no | 0 | 36 | 129 |
| `recht` | yes | yes | yes | no | yes | no | no | 2 | 52 | 94 |
| `internationale-wirtschaftsbeziehungen` | yes | yes | yes | no | yes | no | no | 4 | 4 | 116 |

## Evidence Snapshot

| Module | Ref coverage | Anchor coverage | Page anchors | Task families | Official task docs | Document-registry families | Official task families | Formula cards | Mastery dimensions |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `mikro1` | 100% | 100% | 99 | 86 | 18 | 18 | 1 | 100 | 4 |
| `mikro2` | 83% | 83% | 47 | 34 | 0 | 0 | 0 | 46 | 4 |
| `makro1` | 100% | 100% | 28 | 58 | 29 | 29 | 0 | 44 | 4 |
| `makro2` | 100% | 100% | 60 | 83 | 22 | 22 | 0 | 110 | 4 |
| `oekonometrie` | 100% | 100% | 64 | 98 | 33 | 33 | 0 | 101 | 4 |
| `statistik` | 100% | 100% | 42 | 133 | 104 | 104 | 0 | 44 | 4 |
| `finanzwirtschaft` | 100% | 100% | 38 | 39 | 0 | 0 | 0 | 57 | 4 |
| `mathematik` | 100% | 100% | 42 | 69 | 40 | 40 | 0 | 55 | 4 |
| `jahresabschluss` | 100% | 100% | 30 | 44 | 13 | 13 | 0 | 45 | 4 |
| `recht` | 100% | 100% | 28 | 46 | 17 | 17 | 0 | 52 | 4 |
| `internationale-wirtschaftsbeziehungen` | 100% | 100% | 32 | 33 | 0 | 0 | 0 | 49 | 4 |

## Gate Status Detail

| Module | Anchor status | Exam-bank status | Provenance status | Adaptive status | Scorecard depth |
|---|---|---|---|---|---|
| `mikro1` | complete | official-task-source pilot present (1); 18 document-registry placeholders still unresolved | complete | mastery items present; exam-bank or anchor gate open | benchmark cockpit; official task-source review pending |
| `mikro2` | partial | official task source corpus missing or unavailable | partial | mastery items present; exam-bank or anchor gate open | not achieved |
| `makro1` | complete | official source docs present; no reviewed official-task-source families | complete | mastery items present; exam-bank or anchor gate open | not achieved |
| `makro2` | complete | official source docs present; no reviewed official-task-source families | complete | mastery items present; exam-bank or anchor gate open | near, but official task-source review pending |
| `oekonometrie` | complete | official source docs present; no reviewed official-task-source families | complete | mastery items present; exam-bank or anchor gate open | near, but official task-source review pending |
| `statistik` | complete | official source docs present; no reviewed official-task-source families | complete | mastery items present; exam-bank or anchor gate open | not achieved |
| `finanzwirtschaft` | complete | official task source corpus missing or unavailable | complete | mastery items present; exam-bank or anchor gate open | not achieved |
| `mathematik` | complete | official source docs present; no reviewed official-task-source families | complete | mastery items present; exam-bank or anchor gate open | not achieved |
| `jahresabschluss` | complete | official source docs present; no reviewed official-task-source families | complete | mastery items present; exam-bank or anchor gate open | not achieved |
| `recht` | complete | official source docs present; no reviewed official-task-source families | complete | mastery items present; exam-bank or anchor gate open | not achieved |
| `internationale-wirtschaftsbeziehungen` | complete | official task source corpus missing or unavailable | complete | mastery items present; exam-bank or anchor gate open | not achieved |

## Blockers

- `mikro1`: official exam bank incomplete (official-task-source pilot present (1); 18 document-registry placeholders still unresolved)
- `mikro1`: adaptive mastery not evidence-based (mastery items present; exam-bank or anchor gate open)
- `mikro1`: Mikro1-depth equality not certified
- `mikro2`: page/slide/task anchors incomplete (83% concept coverage)
- `mikro2`: official exam bank incomplete (official task source corpus missing or unavailable)
- `mikro2`: item-level provenance incomplete (partial)
- `mikro2`: adaptive mastery not evidence-based (mastery items present; exam-bank or anchor gate open)
- `mikro2`: Mikro1-depth equality not certified
- `makro1`: official exam bank incomplete (official source docs present; no reviewed official-task-source families)
- `makro1`: adaptive mastery not evidence-based (mastery items present; exam-bank or anchor gate open)
- `makro1`: Mikro1-depth equality not certified
- `makro2`: official exam bank incomplete (official source docs present; no reviewed official-task-source families)
- `makro2`: adaptive mastery not evidence-based (mastery items present; exam-bank or anchor gate open)
- `makro2`: Mikro1-depth equality not certified
- `oekonometrie`: official exam bank incomplete (official source docs present; no reviewed official-task-source families)
- `oekonometrie`: adaptive mastery not evidence-based (mastery items present; exam-bank or anchor gate open)
- `oekonometrie`: Mikro1-depth equality not certified
- `statistik`: official exam bank incomplete (official source docs present; no reviewed official-task-source families)
- `statistik`: adaptive mastery not evidence-based (mastery items present; exam-bank or anchor gate open)
- `statistik`: Mikro1-depth equality not certified
- `finanzwirtschaft`: official exam bank incomplete (official task source corpus missing or unavailable)
- `finanzwirtschaft`: adaptive mastery not evidence-based (mastery items present; exam-bank or anchor gate open)
- `finanzwirtschaft`: Mikro1-depth equality not certified
- `mathematik`: official exam bank incomplete (official source docs present; no reviewed official-task-source families)
- `mathematik`: adaptive mastery not evidence-based (mastery items present; exam-bank or anchor gate open)
- `mathematik`: Mikro1-depth equality not certified
- `jahresabschluss`: official exam bank incomplete (official source docs present; no reviewed official-task-source families)
- `jahresabschluss`: adaptive mastery not evidence-based (mastery items present; exam-bank or anchor gate open)
- `jahresabschluss`: Mikro1-depth equality not certified
- `recht`: official exam bank incomplete (official source docs present; no reviewed official-task-source families)
- `recht`: adaptive mastery not evidence-based (mastery items present; exam-bank or anchor gate open)
- `recht`: Mikro1-depth equality not certified
- `internationale-wirtschaftsbeziehungen`: official exam bank incomplete (official task source corpus missing or unavailable)
- `internationale-wirtschaftsbeziehungen`: adaptive mastery not evidence-based (mastery items present; exam-bank or anchor gate open)
- `internationale-wirtschaftsbeziehungen`: Mikro1-depth equality not certified
