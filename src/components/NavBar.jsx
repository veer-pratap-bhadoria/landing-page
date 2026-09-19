import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdOutlineDarkMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



function NavBar() {
  return (
    <nav className='nav-section'>
    <div className='nav-logo-wrapper'>
     <img src="/images/logo.svg" alt="" />
</div>
     <div className='middle-box'>
      <button className='menu-bttn'><HiOutlineMenuAlt4 /> 
      <div className='menu-text'>Menu</div>
     </button>

     <button className='dark-mode'><MdOutlineDarkMode />
     </button>
     <div className='length-counter'>0%</div>

     </div >
    <div className='right-portion'>
      <button className='profile-bttn'><CgProfile /></button>
      <button className='start-bttn'> <span>Get Started</span></button>
</div>
    </nav>
  )
}

export default NavBar