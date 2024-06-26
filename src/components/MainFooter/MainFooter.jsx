import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const MainFooter = () => {
  return (
    <div className='Main_footer'>
      <div className="container">
        <div className="Main_footer_content">
            <div className="main_footer_text">
                <div className="logo">logo</div>
                <p>to notch you can find in world to notch  world to notch <br /> you can find in world</p>
                <div className='footer_mail'>infomunai@gmail.com</div>
            </div>
            <div className="main_footer_letter">
                <p className='letter_p'>Subscribe Our <span>Newsletter</span></p>
                <p>Get every single updates to subscribe our newsletter</p>
                <form action="" className='newsletter_email'>
                    <input type="email" placeholder='Email Address' />
                    <button type="submit" className='news_btn'>Subscribe <FaArrowRight/> </button>
                </form>
            </div>
        </div>
        <div className="copyright">
            <div className="ul_menu">
                <a href="">About Company</a>
                <a href="">Contact Us</a>
                <a href="">FAQs</a>
            </div>
            <div className="copy_right">Copyright @2023, MunAi All Rights Reserved</div>
        </div>
      </div>
    </div>
  )
}

export default MainFooter
