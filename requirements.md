# Qubrix MVP Requirements

> **Document status:** Authoritative MVP product and UX specification  
> **Product:** Qubrix — AI-Based Interactive Quantum Algorithm Learning Platform  
> **Scope:** Frontend-only interactive MVP; all persistence, simulation, AI, authentication, and analytics are mocked  
> **Audience:** Product, UX, design, frontend engineering, QA, and AI coding agents  
> **Source of truth:** This document governs the MVP implementation. If an implementation detail is not specified here, choose the simplest solution consistent with the principles and constraints below.

---

## 1. Product Overview

Qubrix is an AI-powered interactive web application for learning, designing, simulating, and visualizing quantum algorithms.

The MVP combines six required product deliverables:

1. Learning Content & Curriculum Module
2. Quantum Circuit Designer
3. Multi-Framework Simulation Engine
4. Quantum State & Result Visualization
5. Assessment & Progress Tracking Module
6. Software Platform / Web Application

AI assistance is included only where it directly supports those deliverables: tutoring, explanations, code generation, debugging, circuit explanations, optimization suggestions, and personalized learning recommendations.

The MVP is intentionally a **convincing frontend prototype**, not a production quantum-computing service. All data and execution are simulated locally in frontend state. The UI must make interactions feel functional and believable while clearly treating simulated outputs as mock results.

### 1.1 Product promise

A reviewer should be able to move from learning a quantum concept to building a circuit, selecting a framework, running a simulated execution, inspecting visual results, asking the AI tutor about the result, completing an assessment, and seeing progress update without requiring a backend or external service.

### 1.2 Product principles

The MVP MUST follow these principles:

1. **MVP-first:** Implement only the specified scope.
2. **Frontend-first:** The complete demonstration must work in a browser using local/mock state.
3. **Mock everything:** No production services are required or permitted.
4. **Demonstrability over infrastructure:** Prioritize visible, believable interactions.
5. **Interactive by default:** Every major control must produce a visible result.
6. **Fixed scope:** Do not add unrelated LMS, social, cloud, or developer-platform features.
7. **Reusable architecture:** Organize mock data and UI state so a future API layer can replace them.
8. **Realistic mock data:** Results, copy, timings, scores, and analytics should look plausible.
9. **Replaceable boundaries:** Components should consume structured data rather than hardcoded screen-specific values wherever practical.
10. **No production infrastructure:** Do not build servers, databases, cloud resources, authentication infrastructure, or real quantum/AI integrations.

---

## 2. Problem Statement

Quantum computing concepts are difficult to learn because learners must connect abstract mathematics, quantum states, circuit notation, code, algorithmic intent, and measurement results.

A useful learning environment should let a learner:

- understand a concept in plain language;
- inspect an interactive quantum circuit;
- modify the circuit;
- see how a circuit would behave;
- inspect state and measurement visualizations;
- compare common quantum software frameworks;
- ask for contextual explanations;
- test understanding through assessments;
- track progress.

The Qubrix MVP demonstrates this integrated learning loop without requiring production infrastructure or access to quantum hardware.

---

## 3. MVP Goal

The MVP goal is to demonstrate the complete learning-to-experiment workflow:

**Learn → Build → Simulate → Visualize → Ask → Assess → Track progress**

The MVP is complete when a reviewer can execute the primary demo flow end-to-end using only frontend interactions and mock data, and each of the six required deliverables is represented by a coherent, testable UI experience.

### 3.1 MVP success conditions

The MVP MUST:

- present a polished light-mode Qubrix application;
- contain a structured quantum curriculum;
- allow interactive circuit editing;
- support X, Y, Z, H, S, T, CNOT, and Measure;
- support mocked Qiskit Aer, PennyLane, Cirq, and qBraid execution;
- update visualization based on the current/mock execution;
- provide a mocked AI tutor;
- provide quizzes and coding challenges;
- update learner progress locally;
- provide a mock instructor analytics view;
- be responsive on desktop, tablet/laptop, and mobile;
- contain explicit loading, success, error, and empty states;
- avoid dead primary actions.

---

## 4. Scope

### 4.1 In scope

The MVP MUST include the following six deliverables.

#### Deliverable 1 — Learning Content & Curriculum

- Structured modules and lessons
- Concept explanations
- Interactive examples
- Circuit examples
- Visual explanations
- Key takeaways
- Try-it-yourself interactions
- Lesson completion
- Progress indicators
- AI tutor assistance

#### Deliverable 2 — Quantum Circuit Designer

- Qubit rows
- Gate palette
- Circuit canvas
- Gate placement/editing/removal
- Multi-qubit CNOT placement
- Measurement
- Reset/clear
- Circuit validation
- Run action
- Code view/editor for Qiskit, PennyLane, and Cirq

#### Deliverable 3 — Multi-Framework Simulation Engine

- Framework selector
- Qiskit Aer
- PennyLane
- Cirq
- qBraid
- Mock loading/execution
- Mock metadata
- Deterministic/controlled mock results
- Result handoff to visualization

#### Deliverable 4 — Quantum State & Result Visualization

- Circuit diagram
- Bloch sphere
- Statevector viewer
- Measurement histogram
- Empty/loading/result states
- Visualization updates after circuit execution

#### Deliverable 5 — Assessment & Progress Tracking

- Quizzes
- Multiple-choice questions
- Coding challenges
- Mock grading
- Scores
- Explanations
- Retry
- Completion status
- Progress dashboard
- Recommended next lesson
- Activity/streak mock data

#### Deliverable 6 — Software Platform / Web Application

- Dashboard
- Learn
- Circuit Designer
- Simulator
- Visualizer
- Assessments
- Progress
- Instructor Dashboard
- Global navigation
- Responsive shell
- Notifications/toasts
- Modal behavior
- Mock profile/auth states if included

### 4.2 Supporting capabilities permitted

These MAY be included only when directly supporting the six deliverables:

- Mock authentication/profile UI
- AI tutor
- AI explanations
- AI code generation
- AI debugging suggestions
- AI optimization suggestions
- Personalized recommendations
- Instructor analytics
- Navigation/dashboard UI

### 4.3 Scope guard

A proposed feature MUST be rejected from the MVP if it does not directly support one of the six deliverables.

Do not turn Qubrix into:

- a general-purpose LMS;
- a social network;
- a community/forum;
- a production quantum cloud service;
- a general developer platform;
- a collaboration product;
- a payment/subscription product.

---

## 5. Users & Personas

### 5.1 Student / Learner

**Primary objective:** Learn quantum computing through structured content and experimentation.

The learner MUST be able to:

- browse the curriculum;
- open lessons;
- understand concepts;
- interact with examples;
- build circuits;
- run mock simulations;
- inspect visual results;
- ask the AI tutor for help;
- complete quizzes;
- complete coding challenges;
- view scores;
- track progress;
- continue from the recommended next lesson.

### 5.2 Researcher / Professional

**Primary objective:** Experiment with quantum circuits and compare framework-oriented representations.

The researcher/professional SHOULD be able to:

- build a circuit quickly;
- inspect the circuit visually;
- switch simulation frameworks;
- inspect mock execution metadata;
- inspect statevector and measurement results;
- view generated framework-specific code;
- ask the AI for circuit explanations or optimization ideas.

No production research workflow is required.

### 5.3 Instructor

**Primary objective:** Understand aggregate learner activity and performance.

The instructor MUST be able to view:

- learner count;
- active learner count;
- completion metrics;
- assessment performance;
- module completion;
- learner table;
- recent activity.

No real role-based authorization or analytics backend is required.

### 5.4 Mock user model

The application MAY provide a role/profile selector for demonstration. A user role is a local frontend state, not an authenticated identity.

Example mock users:

- Alex Morgan — Student — 62% overall progress
- Priya Shah — Student — 78% overall progress
- Daniel Lee — Student — 41% overall progress
- Dr. Maya Chen — Instructor

---

## 6. Product Architecture

### 6.1 Architectural approach

The MVP SHOULD use a modular frontend architecture with these conceptual layers:

