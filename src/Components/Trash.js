import React, { useState } from "react";

  const [value, setValue] =
    useState({row1: ['a','b','c'],
              row2: ['d','e','f'],
              row3: ['g','h','i']
   });
  const [turn, setTurn] = useState([0]);
                        //se turn = 0 => turn = "X"
                        //se turn = 1 => turn ="O"
                    
  const handleTurn = () => {
    if(turn){
      return "X";
    }else{
      return "O";
    }
  }
  const getValue = (index) => {
    setTurn(!turn);
    let choice = index.target.textContent;
    choice = handleTurn();
    
    console.log(choice);
  }
  

  return(
    <>
      <h1></h1>
      <div className="game-container">

        {value.row1.map((values, index) =>
         
         <span key={index} onClick={(index) => getValue(index)}>
            {values}
          </span>
        )}<br/>

        {value.row2.map((values, index) =>
          <span key={index} onClick={(index) => getValue(index)}>
            {values}
          </span>
        )}<br/>

        {value.row3.map((values, index) =>
          <span key={index} onClick={(index) => getValue(index)}>
            {values}
          </span>
        )}<br/>

      </div>
    </>
  )
  
