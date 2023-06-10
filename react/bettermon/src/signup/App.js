import React, { useState, useEffect } from 'react';
import { SignUp, LogIn, HomePage } from './pages/routes';
import {Routes, Route} from 'react-router-dom';

const App = () => {

 const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])
  

 
  return (
    <div>
      <Routes>
        <Route path={'/signup'} element={ <SignUp />} />
        <Route path={'/'} element={ <LogIn setToken={setToken}/>} />
        {token?<Route path={'/homepage'} element={ <HomePage token={token} />} />:""}

      </Routes>
     
      
    </div>
  )
}

export default App
