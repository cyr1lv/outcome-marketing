import React from "react";
import ReactDOM from "react-dom/client";
import { container, heading, page, paragraph } from "./styles";
import "./global.css";

const sectionStyle: React.CSSProperties = {
  display: "grid",
  gap: 8,
};

const grid3x2: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: 24,
  marginTop: 16,
};

function Partner() {
  return (
    <main style={page}>
      <header className="site-header">
        <div className="site-header-inner">
          <div className="site-logo-frame">
            <div role="img" aria-label="Outcome Infrastructure logo" className="site-logo-mark" />
          </div>
          <div className="site-header-title">
            <div className="site-header-title-main">Outcome Infrastructure</div>
            <div className="site-header-title-sub">Certified Implementation Partners</div>
          </div>
          <nav className="site-nav">
            <a href="/">Home</a>
          </nav>
        </div>
      </header>
      <div style={container} className="site-container">
        <section style={sectionStyle}>
          <div>
            <h1 style={heading}>Certified Implementation Partners</h1>
          </div>
          <p style={paragraph}>
            Native Outcome Infrastructure is implemented by certified partners.
          </p>
          <p style={paragraph}>
            Outcome Infrastructure is decision and governance infrastructure — not a
            services platform.
            <br />
            Implementation, migration, agent delivery and continuous optimization are
            delivered by certified implementation partners.
            <br />
            Outcome defines and enforces the boundaries. Partners deliver outcome within
            those boundaries.
          </p>
        </section>

        <section style={grid3x2} className="partner-grid">
          <div>
            <h2 style={heading}>Continuous optimization as a delivery model</h2>
            <p style={paragraph}>Native Outcome is not a one-off project.</p>
            <p style={paragraph}>Over time:</p>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              <li>new agents become available through the Agent Store</li>
              <li>agents are installed, replaced, or tuned</li>
              <li>execution patterns evolve</li>
              <li>autonomy is adjusted based on risk and outcome</li>
            </ul>
            <p style={{ ...paragraph, marginTop: 8 }}>
              This creates an ongoing delivery and optimization cycle — not a finite
              implementation.
            </p>
          </div>

          <div>
            <h2 style={heading}>Why this model works</h2>
            <p style={paragraph}>This model allows partners to:</p>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              <li>deliver faster than greenfield system builds</li>
              <li>operate at higher strategic value</li>
              <li>build long-term customer relationships</li>
            </ul>
            <p style={{ ...paragraph, marginTop: 8 }}>
              Outcome reduces implementation effort.
            </p>
          </div>

          <div>
            <h2 style={heading}>Your role as an implementation partner</h2>
            <p style={paragraph}>As a certified partner, you:</p>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              <li>implement Native Outcome Infrastructure in customer environments</li>
              <li>migrate existing systems and decision logic</li>
              <li>deliver and configure agents via the Agent Store</li>
              <li>design and maintain decision flows (signals → decision → execution)</li>
              <li>continuously optimize execution using the Friction Index</li>
            </ul>
            <p style={paragraph}>
              All execution happens inside Mandate-governed boundaries.
            </p>
          </div>

          <div>
            <h2 style={heading}>Clear separation of responsibility</h2>
            <p style={paragraph}>Outcome provides:</p>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              <li>Mandate and enforceable policy packs</li>
              <li>the Max Outcome Decision Engine</li>
              <li>the Friction Index</li>
              <li>the Value Surface</li>
              <li>certification and governance integrity</li>
            </ul>
            <p style={paragraph}>Certified partners:</p>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              <li>deliver implementations</li>
              <li>build and install agents</li>
              <li>optimize execution and timing</li>
              <li>apply Friction Index recommendations</li>
            </ul>
            <p style={{ ...paragraph, marginTop: 8 }}>
              Outcome governs. Partners execute and optimize.
            </p>
          </div>

          <div>
            <h2 style={heading}>Certification</h2>
            <p style={paragraph}>All implementation partners are certified by Outcome to ensure:</p>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              <li>correct governance behavior</li>
              <li>predictable decision logic</li>
              <li>auditability and explainability</li>
              <li>safe evolution of autonomy</li>
            </ul>
            <p style={{ ...paragraph, marginTop: 8 }}>
              Certification protects customers, partners, and the Outcome ecosystem.
            </p>
          </div>

          <div />
        </section>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Partner />
  </React.StrictMode>
);
