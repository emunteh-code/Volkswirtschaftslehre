# Exam Operating System Specification

## Product Definition

The exam operating system is the layer above the current learning cockpit. It must make the portal answer four questions for every module:

1. What exactly did the official course materials contain?
2. Which official tasks, formulas, conventions, and solution patterns can the student practice?
3. Can every portal explanation, formula, drill, warning, and exam task be traced to a source or honestly marked as platform-added?
4. Is the student exam-ready across recognition, calculation, derivation, and transfer?

The definition of done is strict: every module needs complete source ingestion, exhaustive exam-task coverage, traceable provenance, adaptive mastery, and Mikro1-level depth.

## Metadata Schema

Machine-readable baseline: `docs/architecture/exam-operating-system-schema.json`.

Repeatable current-state inventory: `node tools/exam-os/audit-current-state.mjs --write`.

Repeatable source registry with hashes and PDF page counts: `node tools/exam-os/build-source-registry.mjs --write`.

Repeatable page-level anchor index without source text: `node tools/exam-os/build-source-page-index.mjs --write`.

Repeatable readiness gate: `node tools/exam-os/check-readiness.mjs --write`.

### Source Document

```js
{
  id: "mikro2-vl-05",
  module: "mikro2",
  kind: "lecture-slide", // lecture-slide | exercise | tutorial | solution | exam | probeklausur | script | code | supplement
  title: "Mikro2_5",
  officialTitle: "Oligopol I",
  path: "source-materials/Mikroökonomik II/Vorlesungsfolien/Mikro2_5.pdf",
  fileHash: "sha256:...",
  term: "unknown",
  instructor: "unknown",
  pages: 42,
  extractedAt: "2026-05-27",
  reviewedAt: null,
  extractionStatus: "indexed" // missing | indexed | reviewed | rejected
}
```

### Source Anchor

```js
{
  sourceId: "mikro2-vl-05",
  locator: {
    page: 12,
    slide: 11,
    section: "Stackelberg-Führerschaft",
    task: null,
    line: null
  },
  quoteFingerprint: "short-normalized-text-or-hash",
  confidence: 0.92,
  reviewedBy: "human-or-agent",
  reviewedAt: "2026-05-27"
}
```

### Concept

```js
{
  id: "oligopol_stackelberg",
  module: "mikro2",
  title: "Stackelberg-Wettbewerb",
  officialTerms: ["Stackelberg", "sequentielles Mengenspiel", "Reaktionsfunktion"],
  category: "Oligopol",
  prerequisiteConcepts: ["oligopol_cournot_bertrand"],
  sourceCoverage: {
    status: "partial", // complete | partial | platform-added | missing
    anchors: ["anchor-id-1"],
    uncoveredSourceItems: ["mikro2-vl-05:p33"]
  },
  examRelevance: "high"
}
```

### Formula Card

```js
{
  id: "cournot_duopoly_quantity",
  module: "mikro2",
  conceptId: "oligopol_cournot_bertrand",
  officialNotation: "q_i, Q, P(Q), c",
  displayFormula: "q_i^* = (a-c)/(3b)",
  intuition: "...",
  derivationSteps: [
    { label: "Profit", math: "\\pi_i = P(q_i+q_j)q_i-cq_i", anchorIds: ["..."] },
    { label: "FOC", math: "\\partial \\pi_i/\\partial q_i=0", anchorIds: ["..."] }
  ],
  assumptions: ["linear inverse demand", "constant marginal cost", "simultaneous quantity choice"],
  appliesWhen: ["Cournot duopoly"],
  failsWhen: ["Bertrand price competition", "capacity constraints not modeled"],
  substitutions: ["symmetric n-firm form"],
  examShortcut: "Solve reaction functions simultaneously.",
  graphicalInterpretation: "reaction curves intersection",
  relatedTaskFamilies: ["cournot-reaction-functions", "cournot-welfare"],
  commonMistakes: ["using monopoly MR", "forgetting rival quantity in Q"],
  anchorIds: ["anchor-id-1"],
  status: "direct-source"
}
```

### Task

