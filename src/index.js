import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import style from './Styles/style2.css';
import { isFocusable } from '@testing-library/user-event/dist/utils/index.js';
import Receitas from './Receitas.js';



function App() {
  

  return (
    <>
      <Receitas />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);