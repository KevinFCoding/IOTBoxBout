import React, { useState } from "react"
import { View, Text, Image, Switch, Pressable } from "react-native";
import { utils } from "../../utils";
import { styles } from "./flowerDetails.style";

export default function FlowerDetails({route}) {
    const {plante} = route.params;
    const [checked, setChecked] = useState(false);
    if(plante.sleep == true && checked == true){
        setChecked(false)
    }else if(plante.sleep == false && checked == false){
        setChecked(true)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détails de la plante {plante.NI}</Text>
            <View style={styles.blocInfo}>
                <Text>Puce associée : n°{plante.MAC}</Text>
                <View style={styles.info}><Text style={styles.infoTitle}>Niveau d'eau : </Text><Image source={utils.getWaterState(plante.flower)}></Image><Text>Niveau d'eau max : {plante.flower.criticalHighWL}</Text></View>
                <View style={styles.info}><Text style={styles.infoTitle}>Temps au soleil : </Text><Image source={utils.getSunState(plante.flower)}></Image><Text>Temps au soleil max : {plante.flower.criticalHighLL}</Text></View>
                <Pressable style={[styles.pressable,getStyle(checked)]} onPress={() => setChecked(!checked)}>
                    <Image source={getWateringCanImg(checked)}></Image>
                    <Text>Mode arrosage { checked ? "Activé" :"Desactivé"}</Text>
                </Pressable>
            </View>
        </View>
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