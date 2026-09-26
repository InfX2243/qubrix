# Qubrix MVP Demo

## Demo Objective

Demonstrate one connected learner journey: a learner starts from a partially completed dashboard, learns a quantum concept, builds a Bell-state circuit, runs a deterministic mock simulation, interprets the result visually, asks the contextual AI Tutor a follow-up question, completes an assessment and reviews feedback, then sees the broader progress experience. Finish by switching to the instructor workspace to show cohort insight and individual learner inspection.

## Demo Duration

Target **10–15 minutes**.

Keep the explanation focused on the product story rather than implementation details.

## Demo Flow

### 1. Dashboard

**Screen:** Dashboard

**Action:** Open Qubrix.

**What to show:**
- Current learning progress
- Current module and Continue Learning
- Recent activity
- Assessment summary
- Quick access to Circuit Designer, Simulator, and AI Tutor

**What to explain:**
> “The learner starts from a personalized learning dashboard.”

The seeded learner is intentionally partway through the curriculum so the product does not appear fully completed.

### 2. Curriculum

**Screen:** Learn / Curriculum

**Action:** Open **Quantum Computing Fundamentals**, then open a lesson.

**What to show:**
- Four-module curriculum structure
- Lesson list
- Progress indicators
- Current lesson

**What to explain:**
> “The curriculum gives the learner a structured path from foundational concepts into gates, quantum concepts, and algorithms.”

### 3. Learning

**Screen:** Lesson

**Action:** Open a lesson such as **Superposition**.

**What to show:**
- Concept explanation
- Example/interactive element
- Key takeaways
- Knowledge-check interaction where available
- Ask AI Tutor action

**What to explain:**
> “The learner does not just consume content; they can immediately test their understanding.”

### 4. Circuit Designer

**Screen:** Circuit Designer

**Action:** Load the existing **Bell State / Entanglement** preset.

**What to show:**
- Two qubits
- H on q0
- CNOT from q0 to q1
- Measurement operations
- Circuit validation/run controls

**What to explain:**
> “The learner can move directly from a quantum concept into an editable circuit.”

Preferred teaching pattern:

```
q0 ── H ── ● ── M
           │
q1 ─────── X ── M
```

Do not change the circuit engine for the demo.

### 5. Mock Simulation

**Screen:** Simulator

**Action:** Use the existing framework selector, keep **Qiskit Aer** if desired, and set **1,000 shots**.

**What to show:**
- Framework selector
- Shot count
- Run action
- Mock execution status
- Result handoff

**What to explain:**
> “This MVP uses a mocked simulation engine. The interface demonstrates how the production application would connect to quantum execution infrastructure.”

Be explicit that no real quantum hardware or external quantum simulator is being used.

### 6. Results

**Screen:** Simulator result / Visualizer

**Action:** Open the completed result.

**What to show:**
- Measurement histogram
- Counts
- Probabilities
- Statevector where available
- Circuit representation
- Result summary

**What to explain:**
> “The learner can move from circuit construction into interpretable quantum results.”

For the Bell teaching circuit, the deterministic mock result is approximately split between `|00⟩` and `|11⟩`.

### 7. Quantum Visualization

**Screen:** Quantum State & Result Visualizer

**Action:** Review the available visualization tabs.

**What to show:**
- Histogram
- Statevector
- Circuit visualization
- Bloch sphere when the selected result is applicable

**What to explain:**
> “Qubrix translates quantum results into visual representations designed for learning.”

Do not spend time explaining implementation details.

### 8. AI Tutor

**Screen:** AI Tutor

**Action:** Use the existing contextual action such as **Explain This Result**, then ask:

> “Why do we get approximately equal probabilities for these two states?”

**What to show:**
- Tutor context derived from the lesson/circuit/simulation
- Initial explanation
- Follow-up response
- Related lesson/suggestion controls if already present

**What to explain:**
> “The AI Tutor provides contextual support rather than functioning as a disconnected chatbot.”

The current Tutor is mock/predefined frontend content; it does not call an external AI provider.

### 9. Assessment

**Screen:** Assessments

**Action:** Open the existing **Quantum Concepts Checkpoint**.

**What to show:**
- Question progress
- Answer selection
- Objective feedback
- Score/submission flow

**What to explain:**
> “The learner reinforces the concept through assessment rather than ending the learning loop at the simulation.”

### 10. Review

**Screen:** Assessment result/review

**Action:** Open **Review Answers**.

**What to show:**
- Incorrect answer
- Correct answer
- Explanation
- Ask AI Tutor action where available

**What to explain:**
> “The assessment closes the Learn → Practice → Assess → Feedback loop.”

### 11. Progress

**Screen:** Progress / Dashboard

**Action:** Return to the learner progress experience.

**What to show:**
- Module progress
- Assessment performance
- Activity
- Recommended next lesson

**What to explain:**
> “The learner’s activity contributes to a unified progression model.”

Remember that learning completion is local frontend state. Assessment results and saved circuits may persist in browser storage.

### 12. Instructor Dashboard

**Screen:** Instructor Dashboard

**Action:** Open the instructor overview, then **Learners**, select a learner, and return to the overview.

**What to show:**
- Cohort overview
- Learner progress
- Assessment performance
- Module performance
- Recent activity
- Learner list
- Individual learner progress
- Module progress
- Assessment history
- Learner activity

**What to explain:**
> “The same product provides an instructor-facing view for monitoring, analyzing, inspecting, and supporting learners.”

Instructor data is a fictional local cohort, not live production analytics.

## Recommended Quantum Example

Use the existing **Bell State / Entanglement** preset in Circuit Designer.

It demonstrates the complete:

**Circuit → Mock Simulation → Visualization → AI Tutor**

story with minimal setup.

The current mock engine models the Bell teaching result as approximately:

- `|00⟩` — 50%
- `|11⟩` — 50%

With 1,000 shots, the interface can therefore show counts consistent with that deterministic teaching model.

## Recommended Assessment

Use **Quantum Concepts Checkpoint**.

It contains objective questions covering:

- Superposition
- Entanglement
- Measurement
- Statevector interpretation
- Bloch sphere
- Quantum phase

It demonstrates:

**Question → Answer → Feedback → Score → Review**

## Demo Failure Recovery

- **Simulation error:** show the existing error state and retry/run again.
- **Missing learner:** use the existing “Learner not found” state and return to Learners.
- **Missing assessment/question:** use the existing empty state and return to Assessments.
- **Tutor fallback:** use the Tutor’s contextual fallback response or return to the relevant source screen.
- **Missing simulation result:** return to Simulator and run a circuit before opening Visualizer.
- **Clean demo state needed:** use a fresh browser profile/incognito window or clear site local storage. There is no dedicated reset control.

Do not introduce additional recovery UI during the demo.

## Responsive Presentation

The demo-critical screens should be checked locally before a live presentation at:

- Desktop: 1280px+
- Tablet: 768–1024px
- Mobile: 320–430px

Prioritize Dashboard, Lesson, Circuit Designer, Simulator, Visualizer, Tutor, Assessment, and Instructor Dashboard.

## Key Product Story

**Learn → Build → Simulate → Visualize → Understand → Assess → Progress → Instructor Insight**

The demo should feel like one learning loop rather than a tour of unrelated pages.
