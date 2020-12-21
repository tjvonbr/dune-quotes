import React from "react"
import AppShell from "../components/app-shell"
import Toolbar from "../components/toolbar.js"

const Dashboard = ({ quote }) => {
  return (
    <AppShell>
      <div className="flex-column-center">
        <div className="dash-content-wrapper">
          <div className="dash-quote-wrapper">
            <p className="dash-quote">
              {`"${quote.quote}"`}
            </p>
          </div>
          <Toolbar />
        </div>
      </div>
    </AppShell>
  )
}

export default Dashboard
