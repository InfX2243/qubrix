# Qubrix

Qubrix is a frontend-only interactive quantum computing learning MVP. It connects structured lessons with circuit building, deterministic mock simulation, quantum-state visualization, contextual AI Tutor guidance, assessments, learner progress, and mock instructor analytics.

The product story is:

**Learn → Build → Simulate → Visualize → Understand → Practice → Assess → Progress**

For instructors, the companion story is:

**Monitor → Analyze → Inspect → Support**

## What Qubrix Is

Qubrix is designed to make quantum-computing concepts easier to explore by connecting educational content with hands-on circuit experimentation. A learner can move from a lesson into a circuit, run a controlled mock execution, inspect the resulting state and measurement views, ask the contextual AI Tutor for an explanation, and then reinforce the concept through assessment and progress tracking.

The MVP is intentionally a convincing browser prototype rather than a production quantum-computing service. Simulation, AI responses, learner data, assessment grading, and instructor analytics are local/mock experiences.

## MVP Scope

Included in the frozen MVP:

- Learner dashboard and navigation
- Four-module quantum curriculum
- Lessons, interactive examples, and completion tracking
- Quantum Circuit Designer
- Qiskit Aer, PennyLane, Cirq, and qBraid mock framework options
- Deterministic mock simulation
- Measurement, probability, statevector, circuit, and Bloch-sphere visualization where applicable
- Contextual mock AI Tutor
- Assessments, feedback, scoring, attempts, review, and retake support
- Learner progress and activity views
- Instructor dashboard, learner list/detail, and analytics
- Responsive light-mode application shell

## Core Experiences

- **Learning** — curriculum, modules, lessons, examples, knowledge checks
- **Circuit Designer** — visual circuit construction, presets, validation, code views
- **Mock Simulation** — framework selection, shots, deterministic local results
- **Quantum Visualization** — histogram, probabilities, statevector, circuit, Bloch-sphere context
- **AI Tutor** — contextual explanations for lessons, circuits, simulations, visualizations, and assessments
- **Assessments** — multiple-choice, true/false, multiple-select, and coding-pattern challenges with mock grading
- **Learner Progress** — module completion, assessment performance, activity, and next-lesson guidance
- **Instructor Dashboard** — cohort overview, learner inspection, module performance, assessment analytics, and activity

## Important MVP Limitation

Qubrix is a frontend-only MVP.

- No backend is required.
- No database is required.
- No cloud infrastructure is required.
- No production authentication is implemented.
- Quantum execution is mocked locally; no quantum hardware or external simulator is contacted.
- AI Tutor responses are predefined frontend content; no external AI provider or API is contacted.
- Assessment grading is local/mock and coding answers are pattern-checked rather than executed.
- Instructor analytics use fictional local cohort data.
- Persistence is limited to browser local state/storage used by the current MVP.

The interface deliberately labels mock simulation, mock AI, mock grading, and mock analytics where those distinctions matter.

## Tech Stack

Detected from the repository:

- React 18
- TypeScript 5.7
- Vite 6
- React Router 7
- lucide-react for icons
- Plain CSS with shared Qubrix design tokens

No runtime backend, API client, chart service, quantum SDK, or AI SDK is required.

## Project Structure

- `src/App.tsx` — application routes and provider composition
- `src/components/` — shared shell, UI, learning, and visualization components
- `src/context/` — local learning, simulation, and assessment state
- `src/data/` — curriculum-adjacent circuit, assessment, and instructor datasets
- `src/pages/` — learner, quantum, assessment, progress, and instructor screens
- `src/services/` — deterministic mock simulation, tutor, and instructor analytics adapters
- `src/mockData.ts` — learner dashboard/curriculum mock data and derived progress helpers
- `src/styles.css` — shared application styling and design tokens
- `requirements.md` — authoritative MVP product and UX specification
- `docs/` — handoff documentation for the demo, architecture, and frozen scope

## Getting Started

Requirements:

- Node.js with npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local Vite URL printed by the terminal.

For a production-style local preview:

```bash
npm run build
npm run preview
```

No environment variables are required by the current application.

> The repository currently does not include a committed npm lockfile, so `npm install` resolves the declared package ranges from `package.json`.

## Available Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | TypeScript project build followed by Vite production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run TypeScript with `--noEmit`; this is the repository's current lint/typecheck-style check |

There is no `npm test` script and no automated test framework configured in the current repository.

## Demo Flow

Use the recommended end-to-end story in [docs/DEMO.md](docs/DEMO.md):

**Dashboard → Curriculum → Lesson → Circuit Designer → Mock Simulation → Results/Visualizer → AI Tutor → Assessment → Review → Progress → Instructor Dashboard → Learner Detail**

Recommended quantum example: the existing **Bell State / Entanglement** preset.

Recommended assessment: the existing **Quantum Concepts Checkpoint**.

## Architecture Overview

Learner-facing flow:

**Learner → Learning → Circuit → Simulation → Visualization → AI Tutor → Assessment → Progress**

Instructor-facing flow:

**Instructor → Analytics → Learners → Learner Detail**

Shared React context keeps learning, simulation, and assessment state available across the relevant screens. Mock services provide deterministic simulation, predefined tutor responses, and fictional instructor analytics without external network dependencies.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the handoff-level architecture map.

## Mock Architecture

Mock data is intentionally separated from presentation where practical:

- Curriculum and learner demo data: `src/mockData.ts`
- Circuit definitions and presets: `src/data/circuitData.ts`
- Assessment definitions: `src/data/assessments.ts`
- Instructor cohort data: `src/data/instructorAnalytics.ts`
- Mock simulation adapter: `src/services/mockSimulation.ts`
- Mock AI Tutor adapter: `src/services/mockTutor.ts`
- Instructor analytics adapter: `src/services/mockInstructorAnalytics.ts`

The architecture is structured so future services could replace these adapters without requiring production infrastructure in this MVP.

## Demo State and Reset

The initial learner state is intentionally partial rather than 100% complete. The dashboard uses the learning context to calculate current progress from the seeded completed lessons.

The current application has no dedicated reset control. Learning state and most simulation state are in memory and return to their initial values on a fresh page load. Saved circuits and assessment results use browser local storage, so those can persist across reloads.

For a clean demonstration, use a fresh browser profile/incognito window or clear the site's local storage before starting. This is a browser-state reset, not a new product feature.

## Known Limitations

- Mock simulation is deterministic teaching data, not physical or cloud quantum execution.
- AI Tutor responses are predefined and contextual rather than generated by a live model.
- Assessment coding challenges do not execute submitted code.
- Instructor analytics are based on fictional local cohort data.
- No production authentication, backend, database, cloud, or analytics infrastructure exists.
- No automated test runner is configured.
- A committed npm lockfile is not present.
- Browser/device validation depends on a local developer environment; repository tooling used for this handoff cannot itself run a browser session.

## Requirements Source of Truth

`requirements.md` remains the authoritative MVP specification. It is intentionally not rewritten as part of the handoff unless an actual scope or implementation conflict requires it.

One current demo-data detail differs from an example in the requirements: the example user is described there as 62% complete, while the implementation now calculates the seeded learner at 61% from the completed-lesson state. This is a data-alignment correction, not a scope change.

## Handoff

Before presenting or handing off the MVP, review:

1. [docs/DEMO.md](docs/DEMO.md)
2. [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
3. [docs/MVP_SCOPE.md](docs/MVP_SCOPE.md)
4. `requirements.md`

The MVP feature set is frozen after Phase 9 hardening. Phase 10 is documentation, demonstration, setup, and handoff readiness only.
