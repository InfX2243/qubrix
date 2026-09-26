import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/shell";
import { Dashboard } from "./pages/Dashboard";
import { PreviewPage } from "./pages/PreviewPage";

const previews = [
  { path: "/learn", title: "Learn", description: "Move from quantum fundamentals to algorithms through structured, interactive lessons.", label: "Curriculum & interactive lessons", action: "Browse curriculum" },
  { path: "/circuit-designer", title: "Circuit Designer", description: "Compose quantum circuits visually with gates, qubits, and operation columns.", label: "Visual circuit construction", action: "Open example circuit" },
  { path: "/simulator", title: "Simulator", description: "Compare controlled mock execution across the quantum frameworks in the Qubrix MVP.", label: "Multi-framework simulation", action: "Run mock circuit" },
  { path: "/visualizer", title: "Visualizer", description: "Inspect circuit diagrams, statevector information, Bloch-sphere context, and measurement results.", label: "Quantum state visualization", action: "View sample result" },
  { path: "/assessments", title: "Assessments", description: "Check understanding with quantum concepts, multiple-choice questions, and coding challenges.", label: "Knowledge & coding checks", action: "Start assessment" },
  { path: "/progress", title: "Progress", description: "See module completion, assessment performance, activity, and your recommended next lesson.", label: "Learning progress", action: "Review progress" },
  { path: "/instructor", title: "Instructor Dashboard", description: "Review the mock learner cohort, module completion, assessment performance, and recent activity.", label: "Learner analytics", action: "Review analytics" },
];

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Dashboard />} />
        {previews.map((page) => <Route key={page.path} path={page.path} element={<PreviewPage {...page} />} />)}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}