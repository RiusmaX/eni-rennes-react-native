import React from 'react'
import { View, Text } from 'react-native'
import Button from '../components/Button'
import { actionTypes, CounterProvider, useCounter } from '../contexts/CounterContext'

const CounterView = () => {
  // On récupère la valeur de notre état global
  const { state } = useCounter()

  return (
    <View>
      <Text>Valeur du compteur = {state.counter}</Text>
    </View>
  )
}

const CounterActions = () => {
  const { dispatch } = useCounter()

  const handlePlus = () => {
    // Appel de la méthode dispatch pour mettre à jour l'état global
    // On y ajoute le type d'action désiré
    dispatch({
      type: actionTypes.INCREMENT
    })
  }

  const handleMinus = () => {
    dispatch({
      type: actionTypes.DECREMENT
    })
  }

  return (
    <View>
      <Button title='-' onPress={handleMinus} />
      <Button title='+' onPress={handlePlus} />
    </View>
  )
}

const CounterScreen = () => {
  return (
    <View>
      <CounterProvider>
        <CounterView />
        <CounterActions />
      </CounterProvider>
    </View>
  )
}

export default CounterScreen
