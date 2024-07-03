import React from 'react';
import Headings from '../roots/Headings';

const ContactForm = () => {
  return (
    <div className='contact_form_warp'>
      <div className="container">
        <Headings title='Send Us ' spanhead='Get In Touch' highlighted='Messages'/>
        <form 
          action="https://formspree.io/f/xnnaqdnk" 
          method="POST"
          className='contact_form'
        >
          <div className='input_layer'>
            <input type="text" name="name" placeholder='Full Name' required/>
            <input type="tel" name="phone" placeholder='Phone number' required/>
          </div>
          <div className='input_layer'>
            <input type="email" name="email" required placeholder='Email Address' />
          </div>
          <textarea name="message" required placeholder='Message'></textarea>
          <div className="meass_btn">
            <button type="submit" className='form_btn'>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
