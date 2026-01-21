import Hero from "./sections/Hero";
import DecisionConsole from "./sections/DecisionConsole";
import GovernanceConsole from "./sections/GovernanceConsole";
import ExecutionConsole from "./sections/ExecutionConsole";
import Closing from "./sections/Closing";
import { page } from "./styles";

export default function App() {
  return (
    <div style={page}>
      <Hero />
      <DecisionConsole />
      <GovernanceConsole />
      <ExecutionConsole />
      <Closing />
    </div>
  );
}
