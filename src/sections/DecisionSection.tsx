import { heading, paragraph, textBlock } from "../styles";

export function DecisionSection() {
  return (
    <div style={{ ...textBlock, marginBottom: -16 }}>
      <h2 style={heading}>A new way of working</h2>
      <p style={paragraph}>
        Outcome Infrastructure scales decisions, not actions. Traditional systems scale
        by doing more — until people lose control.
      </p>
      <p style={paragraph}>
        Your Value Surface shows everything you need to decide in under 10 seconds:
        context, risk, friction, and the next allowed step — in one view. A built-in
        copilot reduces cognitive load.
      </p>
      <p style={paragraph}>
        <br />
        You decide.
        <br />
        Mandate enforces.
        <br />
        Agents execute.
      </p>
    </div>
  );
}
