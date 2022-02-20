import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../logo.png";
import favIcon from "../../fav.png";
const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav className="nav-class sticky-top">
      <NavLink className="navLink" to="/">
        <img className="logo" src={logo} />
      </NavLink>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="navlist">
          <li className="navitems">
            <NavLink className="navLink" to="/categories">
              Categories
            </NavLink>
          </li>
          <li className="navitems">
            <NavLink className="navLink" to="/recipes">
              recipes
            </NavLink>
          </li>
          <li className="navitems">
            <NavLink className="navLink" to="/ingredients">
              Ingredients
            </NavLink>
          </li>
        </ul>
      )}
      <div>
        <NavLink className="navLink" to="/favorites">
          <img className="fav" src={favIcon} />
        </NavLink>
        <button onClick={toggleNav} className="navbtn">
          ----
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