- **Application shell:** navigation, layout, responsive behavior, global feedback.
- **Feature modules:** dashboard, learning, circuit designer, simulator, visualizer, assessments, progress, instructor analytics.
- **Shared UI:** buttons, cards, tabs, dialogs, badges, tooltips, progress bars, charts, form controls.
- **Mock data layer:** structured data objects for lessons, gates, circuits, simulations, assessments, users, analytics, and AI responses.
- **State layer:** local frontend state for selected entities and cross-feature interactions.
- **Mock services/adapters:** deterministic functions that imitate simulation, grading, and AI response latency without external calls.

The exact frontend framework is implementation-specific unless already established by the repository. The requirements do not mandate a framework, state library, chart library, or editor library.

### 6.2 Future API compatibility

Mock data SHOULD use shapes that can later map to API responses. Components SHOULD receive data through props/state interfaces rather than embedding business data inside visual components.

A future production implementation should be able to replace:

- mock user data with authentication/profile APIs;
- mock curriculum data with a content service;
- mock simulation functions with simulator APIs;
- mock AI responses with an AI service;
- mock assessment grading with an assessment service;
- mock analytics with an analytics backend.

This future compatibility MUST NOT cause production infrastructure to be implemented in the MVP.

### 6.3 Cross-feature interaction model

The primary shared flow is:

1. A lesson can provide a starting circuit.
2. The circuit designer can modify the circuit.
3. The simulator can run the current circuit against a selected framework.
4. The resulting mock execution object becomes the visualization input.
5. The AI tutor can reference the current circuit and latest result.
6. Assessment completion updates progress state.
7. Lesson completion updates progress state.
8. Progress state is displayed on dashboard/progress views.
9. Instructor analytics uses independent mock aggregate data and MAY visually reflect demo activity.

---

## 7. Information Architecture

### 7.1 Main navigation

The main navigation MUST contain:

1. Dashboard
2. Learn
3. Circuit Designer
4. Simulator
5. Visualizer
6. Assessments
7. Progress
8. Instructor Dashboard

Navigation labels MUST remain understandable without quantum-specific knowledge.

### 7.2 Global header

The header SHOULD include:

- Qubrix brand/logo text;
- current page/context where useful;
- optional global search only if it supports existing content navigation;
- notification affordance;
- mock profile/avatar menu.

The header MUST NOT become a feature-discovery marketplace or social feed.

### 7.3 Sidebar/navigation

Desktop/tablet navigation SHOULD use a persistent sidebar or equivalent navigation rail.

Each navigation item MUST have:

- icon;
- text label;
- active state;
- accessible label.

The active item MUST use the Qubrix primary purple treatment.

On mobile, the navigation MUST become a drawer/menu.

### 7.4 Breadcrumbs

Breadcrumbs SHOULD appear on deep pages such as:

- Learn → Module → Lesson
- Assessments → Assessment → Question/Challenge
- Circuit Designer → Saved/Example Circuit, if such hierarchy is exposed.

Breadcrumbs MUST not be used when they provide no useful hierarchy.

### 7.5 Page-level conventions

Every primary page MUST have:

- page title;
- concise contextual description where appropriate;
- primary contextual action where one exists;
- consistent content container;
- visible loading/error/empty states as applicable.

---

## 8. Functional Requirements

## 8.1 Dashboard

### 8.1.1 Learner dashboard

The learner dashboard MUST display:

- welcome section;
- overall course completion percentage;
- current module;
- current/continue lesson;
- recommended next lesson;
- recent activity;
- quick access to Circuit Designer;
- quick access to Simulator;
- AI Tutor entry point;
- assessment summary.

### 8.1.2 Continue Learning

The Continue Learning card MUST:

- identify the current lesson;
- show progress within the lesson/module;
- provide a primary Continue button;
- navigate to the relevant lesson;
- reflect locally updated completion.

### 8.1.3 Quick actions

Quick actions MUST include at least:

- Open Circuit Designer
- Open Simulator
- Ask AI Tutor

Each action MUST navigate/open the corresponding experience.

### 8.1.4 Dashboard activity

Recent activity SHOULD show realistic items such as:

- completed lesson;
- ran a circuit;
- scored 80% on a quiz;
- completed a coding challenge.

Activity may be generated from a small mock list and does not require persistent history infrastructure.

---

## 8.2 Learning Content & Curriculum

### 8.2.1 Curriculum structure

The MVP MUST include four modules.

#### Module 1 — Quantum Computing Fundamentals

Lessons/topics:

1. What is quantum computing?
2. Classical bits vs qubits
3. Qubit states
4. Superposition
5. Measurement
6. Probability amplitudes

#### Module 2 — Quantum Gates

Lessons/topics:

1. X gate
2. Y gate
3. Z gate
4. H gate
5. S gate
6. T gate
7. CNOT gate
8. Measurement operation

#### Module 3 — Quantum Concepts

Lessons/topics:

1. Superposition
2. Entanglement
3. Measurement
4. Quantum state representation
5. Bloch sphere

#### Module 4 — Quantum Algorithms

Introductory lessons/topics:

1. Deutsch-Jozsa
2. Grover's Algorithm
3. QAOA
4. VQE

### 8.2.2 Lesson anatomy

Every lesson MUST support:

- lesson title;
- module title;
- lesson progress indicator;
- short overview;
- concept explanation;
- at least one concrete example;
- circuit example where applicable;
- visual explanation where applicable;
- key takeaways;
- Try it yourself interaction;
- Mark lesson complete action;
- AI Tutor entry point.

### 8.2.3 Curriculum content depth

The MVP MUST contain enough content to demonstrate the architecture but MUST NOT attempt to create a complete textbook.

A typical lesson SHOULD contain:

- 2–5 short explanatory sections;
- 1–2 examples;
- 3–5 key takeaways;
- one interactive or visual moment where applicable.

### 8.2.4 Example educational content

The Superposition lesson SHOULD communicate that a qubit can be represented as a linear combination of basis states and that measurement produces a classical outcome according to the state's probabilities.

The interactive example SHOULD show:

- initial state `|0⟩`;
- H gate;
- resulting state approximately `(|0⟩ + |1⟩)/√2`;
- measurement probabilities approximately 50% / 50%.

The language MUST be beginner-friendly and avoid presenting the mock visualization as a laboratory measurement.

### 8.2.5 Interactive examples

A lesson's Try it yourself control MUST do at least one visible thing, such as:

- load a starter circuit into Circuit Designer;
- toggle an example gate;
- reveal a visualization;
- run a controlled mock simulation;
- change a displayed state.

The interaction MUST not be a dead button.

### 8.2.6 Lesson completion

When Mark lesson complete is activated:

1. Validate that the action is allowed.
2. Update local progress state.
3. Show a success toast/confirmation.
4. Update the lesson/module progress indicator.
5. Update dashboard/progress views that consume the same state.
6. Offer the next lesson or return to module.

Repeated completion MUST be idempotent.

### 8.2.7 Learning states

The Learn experience MUST define:

- curriculum loading state;
- module empty state;
- lesson not selected state;
- lesson loading state;
- lesson content state;
- completed state;
- unavailable/mock content error state.

---

## 8.3 Quantum Circuit Designer

### 8.3.1 Purpose

The Circuit Designer is the central interactive construction surface.

It MUST allow a learner to visually construct a quantum circuit without requiring code.

### 8.3.2 Gate palette

The palette MUST contain:

- X
- Y
- Z
- H
- S
- T
- CNOT
- Measure

Each gate MUST have:

- gate label;
- recognizable visual treatment;
- accessible name;
- short tooltip/explanation for unfamiliar gates.

### 8.3.3 Circuit canvas

The canvas MUST contain:

- qubit rows;
- row labels such as q0, q1;
- operation/time columns;
- visible gate placements;
- measurement markers;
- controlled-operation connectors for CNOT;
- selection state.

The canvas MUST show an empty state when no operations exist.

### 8.3.4 Qubit management

The user MUST be able to:

- add a qubit line;
- remove a qubit line when valid;
- reset the circuit;
- clear operations.

The implementation MUST enforce a sensible minimum of one qubit.

Removing a qubit MUST remove or invalidate operations attached to that row and MUST not silently leave broken multi-qubit gates.

### 8.3.5 Gate placement

The user MUST be able to place supported gates into valid circuit cells.

Drag-and-drop behavior SHOULD be supported where practical.

