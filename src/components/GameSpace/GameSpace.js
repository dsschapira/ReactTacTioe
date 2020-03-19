import React from 'react';
import './GameSpace.css';

function GameSpace() {
    return (
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
    );
}

export default GameSpace;