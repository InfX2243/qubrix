import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { getAssessment } from "../data/assessments";
import type { Assessment, AssessmentAnswer, AssessmentAttemptSummary, AssessmentProgressState, AssessmentResult } from "../types/assessment";

interface AssessmentContextValue {
  active: AssessmentProgressState | null;
  results: AssessmentResult[];
  startAssessment: (assessmentId: string, questionIndex?: number) => boolean;
  setAnswer: (questionId: string, value: string | string[]) => void;
  setQuestionIndex: (index: number) => void;
  submitQuestion: (assessmentId: string, questionId: string) => AssessmentAnswer | null;
  submitAssessment: (assessmentId: string, timeSpentSeconds?: number) => AssessmentResult | null;
  resetAssessment: (assessmentId: string) => boolean;
  getSummary: (assessmentId: string) => AssessmentAttemptSummary;
  canAttempt: (assessmentId: string) => boolean;
  isCompleted: (assessmentId: string) => boolean;
}

const AssessmentContext = createContext<AssessmentContextValue | null>(null);
const STORAGE_KEY = "qubrix.assessmentResults";

function loadResults(): AssessmentResult[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as AssessmentResult[] : [];
  } catch {
    return [];
  }
}

function answerEquals(value: string | string[], correct: string | string[]) {
  const a = Array.isArray(value) ? [...value].sort() : [value];
  const b = Array.isArray(correct) ? [...correct].sort() : [correct];
  return a.length === b.length && a.every((item, index) => item === b[index]);
}

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<AssessmentProgressState | null>(null);
  const [results, setResults] = useState<AssessmentResult[]>(loadResults);

  const persist = useCallback((next: AssessmentResult[]) => {
    setResults(next);
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* in-memory fallback */ }
  }, []);

  const startAssessment = useCallback((assessmentId: string, questionIndex = 0) => {
    const assessment = getAssessment(assessmentId);
    if (!assessment || !assessment.questions.length) return false;
    if (!results.some((item) => item.assessmentId === assessmentId) && !results.length) {
      // No-op branch keeps initialization explicit without creating duplicate result state.
    }
    setActive({
      assessmentId,
      currentQuestionIndex: Math.max(0, Math.min(questionIndex, assessment.questions.length - 1)),
      answers: {},
      submittedQuestions: [],
      questionFeedback: {},
      startedAt: new Date().toISOString(),
    });
    return true;
  }, [results]);

  const setQuestionIndex = useCallback((index: number) => {\n    setActive((current) => {\n      if (!current) return current;\n      const assessment = getAssessment(current.assessmentId);\n      if (!assessment) return current;\n      return { ...current, currentQuestionIndex: Math.max(0, Math.min(index, assessment.questions.length - 1)) };\n    });\n  }, []);\n\n  const setAnswer = useCallback((questionId: string, value: string | string[]) => {
    setActive((current) => current ? { ...current, answers: { ...current.answers, [questionId]: value } } : current);
  }, []);

  const submitQuestion = useCallback((assessmentId: string, questionId: string) => {
    const assessment = getAssessment(assessmentId);
    if (!assessment || !active || active.assessmentId !== assessmentId) return null;
    const question = assessment.questions.find((item) => item.id === questionId);
    if (!question) return null;
    const value = active.answers[questionId];
    if (value === undefined || value === "") return null;
    const correct = question.type === "coding"
      ? String(value).toLowerCase().includes(String(question.correctAnswer).toLowerCase())
      : answerEquals(value, question.correctAnswer);
    const answer: AssessmentAnswer = { questionId, value, correct, submitted: true };
    setActive((current) => current ? {
      ...current,
      submittedQuestions: current.submittedQuestions.includes(questionId) ? current.submittedQuestions : [...current.submittedQuestions, questionId],
      questionFeedback: { ...current.questionFeedback, [questionId]: { correct, explanation: question.explanation, correctAnswer: question.correctAnswer } },
    } : current);
    return answer;
  }, [active]);

  const submitAssessment = useCallback((assessmentId: string, timeSpentSeconds?: number) => {
    const assessment = getAssessment(assessmentId);
    if (!assessment || !active || active.assessmentId !== assessmentId) return null;
    const answers: AssessmentAnswer[] = assessment.questions.map((question) => {
      const value = active.answers[question.id];
      const feedback = active.questionFeedback[question.id];
      const correct = feedback?.correct ?? (value !== undefined && value !== "" ? answerEquals(value, question.correctAnswer) : false);
      return { questionId: question.id, value: value ?? "", correct, submitted: Boolean(value !== undefined && value !== "") };
    });
    const correctCount = answers.filter((answer) => answer.correct).length;
    const totalQuestions = assessment.questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const previousAttempts = results.filter((item) => item.assessmentId === assessmentId);
    const attemptNumber = previousAttempts.length + 1;
    const result: AssessmentResult = {
      assessmentId, attemptId: `attempt-${Date.now()}`, answers, correctCount, incorrectCount: totalQuestions - correctCount,
      totalQuestions, percentage, passed: percentage >= assessment.passingScore, submittedAt: new Date().toISOString(), attemptNumber, timeSpentSeconds,
    };
    persist([...results, result]);
    setActive(null);
    return result;
  }, [active, persist, results]);

  const resetAssessment = useCallback((assessmentId: string) => {
    const assessment = getAssessment(assessmentId);
    if (!assessment || !canAttemptInternal(results, assessmentId)) return false;
    setActive({ assessmentId, currentQuestionIndex: 0, answers: {}, submittedQuestions: [], questionFeedback: {}, startedAt: new Date().toISOString() });
    return true;
  }, [results]);

  const getSummary = useCallback((assessmentId: string): AssessmentAttemptSummary => {
    const items = results.filter((item) => item.assessmentId === assessmentId);
    return {
      assessmentId,
      latest: items[items.length - 1] ?? null,
      best: items.reduce<AssessmentResult | null>((best, item) => !best || item.percentage > best.percentage ? item : best, null),
      attemptCount: items.length,
    };
  }, [results]);

  const canAttempt = useCallback((assessmentId: string) => canAttemptInternal(results, assessmentId), [results]);
  const isCompleted = useCallback((assessmentId: string) => results.some((item) => item.assessmentId === assessmentId), [results]);

  const value = useMemo(() => ({ active, results, startAssessment, setQuestionIndex, setAnswer, submitQuestion, submitAssessment, resetAssessment, getSummary, canAttempt, isCompleted }), [active, results, startAssessment, setQuestionIndex, setAnswer, submitQuestion, submitAssessment, resetAssessment, getSummary, canAttempt, isCompleted]);
  return <AssessmentContext.Provider value={value}>{children}</AssessmentContext.Provider>;
}

function canAttemptInternal(results: AssessmentResult[], assessmentId: string) {
  const assessment = getAssessment(assessmentId);
  if (!assessment) return false;
  if (assessment.attemptsAllowed === null) return true;
  return results.filter((item) => item.assessmentId === assessmentId).length < assessment.attemptsAllowed;
}

export function useAssessments() {
  const value = useContext(AssessmentContext);
  if (!value) throw new Error("useAssessments must be used inside AssessmentProvider");
  return value;
}
