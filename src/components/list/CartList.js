import React from 'react'
import { View, Text, Image, SafeAreaView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useCart } from '../../contexts/CartContext'
import styles from '../styles/CartListStyle'

const IMAGE_URL = 'https://strapi.myidea.fr'

const CartListItem = ({ item }) => {
  const { removeFromCart } = useCart()
  const { plat, quantity } = item
  return (
    <View style={styles.row}>
      <Image
        style={styles.image}
        source={{ uri: `${IMAGE_URL}${plat.photos[0]?.url}` }}
      />
      <View style={styles.col}>
        <Text style={styles.title}>{plat.nom}</Text>
        <Text>{plat.description}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.priceText}>{quantity}</Text>
        <Text style={styles.priceText}>{plat.price.toFixed(2)} €</Text>
        <Icon.Button name='trash' onPress={() => removeFromCart(plat)} />
      </View>
    </View>
  )
}

const CartList = ({ cart, footer }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={cart}
        keyExtractor={item => item.plat._id}
        renderItem={({ item }) => <CartListItem item={item} />}
        ListFooterComponent={footer}
      />
    </SafeAreaView>
  )
}

export default CartList
