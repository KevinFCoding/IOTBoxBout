import React, { useEffect, useState } from "react"
import { Text, View, FlatList  } from "react-native";
import { styles } from "./flowerList.style";
import ListItem from "./listItem";
import PucesModal from "../modal/pucesModal/pucesModal";
import Puce from "../../models/Puce";
import Flower from "../../models/Flower";
import dataManipulation from "../../dbConfig/dataManipulation";

export default function FlowerList() {
    
    const [flowerList, setFlowerList] = useState([]);

    // var firstPuceFlower = new Flower(20,50,10,6,10,5);
    // var firstPuce = new Puce("Puce 1","MAC Test 1", false,firstPuceFlower);

    // var secondPuceFlower = new Flower(40,10,0,6,10,5)
    // var secondPuce = new Puce("Puce 2","MAC Test 2", true,secondPuceFlower);

    // const flowerList = [firstPuce,secondPuce]
    useEffect(() => {
        dataManipulation.getPuces().then(list => {
            let flist = [];
            list.forEach(c => {
                let flower = new Flower(c.child("waterLevel").val(),0,0,c.child("lightLevel").val(),0,0);
                let puce = new Puce(c.child("nodeId").val(),c.child("mac").val(),c.child("sleep").val(),flower);
                flist.push(puce)
            })
            setFlowerList(flist);
        });
    },[])
    const renderItem = ({ item }) => <ListItem item={item} />;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des fleurs</Text>
            {flowerList.length > 0 ? <FlatList renderItem={renderItem} data={flowerList}></FlatList> : <Text>Loading...</Text>}
            <PucesModal></PucesModal>
        </View >
    )
}