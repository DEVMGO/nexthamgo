import React from 'react'
import Image from 'next/image'
// Images
import Hold1 from '../../../public/assets/imgs/hold1.png'
import Hold2 from '../../../public/assets/imgs/hold2.jpg'
import Hold3 from '../../../public/assets/imgs/hold3.png'
// Style
import style from './style.module.css'

const HowToHold = () => {
  return (
    <div className='w-full flex items-center justify-start flex-col py-8 my-10'>
        <div className='w-full flex items-center justify-start'>
            <h5 className='text-lg text-black33'>نحوه برگزاری</h5>
        </div>
        
        <div className={style.data_box}>
            <div className='w-full flex items-center justify-center py-4'>
                <div className='w-full flex items-start justify-center flex-col p-5'>
                    <h4 className='mb-8 text-2xl res4:text-base text-black font-bold'>ارايه کامل مطالب</h4>
                    <p className='w-3/4 res4:w-full text-base res4:text-sm text-justify text-black'>تمامی مطالب دوره به صورت مجازی در قالب ۴۰ ساعت اموزش داده خواهد شد این آموزش از مبتدی تا پیشرفته را در بر می گیرد</p>
                </div>

                <div className='w-full res4:w-2/3 h-60 flex items-center justify-center'>
                    <Image src={Hold1} alt='ارايه کامل مطالب' className='w-80 h-full object-fill' />
                </div>
            </div>
            
            <div className='w-full flex items-center justify-center py-4'>
                <div className='w-full res4:w-2/3 h-60 flex items-center justify-start'>
                    <Image src={Hold2} alt='ارايه کامل مطالب' className='w-2/3 res4:w-full h-full object-fill' />
                </div>

                <div className='w-full flex items-start justify-center flex-col p-5'>
                    <h4 className='mb-8 text-2xl res4:text-base text-black font-bold'>آموزش در قالب تمرین</h4>
                    <p className='w-3/4 res4:w-full text-base res4:text-sm text-justify text-black'>در پایان هر فصل تمارینی برای کامل شدن یادگیری مطالب آموزش داده شده به دانشجو در نظر گرفته شده است.</p>
                </div>
            </div>
            
            <div className='w-full flex items-center justify-center py-4'>
                <div className='w-full flex items-start justify-center flex-col p-5'>
                    <h4 className='mb-8 text-2xl res4:text-base text-black font-bold'>آزمون در پایان هر فصل</h4>
                    <p className='w-3/4 res4:w-full text-base res4:text-sm text-justify text-black'>در پایان هر فصل برای ارزیابی دانشجو یک آزمون عملی در نظر گرفته شده است</p>
                </div>

                <div className='w-full res4:w-2/3 h-60 flex items-center justify-center'>
                    <Image src={Hold3} alt='ارايه کامل مطالب' className='w-80 h-full object-fill' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowToHold