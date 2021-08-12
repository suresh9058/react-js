import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [apiResponse, setApiResponse] = useState("");
  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  }, []);
  return (
    <div className="App">
      <p>{apiResponse}</p>
    </div>
  );
}

export default App;
