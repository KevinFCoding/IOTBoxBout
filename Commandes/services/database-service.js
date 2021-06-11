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

function getPlante(macAdress) {
  var firebase = require("firebase");

  var db = firebase.database();
  var refPlantes = db.ref("plantes");

  refPlantes.child(macAdress).once('value')
    .then(function(snapshot) {
      console.log(snapshot.val())
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
  var refRouters = db.ref("routers");
  
  refRouters.child(newRouter.mac).set(newRouter, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error)
    } else {
      // The write was successful...
      console.log("Write successful")
    }
  })
}

function getAllRouterNetworkId() {
  var firebase = require("firebase");

  var db = firebase.database();
  var refRouters = db.ref("routers");

  var result = [];

  refRouters.once('value')
  .then(function(snapshot) {
    Object.values(snapshot.val()).forEach(val => {
      result.push(val.mac);
    });
  })

  return result;
}

exports.createPlante = createNewPlante;
exports.getPlante = getPlante;
exports.updateWaterLevel = updateWaterLevel;
exports.updateLightLevel = updateLightLevel;
exports.updateSleepMode = updateSleepMode;
exports.deletePlante = deletePlante;
exports.createRouter = createNewRouter;
exports.getAllRouterNetworkId = getAllRouterNetworkId;