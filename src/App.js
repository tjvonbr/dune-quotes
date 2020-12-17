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
    // Fetches 'random' quote from local storage
    const fetchQuote = () => {
      const quotes = JSON.parse(window.localStorage.getItem("quotes"))
      const id = randomNum(quotes.length)
      const quoteOfDay = quotes[id]
      setQuote(quoteOfDay)
    }

    // Checks to see if quotes are in local storage--appends if not
    const fetchAllQuotes = async () => {
      try {
        if (window.localStorage.getItem("quotes") !== null) {
          fetchQuote()
        } else {
          const res = await axios.get("http://localhost:3000/quotes")
          window.localStorage.setItem("quotes", JSON.stringify(res.data))
          fetchQuote()
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchAllQuotes()
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
