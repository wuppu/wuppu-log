import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ navLinks }) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header>
      <nav className="nav__main">
        <h1 className="nav__logo">Wuppu Log</h1>
        <div className="nav__links_container">
          <ul className={navOpen ? "nav__links active" : "nav__links"}>
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <li
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(-1)}
                  className={hoverIndex === index ? "li__hover" : ""}
                >
                  {link.text}
                </li>
              </Link>
            ))}
          </ul>
          <div className={navOpen ? "toggle burger" : "burger"} onClick={() => setNavOpen(!navOpen)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
