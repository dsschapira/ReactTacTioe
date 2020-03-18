import React from 'react';
import './ChalkBoard.css';

function ChalkBoard() {
    return (
      <div id="chalkBoard">
        <div id="rules-container">
          <h2>Rules:</h2>
          <hr />
          <ol>
            <li>X plays first.</li>
            <li>+10 points for a win.</li>
            <li>+5 points for a draw.</li>
            <li>+1 point for a block.</li>
            <li>Lose all points on a loss.</li>
          </ol>
          <hr />
        </div>
        <div id="play-area">
          <div id="top-row" className="row">
            <div className="left-col col" id="slotA"></div>
            <div className="mid-col col" id="slotB"></div>
            <div className="right-col col" id="slotC"></div>
          </div>
          <div id="mid-row" className="row">
            <div className="left-col col" id="slotD"></div>
            <div className="mid-col col" id="slotE"></div>
            <div className="right-col col" id="slotF"></div>
          </div>
          <div id="bot-row" className="row">
            <div className="left-col col" id="slotG"></div>
            <div className="mid-col col" id="slotH"></div>
            <div className="right-col col" id="slotI"></div>
          </div>
        </div>
        <div id="score-area"></div>
        <div id="eraser">
          <div id="eraser-top"></div>
          <div id="eraser-bottom"></div>
        </div>
      </div>
    );
  }
  
  export default ChalkBoard;