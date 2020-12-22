import React, { createContext, useState } from "react"
import { useHistory } from 'react-router-dom';

const AuthContext = createContext()
const { Provider } = AuthContext

const AuthProvider = ({ children }) => {
  const history = useHistory()
  
  const token = JSON.parse(window.localStorage.getItem('token'))
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  const expiresAt = JSON.parse(window.localStorage.getItem('expiresAt'))

  const [authState, setAuthState] = useState({
    userInfo: userInfo ? userInfo : {},
    token,
    expiresAt
  })

  const setAuthInfo = ({ expiresAt, token, userInfo }) => {
    window.localStorage.setItem("token", JSON.stringify(token))
    window.localStorage.setItem("expiresAt", JSON.stringify(expiresAt))
    window.localStorage.setItem("userInfo", JSON.stringify(userInfo))

    setAuthState({
      token,
      userInfo,
      expiresAt
    })
  }

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) {
      return false
    }

    return new Date().getItem() / 1000 < authState.expiresAt
  }

  const logout = () => {
    window.localStorage.clear()
    setAuthState({
      token: null,
      expiresAt: null,
      userInfo: {}
    })
    history.push("/login")
  }

  return (
    <Provider
      value={{
        authState,
        setAuthInfo,
        isAuthenticated,
        logout
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
