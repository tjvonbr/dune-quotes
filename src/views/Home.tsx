import React from "react"
import AppShell from "../components/app-shell"

const Home: React.FC = () => {
  return (
    <AppShell>
      <div className="home-title-wrapper">
        <div>
          <h1 className="home-title">Dune</h1>
          <h2 className="home-description">A Dune quote qenerator</h2>
        </div>
        <div className="home-purpose-wrapper">
          <p>
            Frank Herbert's Dune series is packed with
            timeless wisdom, and this quote generator finds the
            most prophetic bits of insight and imparts them onto
            your pysche.
          </p>
          <p>
            Learn lessons of leadership from Muad'Dib, lessons of trust
            and loyalty from Gurney Halleck and violence and courage 
            from Thurfir Hawwatt.
          </p>
          <p>
            With the release of Denis Villanueve's film adaptation
            postponed until 2021, the itergalctic void that is 2020
            needed to be occupied by something Dune-related.  This is it.
          </p>
        </div>
      </div>
    </AppShell>
  )
}

export default Home
