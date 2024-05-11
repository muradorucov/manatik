import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav-bar">
      <div className="d-flex justify-content-between align-items-center">
        <div className="col-xl-3 col-lg-3">
          <h2 className="logo">Manatik</h2>
        </div>
        <div className="col-xl-6 col-lg-6">
          <ul className="menu">
            <li>
              <NavLink to="home" className="menu-items">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="products" className="menu-items">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="users" className="menu-items">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to="comments" className="menu-items">
                Comments
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-xl-3"></div>
      </div>
    </div>
  );
}

export default Navbar;
