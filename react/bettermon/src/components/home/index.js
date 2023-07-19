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

          <p>standard markup language for designed to be displayed in a web browser. 
            It is often technologies such as Cascading Style Sheets and scripting languages 
            such as Cascading Style Sheets and scripting
            </p>

            <div className='button'>

                <button  
                    className='signup'
                    onClick={() => history.push('/hero')}
                    >Get Started
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