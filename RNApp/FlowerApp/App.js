import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/homeView/home'
import FlowerList from './views/flowerList/flowerList'
import firebase from 'firebase'
import { firebaseConfig } from './dbConfig/firebaseConf'
import FlowerDetails from './views/flowerDetail/flowerDetail';
import AddFlowerForm from './views/addFlowerForm/addFlowerForm';
import PucesModal from './views/modal/pucesModal/pucesModal';

export default function App() {
  const Stack = createStackNavigator();

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }else{
    firebase.app()
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Healthy Leaf' }} component={Home}/>
        <Stack.Screen name="FlowerList" options={{ title: 'Healthy Leaf' }} component={FlowerList}/>
        <Stack.Screen name="FlowerDetails" options={{ title: 'Détails' }} component={FlowerDetails}/>
        <Stack.Screen name="PuceModal" options={{ title: '' }} component={PucesModal}/>
        <Stack.Screen name="AddFlowerForm" options={{ title: 'Ajouter une plante' }} component={AddFlowerForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
