## Project-wide Mikro1 graph inheritance repair — pass 1

Date: 2026-04-09

### Scope

Repair visible graph-family drift against `mikro1` in the modules that still failed runtime inheritance checks:

- `statistik`
- `mikro2`
- `makro1`
- `makro2`
- `internationale-wirtschaftsbeziehungen`
- `finanzwirtschaft`

### Benchmark source inspected

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro1/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro1/css/styles.css`

### Visible runtime defects reproduced before repair

1. `statistik`
   - Graph tab hidden on a real graph-relevant concept (`Schätzereigenschaften & Konfidenzintervalle`).
   - Root cause: stale Mikro-I graph registry in `statistik/js/ui/graphPanel.js` and `statistik/js/ui/graphs.js`.

2. `mikro2`
   - Graph pages still used `graph-reading-hint` prose instead of the segmented `mikro1` graph interpretation family.
   - Several concepts had under-implemented graph drawing coverage.

3. `makro1`, `makro2`, `internationale-wirtschaftsbeziehungen`
   - Graphs rendered, but used the older `.graph-insight-row` interpretation family instead of `mikro1` `.gi-row`.

4. `finanzwirtschaft`
   - Graphs rendered, but used a separate `.graph-interpretation-row` family instead of `mikro1` `.gi-row`.

### Planned repair

1. Replace legacy graph interpretation markup with `mikro1` graph-info markup (`gi-label`, `gi-eq`, `gi-row`, `gi-row-head`, `gi-row-body`) where the graph logic is already otherwise sound.
2. Rebuild `statistik` graph concept registration around real statistics concepts.
3. Replace `mikro2` graph footer/prose with `mikro1` graph-info behavior and add missing concept draw functions so graph tabs are no longer thin placeholders.

### Files expected to change

- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro1/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/makro2/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/finanzwirtschaft/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/internationale-wirtschaftsbeziehungen/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/statistik/js/ui/graphPanel.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/statistik/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/statistik/css/styles.css`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro2/js/ui/graphPanel.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro2/js/ui/graphs.js`
- `/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main 4/mikro2/css/styles.css`

### Remaining risk before implementation

`mikro2` has no direct-source corpus in `source-materials/`, so the graph content there remains `source-distilled` / `platform-added-explanation`, not `direct-source`.
