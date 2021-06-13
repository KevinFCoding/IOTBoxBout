import firebase from 'firebase/app'
export default dataManipulation = {
    getPuces : function (){
        return firebase.database().ref("plants").get();
    },
    getPuceByMacAdress : function (macAdress){
        return firebase.database().ref("plants").child(macAdress).get();
    },
    editSleepPuceByMacAdress : function (macAdress, sleep){
        var updates = {};
        updates['/plants/'+macAdress+'/sleep'] = sleep;
        return firebase.database().ref().update(updates);
    },
    editPuceInfosByMacAdress : function(macAdress, infos){
        var updates = {};
        updates['/plants/'+macAdress+'/criticalLowLL'] = parseInt(infos.flower.criticalLowLL);
        updates['/plants/'+macAdress+'/criticalHighLL'] = parseInt(infos.flower.criticalHighLL);
        updates['/plants/'+macAdress+'/criticalLowWL'] = parseInt(infos.flower.criticalLowWL);
        updates['/plants/'+macAdress+'/criticalHighWL'] = parseInt(infos.flower.criticalHighWL);
        updates['/plants/'+macAdress+'/sleep'] = infos.sleep;
        updates['/plants/'+macAdress+'/nodeId'] = infos.NI;

        return firebase.database().ref().update(updates);
    }
}