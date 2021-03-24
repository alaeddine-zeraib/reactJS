import Checkbox from "./componetns/Checkbox";
import GithubApi from "./componetns/GithubApi";
import Lake from "./componetns/Lake";
import LakeObjects from "./componetns/LakeObjects";
import ReactTesting from "./componetns/ReactTesting";
import Skiresort from "./componetns/Skiresort";
import Status from "./componetns/Status";
import UseEffect from "./componetns/UseEffect";
import UseReducer from "./componetns/UseReducer";
import Welcome from "./componetns/Welcome";
import {Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Whoops404, Services, History, Location } from "./componetns/Pages";

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
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />}>
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/location" element={<Location />} />
        </Route>
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Whoops404 />} />
      </Routes>

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

      <UseEffect />

      <UseReducer />

      <GithubApi login="alaeddine-zeraib"/>

      <ReactTesting />
    </div>
  );
}

export default App;
