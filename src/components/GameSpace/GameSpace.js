import React, {useContext, useEffect} from 'react';
import './GameSpace.css';

import { GameContext } from '../../context/GameState';

import { PLAYER_ONE_CODE, PLAYER_TWO_CODE, BOARD_INDICES } from '../../constants/GameState'

import { getComputerPick } from '../../services/GameService';

import Piece from '../Piece/Piece';

function GameSpace() {

    const {gameState, updateBoard, nextTurn} = useContext(GameContext);
    let board;
    let player;

    const handleClick = (id) => {
        //make sure they're not clicking during the computer's turn
        if(!player.isComputer){
            const boardIndex = BOARD_INDICES[id];
            updateBoardProceedTurn(boardIndex);
        }
    }

    const takeComputerTurn = () => {
        const boardIndex = getComputerPick(board, player.piece);

        updateBoardProceedTurn(boardIndex);
    }

    const updateBoardProceedTurn = (boardIndex) => {
        board[boardIndex] = player.piece;
        updateBoard(board);
        const nextPlayer = gameState.currentPlayerTurn === PLAYER_ONE_CODE ? PLAYER_TWO_CODE : PLAYER_ONE_CODE;
        nextTurn(nextPlayer);
    }

    useEffect(() => {
        board = gameState.board;
        player = gameState.players[gameState.currentPlayerTurn];

        if(player.isComputer){
            takeComputerTurn();
        }
    });

    return (
        <div id="play-area">
            <div id="top-row" className="row">
                <div className="left-col col" id="A" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slotId="A" />
                </div>
                <div className="mid-col col" id="B" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slotId="B" />
                </div>
                <div className="right-col col" id="C" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slotId="C" />
                </div>
            </div>
            <div id="mid-row" className="row">
                <div className="left-col col" id="D" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slotId="D" />
                </div>
                <div className="mid-col col" id="E" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slotId="E" />
                </div>
                <div className="right-col col" id="F" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slotId="F" />
                </div>
            </div>
            <div id="bot-row" className="row">
                <div className="left-col col" id="G" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slotId="G" />
                </div>
                <div className="mid-col col" id="H" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slotId="H" />
                </div>
                <div className="right-col col" id="I" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slotId="I" />
                </div>
            </div>
        </div>
    );
}

export default GameSpace;