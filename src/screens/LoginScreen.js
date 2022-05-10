import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../theme/Styles'
import styles from './styles/LoginScreenStyle'

import LoginForm from '../components/form/LoginForm'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>Se connecter</Text>
      <LoginForm />
    </View>
  )
}

export default LoginScreen
