import React from 'react'
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../styles/ListStyle'

const IMAGE_URL = 'https://strapi.myidea.fr'

const RestaurantListItem = ({ item }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('RestaurantDetails', { id: item._id })}
    >
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: `${IMAGE_URL}${item.photos[0].url}` }}
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description.substring(0, 80) + '...'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const RestaurantsList = ({ restaurants }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={restaurants}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <RestaurantListItem item={item} />}
      />
    </SafeAreaView>
  )
}

export default RestaurantsList
