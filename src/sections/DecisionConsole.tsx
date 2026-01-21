import { colors } from "../styles";

export default function DecisionConsole() {
  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 40 }}>
        <div style={{ flex: 1 }}>
          <p>
            Mandate enforces law, policy, and responsibility. The Max Outcome
            Decision Engine determines when AI is allowed to act.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            background: colors.panel,
            border: "1px solid #2A2A2A",
            padding: 32,
          }}
        >
          <div style={{ fontSize: 12, opacity: 0.6 }}>Decision</div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: colors.wait,
              marginTop: 8,
            }}
          >
            WAIT
          </div>
          <div style={{ fontSize: 14, opacity: 0.7, marginTop: 16 }}>
            Context incomplete · risk window detected
          </div>
        </div>
      </div>
    </section>
  );
}
