import React from "react"
import { View,Text, Pressable, Image } from "react-native";
import { itemStyles } from "./listItem.style";
import { useNavigation } from '@react-navigation/native';

export default function ListItem({item}) {
    const navigation = useNavigation()
    return (
        <View style={itemStyles.container}>
            <Pressable style={itemStyles.pressable} onPress={()=>{navigation.navigate("FlowerDetails")}}>
                <View style={itemStyles.subContainer}>
                   <Image style={itemStyles.img} source={{uri : "https://www.jardiner-malin.fr/wp-content/uploads/2019/10/massif-de-Petunia.jpg"}}/>
                    <View style={itemStyles.infos}>
                        <Text style={itemStyles.title}>Plante : {item.name}</Text> 
                        <View style={itemStyles.plantStatus}>
                            <Text>Etat : </Text>
                            <Image style={itemStyles.stateIcon} source={getWaterState(item.waterState)} />
                            <Image style={itemStyles.stateIcon} source={getSunState(item.sunState)} />
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

function getWaterState(state){
    switch(state){
        case "noWater":
            return require("../../assets/icons/drop_grey.png")
        case "noWaterSoon":
            return require("../../assets/icons/drop_orange.png")
        case "tooMuch":
            return require("../../assets/icons/drop_red.png")
        default:
            return require("../../assets/icons/drop_green.png")
    }
}

function getSunState(state){
    switch(state){
        case "tooMuch":
            return require("../../assets/icons/sun_red.png")
        case "noSun":
            return require("../../assets/icons/sun_grey.png")
        default:
            return require("../../assets/icons/sun_green.png")
    }
}