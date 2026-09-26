# Qubrix MVP Scope

## Scope Status

The Qubrix MVP feature set is **frozen** after Phase 9 — MVP Integration, Hardening, UX Polish & Release Readiness.

Phase 10 is limited to demo readiness, documentation, setup clarity, handoff, and fixes that directly block those goals.

## Included

### Learner Experience

- Learner dashboard
- Curriculum navigation
- Four quantum-learning modules
- Lessons and concept explanations
- Interactive learning examples
- Lesson completion
- Learning progress
- Activity and recommended next lesson

### Quantum Experience

- Circuit Designer
- X, Y, Z, H, S, T, CNOT, and Measure
- Gate placement/editing/removal
- Circuit presets
- Circuit validation and run action
- Framework-oriented code views
- Mock simulation
- Qiskit Aer
- PennyLane
- Cirq
- qBraid
- Shot selection
- Deterministic mock results
- Measurement counts/probabilities
- Statevector information
- Circuit visualization
- Bloch-sphere context where applicable
- Result history/selection

### AI Tutor

- Contextual lesson support
- Circuit explanation
- Simulation/result explanation
- Visualization explanation
- Assessment feedback support
- Follow-up questions
- Predefined mock responses

### Assessments

- Multiple-choice questions
- True/false questions
- Multiple-select questions
- Coding-pattern challenge
- Local/mock grading
- Question feedback
- Scores
- Attempt history
- Best/latest result summaries
- Review
- Retake where the configured attempt policy allows

### Progress

- Overall learner progress
- Module progress
- Assessment performance
- Recent activity
- Recommended next lesson

### Instructor

- Instructor overview
- Cohort overview
- Learner list
- Learner search/filtering
- Learner detail
- Module progress
- Assessment history
- Assessment analytics
- Module analytics
- Recent activity

### Platform

- Responsive application shell
- Desktop/tablet/mobile layouts
- Light-mode design system
- Loading, empty, success, and error states where applicable
- Browser-local state/storage where already used by the MVP

## Not Included

The MVP does not include:

- Backend services
- Database infrastructure
- Cloud infrastructure
- Real quantum hardware execution
- Production quantum cloud integrations
- Real AI APIs or external model providers
- Production authentication/authorization
- Production analytics infrastructure
- LMS integrations
- Enterprise administration
- Payments/subscriptions
- Social/community features
- Collaboration features
- Production persistence beyond the browser-local behavior already present
- Automated end-to-end test infrastructure

## Product Boundary

Qubrix is a frontend prototype that demonstrates the complete learning-to-experiment workflow with believable local behavior.

The intended product story is:

**Learn → Build → Simulate → Visualize → Understand → Practice → Assess → Progress**

with the instructor extension:

**Monitor → Analyze → Inspect → Support**

No additional product capability should be added during the final handoff phase unless it directly fixes a demo-blocking bug, documentation/setup error, broken script/link, or misleading product statement.
