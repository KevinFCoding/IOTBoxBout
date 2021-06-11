import React, { useEffect, useState } from "react"
import { Text, View, FlatList  } from "react-native";
import { styles } from "./flowerList.style";
import ListItem from "./listItem";
import PucesModal from "../modal/pucesModal/pucesModal";
import Puce from "../../models/Puce";
import Flower from "../../models/Flower";
import dataManipulation from "../../dbConfig/dataManipulation";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-paper";

export default function FlowerList() {
    
    const navigation = useNavigation();
    const [flowerList, setFlowerList] = useState([]);

    useEffect(() => {
        dataManipulation.getPuces().then(list => {
            let flist = [];
            list.forEach(c => {
                if(c.hasChild("nodeId") && c.child("nodeId") != ""){
                    let flower = new Flower(c.child("waterLevel").val(),c.child("criticalHighWL").val(),c.child("criticalLowWL").val(),c.child("lightLevel").val(),c.child("criticalHighLL").val(),c.child("criticalLowLL").val());
                    let puce = new Puce(c.child("nodeId").val(),c.child("mac").val(),c.child("sleep").val(),flower);
                    flist.push(puce)
                }
            })
            setFlowerList(flist);
        });
    },[flowerList])

    const renderItem = ({ item }) => <ListItem item={item} />;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des fleurs</Text>
            {flowerList.length > 0 ? <FlatList renderItem={renderItem} data={flowerList} keyExtractor={item => item.MAC}></FlatList> : <Text>Aucune plante n'est lié a une puce, appuyez sur le + pour lier une plante à une puce</Text>}
            <FAB color="black" onPress={() => {navigation.navigate("PuceModal")}} style={styles.floatButton} icon="plus"></FAB>
        </View >
    )
}