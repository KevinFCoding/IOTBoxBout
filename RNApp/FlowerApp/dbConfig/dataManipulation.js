import firebase from 'firebase/app'
export default dataManipulation = {
    getPuces : function (){
        return firebase.database().ref("plantes").get();
    },
    getPuceByMacAdress : function (macAdress){
        return firebase.database().ref("plantes").child(macAdress).get();
    }
}