import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import { initBoardValues, PLAYER_ONE_CODE, PLAYER_ONE_PIECE, PLAYER_TWO_PIECE } from '../constants/GameState';

// Initial State
const initialState = {
    showModal: true,
    numPlayers: null,
    currentPlayerTurn: PLAYER_ONE_CODE,
    players: {
        one: {
            score: 0,
            highScore: 0,
            isComputer: false,
            piece: PLAYER_ONE_PIECE,
            selected: []
        },
        two: {
            score: 0,
            highScore: 0,
            isComputer: true,
            piece: PLAYER_TWO_PIECE,
            selected: []
        }
    },
    board: initBoardValues
};

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

    return (
        <GameContext.Provider value={{
            updateModal,
            updateBoard,
            nextTurn,
            gameState: state
        }}>
            {children}
        </GameContext.Provider>
    );
}