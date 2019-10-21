import React, { Component } from 'react';
import './App.css';
import Roulette from './state-drills/RouletteGun.js'

class App extends Component {
    render() {
      return (
        <div className="App">
          <Roulette bulletInChamber={8}/>
        </div>
      );
    }
  }

export default App;