import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { img10, img11, img12, img13, img14, img15, img16, img17, img5, img7, img8, img9 } from '../../Assets';

const MinGallery = () => {
  return (
    <>
    <div className='min_gallery_box'>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, ]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img12} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img13} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img14} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img15} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img17} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img16} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    <a href='/Gallery' className='menu_btn p_btn'>community Gallery</a>
    </>
  )
}

export default MinGallery
