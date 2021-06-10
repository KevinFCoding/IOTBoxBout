import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View, Modal, Text, FlatList, Pressable } from 'react-native';
import { FAB } from 'react-native-paper';
import { styles } from './pucesModal.style';

export default function PucesModal(){
    const navigation = useNavigation();

    const pucesList = [
        {id : 0, name :"aaa"},
        {id : 1, name :"bbb"},
        {id : 2, name :"ccc"},
        {id : 3, name :"ddd"},
        {id : 4, name :"eee"},
        {id : 5, name :"fff"},
        {id : 6, name :"ggg"},
        {id : 7, name :"ggg"},
        {id : 8, name :"ggg"},
        {id : 9, name :"ggg"},
        {id : 10, name :"ggg"},
        {id : 11, name :"ggg"},
        {id : 12, name :"ggg"},
        {id : 13, name :"ggg"},
        {id : 14, name :"ggg"},
    ]
    var PuceItem = function({puce}){
        return (
            <View style={styles.puceItem}>
                <Pressable onPress={() => {setModalVisible(false),navigation.navigate("AddFlowerForm",{puce : puce})}} style={styles.pressable}>
                    <Text>Puce : {puce.name} </Text>
                    <Text>Adresse Mac : [ADRESSE MAC]</Text>
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
                    <FlatList style={styles.flatList} renderItem={renderItem} data={pucesList} keyExtractor={item => item.id.toString()}></FlatList>
                    <FAB style={styles.floatButton} icon="close" label="Annuler" onPress={() => {setModalVisible(false)}}></FAB>
                </View>
            </Modal>
            <FAB color="black" onPress={() => {setModalVisible(true)}} style={styles.floatButton} icon="plus"></FAB>
        </View>
    )
}