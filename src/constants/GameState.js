export const initBoardArray = ['','','','','','','','',''];

export const BOARD_INDICES = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8
};

export const BOARD_SLOTS = ['A','B','C','D','E','F','G','H','I'];

const WINNERS = [
    ["A", "B", "C"], //0
    ["D", "E", "F"], //1
    ["G", "H", "I"], //2
    ["A", "D", "G"], //3
    ["B", "E", "H"], //4
    ["C", "F", "I"], //5
    ["A", "E", "I"], //6
    ["C", "E", "G"] //7
]
//All winning slot ID arrays
export const WINNERS_BY_SLOT = {
    A: [WINNERS[0], WINNERS[3], WINNERS[6]],
    B: [WINNERS[0], WINNERS[4]],
    C: [WINNERS[0], WINNERS[5], WINNERS[7]],
    D: [WINNERS[1], WINNERS[3]],
    E: [WINNERS[1], WINNERS[4], WINNERS[6]],
    F: [WINNERS[1],WINNERS[5]],
    G: [WINNERS[2],WINNERS[3],WINNERS[7]],
    H: [WINNERS[2],WINNERS[4]],
    I: [WINNERS[2],WINNERS[5],WINNERS[6]]
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
    board: initBoardArray
};

export const newPlayer = (isComputer, piece, score = 0, highScore = 0) => {
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
        score,
        highScore,
        piece,
        selected: []
    };
}

export const BLOCK_POINTS = 1;

export const WIN_POINTS = 10;

export const DRAW_PONTS = 5;

export const RESET_DELAY_MS = 750;
