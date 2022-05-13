import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import RestaurantsScreen from '../screens/RestaurantsScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
// import CounterScreen from '../screens/CounterScreen'
import { useAuth } from '../contexts/AuthContext'
import LoadingScreen from '../screens/LoadingScreen'
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen'
import CartScreen from '../screens/CartScreen'
import { useCart } from '../contexts/CartContext'
import globalStyles from '../theme/Styles'

// On instancie la navigation par onglets
const TabNavigator = createBottomTabNavigator()

// On instancie la navigation empilée
const AuthNavigator = createNativeStackNavigator()

// Navigation dans la liste des restaurants
const RestaurantsNavigator = createNativeStackNavigator()

// Navigation dans l'authentification
const AuthNavigation = () => {
  return (
    <AuthNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthNavigator.Group>
        {/* <AuthNavigator.Screen name='Loading' component={LoadingScreen} /> */}
        <AuthNavigator.Screen name='Login' component={LoginScreen} />
        <AuthNavigator.Screen name='Register' component={RegisterScreen} />
      </AuthNavigator.Group>
    </AuthNavigator.Navigator>
  )
}

const RestaurantsNavigation = () => {
  const { state: { cart } } = useCart()
  const cartNbItems = cart.reduce((prev, cur) => prev + cur.quantity, 0)
  return (
    <RestaurantsNavigator.Navigator
      initialRouteName='RestaurantsList'
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <Icon.Button
            name='cart'
            size={25}
            backgroundColor='transparent'
            color='black'
            onPress={() => navigation.navigate('Cart')}
          >
            <View style={globalStyles.badge}>
              <Text style={globalStyles.badgeText}>{cartNbItems}</Text>
            </View>
          </Icon.Button>
        )
      })}
    >
      <RestaurantsNavigator.Group>
        <RestaurantsNavigator.Screen
          name='RestaurantsList'
          component={RestaurantsScreen}
          options={{
            title: 'Restaurants'
          }}
        />
        <RestaurantsNavigator.Screen
          options={{
            title: 'Chargement...'
          }}
          name='RestaurantDetails'
          component={RestaurantDetailsScreen}
        />
        <RestaurantsNavigator.Screen
          name='Cart'
          component={CartScreen}
          options={{
            headerRight: null
          }}
        />
      </RestaurantsNavigator.Group>
    </RestaurantsNavigator.Navigator>
  )
}

// On créé notre navigateur avec nos écrans
const MainNavigation = () => {
  return (
    <TabNavigator.Navigator
      initialRouteName='Restaurants'
      screenOptions={({ navigation, route }) => ({
        headerRight: () => (
          <Icon.Button
            name='cart'
            size={25}
            backgroundColor='transparent'
            color='black'
            onPress={() => navigation.navigate('Cart')}
          />
        ),
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
        <TabNavigator.Screen
          options={{
            headerShown: false
          }}
          name='Restaurants' component={RestaurantsNavigation}
        />
      </TabNavigator.Group>
      <TabNavigator.Group />
    </TabNavigator.Navigator>
  )
}

const Navigator = () => {
  const { state: { loading, user, token } } = useAuth()

  if (loading) {
    return <LoadingScreen />
  } else {
    return (user && token) ? <MainNavigation /> : <AuthNavigation />
  }

  // if (isLoggedIn) {
  //   return <MainNavigation />
  // } else {
  //   return <AuthNavigation />
  // }
}

// On exporte notre navigateur
export default Navigator