If implementation uses click-to-place instead of drag-and-drop, the experience MUST still make placement discoverable and responsive.

### 8.3.6 Moving gates

A placed gate MUST be movable to another valid operation column/row according to gate constraints.

Moving a gate MUST update the circuit model and diagram immediately.

### 8.3.7 Removing gates

The user MUST be able to remove a selected gate through an obvious action such as:

- Delete key;
- delete control;
- context menu.

Destructive removal MUST use #D41018.

### 8.3.8 Multi-qubit CNOT

CNOT MUST require:

- one control qubit;
- one target qubit;
- a shared operation column.

The UI MUST render a clear control marker, target marker, and connecting line.

Invalid CNOT placement MUST be rejected with an explanatory message rather than creating a broken circuit.

### 8.3.9 Measurement

Measure MUST be placeable on individual qubits.

The visual treatment MUST distinguish measurement from ordinary unitary gates.

### 8.3.10 Selection

The selected gate/circuit element MUST have a clear focus/selection state.

Selection SHOULD expose useful metadata such as:

- gate name;
- qubit(s);
- operation column;
- short explanation.

### 8.3.11 Circuit controls

The designer MUST provide:

- Add qubit
- Clear/Reset
- Run Circuit
- Code view/editor

The primary Run Circuit action MUST connect to the current mock simulation state.

### 8.3.12 Validation

Before simulation, validate at minimum:

- at least one qubit exists;
- every placed gate has valid coordinates;
- CNOT has valid control/target;
- no operation references a removed qubit;
- measurement placement is valid.

An invalid circuit MUST show an actionable inline error or toast and MUST NOT enter the simulated success state.

### 8.3.13 Circuit examples

The designer MUST provide starter examples for at least:

- single-qubit X;
- single-qubit H;
- H followed by Measure;
- two-qubit Bell-style circuit: H on q0 followed by CNOT q0→q1.

### 8.3.14 Reset behavior

Reset MUST return the circuit to a known initial state, preferably one qubit in `|0⟩`, with no operations.

The reset action SHOULD require confirmation only if the circuit has unsaved/active edits; because this is an MVP, a simple confirmation dialog is sufficient.

### 8.3.15 Code editor

The code editor MUST support mock examples for:

- Qiskit
- PennyLane
- Cirq

The editor MUST provide:

- framework selector;
- syntax highlighting;
- realistic code;
- read/edit behavior suitable for a prototype;
- copy action;
- reset-to-generated-code action.

Code MUST NOT execute through a real runtime.

Changing the circuit SHOULD update generated example code for the selected framework.

Example Qiskit output may resemble:

```python
from qiskit import QuantumCircuit

qc = QuantumCircuit(1, 1)
qc.h(0)
qc.measure(0, 0)
```

The exact generated code can be simplified for the MVP, but it MUST look framework-appropriate.

### 8.3.16 Circuit designer responsive behavior

On small screens:

- gate palette MUST be horizontally scrollable or collapsible;
- circuit canvas MUST remain horizontally scrollable;
- qubit labels MUST remain visible;
- controls MUST remain reachable;
- visualizations MUST stack below the canvas;
- code editor MUST scroll horizontally rather than forcing page-wide overflow.

---

## 8.4 Multi-Framework Simulation

### 8.4.1 Supported frameworks

The simulator MUST present these four framework options:

1. Qiskit Aer
2. PennyLane
3. Cirq
4. qBraid

Framework names are UI labels only in the MVP; no SDK/API integration is permitted.

### 8.4.2 Framework selector

The framework selector MUST:

- show the selected framework;
- show a short description;
- allow switching before execution;
- update mock execution metadata accordingly.

### 8.4.3 Execution lifecycle

Clicking Run Circuit MUST follow this visible lifecycle:

1. Validate circuit.
2. Set execution state to loading/running.
3. Show selected framework.
4. Show mock execution details.
5. Resolve to a deterministic/controlled mock result.
6. Set execution state to success.
7. Pass result to visualization components.
8. Update recent activity where appropriate.

A short artificial delay MAY be used to make the execution state visible, but it MUST remain fast enough for a demo.

### 8.4.4 Mock execution metadata

Every successful mock execution MUST expose:

- Framework
- Number of qubits
- Number of gates
- Shots
- Execution time
- Status
- Result identifier or timestamp-like label if useful

The UI MUST label the experience as simulated/mock where confusion with real execution could arise.

### 8.4.5 Mock result rules

The simulator SHOULD use deterministic circuit-pattern rules rather than random values wherever practical.

Required baseline behavior:

**X on `|0⟩`:**
- `|0⟩` ≈ 0%
- `|1⟩` ≈ 100%

**H on `|0⟩`:**
- `|0⟩` ≈ 50%
- `|1⟩` ≈ 50%

**H followed by measurement:**
- believable distribution centered around 50% / 50%;
- controlled deterministic counts for the same circuit and shot count.

**Bell-style H + CNOT:**
- `|00⟩` and `|11⟩` approximately split;
- `|01⟩` and `|10⟩` approximately zero.

The result generator MAY support simplified additional rules for Y, Z, S, and T without claiming physically complete simulation.

### 8.4.6 Framework-specific presentation

Changing frameworks MUST visibly change framework metadata and may change mock execution time/count details.

For example:

| Framework | Mock execution label | Mock execution time |
|---|---|---:|
| Qiskit Aer | Local simulator | 24 ms |
| PennyLane | Device simulation | 31 ms |
| Cirq | Circuit simulation | 19 ms |
| qBraid | Hosted simulator (mock) | 42 ms |

These values are illustrative mock values, not performance claims.

### 8.4.7 Failure state

The simulator MUST support a mock failure path for demonstration.

A simulated failure MUST:

- stop loading state;
- display a concise error;
- explain that the execution was mocked;
- allow retry;
- leave the circuit intact.

---

## 8.5 Quantum State & Result Visualization

### 8.5.1 Visualization page

The Visualizer MUST provide a coordinated view of:

- Circuit Diagram
- Bloch Sphere
- Statevector Viewer
- Measurement Histogram

The Simulator MAY embed these panels after execution, while the dedicated Visualizer page provides the full visualization experience.

### 8.5.2 Circuit diagram

The diagram MUST show:

- q0/q1/etc. wires;
- operation columns;
- supported gates;
- CNOT control/target;
- measurement operations.

The diagram MUST reflect the latest current/mock circuit.

### 8.5.3 Bloch sphere

The Bloch Sphere MUST display:

- X, Y, Z axes;
- visible sphere;
- state vector;
- `|0⟩`;
- `|1⟩`;
- representative superposition state.

For an H-applied `|0⟩` state, the state vector SHOULD move to a representative equatorial direction.

The Bloch sphere is a visual educational representation. It does not need to implement full state tomography.

### 8.5.4 Statevector viewer

The viewer MUST show, as applicable:

- basis state;
- amplitude;
- probability;
- complex amplitude representation.

For example:

| Basis | Amplitude | Probability |
|---|---|---:|
| `|0⟩` | `0.707 + 0i` | 50% |
| `|1⟩` | `0.707 + 0i` | 50% |

For multi-qubit examples, display basis states such as `|00⟩`, `|01⟩`, `|10⟩`, `|11⟩`.

### 8.5.5 Measurement histogram

The histogram MUST display:

- basis-state labels;
- probability or count;
- visually distinct bars;
- readable values.

The histogram MUST support one- and multi-qubit result labels.

### 8.5.6 Visualization synchronization

After successful simulation:

- the circuit diagram MUST reflect the circuit;
- statevector MUST reflect the mock result;
- histogram MUST reflect mock counts/probabilities;
- Bloch sphere MUST reflect the simplified state representation.

All panels MUST derive from the same result object to avoid contradictory mock outputs.

### 8.5.7 Empty state

Before a circuit has been run, the visualization area MUST explain:

- no simulation result is available yet;
- how to create/run a circuit;
- which action starts the visualization.

### 8.5.8 Loading state

During simulation, visualizations MUST show skeleton/loading treatment or a clear execution state rather than stale result content presented as current.

### 8.5.9 Error state

If simulation fails, visualizations MUST show a result-unavailable state with retry guidance.

---

