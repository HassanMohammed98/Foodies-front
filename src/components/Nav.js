import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary sticky-top" id="sideNav">
      <div className="nav-logo-title">
        <NavLink className="test" to="/">
          Foodies
        </NavLink>
      </div>
      <div className="nav-open">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/categories">
              Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/recipes">
              Recipes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/ingredients">
              Ingredients
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/favorites">
              Favorites
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link js-scroll-trigger" to="/wishlist">
              Wishlist
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
