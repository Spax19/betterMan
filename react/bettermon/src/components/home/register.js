import React from 'react';
import { useHistory, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Hero from './hero/hero';


const Register = () => {

    const history = useHistory();

    return (
      <div>

        <div>
          <h1>Signup page</h1>

          <button  
            className='signup'
            onClick={() => history.push('/hero')}>
            home
          </button>

          <Router>
              <Switch>
              <Route path="/hero">
              <Hero/>
            </Route>
              </Switch>
          </Router>
        </div>
        
      </div>
    );
  }
  
  export default Register;