import type React from "react";
import { colors, consoleEdge, consoleFace, consoleOffset, consoleShell } from "../styles";

type ConsoleFrameProps = {
  children: React.ReactNode;
  offsetTop?: number | string;
  style?: React.CSSProperties;
};

export function ConsoleFrame({ children, offsetTop, style }: ConsoleFrameProps) {
  return (
    <div
      className="console-shell"
      style={{
        ...consoleShell,
        ...consoleOffset,
        ...(offsetTop !== undefined ? { marginTop: offsetTop } : {}),
        ...style,
      }}
    >
      <div style={consoleEdge} />
      <div style={consoleFace} className="console-face">
        {children}
      </div>
    </div>
  );
}

type ConsoleLabelProps = {
  children: React.ReactNode;
};

export function ConsoleLabel({ children }: ConsoleLabelProps) {
  return (
    <div style={{ fontSize: "clamp(10px, 1.6vw, 12px)", color: colors.muted, letterSpacing: "0.08em" }}>
      {children}
    </div>
  );
}
