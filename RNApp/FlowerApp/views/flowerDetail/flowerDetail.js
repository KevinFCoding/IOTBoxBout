import React, { useState } from "react"
import { View, Text, Image, Switch, Pressable } from "react-native";
import { styles } from "./flowerDetails.style";

export default function FlowerDetails({route}) {
    const {plante} = route.params;
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Détails de la plante {plante.name}</Text>
            <View style={styles.blocInfo}>
                <Text>Puce associée : n°[PUCE MAC NUMBER]</Text>
                <View style={styles.info}><Text style={styles.infoTitle}>Niveau d'eau : </Text><Image></Image><Text>Niveau d'eau max : [NIV MAX]</Text></View>
                <View style={styles.info}><Text style={styles.infoTitle}>Temps au soleil : </Text><Image></Image><Text>Temps au soleil max : [NIV MAX]</Text></View>
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