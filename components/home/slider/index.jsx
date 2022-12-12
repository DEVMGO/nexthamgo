import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// Images
import img1 from '../../../public/assets/imgs/img1.jpg'
import img2 from '../../../public/assets/imgs/img2.jpg'
import img3 from '../../../public/assets/imgs/img3.jpg'
import img4 from '../../../public/assets/imgs/img4.jpg'

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Slider() {

    const slides = [
        {
          title: "مدرسه حقوق و اراضی",
          slide_title: "مدرسه حقوق اراضی مکانی برای یادگیری چیز های جدید و متنوع",
          desc: "فراتر از انچه که فکرش را می کنید",
          img: img1,
          url: "/lawandlandschool",
          icon: '',
        },
        {
          title: "فروشگاه کتاب",
          slide_title: "فروشگاه کتاب مکانی برای خرید چیز های جدید و متنوع",
          desc: "هر کتابی که بخوایی هست",
          img: img2,
          url: "books",
          icon: '',
        },
        {
          title: "ارزان سازی پرونده",
          slide_title: "ارزان سازی پرونده مکانی برای ارزان سازی چیز های جدید و متنوع",
          desc: "با ارزان سازی ارزان بساز",
          img: img3,
          url: "easy",
          icon: "",
        },
        {
          title: "قرار داد هوشمند",
          slide_title: "قرارداد هوشمند محیطی برای قرارداد های  جدید و متنوع",
          desc: "قرار داد هوشمند هونی که میخوایی",
          img: img4,
          url: "digital",
          icon: "",
        },
      ];
      // const router = useRouter();
      // const handleUrl = (url) => router.push(`${url}`); 
      
      const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return `<div id="dot" class="dot ${className}"> 
              <div className="dot_info">
                <h3 className="dot_info--title">${slides[index].title}</h3>
              </div>
            </div>`;
        },
      };


  return (
    <>
      <div id="homeSlider">
        <Swiper 
          pagination={pagination}
          loop={true}
          autoplay={{
              delay: 3500,
              disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]} 
          className="mySwiper" 
        >
          {slides.map((item, index) => (
              <SwiperSlide key={index + "slider"}>
                  <div className="img_box">
                      <Image src={item.img} alt={item.slide_title} />
                  </div>
                  <div className="data_box">
                      <h2>{item.slide_title}</h2>
                      <div className="btn_box">
                          <p>{item.desc}</p>
                          <Link href={`/${item.url}`}>
                            <button>ادامه</button>
                          </Link>
                      </div>
                  </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}