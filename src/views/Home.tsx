import React from "react"
import AppShell from "../components/app-shell"

const Home: React.FC = () => {
  return (
    <AppShell>
      <div className="home-wrapper">
        <h1 className="home-title">Dune</h1>
        <h2 className="home-description">A Dune quote qenerator</h2>
        <div className="home-intro-wrapper">
          <p>
            Samples of sage advice and timeless wisdom from the characterfrom Frank Herbert's sci-fi series, <i className="home-italic">Dune</i>.
          </p>
          <p>
            Insights into topics range from macro--politics, economics, strategy--to micro--courage, sacrifice, loyalty, and love.
          </p>
        </div>
        <div className="button-wrapper">
          <button className="button med">
            Enter
          </button>
        </div>
      </div>
    </AppShell>
  )
}

export default Home
