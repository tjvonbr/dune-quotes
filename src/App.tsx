import React from "react"
import Home from "./views/Home"
import Login from "./views/Login"
import Register from "./views/Register"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./styles/main.scss"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
