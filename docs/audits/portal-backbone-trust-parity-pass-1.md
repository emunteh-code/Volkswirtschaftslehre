# Portal Backbone Trust + Parity Pass 1

Date: 2026-04-10  
Scope: dashboard productization, mistake-review productization, `mathematik` backbone parity, `mikro2` trust/status handling, landing/live-registry clarity, small shared R-tone cleanup

## Goal of this pass

Close the last high-value backbone trust gaps without broad rewriting:

- dashboards should read like student-facing learning surfaces, not pilot analytics
- mistake-review should read like a learning tool, not an internal debug panel
- `mathematik` should participate in the same learner backbone as the stronger modules
- `mikro2` should stay live, but its special source-status must be explicit enough to preserve trust
- the landing page should state the live-registry boundary clearly
- shared R surfaces should sound less tool-first

## Exact files changed

### Shared product/backbone files

- [assets/js/portal-core/data/dashboardDerivedMetrics.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/data/dashboardDerivedMetrics.js)
- [assets/js/portal-core/features/mistakeReview.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/features/mistakeReview.js)
- [assets/js/portal-core/features/rPractice.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/features/rPractice.js)
- [assets/js/common.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/common.js)
- [assets/css/portal.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/css/portal.css)
- [index.html](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/index.html)

### Shared style/support parity files

- [mikro1/css/styles.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro1/css/styles.css)
- [mikro2/css/styles.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro2/css/styles.css)
- [makro1/css/styles.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/css/styles.css)
- [makro2/css/styles.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro2/css/styles.css)
- [statistik/css/styles.css](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/statistik/css/styles.css)
- [makro1/js/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro1/js/ui/renderer.js)
- [makro2/js/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/makro2/js/ui/renderer.js)
- [statistik/js/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/statistik/js/ui/renderer.js)

### `mathematik` backbone parity files

- [mathematik/js/data/courseConfig.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mathematik/js/data/courseConfig.js)
- [mathematik/js/data/srsConfig.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mathematik/js/data/srsConfig.js)
- [mathematik/js/features/dashboard.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mathematik/js/features/dashboard.js)
- [mathematik/js/features/exam.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mathematik/js/features/exam.js)
- [mathematik/js/features/fullExam.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mathematik/js/features/fullExam.js)
- [mathematik/js/features/mistakeReview.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mathematik/js/features/mistakeReview.js)
- [mathematik/js/main.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mathematik/js/main.js)
- [mathematik/js/state/storage.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mathematik/js/state/storage.js)

### `mikro2` trust/backbone files

- [mikro2/js/data/courseConfig.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro2/js/data/courseConfig.js)
- [mikro2/js/data/srsConfig.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro2/js/data/srsConfig.js)
- [mikro2/js/features/dashboard.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro2/js/features/dashboard.js)
- [mikro2/js/features/exam.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro2/js/features/exam.js)
- [mikro2/js/features/fullExam.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro2/js/features/fullExam.js)
- [mikro2/js/features/mistakeReview.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro2/js/features/mistakeReview.js)
- [mikro2/js/main.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro2/js/main.js)
- [mikro2/js/state/storage.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro2/js/state/storage.js)

### Small trust fix: reset now clears reviewed mistake state too

- [mikro1/js/state/storage.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro1/js/state/storage.js)
- [oekonometrie/js/state/storage.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/oekonometrie/js/state/storage.js)
- [recht/js/state/storage.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/js/state/storage.js)
- [jahresabschluss/js/state/storage.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/jahresabschluss/js/state/storage.js)
- [finanzwirtschaft/js/state/storage.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/js/state/storage.js)

### QA / audit artifacts

- [.qa/portal_backbone_trust_parity_pass1.mjs](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/portal_backbone_trust_parity_pass1.mjs)
- [docs/audits/portal-backbone-trust-parity-pass-1.md](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/docs/audits/portal-backbone-trust-parity-pass-1.md)

## Exact trust/parity weaknesses addressed

### 1. Dashboard surfaces read like internal pilot tooling

Confirmed weakness before fix:

