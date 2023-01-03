import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";


import CartSlider from "./cartSlider";

export default function SliderBestSellingCourses({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          868: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1224: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Navigation]} 
        className="mySwiper"
      >
        {data?.map((item, index) => (
            <SwiperSlide key={index + "freecourses"}>
                <CartSlider item={item} />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
