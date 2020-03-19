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
            displayName: 'Player 1',
            piece: PLAYER_ONE_PIECE,
            selected: []
        },
        two: {
            score: 0,
            highScore: 0,
            isComputer: false,
            displayName: 'Player 2',
            piece: PLAYER_TWO_PIECE,
            selected: []
        }
    },
    board: initBoardValues
};

export const newPlayer = (isComputer, piece) => {
    const displayName = piece === PLAYER_ONE_PIECE 
        ? (
            isComputer 
            ? `Player 1 - Computer`
            : `Player 1`
        )
        : (
            isComputer
            ? `Player 2 - Computer`
            : `Player 2`
        );
    return {
        isComputer,
        displayName,
        score: 0,
        highScore: 0,
        piece: piece,
        selected: []
    };
}