# Mikro2 official task-bank inventory pass

Date: 2026-06-15

## Scope

This pass checks whether the official Mikro II corpus currently supports a source-derived exam bank. It does not add or infer academic task content.

## Corpus inventory

Visible files under `source-materials/Mikroökonomik II/`:

- 21 lecture PDFs in `Vorlesungsfolien/`
- 4 additional reading/planning PDFs in `Weitere_Unterlagen/`
- 4 CDF interaction files in `Weitere_Unterlagen/cdf-Files/`
- 2 archive file lists

Filename search terms used for task/exam sources included `ueb`, `üb`, `aufgabe`, `tutor`, `klausur`, `probe`, `exam`, `solution`, `lösung`, `loesung`, and `blatt`.

## Findings

- No official Mikro II exercise sheets were visible.
- No official Mikro II tutorial sheets or tutorial solutions were visible.
- No official Mikro II Probeklausuren, old exams, or solution keys were visible.
- The only task-like official files currently visible are CDF simulations (`Cournot`, `Cournot_n`, and Robinson-Crusoe general-equilibrium files). These support concept/graph provenance, not a complete written exam-task archive.
- The live hard mock exam remains a portal-authored simulation and must not be presented as an official exam reconstruction.

## Implementation change

- Expanded Mikro2 non-deceptive official-task placeholders from the first chapter to every current Mikro2 concept.
- Tightened task provenance notes so student-facing metadata says the current corpus lacks official exercise, tutorial, exam, Probeklausur, and solution-key files.
- Did not add source-derived task items, rubrics, or solution routes because no official task sources were available in the corpus.

## Remaining gap

Mikro2 cannot be marked `exam-bank-complete` until official exercise sheets, tutorial solutions, Probeklausuren, old exams, or solution keys are supplied and mapped at item level.
