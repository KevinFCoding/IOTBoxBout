import React from "react"
import { View,Text, Pressable, Image } from "react-native";
import { itemStyles } from "./listItem.style";
import { useNavigation } from '@react-navigation/native';
import {utils} from '../../utils'

export default function ListItem({item}) {
    const navigation = useNavigation()
    
    return (
        <View style={itemStyles.container}>
            <Pressable style={itemStyles.pressable} onPress={()=>{navigation.navigate("FlowerDetails", {planteMAC : item.MAC})}}>
                <View style={itemStyles.subContainer}>
                   <Image style={itemStyles.img} source={{uri : "https://www.jardiner-malin.fr/wp-content/uploads/2019/10/massif-de-Petunia.jpg"}}/>
                    <View style={itemStyles.infos}>
                        <Text style={itemStyles.title}>Plante : {item.NI}</Text> 
                        <View style={itemStyles.plantStatus}>
                            <Text>Etat : </Text>
                            <Image style={itemStyles.stateIcon} source={utils.getWaterState(item.flower)} />
                            <Image style={itemStyles.stateIcon} source={utils.getSunState(item.flower)} />
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}