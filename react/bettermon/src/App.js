import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/home/homepage';
import Hero from './components/home/hero/hero';
import Login from './components/home/login';
import Register from './components/home/register';

const App = () => {
  return (
    
      <Router>
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/hero' exact component={Hero} /> 
          <Route path='/login' exact component={Login} /> 
          <Route path='/register' exact component={Register} /> 
        </Switch>
      </Router>
    
  )
}

export default App;