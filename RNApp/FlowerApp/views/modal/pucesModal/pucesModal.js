import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useRef, useState } from 'react';
import { View, Modal, Text, FlatList, Pressable } from 'react-native';
import { FAB } from 'react-native-paper';
import { styles } from './pucesModal.style';
import  Puce  from '../../../models/Puce'

export default function PucesModal(){
    const navigation = useNavigation();
    const mountedRef = useRef(true)
    const [pucesList, setPucesList] = useState([]);

    useEffect(() => {
        dataManipulation.getPuces().then(list => {
            let plist = [];
            list.forEach(c => {
                if(!c.hasChild("nodeId") || (c.hasChild("nodeId") && c.child("nodeId") == "")){
                    let puce = new Puce(c.child("nodeId").val(),c.child("mac").val(),c.child("sleep").val(),null);
                    plist.push(puce)
                }
            })
            setPucesList(plist);
        });
    },[])

    var PuceItem = function({puce}){
        return (
            <View style={styles.puceItem}>
                <Pressable onPress={() => {navigation.navigate("AddFlowerForm",{puce : puce})}} style={styles.pressable}>
                    <Text>Puce : {puce.NI} </Text>
                    <Text>Adresse Mac : {puce.MAC}</Text>
                </Pressable> 
            </View>
        )
    }
    const renderItem = ({ item }) => <PuceItem puce={item} />;

    
    return (
        <View style = {styles.modalContainer}>          
            <View style = {styles.modalSubContainer}>
                <Text style={styles.modalTitle}>Liste des puces disponibles</Text>
                {pucesList.length > 0 ? <FlatList style={styles.flatList} renderItem={renderItem} data={pucesList} keyExtractor={item => item.MAC}></FlatList> : <Text>Aucune Puce n'est disponible</Text>}
            </View>
        </View>
    )
}