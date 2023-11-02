import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View ,Button} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './assets/components/Landing';
import Register from './assets/components/Register';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  
}

