var databaseService = require("../services/database-service");
var NETWORK = require("../features/network");

function createFrameRemoteATCommandRequest(
    command,
    commandParameters,
    macAdress
) {
    var frameObj = { // AT Request to be sent
        type: NETWORK.C.FRAME_TYPE.REMOTE_AT_COMMAND_REQUEST,
        destination64: macAdress,
        command: command,
        commandParameter: commandParameters,
    }

    NETWORK.xbeeAPI.builder.write(frameObj);
}

function checkDatasFromFirebase(data) {
    // WATERLVL
    let waterLevel = parseInt(data.waterLevel);
    if (waterLevel < 20) {
        ledRed();
    } else if (waterLevel >= 20 && waterLevel < 50) {
        ledYellow();
    } else if (waterLevel >= 50 && waterLevel < 90) {
        ledGreen();
    } else if (waterLevel > 90) {
        ledBlue();
    }
}

//Led functions, should be upagradable by one big scalable function
function ledRed() {
    databaseService.getAllRouterNetworkId(function (routers) {
        routers.forEach((router) => {
            createFrameRemoteATCommandRequest("D0", [00], router.mac)
            createFrameRemoteATCommandRequest("D1", [00], router.mac)
            createFrameRemoteATCommandRequest("D2", [04], router.mac)
        })
    });

}

function ledYellow() {
    databaseService.getAllRouterNetworkId(function (routers) {
        routers.forEach((router) => {
            createFrameRemoteATCommandRequest("D0", [00], router.mac)
            createFrameRemoteATCommandRequest("D1", [04], router.mac)
            createFrameRemoteATCommandRequest("D2", [04], router.mac)
        })
    });

}

function ledGreen() {

    databaseService.getAllRouterNetworkId(function (routers) {
        routers.forEach((router) => {
            createFrameRemoteATCommandRequest("D0", [00], router.mac)
            createFrameRemoteATCommandRequest("D1", [04], router.mac)
            createFrameRemoteATCommandRequest("D2", [00], router.mac)
        })
    })

}

function ledBlue() {
    databaseService.getAllRouterNetworkId(function (routers) {

        routers.forEach((router) => {
            createFrameRemoteATCommandRequest("D0", [04], router.mac)
            createFrameRemoteATCommandRequest("D1", [00], router.mac)
            createFrameRemoteATCommandRequest("D2", [00], router.mac)
        })
    })
}



exports.createFrameRemoteATCommandRequest = createFrameRemoteATCommandRequest;
exports.checkDatasFromFirebase = checkDatasFromFirebase;