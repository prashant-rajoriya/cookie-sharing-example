import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("paare_jwt="))
  ) {
    console.log(
      'The cookie "reader" exists (ES6)',
      document.cookie.replace(
        /(?:(?:^|.*;\s*)paare_jwt\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      )
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
