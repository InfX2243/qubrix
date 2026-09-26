import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { CircuitState, Framework } from "../data/circuitData";
import { runSimulation, type SimulationResult } from "../services/mockSimulation";

interface SimulationContextValue {
  circuit: CircuitState | null;
  framework: Framework;
  shots: number;
  status: "IDLE" | "READY" | "VALIDATING" | "RUNNING" | "SUCCESS" | "ERROR";
  latestResult: SimulationResult | null;
  selectedResult: SimulationResult | null;
  history: SimulationResult[];
  setCircuit: (circuit: CircuitState) => void;
  setFramework: (framework: Framework) => void;
  setShots: (shots: number) => void;
  selectResult: (result: SimulationResult) => void;
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
  const [selectedResult, setSelectedResult] = useState<SimulationResult | null>(null);
  const [history, setHistory] = useState<SimulationResult[]>([]);

  const setCircuit = useCallback((nextCircuit: CircuitState) => {
    setCircuitState(clone(nextCircuit));
    setStatus(current => current === "IDLE" ? "READY" : current);
  }, []);

  const selectResult = useCallback((result: SimulationResult) => {
    setSelectedResult(result);
    setCircuitState(clone(result.circuitSnapshot));
    setFramework(result.framework);
    setShots(result.shots);
    setStatus(result.status);
  }, []);

  const execute = useCallback(async (nextCircuit: CircuitState, nextFramework: Framework, nextShots: number) => {
    setCircuit(nextCircuit);
    setFramework(nextFramework);
    setShots(nextShots);
    setStatus("VALIDATING");

    const result = await runSimulation({ circuit: nextCircuit, framework: nextFramework, shots: nextShots });

    if (result.status === "ERROR") {
      setStatus("ERROR");
      setLatestResult(result);
      setSelectedResult(result);
      return result;
    }

    setStatus("RUNNING");
    await new Promise(resolve => window.setTimeout(resolve, 250));
    setStatus("SUCCESS");
    setLatestResult(result);
    setSelectedResult(result);
    setHistory(current => [result, ...current].slice(0, 12));
    return result;
  }, [setCircuit]);

  const value = useMemo(() => ({
    circuit, framework, shots, status, latestResult, selectedResult, history,
    setCircuit, setFramework, setShots, selectResult, execute
  }), [circuit, framework, shots, status, latestResult, selectedResult, history, setCircuit, selectResult, execute]);

  return <SimulationContext.Provider value={value}>{children}</SimulationContext.Provider>;
}

export function useSimulation() {
  const value = useContext(SimulationContext);
  if (!value) throw new Error("useSimulation must be used inside SimulationProvider");
  return value;
}
