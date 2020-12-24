import React, { createContext, useState } from "react"
import { useHistory } from 'react-router-dom';
import axios from "axios";

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

    const currTime = new Date().getTime()
    console.log(currTime)
    return currTime / 1000 < authState.expiresAt
  }

  const login = async (credentials, ...props) => {
    return axios.post("http://localhost:3000/login", credentials)
      .then(res => {
        if (res.status === 200) {
          setAuthInfo(res.data)
          return res.data
        } else {
          return Promise.reject("Sorry, but we couldn't log you in!")
        }
      })
      .catch(err => {
        console.log(err)
      })
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
        login,
        logout
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
