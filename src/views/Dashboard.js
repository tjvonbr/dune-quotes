import React from "react"
import AppShell from "../components/app-shell"

const Dashboard = ({ quote }) => {
  return (
    <AppShell>
      <div>
        <p>{quote[0].quote}</p>
      </div>
    </AppShell>

  )
}

export default Dashboard
