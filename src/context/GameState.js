import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    showModal: true,
    numPlayers: null,
    currentPlayerTurn: null,
    players: {
        playerOne: {
            score: 0,
            highScore: 0,
            isComputer: false,
            selected: []
        },
        playerTwo: {
            score: 0,
            highScore: 0,
            isComputer: false,
            selected: []
        }
    }
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

    return (
        <GameContext.Provider value={{
            updateModal,
            gameState: state
        }}>
            {children}
        </GameContext.Provider>
    );
}