function createNewPlant(newPlant) {
  var firebase = require("firebase");

  var db = firebase.database();
  var refPlants = db.ref("plants");
  
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
  var refPlants = db.ref("plants");

  refPlants.child(macAddress).once('value')
    .then(function(snapshot) {
      console.log(snapshot.val())
  })
}

function getAllPlants() {
  var firebase = require("firebase");

  var db = firebase.database();
  var refPlants = db.ref("plants");

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
  var refPlants = db.ref("plants");
 if (isNaN(waterLevel))
 return
  refPlants.child(macAddress).child('waterLevel').set(parseInt(waterLevel), function(error) {
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
  var refPlants = db.ref("plants");
  if (isNaN(lightLevel))
  return
  refPlants.child(macAddress).child('lightLevel').set(parseInt(lightLevel), function(error) {
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
  var refPlants = db.ref("plants");

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
  var refPlants = db.ref("plants");

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

function getAllRouterNetworkId(callback) {
  var firebase = require("firebase");

  var db = firebase.database();
  var refRouters = db.ref("routers");

  var result = [];

  refRouters.once('value')
  .then(function(snapshot) {
    Object.values(snapshot.val()).forEach(val => {
      console.log(val)
      result.push(val);
    });
    callback(result);
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