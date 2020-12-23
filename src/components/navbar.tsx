import * as React from "react"
import { AuthContext } from "../context/auth-provider"
import { NavLink } from "react-router-dom"

interface BoolProps {
  visible: boolean,
}

const Navbar:React.FC<BoolProps> = ({ visible }) => {
  const auth = React.useContext(AuthContext)

  return (
    <nav className={visible ? "navbar active" : "navbar"}>
      <NavLink 
        exact to="/"
        className="nav-item"
        activeClassName="nav-item active"
      >
        Home
      </NavLink>
      <NavLink 
        to={auth.isAuthenticated() ? "/logout" : "/login"}
        className="nav-item"
        activeClassName="nav-item active" 
      >
        {auth.isAuthenticated() ? "Logout" : "Login"}
      </NavLink>
    </nav>
  )
}

export default Navbar
