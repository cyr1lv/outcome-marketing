import { ConsoleFrame, ConsoleLabel } from "../components/Console";
import { colors } from "../styles";

export function WaitConsole() {
  return (
    <ConsoleFrame>
      <ConsoleLabel>Decision — WAIT</ConsoleLabel>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>Status</ConsoleLabel>
          <div
            style={{
              fontSize: "clamp(22px, 3.2vw, 28px)",
              fontWeight: 700,
              color: colors.wait,
              marginTop: 4,
            }}
          >
            WAIT
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>Reason</ConsoleLabel>
          <div style={{ color: colors.text, fontSize: "clamp(12px, 1.8vw, 13px)", marginTop: 4 }}>
            Context incomplete
            <br />
            Risk window detected
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>Signal state</ConsoleLabel>
          <ul
            style={{
              marginTop: 6,
              paddingLeft: 18,
              color: colors.text,
              fontSize: "clamp(11px, 1.6vw, 12px)",
            }}
          >
            <li>Intent present</li>
            <li>Timing uncertain</li>
            <li>Risk elevated</li>
          </ul>
        </div>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>System</ConsoleLabel>
          <div style={{ color: colors.text, fontSize: "clamp(11px, 1.6vw, 12px)", marginTop: 4 }}>
            Execution deferred
            <br />
            No action allowed
          </div>
        </div>
    </ConsoleFrame>
  );
}
