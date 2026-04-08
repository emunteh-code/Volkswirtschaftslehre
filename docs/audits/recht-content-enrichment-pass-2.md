# Recht Content Enrichment Pass 2

## Scope
- Module: `recht` only.
- Goal: additive, source-grounded depth increase after pass 1 in exam-relevant legal reasoning chains.
- No infrastructure redesign, no renderer changes, no genericization of legal workflow.

## Source-grounded audit snapshot (post pass 1)

### Exact source files opened for this pass
- `source-materials/Recht/Recht/Vorlesungen/§_3_Juristische_Methodik-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_8_Stellvertretung-K.pdf`
- `source-materials/Recht/Recht/Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf`
- `source-materials/Recht/Recht/Übungen/Juristische_Gliederungsebenen_im_Gutachten.pdf`

### Highest-value weak spots identified after pass 1
1. **Gutachtenstil/Anspruchsaufbau chaining still too shallow in multi-claim constellations**
   - Pass 1 improved structure discipline, but did not yet force robust chain handling across primary and auxiliary claim paths.
2. **Tatbestandsvoraussetzungen vs. Rechtsfolge still prone to collapse**
   - Especially visible in Anfechtung + § 122 sequences and Rücktritt/Widerruf + Rückgewähr consequences.
3. **Multi-step issue spotting in Stellvertretung needed one stronger stress pattern**
   - Offenkundigkeit -> Vertretungsmacht -> Genehmigung/§ 179 was still not drilled as a strict order-sensitive chain.
4. **Worked mini-case density in core exam traps needed one additional layer**
   - Existing mini-cases were useful, but lacked one further pass on chained subsumption discipline.

## What changed

### 1) Enriched chapter content (`CONTENT`) with deeper chained mini-cases
- File: `recht/js/data/chapters.js`
- Concepts enriched:
  - `methodik`
  - `dissens_anfechtung`
  - `stellvertretung`
  - `ruecktritt_widerruf`
- New mini-cases added:
  - **`methodik`**: multi-claim Anspruchsaufbau chain (Primäranspruch + Hilfsschiene + Konkurrenzordnung) with strict Tatbestand-before-Rechtsfolge discipline.
  - **`dissens_anfechtung`**: contract claim vs. Anfechtung vs. separate `§ 122 BGB` track with explicit sequencing and damages-cap awareness.
  - **`stellvertretung`**: multi-step stress case covering Offenkundigkeit first, then Vertretungsmacht, then `§ 179 BGB` only on the correct branch.
  - **`ruecktritt_widerruf`**: Tatbestand-vs-Rechtsfolge drill case making clear that Rückgewähr/ Wertersatz belongs after valid exercise of the Gestaltung right.

### 2) Enriched trap-aware step drills (`STEP_PROBLEMS`)
- File: `recht/js/data/stepProblems.js`
- New drill bundles added:
  - `re_me_3` (Anspruchskette ohne Ebenensprung)
  - `re_da_3` (Anfechtung und `§ 122` sauber trennen)
  - `re_st_3` (Offenkundigkeit und `§ 179`-Folge)
  - `re_rw_3` (Tatbestand vor Rückgewährfolgen)
- Drill design pattern:
  - Decision -> Execution -> Validation sequence,
  - explicit trap checks where students commonly mix Tatbestand and Rechtsfolge or jump branches too early.

## Exact files changed
- `recht/js/data/chapters.js`
- `recht/js/data/stepProblems.js`
- `docs/audits/recht-content-enrichment-pass-2.md`

## Exact concepts/sections enriched
- `methodik`: deeper multi-claim Gutachtenstil chaining and Anspruchsaufbau ordering.
- `dissens_anfechtung`: stricter distinction between contract level, Anfechtung prerequisites, and `§ 122 BGB` consequence track.
- `stellvertretung`: stronger multi-step issue spotting for Offenkundigkeit/Vertretungsmacht/`§ 179` branching.
- `ruecktritt_widerruf`: clearer separation of Voraussetzungen and follow-on Rückgewährfolgen.

## Exact new learning objects, drills, or mini-cases added
- New chapter-level mini-cases: 4
  - one each in `methodik`, `dissens_anfechtung`, `stellvertretung`, `ruecktritt_widerruf`.
- New step-drill bundles: 4
  - `re_me_3`, `re_da_3`, `re_st_3`, `re_rw_3`.

## Remaining gaps and why they remain
1. **No broad expansion of full-exam legal case banks**
   - Out of scope for this pass; this pass focused on chapter + step-drill depth in source-backed weak spots.
2. **No additional concept splitting**
   - Current concept map remains serviceable; pass objective was depth/chaining quality, not taxonomy redesign.
3. **No broad expansion into advanced doctrinal edge-areas (outside current module core)**
   - Avoided to keep source-faithful and prevent overextension beyond clearly grounded course structure.

## Deployability and risk note
- Changes are additive-only content updates in existing data structures.
- No platform/backbone behavior changes and no UI/API contract changes.
- Expected runtime risk is low; only new content objects and step-problem entries were added.
