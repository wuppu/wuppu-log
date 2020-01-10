import React, { Component } from "react";

import "./Navigation.css";

function Navigation() {
  return (
    <header>
      <nav className="nav__main">
        <h1>Wuppu Log</h1>
        <ul className="nav__links">
          <li><a href="#">HOME</a></li>
          <li><a href="#">PROJECT</a></li>
          <li><a href="#">ABOUT</a></li>
        </ul>
        <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
