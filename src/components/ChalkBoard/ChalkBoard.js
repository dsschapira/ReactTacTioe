import React from 'react';
import './ChalkBoard.css';

import GameSpace from '../GameSpace/GameSpace';

function ChalkBoard() {
    return (
      <div id="chalkBoard">
        <div id="rules-container">
          <h2>Rules:</h2>
          <hr />
          <ol>
            <li>X plays first.</li>
            <li>+10 points for a win.</li>
            <li>+5 points for a draw.</li>
            <li>+1 point for a block.</li>
            <li>Lose all points on a loss.</li>
          </ol>
          <hr />
        </div>
        <GameSpace />
        <div id="score-area"></div>
        <div id="eraser">
          <div id="eraser-top"></div>
          <div id="eraser-bottom"></div>
        </div>
      </div>
    );
  }
  
  export default ChalkBoard;