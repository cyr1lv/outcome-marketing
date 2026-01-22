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
      <header className="site-header">
        <div className="site-logo-frame">
          <div role="img" aria-label="Outcome Infrastructure logo" className="site-logo-mark" />
        </div>
        <nav className="site-nav">
          <a href="/docs">Developer Docs</a>
          <a href="/partner">Partner</a>
        </nav>
      </header>
      <div style={container} className="site-container">
        <Hero />

        <section style={row} className="layout-row">
          <MandateEngine />
          <WaitConsole />
        </section>

        <section style={row} className="layout-row">
          <DecisionSection />
          <AllowConsole />
        </section>

        <section style={row} className="layout-row">
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
