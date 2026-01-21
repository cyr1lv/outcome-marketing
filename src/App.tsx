import { Hero } from "./sections/Hero";
import { WaitConsole } from "./sections/WaitConsole";
import { AllowConsole } from "./sections/AllowConsole";
import { FrictionConsole } from "./sections/FrictionConsole";

export default function App() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px" }}>
      {/* HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 48 }}>
        <Hero />
        <WaitConsole />
      </section>

      {/* DECISION */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: 48,
          marginTop: 120,
        }}
      >
        <div>
          <h2>Decision-first execution</h2>
          <p>
            Outcome Infrastructure scales decisions — not actions.
            You decide. Mandate enforces. Agents execute.
          </p>
        </div>
        <AllowConsole />
      </section>

      {/* GOVERNANCE */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 520px",
          gap: 48,
          marginTop: 120,
        }}
      >
        <div>
          <h2>Governance and control</h2>
          <p>
            The Friction Index shows where governance limits value
            or exposes risk — and where policy adjustments improve outcome.
          </p>
        </div>
        <FrictionConsole />
      </section>
    </main>
  );
}
