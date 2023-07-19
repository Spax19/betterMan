import React from 'react'
import './hero.css'
import Title from '../../title/title'
import Header from '../../header/header';


const Hero = () => {
  return (
    <div>

      <Header />

      <section className='hero'>

        <div className="container">
          <div className="row">

            <Title subtitle='WELCOME TO BETTER-MAN' title='THE BEST LEARNING PLATFORM ' />
            <br />
            <p>
              A non-governmental organization (NGO) dedicated to empowering 
              and developing our future stars. At Better-Man, we think that every child has 
              the potential to shine brightly in the world. Our purpose is to make the future a 
              better place by focusing on improving mental and educational skills, nurturing young 
              brains, 
              and cultivating a compassionate and inclusive community.
            </p>
            
            <div className="button">
              <button className='btnPrimary'>
                START 14-DAYS FREE TRIAL
              </button>
              <button>
                VIEW FREE COURSES
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Hero;
