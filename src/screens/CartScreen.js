import React from 'react'
import { View, Text } from 'react-native'
import CartList from '../components/list/CartList'
import Button from '../components/Button'
import { useCart } from '../contexts/CartContext'
import globalStyles from '../theme/Styles'

import styles from './styles/CartScreenStyle'

const CartScreen = () => {
  const { state: { cart, total } } = useCart()
  return (
    <View style={styles.container}>
      <Text style={globalStyles.heading}>Votre commande
      </Text>
      {
        cart.length === 0 && (
          <Text style={globalStyles.heading}>Votre panier est vide
          </Text>
        )
      }
      <View>
        <CartList
          cart={cart} footer={
          () => (
            <View style={styles.footer}>
              <View style={styles.priceContainer}>
                <Text style={styles.totalText}>Total : </Text>
                <Text style={styles.total}>{total.toFixed(2)} €</Text>
              </View>
              <Button title='Commander' />
            </View>
          )
        }
        />
      </View>
      {/* <Text>{JSON.stringify(cart)}</Text> */}
    </View>
  )
}

export default CartScreen