## 8.6 AI Tutor

### 8.6.1 Purpose

The AI Tutor provides contextual educational assistance inside the MVP.

It MUST be implemented entirely with mocked responses.

No external AI API, model endpoint, API key, inference server, or cloud AI service may be used.

### 8.6.2 AI panel

The tutor SHOULD be accessible as:

- a side panel on learning/circuit pages;
- a dedicated tutor surface if needed;
- a dashboard quick action.

The panel MUST show:

- conversation history for the current local session;
- user input;
- assistant responses;
- loading state;
- clear/reset conversation action.

### 8.6.3 Supported intents

The mocked tutor MUST support:

1. Concept explanation
2. Code generation
3. Debugging
4. Circuit explanation
5. Optimization suggestions
6. Personalized recommendations

### 8.6.4 Example prompts and responses

**Prompt:** "Explain superposition."

**Mock response behavior:** Explain that a qubit can be represented as a combination of basis states and use an H gate on `|0⟩` as a simple example. Mention approximate 50% measurement probabilities without implying that every superposition has equal probabilities.

**Prompt:** "Why is my circuit returning this result?"

**Mock response behavior:** Inspect the current mock circuit/result state and explain the relevant gates. For H followed by measurement, explain the approximately equal outcome probabilities.

**Prompt:** "Generate Qiskit code for this circuit."

**Mock response behavior:** Return realistic Qiskit-style code corresponding to the visible circuit.

**Prompt:** "How can I optimize this circuit?"

**Mock response behavior:** Suggest safe educational examples such as removing adjacent redundant X gates or avoiding unnecessary operations. The response MUST be framed as a suggestion based on the current mock circuit.

**Prompt:** "What should I learn next?"

**Mock response behavior:** Reference the learner's mock progress and recommend the next incomplete curriculum item.

### 8.6.5 AI response architecture

Mock responses SHOULD be keyed by intent/keywords and contextual state, for example:

- `superposition`
- `qiskit`
- `debug`
- `optimize`
- `result`
- `next lesson`

If no specialized response is matched, return a generic educational fallback.

### 8.6.6 AI loading/failure

The UI MUST simulate:

- typing/loading state;
- successful response;
- optional mock unavailable/failure state.

A failure MUST provide a Retry action and MUST NOT break the rest of the application.

### 8.6.7 AI safety/accuracy presentation

The MVP SHOULD label the tutor as "AI Tutor — Demo" or equivalent so users understand responses are simulated.

The tutor MUST NOT claim to have executed real code or real quantum hardware.

---

## 8.7 Assessments

### 8.7.1 Assessment types

The MVP MUST include:

- multiple-choice quizzes;
- coding challenges.

### 8.7.2 Quiz interface

The quiz UI MUST include:

- assessment title;
- module/topic;
- question number;
- question text;
- answer choices;
- selected state;
- navigation;
- submit action;
- progress indicator.

### 8.7.3 Sample quiz coverage

Sample questions MUST cover:

- qubits;
- superposition;
- quantum gates;
- entanglement;
- measurement;
- Grover's Algorithm;
- Deutsch-Jozsa;
- QAOA;
- VQE.

### 8.7.4 Grading

On submission:

1. Evaluate against mock answer keys.
2. Calculate score.
3. Show correct/incorrect status.
4. Show concise explanations.
5. Update assessment result state.
6. Update progress.
7. Provide Retry.

Grading MUST be deterministic for the same answer set.

### 8.7.5 Coding challenges

Coding challenges SHOULD visually resemble a coding exercise:

- problem statement;
- expected goal;
- framework/language selector where relevant;
- code editor;
- Run/Submit action;
- mock output;
- grading result;
- explanation.

The code MUST NOT execute in a real interpreter for the MVP.

### 8.7.6 Mock coding grading

The grader MAY inspect simple text patterns, such as whether the expected gate/function appears, or use predefined scenario results.

The UI MUST communicate that grading is simulated if the distinction could otherwise be unclear.

### 8.7.7 Retry

Retry MUST:

- reset or optionally preserve the user's answer according to a clear choice;
- clear previous grading state;
- return the assessment to an actionable state.

### 8.7.8 Assessment empty state

If no assessment is selected, display:

- explanatory empty state;
- available assessment categories;
- action to select an assessment.

---

## 8.8 Progress Tracking

### 8.8.1 Progress dashboard

The Progress page MUST display:

- overall completion;
- module completion;
- quiz scores;
- coding challenge scores;
- learning streak/mock activity;
- recent activity;
- recommended next lesson;
- achievement/completion indicators.

### 8.8.2 Example learner progress

Use realistic mock data such as:

- Overall: 62%
- Fundamentals: 100%
- Quantum Gates: 75%
- Quantum Concepts: 45%
- Algorithms: 20%
- Latest quiz: 84%
- Latest coding challenge: 78%
- Mock streak: 5 days

The exact values may vary, but all displayed values MUST be internally consistent enough for a demo.

### 8.8.3 Progress synchronization

Lesson completion and assessment submission MUST update shared local progress state.

The dashboard and Progress page MUST reflect the same local state during the session.

### 8.8.4 Recommendation

The recommended next lesson SHOULD be the first incomplete lesson in curriculum order, unless the user has an explicitly selected learning path.

The recommendation MUST be actionable.

---

## 8.9 Instructor Dashboard

### 8.9.1 Purpose

The Instructor Dashboard is a mock analytics surface demonstrating how instructors could monitor learner outcomes.

### 8.9.2 Required metrics

Display:

- total learners;
- active learners;
- average completion;
- average assessment score.

### 8.9.3 Required visualizations

Include:

- module completion chart;
- assessment performance chart;
- learner table;
- recent learner activity.

Charts MUST have readable labels and accessible text summaries where practical.

### 8.9.4 Learner table

The table SHOULD contain:

- learner name;
- progress;
- latest assessment score;
- current module;
- last activity;
- status.

On mobile, the table MUST become a responsive card/list representation or support horizontal scrolling without breaking the page.

### 8.9.5 Mock analytics

Analytics MUST use static/local mock data.

No analytics collection, tracking infrastructure, or user-level production data is required.

---

## 9. UI/UX Requirements

### 9.1 Interaction language

Primary actions MUST use direct labels such as:

- Continue Learning
- Mark Complete
- Add Qubit
- Run Circuit
- Reset Circuit
- View Results
- Ask AI Tutor
- Submit Quiz
- Retry
- Generate Code

Avoid vague labels such as "Go", "Do It", or "Action".

### 9.2 Feedback

Every major user action MUST have visible feedback.

Examples:

- Add Qubit → row appears immediately.
- Add Gate → gate appears in selected cell.
- Delete Gate → gate disappears and selection clears.
- Run Circuit → loading state → result.
- Mark Complete → progress changes + success toast.
- Submit Quiz → score screen.
- Ask AI → loading state → response.
- Retry → previous error clears and operation restarts.

### 9.3 Toasts

Toasts SHOULD be used for transient confirmation/errors, such as:

- "Lesson marked complete."
- "Circuit reset."
- "Circuit copied."
- "Simulation completed."
- "Mock simulation failed. Try again."

Toasts MUST not contain critical information that disappears before a user can act.

### 9.4 Modals

Use modals for:

- destructive/reset confirmation where appropriate;
- contextual details;
- focused assessment submission confirmation if needed.

Modals MUST:

- trap focus appropriately;
- have accessible labels;
- support Escape to close where appropriate;
- provide clear primary/secondary actions.

### 9.5 Hover/focus/active/disabled

Interactive elements MUST have visually distinct:

- default;
- hover;
- focus;
- active/selected;
- disabled;
- loading states.

Focus MUST remain visible in keyboard navigation.

### 9.6 Forms

Forms MUST:

- use explicit labels;
- validate input;
- provide actionable errors;
- preserve entered data when practical;
- disable submit only when there is a clear reason.

### 9.7 Loading states

Loading states MUST communicate what is happening.

Avoid indefinite spinners.

Mock operations SHOULD have a bounded completion state.

### 9.8 Empty states

Empty states MUST explain:

1. what is missing;
2. why it matters;
3. what the user can do next.

### 9.9 Error states

Errors MUST:

