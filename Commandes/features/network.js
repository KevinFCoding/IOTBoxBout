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

function initNetwork() {


  let serialport = new SerialPort(SERIAL_PORT, {
    baudRate: parseInt(process.env.SERIAL_BAUDRATE) || 9600,
  }, function (err) {
    if (err) {
      return console.log('Error: ', err.message)
    }
  });

  serialport.pipe(xbeeAPI.parser);
  xbeeAPI.builder.pipe(serialport);

  // All frames parsed by the XBee will be emitted here

  xbeeAPI.parser.on("data", function (frame) {

    /*frame composition :
      {
        type: frame type ( AT COMMAND, REMOTE AT COMMAND etc... )
        remote64: network address on 64bit
        remote16: network address on 16bit 
        receiveOptions: -
        digitalSamples: Object containing digital data sent by connected pins (ex : { DIO2: 1, DIO3: 0})
        analogSamples: Object containing analog data sent by connected pins (ex : { AD0: 26, AD1: 331})
        numSamples : 1
      }
    */

    //TODO : register new device when a new connexion arrives

    if (C.FRAME_TYPE.ZIGBEE_RECEIVE_PACKET === frame.type) {
      console.log("C.FRAME_TYPE.ZIGBEE_RECEIVE_PACKET");
      if (frame.data != {}) {
        let dataReceived = String.fromCharCode.apply(null, frame.data);
        console.log(">> ZIGBEE_RECEIVE_PACKET >", dataReceived);
      }

    }

    if (C.FRAME_TYPE.NODE_IDENTIFICATION === frame.type) {
      console.log("NODE_IDENTIFICATION");

    } else if (C.FRAME_TYPE.ZIGBEE_IO_DATA_SAMPLE_RX === frame.type) {

      // Data received from different devices will send this frame
      console.log("ZIGBEE_IO_DATA_SAMPLE_RX");

      if (frame.analogSamples != {}) {

        //Water level data treatment (AD0 - D0)
        var waterLevelPercentage = (frame.analogSamples.AD0 / 12)
        console.log(waterLevelPercentage);
        // Sending treated data in database
        databaseService.updateWaterLevel(frame.remote64, parseInt(waterLevelPercentage));

        //Lightning data treatment (AD1 - D1)
        var lightLevelPercentage = (frame.analogSamples.AD1 / 12)
        // Sending treated data in database
        databaseService.updateLightLevel(frame.remote64, lightLevelPercentage);
      }
    } else {
      let dataReceived = String.fromCharCode.apply(null, frame.commandData)
    }

  });
}

exports.C = C;
exports.xbeeAPI = xbeeAPI;
exports.initNetwork = initNetwork;
