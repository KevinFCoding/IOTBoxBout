import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Modal, Text, FlatList, Pressable } from 'react-native';
import { FAB } from 'react-native-paper';
import { styles } from './pucesModal.style';
import  Puce  from '../../../models/Puce'

export default function PucesModal(){
    const navigation = useNavigation();
    
    const pucesList = [
        new Puce("Puce 1","MAC TEST 1",true,null),
        new Puce ("Puce 2","PUCE 2 MAC TEST 2", true,null)
    ]
    var PuceItem = function({puce}){
        return (
            <View style={styles.puceItem}>
                <Pressable onPress={() => {setModalVisible(false),navigation.navigate("AddFlowerForm",{puce : puce})}} style={styles.pressable}>
                    <Text>Puce : {puce.NI} </Text>
                    <Text>Adresse Mac : {puce.MAC}</Text>
                </Pressable> 
            </View>
        )
    }
    const renderItem = ({ item }) => <PuceItem puce={item} />;
    const [modalVisible, setModalVisible] = useState(false);

    
    return (
        <View>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                console.log("Modal has been closed.");
                setModalVisible(false);
            }}>              
                <View style = {styles.modalSubContainer}>
                    <Text style={styles.modalTitle}>Liste des puces disponibles</Text>
                    <FlatList style={styles.flatList} renderItem={renderItem} data={pucesList} keyExtractor={item => item.MAC}></FlatList>
                    <FAB style={styles.floatButton} icon="close" label="Annuler" onPress={() => {setModalVisible(false)}}></FAB>
                </View>
            </Modal>
            <FAB color="black" onPress={() => {setModalVisible(true)}} style={styles.floatButton} icon="plus"></FAB>
        </View>
    )
}