- use clear language;
- avoid technical stack traces;
- identify the affected action;
- provide Retry or another recovery action where possible.

---

## 10. Qubrix Visual Design System

The entire MVP MUST use **LIGHT MODE**.

### 10.1 Brand

**Brand:** Qubrix

### 10.2 Exact color tokens

| Token | Name | HEX | Primary usage |
|---|---|---|---|
| Primary | Electric Purple | #8A2BE2 | Primary buttons, active navigation, important actions, progress indicators, highlights, major brand elements |
| Secondary | Cyan / Teal | #25C7D9 | Secondary actions, supporting highlights, informational elements, icons, visual accents |
| Tertiary | Midnight Navy | #0B1020 | Dark text, strong contrast, navigation elements where appropriate, inverted buttons, strong UI elements |
| Neutral | Slate Grey | #687086 | Secondary text, inactive states, borders, labels, supporting UI |
| Background | Soft Lavender / Blue White | #EEF1FF | Main application background |
| Error / Delete | Red | #D41018 | Errors, destructive actions, delete states, warnings where appropriate |

These six colors MUST form the core product palette.

Do not introduce unrelated colors without defining their semantic purpose.

### 10.3 Color rules

- #8A2BE2 MUST be the primary action/brand color.
- #25C7D9 SHOULD support information and secondary interaction.
- #0B1020 MUST provide primary dark text and strong contrast.
- #687086 MUST be used for secondary/supporting information.
- #EEF1FF MUST be the main application background.
- #D41018 MUST be reserved for destructive/error semantics.

Do not use red as decorative branding.

Do not rely on color alone to communicate state.

### 10.4 Visual language

The interface SHOULD feel:

- modern;
- educational;
- technical;
- clean;
- approachable;
- premium;
- quantum/technology-oriented.

Avoid:

- excessive gradients;
- excessive glassmorphism;
- noisy particle effects;
- gratuitous animation;
- overly dense dashboards;
- decorative effects that reduce readability.

### 10.5 Typography

The exact font family MAY follow the established frontend stack, but the typography system MUST have clear hierarchy.

Recommended semantic scale:

- Display: 32–40px, bold
- Page title: 28–32px, bold
- Section heading: 20–24px, semibold
- Card heading: 16–18px, semibold
- Body: 14–16px, regular
- Supporting text: 12–14px, regular
- Labels/captions: 12–13px, medium

Typography MUST remain readable on mobile.

### 10.6 Font weights

Use a small consistent set:

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

Avoid unnecessary weights.

### 10.7 Buttons

Primary button:

- background: #8A2BE2;
- readable light text;
- semibold label;
- clear hover/focus;
- disabled treatment.

Secondary button:

- use #25C7D9 where appropriate;
- do not compete visually with the primary action.

Neutral/tertiary action:

- use Midnight Navy and/or outlined treatment.

Destructive:

- use #D41018 only for destructive actions.

Buttons MUST show loading state without changing dimensions excessively.

### 10.8 Cards

Cards SHOULD:

- use a light surface against #EEF1FF;
- have subtle borders using Slate Grey at a restrained opacity/tint;
- use moderate corner radius;
- have consistent padding;
- establish clear hierarchy.

Avoid heavy shadows.

### 10.9 Form controls

Inputs, selects, and textareas MUST have:

- visible labels;
- consistent height/padding;
- clear border;
- focus ring using Qubrix primary semantics;
- disabled state;
- validation state.

### 10.10 Tabs

Tabs MUST clearly indicate:

- selected tab;
- hover;
- focus;
- disabled if applicable.

Use Electric Purple for the active indicator.

### 10.11 Badges

Badges MAY identify:

- framework;
- difficulty;
- completion;
- status;
- module.

Badge colors MUST remain within the semantic Qubrix palette.

### 10.12 Progress bars

Progress indicators MUST:

- display percentage or meaningful label where useful;
- use Electric Purple for primary progress;
- include accessible text;
- not rely on color alone.

### 10.13 Charts

Charts MUST:

- use the Qubrix palette;
- have readable axis/legend labels;
- provide text summaries where practical;
- avoid unnecessary decoration.

### 10.14 Tooltips

Tooltips SHOULD explain:

- unfamiliar gate symbols;
- framework abbreviations;
- visualization controls;
- icons whose meaning is not obvious.

Tooltips MUST not contain essential information unavailable elsewhere.

### 10.15 Navigation states

Active navigation MUST use Electric Purple and a clear non-color cue such as background, indicator, or weight.

### 10.16 Focus

Keyboard focus MUST be clearly visible and MUST NOT be removed for aesthetic reasons.

### 10.17 Disabled

Disabled controls MUST be visibly distinct and must not appear clickable.

### 10.18 Loading

Loading states SHOULD use restrained motion and avoid distracting animations.

---

## 11. Responsive Design

The MVP MUST be fully responsive.

### 11.1 Breakpoints

The implementation SHOULD use these semantic breakpoints unless the existing frontend system already provides equivalent values:

- **Mobile:** < 640px
- **Tablet / small laptop:** 640–1023px
- **Desktop:** 1024–1439px
- **Large desktop:** ≥ 1440px

Exact CSS values may be adapted to the chosen UI system, but behavior MUST match these categories.

### 11.2 Desktop

Desktop SHOULD provide:

- persistent sidebar;
- multi-column dashboard cards;
- side-by-side simulator/visualization panels where space permits;
- wide circuit canvas;
- visible code editor beside or below circuit depending on layout.

### 11.3 Tablet

Tablet SHOULD:

- reduce sidebar width or convert to collapsible navigation;
- stack cards when necessary;
- preserve circuit horizontal scroll;
- place visualizations in a responsive grid.

### 11.4 Mobile

Mobile MUST:

- use a navigation drawer/menu;
- stack dashboard cards;
- stack visualization panels;
- keep the gate palette horizontally scrollable or collapsible;
- keep the circuit canvas horizontally scrollable;
- preserve qubit labels;
- keep primary actions reachable;
- make tables responsive;
- keep code editor horizontally scrollable;
- avoid forcing the entire page into horizontal overflow.

### 11.5 Circuit-specific mobile rules

The circuit designer is allowed to scroll horizontally within its canvas.

The page itself SHOULD NOT develop horizontal overflow merely because the circuit has many columns.

The gate palette MUST remain accessible without taking excessive vertical space.

### 11.6 Charts on mobile

Charts MUST resize or stack.

If a chart cannot be made legible at mobile width, provide a horizontally scrollable chart container or an accessible summary.

---

## 12. Mock Data Requirements

### 12.1 General rules

All MVP data MUST be mock/local data.

Mock data SHOULD be organized in domain-oriented collections rather than duplicated across pages.

Suggested domains:

- users
- modules
- lessons
- algorithms
- gates
- circuits
- frameworks
- simulations
- assessments
- progress
- analytics
- tutor responses
- notifications/activity

### 12.2 User mock data

Example:

```text
Alex Morgan
Role: Student
Overall progress: 62%
Current module: Quantum Concepts
Current lesson: Superposition
Latest quiz: 84%
Coding challenge: 78%
Streak: 5 days
```

### 12.3 Learning mock data

Each module object SHOULD contain:

- id;
- title;
- description;
- order;
- lessons;
- completion;
- estimated time.

Each lesson SHOULD contain:

- id;
- moduleId;
- title;
- summary;
- content sections;
- key takeaways;
- circuitExampleId where applicable;
- interactiveType;
- completed state.

### 12.4 Gate mock data

Each gate SHOULD contain:

- id;
- name;
- symbol;
- description;
- qubitCount;
- category;
- tooltip;
- educational explanation.

### 12.5 Circuit mock data

A circuit SHOULD be represented with:

- id;
- name;
- qubitCount;
- operations;
- optional description;
- sourceLessonId;
- framework code mappings.

An operation SHOULD contain:

- gate;
- target qubit(s);
- column/time index;
- optional control qubit for CNOT.

### 12.6 Framework mock data

Each framework SHOULD contain:

- id;
- displayName;
- description;
- mockExecutionTime;
- capability labels relevant to the demo.

### 12.7 Simulation result data

A simulation result SHOULD contain:

