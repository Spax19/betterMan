import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Head from './head'
import './header.css'

const Header = () => {

  const [click, setClick] = useState(false);

  return (
    <div>
        <Head />

        <header>
            <nav className='flexDirection'>
              
                <ul className={click ? 'mediaScreen' : 'flexDirection'} onClick={() => setClick(false)}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                </ul>

                <div className='start'>
                  <div className="button">Get Certificate</div>
                </div>

                <button className='toggle' onClick={() => setClick(!click)}>
                  {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                </button>
            </nav>
        </header>
    </div>
  )
}

export default Header;