import React from "react"
import { View,Text, Pressable, Image } from "react-native";
import { itemStyles } from "./listItem.style";

export default function ListItem({title}) {
    return (
        <View style={itemStyles.container}>
            <Pressable style={itemStyles.pressable} onPress={()=>{console.log("tap")}}>
                <View style={itemStyles.subContainer}>
                   <Image style={itemStyles.img} source={{uri : "https://www.jardiner-malin.fr/wp-content/uploads/2019/10/massif-de-Petunia.jpg"}}/>
                    <View style={itemStyles.infos}>
                        <Text style={itemStyles.title}>Plante : {title}</Text> 
                        <View style={itemStyles.plantStatus}>
                            <Text>Etat : </Text>
                            <Image style={itemStyles.stateIcon} source={require( "../../assets/icons/drop_green.png")} />
                            <Image style={itemStyles.stateIcon} source={require("../../assets/icons/sun_green.png")} />
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}