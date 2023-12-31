 import React, { Component } from 'react'
 import { Button, TextInput, View } from 'react-native';
  import * as firebase from 'firebase/app';
 

export class Register extends Component {
  constructor(props){

    super(props);
    this.state={
        name:'',
        email:'',
        password:'',
        errors:[]
        
    }
    this.onRegister=this.onRegister.bind(this);
  }
 
  onRegister() {
    const { email, password, name } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
        // Update state with the error, e.g., this.setState({ errors: [error.message] });
      });
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
      />      <TextInput 
placeholder="Email"
onChangeText={(password)=>this.setState({password})}
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