import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import { initBoardValues } from '../constants/GameSpace';

// Initial State
const initialState = {
    showModal: true,
    numPlayers: null,
    currentPlayerTurn: null,
    players: {
        one: {
            score: 0,
            highScore: 0,
            isComputer: false,
            selected: []
        },
        two: {
            score: 0,
            highScore: 0,
            isComputer: true,
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

    return (
        <GameContext.Provider value={{
            updateModal,
            updateBoard,
            gameState: state
        }}>
            {children}
        </GameContext.Provider>
    );
}