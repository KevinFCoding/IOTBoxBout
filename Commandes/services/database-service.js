function createNewPlante(newPlante) {
  var firebase = require("firebase");

  var db = firebase.database();
  var refPlantes = db.ref("plantes");
  
  refPlantes.child(newPlante.mac).set(newPlante, function(error) {
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
  var refPlantes = db.ref("plantes");

  refPlantes.child(macAdress).child('waterLevel').set(waterLevel, function(error) {
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
  var refPlantes = db.ref("plantes");

  refPlantes.child(macAdress).child('lightLevel').set(lightLevel, function(error) {
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
  var refPlantes = db.ref("plantes");

  refPlantes.child(macAdress).child('sleep').set(sleep, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error);
    } else {
      // The write was successful...
      console.log("SleepMode update successful");
    }
  })
}

function deletePlante(macAdress) {
  var firebase = require("firebase");
  
  var db = firebase.database();
  var refPlantes = db.ref("plantes");

  refPlantes.child(macAdress).remove();
}

function createNewRouter(newRouter) {
  var firebase = require("firebase");

  var db = firebase.database();
  var refPlantes = db.ref("routers");
  
  refPlantes.child(newRouter.mac).set(newRouter, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error)
    } else {
      // The write was successful...
      console.log("Write successful")
    }
  })
}

exports.createPlante = createNewPlante;
exports.updateWaterLevel = updateWaterLevel;
exports.updateLightLevel = updateLightLevel;
exports.updateSleepMode = updateSleepMode;
exports.deletePlante = deletePlante;
exports.createRouter = createNewRouter;