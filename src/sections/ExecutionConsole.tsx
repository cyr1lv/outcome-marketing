import { colors } from "../styles";

export default function ExecutionConsole() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h3>Friction Index</h3>
        <p style={{ maxWidth: 720 }}>
          The Friction Index measures the misalignment between intent, timing, and
          governance. It advises how much friction is required to balance risk
          and outcome before execution.
        </p>

        <div
          style={{
            marginTop: 24,
            background: colors.panel,
            border: "1px solid #2A2A2A",
            padding: 32,
          }}
        >
          <div style={{ opacity: 0.7 }}>
            Max Outcome = decisions × probability × value × timing − risk
          </div>
        </div>
      </div>
    </section>
  );
}
