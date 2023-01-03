import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { BsCheckLg } from 'react-icons/bs';

import Img from '../../../public/assets/imgs/img1.jpg'


const Introduction = () => {

  const [showVideo, setShowVideo] = useState(false);
  const handleShowVideo = () => setShowVideo(true);
  const handleHideVideo = () => setShowVideo(false);

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [showVideo]);

  return (
    <div className='w-full flex items-center justify-center my-12 bg-gradient-to-b from-[#0074bc20] to-[#7ac84920] py-8 relative'>

        {showVideo && 
            <div className='fixed top-0 left-0 w-full h-screen bg-slate-600 bg-opacity-40 overflow-hidden z-50 flex items-center justify-center p-7'>
                <div className='w-full max-w-3xl flex items-center justify-start flex-col p-4 bg-white'>
                    <div className='w-full flex items-center justify-between p-4 res3:pt-1'>
                        <IoClose className='text-3xl res3:text-xl text-slate-500 cursor-pointer' onClick={handleHideVideo} /> 
                        <h5 className='flex items-center justify-center text-sm res3:text-xs text-slate-500'><BsCheckLg className='ml-2' /> دوره‌های همگو</h5>
                    </div>
                    <div className='w-full h-96 res3:h-40 border-t border-t-slate-400 pt-4'>
                        <video className='w-full h-full' controls>
                            <source src='/assets/video.mp4'></source>
                            {/* <source src='https://hajifirouz8.asset.aparat.com/aparat-video/3057a97ac7d9676e65281d6c9a42c23d49444249-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhjMzFkYzg4MmQ0ZTlkZWUyNDY0YjAxYjJkNjUxZTI2IiwiZXhwIjoxNjcxOTcxMzAyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.hPa2GBS0ksWLY8t7erQD94zl0gxNY-HueOUV3PEcZVg'></source> */}
                        </video>
                    </div>
                </div>
            </div>
        }
        
        <div className='w-5/6 res7:w-full flex items-center justify-between res7:p-8 res5:flex-col'>
            <div className='w-[450px] res7:ml-4 res5:!ml-0 h-60 rounded-lg overflow-hidden relative res5:order-2 res3:w-full'>
                <Image src={Img} alt='معرفی همگو' className='w-full h-full z-10' />
                <div className='absolute w-full h-full flex items-center justify-center bg-slate-500 bg-opacity-50 z-20 top-0 left-0'>
                    <button className='text-white text-base bg-blue-600 p-6 rounded-full relative z-20' onClick={handleShowVideo}>
                        <FaPlay />
                    </button>
                    <spna className='animate-ping w-12 h-12 absolute border border-white rounded-full z-10'></spna>
                </div>
            </div>

            <div className='w-3/5 flex items-start justify-center flex-col res5:order-1 res5:mb-10 res5:w-full'>
                <h3 className='text-[#3e4756] text-xl res4:text-sm font-extrabold mb-4'>معرفی همگو</h3>
                <p className='text-justify text-sm leading-8 text-slate-700'>همگو، یک پلتفرم آموزش آنلاین ویدیویی است که ماموریت توسعه مهارت‌های کاربردی 
                    در تمام نقاط کشور را برای خود تعریف کرده‌است. شما به کمک ویدان خواهید توانست مهارت‌های خودتان 
                    را شناسایی و در جهت تقویت آن اقدام کنید. در ویدان همه روزه آموزش‌هایی در قالب ویدئو و در موضوعاتی 
                    همچون بازاریابی، فروش، کسب‌وکار و... ارائه می‌شود. هر کسی قصد یاد گرفتن مهارت عملی و کاربردی دارد به راحتی 
                    و از هر جا، با هر هزینه‌ای می‌تواند از این آموزش‌ها استفاده کند. دسترسی به این آموزش‌ها هم از طریق وب و هم موبایل (اندروید و ios ) برای همگان
                    امکان‌پذیر است. به روزسازی دانش مدیران و کارآفرینان، توسعه مهارت‌های فردی افراد آماده به کار و افزایش مهارت 
                    افراد شاغل برای بالا بردن بهره‌وری از مهم‌ترین اهداف ویدان می باشد.
                </p>
                <button className='mt-4 bg-blue-600 text-white flex items-center justify-center py-3 px-5 rounded-3xl text-xs'><FaPlay className='ml-2' /> دوره‌های همگو</button>
            </div>
        </div>
    </div>
  )
}

export default Introduction