import React, {useContext} from 'react';

import { GameContext } from '../../context/GameState';

import './Piece.css';

function Piece(props) {

    const {gameState} = useContext(GameContext);

    return(
        <span>
            {gameState.board[props.slot]}
        </span>
    );
}


export default Piece;