- dashboard copy still used pilot framing
- empty states were technically accurate but cold and passive
- the surface did not tell the student what the next meaningful action was
- the strongest modules were more legible than `mathematik` and `mikro2`

What changed:

- changed the shared derived-metrics panel heading from pilot language to `Lernprotokoll und nächste Schritte`
- rewrote empty states into student-facing guidance
- added a concrete `Nächster sinnvoller Schritt` section
- changed cold/analytic section labels into student-usable labels
- softened the old “pilot” wording on home/dashboard notes in modules that still surfaced it visibly

Result:

- dashboards now explain what the data means
- empty states no longer read like missing analytics
- the surface now tells the student what to do next instead of only showing counts

### 2. Mistake-review still looked like a diagnostic leftover

Confirmed weakness before fix:

- exposed module-slug style phrasing in the subtitle
- weaker button wording
- empty states and hints were too diagnostic and too thin
- footer/navigation wording was more internal than student-facing

What changed:

- rewrote the shared subtitle to `Kurslabel · offen · geklärt`
- changed the action button to `Als geklärt markieren`
- renamed sections to `Als Nächstes klären` and `Bereits als geklärt markiert`
- rewrote the top hint as learning guidance, not system commentary
- changed the footer CTA to `Zurück zum Lern-Dashboard`
- clarified the repeated full-exam section so it reads like a useful theme-tracker rather than a logging artifact

Result:

- mistake-review now reads like a study workflow
- the open/done split is easier to understand
- the section language is compatible with a student-facing product tone

### 3. `mathematik` was still partially outside the learner backbone

Confirmed weakness before fix:

- no attempt/mistake logging parity with the source-backed modules
- no student-facing mistake-review module wired into the app
- dashboard remained materially thinner at the backbone level

What changed:

- added `slug`, attempt keys, mistake keys, and mistake-review key to `mathematik`
- wired quick exams and full exams into attempt + mistake logging
- added a real dashboard based on the shared derived-metrics surface
- added a real mistake-review module and wired it into the portal app

Result:

- `mathematik` now participates in the same dashboard + mistake-review backbone family
- the module no longer feels like a second-tier exception at the backbone layer

### 4. `mikro2` needed explicit trust-preserving status handling

Confirmed weakness before fix:

- the module stayed live, but its non-`direct-source` status was not explicit enough on product surfaces
- the module was lighter than the flagship modules at the learner-backbone layer

What changed:

- added explicit `slug`, attempt/mistake keys, and mistake-review wiring
- made the `homeIntro` honest about the missing in-repo Mikro II source corpus
- added a visible `Quellenstatus` section to the dashboard
- surfaced `mikro2` special status on the landing page and hero metadata

Result:

- `mikro2` now preserves trust without pretending a source parity it does not have
- its special status is visible at landing, module-home, and dashboard level

### 5. Landing/live-registry boundary was too implicit

Confirmed weakness before fix:

- students could not infer clearly that the landing page shows the live/public module set only
- special-case module status was not obvious enough from the landing shelf

What changed:

- added a shelf note on the landing page clarifying that only public live modules are shown there
- surfaced a `mikro2` tile note explaining the special source-status

Result:

- the boundary between live/public modules and everything else is now explicit enough to reduce trust confusion

### 6. Shared R surfaces still sounded too tool-first

Confirmed weakness before fix:

- `Runtime:` copy read as system tooling
- `Mini-Transfer:` copy still sounded like scaffolding rather than exam-facing teaching

What changed:

- changed runtime/status language to `Live-R ...`
- changed fallback wording to `Didaktischer Fallback`
- changed transfer wording to `Prüfungsregel:`

Result:

- the shared R surface is still technical where it must be, but it now sounds more like learning support than app instrumentation

### 7. Reset-data path left reviewed mistake markers behind

Confirmed weakness before fix:

- `Daten zurücksetzen` cleared progress, attempts, and mistake logs
- but reviewed mistake states could survive, which is a trust bug for a reset action

What changed:

- added `MISTAKE_REVIEW_KEY` clearing to the affected module storage layers

Result:

- reset now behaves honestly for the reviewed/open state too

## Exact surfaces verified in browser

Verification runner:

- [.qa/portal_backbone_trust_parity_pass1.mjs](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/portal_backbone_trust_parity_pass1.mjs)

