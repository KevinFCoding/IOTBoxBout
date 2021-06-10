const database = require('./database');
const serialListener = require('./serial');

database.startDatabase();

serialListener.startSerialListener();