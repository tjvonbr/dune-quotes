import * as React from "react"
import Dashboard from "./views/Dashboard"
import Home from "./views/Home"
import Login from "./views/Login"
import Register from "./views/Register"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./styles/main.scss"

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App
