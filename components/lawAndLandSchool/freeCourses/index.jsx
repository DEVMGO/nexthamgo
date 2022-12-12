import React from 'react'
import { FaPlay } from 'react-icons/fa';
import FreeSlider from './freeSlider';

const FreeCourses = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col my-8'>
        <div className='w-full h-10 relative flex items-end justify-center overflow-hidden z-10 p-0 m-0'>
            <svg viewBox="0 0 415 9" fill="#16697a" xmlns="http://www.w3.org/2000/svg" className='w-full m-0'>
            <path id="course-wave" d="M207.5 0C75.591 0 0 9 0 9H415C415 9 339.409 0 207.5 0Z" fill="var(--background-secondary)"></path>
            </svg>
        </div>

        <div className='w-full pt-8 pb-20 flex items-center justify-center flex-col bg-blueHamgo z-20'>
            <h2 className='text-white text-xl res3:text-base mb-6'>دوره‌های رایگان همگو</h2>
            
            <div id='freeSlider'>
                <FreeSlider />
            </div>

            <button className='flex items-center text-xs text-black33 bg-white py-3 px-6 rounded-3xl hover:bg-blue-400 transition-all duration-300 hover:shadow-white hover:shadow'>
                <FaPlay className='ml-2' /> مشاهده همه دوره‌های رایگان
            </button>
        </div>
    </div>
  )
}

export default FreeCourses