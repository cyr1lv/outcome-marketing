import { metalPanel, tilt, colors } from "../styles";

export function FrictionConsole() {
  return (
    <div style={{ ...metalPanel, ...tilt(-3) }}>
      <div style={{ fontSize: 12, color: colors.muted }}>Friction Index</div>

      <div style={{ display: "flex", gap: 16, margin: "16px 0 8px" }}>
        {["ALLOW", "WAIT", "BLOCK"].map((label) => (
          <div
            key={label}
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: `1px solid ${colors.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: colors.muted,
              fontSize: 12,
            }}
          >
            {label}
          </div>
        ))}
      </div>

      <div style={{ color: colors.muted, marginBottom: 8 }}>
        Month-on-Month improvement · 12%+
      </div>

      <div style={{ fontSize: 12, color: colors.muted }}>
        Improve revenue by adjusting governance — not by increasing activity.
      </div>
    </div>
  );
}
