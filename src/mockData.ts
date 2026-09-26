import type { Activity, DashboardStats, ModuleProgress, NavItem, User } from "./types";

export const navItems: NavItem[] = [
  { key: "dashboard", label: "Dashboard", path: "/", description: "Your learning command center" },
  { key: "learn", label: "Learn", path: "/learn", description: "Explore the quantum curriculum" },
  { key: "designer", label: "Circuit Designer", path: "/circuit-designer", description: "Build quantum circuits visually" },
  { key: "simulator", label: "Simulator", path: "/simulator", description: "Run controlled mock simulations" },
  { key: "visualizer", label: "Visualizer", path: "/visualizer", description: "Inspect quantum states and results" },
  { key: "assessments", label: "Assessments", path: "/assessments", description: "Test and apply your knowledge" },
  { key: "progress", label: "Progress", path: "/progress", description: "Track your learning journey" },
  { key: "instructor", label: "Instructor Dashboard", path: "/instructor", description: "Review learner analytics" },
];

export const currentUser: User = {
  name: "Alex Morgan",
  role: "Student",
  initials: "AM",
  overallProgress: 62,
};

export const dashboardStats: DashboardStats = {
  hoursLearned: "12.4",
  circuitsRun: 28,
  averageScore: 86,
  streak: 7,
};

export const moduleProgress: ModuleProgress[] = [
  { name: "Quantum Fundamentals", completed: 8, total: 10 },
  { name: "Quantum Gates", completed: 5, total: 8 },
  { name: "Quantum Concepts", completed: 3, total: 7 },
  { name: "Quantum Algorithms", completed: 1, total: 4 },
];

export const activities: Activity[] = [
  { title: "Completed “Measurement” lesson", meta: "Quantum Fundamentals", time: "18 min ago", type: "lesson" },
  { title: "Ran an H-gate circuit", meta: "Qiskit Aer · 100 shots", time: "1 hr ago", type: "circuit" },
  { title: "Scored 90% on Quantum Gates", meta: "Assessment", time: "Yesterday", type: "assessment" },
  { title: "Explored the Bell-state example", meta: "Circuit Designer", time: "Yesterday", type: "circuit" },
];

export const lessons = [
  { title: "Superposition", module: "Quantum Fundamentals", progress: 72, duration: "8 min", featured: true },
  { title: "The H Gate", module: "Quantum Gates", progress: 0, duration: "6 min", featured: false },
  { title: "Entanglement", module: "Quantum Concepts", progress: 0, duration: "10 min", featured: false },
];

export const recommendedLesson = {
  title: "Why measurement changes what we observe",
  module: "Quantum Fundamentals",
  reason: "Build on your recent work with superposition and probability amplitudes.",
  duration: "7 min",
};

export const assessments = [
  { title: "Quantum Fundamentals Checkpoint", questions: 8, score: 90, status: "Completed" },
  { title: "Quantum Gates Practice", questions: 10, score: 0, status: "In progress" },
  { title: "Algorithms Starter Challenge", questions: 6, score: 0, status: "Not started" },
];