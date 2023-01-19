import React from 'react';
import ReactDOM from 'react-dom';
import { Client } from 'boardgame.io/react';
import { Debug } from 'boardgame.io/debug';

import { TicTacToe } from './Game';
import { TicTacToeBoard } from './Board';

class TicTacToeClient {
  constructor() {
    this.client = Client({ game: TicTacToe });
    this.client.start();
  }
}

var App = Client({ 
  game: TicTacToe, 
  board: TicTacToeBoard,
  debug: { impl: Debug } 
});
export default App;
