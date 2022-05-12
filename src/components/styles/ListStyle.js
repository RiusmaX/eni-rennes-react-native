import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  card: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    marginVertical: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
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
