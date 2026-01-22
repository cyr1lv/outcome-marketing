import { paragraph, textBlock } from "../styles";

export function DeveloperDocs() {
  return (
    <section style={textBlock}>
      <p style={paragraph}>
        <a href="/docs" style={{ color: "#E6E2DA", textDecoration: "underline" }}>
          Developer documentation
        </a>
      </p>
    </section>
  );
}
