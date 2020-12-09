import React, { useState } from "react"
import AppShell from "../components/app-shell"

type LoginUser = {
  email: string,
  password: string
}

const Login: React.FC = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: ""
  })

  return (
    <AppShell>
      <div className="center-wrapper">
        <h1 className="register-header">Login</h1>
        <form className="form-wrapper login">
          <div className="input-wrapper">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input 
              className="input"
              id="email"
              type="text" 
            />
          </div>
          <div className="input-wrapper">
            <label className="label" htmlFor="password">
                Password
            </label>
            <input 
              className="input"
              id="password"
              type="text" 
            />
          </div>
          <button className="button-register" type="submit">
            Login
          </button>
        </form>
        <p className="redirect">
          Don't have an account yet? Register{" "}
            <a href="/register">here.</a>
        </p>
      </div>
    </AppShell>
  )
}

export default Login
