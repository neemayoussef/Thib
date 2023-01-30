

import dotenv from 'dotenv';
import express from 'express';
import invite from './backend/routes/invite.mjs';
import game from './backend/routes/game.mjs';
import home from './backend/routes/home.mjs'
import lobby from './backend/routes/lobby.mjs';
import bodyParser from 'body-parser';
import mysql from 'mysql';

dotenv.config();

const app = express()

app.use (express.json())
app.use (bodyParser.json())
app.use (express.urlencoded({extended : false}));


const PORT = 8080;
const HOST = '0.0.0.0';


app.use ('/', home);
app.use ('/', lobby);
app.use ('/', invite);
app.use ('/', game);






// connection mysql db

// const connectiondb = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password:'123azerty',
//   database: 'thibdb'
// })

// connectiondb.connect((err)=>{
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
 
//   console.log('connected as id ' + connection.threadId);
// });



// const setCookie = (cpseudo, cvalue, exdays)=>{
//   const date = new Date();
//   date.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//   let expire = "exprire"+ date.toUTCString();
//   document.cookie = cpseudo + "=" +cvalue + ";" + expire + ";path=/";
// }

// const getCookie = (cname) =>{
//   let pseudo = cname + "=";
//   let ca = document.cookie.split(';');
//   for(let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(pseudo) == 0) {
//       return c.substring(pseudo.length, c.length);
//     }
//   }
//   return "";
// }

// const checkCookie =() =>{
//   let user = getCookie("pseudo");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 365);
//     }
//   }
// }

// checkCookie();




app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

