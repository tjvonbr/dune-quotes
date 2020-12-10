import React, { useState } from "react"
import Hamburger from "./hamburger"
import Navbar from "./navbar"

interface Props {
  children: React.ReactChild
}

const AppShell: React.FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleNavbar = () => {
    console.log(isVisible)
    setIsVisible(!isVisible)
  }

  return (
    <div className="app-shell">
      <Hamburger visible={isVisible} toggle={toggleNavbar} />
      <Navbar visible={isVisible} />
      {children}
    </div>
  )
}

export default AppShell
