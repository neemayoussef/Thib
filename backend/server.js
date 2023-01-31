const { Server, Origins } = require('boardgame.io/server');

const server = Server({
  // Provide the definitions for your game(s).
  games: [],

  origins: [
    // Allow your game site to connect.
    // 'http://172.[16-32].\d+.\d+',
    // Allow localhost to connect, except when NODE_ENV is 'production'.
    Origins.LOCALHOST_IN_DEVELOPMENT
  ],
});

const lobbyConfig = {
  apiPort: 8081,
  apiCallback: () => console.log('Running Lobby API on port 8080...'),
};


server.router.get('/customend', (ctx, next) => {
  ctx.body = 'Hello World!';
});

// Add middleware to the create game route.
server.router.use('/games/:name/create', async (ctx, next) => {
  // const { numPlayers, setupData } = await fetchDataFromSomeCustomAPI();
  ctx.body = 'Hello Middleware!';
  next();
});

server.run({ port: 8080, lobbyConfig }, () => console.log("server running..."));
