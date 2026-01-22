import { heading, paragraph, textBlock } from "../styles";

export function MandateEngine() {
  return (
    <div style={textBlock}>
      <h2 style={heading}>Mandate</h2>
      <p style={paragraph}>
        Mandate translates legislation, policy, and risk into enforceable rules for AI.
        Within those boundaries, we let AI perform at its best. Outside those boundaries,
        we do not allow it to act.
      </p>

      <h2 style={{ ...heading, marginTop: 8 }}>Max Outcome Decision Engine</h2>
      <p style={paragraph}>
        The Max Outcome Decision Engine calculates with high precision how & when AI,
        within the law, should act to achieve the best outcome. This creates a cumulative
        effect of less risk and more value.
      </p>
      <p style={paragraph}>
        <strong>Max Outcome = probability × value × timing − risk</strong>
      </p>
    </div>
  );
}
