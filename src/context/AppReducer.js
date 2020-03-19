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

        default:
            return state;
    }
}