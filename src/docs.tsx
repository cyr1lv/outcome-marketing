import React from "react";
import ReactDOM from "react-dom/client";
import { container, heading, page, paragraph } from "./styles";
import "./global.css";

const sectionStyle: React.CSSProperties = {
  display: "grid",
  gap: 8,
};

const functionsGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 24,
  marginTop: 16,
};

const sectionsGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 24,
  marginTop: 16,
};

function Docs() {
  return (
    <main style={page}>
      <header className="site-header">
        <div className="site-header-inner">
          <div className="site-logo-frame">
            <div role="img" aria-label="Outcome Infrastructure logo" className="site-logo-mark" />
          </div>
          <nav className="site-nav">
            <a href="/">Home</a>
          </nav>
        </div>
      </header>
      <div style={container} className="site-container">
        <section style={sectionStyle}>
          <div className="hero-title">
            <h1 style={heading}>Outcome Infrastructure — Developer Documentation</h1>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={paragraph}>
              Outcome Infrastructure is decision infrastructure for AI systems.
            </p>
            <p style={paragraph}>
              It operates before execution and performs four functions simultaneously:
            </p>
            <p style={paragraph}>
              Governance — enforce what is allowed
              <br />
              Decision-making — determine what should happen now
              <br />
              Optimization — improve timing, ordering, and intensity
              <br />
              Steering &amp; feedback — rebalance risk and outcome over time
            </p>
            <p style={paragraph}>
              Outcome never executes actions itself.
              <br />
              It governs, decides, optimizes, and steers — before anything happens.
            </p>
          </div>
        </section>

        <hr style={{ border: "1px solid #2A2A2E", margin: "24px 0" }} />

        <section style={sectionStyle}>
          <h2 style={heading}>The four functions of Outcome</h2>
          <div style={functionsGrid} className="docs-grid">
            <div>
              <h3 style={heading}>1. Governance — Mandate</h3>
              <p style={paragraph}>Mandate enforces hard boundaries.</p>
              <p style={paragraph}>It translates:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>legislation (EU AI Act, GDPR)</li>
                <li>compliance frameworks (SOC 2, internal controls)</li>
                <li>organizational risk limits</li>
              </ul>
              <p style={paragraph}>into machine-enforceable constraints.</p>
              <p style={paragraph}>Mandate answers:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>Is execution allowed at all?</li>
                <li>Which channels are permitted?</li>
                <li>Is autonomy allowed or restricted?</li>
                <li>Is human approval required?</li>
              </ul>
              <p style={paragraph}>Mandate:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>cannot be overridden</li>
                <li>does not optimize</li>
                <li>does not decide timing or value</li>
              </ul>
              <p style={paragraph}>Governance defines what is allowed and what is never allowed.</p>
            </div>

            <div>
              <h3 style={heading}>2. Decision-making — ALLOW / WAIT / BLOCK</h3>
              <p style={paragraph}>
                For every evaluated context, Outcome produces exactly one decision:
              </p>
              <ul style={{ paddingLeft: 18 }}>
                <li>ALLOW — execution permitted within policy</li>
                <li>WAIT — defer execution, gather more signals</li>
                <li>BLOCK — execution prohibited</li>
              </ul>
              <p style={paragraph}>Key properties:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>Decisions are made before execution</li>
                <li>WAIT is a successful outcome, not a failure</li>
                <li>Decisions are explainable and auditable</li>
              </ul>
            </div>

            <div>
              <h3 style={heading}>3. Optimization — Max Outcome Decision Engine</h3>
              <p style={paragraph}>
                Within Mandate boundaries, Outcome actively optimizes decisions.
              </p>
              <p style={paragraph}>It continuously evaluates:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>probability of success</li>
                <li>expected value</li>
                <li>timing suitability</li>
                <li>accumulated risk</li>
              </ul>
              <p style={paragraph}>
                Max Outcome = decisions × probability × value × timing − risk
              </p>
              <p style={paragraph}>Optimization includes:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>delaying execution to improve timing</li>
                <li>preferring WAIT over ALLOW when value increases</li>
                <li>reducing volume to prevent risk accumulation</li>
                <li>ordering actions by expected outcome</li>
                <li>blocking actions that are allowed by policy but irrational by context</li>
              </ul>
            </div>

            <div>
              <h3 style={heading}>4. Steering &amp; feedback — Friction Index</h3>
              <p style={paragraph}>The Friction Index measures misalignment between:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>intent</li>
                <li>timing</li>
                <li>governance</li>
              </ul>
              <p style={paragraph}>
                It advises how much friction is required to balance risk and outcome before
                execution.
              </p>
              <p style={paragraph}>The Friction Index:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>does not execute</li>
                <li>does not decide individual contexts</li>
                <li>steers policy and autonomy over time</li>
              </ul>
            </div>
          </div>
        </section>

        <hr style={{ border: "1px solid #2A2A2E", margin: "24px 0" }} />

        <section style={sectionStyle}>
          <div style={sectionsGrid} className="docs-grid">
            <div>
              <h2 style={heading}>Mental model</h2>
              <p style={paragraph}>
                Outcome introduces a strict separation of responsibilities:
              </p>
              <p style={paragraph}>
                Signals → Outcome Infrastructure → Decision → Execution Agents
              </p>
              <ul style={{ paddingLeft: 18 }}>
                <li>Agents produce signals</li>
                <li>Outcome evaluates governance, decisions, optimization, and steering</li>
                <li>Execution agents act only after permission</li>
                <li>No component crosses its boundary</li>
              </ul>
              <p style={paragraph}>
                This separation is the core safety and scalability mechanism.
              </p>
            </div>

            <div>
              <h2 style={heading}>Signals (input-only)</h2>
              <p style={paragraph}>Agents never act directly.</p>
              <p style={paragraph}>They emit signals describing the current context, such as:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>intent</li>
                <li>timing confidence</li>
                <li>value indicators</li>
                <li>risk indicators</li>
                <li>interaction history</li>
                <li>trust or validation evidence</li>
              </ul>
              <p style={paragraph}>Signals must be:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>structured</li>
                <li>source-aware</li>
                <li>confidence-weighted</li>
                <li>non-executing</li>
              </ul>
              <p style={paragraph}>Signal ≠ permission.</p>
            </div>

            <div>
              <h2 style={heading}>Execution agents</h2>
              <p style={paragraph}>Execution agents perform actions outside Outcome Infrastructure.</p>
              <p style={paragraph}>Examples:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>sending messages</li>
                <li>triggering workflows</li>
                <li>calling external APIs</li>
                <li>updating external systems</li>
              </ul>
              <p style={paragraph}>Execution agents:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>do not decide</li>
                <li>do not optimize</li>
                <li>do not interpret policy</li>
              </ul>
              <p style={paragraph}>Execution may occur only if all conditions are met:</p>
              <ol style={{ paddingLeft: 18 }}>
                <li>Mandate allows execution</li>
                <li>Decision is ALLOW</li>
                <li>Any required human approval is satisfied</li>
              </ol>
              <p style={paragraph}>Behavior by decision:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>ALLOW → execution may occur</li>
                <li>WAIT → no execution</li>
                <li>BLOCK → execution forbidden</li>
              </ul>
            </div>

            <div>
              <h2 style={heading}>Integration pattern</h2>
              <p style={paragraph}>Typical flow:</p>
              <p style={paragraph}>
                emit signals → call Outcome → receive decision → execute externally (or not)
              </p>
              <p style={paragraph}>
                Outcome can be deployed as an API, internal service, or embedded decision layer.
                It is domain-agnostic and vendor-neutral.
              </p>
            </div>

            <div>
              <h2 style={heading}>API Example — Decision Endpoint (v1)</h2>

              <h3 style={heading}>Endpoint</h3>
              <p style={paragraph}>POST /decision</p>
              <p style={paragraph}>
                Outcome evaluates governance, decision-making, optimization, and steering before
                execution and returns one decision.
              </p>

              <h3 style={heading}>Request (signals only)</h3>
              <pre
                style={{
                  background: "#0E0E10",
                  border: "1px solid #2A2A2E",
                  padding: 16,
                  borderRadius: 8,
                  overflowX: "auto",
                }}
              >{`{
  "context_id": "ctx_8f3a21",
  "signals": {
    "intent": {
      "state": "open",
      "confidence": 0.82,
      "source": "agent:candidate_intent"
    },
    "timing": {
      "state": "uncertain",
      "confidence": 0.56,
      "source": "agent:interaction_history"
    },
    "value": {
      "expected": "medium",
      "confidence": 0.71,
      "source": "agent:market_intent"
    },
    "risk": {
      "level": "elevated",
      "confidence": 0.64,
      "source": "agent:governance_risk"
    }
  }
}`}</pre>
              <p style={paragraph}>Notes:</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>Signals are descriptive, not imperative</li>
                <li>No actions, no channels, no execution hints</li>
                <li>context_id groups signals into one decision context</li>
              </ul>

              <h3 style={heading}>Response</h3>
              <pre
                style={{
                  background: "#0E0E10",
                  border: "1px solid #2A2A2E",
                  padding: 16,
                  borderRadius: 8,
                  overflowX: "auto",
                }}
              >{`{
  "decision": "WAIT",
  "explanation": "Timing confidence below threshold. Additional signals required.",
  "human_approval_required": false
}`}</pre>

              <h3 style={heading}>Possible decisions</h3>
              <p style={paragraph}>ALLOW | WAIT | BLOCK</p>
              <ul style={{ paddingLeft: 18 }}>
                <li>ALLOW → execution may occur</li>
                <li>WAIT → defer execution</li>
                <li>BLOCK → execution prohibited</li>
              </ul>
              <p style={paragraph}>Outcome never executes actions.</p>
            </div>
          </div>
        </section>

        <hr style={{ border: "1px solid #2A2A2E", margin: "24px 0" }} />

        <section style={sectionStyle}>
          <h2 style={heading}>Recommended defaults</h2>
          <ul style={{ paddingLeft: 18 }}>
            <li>Start with WAIT-by-default</li>
            <li>Log all decisions</li>
            <li>Observe Friction Index trends before increasing autonomy</li>
          </ul>
        </section>

        <hr style={{ border: "1px solid #2A2A2E", margin: "24px 0" }} />

        <section style={sectionStyle}>
          <h2 style={heading}>Summary</h2>
          <p style={paragraph}>Outcome Infrastructure:</p>
          <ul style={{ paddingLeft: 18 }}>
            <li>enforces law and policy</li>
            <li>makes explicit decisions</li>
            <li>optimizes timing and intensity</li>
            <li>continuously rebalances risk and value</li>
            <li>all before execution</li>
          </ul>
          <p style={paragraph}>Governance without optimization is rigid.</p>
          <p style={paragraph}>Optimization without governance is dangerous.</p>
          <p style={paragraph}>Outcome does both — simultaneously.</p>
        </section>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Docs />
  </React.StrictMode>
);
