import React from 'react';
import { GlobalProvider } from './context/GameState';

import Game from './Game';

function App() {

    return (
        <GlobalProvider>
            <Game />
        </GlobalProvider>
    );
}

export default App;