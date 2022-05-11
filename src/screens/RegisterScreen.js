import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const RegisterScreen = ({ navigation }) => {
  return (
    <View>
      <Text>REGISTER SCREEN</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>J'ai déjà un compte</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterScreen
