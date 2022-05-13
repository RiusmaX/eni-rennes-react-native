import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useContext, createContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  RESET: 'RESET',
  REHYDRATE: 'REHYDRATE'
}

const initialState = {
  cart: [], // [{ plat, quantity }]
  total: 0
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.REHYDRATE:
      return {
        ...action.data.state
      }
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        // On recherche si le cart contient déjà le plat
        cart: state.cart.some(cartItem => cartItem.plat._id === action.data._id)
          // On Itère pour mettre à jour la quantité
          ? state.cart.map((cartItem) => {
            // On retrouve le plat à modifier
            // if (cartItem._id === action.data._id) {
            //   // On retourne le plat mit à jour dans le nouveau tableau
            //   return { ...cartItem, quantity: cartItem.quantity + 1 }
            // } else {
            //   return cartItem
            // }
            return cartItem.plat._id === action.data._id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          })
          : state.cart.concat([{ plat: action.data, quantity: 1 }]),
        total: state.cart.length > 0
          ? state.cart.reduce((prev, cur) => prev + (cur.plat.price * cur.quantity), action.data.price)
          : action.data.price
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        cart: state.cart.map(cartItem => {
          return cartItem.plat._id === action.data._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        }).filter(cartItem => cartItem.quantity > 0),
        total: state.cart.length > 0
          ? state.cart.reduce((prev, cur) => prev + (cur.plat.price * cur.quantity), -action.data.price)
          : action.data.price
      }
    case actionTypes.RESET:
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const ContextFactory = (dispatch) => ({
  addToCart: (item) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      data: item
    })
  },
  removeFromCart: (item) => {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      data: item
    })
  }
})

const persistAuth = async (state) => {
  try {
    await AsyncStorage.setItem('@cart', JSON.stringify(state))
  } catch (error) {
    console.error(error)
  }
}

const rehydrateAuth = async () => {
  try {
    const persistedState = await AsyncStorage.getItem('@cart')
    if (persistedState) {
      return JSON.parse(persistedState)
    } else {
      return null
    }
    // = return persistedState && JSON.parse(persistedState)
  } catch (error) {
    console.error(error)
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  useEffect(() => {
    const loadStoredState = async () => {
      const storedState = await rehydrateAuth()
      if (storedState) {
        dispatch({
          type: actionTypes.REHYDRATE,
          data: { state: storedState }
        })
      } else {
        dispatch({ type: actionTypes.RESET })
      }
    }
    loadStoredState()
  }, [])

  // Persistance de l'état d'authentification
  useEffect(() => {
    const save = async (state) => {
      await persistAuth(state)
    }
    save(state)
  }, [state])

  return <CartContext.Provider value={{ state, ...ContextFactory(dispatch) }}>{children}</CartContext.Provider>
}

const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside a CartProvider')
  return context
}

export {
  actionTypes,
  CartProvider,
  useCart
}
