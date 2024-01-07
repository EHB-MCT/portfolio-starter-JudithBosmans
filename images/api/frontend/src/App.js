import React from "react";
import DragonComponent from "./components/DragonComponent";
import Request from "./components/Requests";
import "./App.css";

function App() {
  return (
    <div className="flex-container">
      <DragonComponent />
      <Request />
    </div>
  );
}

export default App;
