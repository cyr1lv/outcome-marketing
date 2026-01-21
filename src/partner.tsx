import React from "react";
import ReactDOM from "react-dom/client";
import { container, heading, page, paragraph } from "./styles";

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
      <div
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          border: "3px solid #9A8463",
          borderRadius: 0,
          padding: 8,
          zIndex: 2,
          background: "transparent",
        }}
      >
        <div
          role="img"
          aria-label="Outcome Infrastructure logo"
          style={{
            width: 95,
            height: 95,
            backgroundColor: "#9A8463",
            WebkitMaskImage: "url(/logo.png)",
            maskImage: "url(/logo.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          display: "flex",
          gap: 12,
          padding: "6px 10px",
          border: "1px solid #2A2A2E",
          borderRadius: 999,
          background: "rgba(11, 11, 12, 0.85)",
          fontSize: 12,
          letterSpacing: "0.08em",
          zIndex: 2,
        }}
      >
        <a
          href="/"
          style={{
            color: "#E6E2DA",
            textDecoration: "none",
            borderBottom: "1px solid transparent",
          }}
          onMouseEnter={(event) => (event.currentTarget.style.borderBottomColor = "#9A8463")}
          onMouseLeave={(event) => (event.currentTarget.style.borderBottomColor = "transparent")}
        >
          Home
        </a>
      </div>
      <div style={container}>
        <section style={sectionStyle}>
          <div
            style={{
              textAlign: "center",
              width: "max-content",
              position: "relative",
              left: "calc(50vw - 100px)",
              transform: "translateX(-50%)",
            }}
          >
            <h1 style={heading}>Certified Implementation Partners</h1>
          </div>
          <p style={{ ...paragraph, textAlign: "center" }}>
            Native Outcome Infrastructure is implemented by certified partners.
          </p>
          <p style={{ ...paragraph, textAlign: "center" }}>
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

        <section style={grid3x2}>
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
