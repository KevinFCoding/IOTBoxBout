function startDatabase() {


const http = require('http');
var firebase = require("firebase");
var Model = require("./models/Puce.js");
require('dotenv').config();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

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

// console.log(refPuces);

var testMac = "macAdress2";
var testData = Model.Puce("Plante de ouf", testMac, false, 84, 100);

// write data into RTDB
refPuces.child(testMac).set(testData, function(error) {
  if (error) {
    // The write failed...
    console.log("Failed with error: " + error)
  } else {
    // The write was successful...
    console.log("success")
  }
})

// read data from RTDB
refPuces.child(testMac).once('value')
.then(function(snapshot) {
    console.log("TEST GET")
    console.log( snapshot.val() )
})


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Bienvenue sur le projet nodeJS de FlowerApp');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

}

exports.startDatabase = startDatabase;
