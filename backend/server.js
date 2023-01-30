const { Server, Origins } = require('boardgame.io/server');

const server = Server({
  // Provide the definitions for your game(s).
  games: [],

  origins: [
    // Allow your game site to connect.
    'https://www.example.com',
    // Allow localhost to connect, except when NODE_ENV is 'production'.
    Origins.LOCALHOST_IN_DEVELOPMENT
  ],
});

server.router.get('/customend', (ctx, next) => {
  ctx.body = 'Hello World!';
});

// Add middleware to the create game route.
server.router.use('/games/:name/create', async (ctx, next) => {
  // const { numPlayers, setupData } = await fetchDataFromSomeCustomAPI();
  ctx.body = 'Hello Middleware!';
  next();
});

server.run(8000, () => console.log("server running..."));
