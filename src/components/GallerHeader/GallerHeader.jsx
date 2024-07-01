import React from 'react'

const GallerHeader = () => {
  return (
    <>
    <div className='gallery_header'>
      <div className='gallery_header_content'>

        <h2>BrandName</h2>
        <p className='search_p'>The #1 website for NSFW image Generation. Search millions of AI images by tags like MOM, stepMom, huge boobs...</p>
        <div className='post_img_info'>
        <div className='Search_box'>
            <input type="text" placeholder='Search NSFW images' />
            <button type="submit" className=''>Search</button>
        </div>
        

        </div>
      </div>
        <div className='header_cover'></div>
    </div>

        </>
  )
}

export default GallerHeader
