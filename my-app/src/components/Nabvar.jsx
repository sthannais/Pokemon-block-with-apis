import React from "react";
import img from "../img/International_Pokémon_logo.svg.png";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <div className="navbar-brand" to="/">
          <img className="pokeLogo ms-5" alt="" src={img} />
        </div>
        <div className="dropdown me-5">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
