import React, { useEffect, useState } from "react"
import axios from "axios"
import Dashboard from "./views/Dashboard.js"
import Home from "./views/Home"
import Login from "./views/Login"
import Register from "./views/Register"
import { BrowserRouter as Router, Route } from "react-router-dom"
import randomNum from "./utils/number-generator"
import "./styles/main.scss"

const App = () => {
  const [quote, setQuote] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/quotes")
    .then(res => {
      const { length } = res.data
      const id = randomNum(length)

      axios.get(`http://localhost:3000/quotes/${id}`)
        .then(res => {
          setQuote(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route 
        path="/dashboard" 
        render={props => <Dashboard quote={quote} />} 
      />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App
