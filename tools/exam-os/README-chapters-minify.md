# Chapters bundle size (audit P2-M4)

Production deploy does not minify `*/js/data/chapters.js` (multi‑MB fleet-wide). A full minify build is deferred to avoid breaking ES module `import` paths in static hosting.

**Recommended incremental approach:**

1. Keep authoring in readable `chapters.js`.
2. Add an optional CI artifact step (not public Pages) that runs `esbuild` per module with `--minify` into `dist/<module>/js/data/chapters.js`.
3. Gate on `ci-validate.mjs` + `trust:pass1` after each module pilot.

**Not done:** shipping minified chapters to GitHub Pages until a module-scoped build script is validated module-by-module.
