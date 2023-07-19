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

            <Title subtitle='WELCOME TO BETTER-MAN' title='THE BEST LEARNING PLATFORM' />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat impedit dolor nam unde quam doloribus dicta dolorum, illo harum maiores sit repellendus corrupti voluptatem mollitia veritatis veniam minima dolore inventore.</p>
            
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
