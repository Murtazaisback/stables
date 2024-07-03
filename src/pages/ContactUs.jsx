import React from 'react'
import Navbar from '../components/Layout/Navbar'
import GallerHeader from '../components/GallerHeader/GallerHeader'
import ContactCards from '../components/WelcomeToAi/ContactCards.jsx'
import ContactForm from '../components/ContactForm/ContactForm.jsx'
import MainFooter from '../components/MainFooter/MainFooter.jsx'

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
        <GallerHeader background="https://wpmunai.themesflat.co/wp-content/uploads/2023/09/Bg-8.webp" backgroundPosition="center bottom" title="Contact us" info="We'd love to hear from you! Whether you have questions, need support, or just want to share your feedback, our team is here to help."  />
        <ContactCards/>
        <ContactForm/>
        <MainFooter/>
      
    </div>
  )
}

export default ContactUs
