function Plante(
    nodeId, 
    mac,
    networkId,
    sleep,
    waterLevel,
    lightLevel,
) {
    return {
        nodeId: nodeId,
        mac: mac,
        networkId: networkId,
        sleep: sleep,
        waterLevel: waterLevel,
        lightLevel: lightLevel,    
    };
}

exports.Plante = Plante;