Base URL used:

- `http://127.0.0.1:4182`

Representative surfaces verified:

### Landing

- landing shelf note visible
- `mikro2` tile note visible
- `11` live tiles rendered

Artifact:

- [landing.png](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/portal-backbone-trust-parity-pass-1/landing.png)

### `mathematik`

- module home loaded
- dashboard opened via real app entry point
- derived panel title verified as `Lernprotokoll und nächste Schritte`
- next-step guidance verified
- mistake counts verified in dashboard
- mistake-review opened via real app entry point
- `Als geklärt markieren` action verified
- counts updated after marking one item as cleared
- reset path verified:
  - attempts cleared
  - mistakes cleared
  - reviewed mistake state cleared

Artifacts:

- [mathematik-dashboard.png](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/portal-backbone-trust-parity-pass-1/mathematik-dashboard.png)
- [mathematik-mistake-review.png](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/portal-backbone-trust-parity-pass-1/mathematik-mistake-review.png)

### `mikro2`

- module home shows visible `Sonderstatus` wording
- dashboard shows explicit `Quellenstatus` block
- dashboard uses the same shared productized derived-metrics family
- mistake-review opens and shows the student-facing subtitle/hint/footer language

Artifacts:

- [mikro2-dashboard.png](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/portal-backbone-trust-parity-pass-1/mikro2-dashboard.png)
- [mikro2-mistake-review.png](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/portal-backbone-trust-parity-pass-1/mikro2-mistake-review.png)

### Shared R tone

Verified on:

- `oekonometrie` → `matrix_notation` → `R-Übung`

Checks:

- `Live-R` wording present
- no `Runtime:` wording
- `Prüfungsregel:` wording present
- no `Mini-Transfer:` wording

Artifact:

- [oekonometrie-r-surface.png](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/.qa/portal-backbone-trust-parity-pass-1/oekonometrie-r-surface.png)

### Browser/runtime result

Final verification result:

- failures: `[]`
- page errors: none reproduced on the verified surfaces

## Remaining limitations and why they remain

### 1. `mikro2` still remains a special-case module

This pass fixes the trust problem, not the source problem.

Still true after this pass:

- `mikro2` still has no in-repo official source corpus
- it therefore still cannot honestly claim `direct-source` parity with source-backed modules

Why it remains:

- blocked by missing course materials, not by surface wiring

### 2. Dashboard data is still browser-local

Still true after this pass:

- dashboard and mistake-review surfaces reflect only local browser learning traces
- they do not represent cross-device or server-side learning history

Why it remains:

- this pass was a productization pass, not a storage architecture rewrite

### 3. Not every exercise type is logged equally deeply yet

Still true after this pass:

- some modules and drill types still produce richer backbone data than others
- the shared derived-metrics panel is now explicit about that instead of pretending completeness

Why it remains:

- requires broader drill/exam instrumentation work beyond this pass

### 4. `mathematik` home still does not foreground mistake-review as directly as the stronger backbone modules

Observed in verification:

- `mathematik` dashboard entry is visible
- `Fehlerprotokoll` is not yet foregrounded directly on the home/overview surface itself

Why it remains:

- this pass productized the backbone surfaces and wiring first
- a deeper home-surface parity pass would be the next step if this remains important

### 5. Shared R surfaces are better in tone, but still not fully pedagogy-first everywhere

Still true after this pass:

- runtime/status labels are improved
- transfer wording is improved
- but some R pages still remain editor-first in layout balance

Why it remains:

- broader R pedagogy/layout refinement is larger than the allowed scope of this pass

## Verdict for this pass

This pass materially closes the backbone trust gap.

Most important outcomes:

- dashboard surfaces now feel like student-facing learning tools rather than pilot analytics
- mistake-review now feels like a real remediation surface
- `mathematik` is no longer outside the main learner backbone family
- `mikro2` now preserves trust by stating its special source status explicitly
- landing-scope clarity is visibly better
- shared R tone is less tool-first

What this pass does **not** claim:

- full source parity for `mikro2`
- full cross-module logging parity
- a broad home-surface redesign
- a full R pedagogy redesign

Those remain separate tasks.
