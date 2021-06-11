function createNewPlant(newPlant) {
  var firebase = require("firebase");

  var db = firebase.database();
  var refPlants = db.ref("plantes");
  
  refPlants.child(newPlant.mac).set(newPlant, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error)
    } else {
      // The write was successful...
      console.log("Write successful")
    }
  })
}

function getPlant(macAddress) {
  var firebase = require("firebase");

  var db = firebase.database();
  var refPlants = db.ref("plantes");

  refPlants.child(macAddress).once('value')
    .then(function(snapshot) {
      console.log(snapshot.val())
  })
}

function getAllPlants() {
  var firebase = require("firebase");

  var db = firebase.database();
  var refPlants = db.ref("plantes");

  var result = [];

  refPlants.once('value')
  .then(function(snapshot) {
    Object.values(snapshot.val()).forEach(val => {
      result.push(val);
    });
 
    return result;
  })

}

function updateWaterLevel(macAddress, waterLevel) {
  var firebase = require("firebase");
  
  var db = firebase.database();
  var refPlants = db.ref("plantes");

  refPlants.child(macAddress).child('waterLevel').set(waterLevel, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error);
    } else {
      // The write was successful...
      console.log("WaterLevel update successful");
    }
  })
}

function updateLightLevel(macAddress, lightLevel) {
  var firebase = require("firebase");
  
  var db = firebase.database();
  var refPlants = db.ref("plantes");

  refPlants.child(macAddress).child('lightLevel').set(lightLevel, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error);
    } else {
      // The write was successful...
      console.log("LightLevel update successful");
    }
  })
}

function updateSleepMode(macAddress, sleep) {
  var firebase = require("firebase");
  
  var db = firebase.database();
  var refPlants = db.ref("plantes");

  refPlants.child(macAddress).child('sleep').set(sleep, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error);
    } else {
      // The write was successful...
      console.log("SleepMode update successful");
    }
  })
}

function deletePlant(macAddress) {
  var firebase = require("firebase");
  
  var db = firebase.database();
  var refPlants = db.ref("plantes");

  refPlants.child(macAddress).remove();
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
      result.push(val);
    });

    return result;
  })
}

exports.createPlant = createNewPlant;
exports.getPlant = getPlant;
exports.getAllPlants = getAllPlants;
exports.updateWaterLevel = updateWaterLevel;
exports.updateLightLevel = updateLightLevel;
exports.updateSleepMode = updateSleepMode;
exports.deletePlant = deletePlant;
exports.createRouter = createNewRouter;
exports.getAllRouterNetworkId = getAllRouterNetworkId;