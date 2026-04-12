# Pass 67b — Provenance wording normalization and browser closure

## 1. Public-facing wording (strict)

**Problem (67 remainder):** After pass 67, `pathToHumanLabel` still produced **internal** buckets (`Übungsmaterial`, `Vorlesung (Folienskript)`, `R-Übungsdatei`, `Formelsammlung`, …) that appeared verbatim in the footer.

**Rule:** The visible line must stay **`ⓘ Basis: …`** and list only this **student vocabulary**:

| Token | Use |
|--------|-----|
| `Vorlesung X` | Lecture-derived material (incl. consolidated scripts, handouts, folien when no unit index) |
| `Übung X` | Exercise sheets, R practice files, Kleinübung/Mathematik drill labels (mapped to a number) |
| `Tutorium X` | Tutorial files |
| `Kapitel X` | **Jahresabschluss only** (deliberate module standard; ranges like `6.1–6.5` kept) |

**Implementation:** `assets/js/portal-core/ui/sourceProvenanceUi.js`

- New **`toPublicProvenanceLabel(raw, path)`** (exported for tests): maps internal `pathToHumanLabel` output + original `path` into the vocabulary above.
- **`labelsFromRefs`** now pushes **public** labels only.
- **`rankLabel`** simplified to sort only: Vorlesung → Kapitel → Übung → Tutorium.

**Examples (Node, after change):**

- Jahresabschluss `buchen_konten`: `Basis: Kapitel 3`
- Recht `willenserklaerung`: `Basis: Vorlesung 4 · Übung 1 · Übung 2` (no `Übungsmaterial`)
- Ökonometrie `ols_objective`: `Basis: Vorlesung 1 · Übung 1` (no `Folienskript` / `Formelsammlung` in UI)

**Honest outlier:** Any `pathToHumanLabel` result that is **not** handled by `toPublicProvenanceLabel` still passes through unchanged — new filename shapes should extend **either** `pathToHumanLabel` **or** the normalizer.

---

## 2. Browser verification (executed)

**Script:** `tools/clickthrough/verify-pass-67b.mjs`  
**Prereqs:** `npm install` in `tools/clickthrough`, `npx playwright install chromium`  
**Run:** `node tools/clickthrough/verify-pass-67b.mjs` (from repo: `cd tools/clickthrough && node verify-pass-67b.mjs`)

**Server:** `python3 -m http.server 8899 --bind 127.0.0.1` from repository root (spawned by the script).

**Checks:**

- **Statistik** `deskriptiv`: Theorie tab — footer visible, ⓘ present, wording matches allowed tokens (regex), no forbidden substrings.
- **Statistik** `deskriptiv`: Aufgaben — first task solution opened; `#sol_0 .step-math-slot` `scrollWidth <= clientWidth + 12` (no horizontal clip in slot).
- **Statistik** `deskriptiv`: last Aufgaben card — solution opened (second long-math smoke).
- **Finanzwirtschaft, Recht, IWB, Jahresabschluss, Ökonometrie:** one concept each — footer + ⓘ + allowed vocabulary only.

**Recorded run (2026-04-12):**

```
OK /statistik/index.html (deskriptiv Theorie) → Basis: Vorlesung 2 · Vorlesung 3
OK Statistik deskriptiv Aufgabe 1: step-math-slot fits width { ok: true, sw: 644, cw: 644 }
OK /finanzwirtschaft/index.html → Basis: Vorlesung 5
OK /recht/index.html → Basis: Vorlesung 1
OK /internationale-wirtschaftsbeziehungen/index.html → Basis: Vorlesung 1
OK /jahresabschluss/index.html → Basis: Kapitel 3
OK /oekonometrie/index.html → Basis: Vorlesung 1 · Übung 1
OK Statistik deskriptiv Aufgabe 10 (second long-math check)

Pass 67b browser verification completed successfully.
```

---

## 3. Files touched (67b)

- `assets/js/portal-core/ui/sourceProvenanceUi.js` — `toPublicProvenanceLabel`, `labelsFromRefs`, `rankLabel`, helpers `inferÜbungNumberFromPath`, `firstVorlesungNumberFromPath`
- `tools/clickthrough/verify-pass-67b.mjs` — **new** automated browser checks
- `docs/audits/pass-67b-provenance-wording-normalization-and-browser-closure.md` — this file

---

## 4. Cross-reference

Parent audit: `docs/audits/long-answer-line-breaking-and-missing-source-footer-closure-pass-67.md` (math line-breaking + initial path mapping). Pass **67b** closes **wording** and **browser** evidence.
