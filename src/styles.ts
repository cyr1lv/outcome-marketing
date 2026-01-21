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
  block: "#8F3A3A",
};

export const page: React.CSSProperties = {
  backgroundColor: colors.bg,
  color: colors.text,
  fontFamily: "system-ui, -apple-system, sans-serif",
  minHeight: "100vh",
};

export const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "8px 60px 32px 140px",
  display: "flex",
  flexDirection: "column",
  gap: 20,
};

export const row: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(420px, 520px)",
  gap: 10,
  alignItems: "start",
};

export const textBlock: React.CSSProperties = {
  maxWidth: 720,
  display: "grid",
  gap: 4,
};

export const heading: React.CSSProperties = {
  margin: 0,
  color: "#9A8463",
};

export const subheading: React.CSSProperties = {
  margin: "2px 0 0",
};

export const paragraph: React.CSSProperties = {
  margin: 0,
};

export const plansGrid: React.CSSProperties = {
  display: "grid",
  gap: 8,
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
};

export const metalPanel: React.CSSProperties = {
  background: `linear-gradient(180deg, ${colors.metalTop}, ${colors.metalBottom})`,
  border: `1px solid ${colors.border}`,
  borderRadius: 8,
  boxShadow: "0 24px 40px rgba(0,0,0,.45)",
  padding: 24,
};

export const consoleEdge: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  transform: "translate(10px, 10px)",
  background: "#050506",
  border: `1px solid ${colors.border}`,
  borderRadius: 8,
  zIndex: 0,
};

export const consoleShell: React.CSSProperties = {
  position: "relative",
  display: "block",
  width: 420,
  justifySelf: "end",
  alignSelf: "start",
};

export const consoleFace: React.CSSProperties = {
  ...metalPanel,
  position: "relative",
  zIndex: 1,
  width: 420,
  minHeight: 280,
  boxSizing: "border-box",
};

export const tilt = (deg: number): React.CSSProperties => ({
  transform: `rotate(${deg}deg)`,
});

export const consoleOffset: React.CSSProperties = {
  marginTop: 64,
};
