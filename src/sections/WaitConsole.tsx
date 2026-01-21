import { metalPanel, tilt, colors } from "../styles";

export function WaitConsole() {
  return (
    <div style={{ ...metalPanel, ...tilt(-4) }}>
      <div style={{ fontSize: 12, color: colors.muted }}>Decision</div>
      <div style={{ fontSize: 40, fontWeight: 700, color: colors.wait, margin: "12px 0" }}>
        WAIT
      </div>
      <div style={{ color: colors.muted }}>
        Context incomplete · risk window detected
      </div>
    </div>
  );
}