```js
{
  id: "mikro2-ub04-task02",
  module: "mikro2",
  sourceTask: {
    sourceId: "mikro2-uebungsblatt-04",
    taskNumber: "2",
    anchorIds: ["anchor-id-2"]
  },
  topic: "Cournot",
  conceptIds: ["oligopol_cournot_bertrand"],
  methodIds: ["reaction-function", "foc", "symmetric-equilibrium"],
  familyId: "cournot-reaction-functions",
  difficulty: 3,
  expectedMinutes: 12,
  examRelevance: "high",
  requiredFormulaIds: ["cournot_duopoly_quantity"],
  prompt: "...",
  solutionRoutes: [
    {
      id: "standard-foc",
      steps: [
        { text: "Set up profit", math: "...", points: 2 },
        { text: "Derive reaction functions", math: "...", points: 4 }
      ]
    }
  ],
  commonWrongPaths: [
    { id: "monopoly-output", description: "Uses total monopoly quantity as each firm's output.", gradingConsequence: "-4 points" }
  ],
  rubric: { totalPoints: 12, pointItems: [] },
  provenance: { status: "direct-source", anchorIds: ["anchor-id-2"], confidence: 1.0 }
}
```

### Portal Item Provenance

```js
{
  itemId: "mikro2.oligopol_stackelberg.warning.first_mover_advantage",
  itemType: "warning", // concept | formula | task | warning | derivation | explanation | graph | exam
  module: "mikro2",
  conceptIds: ["oligopol_stackelberg"],
  sourceStatus: "source-distilled",
  anchorIds: ["anchor-id-3"],
  examProven: true,
  confidence: 0.86,
  lastReviewedAt: "2026-05-27",
  missingSourceWarning: null
}
```

## Provenance UI Specification

Every inspectable learning object gets a provenance trigger. The trigger opens a side sheet or popover with:

- Source status badge: direct source, source-distilled, platform-added drill, explanatory support, or missing source.
- Source file title and path.
- Lecture/exercise/tutorial/exam/probeklausur classification.
- Exact page, slide, section, task, or code-line locator where possible.
- Exam-proven flag.
- Confidence score with plain-language label.
- Last reviewed date.
- Missing-source warning when the item is unanchored or the file is absent locally.

Interaction rules:

- A direct-source item opens the companion PDF at the anchor location.
- A source-distilled item shows all contributing anchors and a concise transformation note.
- A platform-added drill explains which concept/task family it trains and states that it is not copied from official material.
- A missing-source item is visually honest but not scary: "Source file not available in this checkout" or "No direct official anchor found yet."
- Provenance must be visible for concepts, formulas, derivations, tasks, mock exams, warnings, graph panels, and right-rail support.

Uncertainty display:

| Confidence | UI label | Rule |
|---:|---|---|
| 0.95-1.00 | reviewed anchor | human/agent-verified exact page/task |
| 0.75-0.94 | likely anchor | extracted by text/structure and reviewed lightly |
| 0.50-0.74 | weak anchor | topic-level match only |
| 0.00-0.49 | unverified | do not use for exam-critical claims |

## Exhaustive Exam Bank Specification

Each module needs a canonical task archive, separate from current portal-authored practice.

Required sources:

- All official exercise sheets.
- All tutorial sheets.
- All tutorial solutions.
- All mock exams/probeklausuren.
- Old exams if available.
- Any official R scripts, CDF files, datasets, formula sheets, or solution sketches.

Task-family taxonomy:

```js
{
  familyId: "slutsky-decomposition",
  module: "mikro1",
  conceptIds: ["slutsky", "hicks", "marshall"],
  coreSkill: "calculation",
  variants: ["normal-good", "inferior-good", "giffen-case", "graphical-only"],
  officialTaskIds: ["..."],
  generatedVariantIds: ["..."],
  minimumCoverage: {
    directOfficialTasks: 3,
    generatedVariants: 8,
    timedExamAppearances: 2
  }
}
```

Timed exam templates:

- Mirror official duration, point distribution, allowed aids, task order, and task types.
- Separate official exams from generated mock exams.
- Score with rubrics, not only final-answer matching.
- Store mistakes against concept, formula, task family, and skill dimension.

