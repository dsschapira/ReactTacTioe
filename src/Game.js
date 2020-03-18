import React, {useContext} from 'react';
import './Game.css';

import { GameContext } from './context/GameState';

import ChalkBoard from './components/ChalkBoard/ChalkBoard';
import Modal from './components/Modal/Modal'

function Game() {

  const {gameState, updateModal} = useContext(GameContext);

  console.log("CONTEXT: ",{ gameState, updateModal })
  const showModal = gameState.showModal

  return (
    <div id="game">
      <ChalkBoard />
      <Modal show={showModal}> Hello World! <br/>
        <button  onClick={ () => updateModal(false) }>close</button>
      </Modal>
    </div>
  );
}

export default Game;
