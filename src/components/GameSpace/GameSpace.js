import React, {useContext, useEffect} from 'react';
import './GameSpace.css';

import { GameContext } from '../../context/GameState';

import { 
    PLAYER_ONE_CODE, 
    PLAYER_ONE_PIECE,
    PLAYER_TWO_CODE, 
    PLAYER_TWO_PIECE,
    BOARD_INDICES,
    BOARD_SLOTS,
    WINNERS_BY_SLOT,
    BLOCK_POINTS 
} from '../../constants/GameState'

import { getComputerPick, isWinSubArray } from '../../services/GameService';

import Piece from '../Piece/Piece';

function GameSpace() {

    const { gameState, 
            updateBoard,    
            nextTurn,
            updateScore
        } = useContext(GameContext);
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
        // Only update if the slot isn't already selected
        if(board[boardIndex] === ""){
            //update the board
            board[boardIndex] = player.piece;
            //update players object with new selection
            const players = gameState.players;
            players[gameState.currentPlayerTurn].selected.push(boardIndex);
            updateBoard(board, players);
            
            //Check for any scoring
            checkForBlock( boardIndex, player.piece);

            //Check if game is over
            if(isGameOver()){
                console.log("GAME OVER");
            }
            else{
                const nextPlayer = gameState.currentPlayerTurn === PLAYER_ONE_CODE ? PLAYER_TWO_CODE : PLAYER_ONE_CODE;
                nextTurn(nextPlayer);
            }
        }
    }

    const checkWinCondition = () => {
        const selectedSlots = [];
        player.selected.forEach( slotIndex => {
            selectedSlots.push(BOARD_SLOTS[slotIndex]);
        });

        const win = selectedSlots.some( (selectedSlot, index) => {
            const winners = WINNERS_BY_SLOT[selectedSlot];

            for(const winner of winners){
                if(isWinSubArray(winner, selectedSlots)){
                    return true;
                }
            }
        });

        return win;
    }

    const isGameOver = () => {
        const emptySlots = board.filter( slot => slot === '').length;
        if(checkWinCondition() || emptySlots === 0){
            return true;
        }
        else{
            return false;
        }
    }

    const checkForBlock = (boardIndex, playerPiece) => {
        const slotId = BOARD_SLOTS[boardIndex];
        const oppPiece = playerPiece === PLAYER_ONE_PIECE ? PLAYER_TWO_PIECE : PLAYER_ONE_PIECE;

        const winners = WINNERS_BY_SLOT[slotId];
        winners.forEach( winner => {
            let blockCheck = 0;

            winner.forEach( winSlotId => {
                const winSlotIndex = BOARD_INDICES[winSlotId];

                if(board[winSlotIndex] === oppPiece){
                    blockCheck += 1;
                }
            });

            if(blockCheck === 2){
                handleUpdateScore(BLOCK_POINTS);
            }
        });

    }

    const handleUpdateScore = (scoreChange) => {
        const players = gameState.players;

        players[gameState.currentPlayerTurn].score += scoreChange;

        if(players[gameState.currentPlayerTurn].score > players[gameState.currentPlayerTurn].highScore){
            players[gameState.currentPlayerTurn].highScore = players[gameState.currentPlayerTurn].score;
        }

        updateScore(players);
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