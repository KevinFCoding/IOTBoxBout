function createNewPuce(newPuce) {
  var firebase = require("firebase");

  var db = firebase.database();
  var refPuces = db.ref("puces");
  
  refPuces.child(newPuce.mac).set(newPuce, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error)
    } else {
      // The write was successful...
      console.log("Write successful")
    }
  })
}

function updateWaterLevel(macAdress, waterLevel) {
  var firebase = require("firebase");
  
  var db = firebase.database();
  var refPuces = db.ref("puces");

  refPuces.child(macAdress).child('waterLevel').set(waterLevel, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error);
    } else {
      // The write was successful...
      console.log("WaterLevel update successful");
    }
  })
}

function updateLightLevel(macAdress, lightLevel) {
  var firebase = require("firebase");
  
  var db = firebase.database();
  var refPuces = db.ref("puces");

  refPuces.child(macAdress).child('lightLevel').set(lightLevel, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error);
    } else {
      // The write was successful...
      console.log("LightLevel update successful");
    }
  })
}

function updateSleepMode(macAdress, sleep) {
  var firebase = require("firebase");
  
  var db = firebase.database();
  var refPuces = db.ref("puces");

  refPuces.child(macAdress).child('sleep').set(sleep, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error);
    } else {
      // The write was successful...
      console.log("SleepMode update successful");
    }
  })
}

function deletePuce(macAdress) {
  var firebase = require("firebase");
  
  var db = firebase.database();
  var refPuces = db.ref("puces");

  refPuces.child(macAdress).remove();
}

exports.create = createNewPuce;
exports.updateWaterLevel = updateWaterLevel;
exports.updateLightLevel = updateLightLevel;
exports.updateSleepMode = updateSleepMode;
exports.deletePuce = deletePuce;