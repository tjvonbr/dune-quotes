import React, { useState } from "react"
import AppShell from "../components/app-shell"

type RegisterUser = {
  firstName: string,
  email: string,
  password: string
}

const Register: React.FC = () => {
  const [creds, setCreds] = useState({
    firstName: "",
    email: "",
    password: ""
  })

  return (
    <AppShell>
      <div className="center-wrapper">
        <h1 className="register-header">Register</h1>
        <form className="form-wrapper register">
          <div className="input-wrapper">
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input 
              className="input"
              id="firstName"
              type="text" 
            />
          </div>
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
              type="password" 
            />
          </div>
          <button className="button-register" type="submit">
            Register
          </button>
        </form>
        <p className="redirect">
          Already have an account? Login{" "}
            <a href="/login">here.</a>
        </p>
      </div>
    </AppShell>
  )
}

export default Register
