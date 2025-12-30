import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';

function Lista(){
  const [lista, setLista] = useState(['Laranja','Maça']);

  const handleChange = (e) => {
    setLista(e.targe.value);
  }
  const handleAdd = () => {
    const adicionar = document.getElementById('lista').value;
    setLista([...lista, adicionar]);
  }
  const handleRem = (index) => {
    setLista(lista.filter((_, i) => i !== index))
  }

  return(
  <>
    <h1>Lista de compras</h1>
    {lista.map((lista, index) => <li key={index} onClick={() => handleRem(index)}> {lista}</li>)}
    <label> Escreva a lista:
    <input 
    id="lista"
    //onChange={(e) => handleChange(e)}
    type="text"
    />
    </label>
    <button onClick={handleAdd}>Enviar</button>
  </>
  )
}

export default Lista;