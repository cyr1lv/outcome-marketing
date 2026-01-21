import type React from "react";

export const colors = {
  bg: "#0B0B0C",
  metalTop: "#1A1A1C",
  metalBottom: "#0E0E10",
  border: "#2A2A2E",
  text: "#EDEDED",
  muted: "#9A9A9A",
  wait: "#C9A24D",
  allow: "#4FA37C",
};

export const metalPanel: React.CSSProperties = {
  background: `linear-gradient(180deg, ${colors.metalTop}, ${colors.metalBottom})`,
  border: `1px solid ${colors.border}`,
  borderRadius: 8, // licht afgerond (machinaal)
  boxShadow: "0 24px 40px rgba(0,0,0,.45)",
  padding: 24,
};

export const tilt = (deg: number): React.CSSProperties => ({
  transform: `rotate(${deg}deg)`,
});
