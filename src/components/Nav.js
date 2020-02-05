import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="header">
      <div className="container">
        <a href="#0" className="brand">
          Wolt restaurant Finder
        </a>
        <nav>
          <ul>
            <li>
              <NavLink to="/">All Restaurants</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
