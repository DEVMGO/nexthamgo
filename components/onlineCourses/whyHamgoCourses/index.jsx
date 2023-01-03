import React from 'react'
import Image from 'next/image'

// Images
import Img from '/public/assets/imgs/slide.png';
// style
import style from './style.module.css';

const WhyHamgoCourses = () => {
  return (
    <div className={style.whyHamgoCourses}>
        <h4 className='text-2xl res4:text-lg text-white'>چرا دوره‌های همگو؟</h4>

        <div className='w-full flex items-center justify-start flex-col mt-20 res3:mt-10'>
            <div className='w-11/12 flex items-stretch justify-between my-4 p-4 res4:flex-col res4:p-0'>
                <div className='w-full h-auto flex items-start justify-center flex-col'>
                    <div className='w-2/3 res5:w-4/5 flex items-start justify-center flex-col res3:!w-full'>
                        <h5 className='text-xl res3:text-base font-semibold text-white mb-4'>استفاده از مجربترین اساتید</h5>
                        <p className='text-sm res3:text-xs text-white text-justify leading-8'>شرکت  همگو همواره برای ارایه بهترین خدمات به کارآموزان خود و تحقق اهداف آموزشی از برترین اساتیدبهره می گیرد.</p>
                    </div>
                </div>

                <div className='w-full h-60 res3:h-44 flex items-center justify-end overflow-hidden my-6'>
                    <Image src={Img} alt='استفاده از مجربترین اساتید' className='h-full object-contain rounded-lg' />
                </div>
            </div>
            
            <div className='w-11/12 flex items-stretch justify-between my-4 p-4 res4:flex-col res4:p-0'>
                <div className='w-full h-60 res3:h-44 flex items-center justify-start overflow-hidden res4:order-2 my-6'>
                    <Image src={Img} alt='استفاده از مجربترین اساتید' className='h-full object-contain rounded-lg' />
                </div>
                
                <div className='w-full h-auto flex items-end justify-center flex-col res4:items-start'>
                    <div className='w-2/3 res5:w-4/5 flex items-start justify-center flex-col res3:!w-full'>
                        <h5 className='text-xl res3:text-base font-semibold text-white mb-4'>پیشتیبانی آموزشی در طول دوره </h5>
                        <p className='text-sm res3:text-xs text-white text-justify leading-8'>برای اطمینان از کیففیت مطالب آموزش داده شده و برای یادگیری بهتر تیم همگو در طول دوره.</p>
                    </div>
                </div>
            </div>
            
            <div className='w-11/12 flex items-stretch justify-between my-4 p-4 res4:flex-col res4:p-0'>
                <div className='w-full h-auto flex items-start justify-center flex-col'>
                    <div className='w-2/3 res5:w-4/5 flex items-start justify-center flex-col res3:!w-full'>
                        <h5 className='text-xl res3:text-base font-semibold text-white mb-4'>آموزش کامل</h5>
                        <p className='text-sm res3:text-xs text-white text-justify leading-8'>شرکت مگو همواره سعی بر آن دارد تا کامل ترین و اخرین دانسته ها در حوضه توسعه وب  در  اختیار دانشجویان قرار دهد. </p>
                    </div>
                </div>

                <div className='w-full h-60 res3:h-44 flex items-center justify-end overflow-hidden my-6'>
                    <Image src={Img} alt='استفاده از مجربترین اساتید' className='h-full object-contain rounded-lg' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyHamgoCourses