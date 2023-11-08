import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View ,Button} from 'react-native';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './assets/components/Landing';
import Register from './assets/components/Register';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDzDo2ziayUdfIdx6p0VXfY9xRGyVrtsNM",
    authDomain: "formm-acb1c.firebaseapp.com",
    databaseURL: "https://formm-acb1c-default-rtdb.firebaseio.com",
    projectId: "formm-acb1c",
    storageBucket: "formm-acb1c.appspot.com",
    messagingSenderId: "856859093776",
    appId: "1:856859093776:web:637fcf1df16b5c18175395",
    measurementId: "G-K35H5RZG1D"
  };

  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
  }
const Stack = createStackNavigator();

import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loaded:false,
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(!user){
        this.setState({
          loggedIn:false,
          loaded:true,
        })
      }
  })

  }
  render() {
    const{loggedIn,loaded}=this.state;
    if(!loaded){
      return(
      <View style={{flex:1,justifyContent:'center'}}>
        <Text>Loading</Text>
        </View>);
    }
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
    
  }
}



export default App

