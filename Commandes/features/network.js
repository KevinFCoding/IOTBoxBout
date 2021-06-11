var databaseService = require("../services/database-service")
var SerialPort = require('serialport');
var xbee_api = require('xbee-api');
const { Router } = require("../models/Router");
var C = xbee_api.constants;
require('dotenv').config()

const SERIAL_PORT = process.env.SERIAL_PORT;

var xbeeAPI = new xbee_api.XBeeAPI({
  api_mode: 2 // API mode uses in XCTU for the coordinator
});

function initNetwork () {


  let serialport = new SerialPort(SERIAL_PORT, {
    baudRate: parseInt(process.env.SERIAL_BAUDRATE) || 9600,
  }, function (err) {
    if (err) {
      return console.log('Error: ', err.message)
    }
  });

  /*
  serialport.on("open", function (){
    var router = new Router("0013A20041A7133C");
    databaseService.createRouter(router)
  })
  */
 
  serialport.pipe(xbeeAPI.parser);
  xbeeAPI.builder.pipe(serialport);

  // All frames parsed by the XBee will be emitted here

  xbeeAPI.parser.on("data", function (frame) {

    /*frame composition :
      {
        type: type de la frame ( AT COMMAND ... )
        remote64: adresse network de la puce envoyant les données sur 64bit
        remote16: adresse network de la puce envoyant les données sur 16bit 
        receiveOptions: ?
        digitalSamples: Objet contenant les données des pins sous forme digitale (ex : { DIO2: 1, DIO3: 0})
        analogSamples: Objet contenant les données des pins sous forme digitale (ex : { AD0: 26, AD1: 331})
        numSamples : 1
      }
    */

    //register new device when a new connexion arrives

    //on packet received, dispatch event
    //let dataReceived = String.fromCharCode.apply(null, frame.data);
    if (C.FRAME_TYPE.ZIGBEE_RECEIVE_PACKET === frame.type) {
      console.log("C.FRAME_TYPE.ZIGBEE_RECEIVE_PACKET");
      let dataReceived = String.fromCharCode.apply(null, frame.data);
      console.log(">> ZIGBEE_RECEIVE_PACKET >", dataReceived);

    }

    if (C.FRAME_TYPE.NODE_IDENTIFICATION === frame.type) {
      // let dataReceived = String.fromCharCode.apply(null, frame.nodeIdentifier);
      console.log("NODE_IDENTIFICATION");

    } else if (C.FRAME_TYPE.ZIGBEE_IO_DATA_SAMPLE_RX === frame.type) {

      // Frame correspondant à la réception de donnée depuis les différents capteurs
      console.log("ZIGBEE_IO_DATA_SAMPLE_RX");

      //Traitement de la data niveau d'eau en pourcentage (AD0 - D0)
      var waterLevelPercentage = (frame.analogSamples.AD0 / 12)
      // Envoi de la data traitée dans la db
      databaseService.updateWaterLevel(frame.remote64, waterLevelPercentage);

      //Traitement de la data luminosité en pourcentage (AD1 - D1)
      var lightLevelPercentage = (frame.analogSamples.AD1 / 12)
      // Envoi de la donnée traitée dans la db
      databaseService.updateLightLevel(frame.remote64, lightLevelPercentage);

    } else {
      console.debug(frame);
      let dataReceived = String.fromCharCode.apply(null, frame.commandData)
      console.log(dataReceived);
    }

  });
}

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

exports.initNetwork = initNetwork;
