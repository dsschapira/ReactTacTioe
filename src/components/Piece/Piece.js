import React, {useContext, useEffect} from 'react';

import { GameContext } from '../../context/GameState';

import { PLAYER_ONE_CODE, PLAYER_TWO_CODE, BOARD_INDICES} from '../../constants/GameState';

import './Piece.css';

function Piece(props) {

    const {gameState} = useContext(GameContext);

    const boardIndex = BOARD_INDICES[props.slotId];

    return(
        <span>
            {gameState.board[boardIndex]}
        </span>
    );
}


export default Piece;