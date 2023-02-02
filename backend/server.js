import express from 'express';
// import { TicTacToe } from './src/Game.js';

const app = express();
// const server = Server ({games: TicTacToe});
const PORT = process.env.PORT || 8080;


app.get ('/', (req, res)=>{
  res
    .status(200)
    .send('Hello server is running')
    .end ();
})

app.listen (PORT, ()=>{
  console.log (`App listen on port ${PORT}`)
  console.log (`Press Ctrl+C to quit`)
})




