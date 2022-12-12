import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper";


import CartFreeSlider from "./cartFreeSlider";
// Images
import Img1 from '../../../public/assets/imgs/one.jpg';
import Img2 from '../../../public/assets/imgs/two.jpg';
import Img3 from '../../../public/assets/imgs/three.jpg';
import Img4 from '../../../public/assets/imgs/img1.jpg';
import Img5 from '../../../public/assets/imgs/img3.jpg';

export default function FreeSlider({ courses }) {
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
        {courses?.map((item, index) => (
            <SwiperSlide key={index + "freecourses"}>
                <CartFreeSlider item={item} />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}


FreeSlider.defaultProps = {
    courses: [
        {
            id: 1,
            title: "داستان زندگی وان بارف",
            category: "وان بارف",
            time: 100,
            type: 'free',
            image: Img1
        },
        {
            id: 2,
            title: "گفتگو با مارک زاکربرگ",
            category: "زاکربرگ",
            time: 220,
            type: 'free',
            image: Img2
        },
        {
            id: 3,
            title: "تستی 1",
            category: "تست",
            time: 30,
            type: 'free',
            image: Img3
        },
        {
            id: 4,
            title: "وان بارف کجاست؟",
            category: "وان بارف",
            time: 180,
            type: 'free',
            image: Img4
        },
        {
            id: 5,
            title: "تستی 2",
            category: "تست",
            time: 100,
            type: 'free',
            image: Img5
        },
    ]
}