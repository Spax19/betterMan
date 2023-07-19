import React from 'react';
import { useHistory, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './home.css';
import Login from './login';
import Register from './register';


const Main = () => {

    const history = useHistory();

    return (
      <div>
        <div className='main'>

          <h1>BETTER-MAN</h1>

          <p className='starting'>START LEARNING TODAY!</p>

          <p className='welcome'>
            Elevating Minds, Enriching Futures – Better-Man: Cultivating a generation of 
            empowered minds, equipped with knowledge, resilience, and compassion. 
            Together, we embrace diversity, spark curiosity, 
            and pave the way for a world where every young star thrives and leaves an indelible 
            mark on society.
          </p>

            <div className='button'>

                <button  className='welcomeBtn' onClick={() => history.push('/hero')}>
                    Get Started
                </button>

                <Router>
                    <Switch>
                        <Route path="/login">
                        <Login/>
                        </Route>
                        <Route path="/login">
                        <Login/>
                        </Route>
                        <Route path='/register' component={Register} />
                    </Switch>
                </Router>

            </div>
        </div>

      </div>
    );
  }
  
  export default Main;