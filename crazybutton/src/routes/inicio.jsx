import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./inicio.css";

const Inicio = () => {
  return (
    <div className="Container-Inicio">
      <div>
        <img src={Logo} alt="Letreiro Crazy Button" />
      </div>
      <div>
        <Link to="/dificuldade">
          <button className="botao">
            <span className="back"></span>
            <span className="front"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
