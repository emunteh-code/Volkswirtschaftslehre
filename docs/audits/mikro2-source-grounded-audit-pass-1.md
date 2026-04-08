# Mikro2 Source-Grounded Audit Pass 1

> **Warning (roadmap hygiene):** This pass compared the **`mikro2`** portal to **`Makroökonomik II`** materials — a **different discipline** than Micro II. The write-up is useful as **evidence of domain mismatch**, not as a valid baseline for grounding `mikro2` content. For current policy and quarantine rules, use **`docs/audits/mikro2-source-identity-resolution-pass-1.md`** and **`docs/audits/mikro2-quarantine-roadmap-pass-1.md`**.

## Scope and source rule handling
- Requested source path: `source-materials/makro2-src`
- Result: path not found in repository.
- Available matching course source corpus found and used for this audit:
  - `source-materials/Makroökonomik II/Makroökonomik II/...`

This audit is therefore grounded in the **actual available Makro II materials** and compares them against the current `mikro2` portal content.

## Exact files inspected under source materials

### Under requested path `source-materials/makro2-src`
- No files could be opened (path does not exist).

### Successfully opened from available Makro II source corpus
- `source-materials/Makroökonomik II/Makroökonomik II/portal/js/data/chapters.js`
- `source-materials/Makroökonomik II/Makroökonomik II/portal/js/data/conceptLinks.js`
- `source-materials/Makroökonomik II/Makroökonomik II/portal/js/data/stepProblems.js`
- `source-materials/Makroökonomik II/Makroökonomik II/Handout/Makro2_handout_V25.2.pdf`
- `source-materials/Makroökonomik II/Makroökonomik II/Handout/Formeln.pdf`
- `source-materials/Makroökonomik II/Makroökonomik II/Übungen/Uebungsblatt_5.pdf`
- `source-materials/Makroökonomik II/Makroökonomik II/Tutorien/Tutorienblatt_3.pdf`

## Audit baseline (current portal side)
Compared portal files:
- `mikro2/js/data/chapters.js`
- `mikro2/js/data/stepProblems.js`

Current `mikro2` concepts are predominantly microeconomics-II topics:
- game theory, oligopoly, general equilibrium, welfare theorems, externalities, public goods, asymmetric information.

Source corpus topics are predominantly macroeconomics-II topics:
- open economy, exchange rates/PPP/UIP, balance of payments, Mundell-Fleming, exchange-rate regimes and crises, policy credibility/time inconsistency, debt dynamics, Taylor rule, inflation targeting, growth/Solow.

## Concept coverage findings

### Concepts already well grounded in the provided source
- **None, at concept level.**
- Reason: the available source corpus is Makro II, while the audited portal module is Mikro II; topic spaces are structurally different.

### Concepts currently too coarse (relative to source style)
- In `mikro2`, this cannot be judged as source-grounded from Makro II materials because most `mikro2` concepts have no direct source counterpart in the provided corpus.
- In the **source corpus itself**, granularity is much finer (34 concept IDs in source portal `chapters.js`) than `mikro2` (13 concepts), but this reflects a **different subject domain**, not merely a granularity shortfall.

### Concepts missing from portal but present in source materials
The following high-value Makro II concept blocks are absent from `mikro2`:
- Wechselkurs/KKP, Zinsparität, Zahlungsbilanz, Marshall-Lerner/J-Kurve
- Offene IS, Nettoexporte, Mundell-Fleming, ZP-Kurve, offene Wirtschaftspolitik
- Wechselkursregime, Währungskrisen, optimaler Währungsraum, Eurozone
- Zeitinkonsistenz, Barro-Gordon, Schuldenregeln
- Staatliche Budgetrestriktion, Schuldenquote, Ricardianische Äquivalenz
- Taylor-Regel, Inflationssteuerung, Inflationskosten, unkonventionelle Geldpolitik
- Wachstum/Solow (Basis, Steady State, goldene Sparquote, TF, Solow-Residuum, Institutionen)
- Querschnitt: Phillipskurve, Geldmengen/LM

### Concepts/drills currently weakly grounded or underdeveloped
- Under this source baseline, **nearly all current `mikro2` concepts and drills are weakly grounded** (not because of quality, but because source domain mismatch).
- Example mismatch pattern:
  - `mikro2` drills train micro-theory workflows (Nash, Cournot, public-goods Samuelson).
  - source sheets/handouts train macro-open-economy and policy workflows (UIP, MF/ZP, crises, Barro-Gordon, debt dynamics).

## Granularity consistency finding
- Against the inspected Makro II source materials, `mikro2` is not just less granular; it is **academically misaligned by module domain**.
- Therefore, a standard "enrichment pass" inside current `mikro2` content is not source-groundable against this source corpus.

## Recommendation for Mikro2 Content Enrichment Pass 2

### Primary recommendation (required before enrichment)
1. **Resolve source-to-module mapping explicitly**:
   - If `mikro2` should remain Mikro II, provide Mikro II source materials.
   - If this module should actually follow Makro II source, scope a dedicated module realignment/migration decision first.

### If `mikro2` must remain Mikro II
2. Do **not** run content enrichment pass 2 yet against current Makro II sources.
3. Run a "source availability + mapping fix" pass to attach correct Mikro II source corpus first.

### If module is intentionally to be Makro II-driven
4. Treat next pass as a **domain realignment project**, not normal enrichment:
   - define migration scope,
   - preserve deployability,
   - rebuild concept map to source topics incrementally,
   - clearly deprecate or relocate current micro-only concepts.

## Risks / gaps
- Proceeding with enrichment now would force invented mappings and violate source-truth constraints.
- The main blocker is not pedagogy depth, but missing/incorrect source alignment for the target module.
