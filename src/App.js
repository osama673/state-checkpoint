import "./App.css";
import ClassComponent from "./components/ClassComponent";
import { useState } from "react";
import NavBar from "./components/NavBar"

function App() {
  const [show, setShow] = useState(false);

 
  return (
    <div className="App">
      <NavBar />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

      {show && <ClassComponent />}
    </div>
  );
}

export default App;
