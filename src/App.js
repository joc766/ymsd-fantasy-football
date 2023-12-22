import logo from './logo.svg';
import './App.css';
import MatchupDisplay from './MatchupDisplay';

import React, { useState, useEffect } from 'react';



function App() {

  const matchups = [
    {
      player1: "Sammyteeg",
      player2: "cdevol"
    }, 
    {
      player1: "tharmon11",
      player2: "jamirzepecki"
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>YMSD Fantasy Football Playoffs</h1>
        <MatchupDisplay matchups={{matchups}}/>
      </header>
    </div>
  );
}

export default App;
