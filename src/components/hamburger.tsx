import React from "react"

type HamburgerProps = {
  visible: boolean,
  toggle: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Hamburger = ({ visible, toggle }: HamburgerProps) => {
  return (
    <div 
      className={visible ? "hamburger active" : "hamburger"} 
      onClick={toggle}
    >
      <div className="hamburger-bar" />
      <div className="hamburger-bar" />
      <div className="hamburger-bar" />
    </div>
  )
}

export default Hamburger
