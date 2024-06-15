import React from "react";
import "./dificuldade.css"

const Dificuldade = () => {
    return (
        <div>
             <div className="Container-botoes">
                <button className="botao-placa">
                <span>Fácil</span>
                </button>
                <button className="botao-placa">
                <span>Médio</span>
                </button>
                <button className="botao-placa">
                <span>Difícil</span>
                </button>
            </div>
        </div>
    )
}

export default Dificuldade;