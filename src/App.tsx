import React from "react"
import Home from "./views/Home"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./styles/main.scss"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
