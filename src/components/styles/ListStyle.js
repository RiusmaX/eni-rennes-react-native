import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    width: '90%',
    height: 250,
    // borderWidth: 1,
    alignSelf: 'center',
    marginVertical: 15,
    padding: 10,
    elevation: 3,
    borderRadius: 5
  },
  image: {
    height: 160
    // resizeMode: 'contain'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5
  }
})
