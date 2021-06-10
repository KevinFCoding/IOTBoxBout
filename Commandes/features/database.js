function initDatabase() {
  var firebase = require("firebase");
  var Model = require("../models/Puce.js");
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
  var refPuces = db.ref("puces");

  // write data into RTDB
  // refPuces.child(testMac).set(testData, function(error) {
  //   if (error) {
  //     // The write failed...
  //     console.log("Failed with error: " + error)
  //   } else {
  //     // The write was successful...
  //     console.log("success")
  //   }
  // })

  // read data from RTDB
  // refPuces.child(testMac).p('value')
  // .then(function(snapshot) {
  //     console.log("TEST GET")
  //     console.log( snapshot.val() )
  // })
}

exports.initDatabase = initDatabase;
