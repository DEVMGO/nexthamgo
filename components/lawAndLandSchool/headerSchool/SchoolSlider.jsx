import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
// import { Pagination } from "swiper";
import { Autoplay, Navigation } from "swiper";
// Images
import Slide1 from '/public/assets/imgs/880.jpg';
import Slide2 from '/public/assets/imgs/881.jpg';
import Slide3 from '/public/assets/imgs/img2.jpg';


export default function SchoolSlider() {
  return (
    <div id='schoolSlider'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={Slide1} alt='slide1' /></SwiperSlide>
        <SwiperSlide><Image src={Slide2} alt='slide2' /></SwiperSlide>
        <SwiperSlide><Image src={Slide3} alt='slide3' /></SwiperSlide>
      </Swiper>
    </div>
  );
}
