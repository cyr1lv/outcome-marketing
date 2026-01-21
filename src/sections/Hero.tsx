import { heading, paragraph, subheading, textBlock } from "../styles";

export function Hero() {
  return (
    <section style={{ width: "100%" }}>
      <div
        style={{
          textAlign: "center",
          width: "max-content",
          position: "relative",
          left: "calc(50vw - 100px)",
          transform: "translateX(-50%)",
        }}
      >
        <h1 style={heading}>Outcome Infrastructure</h1>
        <h2 style={subheading}>The Missing Link for AI</h2>
        <div style={{ height: 48 }} />
      </div>

      <div style={{ ...textBlock, maxWidth: 640, margin: "50px auto 0", textAlign: "left" }}>
        <p style={paragraph}>
          Outcome Infrastructure consists of four core components:
          <br />
          Mandate · Max Outcome Decision Engine · Friction Index · Value Surface
        </p>

        <p style={{ ...paragraph, marginTop: 8 }}>
          People and organizations operate within legislation, policy, and responsibility.
          AI agents do not do this by default. AI optimizes for volume unless you
          explicitly define what is allowed — and what is never allowed.
        </p>

        <p style={{ ...paragraph, marginTop: 8 }}>
          AI is entering a regulated era. Frameworks such as the EU AI Act, GDPR, SOC 2,
          and sector-specific regulations now explicitly require control, accountability,
          and auditability.
        </p>

        <p style={paragraph}>
          These regulations require systems to decide responsibly before acting.
        </p>

      </div>
    </section>
  );
}