Coverage report:

- Every official task must be either implemented, intentionally excluded, or blocked with a reason.
- Every high-relevance task family must have at least one direct-source task, one guided solution, one timed variant, and common wrong paths.

## Professor-Specific Precision

For each module, create a style guide with:

- Official terminology and forbidden synonyms where the course is strict.
- Graph conventions: axes, intercepts, slopes, labels, comparative-statics arrows.
- Formula notation: symbols, parameter names, sign conventions, matrix orientation.
- Derivation style: expected setup, FOC/SOC conventions, verbal explanation order.
- Trap phrasing: exact ways official materials phrase false statements or ambiguous prompts.
- Grading checklist: what earns points according to solution keys.

Priority order for extracting style:

1. Official solution keys and old exams.
2. Probeklausuren.
3. Exercise/tutorial solutions.
4. Lecture slides and scripts.
5. Platform-added synthesis, clearly marked.

## Adaptive Mastery Model

Mastery must move beyond checklists into a learner model.

Skill dimensions:

- `recognition`: definitions, true/false, concept identification.
- `calculation`: numerical/algebraic execution.
- `derivation`: setup, FOC/SOC/proof path, transformations.
- `transfer`: unfamiliar wording, mixed concepts, graph/verbal interpretation.

Scoring model:

```js
{
  learnerId: "local",
  module: "mikro1",
  conceptId: "slutsky",
  dimensionScores: {
    recognition: { score: 0.88, evidence: 14, stability: 0.81 },
    calculation: { score: 0.72, evidence: 9, stability: 0.63 },
    derivation: { score: 0.55, evidence: 4, stability: 0.42 },
    transfer: { score: 0.48, evidence: 3, stability: 0.31 }
  },
  taskFamilyScores: {
    "slutsky-decomposition": 0.64
  },
  lastUpdatedAt: "2026-05-27"
}
```

Diagnostic blueprint:

- 20-40 minutes per module.
- Stratified by concept category and skill dimension.
- Uses official task families where available.
- Produces a weak-topic plan, not just a grade.

Weak-topic planner logic:

1. Find concepts with readiness below threshold.
2. Split by skill dimension.
3. Assign shortest source-backed lesson path.
4. Assign one recognition drill, one guided task, one timed task, and one transfer task.
5. Re-test after spaced interval.

Exam readiness:

```text
ready_score =
  0.25 * recognition_stability +
  0.30 * calculation_stability +
  0.25 * derivation_stability +
  0.20 * transfer_stability
```

Gate labels:

- `not_ready`: below 0.60 or any high-weight task family below 0.50.
- `fragile`: 0.60-0.74 or unstable evidence.
- `exam_ready`: 0.75-0.87 with no severe gaps.
- `a_plus_ready`: 0.88+ with repeated mixed-exam stability.

## Formula Derivation and Proof Layer

Every important formula receives a formula card using the schema above.

Checklist per module:

- Inventory all formulas from official materials.
- Normalize official notation.
- Link formulas to concepts and task families.
- Add derivation steps where the course expects derivation.
- Add assumptions and failure conditions.
- Add shortcut and graph interpretation only when exam-useful.
- Add common mistakes and grading consequences.
- Add source anchors to every formula and derivation step.

Missing-formula report columns:

| Field | Meaning |
|---|---|
| `formulaId` | stable ID |
| `module` | module slug |
| `officialNotation` | exact notation from source |
| `hasDerivation` | yes/no |
| `hasAssumptions` | yes/no |
| `hasFailureConditions` | yes/no |
| `hasTaskLinks` | yes/no |
| `hasSourceAnchor` | yes/no |
| `blockingReason` | missing file, ambiguous notation, needs human review |

## Official-Material Companion Mode

Companion mode lets a student study official materials alongside the portal.

Capabilities:

- Open the official source page/slide/task from any portal item.
- Select an official document, such as "Uebungsblatt 4", and practice every task from it.
- Show every portal item derived from a selected lecture.
- Show uncovered source items from a selected PDF.
- Generate an exam checklist from official corpus coverage.
- Compare official materials against portal coverage.

