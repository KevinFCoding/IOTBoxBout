const http = require('http');
const Database = require('./features/database.js');
const Network = require('./features/network.js');

require('dotenv').config();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

Database.initDatabase();
Network.initNetwork();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bienvenue sur le projet nodeJS de FlowerApp');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});