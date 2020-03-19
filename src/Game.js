import React, {useContext} from 'react';
import './Game.css';

import { GameContext } from './context/GameState';

import { PLAYER_ONE_CODE, PLAYER_TWO_CODE } from './constants/GameState';

import ChalkBoard from './components/ChalkBoard/ChalkBoard';
import Modal from './components/Modal/Modal'

function Game() {

  const {gameState, selectPlayer, updateModal} = useContext(GameContext);

  const showModal = gameState.showModal

  const handleSelection = (playerCode) => {
    selectPlayer(playerCode);
    updateModal(false);
  }

  return (
    <div id="game">
      <ChalkBoard />
      <Modal show={showModal}> 
        <h1>React-Tac-Toe</h1>
        <h2>Choose X's or O's</h2>
        <button className="modal-btn" onClick={() => handleSelection(PLAYER_ONE_CODE)}>X</button>
        <button className="modal-btn" onClick={() => handleSelection(PLAYER_TWO_CODE)}>O</button>
      </Modal>
    </div>
  );
}

export default Game;
