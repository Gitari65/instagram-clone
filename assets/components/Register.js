import React, { Component } from 'react'
import { Button, TextInput, View } from 'react-native';
import {initializeApp,}from 'firebase/app';
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
export class Register extends Component {
  constructor(props){

    super(props);
    this.state={
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
        errors:[]
        
    }
    this.onRegister=this.onRegister.bind(this);
  }
 
 onRegister(){
    const {email,password,name}=this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((result)=>{
        console.log(result)
    }).catch((error)=>console.log(error)
    );
 }
    render() {
    return (
      <View>
      <TextInput 
placeholder="Name"
onChangeText={(name)=>this.setState({name})}
      />
           <TextInput 
placeholder="Email"
onChangeText={(email)=>this.setState({email})}
      />
           <TextInput 
placeholder="Password"
onChangeText={(password)=>this.setState({password})}
secureTextEntry={true}

      />
      <Button
        title="Register"
        onPress={()=>this.onRegister()}
        />
      </View>
      
    )
  }
}

export default Register;