```text
id
status
framework
qubitCount
gateCount
shots
executionTime
circuitId
counts
probabilities
statevector
blochState
createdAt
isMock: true
```

### 12.8 Assessment data

Each assessment SHOULD contain:

- id;
- title;
- moduleId;
- type;
- questions/challenges;
- scoring rules;
- explanations.

### 12.9 Analytics mock data

Analytics SHOULD contain:

- totalLearners;
- activeLearners;
- averageCompletion;
- averageAssessmentScore;
- moduleCompletionSeries;
- assessmentPerformanceSeries;
- learnerRows;
- recentActivity.

### 12.10 AI response data

AI mock responses SHOULD support:

- intent;
- trigger keywords;
- response;
- optional contextual response generator;
- optional related lesson/circuit.

### 12.11 Notifications/activity

Mock activity MAY contain:

- type;
- title;
- description;
- timestamp label;
- related route.

---

## 13. State Management

### 13.1 State principles

State SHOULD be organized around domain concepts and shared where multiple pages depend on the same value.

Avoid hardcoding independent copies of:

- progress;
- current circuit;
- simulation result.

### 13.2 Required state

At minimum, the application MUST manage:

- selected lesson;
- lesson progress;
- current circuit;
- selected gate;
- selected framework;
- simulation state;
- simulation result;
- visualization state;
- assessment state;
- AI conversation state;
- user progress;
- instructor dashboard state.

### 13.3 Circuit state

Circuit state MUST include:

- qubit count;
- operations;
- selected operation;
- selected gate;
- dirty/changed state where useful;
- validation errors.

### 13.4 Simulation state

Use explicit states:

- idle;
- validating;
- running;
- success;
- error.

Do not infer state solely from whether result data exists.

### 13.5 Assessment state

Assessment state SHOULD include:

- selected assessment;
- current question;
- answers;
- submitted state;
- score;
- explanations;
- retry state.

### 13.6 AI conversation state

AI state SHOULD include:

- messages;
- input;
- loading;
- error;
- current context (lesson/circuit/result);
- reset behavior.

### 13.7 Progress state

Progress state MUST support:

- lesson completion;
- module completion;
- quiz scores;
- coding challenge scores;
- recent activity;
- recommended next lesson.

### 13.8 Persistence

No database or server persistence is required.

The MVP MAY use in-memory state and MAY use browser local storage for convenience, but local storage MUST remain optional and lightweight.

If local storage is used, it MUST NOT contain secrets or real credentials.

---

## 14. Interaction Requirements

### 14.1 General interaction rule

Every primary interaction MUST result in a visible state change, navigation, modal, toast, loading indicator, or updated content.

### 14.2 Navigation

Navigation clicks MUST:

- visibly update active navigation;
- render the selected page;
- preserve relevant local state where practical.

### 14.3 Circuit interactions

- Adding a qubit updates rows.
- Removing a qubit updates rows and dependent operations.
- Selecting a gate changes selection.
- Placing a gate updates the circuit immediately.
- Moving a gate updates its operation position.
- Deleting a gate removes it.
- Reset returns to initial state.
- Run validates and executes mock simulation.

### 14.4 Simulation interactions

- Framework selection updates selected framework.
- Run shows loading.
- Successful execution updates result panels.
- Failure shows recoverable error.
- Retry repeats the mock execution.

### 14.5 Visualization interactions

Where applicable, visualization controls MAY support:

- basis-state toggle;
- probability/count toggle;
- panel expand/collapse;
- selected-state inspection.

These are optional polish and MUST NOT become a separate product scope.

### 14.6 Assessment interactions

- Selecting an answer updates selected state.
- Submit grades.
- Score appears.
- Incorrect/correct explanation appears.
- Retry returns to an actionable assessment state.

### 14.7 AI interactions

- Prompt submission adds user message.
- Loading state appears.
- Mock response appears.
- Failure can be retried.
- Clear conversation resets local chat.

### 14.8 Accessibility interactions

All primary controls MUST be keyboard accessible.

Keyboard focus MUST follow a logical order.

Circuit interactions MUST provide a non-pointer mechanism for core actions where feasible, such as selecting a gate and choosing a target cell.

---

## 15. Accessibility

The MVP MUST satisfy basic accessibility expectations.

### 15.1 Keyboard navigation

Users MUST be able to:

- navigate primary navigation;
- activate buttons;
- operate tabs;
- use dialogs;
- complete assessments;
- access form controls;
- reach major circuit controls.

### 15.2 Semantics

Use semantic:

- buttons for actions;
- links for navigation;
- form labels;
- headings;
- lists/tables where semantically appropriate.

Do not use clickable generic containers where a button/link is appropriate.

### 15.3 Focus

All interactive elements MUST have visible focus.

### 15.4 Color contrast

Text and interactive states MUST maintain readable contrast against their backgrounds.

The exact Qubrix palette MUST be used thoughtfully; if a palette color is unsuitable for small text on a given background, use Midnight Navy or another defined semantic treatment rather than reducing readability.

### 15.5 Non-color communication

Do not communicate:

- success only with green;
- error only with red;
- selection only with color.

Use labels, icons, borders, text, or shape changes as supporting cues.

### 15.6 Quantum symbols

Unfamiliar quantum symbols MUST have accessible names or tooltips.

### 15.7 Charts

Charts SHOULD provide:

- title;
- labels;
- summary text or table where practical.

### 15.8 Reduced motion

Animations SHOULD be subtle and SHOULD respect a reduced-motion preference where the implementation framework supports it.

---

## 16. Performance

The MVP MUST remain lightweight.

### 16.1 General

- No backend calls.
- No real quantum execution.
- No external AI requests.
- No large data downloads.
- No unnecessary dependencies.

### 16.2 Rendering

Visualization components SHOULD avoid unnecessary re-rendering.

The circuit editor MUST remain responsive with the expected small MVP circuit sizes.

### 16.3 Loading

Use lazy loading/code splitting for genuinely large sections where practical, but do not add architecture solely to satisfy theoretical scale.

### 16.4 Animation

Avoid excessive animation.

Artificial simulation latency MUST be short and deterministic.

### 16.5 Data

Mock data MUST be small enough to load instantly.

---

## 17. Error & Empty States

The following states MUST be explicitly designed.

### 17.1 No circuit

Message should explain that the user can add a gate or load an example circuit.

Primary action: Load Example or Add Gate.

### 17.2 Invalid circuit

Explain the specific issue, such as:

- "CNOT needs a control and target qubit."
- "This operation references a qubit that no longer exists."

Provide recovery guidance.

### 17.3 Simulation failure

Show:

- error status;
- mock execution context;
- Retry action;
- circuit-preserving behavior.

### 17.4 No visualization data

Explain that a simulation result is required and provide a Run Circuit action.

### 17.5 Empty assessment

Show available assessment categories or a message explaining that the mock curriculum contains no assessment for the selected item.

### 17.6 No progress

Show a zero/initial state with a clear Start Learning action.

### 17.7 Empty instructor analytics

Show a designed empty state with example next action rather than a broken chart.

### 17.8 AI unavailable/mock response failure

Show:

- "The demo tutor is temporarily unavailable."
- Retry action;
- conversation remains intact.

### 17.9 Invalid code

For the mock coding challenge, show a simulated validation error with:

- issue summary;
- hint;
- retry/submit action.

Do not expose parser stack traces.

### 17.10 No selected lesson

Show:

- curriculum selector/list;
- explanatory text;
- action to choose a lesson.

---

## 18. Demo Flow

The following is the primary end-to-end MVP demonstration and MUST work coherently.

### Step 1 — Open Qubrix

User lands on Dashboard.

Dashboard shows:

- welcome;
- overall progress;
- current module;
- continue learning;
- recent activity;
- quick actions.

### Step 2 — Open Learn

User selects Learn.

Curriculum displays four modules and progress.

### Step 3 — Open Superposition

User opens the Superposition lesson.

Lesson shows:

- explanation;
- H-gate example;
- visual explanation;
- key takeaways;
- Try it yourself;
- AI Tutor.

### Step 4 — Launch interactive example

User chooses Try it yourself.

The application loads an H-gate starter circuit.

### Step 5 — Open Circuit Designer

The circuit designer shows one qubit with H in an operation column.

