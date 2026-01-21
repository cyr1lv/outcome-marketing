import { Hero } from "./sections/Hero";
import { MandateEngine } from "./sections/MandateEngine";
import { WaitConsole } from "./sections/WaitConsole";
import { DecisionSection } from "./sections/DecisionSection";
import { AllowConsole } from "./sections/AllowConsole";
import { GovernanceSection } from "./sections/GovernanceSection";
import { FrictionConsole } from "./sections/FrictionConsole";
import { Governance } from "./sections/Governance";
import { Plans } from "./sections/Plans";
import { NativeOutcome } from "./sections/NativeOutcome";
import { DeveloperDocs } from "./sections/DeveloperDocs";
import { Closing } from "./sections/Closing";
import { page, container, row } from "./styles";

export default function App() {
  return (
    <main style={page}>
      <div
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          border: "3px solid #9A8463",
          borderRadius: 0,
          padding: 8,
          zIndex: 2,
          background: "transparent",
        }}
      >
        <div
          role="img"
          aria-label="Outcome Infrastructure logo"
          style={{
            width: 95,
            height: 95,
            backgroundColor: "#9A8463",
            WebkitMaskImage: "url(/logo.png)",
            maskImage: "url(/logo.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          display: "flex",
          gap: 12,
          padding: "6px 10px",
          border: "1px solid #2A2A2E",
          borderRadius: 999,
          background: "rgba(11, 11, 12, 0.85)",
          fontSize: 12,
          letterSpacing: "0.08em",
          zIndex: 2,
        }}
      >
        <a
          href="/docs"
          style={{
            color: "#E6E2DA",
            textDecoration: "none",
            borderBottom: "1px solid transparent",
          }}
          onMouseEnter={(event) => (event.currentTarget.style.borderBottomColor = "#9A8463")}
          onMouseLeave={(event) => (event.currentTarget.style.borderBottomColor = "transparent")}
        >
          Developer Docs
        </a>
        <a
          href="/partner"
          style={{
            color: "#E6E2DA",
            textDecoration: "none",
            borderBottom: "1px solid transparent",
          }}
          onMouseEnter={(event) => (event.currentTarget.style.borderBottomColor = "#9A8463")}
          onMouseLeave={(event) => (event.currentTarget.style.borderBottomColor = "transparent")}
        >
          Partner
        </a>
      </div>
      <div style={container}>
        <section style={row}>
          <Hero />
          <WaitConsole />
        </section>

        <MandateEngine />

        <section style={row}>
          <DecisionSection />
          <AllowConsole />
        </section>

        <section style={row}>
          <GovernanceSection />
          <FrictionConsole />
        </section>

        <Governance />
        <Plans />
        <NativeOutcome />
        <DeveloperDocs />
        <Closing />
      </div>
    </main>
  );
}
