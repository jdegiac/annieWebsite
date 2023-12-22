import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

// Control the state of nav
const Navbar = () => {
  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }
  
  return (
    // Standard screen size nav container
    <div className='nav-container'>
      <h1 className='main-company-name'>The Well Being Club</h1>
      <ul className='nav-links'>
        <li>About</li> 
        <li>Services</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>FAQ</li>
      </ul>

      {/* Hidden on md and larger */}
      <div className="ham-menu-icon md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose/> :  <AiOutlineMenu />} 
      </div>
      
      {/* Pop out container, md and smaller */}
      <div className={!nav ? 'ham-container' : 'ham-container-hidden'} >
      <h1 className='ham-company-name'>The Well Being Club</h1>
        <ul className='ham-menu-links'>
          <li>About</li> 
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar

// Need to make hamburger menu hide when the page resizes