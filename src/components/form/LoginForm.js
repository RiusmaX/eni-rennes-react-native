import React, { useState } from 'react'
import { View } from 'react-native'
import Input from './Input'

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    identifier: '',
    password: ''
  })

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
    </View>
  )
}

export default LoginForm
