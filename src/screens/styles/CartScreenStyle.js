import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: '100%'
  },
  image: {
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  footer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 100
    // position: 'absolute',
    // bottom: 0
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25
  },
  totalText: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'space-between'
  },
  total: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'space-between',
    color: 'green'
  }
})
