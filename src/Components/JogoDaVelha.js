import React, { useState, useEffect } from "react";
import Minha from './Media/minha.jpg';

function JogoDaVelha(){
  const [value, setValue] =
    useState(['','','',
              '','','',
              '','','']);
  //Valor atual do grid do jogo


  const [valuePrev, setValuePrev] =
    useState(['','','',
              '','','',
              '','','']);
  //Valor anterior ou padrão do grid do jogo


  const [turn, setTurn] = useState([0]);
                        //se turn = 0 => turn = "X"
                        //se turn = 1 => turn ="O"
  //Esse useState serve para armazenar o turno atual "X" ou "O"


  const [endGame, setEndGame] = useState(0);
  const [winGame, setWinGame] = useState(0);
  //Esses useState servem para parar
  //condicionalmente alguns nós lógicos
  const [winner, setWinner] = useState('');
  //Esse useState serve para armazenar o vencedor "X" ou "O" ou empate

  const [countTurn, setCountTurn] = useState(0);
  //Esse useState serve para contar o 
  // numero de rodadas na partida atual

  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  //Esses useStates servem par armazenar as vitorias de "X" e "O"

  useEffect(() =>{
    handleWinCondition();
    //console.log(winner);

  }, [valuePrev])

  //Trocar o titulo e o favicon
  document.title = "JOGO DA VELHA"
  document.getElementsByTagName("link")[0].href = Minha;
  
  const reset = () => {
        setValue([ '','','',
                   '','','',
                   '','','']);  
        setWinner("");
        setWinGame(0);
        setCountTurn(0);
        setEndGame(0);
        document.body.style.backgroundColor = "white";
        
  }
  const handleWinCondition = () => {
    /* 
      Sabemos que value tem três possibilidades de valor,
      '', "X" e "O",
      Como podemos checar cada valor de value?
      Usando switch Case,
      Ou
      If statements
                   '0','1','2',
                   '3','4','5',
                   '6','7','8'
    */
    
    // WINS DO "X"!!!
               
    //Win Colunas "X"
    if(value[0] == "X" && value[3] == "X" && value[6] == "X"){
      console.log("CHEGUE1");
      setWinner("X VENCEU!!!");
      setXWins(xWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(59, 100%, 48%, 0.753)"
      const myTimeout = setTimeout((reset), 2000);
    }else if(value[1] == "X" && value[4] == "X" && value[7] == "X"){
      //console.log("CHEGUE");
      setWinner("X VENCEU!!!");
      setXWins(xWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(59, 100%, 48%, 0.753)"
      const myTimeout = setTimeout((reset), 2000);
    }else if(value[2] == "X" && value[5] == "X" && value[8] == "X"){
      //console.log("CHEGUE");
      setWinner("X VENCEU!!!");
      setXWins(xWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(59, 100%, 48%, 0.753)"
      const myTimeout = setTimeout((reset), 2000);
    }

    //Win Linhas "X"
    else if(value[0] == "X" && value[1] == "X" && value[2] == "X"){
      //console.log("CHEGUE");
      setWinner("X VENCEU!!!");
      setXWins(xWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(59, 100%, 48%, 0.753)"
      const myTimeout = setTimeout((reset), 2000);
    }else if(value[3] == "X" && value[4] == "X" && value[5] == "X"){
      //console.log("CHEGUE");
      setWinner("X VENCEU!!!");
      setXWins(xWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(59, 100%, 48%, 0.753)"
      const myTimeout = setTimeout((reset), 2000);
    }else if(value[6] == "X" && value[7] == "X" && value[8] == "X"){
      //console.log("CHEGUE");
      setWinner("X VENCEU!!!");
      setXWins(xWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(59, 100%, 48%, 0.753)"
      const myTimeout = setTimeout((reset), 2000);
    }

    //Win Diagonais "X"
    else if(value[0] == "X" && value[4] == "X" && value[8] == "X"){
      //console.log("CHEGUE");
      setWinner("X VENCEU!!!");
      setXWins(xWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(59, 100%, 48%, 0.753)"
      const myTimeout = setTimeout((reset), 2000);
    }else if(value[6] == "X" && value[4] == "X" && value[2] == "X"){
      //console.log("CHEGUE");
      setWinner("X VENCEU!!!");
      setXWins(xWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(59, 100%, 48%, 0.753)"
      const myTimeout = setTimeout((reset), 2000);
    }


    // WINS DO "O"!!!
                   
    //Win Colunas "O"
    if(value[0] == "O" && value[3] == "O" && value[6] == "O"){
      //console.log("CHEGUE");
      setWinner("O VENCEU!!!");
      setOWins(oWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(172, 95%, 45%, 0.699)"
      const myTimeout = setTimeout((reset), 2000);
      
    }else if(value[1] == "O" && value[4] == "O" && value[7] == "O"){
      //console.log("CHEGUE");
      setWinner("O VENCEU!!!");
      setOWins(oWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(172, 95%, 45%, 0.699)"
      const myTimeout = setTimeout((reset), 2000);
    }else if(value[2] == "O" && value[5] == "O" && value[8] == "O"){
      //console.log("CHEGUE");
      setWinner("O VENCEU!!!");
      setOWins(oWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(172, 95%, 45%, 0.699)"
      const myTimeout = setTimeout((reset), 2000);
    }

    //Win Linhas "O"
    else if(value[0] == "O" && value[1] == "O" && value[2] == "O"){
      //console.log("CHEGUE");
      setWinner("O VENCEU!!!");
      setOWins(oWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(172, 95%, 45%, 0.699)"
      const myTimeout = setTimeout((reset), 2000);
    }else if(value[3] == "O" && value[4] == "O" && value[5] == "O"){
      //console.log("CHEGUE");
      setWinner("O VENCEU!!!");
      setOWins(oWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(172, 95%, 45%, 0.699)"
      const myTimeout = setTimeout((reset), 2000);
    }else if(value[6] == "O" && value[7] == "O" && value[8] == "O"){
      //console.log("CHEGUE");
      setWinner("O VENCEU!!!");
      setOWins(oWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(172, 95%, 45%, 0.699)"
      const myTimeout = setTimeout((reset), 2000);
    }

    //Win Diagonais "O"
    else if(value[0] == "O" && value[4] == "O" && value[8] == "O"){
      //console.log("CHEGUE");
      setWinner("O VENCEU!!!");
      setOWins(oWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(172, 95%, 45%, 0.699)"
      const myTimeout = setTimeout((reset), 2000);
    }else if(value[6] == "O" && value[4] == "O" && value[2] == "O"){
      //console.log("CHEGUE");
      setWinner("O VENCEU!!!");
      setOWins(oWins + 1);
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(172, 95%, 45%, 0.699)"
      const myTimeout = setTimeout((reset), 2000);
    }

    //Stalemate ou velha
    else if(countTurn == 9){
      //console.log("StaleMate");
      setWinner("DEU VELHA!!!");
      setWinGame(true);
      setEndGame(true);
      document.body.style.backgroundColor = "hsla(0, 0%, 27%, 0.534)" ;
      const myTimeout = setTimeout((reset), 2000);
    }


  }

  const handleTurn = () => { 
      return turn ? "O":"X";
    
  } 
  const getValue = (index) => {
    const got = index.target.id;
    const turns = handleTurn();
    if(!endGame){
    if(value[got] == ""){
      setTurn(!turn);
      setCountTurn(countTurn + 1);
      setValuePrev([...valuePrev, value[got] = turns ])
      //console.log("true")

    }else if(value[got] != ""){
    //console.log("false");

  }}
    //console.log(value);
    //console.log([got, turns, value[got]]);

  }
  

  return(
    <>
      <div className="game-win-container" style={winGame ? {visibility: "visible"}:{visibility: "hidden"}}>
        <h1 className="text-win">{winner}!</h1>
      </div>
      <div className="outer-game-container">
        
      <div className="game-container">
        {value.map((values, index) =>
          <span key={index} id={index}  value={value[index]} onClick={(index) => getValue(index)}>
            {values}
            
          </span>
        )}
        <p className="text" value={handleTurn()}>Turno: "{handleTurn()}"</p>
        
        <button 
          onClick={reset}
          className="reset-button">
          Reiniciar jogo
          </button>
          
      </div>
      </div>
       <div className="stat-container">
      <p className="text-stat" value="X" >X ganhou {xWins} vezes</p>
        <p className="text-stat" value="O">O ganhou {oWins} vezes</p>
      </div>
      
    </>
  )
  
}

export default JogoDaVelha;