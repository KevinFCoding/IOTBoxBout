import React from 'react';
import {View, Text, Button} from 'react-native'
import {styles} from './home.style'
import CustomisableButton from '../../components/CustomisableButton/customisableButton'
export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Bienvenue sur Healthy Leaf</Text>
            <CustomisableButton title="Gérer les plantes"onPress={()=> navigation.navigate("FlowerList")}/>
        </View>
    );
}