import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  textInputContainer: {
    flex: 0,
    flexDirection: 'row',
    margin: 12,
    borderWidth: 1,
    borderRadius: 5
  },
  iconContainer: {
    flex: 1,
    borderRightWidth: 1,
    marginRight: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  textInput: {
    flex: 6,
    // height: 40,
    padding: 10,
    fontSize: 16
  }
})
