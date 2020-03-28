import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg text-light">
      <div className=" container">
        <h1 className="navbar-brand" >Google Books Search</h1>
        <ul className="navbar-nav">
          <li className="navbar-style">
            <Link
              to="/search"
              //using conditional if operator 
              className={window.location.pathname === "/search"
                ? "nav-link active"
                : "nav-link"}
            > Search</Link>
          </li>
          <li className="navbar-style">
            <Link
              to="/saved"
              //using conditional if operator 

              className={window.location.pathname === "/saved"
                ? "nav-link active"
                : "nav-link"}
            >Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
