import React from 'react'
import Headings from '../roots/Headings'
import MinGallery from '../GalleryGrid/MinGallery.jsx'
import Blog from '../Layout/Blog';
import { demoimg1, demoimg2, demoimg3, img10, img6, img8 } from '../../Assets'


const BlogSec = () => {
  return (
    <div className='Blogs_sec'>
      <div className="container">
        <Headings title='Check Out what our community ' spanhead='News & Blog' highlighted='generating'/>
        <div className="Blogs-sec_warp">
        </div>
      </div>
          <MinGallery/>
    </div>
  )
}

export default BlogSec
