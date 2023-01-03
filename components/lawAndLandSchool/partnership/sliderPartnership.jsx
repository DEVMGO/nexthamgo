import React, { useEffect, useState } from "react";
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Office1 from '../../../public/assets/imgs/lawandland/office1.png';
import Office2 from '../../../public/assets/imgs/lawandland/office2.png';
import Office3 from '../../../public/assets/imgs/lawandland/office3.png';
import Office4 from '../../../public/assets/imgs/lawandland/office4.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const SliderPartnership = ({ ListImages }) => {
  return (
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={false}
        slidesPerView={1}
        spaceBetween={5}
        breakpoints={{
          350: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {ListImages.map((item, index) => { 
          return(
            <SwiperSlide key={index + 'sliderpartnership'}>
                <div className="w-28 h-28 p-2 rounded border border-[#ddd] flex items-center justify-center">
                    <Image src={item.image} alt={item.name} className='w-full h-full object-contain' />
                </div>
            </SwiperSlide>
        )})}
      </Swiper>
  );
}

export default SliderPartnership;

SliderPartnership.defaultProps = {
    ListImages: [
        {
            id: 1,
            image: Office1,
            name: 'office',
        },
        {
            id: 2,
            image: Office2,
            name: 'office',
        },
        {
            id: 3,
            image: Office3,
            name: 'office',
        },
        {
            id: 4,
            image: Office4,
            name: 'office',
        },
        {
            id: 5,
            image: Office2,
            name: 'office',
        },
    ],
}