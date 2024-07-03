import React from 'react'
import Header from '../components/Layout/Header'
import HowGenerate from "../components/HowGenerate/HowGenerate.jsx"
import WelcomeToAi from "../components/WelcomeToAi/WelcomeToAi.jsx"
import WhatProvide from "../components/WhatProvide/WhatProvide.jsx"
import Pricingblock from "../components/Pricing/Pricing.jsx"
import BlogSec from "../components/BlogSec/BlogSec.jsx"
import MainFooter from "../components/MainFooter/MainFooter.jsx"


const HonePage = () => {
  return (
    <div>
      <Header/>
      <HowGenerate/>
      <WelcomeToAi 
        title="Create Anything With " 
        spanhead="Welcome To Ai " 
        highlighted=" AI image Generator" 
        aboutContent="We denounce with righteous indignation and dislike men who are
              beguiled and demoralized by the charms of pleasure of the moment
              blinded desire that they cannot foresee and trouble"
              AboutList1="Save time Rapid AI-driven generation."
              AboutList2="No Outdates Continuous code documentation refresh."
              AboutList3="Consistency Consistent code documentation"
      />
      <WhatProvide/>
      <Pricingblock/>
      <BlogSec/>
      <MainFooter/>
    </div>
  )
}

export default HonePage
