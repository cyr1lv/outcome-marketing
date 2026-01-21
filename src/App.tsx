import Hero from "./sections/Hero";
import DecisionWait from "./sections/DecisionWait";
import DecisionAllow from "./sections/DecisionAllow";
import FrictionIndex from "./sections/FrictionIndex";
import Governance from "./sections/Governance";
import Plans from "./sections/Plans";
import NativeOutcome from "./sections/NativeOutcome";
import Closing from "./sections/Closing";

export default function App() {
  return (
    <>
      <Hero />
      <DecisionWait />
      <DecisionAllow />
      <FrictionIndex />
      <Governance />
      <Plans />
      <NativeOutcome />
      <Closing />
    </>
  );
}
