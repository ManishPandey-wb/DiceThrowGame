import React, { useState } from 'react';
import './App.css';

function App() {

  const[num,SetNum] = useState(1);

  function handleNumber(){
    var random = Math.floor(Math.random()*6 + 1);
    SetNum(random);
  }
  return (
    <div className="App">
      <div className="Container">
        <div className="DiceContainer">
          <img className="Dice" src={require(`./assets/dice/Dice${num}.png`)} alt="dice"/>
          <div className="DiceBtnContainer">
            <button onClick={handleNumber} class="DiceBtn">Let's play</button>

          </div>
          
        </div>
      </div>
     
    </div>
  );
}

export default App;
