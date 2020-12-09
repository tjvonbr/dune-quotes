import React from "react"
import { RouteComponentProps } from "react-router-dom"

interface BoolProps {
  history: string,
  visible: boolean,
}

const Navbar = ({ history, visible }: RouteComponentProps<BoolProps>) => {
  return (
    <nav className={visible ? "navbar active" : "navbar"}>
      <button 
        type="button"
        className="button-nav"
        onClick={() => history.push("/")}
      >
        Login
      </button>
    </nav>
  )
}

export default Navbar
