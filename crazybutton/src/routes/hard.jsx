import React, { useState, useEffect } from "react";
import "./facil.css";
import { Link } from "react-router-dom";
import { SlArrowLeftCircle } from "react-icons/sl";

// Importando os arquivos de áudio
import teclaAudio from './tecla.mp3';
import gameOverAudio from './gameover.mp3';
import erroAudio from './erro.mp3';

const Hard = () => {
  const Letras = "ABCDEFGHIJKLMNOPQRSTUVDYZ0123456789";
  const [sequencia, setSequencia] = useState([]);
  const [inputIndex, setInputIndex] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(30);
  const [gameOver, setGameOver] = useState(true);
  const [score, setScore] = useState(0);
  const [botaoStatus, setBotaoStatus] = useState([]);

  // Funções para tocar os áudios
  const playTeclaAudio = () => {
    new Audio(teclaAudio).play();
  };

  const playGameOverAudio = () => {
    new Audio(gameOverAudio).play();
  };

  const playErroAudio = () => {
    new Audio(erroAudio).play();
  };

  useEffect(() => {
    if (!gameOver) {
      const tempo = setTimeout(() => {
        if (tempoRestante > 0) {
          setTempoRestante(tempoRestante - 1);
        } else {
          setGameOver(true);
          playGameOverAudio(); // Tocar áudio de game over quando o tempo acabar
        }
      }, 1000);

      return () => clearTimeout(tempo);
    }
  }, [tempoRestante, gameOver]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!gameOver) {
        const TeclaPressionada = event.key.toUpperCase();
        BotaoPressionado(TeclaPressionada);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [inputIndex, gameOver, sequencia]);

  const GerarSequencia = () => {
    const NovaSequencia = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * Letras.length);
      NovaSequencia.push(Letras[randomIndex]);
    }
    setSequencia(NovaSequencia);
    setInputIndex(0);
    setBotaoStatus(new Array(5).fill(null));
  };

  const BotaoPressionado = (letra) => {
    if (!gameOver) {
      const novoStatus = [...botaoStatus];
      if (letra === sequencia[inputIndex]) {
        novoStatus[inputIndex] = "correto";
        setBotaoStatus(novoStatus);
        playTeclaAudio(); // Tocar áudio de tecla correta
        if (inputIndex === sequencia.length - 1) {
          setScore(score + 100); // Aumentar a pontuação em 2 pontos por letra certa
          GerarSequencia();
        } else {
          setInputIndex(inputIndex + 1);
        }
      } else {
        novoStatus[inputIndex] = "incorreto";
        setBotaoStatus(novoStatus);
        setGameOver(true);
        playErroAudio(); // Tocar áudio de erro
      }
    }
  };

  const IniciarGame = () => {
    setScore(0);
    setTempoRestante(30);
    GerarSequencia();
    setGameOver(false);
  };

  return (
    <div className="Container-facil">
      <div className="Icone-facil">
        <Link to="/dificuldade">
          <SlArrowLeftCircle />
        </Link>
      </div>
      <div>
        {sequencia.map((letra, index) => (
          <button
            key={index}
            onClick={() => BotaoPressionado(letra)}
            disabled={gameOver}
            className={`letra-botao ${botaoStatus[index]}`}
          >
            {letra}
          </button>
        ))}
      </div>
      <div>
        {!gameOver && <p className="tempo-facil">Tempo Restante: {tempoRestante}</p>}
        {gameOver && (
          <div>
            <button className="botao-facil-play" onClick={IniciarGame}>Iniciar Jogo</button>
          </div>
        )}
        {gameOver && <p className="score-facil">Seu score: {score} &#127775;</p>}
      </div>
    </div>
  );
};

export default Hard;
