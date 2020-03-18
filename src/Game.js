import React, {useState} from 'react';
import './Game.css';

import ChalkBoard from './components/ChalkBoard/ChalkBoard';
import Modal from './components/Modal/Modal'

function Game() {

  const [showModal, setModal] = useState(true);

  return (
    <div id="game">
      <ChalkBoard />
      <Modal show={showModal}> Hello World! </Modal>
    </div>
  );
}

export default Game;
