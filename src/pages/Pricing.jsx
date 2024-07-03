import React from 'react'
import Navbar from '../components/Layout/Navbar'
import GallerHeader from '../components/GallerHeader/GallerHeader'
import Pricingblock from '../components/Pricing/Pricing'
import MainFooter from '../components/MainFooter/MainFooter'

const Pricing = () => {
  return (
    <div>
      <Navbar/>
      <GallerHeader background="https://wpmunai.themesflat.co/wp-content/uploads/2023/09/Bg-8.webp" backgroundPosition="center bottom" title="Pricing" info="At [Name], we believe in providing powerful AI image generation tools that are accessible to everyone."  />
      <div className='Pricingblock_warp'>

      <Pricingblock/>
      </div>
      <MainFooter/>
    </div>
  )
}

export default Pricing
