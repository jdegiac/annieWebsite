import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div>
      <div className='hero-container'>
        {/* First row text */}
        <p className='hero-big-text'>YOUR PATH TO TOTAL WELL-BEING</p>
        
        {/* Second row text */}
        <h1 className='hero-second-text'>Starts here</h1>
        
        {/* Tyoed row text */}
        <div className='hero-typed-row'>
          <p className='hero-typed-row-first'>Your recipe for: </p>
          <Typed 
            className='hero-typed-text'
            strings={['HEALTH','HAPPINESS', 'FITNESS', 'LIFE']} 
            typeSpeed={120} 
            backSpeed={140}
            loop />
        </div>
        {/* <p className='hero-CTA'>Unlock a healthier you. Schedule a consult now!</p> */}
        <button className="CTA-button">Book a consult</button>
      </div>
    </div>
  )
}

export default Hero