import logo from "./logo.png"
import { useState } from 'react';
import './App.css';

import Main from "./Components/Main/Main";

function App() {

  return (
    <div className='App'>
      <header>
          <img src={logo} alt="Pokémon Memory" className="logo"></img>
          <div className="line">
            <div className="circle outer">
              <div className="circle inner"></div>
            </div>
          </div>
      </header>
      <Main />
    </div>
  );
}

export default App;
