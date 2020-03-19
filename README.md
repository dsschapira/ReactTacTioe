# React Tac Toe

## Description
Tic-Tac-Toe created in React.

Hosted live here https://www.danschapira.com/react-tac-toe/

Currently only supports 1 player versus the computer.

The computer uses the [MiniMax algorithm](https://medium.com/@alialaa/tic-tac-toe-with-javascript-es2015-ai-player-with-minimax-algorithm-59f069f46efa) to make its selections.  This means that currently, you can at best get a draw with the computer.

## TODOS
There were a number of features I would add if I come back to this project or had more time to spend on it:
1. Two player functionality by adding a second choice driver to the modal before beginning the game.
    * The groundwork for this is mostly done, as it's not necessary for either player to be the computer currently.
2. Add animated pop-ups when a score update happens, like tween a "+5 Draw!" notification from invisible - visible - invisible again, while moving up/left-right.
3. Add a service to save/retreive scores to localStorage so scores can persist.