import React, {useContext, useEffect} from 'react';
import './GameSpace.css';

import { GameContext } from '../../context/GameState';

import { PLAYER_ONE_CODE, PLAYER_TWO_CODE } from '../../constants/GameState'

import Piece from '../Piece/Piece';

function GameSpace() {

    const {gameState, updateBoard, nextTurn} = useContext(GameContext);
    let board;
    let player;

    const handleClick = (id) => {
        board[id] = player.piece;
        updateBoard(board);
        const nextPlayer = gameState.currentPlayerTurn === PLAYER_ONE_CODE ? PLAYER_TWO_CODE : PLAYER_ONE_CODE;
        nextTurn(nextPlayer);
    }

    useEffect(() => {
        board = gameState.board;
        player = gameState.players[gameState.currentPlayerTurn];
    })

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