User can modify it.

### Step 6 — Run Circuit

User selects Qiskit Aer.

User clicks Run Circuit.

The UI shows:

- validation;
- loading/running;
- framework;
- mock execution metadata.

### Step 7 — Show result

Mock execution completes.

For H on `|0⟩`, the result shows approximately:

- `|0⟩`: 50%
- `|1⟩`: 50%

### Step 8 — Visualize

The application updates:

- histogram;
- statevector;
- Bloch sphere;
- circuit diagram.

### Step 9 — Ask AI Tutor

User asks:

"Why does this circuit have a 50/50 result?"

AI responds with a concise educational explanation referencing the H gate and measurement probabilities.

### Step 10 — Complete quiz

User opens the related quiz.

User answers questions.

User submits.

Mock grading shows:

- score;
- correct/incorrect answers;
- explanations;
- retry.

### Step 11 — Update progress

Lesson/assessment progress updates.

Dashboard/Progress reflects the change.

### Step 12 — Instructor view

User opens Instructor Dashboard.

Mock analytics displays:

- learners;
- completion;
- assessment performance;
- module chart;
- learner table;
- activity.

The flow MUST not require a real login, API, database, simulator, or AI service.

---

## 19. Acceptance Criteria

Acceptance criteria are grouped by required deliverable and supporting capability.

### 19.1 Learning Content & Curriculum

The deliverable is complete when:

- [ ] Four required curriculum modules exist.
- [ ] Module 1 covers fundamentals topics specified in this document.
- [ ] Module 2 covers X, Y, Z, H, S, T, CNOT, and measurement.
- [ ] Module 3 covers superposition, entanglement, measurement, state representation, and Bloch sphere.
- [ ] Module 4 introduces Deutsch-Jozsa, Grover, QAOA, and VQE.
- [ ] Lessons include overview, explanation, examples, key takeaways, and completion.
- [ ] At least one lesson has a working interactive example.
- [ ] Lesson completion updates visible progress.
- [ ] AI Tutor entry point is available in the learning context.
- [ ] Curriculum, lesson, loading, empty, and error states are implemented.
- [ ] Content is sufficient for demonstration but not expanded into a full textbook.

### 19.2 Quantum Circuit Designer

The deliverable is complete when:

- [ ] A circuit canvas renders qubit rows and operation columns.
- [ ] User can add/remove qubits.
- [ ] Palette contains X, Y, Z, H, S, T, CNOT, Measure.
- [ ] User can place gates.
- [ ] User can select gates.
- [ ] User can remove gates.
- [ ] User can move gates or otherwise reposition them through an equally clear interaction.
- [ ] CNOT renders control, target, and connector.
- [ ] Invalid CNOT placement is rejected.
- [ ] Measurement is visually distinct.
- [ ] Reset/clear works.
- [ ] Starter circuits are available.
- [ ] Circuit validation works before execution.
- [ ] Run Circuit is connected to the simulation state.
- [ ] Code editor supports Qiskit, PennyLane, and Cirq mock examples.
- [ ] Code editor has syntax highlighting.
- [ ] Code does not execute through a real SDK/runtime.
- [ ] Mobile circuit editing remains usable via internal horizontal scrolling.

### 19.3 Multi-Framework Simulation Engine

The deliverable is complete when:

- [ ] Framework selector contains Qiskit Aer, PennyLane, Cirq, and qBraid.
- [ ] Selected framework is visible during execution.
- [ ] Run shows a loading/execution state.
- [ ] Mock execution returns a believable result.
- [ ] Execution metadata includes framework, qubits, gates, shots, time, status, and result.
- [ ] H on `|0⟩` produces approximately 50/50 measurement probabilities.
- [ ] X on `|0⟩` produces approximately 0/100 probabilities.
- [ ] Bell-style H+CNOT produces approximately `|00⟩`/`|11⟩` correlation.
- [ ] Results are deterministic/controlled enough to make demos repeatable.
- [ ] Framework switching changes framework metadata.
- [ ] Mock failure state exists and is recoverable.
- [ ] No real quantum SDK/API is called.

### 19.4 Quantum State & Result Visualization

The deliverable is complete when:

- [ ] Circuit diagram displays current circuit.
- [ ] Bloch sphere displays axes and state vector.
- [ ] Bloch sphere includes `|0⟩`, `|1⟩`, and superposition context.
- [ ] Statevector viewer displays basis states, amplitudes, and probabilities.
- [ ] Complex amplitudes are displayed where appropriate.
- [ ] Histogram displays counts/probabilities.
- [ ] Multi-qubit labels are supported.
- [ ] All visualizations update from the same simulation result.
- [ ] Empty state is implemented.
- [ ] Loading state is implemented.
- [ ] Error state is implemented.
- [ ] Visualization is usable on mobile through stacked panels.

### 19.5 Assessment & Progress Tracking

The deliverable is complete when:

- [ ] Quiz interface supports multiple-choice questions.
- [ ] Sample assessments cover the required topics.
- [ ] Submission produces deterministic mock grading.
- [ ] Score is displayed.
- [ ] Correct/incorrect answers are shown.
- [ ] Explanations are shown.
- [ ] Retry works.
- [ ] Coding challenge UI exists.
- [ ] Coding challenge grading is mocked.
- [ ] Progress dashboard displays overall completion.
- [ ] Module completion is displayed.
- [ ] Quiz and coding scores are displayed.
- [ ] Streak/activity is displayed as mock data.
- [ ] Recommended next lesson is actionable.
- [ ] Lesson/assessment interactions update shared progress state.

### 19.6 Software Platform / Web Application

The deliverable is complete when:

- [ ] Dashboard exists.
- [ ] Learn exists.
- [ ] Circuit Designer exists.
- [ ] Simulator exists.
- [ ] Visualizer exists.
- [ ] Assessments exists.
- [ ] Progress exists.
- [ ] Instructor Dashboard exists.
- [ ] Global navigation exists.
- [ ] Active navigation state exists.
- [ ] Header/profile/notification affordances are coherent.
- [ ] Toasts are available for transient feedback.
- [ ] Modal behavior is accessible.
- [ ] Loading/empty/error/success states exist where relevant.
- [ ] No primary button is dead without an explicit unavailable state.
- [ ] Application uses the exact Qubrix color system.
- [ ] Application is light mode.
- [ ] Application is responsive.

### 19.7 AI Tutor

The supporting AI capability is complete when:

- [ ] Tutor UI exists.
- [ ] Concept explanation intent works.
- [ ] Code generation intent works.
- [ ] Debugging intent works.
- [ ] Circuit explanation intent works.
- [ ] Optimization intent works.
- [ ] Personalized recommendation intent works.
- [ ] Responses can use current lesson/circuit/result context.
- [ ] Loading state is visible.
- [ ] Mock failure state is recoverable.
- [ ] Tutor clearly behaves as a simulated/demo capability.
- [ ] No external AI API is called.

### 19.8 Responsive UI

The responsive requirement is complete when:

- [ ] Desktop layout is coherent.
- [ ] Tablet layout is coherent.
- [ ] Mobile navigation uses a drawer/menu.
- [ ] Dashboard cards stack appropriately.
- [ ] Circuit canvas remains usable through internal horizontal scrolling.
- [ ] Gate palette remains accessible on mobile.
- [ ] Visualization panels stack.
- [ ] Tables become responsive.
- [ ] Code editor does not break page layout.
- [ ] No major feature is inaccessible at mobile width.

### 19.9 Mock Data & State

The mock architecture is complete when:

- [ ] User data is structured.
- [ ] Curriculum data is structured.
- [ ] Gate/circuit data is structured.
- [ ] Framework data is structured.
- [ ] Simulation results are structured.
- [ ] Assessment data is structured.
- [ ] Progress data is structured.
- [ ] Instructor analytics data is structured.
- [ ] AI responses are structured.
- [ ] Cross-feature state is shared appropriately.
- [ ] Mock values are clearly distinguishable from production claims.
- [ ] Data structures are replaceable by future API adapters.

### 19.10 Scope and implementation constraints

The MVP is compliant only if:

