import { Hero } from "./sections/Hero";
import { MandateEngine } from "./sections/MandateEngine";
import { WaitConsole } from "./sections/WaitConsole";
import { DecisionSection } from "./sections/DecisionSection";
import { AllowConsole } from "./sections/AllowConsole";
import { GovernanceSection } from "./sections/GovernanceSection";
import { FrictionConsole } from "./sections/FrictionConsole";
import { Plans } from "./sections/Plans";
import { Closing } from "./sections/Closing";

export default function App() {
  return (
    <>
      <Hero />
      <MandateEngine />

      <section className="row">
        <WaitConsole />
      </section>

      <section className="row">
        <DecisionSection />
        <AllowConsole />
      </section>

      <section className="row">
        <GovernanceSection />
        <FrictionConsole />
      </section>

      <Plans />
      <Closing />
    </>
  );
}
