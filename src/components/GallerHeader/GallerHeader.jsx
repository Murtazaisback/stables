import React from 'react'

const GallerHeader = ({background, backgroundPosition, showHeaderCover, postImgInfo, title, info  }) => {
  const headerStyle = {
    height: '80vh',
    background: `url(${background})`,
    backgroundPosition: backgroundPosition || 'center',
  };
  return (
    <>
    <div className='gallery_header' style={headerStyle}>
      <div className='gallery_header_content'>

        <h2>{title}</h2>
        <p className='search_p'>{info}</p>
        {postImgInfo && 
        
        <div className='post_img_info'>
        <a href="/Generate" className='blue_btn'>Generate image</a>
        

        </div>
        }
      </div>
      {showHeaderCover && <div className='header_cover'></div>}
    </div>

        </>
  )
}

export default GallerHeader
