import React from 'react'
import Link from 'next/link'
import Slider from './Slider'
import style from './suggestedPackages.module.css'

const SuggestedPackages = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col'>
        <div className='w-5/6 flex items-center justify-center flex-col res3:w-11/12'>
            <div className='w-full flex items-center justify-start'>
                <h3 className='text-zinc-700 text-base res3:text-sm m-0 flex items-center justify-center [&>p]:w-16 [&>p]:h-2 [&>p]:border-t-[2px] [&>p]:border-bluelight [&>p]:mt-2 [&>p]:mx-1 [&>p]:mb-0'>
                    بسته‌های پیشنهادی
                    <p></p>
                    <p></p>
                    <p></p>
                </h3>
            </div>

            <div className='w-full max-h-screen overflow-hidden p-2'>
                <div className='w-full flex items-center justify-start py-2 res3:mb-4'>
                    <Link href="#"><button className='ml-20 text-bluelight text-base res3:text-xs transition-all duration-300 hover:text-blueHamgo'>همه</button></Link>
                </div>
                <div id='swiperSlide'><Slider /></div>
            </div>
        </div>
    </div>
  )
}

export default SuggestedPackages