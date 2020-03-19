export const initBoardValues = {
    slotA: '',
    slotB: '',
    slotC: '',
    slotD: '',
    slotE: '',
    slotF: '',
    slotG: '',
    slotH: '',
    slotI: ''
}

export const PLAYER_ONE_CODE = 'one';

export const PLAYER_ONE_PIECE = 'X';

export const PLAYER_TWO_CODE = 'two';

export const PLAYER_TWO_PIECE = 'O';

export const initialState = {
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
            isComputer: false,
            piece: PLAYER_TWO_PIECE,
            selected: []
        }
    },
    board: initBoardValues
};

export const newPlayer = (isComputer, piece) => {
    return {
        isComputer,
        score: 0,
        highScore: 0,
        piece: piece,
        selected: []
    };
}