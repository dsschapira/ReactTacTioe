export default (state, action) => {
    switch(action.type){

        case 'UPDATE_MODAL':
            return {
                ...state,
                showModal: action.payload.show
            };

        default:
            return state;
    }
}