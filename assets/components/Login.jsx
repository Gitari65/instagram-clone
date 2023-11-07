import React,{Component} from "react";

import { Button,TextInput,View } from "react-native";

import React from 'react'

import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
        }

    }
  render() {
    return (
        <View>
        <TextInput placeholder="Email" onChangeText={(email)=this.setState(email)} />
      <TextInput placeholder="Password" onChangeText={(password)=> this.setState(password)} secureTextEntry={true}/>    
        </View>
      
    )
  }
}

export default Login
