export type RouteKey =
  | "dashboard"
  | "learn"
  | "designer"
  | "simulator"
  | "visualizer"
  | "assessments"
  | "progress"
  | "instructor";

export interface NavItem {
  key: RouteKey;
  label: string;
  path: string;
  description: string;
}

export interface User {
  name: string;
  role: "Student" | "Instructor";
  initials: string;
  overallProgress: number;
}

export interface Activity {
  title: string;
  meta: string;
  time: string;
  type: "lesson" | "circuit" | "assessment";
}

export interface ModuleProgress {
  name: string;
  completed: number;
  total: number;
}

export interface DashboardStats {
  hoursLearned: string;
  circuitsRun: number;
  averageScore: number;
  streak: number;
}