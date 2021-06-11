import firebase from 'firebase/app'
export default dataManipulation = {
    getPuces : function (){
        return firebase.database().ref("plantes").get();
    },
    getPuceByMacAdress : function (macAdress){
        return firebase.database().ref("plantes").child(macAdress).get();
    },
    editSleepPuceByMacAdress : function (macAdress, sleep){
        var updates = {};
        updates['/plantes/'+macAdress+'/sleep'] = sleep;
        return firebase.database().ref().update(updates);
    },
    editPuceInfosByMacAdress : function(macAdress, infos){
        var updates = {};
        updates['/plantes/'+macAdress+'/criticalLowLL'] = parseInt(infos.flower.criticalLowLL);
        updates['/plantes/'+macAdress+'/criticalHighLL'] = parseInt(infos.flower.criticalHighLL);
        updates['/plantes/'+macAdress+'/criticalLowWL'] = parseInt(infos.flower.criticalLowWL);
        updates['/plantes/'+macAdress+'/criticalHighWL'] = parseInt(infos.flower.criticalHighWL);
        updates['/plantes/'+macAdress+'/sleep'] = infos.sleep;
        updates['/plantes/'+macAdress+'/nodeId'] = infos.NI;

        return firebase.database().ref().update(updates);
    }
}