import { paragraph } from "../styles";

export function Closing() {
  return (
    <section style={{ width: "100%" }}>
      <p
        style={{
          ...paragraph,
          marginTop: 25,
          textAlign: "center",
          width: "100vw",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Outcome Infrastructure - De Lairessestraat 130 - 1075 HL Amsterdam - The Netherlands
        - sales@outcomeinfrastructure.com
      </p>
    </section>
  );
}
