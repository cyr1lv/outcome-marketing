import { ConsoleFrame, ConsoleLabel } from "../components/Console";
import { colors } from "../styles";

const indicators = [
  { label: "ALLOW", value: "12%" },
  { label: "WAIT", value: "6%" },
  { label: "BLOCK", value: "-3%" },
];

export function FrictionConsole() {
  return (
    <ConsoleFrame offsetTop={-1}>
      <ConsoleLabel>Friction Index</ConsoleLabel>

        <div style={{ display: "flex", gap: 16, margin: "16px 0" }}>
          {indicators.map((indicator) => (
            <div key={indicator.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  border: `3px solid ${colors.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.text,
                  fontWeight: 600,
                }}
              >
                {indicator.value}
              </div>
              <div style={{ fontSize: 10, color: colors.muted, marginTop: 6 }}>
                {indicator.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ color: colors.muted, marginBottom: 16 }}>
          Month-on-Month improvement · 12%+
        </div>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>Policy guidance</ConsoleLabel>
        </div>
        <div style={{ marginTop: 6, fontSize: 12 }}>
          <div style={{ fontSize: 12, color: colors.muted }}>Increase outcome</div>
          <ul style={{ marginTop: 6, paddingLeft: 18, color: colors.text, fontSize: 11 }}>
            <li>Loosen interaction limits where risk stays contained</li>
            <li>Allow more autonomy in consistently profitable contexts</li>
          </ul>
          <div style={{ fontSize: 11, color: colors.muted, marginTop: 10 }}>
            Reduce risk
          </div>
          <ul style={{ marginTop: 6, paddingLeft: 18, color: colors.text, fontSize: 11 }}>
            <li>Tighten execution scope where friction is too low</li>
            <li>Raise signal confidence before ALLOW in volatile contexts</li>
          </ul>
        </div>

        <div style={{ fontSize: 12, color: colors.muted, marginTop: 16 }}>
          Improve revenue by adjusting governance — not by increasing activity.
        </div>
    </ConsoleFrame>
  );
}
