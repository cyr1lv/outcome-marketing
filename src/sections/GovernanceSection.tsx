import { heading, paragraph, textBlock } from "../styles";

export function GovernanceSection() {
  return (
    <div style={textBlock}>
      <h2 style={heading}>Friction Index</h2>
      <p style={paragraph}>
        The Friction Index measures the misalignment between intent, timing, and
        governance. It advises how much friction is required to balance risk and outcome
        before execution.
      </p>
      <p style={paragraph}>
        <strong>Max Outcome = decisions × probability × value × timing − risk</strong>
      </p>
    </div>
  );
}
