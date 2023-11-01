import React from 'react'
import { View, Text,Button } from 'react-native'

export default function Landing() {
  return (
    <View style={{flex:1,justifyContent:'center',gap:'10px'}}>
      <Button title="Register" onPress={()=>navigation.navigate('Register')} />
        <Button title="Login" onPress={()=>navigation.navigate('Login')} />
    </View>
  )
}