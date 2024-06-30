import React from 'react'
import Navbar from '../components/Layout/Navbar'
import GallerHeader from '../components/GallerHeader/GallerHeader.jsx'
import GalleryGrid from '../components/GalleryGrid/GalleryGrid.jsx'

const GalleryPage = () => {
  return (
    <div>
        <Navbar/>
        <GallerHeader/>
        <GalleryGrid/>
    </div>
  )
}

export default GalleryPage
