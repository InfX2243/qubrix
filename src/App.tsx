import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/shell";
import { Dashboard } from "./pages/Dashboard";
import { Learn } from "./pages/Learn";
import { ModuleDetail } from "./pages/ModuleDetail";
import { LessonDetail } from "./pages/LessonDetail";
import { PreviewPage } from "./pages/PreviewPage";
import { CircuitDesigner } from "./pages/CircuitDesigner";
import { LearningProvider } from "./context/LearningContext";
import { SimulationProvider } from "./context/SimulationContext";
import { Simulator } from "./pages/Simulator";
import { Visualizer } from "./pages/Visualizer";
import { Tutor } from "./pages/Tutor";

const previews = [
  { path: "/circuit-designer", title: "Circuit Designer", description: "Compose quantum circuits visually with gates, qubits, and operation columns.", label: "Visual circuit construction", action: "Open example circuit" },
  { path: "/simulator", title: "Simulator", description: "Compare controlled mock execution across the quantum frameworks in the Qubrix MVP.", label: "Multi-framework simulation", action: "Run mock circuit" },
  { path: "/visualizer", title: "Visualizer", description: "Inspect circuit diagrams, statevector information, Bloch-sphere context, and measurement results.", label: "Quantum state visualization", action: "View sample result" },
  { path: "/assessments", title: "Assessments", description: "Check understanding with quantum concepts, multiple-choice questions, and coding challenges.", label: "Knowledge & coding checks", action: "Start assessment" },
  { path: "/progress", title: "Progress", description: "See module completion, assessment performance, activity, and your recommended next lesson.", label: "Learning progress", action: "Review progress" },
  { path: "/instructor", title: "Instructor Dashboard", description: "Review the mock learner cohort, module completion, assessment performance, and recent activity.", label: "Learner analytics", action: "Review analytics" },
];

export default function App() {
  return (
    <LearningProvider><SimulationProvider>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Dashboard />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/module/:moduleId" element={<ModuleDetail />} />
          <Route path="/learn/module/:moduleId/lesson/:lessonId" element={<LessonDetail />} />
          <Route path="/circuit-designer" element={<CircuitDesigner />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/tutor" element={<Tutor />} />
          {previews.filter((page) => !["/circuit-designer", "/simulator", "/visualizer"].includes(page.path)).map((page) => <Route key={page.path} path={page.path} element={<PreviewPage {...page} />} />)}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </SimulationProvider></LearningProvider>
  );
}