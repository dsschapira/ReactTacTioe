import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import {initialState, 
        PLAYER_ONE_CODE, 
        PLAYER_ONE_PIECE, 
        PLAYER_TWO_PIECE,
         PLAYER_TWO_CODE,
        newPlayer } from '../constants/GameState';

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

    function updateBoard(updatedBoard){
        dispatch({
            type: 'UPDATE_BOARD',
            payload: {
                updatedBoard
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

    /**
     * Setup the player selections
     * @param {string} playerCode - either PLAYER_ONE_CODE or PLAYER_TWO_CODE
     */
    function selectPiece(playerCode){
        const otherPlayer = playerCode === PLAYER_ONE_CODE ? PLAYER_TWO_CODE : PLAYER_ONE_CODE;

        state.players[playerCode] = newPlayer(false, state.players[playerCode].piece);
        state.players[otherPlayer] = newPlayer(true, state.players[otherPlayer].piece);

        dispatch({
            type: 'SET_PLAYER',
            payload: {
                players: state.players
            }
        });
    }

    return (
        <GameContext.Provider value={{
            updateModal,
            updateBoard,
            nextTurn,
            selectPiece,
            gameState: state
        }}>
            {children}
        </GameContext.Provider>
    );
}