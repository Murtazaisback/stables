import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa6";
import { IoBrushOutline, IoSettingsOutline } from "react-icons/io5";
import { img1, img2, img3, img4 } from "../../Assets";


const Header = () => {
    
  return (
    <>
      <nav>
        <div className="warp_container">
            <div className="main_nav">

        
        <div className="logo">LOGO</div>
        <div className="menu_nav">
            <ul>
                <li><a href="" className="active_a">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Use Case</a></li>
                <li><a href="">Blog</a></li>
            </ul>
        </div>
        <div className="menu_btn">
            <a href="">Get Started</a>
            <FaArrowRight/>
        </div>
        </div>
        </div>
      </nav>
      <div className="header">
        <div className="container">
            <div className="header_flex">
                <div className="header_text">
                    <span className="text_heading">Generate Online <br /> Artificial Intelligence</span>
                    <span className="italc_heading">Text to Image</span>
                    <p className="heading_p">Autocomplete faster than thought can save you time and help you ship products faster</p>
                    <div className="prompt_warp">
                    <div className="input_prompt">
                        <div style={{display: "flex", alignItems: "center", gap: "10px" }}>

                        <IoBrushOutline/>
                        <input type="text" placeholder="Generate Creative image"  />
                        </div>
                        <button className="menu_btn">Generate
                            <FaArrowRight/>
                        </button>
                    </div>
                    <div className="prompt_box">
                        <IoSettingsOutline size={32} className="prompt_box_gear"/>

                    </div>
                    </div>
                </div>
            <div className="header_imgs">
            <Swiper
            slidesPerView={2}
            spaceBetween={20}
            direction="vertical"
            centeredSlides={true}
            loop={true}
            autoplay={{
            delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay,]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
      </Swiper>
            <Swiper
            slidesPerView={2}
            spaceBetween={20}
            direction="vertical"
            centeredSlides={true}
            loop={true}
            autoplay={{
            delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay,]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
      </Swiper>
            </div>
            </div>
        </div>
      </div>
      <div className="">dqwdqw</div>
    </>
  );
};

export default Header;
