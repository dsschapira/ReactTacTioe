export default (state, action) => {
    switch(action.type){

        case 'UPDATE_MODAL':
            return {
                ...state,
                showModal: action.payload.show
            };

        case 'UPDATE_BOARD':
            return{
                ...state,
                board: action.payload.updatedBoard
            };
        
        case 'NEXT_TURN':
            return{
                ...state,
                currentPlayerTurn: action.payload.currentPlayerTurn
            };

        case 'SET_PLAYER':
            return{
                ...state,
                players: action.payload.players
            };

        case 'UPDATE_SCORE':
            return{
                ...state,
                players: action.payload.players
            }

        default:
            return state;
    }
}