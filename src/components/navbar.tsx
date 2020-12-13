import React from "react"
import { NavLink } from "react-router-dom"

interface BoolProps {
  visible: boolean,
}

const Navbar:React.FC<BoolProps> = ({ visible }) => {
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
        to="/login"
        className="nav-item"
        activeClassName="nav-item active" 
      >
        Login
      </NavLink>
    </nav>
  )
}

export default Navbar
