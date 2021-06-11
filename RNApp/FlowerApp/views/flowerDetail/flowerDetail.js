import React, { useEffect, useState } from "react"
import { View, Text, Image, Pressable } from "react-native";
import dataManipulation from "../../dbConfig/dataManipulation";
import Flower from "../../models/Flower";
import Puce from "../../models/Puce";
import { utils } from "../../utils";
import { styles } from "./flowerDetails.style";

export default function FlowerDetails({route}) {
    const {planteMAC} = route.params;
    const [checked, setChecked] = useState(false);
    const [flower, setFlower] = useState(null);

    useEffect(() => {
        dataManipulation.getPuceByMacAdress(planteMAC).then(f => {
            let fl = new Flower(f.child("waterLevel").val(),f.child("criticalHighWL").val(),f.child("criticalLowWL").val(),f.child("lightLevel").val(),f.child("criticalHighLL").val(),f.child("criticalLowLL").val());
            let puce = new Puce(f.child("nodeId").val(),f.child("mac").val(),f.child("sleep").val(),fl);
            setFlower(puce);
        });
    },[flower])

    if(flower != null){
        if(flower.sleep == true && checked == true){
        setChecked(false)
        }else if(flower.sleep == false && checked == false){
            setChecked(true)
        }
    }
    
    return (
        <>
            {flower != null ?
            <View style={styles.container}>
                <Text style={styles.title}>Détails de la plante {flower.NI}</Text>
                <View style={styles.blocInfo}>
                    <Text>Puce associée : n°{flower.MAC}</Text>
                    <View style={styles.info}><Text style={styles.infoTitle}>Niveau d'eau : </Text><Image source={utils.getWaterState(flower.flower)}></Image><Text>Niveau d'eau max : {flower.flower.criticalHighWL}</Text></View>
                    <View style={styles.info}><Text style={styles.infoTitle}>Temps au soleil : </Text><Image source={utils.getSunState(flower.flower)}></Image><Text>Temps au soleil max : {flower.flower.criticalHighLL}</Text></View>
                    <Pressable style={[styles.pressable,getStyle(checked)]} onPress={() => {dataManipulation.editSleepPuceByMacAdress(flower.MAC, !flower.sleep)}}>
                        <Image source={getWateringCanImg(checked)}></Image>
                        <Text>Mode arrosage { checked ? "Activé" :"Desactivé"}</Text>
                    </Pressable>
                </View>
            </View> : <Text>Chargement...</Text>}
        </>
    )
}
function getWateringCanImg(checked){
    if(checked){
        return require("../../assets/icons/watering_can_1.png");
    }else{
        return require("../../assets/icons/watering_can_2.png");
    }
}

function getStyle(checked){
    if(checked){
        return {
            backgroundColor: 'green',
        }
    }else{
        return {
            borderColor: 'grey',
            borderWidth: 0.5,
            backgroundColor: "#fff",
            elevation: 10
        }
    }
}