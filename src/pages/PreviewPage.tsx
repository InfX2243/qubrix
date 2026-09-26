import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button, Card, PageHeader, Badge } from "../components/ui";

export function PreviewPage({ title, description, label, action }: { title: string; description: string; label: string; action?: string }) {
  return (
    <div>
      <PageHeader title={title} description={description} eyebrow="Qubrix workspace" action={action && <Button><ArrowUpRight size={16} />{action}</Button>} />
      <div className="preview-grid">
        <Card className="preview-hero">
          <div className="preview-orb"><Sparkles size={22} /></div>
          <Badge tone="purple">Foundation ready</Badge>
          <h2>{label}</h2>
          <p>This section is wired into the Qubrix application shell and ready for its dedicated MVP interaction layer. The next implementation phase will connect the mocked experience defined in the requirements.</p>
          <div className="preview-lines"><span /><span /><span /></div>
        </Card>
        <Card>
          <div className="card-kicker">Coming next</div>
          <h3>Interactive experience</h3>
          <p className="muted">Reusable state, mock data, loading states, and responsive UI primitives are already established for this section.</p>
          <Button variant="secondary">View interaction plan</Button>
        </Card>
      </div>
    </div>
  );
}