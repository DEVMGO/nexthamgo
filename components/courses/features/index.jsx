import React from 'react'
// icons
import { GrMonitor } from 'react-icons/gr';
import { BsFileEarmarkText } from 'react-icons/bs';
// import { FaBeer } from 'react-icons/fa';
// import { FaBeer } from 'react-icons/fa';


const Features = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col mt-32 bg-courses-data'>
        <h3 className='text-2xl text-black font-bold'>امکانات دیگر دوره</h3>
        
        <div className='w-10/12 grid grid-cols-19 mt-10'>
            <div className='w-full flex items-center justify-center p-8'>
                <div className='w-full max-w-xs flex items-center justify-between flex-col p-4 border border-black44 shadow-2xl'>
                    <div className='w-40 h-40 res4:w-28 res4:h-28'>
                        <GrMonitor className='w-full h-full' />
                    </div>
                    <h5 className='mt-8 text-base text-black33'>دسترسی از همه جا</h5>
                </div>
            </div>
            
            <div className='w-full flex items-center justify-center p-8'>
                <div className='w-full max-w-xs flex items-center justify-between flex-col p-4 border border-black44 shadow-2xl'>
                    <div className='w-40 h-40 res4:w-28 res4:h-28'>
                        <BsFileEarmarkText className='w-full h-full' />
                    </div>
                    <h5 className='mt-8 text-base text-black33'>دانلود فایل های دوره</h5>
                </div>
            </div>
            
            <div className='w-full flex items-center justify-center p-8'>
                <div className='w-full max-w-xs flex items-center justify-between flex-col p-4 border border-black44 shadow-2xl'>
                    <div className='w-40 h-40 res4:w-28 res4:h-28'>
                        <GrMonitor className='w-full h-full' />
                    </div>
                    <h5 className='mt-8 text-base text-black33'>دسترسی از همه جا</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features