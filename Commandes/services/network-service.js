
function createFrameRemoteATCommandRequest(
        xbeeAPI,
        xbeeApiConstant,
        command,
        commandParameters,
        macAdress
    ){
    var frame_obj = { // AT Request to be sent
        type: xbeeApiConstant.FRAME_TYPE.REMOTE_AT_COMMAND_REQUEST,
        destination64: macAdress,
        command: command,
        commandParameter: commandParameters,
    }
    
    xbeeAPI.builder.write(frame_obj);
}

function sendNetworksDataToFirebase() {

}

//Led functions
function ledRed(){
    createFrameRemoteATCommandRequest(xbeeAPI, xbeeApiConstant, D2, [04])
}

function ledGreen(){

}

function ledYellow(){

}



exports.createFrameRemoteATCommandRequest = createFrameRemoteATCommandRequest;
exports.sendNetworksDataToFirebase = sendNetworksDataToFirebase;
