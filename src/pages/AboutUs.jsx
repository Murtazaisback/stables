import React from 'react'
import Navbar from '../components/Layout/Navbar'
import GallerHeader from '../components/GallerHeader/GallerHeader.jsx'
import WelcomeToAi from "../components/WelcomeToAi/WelcomeToAi.jsx"
import CardsInfo from "../components/WelcomeToAi/CardsInfo.jsx"
import WhatProvide from "../components/WhatProvide/WhatProvide.jsx"
import MainFooter from '../components/MainFooter/MainFooter.jsx'

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <GallerHeader background="https://wpmunai.themesflat.co/wp-content/uploads/2023/09/Bg-8.webp" backgroundPosition="center bottom" title="About us" info="Welcome to [Name], where cutting-edge AI meets artistic expression. Our platform is dedicated to providing a unique"  />
      <WelcomeToAi 
        title="Best Tool you Need to " 
        spanhead="Welcome To Ai " 
        highlighted=" Generate AI images"
        aboutContent="We leverage the power of state-of-the-art AI models to create high-quality, realistic images tailored to your preferences. By harnessing the capabilities of the Replicate API and advanced machine learning techniques, we ensure that each image is crafted to meet the highest standards of quality and customization." 
        AboutList1="Our AI generates realistic images that cater to your specific preferences."
        AboutList2="Enjoy a seamless and intuitive user experience designed for ease of use."
        AboutList3="We are dedicated to constantly enhancing our platform to meet your needs."
      />
      <CardsInfo/>
      <WhatProvide/>
      <MainFooter/>
      
    </div>
  )
}

export default AboutUs
