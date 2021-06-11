var NS = require('../services/network-service');

function initDatabase() {
  var firebase = require("firebase");
  var Model = require('../models/Router.js');
  var service = require('../services/database-service.js')
  require('dotenv').config();

  firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  });

  var db = firebase.database();
  var refPlantes = db.ref("plantes");

  refPlantes.on('child_changed', (snapshot) => {
    const data = snapshot.val();
    NS.checkDatasFromFirebase(data);
  });
}

exports.initDatabase = initDatabase;
