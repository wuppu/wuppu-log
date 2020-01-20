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
      text: "Home",
      path: "/",
      component: Home
    },
    {
      text: "About",
      path: "/about",
      component: About
    },
    {
      text: "Project",
      path: "/project",
      component: Project
    },
    {
      text: "Algorithm",
      path: "/algorithm",
      component: Algorithm
    },
    {
      text: "Hobby",
      path: "/hobby",
      component: Hobby
    }
  ];

  render() {
    return (
      <div className="container">
        <HashRouter>
          <Navigation navLinks={this.navLinks} />
          <main>
            {this.navLinks.map((route, index) => (
              <Route
                path={route.path}
                exact={true}
                component={route.component}
              />
            ))}
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
