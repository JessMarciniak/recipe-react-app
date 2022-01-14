import React from "react";
import RecipeFinder from "./RecipeFinder";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What's for dinner?</h1>
        <p>
          {" "}
          Use this app to help you find a recipe for dinner based on available
          ingredients!
        </p>
        <RecipeFinder />
      </header>
    </div>
  );
}

export default App;
