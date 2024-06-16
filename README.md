# 🎮 Crazy Button

## 🟢 Status: Finalizado 📅 Publicado: 16/06/2024 🧍‍♂️ Programador: muuhlirø

####  O quanto esse projeto foi desafiador pra mim não esta escrito, teve muito estudo, aprendizado e dedicação. Esse Mini-Game foi feito como processo seletivo para uma empresa da qual eu admiro muito e fez parte da minha vida por 2 anos, uma empresa que possuo carinho enorme. 

## Confira como o site ficou!

---

# 👨‍💻 Componente App.js
#### Este é o componente principal da aplicação.


#### Confira como ele foi feito abaixo: 

```jsx
import './App.css'

const App = () => {
  return (
    <main>
      <></>
    </main>
  )
}

export default App


```

#### Pela primeira vez entregando um App.js "vazio" da qual eu não achava que era possivel. 

---


# 👨‍💻 Componente main.jsx
#### O componente main foi apresentado pra mim nesse projeto por conta de uma tecnologia que sempre tive dificuldade de aplicar React Router.

#### Confira como ele foi feito abaixo: 

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from './routes/inicio.jsx';
import Dificuldade from './routes/dificuldade.jsx';
import Facil from './routes/facil.jsx';
import Medio from './routes/medio.jsx';
import Hard from './routes/hard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />
  },
  {
    path: "/dificuldade",
    element: <Dificuldade />
  },
  {
    path: "/facil",
    element: <Facil />
  },
  {
    path: "/medio",
    element: <Medio />
  },
  {
    path: "/hard",
    element: <Hard />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

```

#### Antes quando tentava utilizar essa tecnologia nunca dava certo eu tinha todo site montado e estilizado mas faltava a navegação e só Deus sabe quantos sites eu não desisti de fazer por conta dessa tecnologia que nunca pegava comigo mas pra esse projeto precisei estuda-la a fundo, lendo sua documentação descobri que precisa iniciar nossa aplicação utilizando Vite que é  uma ferramenta de construção de projetos de frontend que se destina a oferecer uma experiência de desenvolvimento mais rápida e leve para projetos de web modernos. Desta forma consegui aplicar o React Router sem problemas e de uma maneira fácil de entender. 


---


# 👨‍💻 Componente Inicio 
#### Esse componente representa a primeira tela da aplicação onde o usuário tem um botão e o letreiro com o nome do jogo.
![image](https://media.discordapp.net/attachments/1251983320854695947/1251983409052520548/image.png?ex=66708fe9&is=666f3e69&hm=42319da46981ac639e827e8735c3553a5f2aefd5e1c60d5310bbf727a7eb34d1&=&format=webp&quality=lossless&width=810&height=425)


#### Confira como ele foi feito abaixo: 

```jsx
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

```



# 👨‍💻 Componente Dificuldade
#### Após o usuário clicar no botão o mesmo vai leva-lo para a aba de dificuldade onde ele vai poder escolher a dificuldade das teclas.
![image](https://media.discordapp.net/attachments/1251983320854695947/1251983603555111043/image.png?ex=66709017&is=666f3e97&hm=ab37375d15fa8694a247229a36f6a87cb2d0eb9a162259f298b2402fa2475540&=&format=webp&quality=lossless&width=810&height=123)


#### Confira como ele foi feito abaixo: 

```jsx
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
```



# 🏆 Dificuldade Proporcionadas
#### Como pode ver na última imagem o usuário tem a possibilidade de escolher três dificuldades sendo elas:
---
### 🥉 Fácil:
#### Quando o jogador escolhe a opção o modo fácil as únicas letras que aparecem para ele apertar são: "WASD" em ordens totalmente aleatória.
![image](https://media.discordapp.net/attachments/1251983320854695947/1251984587496624168/image.png?ex=66709102&is=666f3f82&hm=5aea2ec8baf1d04934f8f2bbf6ac62ca4a858c4b4965270c2232fe48d6a5de79&=&format=webp&quality=lossless&width=810&height=106)

### 🥈 Médio:
#### Quando o jogador escolhe a opção de dificuldade média adicionamos números para tornar o game mais desafiador sendo assim as teclas que apareceram para apertar são: "AWSD123" em ordens totalmente aleatória.
![image](https://media.discordapp.net/attachments/1251983320854695947/1251985015823142982/image.png?ex=66709168&is=666f3fe8&hm=6f9fcf36e6016add3cd6aedb0be51f090761f29869a5227d1534c7442f2edde4&=&format=webp&quality=lossless&width=810&height=48)

### 🥇 Difícil:
#### Quando o jogador resolve se aventurar no modo mais difícil que o Mini-Game oferece adicionamos todas as letras do alfabeto mais todos os numeros de 0 a 9 sendo assim as letras e números que aparecem são: "ABCDEFGHIJKLMNOPQRSTUVWYZ0123456789" em ordem totalmente aleatória.
![image](https://media.discordapp.net/attachments/1251983320854695947/1251985119787487242/image.png?ex=66709181&is=666f4001&hm=0079fa07b058da078c1efd27ac857550d749a38491a592c344738f7cc4633653&=&format=webp&quality=lossless&width=810&height=51))


####Confira como foi feito abaixo:

```jsx
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


```
#### Em cima apenas o código do componente onde esta armazenado a dificuldade Hard pois oque muda é o nome do componente e sua váriavel que recebe os valores das letras. Futuramente podemos fazer uma alteração no código e colocar Programação Orientada a Objeto para poder melhorar a otimização do mesmo. 

# 👨‍💻 Interação com o Usuário
#### Existem algumas interações visuais e auditivas com o usuário durante o game sendo a cada tecla presionada muda a cor indicando que a tecla pressionada foi a correta ou a incorreta. 
![image](https://media.discordapp.net/attachments/1251983320854695947/1251984673333186731/image.png?ex=66709116&is=666f3f96&hm=610b7c037e78cffe645058d725308e5e774bcc2648fa6e616e2abb65b07b21c0&=&format=webp&quality=lossless&width=810&height=90)
#### Já de interação auditiva foi adicionado sons caso o usuário erre a tecla pressionada, o tempo límite acabe ou a cada tecla certa que o usuário pressiona. 

#### Confira abaixo como foi feito:



```jsx
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
```

---

# 🕗 Temporizador
#### Existe um tempo límite para o usuário completar o desáfio de 30 segundos após apertar o botão de iniciar. 
![image](https://media.discordapp.net/attachments/1251983320854695947/1251984587496624168/image.png?ex=66709102&is=666f3f82&hm=5aea2ec8baf1d04934f8f2bbf6ac62ca4a858c4b4965270c2232fe48d6a5de79&=&format=webp&quality=lossless&width=810&height=106)



---

# Acesse o site e jogue agora! 

https://pastelzinhoo.github.io/CrazyButton/





