import React from "react"
import { Text, View, SafeAreaView, FlatList  } from "react-native";
import { styles } from "./flowerList.style";
import ListItem from "./listItem";

export default function FlowerList() {
    const flowerList = [
        {id : 0, name :"aaa"},{id : 1, name :"bbb"},{id : 2, name :"ccc"},
        {id : 3, name :"ddd"},{id : 4, name :"eee"},{id : 5, name :"fff"},
        {id : 6, name :"ggg"},{id : 7, name :"hhh"},{id : 8, name :"iii"},
        {id : 9, name :"jjj"},{id : 10, name :"kkk"},{id : 11, name :"lll"}
    ]
    const renderItem = ({ item }) => <ListItem title={item.name} />;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des fleurs</Text>
            <FlatList renderItem={renderItem} data={flowerList} keyExtractor={item => item.id.toString()}></FlatList>
        </View >
    )
}