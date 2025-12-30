import React, { useState, useEffect } from "react";

function Listv2(){
  const [list, setList] = useState([]);
  const [modo, setModo] = useState(false);
  
   useEffect(() => {
    document.body.style.backgroundColor = 
    modo ? 'hsla(0, 0%, 0%, 0.87)' : 'hsla(0, 0%, 95%, 0.795)';
    document.body.style.color = 
    modo ? 'hsla(0, 0%, 95%, 0.795)' : 'hsla(0, 0%, 0%, 0.87)';
  }, [modo]);
  
  const handleModo = (e) => { 
    setModo(!modo);
    const trocar = e.target.style;
    trocar.backgroundColor =
     modo ? 'hsla(0, 0%, 0%, 0.87)' : 'hsla(0, 0%, 95%, 0.795)';
  }
  
  const handleChange = (e) => {
    setList(e.target.value);
  }

  const handleAdd = () => {
    let adicionar = document.getElementById('text').value;
    setList([...list, adicionar]);
  }

  const handleDel = (index) => {
    setList(list.filter((_, i) => i !== index));
  }

  return(
    <>
    <div className="input-container">
      <div className="inner-container">
      <input 
      type="text"
      className="text"
      id="text"
      placeholder="Escreva a lista"
      onChange={() => handleChange}
      />
      <button className="add"  onClick={handleAdd}>Adicione!</button>
      <button className="modo" id="modo" onClick={(e) => handleModo(e)}>Modo: {modo ? 'Escuro':'Claro'}</button>
    </div></div>

      <br></br>

      <div className="output-container">

      {list.map((list, index) => 
      <li key={index} id="list"> 
      <span className="span">{list}</span>
      <button className="button" onClick={() => handleDel(index)}>Remover</button>
      </li>)}
      
      </div>
    </>
  )
}

export default Listv2;