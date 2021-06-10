import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react"
import { View, Text, TextInput } from "react-native";
import CustomisableButton from "../../components/CustomisableButton/customisableButton";
import { styles } from "./addFlowerForm.style";
import Flower from '../../models/Flower'

export default function AddFlowerForm({route}){
    const {puce} = route.params
    const [plantName, setPlantName] = useState(null)
    const [plantWaterMin, setPlantWaterMin] = useState(0)
    const [plantWaterMax, setPlantWaterMax] = useState(0)
    const [plantSunMin, setPlantSunMin] = useState(0)
    const [plantSunMax, setPlantSunMax] = useState(0)
    const navigation = useNavigation();

    puce.NI = plantName;
    let flower = new Flower(0,plantWaterMax,plantWaterMin,0,plantSunMax,plantSunMin);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connecter une plante à la puce {puce.MAC}</Text>
            <TextInput style={styles.field} onChangeText={text => {setPlantName(text)}} placeholder= "Nom de la plante"></TextInput>
            <TextInput style={styles.field} onChangeText={text => {setPlantWaterMin(text)}} placeholder= "Pourcentage d'eau minimum" keyboardType="numeric"></TextInput>
            <TextInput style={styles.field} onChangeText={text => {setPlantWaterMax(text)}} placeholder= "Pourcentage d'eau maximum" keyboardType="numeric"></TextInput>
            <TextInput style={styles.field} onChangeText={text => {setPlantSunMin(text)}} placeholder= "Temps Minimum au soleil" keyboardType="numeric"></TextInput>
            <TextInput style={styles.field} onChangeText={text => {setPlantSunMax(text)}} placeholder= "Temps Maximum au soleil" keyboardType="numeric"></TextInput>
            <CustomisableButton title="Ajouter" onPress={() => {puce.flower = flower; addPlant(puce), navigation.navigate("FlowerList")}} styleOverride={styles.addButton}></CustomisableButton>
        </View>
    )
}

function addPlant(plantInfos){
    console.log("AJOUT D'UNE PLANTE");
    console.log(plantInfos);

    //Traitement de l'info
}