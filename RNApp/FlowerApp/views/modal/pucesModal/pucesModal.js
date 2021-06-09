import React, { useState } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View, Modal, Text, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';
import { styles } from './pucesModal.style';

export default function PucesModal(){
    const pucesList = [
        {id : 0, name :"aaa"},
        {id : 1, name :"bbb"},
        {id : 2, name :"ccc"},
        {id : 3, name :"ddd"},
        {id : 4, name :"eee"},
        {id : 5, name :"fff"},
        {id : 6, name :"ggg"},
    ]
    var PuceItem = function(){
        return (
            <View style={styles.puceItem}>
                <Text>Puce : </Text>
            </View>
        )
    }
    const renderItem = ({ item }) => <PuceItem item={item} />;
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
                <TouchableOpacity activeOpacity={false} style = {styles.modalContainer} onPressOut={() => {setModalVisible(false)}}>
                    <TouchableWithoutFeedback>
                        <View style = {styles.modalSubContainer}>
                            <Text>Liste des puces disponibles</Text>
                            <FlatList renderItem={renderItem} data={pucesList} keyExtractor={item => item.id.toString()}></FlatList>
                            <FAB style={styles.floatButton} icon="close" label="Annuler" onPress={() => {setModalVisible(false)}}></FAB>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>
            <FAB color="black" onPress={() => {setModalVisible(true)}} style={styles.floatButton} icon="plus"></FAB>
        </View>
    )
}