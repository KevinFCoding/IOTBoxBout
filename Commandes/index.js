const http = require('http');
var firebase = require("firebase");

const hostname = '127.0.0.1';
const port = 3000;



firebase.initializeApp({
  apiKey: "AIzaSyDNEHFXG8rRQdXxLOGhP8uyVcBVgiq53lA",
  authDomain: "box-bout.firebaseapp.com",
  databaseURL: "https://box-bout-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "box-bout",
  storageBucket: "box-bout.appspot.com",
  messagingSenderId: "187684869556",
  appId: "1:187684869556:web:55478cc6422b19e1434ee1",
});

var db = firebase.database();

console.log(db);

var testData = {
  waterLevel: 55,
  puceID: 3
}

// write data into RTDB
db.ref("puces").set(testData, function(error) {
  if (error) {
    // The write failed...
    console.log("Failed with error: " + error)
  } else {
    // The write was successful...
    console.log("success")
  }
})

// read data from RTDB
database.ref('puces').once('value')
.then(function(snapshot) {
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