import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import style from './style4.css';
import Card from './Card.js';
import Color from './Color.js';
import Lista from './Lista.js';
import Listv2 from './Listv2.js';
import Time from './Time.js';
import Cards from './Cards.js';
import { isFocusable } from '@testing-library/user-event/dist/utils/index.js';
import JogoDaVelha from './JogoDaVelha.js';
import Minha from './minha.jpg';

//O que devo fazer?
    //1) fazer site que mostra usuarios
    //2) fazer ferramenta de pesquisa
    //3) mostrar como um card(nome,imagem,senha)
    

function App(){
 
    return (
        <>
            <div className="main-container">
                <div className="search-container">
                    <label> Pesquisar por:
                    <select className="select" id="select">
                        <option value="fName" defaultValue>First Name</option>
                        <option value="lName">Last Name</option>
                        <option value="country">Country</option>
                    </select>
                    </label>
                
                    <input className="search" type="text" id="search"></input>
                    <button className="submit-button" onClick={handleSearch}>Pesquisar</button>

                </div>
                <div className="card-container">
            {userFName.map((user, index) => (
                <div className="user-container" key={index}>
                    <p className="name-item" id={`nameItem${index}`}>{userFName[index]} {userLName[index]}</p>
                    <img className="image-item" id={`imageItem${index}`} src={userPicture[index]}></img>
                    <p className="country-item" id={`countryItem${index}`}>{`País: ${userCountry[index]}`}</p>
                    
            </div>    
            ))}
            <div className="button-container">
            <button  className="add-button" 
            onClick={(event) => {fetchData(event)}} id="add-button">+</button>
                    </div>
                    <p>{console.log([userFName, userLName, userCountry])}</p>
                </div>
            </div>
        </>
    )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<JogoDaVelha/>);
