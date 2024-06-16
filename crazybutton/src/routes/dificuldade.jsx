import React from "react";
import "./dificuldade.css"
import { Link } from "react-router-dom";
import { SlArrowLeftCircle } from "react-icons/sl";

const Dificuldade = () => {
    return (
        <div>
            <div className="Icone">
                <Link to="/">
                    <SlArrowLeftCircle />
                </Link>
            </div>
            <div className="Container-botoes">
            <Link to="/facil">
                <button class="botao-dificuldade">Fácil</button>
            </Link>
            <Link to="/medio">
                <button class="botao-dificuldade">Médio</button>    
            </Link>
            <Link to="/hard">
                <button class="botao-dificuldade">Difícil</button>
            </Link>
            </div>
        </div>
    )
}

export default Dificuldade;