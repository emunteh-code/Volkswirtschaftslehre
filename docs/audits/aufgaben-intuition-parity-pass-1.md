# Aufgaben / Intuition parity pass 1

## Scope
Close the remaining shared drift between frozen `mikro1` and the non-`mikro1` modules in:
- Aufgaben intro block
- section headers inside Aufgaben
- Prüfungstransfer card structure
- intuition wording/structure where the shared renderer still used older copy

## Benchmark checked
- `mikro1/js/ui/renderer.js`
- `mikro1/css/styles.css`

## Reproduced surfaces
- `mathematik` concept page `funktionen_gleichungen` on `Aufgaben`
- `mathematik` concept page `funktionen_gleichungen` on `Intuition`
- shared renderer source vs `mikro1` renderer source
- `oekonometrie/js/ui/renderer.js` as local outlier

## Deficits identified
1. The shared portal renderer still used slightly older practice/transfer phrasing than frozen `mikro1`.
2. The shared question-card helper still used a different solution-block class assembly than `mikro1`.
3. Several exam-transfer answer fields in the shared renderer were not using the same semantic rendering helpers as `mikro1`.
4. `oekonometrie` duplicated the older local renderer copy and would remain visually inconsistent unless patched separately.

## Planned fix
- transplant the exact `mikro1` Aufgaben / Prüfungstransfer / Intuition behavior into `assets/js/portal-core/ui/renderer.js`
- mirror the same parity changes into `oekonometrie/js/ui/renderer.js`
- verify in-browser on representative shared-renderer and local-renderer modules

## Files changed
- `assets/js/portal-core/ui/renderer.js`

## Fixes made
1. Replaced the older shared Prüfungstransfer wording `Warum das zählt` with the frozen-`mikro1` label `Warum das ökonomisch zählt`.
2. Aligned the shared question-card answer wrapper with the `mikro1` solution-block class assembly so exam-transfer cards inherit the same visual answer family.
3. Aligned shared Aufgaben / Intuition text rendering with the `mikro1` helpers for:
   - notation lists
   - theory block transfer copy
   - Klausurmuster signal/reaction copy
   - warning labels and warning copy
   - intuition recognition bullets
   - intuition detail rows
4. Added the missing shared text helpers (`decodeHtmlEntities`, `renderDecodedText`, `renderSemanticPlainText`) so the parity update renders safely in the shared path.

## Browser verification
- `mathematik` → `funktionen_gleichungen` → `Aufgaben`
  - visible twin intro blocks preserved
  - visible headers `Geführte Aufgaben` and `Prüfungstransfer`
  - no visible `Arbeitsmodus`
  - Prüfungstransfer key stack now includes `Warum das ökonomisch zählt`
- `mathematik` → `algebra_mengen` → `Intuition`
  - visible `mikro1` family structure confirmed:
    - `Worum es wirklich geht`
    - `Denkbild`
    - `Woran du das Konzept erkennst`
    - `Vom Bild zur Theorie`
  - screenshot: `.qa/mathematik-intuition-algebra-parity-pass1.png`
- `makro1` → `guetermarkt` → `Aufgaben`
  - same Aufgaben intro/header family as `mathematik`
  - no visible `Arbeitsmodus`
  - no older `Warum das zählt` wording
  - screenshot: `.qa/makro1-aufgaben-parity-pass1.png`

## Modules affected by the shared fix
- `mathematik`
- `statistik`
- `makro1`
- `makro2`
- `finanzwirtschaft`
- `jahresabschluss`
- `recht`
- `internationale-wirtschaftsbeziehungen`

## Modules not changed in this pass
- `oekonometrie`
  - local renderer already matched the relevant `mikro1` Aufgaben / Prüfungstransfer structure closely enough, so no separate patch was needed here.
