import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import imagem from './logo1.png'

function Card(props){
    
    return(
        <>
        <div className="card">
            <img height="150" width="150" src={imagem}/>
                <h1>REACT {props.key}</h1>
                    <h2>É uma biblioteca muito boa de javascript, usada para melhorar</h2>
        </div>
       
        
        </>
    )

}

export default Card;