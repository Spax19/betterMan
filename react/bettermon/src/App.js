import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/home/homepage';
import Hero from './components/home/hero/hero';
import Login from './components/home/login';
import Register from './components/home/register';

const App = () => {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>

      {(typeof data.members === 'undefined') ? (
        <p>Loading ....</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}

      <Router>
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/hero' exact component={Hero} /> 
          <Route path='/login' exact component={Login} /> 
          <Route path='/register' exact component={Register} /> 
        </Switch>
      </Router>
    </div>
    
  )
}

export default App;