import React, { useState } from 'react';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const isActive = (path) => {
      return location.pathname === path ? 'active_a' : '';
    };
    
  
  return (
    <nav>
      <div className="warp_container">
        <div className="main_nav">
          <div className="logo">LOGO</div>
          <div className={`menu_nav ${isOpen ? 'open' : ''}`}>
            <ul>
            <li><a href="/" className={isActive('/')}>Home</a></li>
              <li><a href="/Gallery" className={isActive('/Gallery')}>Gallery</a></li>
              <li><a href="/Generate" className={isActive('/Generate')}>Generate</a></li>
              <li><a href="/About" className={isActive('/About')}>About us</a></li>
              <li><a href="/Contact" className={isActive('/Contact')}>Contact us</a></li>
            </ul>
          </div>
          <div className="menu_btn">
            <a href="/Generate">Get Started</a>
            <FaArrowRight />
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
