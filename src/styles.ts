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
  padding: "16px 24px 64px",
  display: "flex",
  flexDirection: "column",
  gap: 16,
};

export const row: React.CSSProperties = {
  display: "grid",
  alignItems: "start",
};

export const textBlock: React.CSSProperties = {
  maxWidth: 720,
  display: "grid",
  gap: 12,
};

export const heading: React.CSSProperties = {
  margin: 0,
  color: "#9A8463",
  fontSize: 22,
  lineHeight: 1.25,
  fontWeight: 600,
};

export const subheading: React.CSSProperties = {
  margin: "2px 0 0",
  color: colors.muted,
  fontSize: "clamp(12px, 1.4vw, 14px)",
  lineHeight: 1.4,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

export const paragraph: React.CSSProperties = {
  margin: 0,
  fontSize: "clamp(14px, 1.6vw, 15px)",
  lineHeight: 1.6,
};

export const heroHeading: React.CSSProperties = {
  margin: 0,
  color: "#9A8463",
  fontSize: "clamp(28px, 4vw, 40px)",
  lineHeight: 1.05,
  fontWeight: 600,
  letterSpacing: "0.02em",
};

export const plansGrid: React.CSSProperties = {
  display: "grid",
  gap: 16,
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
};

export const metalPanel: React.CSSProperties = {
  background: `linear-gradient(180deg, ${colors.metalTop}, ${colors.metalBottom})`,
  border: `1px solid ${colors.border}`,
  borderRadius: 8,
  boxShadow: "0 24px 40px rgba(0,0,0,.45)",
  padding: 20,
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
  width: "min(360px, 100%)",
  justifySelf: "end",
  alignSelf: "start",
};

export const consoleFace: React.CSSProperties = {
  ...metalPanel,
  position: "relative",
  zIndex: 1,
  width: "min(360px, 100%)",
  minHeight: 240,
  boxSizing: "border-box",
};

export const tilt = (deg: number): React.CSSProperties => ({
  transform: `rotate(${deg}deg)`,
});

export const consoleOffset: React.CSSProperties = {
  marginTop: 0,
};
