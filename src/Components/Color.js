import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';

function Color(){
    const [color, setColor] = useState('#662e2e');
    const handleChange = (e) => {
       setColor(e.target.value);
       
       return color;
    }
    return(
    <>
        <div className="container">
        <p className="cubo" style={{backgroundColor: color}}>Cor selecionada: {color}</p>
        <input type="color" value={color} onChange={handleChange}/>
        </div>
    </>
    )
}

export default Color 