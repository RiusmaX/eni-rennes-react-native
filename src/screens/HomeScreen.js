import React from 'react'
import { View, Text } from 'react-native'
import Button from '../components/Button'
import { useAuth } from '../contexts/AuthContext'

const HomeScreen = () => {
  const { logout } = useAuth()
  return (
    <View>
      <Text>HOME SCREEN</Text>
      <Button title='Se déconnecter' onPress={logout} />
    </View>
  )
}

export default HomeScreen
