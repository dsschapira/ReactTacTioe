import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import {
        initialState,
        initBoardArray,
        PLAYER_ONE_CODE,
        PLAYER_TWO_CODE,
        newPlayer 
    } from '../constants/GameState';

// Initial State


// Create context
export const GameContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    /**
     * Updates whether to show the modal or not
     * @param {boolean} show 
     */
    function updateModal(show){
        dispatch({
            type: 'UPDATE_MODAL',
            payload: {
                show
            }
        });
    }

    /**
     * Updates the board and the players.selected property
     * @param {string[]} updatedBoard 
     * @param {object} players 
     */
    function updateBoard(updatedBoard, players){
        dispatch({
            type: 'UPDATE_BOARD',
            payload: {
                updatedBoard,
                players
            }
        })
    }

    /**
     * advances the turn
     * @param {string} playerKey 
     */
    function nextTurn(playerKey){
        dispatch({
            type: 'NEXT_TURN',
            payload: {
                currentPlayerTurn: playerKey
            }
        });
    }

    /**
     * Updates the score property of the players object in state
     * @param {object} players - same as gameState.players / state.players
     */
    function updateScore(players){
        dispatch({
            type: 'UPDATE_SCORE',
            payload:{
                players
            }
        })
    }

    /**
     * resets the game board, but keeps the scores
     */
    function resetGame(){
        const players = {...state.players};
        players.one.selected = [];
        players.two.selected = [];

        dispatch({
            type: 'RESET_GAME',
            payload: {
                players,
                currentPlayerTurn: PLAYER_ONE_CODE,
                board: initBoardArray
            }
        });
    }

    /**
     * Select player to start the game as
     * @param {string} playerCode - either PLAYER_ONE_CODE or PLAYER_TWO_CODE
     */
    function selectPlayer(playerCode){
        const otherPlayer = playerCode === PLAYER_ONE_CODE ? PLAYER_TWO_CODE : PLAYER_ONE_CODE;
        const players = {...state.players};

        players[playerCode] = newPlayer(false, players[playerCode].piece);
        players[otherPlayer] = newPlayer(true, players[otherPlayer].piece);

        dispatch({
            type: 'SET_PLAYER',
            payload: {
                players
            }
        });
    }

    /**
     * swap player 1 and 2 control and scoring/displayName details
     */
    function swapPlayer(){
        const players = {...state.players};
        players.one.selected = [];
        players.two.selected = [];

        players.one.isComputer = !players.one.isComputer;
        players.two.isComputer = !players.two.isComputer;

        const oneScoreHolder = players.one.score;
        const oneHighScoreHolder = players.one.highScore;

        players.one.score = players.two.score;
        players.one.highScore = players.two.highScore;

        players.two.score = oneScoreHolder;
        players.two.highScore = oneHighScoreHolder;

        players.one.displayName = players.one.isComputer ? `Player 1 - Computer` : `Player 1`;
        players.two.displayName = players.two.isComputer ? `Player 2 - Computer` : `Player 2`;

        dispatch({
            type: 'RESET_GAME',
            payload: {
                players,
                currentPlayerTurn: PLAYER_ONE_CODE,
                board: initBoardArray
            }
        });
    }

    return (
        <GameContext.Provider value={{
            updateModal,
            updateBoard,
            nextTurn,
            selectPlayer,
            updateScore,
            resetGame,
            swapPlayer,
            gameState: state
        }}>
            {children}
        </GameContext.Provider>
    );
}