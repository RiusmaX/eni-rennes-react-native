import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Input from './Input'
import Button from '../Button'

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    identifier: '',
    password: ''
  })

  const handlePress = () => {
    console.log('Bouton pressé !')
  }

  return (
    <View>
      <Input
        icon='person'
        onChangeText={(text) => setCredentials({ ...credentials, identifier: text })}
        value={credentials.identifier}
      />
      <Input
        icon='lock-closed'
        secureTextEntry
        onChangeText={(text) => setCredentials({ ...credentials, password: text })}
        value={credentials.password}
      />
      <Button title='Se connecter' onPress={handlePress} />
      <View>
        <Text>{JSON.stringify(credentials, null, 2)}</Text>
      </View>
    </View>
  )
}

export default LoginForm
