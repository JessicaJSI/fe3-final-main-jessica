import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import Switch from "@mui/material/Switch";
import "./Navbar.css";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleChange = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <div>
      <div
        className={`container-navbar container-navbar-${
          state.isDark ? "dark" : "light"
        }`}
      >
        <h4>
          <span className="red-text">D</span>
          <span className={state.isDark ? "dark-mode-text" : ""}>H Odonto</span>
        </h4>
        <div className="container-items">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
          >
            Home
          </NavLink>
          <NavLink
            to="/dentistas"
            className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
          >
            Dentists
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? "activeNavbar" : "navbar")}
          >
            Contact
          </NavLink>
          <Link to="/favs">favs</Link>
          <Switch
            checked={state.isDark}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