- [ ] No backend server is implemented.
- [ ] No database is implemented.
- [ ] No cloud infrastructure is implemented.
- [ ] No production authentication is implemented.
- [ ] No real user account system is implemented.
- [ ] No real quantum hardware is integrated.
- [ ] No Qiskit Aer execution is integrated.
- [ ] No PennyLane execution is integrated.
- [ ] No Cirq execution is integrated.
- [ ] No qBraid execution is integrated.
- [ ] No external AI API is integrated.
- [ ] No payment system is implemented.
- [ ] No real-time collaboration backend is implemented.
- [ ] No unrelated product scope is introduced.

---

## 20. Out of Scope

The following are explicitly excluded from the MVP:

- Production backend
- Database
- Cloud deployment
- Real quantum hardware
- Real quantum simulator APIs
- Real Qiskit Aer execution
- Real PennyLane execution
- Real Cirq execution
- Real qBraid execution
- Real AI APIs
- Production authentication
- Real user accounts
- Payments/subscriptions
- Real-time multi-user collaboration
- Production analytics infrastructure
- Notifications infrastructure
- Email infrastructure
- Social features
- Community/forum
- Marketplace
- Mobile native applications
- Advanced quantum algorithms beyond Deutsch-Jozsa, Grover's Algorithm, QAOA, and VQE introductions
- Arbitrary third-party integrations
- Production cloud quantum orchestration
- Production code execution/sandboxing
- Real code grading infrastructure
- Production content-management systems
- Enterprise permissions/role administration
- Production audit logging
- Production security infrastructure
- Full quantum state simulation for arbitrary circuits
- Scientific-grade numerical accuracy guarantees
- Arbitrary circuit import/export formats
- Real collaborative circuit editing

If a feature appears useful but is not directly required to demonstrate the six deliverables, it MUST be deferred.

---

## 21. Future Production Considerations

This section records future evolution without making it part of the MVP.

### 21.1 Backend

A production version could introduce:

- API service;
- persistent database;
- user profiles;
- curriculum/content management;
- progress persistence;
- analytics ingestion.

### 21.2 Authentication

A production implementation could add:

- secure authentication;
- role-based authorization;
- instructor/student permissions;
- account recovery;
- session management.

### 21.3 Quantum execution

A production version could replace mock adapters with real integrations for selected quantum simulators and hardware providers.

The current simulation result contract SHOULD be treated as the conceptual boundary for such adapters.

### 21.4 AI

A production version could replace mock tutor responses with a governed AI service, including:

- prompt/context management;
- rate limits;
- safety controls;
- evaluation;
- usage monitoring;
- cost controls.

### 21.5 Analytics

Production analytics could introduce:

- event collection;
- privacy-aware reporting;
- learner cohorts;
- instructor dashboards;
- longitudinal progress.

### 21.6 Collaboration

Real-time collaboration, sharing, and classroom functionality MAY be considered later, but are not part of the MVP.

### 21.7 Production-grade visualization

A production scientific visualization layer could implement more accurate state simulation and richer multi-qubit representations.

The MVP MUST remain educational and demonstrative rather than scientific-computing infrastructure.

---

## 22. MVP Completion Checklist

Before declaring the MVP requirements implemented, verify all of the following:

### Product

- [ ] Product is clearly Qubrix.
- [ ] MVP goal is clear.
- [ ] Six original deliverables are covered.
- [ ] Scope is fixed.
- [ ] Personas are defined.

### Navigation and shell

- [ ] Dashboard
- [ ] Learn
- [ ] Circuit Designer
- [ ] Simulator
- [ ] Visualizer
- [ ] Assessments
- [ ] Progress
- [ ] Instructor Dashboard
- [ ] Global header
- [ ] Navigation states
- [ ] Mobile navigation

### Curriculum

- [ ] Fundamentals
- [ ] Quantum Gates
- [ ] Quantum Concepts
- [ ] Quantum Algorithms
- [ ] Required topics
- [ ] Lesson interactions
- [ ] Completion

### Circuit Designer

- [ ] Qubit management
- [ ] Gate palette
- [ ] Circuit canvas
- [ ] Gate placement
- [ ] Gate movement
- [ ] Gate deletion
- [ ] CNOT
- [ ] Measurement
- [ ] Validation
- [ ] Reset
- [ ] Run
- [ ] Code editor
- [ ] Qiskit/PennyLane/Cirq examples

### Simulation

- [ ] Qiskit Aer
- [ ] PennyLane
- [ ] Cirq
- [ ] qBraid
- [ ] Loading state
- [ ] Metadata
- [ ] Deterministic mock result
- [ ] Error/retry

### Visualization

- [ ] Circuit diagram
- [ ] Bloch sphere
- [ ] Statevector
- [ ] Histogram
- [ ] Empty state
- [ ] Loading state
- [ ] Error state
- [ ] Synchronized results

### AI

- [ ] Concept explanation
- [ ] Code generation
- [ ] Debugging
- [ ] Circuit explanation
- [ ] Optimization
- [ ] Recommendations
- [ ] Loading
- [ ] Failure/retry
- [ ] Mock-only implementation

### Assessments

- [ ] Multiple choice
- [ ] Required topic coverage
- [ ] Mock grading
- [ ] Score
- [ ] Explanations
- [ ] Retry
- [ ] Coding challenges

### Progress

- [ ] Overall completion
- [ ] Module completion
- [ ] Quiz scores
- [ ] Coding scores
- [ ] Activity/streak
- [ ] Recommendation
- [ ] Shared state updates

### Instructor

- [ ] Total learners
- [ ] Active learners
- [ ] Average completion
- [ ] Average assessment score
- [ ] Module chart
- [ ] Assessment chart
- [ ] Learner table
- [ ] Recent activity

### Visual system

- [ ] Light mode
- [ ] #8A2BE2 Electric Purple
- [ ] #25C7D9 Cyan/Teal
- [ ] #0B1020 Midnight Navy
- [ ] #687086 Slate Grey
- [ ] #EEF1FF Soft Lavender/Blue White
- [ ] #D41018 Error/Delete
- [ ] Typography hierarchy
- [ ] Button states
- [ ] Card system
- [ ] Form controls
- [ ] Tabs
- [ ] Badges
- [ ] Progress bars
- [ ] Charts
- [ ] Tooltips
- [ ] Focus states
- [ ] Loading states

### Responsive and accessibility

- [ ] Desktop
- [ ] Tablet
- [ ] Mobile
- [ ] Keyboard navigation
- [ ] Visible focus
- [ ] Semantic controls
- [ ] Labels
- [ ] Color contrast
- [ ] Non-color state communication
- [ ] Accessible charts/tooltips

### Scope compliance

- [ ] Frontend-only
- [ ] Mock data only
- [ ] No backend
- [ ] No database
- [ ] No cloud infrastructure
- [ ] No production auth
- [ ] No real quantum APIs
- [ ] No real AI APIs
- [ ] No payments
- [ ] No collaboration backend
- [ ] No unrelated features

### Demo flow

- [ ] Dashboard opens
- [ ] Learn opens
- [ ] Superposition lesson opens
- [ ] Interactive example loads
- [ ] H circuit appears
- [ ] Qiskit Aer can be selected
- [ ] Run produces mock result
- [ ] Histogram updates
- [ ] Bloch sphere updates
- [ ] Statevector updates
- [ ] AI explains result
- [ ] Quiz can be completed
- [ ] Progress updates
- [ ] Instructor analytics displays

---

## Final Implementation Directive

This document is the authoritative specification for the Qubrix MVP.

An implementation agent MUST:

1. Inspect the existing repository before changing files.
2. Preserve any existing project conventions that do not conflict with this document.
3. Implement only the frontend MVP described here.
4. Keep all external capabilities mocked.
5. Prefer reusable components and structured mock data.
6. Make every major interaction visibly functional.
7. Preserve the exact Qubrix visual design system.
8. Ensure the primary demo flow works end-to-end.
9. Avoid introducing backend, cloud, production authentication, real AI, real quantum execution, or unrelated features.
10. Treat any ambiguity in favor of the smallest implementation that satisfies the stated acceptance criteria.

**The desired result is a polished, credible, interactive frontend prototype that demonstrates how Qubrix would work as a future production platform—without pretending that any production infrastructure exists in the MVP.**
