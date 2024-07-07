import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { img10, img11, img12, img13, img14, img15, img16, img17, img5, img7, img8, img9 } from '../../Assets';
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
import WW13 from "../../Assets/prompthero-prompt-f2756c4febc.webp"
import WW14 from "../../Assets/out-0 (1).png"

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
            <img src={WW1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW11} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW12} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={WW13} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    <a href='/Gallery' className='menu_btn p_btn'>community Gallery</a>
    </>
  )
}

export default MinGallery
