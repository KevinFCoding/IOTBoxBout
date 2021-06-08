import React from "react"
import { View,Text } from "react-native";
import { itemStyles } from "./listItem.style";

export default function ListItem({title}) {
    return (
        <View style={itemStyles.container}>
            <Text>{title}</Text>
        </View>
    )
}