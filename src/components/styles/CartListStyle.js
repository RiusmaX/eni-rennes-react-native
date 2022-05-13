import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  col: {
    flexDirection: 'column',
    flex: 4,
    marginLeft: 10,
    justifyContent: 'center',
    borderRightWidth: 1
  },
  price: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    height: '100%',
    width: 50,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5
  }
})
