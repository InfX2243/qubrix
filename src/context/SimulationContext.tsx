import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { CircuitState, Framework } from "../data/circuitData";
import { runSimulation, type SimulationResult } from "../services/mockSimulation";

interface SimulationContextValue {
  circuit: CircuitState | null; framework: Framework; shots: number;
  status: "IDLE" | "READY" | "VALIDATING" | "RUNNING" | "SUCCESS" | "ERROR";
  latestResult: SimulationResult | null; history: SimulationResult[];
  setCircuit: (circuit: CircuitState) => void; setFramework: (framework: Framework) => void; setShots: (shots: number) => void;
  execute: (circuit: CircuitState, framework: Framework, shots: number) => Promise<SimulationResult>;
}
const SimulationContext = createContext<SimulationContextValue | null>(null);
const clone = (c: CircuitState): CircuitState => ({ qubits: c.qubits, gates: c.gates.map(g => ({ ...g })) });
export function SimulationProvider({ children }: { children: ReactNode }) {
  const [circuit, setCircuitState] = useState<CircuitState | null>(null);
  const [framework, setFramework] = useState<Framework>("Qiskit Aer");
  const [shots, setShots] = useState(1000);
  const [status, setStatus] = useState<SimulationContextValue["status"]>("IDLE");
  const [latestResult, setLatestResult] = useState<SimulationResult | null>(null);
  const [history, setHistory] = useState<SimulationResult[]>([]);
  const setCircuit = (c: CircuitState) => { setCircuitState(clone(c)); if (status === "IDLE") setStatus("READY"); };
  const execute = async (c: CircuitState, f: Framework, s: number) => {
    setCircuit(c); setFramework(f); setShots(s); setStatus("VALIDATING");
    const result = await runSimulation({ circuit: c, framework: f, shots: s });
    if (result.status === "ERROR") { setStatus("ERROR"); setLatestResult(result); return result; }
    setStatus("RUNNING"); await new Promise(resolve => window.setTimeout(resolve, 250));
    setStatus("SUCCESS"); setLatestResult(result); setHistory(current => [result, ...current].slice(0, 12)); return result;
  };
  const value = useMemo(() => ({ circuit, framework, shots, status, latestResult, history, setCircuit, setFramework, setShots, execute }), [circuit, framework, shots, status, latestResult, history]);
  return <SimulationContext.Provider value={value}>{children}</SimulationContext.Provider>;
}
export function useSimulation() {
  const value = useContext(SimulationContext);
  if (!value) throw new Error("useSimulation must be used inside SimulationProvider");
  return value;
}
