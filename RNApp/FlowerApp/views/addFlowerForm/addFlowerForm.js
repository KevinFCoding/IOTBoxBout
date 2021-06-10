import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react"
import { View, Text, TextInput } from "react-native";
import CustomisableButton from "../../components/CustomisableButton/customisableButton";
import { styles } from "./addFlowerForm.style";

export default function AddFlowerForm({route}){
    const {puce} = route.params
    const [plantName, setPlantName] = useState(null)
    const [plantWaterMax, setPlantWaterMax] = useState(0)
    const [plantSunMax, setPlantSunMax] = useState(0)
    const navigation = useNavigation();

    var plantInfos = {
        name : plantName,
        waterMax : plantWaterMax,
        sunMax : plantSunMax
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Connecter une plante à la puce {puce.name}</Text>
            <TextInput style={styles.field} onChangeText={text => {setPlantName(text)}} placeholder= "Nom de la plante"></TextInput>
            <TextInput style={styles.field} onChangeText={text => {setPlantWaterMax(text)}} placeholder= "Pourcentage d'eau maximum" keyboardType="numeric"></TextInput>
            <TextInput style={styles.field} onChangeText={text => {setPlantSunMax(text)}} placeholder= "Temps Maximum au soleil" keyboardType="numeric"></TextInput>
            <CustomisableButton title="Ajouter" onPress={() => {addPlant(plantInfos), navigation.navigate("FlowerList")}} styleOverride={styles.addButton}></CustomisableButton>
        </View>
    )
}

function addPlant(plantInfos){
    console.log("AJOUT D'UNE PLANTE");
    console.log(plantInfos);

    //Traitement de l'info
}