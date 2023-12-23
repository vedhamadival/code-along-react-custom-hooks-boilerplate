import React from "react";
import './App.css';
import useStorage from "./UseStorage";

function App() {
  const [localName, setLocalName] = useStorage("localName", "");
  const [sessionName, setSessionName] = useStorage("sessionName", "", sessionStorage);

  return (
    <>
      <div>
        <label>Local Storage:</label>
        <input
          type="text"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />
      </div>
      <div>
        <label>Session Storage:</label>
        <input
          type="text"
          value={sessionName}
          onChange={(e) => setSessionName(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;