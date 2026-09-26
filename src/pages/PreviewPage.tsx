import { ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button, Card, PageHeader, Badge } from "../components/ui";

export function PreviewPage({ title, description, label, action }: { title: string; description: string; label: string; action?: string }) {
  const navigate = useNavigate();
  return <div>
    <PageHeader title={title} description={description} eyebrow="Qubrix workspace" action={action && <Button onClick={() => navigate("/")}><ArrowUpRight size={16} /> Return to dashboard</Button>} />
    <div className="preview-grid">
      <Card className="preview-hero">
        <div className="preview-orb"><Sparkles size={22} /></div><Badge tone="purple">Foundation ready</Badge><h2>{label}</h2>
        <p>This section is wired into the Qubrix application shell and ready for its dedicated MVP interaction layer. The next implementation phase will connect the mocked experience defined in the requirements.</p>
        <div className="preview-lines" aria-hidden="true"><span /><span /><span /></div>
      </Card>
      <Card className="preview-status"><div className="card-kicker">Implementation status</div><h3>Ready for the next phase</h3><p className="muted">Reusable state, mock data, loading states, responsive layout primitives, and the shared visual system are established for this section.</p><Badge tone="cyan">Shell connected</Badge></Card>
    </div>
  </div>;
}