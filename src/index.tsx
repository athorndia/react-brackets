export { SingleElimination as Bracket } from "./brackets";
export {
  Seed,
  SeedTeam,
  SeedItem,
  SeedTime,
  SingleLineSeed,
} from "./components/seed";
export type { ISingleEliminationProps } from "./types/SingleElimination";
export type { ISeedProps, IRenderSeedProps } from "./types/Seed";
export type { IRoundProps } from "./types/Rounds";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
