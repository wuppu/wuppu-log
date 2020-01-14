import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Algorithm from "./routes/Algorithm";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Hobby from "./routes/Hobby";
import Navigation from "./components/navigation/Navigation";
import "./App.css";

class App extends Component {
  navLinks = [
    {
      text: "HOME",
      path: "/"
    },
    {
      text: "ABOUT",
      path: "/about"
    },
    {
      text: "PROJECT",
      path: "/project"
    },
    {
      text: "ALGORITHM",
      path: "/algorithm"
    },
    {
      text: "HOBBY",
      path: "/hobby"
    }
  ];

  render() {
    return (
      <div className="container">
        <HashRouter>
          <Navigation navLinks={this.navLinks} />
          <main>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/algorithm" component={Algorithm} />
            <Route path="/project" component={Project} />
            <Route path="/hobby" component={Hobby} />
          </main>
        </HashRouter>

        <footer>
          <h1>copyright&#169; wuppu</h1>
        </footer>
      </div>
    );
  }
}

export default App;
