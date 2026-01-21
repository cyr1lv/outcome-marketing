import { ConsoleFrame, ConsoleLabel } from "../components/Console";
import { colors } from "../styles";

export function AllowConsole() {
  return (
    <ConsoleFrame offsetTop={-106}>
      <ConsoleLabel>Decision — ALLOW</ConsoleLabel>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>Status</ConsoleLabel>
          <div style={{ fontSize: 28, fontWeight: 700, color: colors.allow, marginTop: 4 }}>
            ALLOW
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>Reason</ConsoleLabel>
          <div style={{ color: colors.text, fontSize: 13, marginTop: 4 }}>
            All required signals validated
            <br />
            Risk within bounds
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>Signal state</ConsoleLabel>
          <ul style={{ marginTop: 6, paddingLeft: 18, color: colors.text, fontSize: 12 }}>
            <li>Intent confirmed</li>
            <li>Timing optimal</li>
            <li>Value expected</li>
          </ul>
        </div>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>System</ConsoleLabel>
          <div style={{ color: colors.text, fontSize: 12, marginTop: 4 }}>
            Execution permitted
            <br />
            Within policy limits
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>Actions</ConsoleLabel>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 12, marginTop: 8 }}>
            <button
              style={{
                padding: "10px 18px",
                borderRadius: 8,
                border: `1px solid ${colors.border}`,
                background: colors.allow,
                color: colors.bg,
                fontWeight: 600,
                cursor: "pointer",
              }}
              type="button"
            >
              Proceed
            </button>
            <button
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                border: `1px solid ${colors.border}`,
                background: "transparent",
                color: colors.muted,
                cursor: "pointer",
              }}
              type="button"
            >
              Defer
            </button>
          </div>
        </div>
    </ConsoleFrame>
  );
}
