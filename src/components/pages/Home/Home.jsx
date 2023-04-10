import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import "./Home.css";

const Home = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div
      className={`container ${
        state.isDark ? "container-dark" : "container-light"
      }`}
    >
      <h1>Bienvenidos a DH Odonto</h1>
      <h2>Conoce a nuestros dentistas</h2>
      <Link to="dentistas">
        <Button>Ver profesionales</Button>
      </Link>
    </div>
  );
};

export default Home;
