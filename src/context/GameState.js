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
    function updateModal(show){
        dispatch({
            type: 'UPDATE_MODAL',
            payload: {
                show
            }
        });
    }

    function updateBoard(updatedBoard, players){
        dispatch({
            type: 'UPDATE_BOARD',
            payload: {
                updatedBoard,
                players
            }
        })
    }

    function nextTurn(playerKey){
        dispatch({
            type: 'NEXT_TURN',
            payload: {
                currentPlayerTurn: playerKey
            }
        });
    }

    function updateScore(players){
        dispatch({
            type: 'UPDATE_SCORE',
            payload:{
                players
            }
        })
    }

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
     * Setup the player selections
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

    return (
        <GameContext.Provider value={{
            updateModal,
            updateBoard,
            nextTurn,
            selectPlayer,
            updateScore,
            resetGame,
            gameState: state
        }}>
            {children}
        </GameContext.Provider>
    );
}