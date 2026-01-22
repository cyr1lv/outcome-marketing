import { useState } from "react";
import { heading, paragraph, plansGrid, textBlock } from "../styles";

export function Plans() {
  const [isHover, setIsHover] = useState(false);
  return (
    <section style={{ width: "100%" }}>
      <div style={textBlock}>
        <h2 style={heading}>Plans</h2>
      </div>

      <div style={{ ...plansGrid, marginTop: 16 }}>
        <div>
          <h3 style={heading}>Start Up</h3>
          <p style={paragraph}>
            Controlled outcome within strict boundaries.
            Mandate decides whether AI is allowed to act.
            The Max Outcome Engine determines when.
            Limited volume per channel.
            Fully compliant, minimal risk accumulation.
            1 Policy Pack included
          </p>
        </div>

        <div>
          <h3 style={heading}>Growth</h3>
          <p style={paragraph}>
            Start Up +
            Better timing and ordering for higher outcome.
            More context, broader limits.
            More volume per channel.
            Extended auditability and insight.
            Basic governance reporting.
            3 Policy Packs included
          </p>
        </div>

        <div>
          <h3 style={heading}>Enterprise</h3>
          <p style={paragraph}>
            Growth+
            Maximum outcome with demonstrable accountability.
            Unlimited volume per channel.
            Value Surface integrated into your own software.
            Autonomy where permitted, blocking where required.
            Full governance, assurance, and reporting.
            Board- and regulator-ready
          </p>
        </div>
      </div>

      <div style={{ marginTop: 25 }}>
        <a
          href="https://calendly.com/cyrilvink/outcome-meeting"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={{
            padding: "10px 18px",
            borderRadius: 8,
            border: "1px solid #9A8463",
            background: "transparent",
            color: "#E6E2DA",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: isHover ? "0 0 12px rgba(154,132,99,0.35)" : "none",
            filter: isHover ? "brightness(1.08)" : "none",
            transition: "box-shadow 160ms ease, filter 160ms ease",
            display: "inline-block",
            textDecoration: "none",
          }}
        >
          Contact Sales
        </a>
      </div>
    </section>
  );
}
