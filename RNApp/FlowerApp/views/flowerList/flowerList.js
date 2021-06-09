import React from "react"
import { Text, View, FlatList  } from "react-native";
import { styles } from "./flowerList.style";
import ListItem from "./listItem";
import { FAB } from 'react-native-paper';

export default function FlowerList() {
    const flowerList = [
        {id : 0, name :"aaa", sunState: "good", waterState: "noWater"},
        {id : 1, name :"bbb", sunState: "tooMuch", waterState: "noWaterSoon"},
        {id : 2, name :"ccc", sunState: "noSun", waterState: "noWaterSoon"},
        {id : 3, name :"ddd", sunState: "tooMuch", waterState: "tooMuch"},
        {id : 4, name :"eee", sunState: "noSun", waterState: "good"},
        {id : 5, name :"fff", sunState: "tooMuch", waterState: "good"},
        {id : 6, name :"ggg", sunState: "tooMuch", waterState: "noWater"},
        {id : 7, name :"hhh", sunState: "noSun", waterState: "noWaterSoon"},
        {id : 8, name :"iii", sunState: "noSun", waterState: "tooMuch"},
        {id : 9, name :"jjj", sunState: "good", waterState: "tooMuch"},
        {id : 10, name :"kkk", sunState: "tooMuch", waterState: "noWater"}
    ]
    const renderItem = ({ item }) => <ListItem item={item} />;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des fleurs</Text>
            <FlatList renderItem={renderItem} data={flowerList} keyExtractor={item => item.id.toString()}></FlatList>
            <FAB color="black" style={styles.addButton} icon="plus"></FAB>
        </View >
    )
}