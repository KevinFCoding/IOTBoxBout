import firebase from 'firebase/app'
export default dataManipulation = {
    getPuces : function (){
        return firebase.database().ref("puces").get();
    },
    getPuceByMacAdress : function (macAdress){
        return firebase.database().ref("puces").child(macAdress).get();
    }
}