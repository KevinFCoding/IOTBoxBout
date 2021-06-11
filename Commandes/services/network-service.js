var databaseService = require("../services/database-service");
var NETWORK = require("../features/network");

function createFrameRemoteATCommandRequest(
    command,
    commandParameters,
    macAdress
) {
    var frame_obj = { // AT Request to be sent
        type: NETWORK.C.FRAME_TYPE.REMOTE_AT_COMMAND_REQUEST,
        destination64: macAdress,
        command: command,
        commandParameter: commandParameters,
    }

    NETWORK.xbeeAPI.builder.write(frame_obj);
}

function checkDatasFromFirebase(data) {
    // WATERLVL
    let waterLevel = parseInt(data.waterLevel);
    console.log(waterLevel);
    if (waterLevel < 20 ) {
        ledRed();
        console.log("RED");
    } else if (waterLevel >= 20 && waterLevel < 50 ) {
        ledYellow();
        console.log("YELLOW");
    } else if (waterLevel >= 50 && waterLevel < 90 ) {
        console.log("GREEN");
        ledGreen();
    } else if (waterLevel > 90 ) {
        console.log("BLUE");
        ledBlue();
    }
}

//Led functions, should be upagradable by one big scalable function
function ledRed() {
    var routers = databaseService.getAllRouterNetworkId();
    console.log("WAT", routers);

    routers.forEach((router) => {
        createFrameRemoteATCommandRequest(D0, [00], router.mac)
        createFrameRemoteATCommandRequest(D1, [00], router.mac)
        createFrameRemoteATCommandRequest(D2, [04], router.mac)
    })

}

function ledGreen() {
    var routers = databaseService.getAllRouterNetworkId();

    routers.forEach((router) => {
        createFrameRemoteATCommandRequest(D0, [00], router.macAdress)
        createFrameRemoteATCommandRequest(D1, [04], router.macAdress)
        createFrameRemoteATCommandRequest(D2, [00], router.macAdress)
    })

}

function ledYellow() {
    var routers = databaseService.getAllRouterNetworkId();

    routers.forEach((router) => {
        createFrameRemoteATCommandRequest(D0, [00], router.macAdress)
        createFrameRemoteATCommandRequest(D1, [04], router.macAdress)
        createFrameRemoteATCommandRequest(D2, [04], router.macAdress)
    })

}

function ledBlue() {
    var routers = databaseService.getAllRouterNetworkId();

    routers.forEach((router) => {
        createFrameRemoteATCommandRequest(D0, [04], router.macAdress)
        createFrameRemoteATCommandRequest(D1, [00], router.macAdress)
        createFrameRemoteATCommandRequest(D2, [00], router.macAdress)
    })
}



exports.createFrameRemoteATCommandRequest = createFrameRemoteATCommandRequest;
exports.checkDatasFromFirebase = checkDatasFromFirebase;
