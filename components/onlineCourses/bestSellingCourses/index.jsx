import React from 'react'
import Link from 'next/link'
import SliderBestSellingCourses from './sliderBestSellingCourses'

const BestSellingCourses = ({ title, data, link }) => {
  return (
    <div className='w-full flex items-center justify-center flex-col pt-40 bg-white mb-20'>
        <h3 className='text-black33 text-2xl mb-5'>{title}</h3>

        <div className='w-full pt-10 border-t border-t-black flex items-center justify-center flex-col'>
          <div className='w-11/12 px-8'>
            <SliderBestSellingCourses data={data} />
          </div>

          <Link href={link ? link : '#'}>
            <button className='text-black33 mt-10'>مشاهده ‌بیشتر</button>
          </Link>
        </div>
    </div>
  )
}

export default BestSellingCourses