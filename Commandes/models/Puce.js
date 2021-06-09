function Puce(
    nodeId, 
    mac,
    sleep,
    waterLevel,
    lightLevel,
) {
    return {
        nodeId: nodeId,
        mac: mac,
        sleep: sleep,
        waterLevel: waterLevel,
        lightLevel: lightLevel,    
    };
}

exports.Puce = Puce;

