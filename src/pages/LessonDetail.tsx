import { ArrowLeft, ArrowRight, Bot, CheckCircle2, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { InteractiveExample } from "../components/InteractiveExample";
import { MissingContent } from "../components/learning";
import { Badge, Breadcrumb, Button, Card, Modal, PageHeader, ProgressBar, Toast } from "../components/ui";
import { getLesson, getModule, getLessonIndex } from "../mockData";
import { useLearning } from "../context/LearningContext";

export function LessonDetail() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();
  const { isCompleted, completeLesson, completedLessonIds } = useLearning();
  const [toast, setToast] = useState<string | null>(null);
  const [tutorOpen, setTutorOpen] = useState(false);
  const module = moduleId ? getModule(moduleId) : undefined;
  const lesson = lessonId ? getLesson(lessonId) : undefined;

  useEffect(() => {
    setToast(null);
    setTutorOpen(false);
  }, [lessonId]);

  if (!module || !lesson || lesson.moduleId !== module.id) {
    return <MissingContent title="Lesson not found" description="That lesson does not belong to the selected module in the current mock curriculum." />;
  }

  const index = getLessonIndex(module.id, lesson.id);
  const previous = index > 0 ? module.lessons[index - 1] : undefined;
  const next = index < module.lessons.length - 1 ? module.lessons[index + 1] : undefined;
  const completeCount = module.lessons.filter((item) => completedLessonIds.includes(item.id)).length;
  const lessonProgress = Math.round(((index + (isCompleted(lesson.id) ? 1 : 0)) / module.lessons.length) * 100);
  const completed = isCompleted(lesson.id);

  const markComplete = () => {
    completeLesson(lesson.id);
    setToast(completed ? "Lesson is already complete." : "Lesson marked complete. Your curriculum progress is updated.");
  };

  return (
    <div>
      <Breadcrumb items={[{ label: "Learn", href: "/learn" }, { label: module.title, href: `/learn/module/${module.id}` }, { label: lesson.title }]} />
      <PageHeader eyebrow={`Lesson ${index + 1} of ${module.lessons.length}`} title={lesson.title} description={lesson.description} action={<Button variant="secondary" onClick={() => setTutorOpen(true)}><Bot size={16} /> Ask AI Tutor</Button>} />

      <div className="lesson-progress-strip">
        <div><span>Module progress</span><strong>{completeCount} / {module.lessons.length} complete</strong></div>
        <ProgressBar value={lessonProgress} label="Lesson position" />
      </div>

      <div className="lesson-layout">
        <main className="lesson-main">
          <Card className="lesson-article">
            <div className="lesson-article-meta"><Badge tone="purple">{lesson.difficulty}</Badge><span><Clock3 size={14} /> {lesson.duration}</span></div>
            {lesson.sections.map((section) => <section key={section.heading} className="lesson-section"><h2>{section.heading}</h2><p>{section.body}</p></section>)}

            {lesson.circuit && <div className="circuit-example"><div className="card-kicker">Circuit example</div><pre>{lesson.circuit.join("\n")}</pre><span>Conceptual circuit notation · no quantum execution is performed here.</span></div>}

            <InteractiveExample example={lesson.example} />

            <section className="key-takeaways">
              <div className="card-kicker">Key takeaways</div>
              <h2>What to remember</h2>
              <ul>{lesson.takeaways.map((takeaway) => <li key={takeaway}><CheckCircle2 size={16} /><span>{takeaway}</span></li>)}</ul>
            </section>

            <div className={`lesson-completion ${completed ? "lesson-completion-done" : ""}`}>
              <div><Badge tone={completed ? "success" : "purple"}>{completed ? "Completed" : "Ready to complete"}</Badge><h2>{completed ? "Nice work — lesson complete." : "Ready to mark this lesson complete?"}</h2><p>{completed ? "Your shared learning progress now includes this lesson." : "You can revisit this lesson later. Completing it updates the module and overall curriculum progress."}</p></div>
              <Button onClick={markComplete}><CheckCircle2 size={16} /> {completed ? "Completed" : "Mark as Complete"}</Button>
            </div>
          </Card>

          <nav className="lesson-navigation" aria-label="Lesson navigation">
            {previous ? <Link className="btn btn-secondary" to={`/learn/module/${module.id}/lesson/${previous.id}`}><ArrowLeft size={15} /> Previous lesson</Link> : <span />}
            {next ? <Link className="btn btn-primary" to={`/learn/module/${module.id}/lesson/${next.id}`}>{completed ? "Next lesson" : "Skip to next"} <ArrowRight size={15} /></Link> : <Link className="btn btn-primary" to={`/learn/module/${module.id}`}>Back to module <ArrowRight size={15} /></Link>}
          </nav>
        </main>

        <aside className="lesson-sidebar">
          <Card className="lesson-context-card"><span className="card-kicker">You are learning</span><h3>{module.title}</h3><p>{module.description}</p><Link to={`/learn/module/${module.id}`}>View module</Link>{lesson.circuit && <Link className="btn btn-secondary btn-sm" to="/circuit-designer">Open Circuit Designer</Link>}</Card>
          <Card className="lesson-tutor-card"><Bot size={19} /><span className="card-kicker">Need a hint?</span><h3>Ask about {lesson.title}</h3><p>The future tutor will use this module and lesson context when answering.</p><Button variant="secondary" size="sm" onClick={() => setTutorOpen(true)}>Ask AI Tutor</Button></Card>
        </aside>
      </div>

      <Modal open={tutorOpen} title={`Ask AI about ${lesson.title}`} onClose={() => setTutorOpen(false)} actions={<Button onClick={() => setTutorOpen(false)}>Close</Button>}>
        <div className="tutor-preview"><div className="tutor-preview-icon"><Bot size={20} /></div><Badge tone="cyan">Mock tutor entry point</Badge><h3>{lesson.title}</h3><p>Context prepared for the future AI Tutor:</p><ul><li><strong>Module:</strong> {module.title}</li><li><strong>Lesson:</strong> {lesson.title}</li><li><strong>Topic:</strong> {lesson.description}</li></ul><div className="tutor-prompt">“Explain {lesson.title} in simpler terms and give me one example I can try.”</div><span className="muted-small">AI responses are not implemented in this phase.</span></div>
      </Modal>

      {toast && <Toast message={toast} tone={completed ? "neutral" : "success"} />}
    </div>
  );
}