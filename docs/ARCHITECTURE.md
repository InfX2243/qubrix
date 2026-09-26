# Qubrix MVP Architecture

## 1. Application Structure

Qubrix is a client-side React application with a small set of feature pages, shared UI components, React context providers, structured mock data, and deterministic mock services.

The application is intentionally frontend-only.

High-level structure:

```
src/
  components/     shared shell, UI, learning, visualization
  context/        learning, simulation, assessment state
  data/           circuit, assessment, instructor datasets
  pages/          learner, quantum, assessment, progress, instructor screens
  services/       mock simulation, tutor, instructor analytics
  mockData.ts     learner/curriculum/demo data
  styles.css      shared design system and responsive styling
```

## 2. Routing

`src/App.tsx` composes the providers and the application routes.

Primary learner routes:

- `/` — Dashboard
- `/learn` — Curriculum
- `/learn/module/:moduleId` — Module detail
- `/learn/module/:moduleId/lesson/:lessonId` — Lesson detail
- `/circuit-designer` — Circuit Designer
- `/simulator` — Simulator
- `/visualizer` — Visualizer
- `/tutor` — AI Tutor
- `/assessments` — Assessments
- `/assessments/:assessmentId` — Assessment detail
- `/progress` — Progress

Instructor routes:

- `/instructor` — Instructor overview
- `/instructor/learners` — Learner list
- `/instructor/learners/:id` — Learner detail
- `/instructor/analytics` — Analytics

Unknown routes redirect to the Dashboard.

## 3. State Management

The MVP uses React Context rather than a third-party state-management library.

### LearningContext

Tracks completed lesson IDs and derives:

- overall progress
- module progress
- current/continue lesson

Lesson completion is idempotent and remains in local in-memory state for the current page session.

### SimulationContext

Tracks:

- current circuit
- selected framework
- shots
- execution status
- latest/selected result
- simulation history
- saved circuit

Saved circuits use browser local storage under the current MVP key.

### AssessmentContext

Tracks:

- active assessment/question
- selected answers
- question feedback
- submitted results
- attempt count/best/latest summaries

Assessment results use browser local storage.

## 4. Mock Data

Core mock data is intentionally centralized:

- `src/mockData.ts` — learner, dashboard, curriculum, and activity data
- `src/data/circuitData.ts` — gates, frameworks, presets, and code representations
- `src/data/assessments.ts` — assessment questions and grading metadata
- `src/data/instructorAnalytics.ts` — fictional cohort, activity, module, and assessment data

The mock datasets are structured so presentation components can consume domain objects instead of inventing business data in each screen.

## 5. Learning Architecture

The learning flow is:

```
Dashboard
  ↓
Curriculum
  ↓
Module
  ↓
Lesson
  ↓
Interactive example / knowledge check
  ↓
Mark complete
  ↓
LearningContext
  ↓
Dashboard / Progress
```

Lesson pages can pass lesson context to the AI Tutor and can provide circuit-oriented interactions that connect learning with the quantum workflow.

## 6. Circuit Architecture

Circuit definitions live in `src/data/circuitData.ts`.

Supported gate types:

- X
- Y
- Z
- H
- S
- T
- CNOT
- Measure

The Circuit Designer manages the editable circuit state and supports presets such as:

- Single Qubit Superposition
- Bell State / Entanglement
- Simple Measurement Circuit

The Bell preset is the recommended demo bridge from learning to simulation.

## 7. Simulation Architecture

`src/services/mockSimulation.ts` is the simulation boundary.

`SimulationContext` passes the current circuit, framework, and shot count into the mock service. The service returns a structured SimulationResult that includes measurement data and metadata for downstream visualization.

Supported framework labels:

- Qiskit Aer
- PennyLane
- Cirq
- qBraid

The execution is deterministic teaching behavior. No external framework, cloud service, or quantum hardware is contacted.

The result is handed to the Visualizer through shared SimulationContext state.

## 8. Visualization Architecture

The Visualizer consumes the selected SimulationResult.

The visualization layer provides:

- measurement histogram
- probabilities
- statevector information
- circuit representation
- Bloch-sphere context where applicable
- result summary/history

The Visualizer does not run its own quantum execution. It renders the selected result produced by the simulation boundary.

## 9. AI Tutor Architecture

The Tutor uses contextual input assembled by the source page and a predefined mock response service in `src/services/mockTutor.ts`.

Supported contexts include:

- lesson
- circuit
- simulation
- visualization
- assessment

The Tutor therefore follows the product journey instead of acting as an isolated chat surface.

Responses are predefined frontend content. No external AI provider, API, backend, or network request is required.

## 10. Assessment Architecture

Assessment definitions live in `src/data/assessments.ts`.

The current assessment model supports:

- multiple-choice
- true/false
- multiple-select
- coding-pattern challenges

`AssessmentContext` manages local attempts, selected answers, question feedback, scoring, result summaries, and attempt limits.

Coding challenges use mock pattern grading; submitted code is not executed.

## 11. Instructor Analytics Architecture

Instructor analytics use an independent fictional cohort dataset.

`src/services/mockInstructorAnalytics.ts` derives learner summaries and aggregate views from `src/data/instructorAnalytics.ts`.

The instructor experience provides:

- cohort overview
- learner progress
- assessment performance
- module performance
- recent activity
- learner search/filtering
- learner detail
- assessment history

This is intentionally independent of production analytics infrastructure and does not imply real learner telemetry.

## 12. Cross-Feature Flow

The intended connected path is:

```
Lesson
  ↓
Circuit Designer
  ↓
SimulationContext
  ↓
mockSimulation
  ↓
SimulationResult
  ↓
Visualizer
  ↓
AI Tutor
  ↓
AssessmentContext
  ↓
Progress
```

The instructor side reads the fictional cohort model separately:

```
Mock cohort
  ↓
Instructor analytics adapter
  ↓
Instructor overview
  ↓
Learners
  ↓
Learner detail
```

## 13. Design and Runtime Boundaries

The shared CSS design system is in `src/styles.css`, with feature-specific styles alongside pages where needed. The application is light-mode only and uses the established Qubrix palette.

There are no backend, authentication, cloud, production analytics, quantum hardware, or external AI runtime boundaries in the MVP.
