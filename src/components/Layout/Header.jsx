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
import { img1, img2, img3, img4, img5, img6, img7, img8 } from "../../Assets";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './Navbar';
import WW1 from "../../Assets/prompthero-prompt-1ad017fe863.webp"
import WW2 from "../../Assets/prompthero-prompt-85aa11db8db.webp"
import WW3 from "../../Assets/prompthero-prompt-cd74ea1e7da.webp"
import WW4 from "../../Assets/prompthero-prompt-d174e659992.webp"
import WW5 from "../../Assets/prompthero-prompt-0e88cd72d7f.webp"
import WW6 from "../../Assets/prompthero-prompt-4b522f4594b.webp"
import WW7 from "../../Assets/prompthero-prompt-18ffd7c5013.webp"
import WW8 from "../../Assets/prompthero-prompt-69b096082f3.webp"
import WW9 from "../../Assets/prompthero-prompt-f572c9be3fa.webp"
import WW10 from "../../Assets/prompthero-prompt-17dca190cc3.webp"
import WW11 from "../../Assets/prompthero-prompt-3e95656a0e3.webp"
import WW12 from "../../Assets/prompthero-prompt-1088dafdaee.webp"


const Header = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
    
  return (
    <>
      <Navbar/>
      <div className="header">
        <div className="container">
            <div className="header_flex">
            <motion.div
                className="header_text"
                  >
                    <motion.span ref={ref}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      variants={variants}
                      transition={{ duration: 0.75 }} className="text_heading">Generate Online <br /> Artificial Intelligence</motion.span>
                    <motion.span ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ duration: 0.5 }} className="italc_heading">Text to Image</motion.span>
                    <p className="heading_p">Autocomplete faster than thought can save you time and help you ship products faster</p>
                    <div className="prompt_warp">
                    {/* <div className="input_prompt">
                        <div style={{display: "flex", alignItems: "center", gap: "10px" }}>

                        <IoBrushOutline/>
                        <input type="text" placeholder="Generate Creative image"  />
                        </div>
                    </div> */}
                        <a className="menu_btn" href='/Generate'>Generate
                            <FaArrowRight/>
                        </a>
                    {/* <div className="prompt_box">
                        <IoSettingsOutline size={32} className="prompt_box_gear"/>

                    </div> */}
                    </div>
                </motion.div>
            <div className="header_imgs">
            <Swiper
            slidesPerView={2}
            spaceBetween={20}
            direction="vertical"
            centeredSlides={true}
            loop={true}
            autoplay={{
            delay: 750,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay,]}
        className="mySwiper"
      >
        <SwiperSlide><img src={WW1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={WW2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={WW3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={WW4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={WW5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={WW6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={WW7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={WW8} alt="" /></SwiperSlide>
      </Swiper>
            <Swiper
            slidesPerView={2}
            spaceBetween={20}
            direction="vertical"
            centeredSlides={true}
            loop={true}
            autoplay={{
            delay: 500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay,]}
        className="mySwiper"
      >
        <SwiperSlide><img src={WW9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={WW10} alt="" /></SwiperSlide>
        <SwiperSlide><img src={WW11} alt="" /></SwiperSlide>
        <SwiperSlide><img src={WW12} alt="" /></SwiperSlide>
      </Swiper>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
