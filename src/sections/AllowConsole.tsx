import { metalPanel, tilt, colors } from "../styles";

export function AllowConsole() {
  return (
    <div style={{ ...metalPanel, ...tilt(6) }}>
      <div style={{ fontSize: 12, color: colors.muted }}>Decision</div>
      <div style={{ fontSize: 40, fontWeight: 700, color: colors.allow, margin: "12px 0" }}>
        ALLOW
      </div>
      <div style={{ color: colors.muted, marginBottom: 24 }}>
        All required signals present
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
        <button
          style={{
            padding: "10px 16px",
            borderRadius: 8,
            border: `1px solid ${colors.border}`,
            background: colors.allow,
            color: "#0B0B0C",
            fontWeight: 600,
            cursor: "pointer",
          }}
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
        >
          Defer
        </button>
      </div>
    </div>
  );
}
