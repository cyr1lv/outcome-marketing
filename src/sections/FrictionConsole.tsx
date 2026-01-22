import { ConsoleFrame, ConsoleLabel } from "../components/Console";
import { colors } from "../styles";

const indicators = [
  { label: "ALLOW", value: "12%" },
  { label: "WAIT", value: "6%" },
  { label: "BLOCK", value: "-3%" },
];

export function FrictionConsole() {
  return (
    <ConsoleFrame>
      <ConsoleLabel>Friction Index</ConsoleLabel>

        <div style={{ display: "flex", gap: 16, margin: "12px 0" }}>
          {indicators.map((indicator) => (
            <div key={indicator.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "clamp(56px, 10vw, 72px)",
                  height: "clamp(56px, 10vw, 72px)",
                  borderRadius: "50%",
                  border: `3px solid ${colors.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.text,
                  fontWeight: 600,
                  fontSize: "clamp(12px, 1.8vw, 14px)",
                }}
              >
                {indicator.value}
              </div>
              <div
                style={{
                  fontSize: "clamp(10px, 1.6vw, 11px)",
                  color: colors.muted,
                  marginTop: 6,
                }}
              >
                {indicator.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ color: colors.muted, marginBottom: 12, fontSize: "clamp(11px, 1.6vw, 12px)" }}>
          Month-on-Month improvement · 12%+
        </div>

        <div style={{ marginTop: 12 }}>
          <ConsoleLabel>Policy guidance</ConsoleLabel>
        </div>
        <div style={{ marginTop: 6, fontSize: "clamp(11px, 1.6vw, 12px)" }}>
          <div style={{ fontSize: "clamp(11px, 1.6vw, 12px)", color: colors.muted }}>
            Increase outcome
          </div>
          <ul
            style={{
              marginTop: 6,
              paddingLeft: 18,
              color: colors.text,
              fontSize: "clamp(10px, 1.5vw, 11px)",
            }}
          >
            <li>Loosen interaction limits where risk stays contained</li>
            <li>Allow more autonomy in consistently profitable contexts</li>
          </ul>
          <div
            style={{
              fontSize: "clamp(10px, 1.5vw, 11px)",
              color: colors.muted,
              marginTop: 10,
            }}
          >
            Reduce risk
          </div>
          <ul
            style={{
              marginTop: 6,
              paddingLeft: 18,
              color: colors.text,
              fontSize: "clamp(10px, 1.5vw, 11px)",
            }}
          >
            <li>Tighten execution scope where friction is too low</li>
            <li>Raise signal confidence before ALLOW in volatile contexts</li>
          </ul>
        </div>

        <div
          style={{
            fontSize: "clamp(11px, 1.6vw, 12px)",
            color: colors.muted,
            marginTop: 16,
          }}
        >
          Improve revenue by adjusting governance — not by increasing activity.
        </div>
    </ConsoleFrame>
  );
}
