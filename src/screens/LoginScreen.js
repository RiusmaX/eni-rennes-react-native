import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import globalStyles from '../theme/Styles'
import styles from './styles/LoginScreenStyle'

import LoginForm from '../components/form/LoginForm'
import { useAuth } from '../contexts/AuthContext'

const LoginScreen = ({ navigation }) => {
  const { loginUser } = useAuth()

  const [credentials, setCredentials] = useState({
    identifier: 'test@test.fr',
    password: 'testtest'
  })

  const handleSubmit = async () => {
    await loginUser(credentials)
  }

  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>Se connecter</Text>
      <LoginForm
        credentials={credentials}
        setCredentials={setCredentials}
        onSubmit={handleSubmit}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Je n'ai pas de compte</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
