import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";


import CartSliderPerofessor from "./cartSliderPerofessor";
// Images
import Img from '/public/assets/imgs/onlinecourses/perofessor.jpg';

export default function SliderPesofessors({ listPerofessors }) {
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
        {listPerofessors?.map((item, index) => (
            <SwiperSlide key={index + "freecourses"}>
                <CartSliderPerofessor item={item} />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}


SliderPesofessors.defaultProps = {
    listPerofessors: [
        {
            id: 1,
            title: "داستان زندگی وان بارف",
            name: "وان بارف",
            time: 100,
            students: 15,
            image: Img,
            url: ''
        },
        {
            id: 2,
            title: "گفتگو با مارک زاکربرگ",
            name: "زاکربرگ",
            time: 220,
            students: 9,
            image: Img,
            url: ''
        },
        {
            id: 3,
            title: "تستی 1",
            name: "تست",
            time: 30,
            students: 30,
            image: Img,
            url: ''
        },
        {
            id: 4,
            title: "وان بارف کجاست؟",
            name: "وان بارف",
            time: 180,
            students: 24,
            image: Img,
            url: ''
        },
        {
            id: 5,
            title: "تستی 2",
            name: "تست",
            time: 100,
            students: 10,
            image: Img,
            url: ''
        },
    ]
}