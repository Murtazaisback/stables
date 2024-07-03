import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { useUser, SignOutButton, UserButton } from '@clerk/clerk-react';

const MainFooter = () => {
  const { signedIn } = useUser(); // Use Clerk's useUser hook to get signedIn status

  return (
    <div className='Main_footer'>
      <div className="container">
        <div className="Main_footer_content">
          <div className="main_footer_text">
            <div className="logo">logo</div>
            <p>Our AI generates realistic images that cater to your specific preferences.</p>
            <div className='footer_mail'>infomunai@gmail.com</div>
          </div>
          <div className="main_footer_letter">
            <p className='letter_p'>Subscribe Our <span>Newsletter</span></p>
            <p>Get every single update by subscribing to our newsletter.</p>
            <form action="https://formspree.io/f/mjkbvwkn" method="POST" className='newsletter_email'>
              <input type="email" placeholder='Email Address' name="email"/>
              <button type="submit" className='news_btn'>Subscribe <FaArrowRight/> </button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <div className="ul_menu">
            <a href="/About">About Company</a>
            <a href="/Contact">Contact Us</a>
            <a href="/pricing">Pricing</a>
            <UserButton/>
          </div>
          <div className="copy_right">Copyright @2023, MunAi All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default MainFooter;
