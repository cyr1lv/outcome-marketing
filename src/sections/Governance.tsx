import { heading, paragraph, textBlock } from "../styles";

export function Governance() {
  return (
    <section style={{ ...textBlock, marginTop: -300 }}>
      <h2 style={heading}>How Outcome is governed</h2>
      <p style={paragraph}>
        We combine Mandate, enforceable policy packs, the Max Outcome Decision Engine,
        and the Value Surface to achieve maximum outcome within explicit boundaries.
      </p>
      <p style={paragraph}>
        Policy packs define how AI is allowed to operate. Examples include Baseline AI,
        Enterprise AI to Contact (B2B/B2C), Autonomous, Regulated, and Experimental AI.
      </p>
      <p style={paragraph}>
        Autonomous AI without governance is already restricted worldwide and becoming
        increasingly regulated. Mandate ensures AI acts only within law, policy, and
        responsibility — by design, not by exception.
      </p>
    </section>
  );
}
