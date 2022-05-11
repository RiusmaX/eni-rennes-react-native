import React from 'react'
import { View } from 'react-native'
import Input from './Input'
import Button from '../Button'

const RegisterForm = ({ userData, setUserData, onSubmit }) => {
  return (
    <View>
      <Input
        icon='person'
        onChangeText={(text) => setUserData({ ...userData, username: text })}
        value={userData.username}
      />
      <Input
        icon='mail'
        onChangeText={(text) => setUserData({ ...userData, email: text })}
        value={userData.email}
      />
      <Input
        icon='lock-closed'
        secureTextEntry
        onChangeText={(text) => setUserData({ ...userData, password: text })}
        value={userData.password}
      />
      <Button title="S'inscrire" onPress={onSubmit} />
    </View>
  )
}

export default RegisterForm
