import React from 'react'
import SliderPartnership from './sliderPartnership'

const Partnership = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col my-8 px-4'>
        <h5 className='text-[#3e4756] text-xl res4:text-sm text-center font-extrabold'>شرکت و موسسه‌هایی که افتخار همکاری با آنان را داشته‌ایم</h5>
        <div id='sliderPartnership' className='my-4 overflow-hidden w-2/4 res4:w-11/12'>
            <SliderPartnership />
        </div>
    </div>
  )
}

export default Partnership