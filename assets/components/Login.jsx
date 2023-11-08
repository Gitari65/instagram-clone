import React,{Component} from "react";

import { Button,TextInput,View } from "react-native";

import React from 'react'

import React, { Component } from 'react'
import { firebase } from "@react-native-firebase/auth";

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            errors:[]
        }
        this.onSignIn=this.onSignIn.bind(this);

    }
    onSignUp(){
      const{email,password}=this.state;
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then((result)=>{
          console.log(result)
      }).catch((error)=>console.log(error)
      );


    }
  render() {
    return (
        <View>
        <TextInput placeholder="Email" onChangeText={(email)=this.setState(email)} />
      <TextInput placeholder="Password" onChangeText={(password)=> this.setState(password)} secureTextEntry={true}/>    
         <Button onPress={()=>this.onSignIn()} title="Sign In" />
         </View>
       

      
    )
  }
}

export default Login
