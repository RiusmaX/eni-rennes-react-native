import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { getRestaurant } from '../services/Api'
import globalStyles from '../theme/Styles'
import LoadingScreen from './LoadingScreen'
import styles from './styles/RestaurantDetailsScreenStyle'

const IMAGE_URL = 'https://strapi.myidea.fr'

const RestaurantDetailsScreen = ({ route, navigation }) => {
  const [restaurant, setRestaurant] = useState(null)
  const { id } = route.params

  useEffect(() => {
    const getData = async () => {
      const result = await getRestaurant(id)
      setRestaurant(result)
    }
    getData()
  }, [])

  if (restaurant) {
    return (
      <ScrollView>
        <Text style={globalStyles.heading}>{restaurant.title}</Text>
        <Image style={styles.image} source={{ uri: `${IMAGE_URL}${restaurant.photos[0].url}` }} />
        <Text>{restaurant.description}</Text>
        <View>
          <Text>{`${restaurant.adresse?.adresse}, ${restaurant.adresse?.code_postal}, ${restaurant.adresse?.ville}`}</Text>
          <Text>{restaurant.adresse?.code_postal}</Text>
          <Text>{restaurant.adresse?.ville}</Text>
        </View>
      </ScrollView>
    )
  } else {
    return <LoadingScreen />
  }
}

export default RestaurantDetailsScreen
