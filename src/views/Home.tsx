import React from "react"
import AppShell from "../components/app-shell"
import Hamburger from "../components/hamburger"

const Home: React.FC = () => {
  return (
    <AppShell>
      <Hamburger />
      <div className="home-title-wrapper">
        <h1 className="home-title">Dune</h1>
        <h2 className="home-description">A Dune quote qenerator</h2>
      </div>
    </AppShell>
  )
}

export default Home
