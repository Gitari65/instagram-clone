import React from 'react'
import { View, Text,Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function Landing() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Button title="Register" onPress={()=>navigation.navigate('Register')} />
        <Button title="Login" onPress={()=>navigation.navigate('Login')} />
   
    </View>
  )
}
