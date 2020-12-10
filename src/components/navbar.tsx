import React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"

interface BoolProps extends RouteComponentProps {
  visible: boolean,
}

const Navbar:React.FC<BoolProps> = ({ history, visible }) => {
  return (
    <nav className={visible ? "navbar active" : "navbar"}>
      <button 
        type="button"
        className="button-nav"
        onClick={() => history.push("/login")}
      >
        Login
      </button>
    </nav>
  )
}

export default withRouter(Navbar)
