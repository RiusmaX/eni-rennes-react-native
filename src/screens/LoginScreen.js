import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import globalStyles from '../theme/Styles'
import styles from './styles/LoginScreenStyle'

import LoginForm from '../components/form/LoginForm'
import { useAuth } from '../contexts/AuthContext'

// = props.navigation
const LoginScreen = ({ navigation }) => {
  // Extraction profonde (deep extraction)
  const { loginUser, state: { error } } = useAuth()

  const [credentials, setCredentials] = useState({
    identifier: 'tes5t@test.fr',
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
      {error && <Text style={globalStyles.error}>Identifiant ou mot de passe invalide</Text>}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={globalStyles.pressableLink}>Je n'ai pas de compte</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
