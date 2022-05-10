import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

const ClockFunction = ({ interval }) => {
  const [date, setDate] = useState(new Date())

  // Remplacement du componentDidMount + componentWillUnmount
  useEffect(() => {
    // componentDidMount
    const timer = setInterval(() => {
      tick()
    }, interval)

    // componentWillUnmount
    return () => {
      clearInterval(timer)
    }
  }, []) // [] = componentShouldUpdate

  const tick = () => {
    setDate(new Date())
  }

  return (
    <View>
      <Text>Il est : {date.toLocaleTimeString()}</Text>
    </View>
  )
}

export default ClockFunction
