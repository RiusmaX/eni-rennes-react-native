import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RegisterForm from '../components/form/RegisterForm'
import { useAuth } from '../contexts/AuthContext'
import styles from './styles/LoginScreenStyle'
import globalStyles from '../theme/Styles'

const RegisterScreen = ({ navigation }) => {
  const { registerUser, logout, state: { error } } = useAuth()

  const [userData, setUserData] = useState({
    email: 'test1@123.fr',
    username: 'test123',
    password: 'testtest'
  })

  const handleSubmit = async () => {
    await registerUser(userData)
  }

  const handleBack = () => {
    logout()
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>Créer un compte</Text>
      <RegisterForm
        userData={userData}
        setUserData={setUserData}
        onSubmit={handleSubmit}
      />
      {error && <Text style={globalStyles.error}>Une erreur s'est produite</Text>}
      <TouchableOpacity onPress={handleBack}>
        <Text style={globalStyles.pressableLink}>J'ai déjà un compte</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterScreen
