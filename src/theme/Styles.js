import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 35
  },
  pressableLink: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 25
  },
  error: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red'
  },
  badge: {
    // padding: 5,
    position: 'absolute',
    right: 5,
    bottom: 2
  },
  badgeText: {
    textAlign: 'center',
    paddingHorizontal: 0,
    backgroundColor: 'red',
    height: 18,
    minWidth: 0,
    width: 18,
    borderRadius: 9,
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold'
  }
})
