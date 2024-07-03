import React from 'react'
import Navbar from '../components/Layout/Navbar'
import GallerHeader from '../components/GallerHeader/GallerHeader.jsx'
import GalleryGrid from '../components/GalleryGrid/GalleryGrid.jsx'

const GalleryPage = () => {
  return (
    <div className='gallary_page_warp'>
        <Navbar/>
        <GallerHeader background="./Assets/opacity 2.png" backgroundPosition="top" showHeaderCover={true} postImgInfo={true} title="BrandName" info="The #1 website for NSFW image Generation. Search millions of AI images by tags like MOM, stepMom, huge boobs..." />
        <GalleryGrid/>
    </div>
  )
}

export default GalleryPage
