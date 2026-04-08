# Mikro2 quarantine / roadmap cleanup — pass 1

## Purpose

Make **`mikro2` academic status** explicit in project docs and lightweight metadata so **future passes do not assume** `source-materials/`-backed, **direct-source** parity with modules like `mikro1`, `makro2`, or `recht`.

**Out of scope for this pass:** rewriting `mikro2` theory/tasks, adding `contentManifest.js`, or shell refactors.

## Authoritative diagnosis (summary)

| Question | Answer |
|----------|--------|
| Is `mikro2` a genuine **Mikro II–topic** module? | **Yes** — label and concept map match advanced micro (Spieltheorie, Oligopol, AGG, Marktversagen, Information). |
| Is there a **`Mikroökonomik II`** tree under `source-materials/`? | **No** — only **`Mikroökonomik I`** appears; slides are `Mikro_1_VL_*.pdf`. |
| Should provenance / “source-grounded” content work run **now** against `source-materials/`? | **No** — would require guessing or inventing file links. |
| Should the module be removed from the product? | **No** — remain **live**; quarantine applies to **source-truth claims** and **editor expectations**, not deployability. |

Full reasoning: `docs/audits/mikro2-source-identity-resolution-pass-1.md`.

## Exact files changed (this pass)

| File | Change |
|------|--------|
| `docs/audits/mikro2-quarantine-roadmap-pass-1.md` | This document (new). |
| `AGENTS.md` | New subsection **“Module note: mikro2 (source corpus)”** under non-negotiable rules. |
| `README.md` | Tree lists `mikro2/`; duplicate `makro1/` line removed; **Hinweise** bullet on `mikro2` source status. |
| `mikro2/js/data/courseConfig.js` | Top-of-file comment: no in-repo Mikro II corpus; provenance work blocked until materials exist. |
| `assets/js/modules.js` | `mikro2` entry: optional flag **`sourceCorpusInRepo: false`** (+ short `sourceStatusNote`). |
| `docs/audits/mikro2-source-grounded-audit-pass-1.md` | Lead **warning**: wrong baseline (Makro II vs `mikro2`); use identity-resolution doc for policy. |
| `docs/architecture/content-pipeline.md` | Row in “Known repo issues” extended to state **`mikro2` has no corpus**; `module-content.js` note unchanged but clarified. |
| `docs/audits/mikro2-source-identity-resolution-pass-1.md` | Cross-link to this quarantine doc at top. |

## Exact clarifications added (by file)

### `AGENTS.md`

- States that **`mikro2` is not anchored** to an in-repo Mikro II corpus.
- Instructs: no **direct-source** / file-level provenance claims until `source-materials` contains Mikro II materials; until then treat additions as **source-distilled** or **platform-added-*** where appropriate.

### `README.md`

- Folder tree includes **`mikro2/`** (and removes erroneous second `mikro1/` line).
- **Hinweise:** `mikro2` is live as Mikro-II-topic content but **lacks** a matching folder in `source-materials/`; pointer to this audit.

### `mikro2/js/data/courseConfig.js`

- Comment block: **pedagogical** Mikro II scope vs **missing** course PDF tree; no `contentManifest.js`; link to `mikro2-source-identity-resolution-pass-1.md` and this quarantine doc.

### `assets/js/modules.js`

- **`sourceCorpusInRepo: false`** on the `mikro2` object only (machine- and human-readable for grep/IDE).
- **`sourceStatusNote`:** one-line explanation (no UI requirement; landing may ignore unknown keys).

### `docs/audits/mikro2-source-grounded-audit-pass-1.md`

- **Warning at top:** compared portal to **Makro II** sources; useful for domain-mismatch history, **not** a valid baseline for grounding `mikro2` content.

### `docs/architecture/content-pipeline.md`

- Table row for missing **`mikro1` / `mikro2`** in `module-content.js`: notes **`mikro2` additionally has no Mikro II corpus** in `source-materials/`, so any “source story” entry must be honest (platform / TBD paths).

## What was explicitly not done

- No edits to `mikro2/js/data/chapters.js`, `stepProblems.js`, `intuition.js`, or UI copy beyond `courseConfig.js` comments.
- No `contentManifest.js` scaffold (would be empty or misleading).
- No changes to `.cursor/rules/source-materials.mdc` (global rule already correct; module-specific status lives here and in `AGENTS.md`).

## Recommended next actions (for a later pass, not executed here)

1. Add **`source-materials/Mikroökonomik II/...`** (or official course name) when available.
2. Add **`mikro2/js/data/contentManifest.js`** and run a **provenance curation** pass.
3. Optional: **`mikro2` block in `module-content.js`** with explicit **non-direct-source** wording until step 1 is done.

## Relation to other audits

| Document | Role |
|----------|------|
| `mikro2-source-identity-resolution-pass-1.md` | Diagnosis and “should we quarantine?” |
| `mikro2-quarantine-roadmap-pass-1.md` (this file) | **Policy + doc/code pointers** so the diagnosis sticks in the repo |
| `mikro2-source-grounded-audit-pass-1.md` | Historical; **wrong source module** for baseline |
