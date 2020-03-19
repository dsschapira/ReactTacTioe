import React, {useContext} from 'react';
import './GameSpace.css';

import { GameContext } from '../../context/GameState';

import Piece from '../Piece/Piece';

function GameSpace() {

    const {gameState, updateBoard} = useContext(GameContext);

    const board = gameState.board;
    const player = gameState.currentPlayerTurn;

    const handleClick = (id) => {
        board[id] = 'X';
        updateBoard(board);
    }

    return (
        <div id="play-area">
            <div id="top-row" className="row">
                <div className="left-col col" id="slotA" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slot="slotA" />
                </div>
                <div className="mid-col col" id="slotB" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slot="slotB" />
                </div>
                <div className="right-col col" id="slotC" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slot="slotC" />
                </div>
            </div>
            <div id="mid-row" className="row">
                <div className="left-col col" id="slotD" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slot="slotD" />
                </div>
                <div className="mid-col col" id="slotE" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slot="slotE" />
                </div>
                <div className="right-col col" id="slotF" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slot="slotF" />
                </div>
            </div>
            <div id="bot-row" className="row">
                <div className="left-col col" id="slotG" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slot="slotG" />
                </div>
                <div className="mid-col col" id="slotH" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slot="slotH" />
                </div>
                <div className="right-col col" id="slotI" onClick={(e) => { handleClick(e.target.id) }}>
                    <Piece slot="slotI" />
                </div>
            </div>
        </div>
    );
}

export default GameSpace;