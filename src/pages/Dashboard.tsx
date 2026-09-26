import { ArrowRight, BookOpen, BrainCircuit, CheckCircle2, CirclePlay, Clock3, Flame, Gauge, GitBranch, Layers3, Sparkles, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { activities, currentUser, dashboardStats, lessons, moduleProgress, recommendedLesson } from "../mockData";
import { Badge, Button, Card, PageHeader, ProgressBar, SectionHeader, StatCard } from "../components/ui";

export function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader
        eyebrow="Monday, September 26"
        title={`Welcome back, ${currentUser.name.split(" ")[0]}`}
        description="Keep building your quantum intuition. Your next breakthrough is one experiment away."
        action={<Button variant="secondary" onClick={() => navigate("/learn")}><BookOpen size={16} /> Continue learning</Button>}
      />

      <section className="dashboard-hero">
        <Card className="progress-hero">
          <div className="progress-hero-copy">
            <Badge tone="purple">Your learning journey</Badge>
            <h2>Quantum Computing Fundamentals</h2>
            <p>You’re making steady progress through the core concepts. Continue with measurement to connect state preparation with observable outcomes.</p>
            <ProgressBar value={currentUser.overallProgress} label="Overall completion" />
            <Button onClick={() => navigate("/learn")}>Continue lesson <ArrowRight size={16} /></Button>
          </div>
          <div className="progress-ring" aria-label={`${currentUser.overallProgress}% overall completion`}>
            <div><strong>{currentUser.overallProgress}%</strong><span>complete</span></div>
          </div>
        </Card>
        <Card className="recommendation-card">
          <div className="recommendation-top"><div className="stat-icon cyan"><Sparkles size={19} /></div><Badge tone="cyan">Recommended</Badge></div>
          <span className="card-kicker">{recommendedLesson.module}</span>
          <h3>{recommendedLesson.title}</h3>
          <p>{recommendedLesson.reason}</p>
          <div className="mini-meta"><Clock3 size={15} /> {recommendedLesson.duration} <span>•</span> Beginner</div>
          <Button variant="ghost" onClick={() => navigate("/learn")}>Open lesson <ArrowRight size={15} /></Button>
        </Card>
      </section>

      <section className="stat-grid">
        <StatCard label="Hours learned" value={dashboardStats.hoursLearned} detail="This month" icon={<Clock3 size={19} />} />
        <StatCard label="Circuits run" value={String(dashboardStats.circuitsRun)} detail="+6 this week" icon={<GitBranch size={19} />} />
        <StatCard label="Average score" value={`${dashboardStats.averageScore}%`} detail="Across assessments" icon={<Target size={19} />} />
        <StatCard label="Learning streak" value={`${dashboardStats.streak} days`} detail="Personal best: 9" icon={<Flame size={19} />} />
      </section>

      <section className="dashboard-grid">
        <div className="dashboard-column">
          <SectionHeader title="Continue learning" action={<button className="text-button" onClick={() => navigate("/learn")}>View curriculum <ArrowRight size={14} /></button>} />
          <Card className="lesson-card">
            <div className="lesson-visual"><span>H</span><div className="wire" /><span className="measure">M</span></div>
            <div className="lesson-content">
              <div className="lesson-meta"><Badge tone="purple">In progress</Badge><span>8 min</span></div>
              <h3>{lessons[0].title}</h3>
              <p>{lessons[0].module} · Learn how the Hadamard gate creates an equal superposition.</p>
              <ProgressBar value={lessons[0].progress} label="Lesson progress" />
              <Button size="sm" onClick={() => navigate("/learn")}>Continue <ArrowRight size={14} /></Button>
            </div>
          </Card>

          <SectionHeader title="Recent activity" />
          <Card className="activity-card">
            {activities.map((activity, index) => (
              <div className="activity-row" key={activity.title}>
                <div className={`activity-icon activity-${activity.type}`}>{activity.type === "lesson" ? <BookOpen size={16} /> : activity.type === "circuit" ? <Zap size={16} /> : <CheckCircle2 size={16} />}</div>
                <div><strong>{activity.title}</strong><span>{activity.meta}</span></div>
                <time>{activity.time}</time>
                {index < activities.length - 1 && <span className="activity-divider" />}
              </div>
            ))}
          </Card>
        </div>

        <div className="dashboard-column">
          <SectionHeader title="Module progress" />
          <Card className="module-card">
            {moduleProgress.map((module) => {
              const value = Math.round((module.completed / module.total) * 100);
              return <div className="module-row" key={module.name}><div className="module-row-top"><strong>{module.name}</strong><span>{module.completed}/{module.total}</span></div><ProgressBar value={value} showValue={false} /></div>;
            })}
          </Card>

          <SectionHeader title="Quick actions" />
          <div className="quick-action-grid">
            <button className="quick-action" onClick={() => navigate("/circuit-designer")}><div className="quick-icon purple"><Layers3 size={19} /></div><span><strong>Circuit Designer</strong><small>Build visually</small></span><ArrowRight size={15} /></button>
            <button className="quick-action" onClick={() => navigate("/simulator")}><div className="quick-icon cyan"><CirclePlay size={19} /></div><span><strong>Run simulation</strong><small>Try a framework</small></span><ArrowRight size={15} /></button>
            <button className="quick-action" onClick={() => navigate("/learn")}><div className="quick-icon navy"><BrainCircuit size={19} /></div><span><strong>Ask AI Tutor</strong><small>Get an explanation</small></span><ArrowRight size={15} /></button>
          </div>

          <SectionHeader title="Assessment summary" action={<button className="text-button" onClick={() => navigate("/assessments")}>See all <ArrowRight size={14} /></button>} />
          <Card className="assessment-summary">
            <div className="score-circle"><strong>90</strong><span>score</span></div>
            <div><Badge tone="success">Completed</Badge><h3>Quantum Fundamentals</h3><p>8 questions · Last attempt yesterday</p></div>
            <Gauge size={21} className="assessment-gauge" />
          </Card>
        </div>
      </section>
    </div>
  );
}