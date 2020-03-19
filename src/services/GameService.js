import {PLAYER_ONE_PIECE, PLAYER_TWO_PIECE} from '../constants/GameState';

/**
 * Return array of empty indices in the board array
 * @param {string[]} board - array of board selections
 */
function emptyIndecies(board) {
    let retArr = [];
    board.map( (slot, index) => {
        if(slot !== PLAYER_ONE_PIECE && slot !== PLAYER_TWO_PIECE){
            retArr.push(index);
        }
        return true; //expected return inside arrow method
    });

    return retArr;
}

/**
 * Return whether the board configuration has a winning condition
 * brute-force winning conditions since there are only 8
 * @param {string[]} board - array of board selections
 * @param {string} playerPiece - player piece we want to check for wins
 */
function winning(board, playerPiece){
    return (
        (board[0] === playerPiece && board[1] === playerPiece && board[2] === playerPiece) ||
        (board[3] === playerPiece && board[4] === playerPiece && board[5] === playerPiece) ||
        (board[6] === playerPiece && board[7] === playerPiece && board[8] === playerPiece) ||
        (board[0] === playerPiece && board[3] === playerPiece && board[6] === playerPiece) ||
        (board[1] === playerPiece && board[4] === playerPiece && board[7] === playerPiece) ||
        (board[2] === playerPiece && board[5] === playerPiece && board[8] === playerPiece) ||
        (board[0] === playerPiece && board[4] === playerPiece && board[8] === playerPiece) ||
        (board[2] === playerPiece && board[4] === playerPiece && board[6] === playerPiece)
      );
}

/**
 * Use the MiniMax algorithm to choose the best move for the computer player
 * solid explanation here: https://medium.com/@alialaa/tic-tac-toe-with-javascript-es2015-ai-player-with-minimax-algorithm-59f069f46efa
 * @param {string[]} boardArr 
 * @param {string} computerPiece 
 * @param {string} playerPiece 
 * @param {string} currentPiece 
 */
function miniMax(boardArr, computerPiece, playerPiece, currentPiece){
    //effectively, this plays itself out from the initial passed in board and selects the 
    // highest scoring (most likely to win) position for itself while minimizing the 
    // score for the opponent player
    const availableSpots = emptyIndecies(boardArr);

    if( winning(boardArr, playerPiece) ){
        //opp wins board case
        return { score: -100 };
    }
    else if( winning(boardArr, computerPiece) ){
        //comp wins board case
        return { score: 100 };
    }
    else if(availableSpots.length === 0){
        //draw case
        return { score: 0 };
    }

    const moves = [];

    for(let i = 0; i < availableSpots.length; i++){
        const move = {};
        move.index = availableSpots[i];

        //set the empty spot we're checking to the current player piece
        boardArr[availableSpots[i]] = currentPiece;

        if(currentPiece === computerPiece){
            const result = miniMax(boardArr, computerPiece, playerPiece, playerPiece);
            move.score = result.score;
        }
        else{
            const result = miniMax(boardArr, computerPiece, playerPiece, computerPiece);
            move.score = result.score;
        }

        boardArr[availableSpots[i]] = '';
        moves.push(move);
    }

    var bestMove;
    if(currentPiece === computerPiece){
        let bestScore = -99999; //initialize to low number

        for(let j = 0; j < moves.length; j++){
            if(moves[j].score > bestScore){
                bestScore = moves[j].score;
                bestMove = j;
            }
        }
    }
    else {
        let bestScore = 9999999; //initialize to high number

        for(let j = 0; j < moves.length; j++){
            if(moves[j].score < bestScore){
                bestScore = moves[j].score;
                bestMove = j;
            }
        }
    }

    return moves[bestMove];
}

/**
 * 
 * @param {string[]} board 
 * @param {string} computerPiece 
 * @returns {number} - board array index of the computer's pick
 */
export function getComputerPick(board, computerPiece){
    const playerPiece = computerPiece === PLAYER_ONE_PIECE ? PLAYER_TWO_PIECE : PLAYER_ONE_PIECE;
    const move = miniMax(board, computerPiece, playerPiece, computerPiece);

    return move.index;
}

/**
 * Determins if sub is a subArray of master.
 * AKA if master holds at least all of the items in sub
 * @param {string[]} sub 
 * @param {string[]} master 
 */
export const isWinSubArray = (sub, master) => {
    let matches = 0;
    let ret = false;
    for(let index in sub){
        if(master.indexOf(sub[index]) > -1){
            matches += 1;
            //We only care about 3 matches since it only takes 3 to win tic-tac-toe
            if(matches >= 3){
                ret = true;
                break;
            }
        }
    }
    return ret;
}