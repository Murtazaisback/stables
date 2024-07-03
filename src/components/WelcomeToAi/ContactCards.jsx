import React from 'react'
import { MdEmail,MdWorkHistory } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";




const ContactCards = () => {
  return (
    <section className="about_cards_box">

    <div className="container">
      <div className="about_cards">
        <div className="contact_card">
            <div className="card_i">
                <MdEmail className='about_card_i'/>
            </div>
            <b>Email Address</b>
            <p>support@gmail.com</p>
        </div>
        <div className="contact_card">
            <div className="card_i">
                <FiPhoneCall className='about_card_i'/>
            </div>
            <b>Make A Call</b>
            <p>880 123 456 889+</p>
        </div>
        <div className="contact_card">
            <div className="card_i">
                <FaLocationDot className='about_card_i'/>
            </div>
            <b>Office Locations</b>
            <p>5 Main Street, c block xyz</p>
        </div>
        <div className="contact_card">
            <div className="card_i">
                <MdWorkHistory className='about_card_i'/>
            </div>
            <b>Working Hour</b>
            <p>Sunday-Monday 08am - 05 pm</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default ContactCards
