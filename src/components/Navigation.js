import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>

        <NavLink
          to="/drift"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Partie Drift</li>
        </NavLink>
        <NavLink to="/wrc"
          className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Partie WRC</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
