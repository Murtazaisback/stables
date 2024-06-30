import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav>
        <div className="warp_container">
            <div className="main_nav">

        
        <div className="logo">LOGO</div>
        <div className="menu_nav">
            <ul>
                <li><a href="/" className="active_a">Home</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="">Generate</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Contact us</a></li>
            </ul>
        </div>
        <div className="menu_btn">
            <a href="">Get Started</a>
            <FaArrowRight/>
        </div>
        </div>
        </div>
      </nav>
  )
}

export default Navbar
