import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What's for dinner?</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            {" "}
            Use this app to help you find a recipe for dinner based on available
            ingredients!
          </p>
        </a>
      </header>
    </div>
  );
}

export default App;
