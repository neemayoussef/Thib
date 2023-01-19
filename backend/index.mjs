

import dotenv from 'dotenv';
import express from 'express';
import invite from './routes/invite.mjs';
import game from './routes/game.mjs';
import home from './routes/home.mjs'
import lobby from './routes/lobby.mjs';
import bodyParser from 'body-parser';

const app = express()
dotenv.config()
app.use (express.json())
app.use (bodyParser.json())

const PORT = process.env.PORT;
const HOST = process.env.HOST;


app.use ('/', home);
app.use ('/', lobby);
app.use ('/', invite);
app.use ('/', game);













app.post ('/', (req, res)=>{
  res.send ('Post Response')
})





app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

