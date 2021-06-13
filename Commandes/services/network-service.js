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
    console.log(data);
    let waterLevel = parseInt(data.waterLevel);
    if (waterLevel < data.criticalLowWL) {
        ledRed();
    } else if (waterLevel >= data.criticalLowWL && waterLevel < data.criticalHighWL) {
        ledGreen();
    } else if (waterLevel > data.criticalHighWL) {
        ledBlue();
    }

    // if (!data.sleep) {
    //     createFrameRemoteATCommandRequest("D8", [05], data.mac);
    // } else {
    //     createFrameRemoteATCommandRequest("D8", [04], data.mac);
    // }
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