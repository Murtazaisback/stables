import React from 'react'
import Header from '../components/Layout/Header'
import HowGenerate from "../components/HowGenerate/HowGenerate.jsx"
import WelcomeToAi from "../components/WelcomeToAi/WelcomeToAi.jsx"
import WhatProvide from "../components/WhatProvide/WhatProvide.jsx"
import Pricing from "../components/Pricing/Pricing.jsx"


const HonePage = () => {
  return (
    <div>
      <Header/>
      <HowGenerate/>
      <WelcomeToAi/>
      <WhatProvide/>
      <Pricing/>
    </div>
  )
}

export default HonePage
