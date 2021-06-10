import React from "react"
import { Text, View, FlatList  } from "react-native";
import { styles } from "./flowerList.style";
import ListItem from "./listItem";
import PucesModal from "../modal/pucesModal/pucesModal";
import Puce from "../../models/Puce";
import Flower from "../../models/Flower";

export default function FlowerList() {
    
    var firstPuceFlower = new Flower(20,50,10,6,10,5);
    var firstPuce = new Puce("Puce 1","MAC Test 1", false,firstPuceFlower);

    var secondPuceFlower = new Flower(40,10,0,6,10,5)
    var secondPuce = new Puce("Puce 2","MAC Test 2", true,secondPuceFlower);

    const flowerList = [firstPuce,secondPuce]
    console.log(flowerList)
    const renderItem = ({ item }) => <ListItem item={item} />;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des fleurs</Text>
            <FlatList renderItem={renderItem} data={flowerList} keyExtractor={item => item.MAC}></FlatList>
            <PucesModal></PucesModal>
        </View >
    )
}