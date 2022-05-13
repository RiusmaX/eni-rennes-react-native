import React from 'react'
import { Text, Pressable } from 'react-native'
import styles from './styles/ButtonStyle'

const CustomButton = (props) => {
  const { onPress, title = 'Save' } = props
  return (
    <Pressable
      android_ripple={{
        color: 'lightgrey'
      }}
      style={styles.button}
      onPress={onPress}
    >
      <Text textBreakStrategy='simple' style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton
