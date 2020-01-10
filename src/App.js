import React, { Component } from "react";
import Navigation from "./components/Navigation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <div className="test">
          <h1>Hi very~</h1>
        </div>
      </div>
    );
  }
}

export default App;
