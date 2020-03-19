import React from 'react';

import { 
    obviousWinMock,
    mockSubArray,
    mockSelectedMatch,
    mockSelectionNoMatch
} from '../testing/mocks/GameService.mocks'
import { getComputerPick, isWinSubArray } from "./GameService";

test('it should return a winning pick', () => {
    const response = getComputerPick(obviousWinMock.board, obviousWinMock.computerPiece);
    expect(response).toBe(obviousWinMock.expectedWinningMove);
});

test('it should correctly find a sub array', () => {
    const response = isWinSubArray(mockSubArray, mockSelectedMatch);
    
    expect(response).toBe(true);
});

test('it should correctly not match a sub array', () => {
    const response = isWinSubArray(mockSubArray, mockSelectionNoMatch);

    expect(response).toBe(false);
})