import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import RestaurantsScreen from '../screens/RestaurantsScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

// On instancie la navigation par onglets
const TabNavigator = createBottomTabNavigator()

// On instancie la navigation empilée
const AuthNavigator = createNativeStackNavigator()

const AuthNavigation = () => {
  return (
    <AuthNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthNavigator.Group>
        <AuthNavigator.Screen name='Login' component={LoginScreen} />
        <AuthNavigator.Screen name='Register' component={RegisterScreen} />
      </AuthNavigator.Group>
    </AuthNavigator.Navigator>
  )
}

// On créé notre navigateur avec nos écrans
const MainNavigation = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline'
              break
            case 'Restaurants':
              iconName = focused ? 'restaurant' : 'restaurant-outline'
              break
            default:
              break
          }
          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey'
      })}
    >
      <TabNavigator.Group>
        <TabNavigator.Screen name='Home' component={HomeScreen} />
        <TabNavigator.Screen name='Restaurants' component={RestaurantsScreen} />
      </TabNavigator.Group>
    </TabNavigator.Navigator>
  )
}

const Navigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />

  // if (isLoggedIn) {
  //   return <MainNavigation />
  // } else {
  //   return <AuthNavigation />
  // }
}

// On exporte notre navigateur
export default Navigator
