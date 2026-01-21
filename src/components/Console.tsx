import type React from "react";
import { colors, consoleEdge, consoleFace, consoleOffset, consoleShell } from "../styles";

type ConsoleFrameProps = {
  children: React.ReactNode;
  offsetTop?: number;
  style?: React.CSSProperties;
};

export function ConsoleFrame({ children, offsetTop, style }: ConsoleFrameProps) {
  return (
    <div
      style={{
        ...consoleShell,
        ...consoleOffset,
        ...(offsetTop !== undefined ? { marginTop: offsetTop } : {}),
        ...style,
      }}
    >
      <div style={consoleEdge} />
      <div style={consoleFace}>{children}</div>
    </div>
  );
}

type ConsoleLabelProps = {
  children: React.ReactNode;
};

export function ConsoleLabel({ children }: ConsoleLabelProps) {
  return (
    <div style={{ fontSize: 12, color: colors.muted, letterSpacing: "0.08em" }}>
      {children}
    </div>
  );
}
