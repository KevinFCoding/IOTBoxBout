import React from 'react';
import {View, Text} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {styles} from './home.style'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Bienvenue sur Flower App</Text>
            <StatusBar style="auto" />
        </View>
    );
}