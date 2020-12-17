import React from "react"
import AppShell from "../components/app-shell"

const Dashboard = ({ quote }) => {
  return (
    <AppShell>
      <div>
        <p>{quote.quote}</p>
      </div>
    </AppShell>

  )
}

export default Dashboard
