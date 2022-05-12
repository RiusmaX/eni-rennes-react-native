import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import RestaurantsList from '../components/list/RestaurantsList'
import { getRestaurants } from '../services/Api'

const RestaurantsScreen = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getData = async () => {
      const result = await getRestaurants()
      setRestaurants(result)
    }
    getData()
  }, [])

  return (
    <View>
      <RestaurantsList restaurants={restaurants} />
    </View>
  )
}

export default RestaurantsScreen
