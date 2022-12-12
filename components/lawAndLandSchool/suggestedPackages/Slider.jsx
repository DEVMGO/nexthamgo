import React from "react";
import CardSuggest from "./CardSuggest";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";

// Images
import Image from "../../../public/assets/imgs/img1.jpg";


export default function Slider({ SuggestList }) {
  return (
    <>
      <Swiper 
        slidesPerView={4}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          300: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {SuggestList.map((item, index) => (
            <SwiperSlide key={index + 'sliderSuggest'}>
                <CardSuggest item={item} />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

Slider.defaultProps = {
    SuggestList: [
        {
            id: 1,
            img: Image,
            title: 'پنجمین کارگاه وکیل حرفه‌ای در دعاوی ملکی (متخصص حقوق املاک)',
            date: '1400/09/12',
            teacher: 'دکتر جواد حداد/دکتر شیرین بیات',
            price: 450000,
            offer: 100000,
            type: 'آنلاین'
        },
        {
            id: 2,
            img: Image,
            title: 'پنجمین کارگاه وکیل حرفه‌ای در دعاوی ملکی (متخصص حقوق املاک)',
            date: '1400/09/12',
            teacher: 'دکتر جواد حداد/دکتر شیرین بیات',
            price: 550000,
            offer: 200000,
            type: 'آنلاین'
        },
        {
            id: 3,
            img: Image,
            title: 'پنجمین کارگاه وکیل حرفه‌ای در دعاوی ملکی (متخصص حقوق املاک)',
            date: '1400/09/12',
            teacher: 'دکتر جواد حداد/دکتر شیرین بیات',
            price: 2350000,
            offer: 1000000,
            type: 'آنلاین'
        },
        {
            id: 4,
            img: Image,
            title: 'پنجمین کارگاه وکیل حرفه‌ای در دعاوی ملکی (متخصص حقوق املاک)',
            date: '1400/09/12',
            teacher: 'دکتر جواد حداد/دکتر شیرین بیات',
            price: 850000,
            offer: 200000,
            type: 'آنلاین'
        },
        {
            id: 5,
            img: Image,
            title: 'پنجمین کارگاه وکیل حرفه‌ای در دعاوی ملکی (متخصص حقوق املاک)',
            date: '1400/08/22',
            teacher: 'دکتر جواد حداد/دکتر شیرین بیات',
            price: 1450000,
            offer: 450000,
            type: 'آنلاین'
        },
    ]
}
