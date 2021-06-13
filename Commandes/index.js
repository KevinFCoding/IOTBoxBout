const http = require('http');
const Database = require('./features/database.js');
const Network = require('./features/network.js');

require('dotenv').config();

Database.initDatabase();
Network.initNetwork();