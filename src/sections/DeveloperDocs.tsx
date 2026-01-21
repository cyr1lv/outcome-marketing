import { heading, paragraph, textBlock } from "../styles";

export function DeveloperDocs() {
  return (
    <section style={textBlock}>
      <p style={paragraph}>
        <a href="/docs" style={{ color: "#E6E2DA", textDecoration: "underline" }}>
          Click here for the developer documentation
        </a>
      </p>
    </section>
  );
}
