import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './views/homeView/home'
import FlowerList from './views/flowerList/flowerList'
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="FlowerList" component={FlowerList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
