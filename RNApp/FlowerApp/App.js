import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/homeView/home'
import FlowerList from './views/flowerList/flowerList'
import firebase from 'firebase'
import { firebaseConfig } from './dbConfig/firebaseConf'

export default function App() {
  const Stack = createStackNavigator();

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }else{
    firebase.app()
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="FlowerList" component={FlowerList}/>
        <Stack.Screen name="FlowerDetails" component={FlowerList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