Navigation model:

```text
Source Library
  Module
    Source Group: Lectures | Exercises | Tutorials | Solutions | Exams | Supplements
      Document
        Page/Slide/Task
          Linked Concepts
          Linked Formulas
          Linked Tasks
          Coverage Status
```

Coverage comparison algorithm:

1. Extract text/images/tables/code from source document.
2. Segment into source items: definition, theorem, formula, graph, example, task, solution step.
3. Generate stable fingerprints for each item.
4. Match fingerprints and topic embeddings against portal concepts, formulas, tasks, and warnings.
5. Classify each source item: covered direct, covered distilled, covered by generated drill, uncovered, ambiguous.
6. Emit a review queue for ambiguous matches.

Student-facing workflows:

- "Study lecture 7": opens official PDF, shows linked portal concepts, then asks source-backed recall and calculation tasks.
- "Practice Uebungsblatt 4": lists every official task, lets the student attempt it, then compares to solution route.
- "What is missing?": shows official material not yet represented in the portal.
- "Exam checklist": converts official corpus and old exams into a readiness checklist by task family.

## Implementation Roadmap

### Phase 0 — Preserve Honesty

Acceptance:

- Every module displays source status honestly.
- Missing local source files are shown as missing, not silently trusted.
- Existing `source-distilled` claims with only file-level refs are flagged for anchor upgrade.

### Phase 1 — Source Corpus Completion

Dependencies:

- Official PDFs, scripts, datasets, exercise sheets, tutorial sheets, solution keys, probeklausuren, and old exams for every module.
- Hash/index generation for each file.

Acceptance:

- `source-materials/` has complete corpora for all curated modules.
- Every manifest ref resolves to a local file.
- Missing/ambiguous materials are documented in a source inventory.

### Phase 2 — Source Extraction and Anchoring

Data changes:

- Add `sourceDocuments`, `sourceAnchors`, `sourceItems`.
- Upgrade manifests from file refs to anchor refs.

Acceptance:

- Every lecture slide/page maps to one or more concepts or is marked uncovered.
- Every official exercise/tutorial/exam task maps to a task family.
- Every formula has an official notation anchor.

### Phase 3 — Exam Bank

Data changes:

- Add `taskBank`, `taskFamilies`, `rubrics`, `wrongPaths`, `timedExamTemplates`.

Acceptance:

- All official tasks are represented or explicitly excluded.
- Each high-value task family has official tasks, guided solutions, timed variants, wrong paths, and grading rubrics.

### Phase 4 — Formula and Professor Precision

Data changes:

- Add formula cards and module style guides.

Acceptance:

- Every important formula has derivation, assumptions, source anchors, and task links.
- Every module has a course-specific style guide and trap-phrase library.

### Phase 5 — Provenance UI and Companion Mode

UI changes:

- Add provenance triggers to concepts, formulas, tasks, warnings, derivations, graph panels, and exams.
- Add source-library companion view.
- Add source coverage comparison screens.

Acceptance:

- A student can open the official source from any source-backed portal item.
- A student can select an official PDF/sheet and see covered/uncovered portal mapping.

### Phase 6 — Adaptive Mastery

Data changes:

- Add learner evidence events, dimension scores, task-family scores, stability metrics.

Acceptance:

- Diagnostic placement exists per module.
- Mistakes feed concept, formula, task-family, and dimension scores.
- Ready-for-exam score is stable across recurring mixed exams.

### Phase 7 — Module Equality Gate

Acceptance:

- Every module scores `yes` on source-complete, exam-bank-complete, provenance-complete, adaptive-ready, and Mikro1-depth achieved.
- Hidden modules remain hidden until they pass the same gates.

## Risks and Open Questions

- Official old exams may be unavailable or legally restricted.
- Some source PDFs may be image-only and need OCR verification.
- Professor-specific grading rubrics may require manual review.
- Generated drills must never be confused with official tasks.
- Local `source-materials/` is git-ignored; decide whether source corpora remain local-only, move to secure storage, or are tracked via manifest hashes.
- Page/slide anchors need stable handling when PDFs are replaced.
