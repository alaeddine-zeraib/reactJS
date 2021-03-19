import Checkbox from "./componetns/Checkbox";
import Lake from "./componetns/Lake";
import LakeObjects from "./componetns/LakeObjects";
import Skiresort from "./componetns/Skiresort";
import Status from "./componetns/Status";
import Welcome from "./componetns/Welcome";

const lakesList = [
  "Echo Lake",
  "Maud Lake",
  "Cascade Lake"
];

const lakeObjects = [
  {id: "1", name: "Echo", trailhead: "Echo"},
  {id: "2", name: "Maud", trailhead: "Wrights"},
  {id: "3", name: "Velma", trailhead: "Bayview"}
];

const list = [1, 2, 3]
function App() {
  return (
    <div className="App">
      <Welcome 
        library="React" 
        message="Have fun"
        number={3}
      ></Welcome>
      <Lake lakes={lakesList} items={list} />
      <LakeObjects lakes={lakeObjects} />

      <Skiresort season="summer" />

      <Status />

      <Checkbox />
    </div>
  );
}

export default App;
