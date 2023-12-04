import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/buttons";
function App() {
  let [display, setDisplay] = useState("");
  return (
    <div className="box">
      <Display display={display} />
      <Buttons display={display} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
