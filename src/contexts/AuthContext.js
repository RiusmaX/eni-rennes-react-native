import React, { createContext, useReducer, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login, register } from '../services/Api'

const AuthContext = createContext()

const actionTypes = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  ERROR: 'ERROR',
  LOGOUT: 'LOGOUT',
  LOADING: 'LOADING'
}

const initialState = {
  token: null,
  user: null,
  error: null,
  loading: false
}

const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.REGISTER:
    case actionTypes.LOGIN:
      return {
        ...initialState, token: action.data.token, user: action.data.user
      }
    case actionTypes.ERROR:
      return {
        ...initialState, error: action.data.error
      }
    case actionTypes.LOGOUT:
      return initialState
    case actionTypes.LOADING:
      return {
        ...initialState, loading: true
      }
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const ContextFactory = (dispatch) => ({
  loginUser: async (credentials) => {
    try {
      const data = await login(credentials)
      if (data.user && data.jwt) {
        dispatch({
          type: actionTypes.LOGIN,
          data: { user: data.user, token: data.jwt }
        })
      }
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
        data: { error } // = { error: error }
      })
    }
  },
  registerUser: async (userData) => {
    try {
      const data = await register(userData)
      if (data.user && data.jwt) {
        dispatch({
          type: actionTypes.REGISTER,
          data: { user: data.user, token: data.jwt }
        })
      }
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
        data: { error } // = { error: error }
      })
    }
  },
  logout: () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  }
})

const persistAuth = async (state) => {
  try {
    await AsyncStorage.setItem('@auth', JSON.stringify(state))
  } catch (error) {
    console.error(error)
  }
}

const rehydrateAuth = async () => {
  try {
    const persistedState = await AsyncStorage.getItem('@auth')
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

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  // Récupération de l'état d'authenfication sauvegardé
  useEffect(() => {
    const loadStoredState = async () => {
      const storedState = await rehydrateAuth()
      if (storedState) {
        dispatch({
          type: actionTypes.LOGIN,
          data: { user: storedState.user, token: storedState.token }
        })
      }
    }
    loadStoredState()
  }, [])

  // Persistance de l'état d'authentification
  useEffect(() => {
    // On créé une méthode afin de sauvegarde le state en synchrone tout en ne bloquant pas le render()
    const save = async (state) => {
      // Enregistrement du state dans le AsyncStorage
      await persistAuth(state)
    }
    save(state)
  }, [state]) // On met [state] pour redéclencher le useEffect() dès que le state change

  // On envoie le dispatch() dans notre Factory afin que toutes les autres méthodes puissent l'utiliser
  return <AuthContext.Provider value={{ state, ...ContextFactory(dispatch) }}>{children}</AuthContext.Provider>
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

export {
  actionTypes,
  AuthProvider,
  useAuth
}
