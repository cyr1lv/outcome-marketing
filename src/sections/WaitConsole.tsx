import { ConsoleFrame, ConsoleLabel } from "../components/Console";
import { colors } from "../styles";

export function WaitConsole() {
  return (
    <ConsoleFrame offsetTop={196}>
      <ConsoleLabel>Decision — WAIT</ConsoleLabel>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>Status</ConsoleLabel>
          <div style={{ fontSize: 28, fontWeight: 700, color: colors.wait, marginTop: 4 }}>
            WAIT
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>Reason</ConsoleLabel>
          <div style={{ color: colors.text, fontSize: 13, marginTop: 4 }}>
            Context incomplete
            <br />
            Risk window detected
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>Signal state</ConsoleLabel>
          <ul style={{ marginTop: 6, paddingLeft: 18, color: colors.text, fontSize: 12 }}>
            <li>Intent present</li>
            <li>Timing uncertain</li>
            <li>Risk elevated</li>
          </ul>
        </div>

        <div style={{ marginTop: 16 }}>
          <ConsoleLabel>System</ConsoleLabel>
          <div style={{ color: colors.text, fontSize: 12, marginTop: 4 }}>
            Execution deferred
            <br />
            No action allowed
          </div>
        </div>
    </ConsoleFrame>
  );
}
