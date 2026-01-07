import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import style from './Styles/style1.css';
import { isFocusable } from '@testing-library/user-event/dist/utils/index.js';
import JogoDaVelha from './JogoDaVelha.js';



function App() {
  

  return (
    <>
      <JogoDaVelha />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);