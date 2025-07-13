// api/server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // note: db.json is in root
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Export the server as a handler for Vercel
module.exports = server;
