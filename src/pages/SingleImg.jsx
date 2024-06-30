import React, { useEffect } from 'react';
import Navbar from '../components/Layout/Navbar'
import ImgContent from '../components/ImgContent/ImgContent.jsx'
import MainFooter from '../components/MainFooter/MainFooter.jsx'

const SingleImg = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <Navbar/>
      <ImgContent/>
      <MainFooter/>
    </div>
  )
}

export default SingleImg
