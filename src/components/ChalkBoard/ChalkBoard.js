import React, {useContext} from 'react';
import './ChalkBoard.css';

import { GameContext } from '../../context/GameState';

import GameSpace from '../GameSpace/GameSpace';

function ChalkBoard() {

  const {gameState, swapPlayer} = useContext(GameContext);

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
      <div id="score-area">
        <div id="player-one-score-container">
          <h5>{gameState.players.one.displayName}</h5>
          <span>Score: {gameState.players.one.score}</span>
          <span>High Score: {gameState.players.one.highScore}</span>
        </div>
        <div id="player-two-score-container">
          <h5>{gameState.players.two.displayName}</h5>
          <span>Score: {gameState.players.two.score}</span>
          <span>High Score: {gameState.players.two.highScore}</span>
        </div>
      </div>
      <div id="eraser">
        <div id="eraser-top"></div>
        <div id="eraser-bottom"></div>
      </div>
      <div id="swap-btn-container">
        <button id="swap-btn" onClick={() => { swapPlayer(); }}>Swap Players</button>
      </div>
    </div>
  );
  }
  
  export default ChalkBoard;