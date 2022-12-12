import React from 'react'
import Image from 'next/image'

import CardCourse from './CardCourse'

// Images
import Slide from '../../../public/assets/imgs/slide.png'
import Online from '../../../public/assets/imgs/online.png'
import Offline from '../../../public/assets/imgs/offline.png'
import Attend from '../../../public/assets/imgs/attend.png'
import Books from '../../../public/assets/imgs/books.png'

// Style
import style from './courses.module.css'

const Courses = () => {

  const Items = [
    {
      title: "دوره‌های آنلاین",
      image: Online,
      description: [
        {
          title: "دهمین کارگاه جامع پرورش مشاور حقوقی"
        },
        {
          title: "اولین کارگاه جامع پرورش مشاور حقوقی بین‌المللی"
        },
        {
          title: "پنجمین کارگاه وکیل حرفه‌ای در دعاوی ملکی (متخصص حقوق املاک)"
        },
      ]
    },
    {
      title: "دوره‌های حضوری",
      image: Attend,
      description: [
        {
          title: "تک جلسه پرونده‌‏خوانی"
        },
        {
          title: "نشست هشتم اولین کارگاه تخصصی خوانش آراء بین المللی"
        },
        {
          title: "نشست هفتم اولین کارگاه تخصصی خوانش آراء بین المللی"
        },
        {
          title: "نشست ششم اولین کارگاه تخصصی خوانش آراء بین المللی"
        },
      ]
    },
    {
      title: "دوره‌های آفلاین",
      image: Offline,
      description: [
        {
          title: "فیلم اصول قراردادنویسی"
        },
        {
          title: "فیلم قراردادهای اجاره املاک تجاری"
        },
        {
          title: "فیلم حقوق اسناد تجاری"
        },
        {
          title: "فیلم حقوق شرکت‌های تجاری"
        },
        {
          title: "فیلم لایحه و دادخواست نویسی"
        },
      ]
    },
    {
      title: "کتب کاربردی",
      image: Books,
      description: [
        {
          title: "آنچه مشاور حقوقی باید بداند"
        },
        {
          title: "کتاب شرح جامع قانون مدنی"
        },
        {
          title: "اصول و مهارت‌های قراردادنویسی"
        },
        {
          title: "قراردادهای پیمانکاری"
        },
        {
          title: "درسنامه جامع حقوق تجارت"
        },
      ]
    },
  ]
  return (
    <div className='w-full flex items-center justify-start flex-col'>
      {/* <div className='relative w-full h-[35vh] res4:h-[15vh] flex items-center justify-center flex-col overflow-hidden'>
        <Image src={Slide} alt='مجموعه حقوقی همگو' className='w-full h-full object-cover' />
        <div className='absolute right-0 w-full flex items-start justify-center flex-col bg-gradient-to-r from-[rgba(54,100,148,.5)] via-[rgba(4,128,212,.5)] to-[rgba(39,178,188,.5)] shadow-md p-12 res3:p-5'>
          <h1 className='text-white text-xl'>مجموعه حقوقی همگو</h1>
        </div>
      </div> */}
      
      <div className='relative w-11/12 grid grid-cols-20 res4:grid-cols-18 gap-3 items-start justify-center mb-8 p-16 res4:p-4'>
        {Items.map((item, index) => (
          <CardCourse key={index + "courses"} title={item.title} image={item.image} description={item.description} />
        ))}
      </div>

    </div>
  )
}

export default Courses;