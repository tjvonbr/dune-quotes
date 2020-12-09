import React, { useState } from "react"
import Hamburger from "./hamburger"
import Navbar from "./navbar"

type Props = {
  history: History,
  children: React.ReactChildren
}

const AppShell:React.FC<Props> = ({ history, children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleNavbar = () => {
    console.log(isVisible)
    setIsVisible(!isVisible)
  }

  return (
    <div className="app-shell">
      <Hamburger visible={isVisible} toggle={toggleNavbar} />
      <Navbar history={history} visible={isVisible} />
      {children}
    </div>
  )
}

export default AppShell
