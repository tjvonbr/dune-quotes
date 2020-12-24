import * as React from "react"
import AppShell from "../components/app-shell"
import { AuthContext } from "../context/auth-provider"
import { RouteComponentProps } from "react-router-dom"

interface HomeProps extends RouteComponentProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Logout: React.FC<HomeProps> = ({ history }) => {
  const auth = React.useContext(AuthContext)
  const logout = auth.logout

  return (
    <AppShell>
      <div className="flex-column-center">
        <div className="logout-wrapper">
          <h1 className="logout-header">Are you sure you want to logout?</h1>
          <button 
            className="button-logout"
            onClick={() => {
              logout()
              history.push("/")
            }}
          >
            Log me out
          </button>
          <button 
            className="button-logout"
            onClick={() => history.replace("/dashboard")}
          >
            Take me back
          </button>
        </div>
      </div>
    </AppShell>
  )
}

export default Logout
