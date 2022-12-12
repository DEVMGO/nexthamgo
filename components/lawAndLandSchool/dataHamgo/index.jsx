import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CountUp from 'react-countup';
import { toPersianNumber } from '../../../functions/numbers'
// Images
import Danesh from '../../../public/assets/icons/danesh.svg'
import Courses from '../../../public/assets/icons/courses.svg'
import Time from '../../../public/assets/icons/time.svg'
import Teachers from '../../../public/assets/icons/teachers.svg'


const DataHamgo = ({ number, duration, numberDanesh, numberCurses, timeCourses, numberTeachers }) => {

    const [count, setCount] = useState("0")
  
    useEffect(() => {
      let start = 0;
      const end = parseInt(number.substring(0,3))
      if (start === end) return;
      
      let totalMilSecDur = parseInt(duration);
      let incrementTime = (totalMilSecDur / end) * 1000;
      
      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + number.substring(3))
        if (start === end) clearInterval(timer)       
      }, incrementTime);
      
    }, [number, duration]);

    // const [isVisible, setIsVisible] = useState(true);
    // const [height, setHeight] = useState(0)
    
    // useEffect(() => {
    //   window.addEventListener("scroll", listenToScroll);
    //   return () => 
    //      window.removeEventListener("scroll", listenToScroll); 
    // }, [])
    
    // const listenToScroll = () => {
    //   let heightToHideFrom = 3200;
    //   const winScroll = document.body.scrollTop || 
    //       document.documentElement.scrollTop;
    //   setHeight(winScroll);
  
    //   if (winScroll > heightToHideFrom) {  
    //        isVisible && setIsVisible(false);
    //   } else {
    //        setIsVisible(true);
    //   }  
    // };


  return (
    <div className='w-full flex items-center justify-center py-12'>
        <div className='w-11/12 flex items-center justify-around bg-orangeHamgo rounded-2xl py-7'>
            <div className='py-4 flex items-center justify-center flex-col relative'>
                <div className='absolute w-32 h-32 res4:w-20 res4:h-20 rounded-bgCours1 bg-bgDataHamgo'></div>
                <Image src={Danesh} alt='دانش‌پذیران' className='w-14 h-14 res4:w-10 res4:h-10 res3:w-7 res3:h-7 object-contain' />
                <h5 className='text-white text-2xl res3:text-base mt-3 mb-1 mr-2'>
                    {toPersianNumber(count)} +
                    {/* <CountUp end={numberDanesh} enableScrollSpy duration="1" /> + */}
                </h5>
                <h4 className='text-white text-base res3:text-xs'>دانش‌پذیران</h4>
            </div>
            <div className='py-4 flex items-center justify-center flex-col relative'>
                <div className='absolute w-32 h-32 res4:w-20 res4:h-20 rounded-bgCours2 bg-bgDataHamgo'></div>
                <Image src={Courses} alt='دوره‌ها' className='w-14 h-14 res4:w-10 res4:h-10 res3:w-7 res3:h-7 object-contain' />
                <h5 className='text-white text-2xl res3:text-base mt-3 mb-1 mr-2'>
                    <CountUp end={numberCurses} enableScrollSpy duration="1" /> +
                </h5>
                <h4 className='text-white text-base res3:text-xs'>دوره‌ها</h4>
            </div>
            <div className='py-4 flex items-center justify-center flex-col relative'>
                <div className='absolute w-32 h-32 res4:w-20 res4:h-20 rounded-bgCours3 bg-bgDataHamgo'></div>
                <Image src={Time} alt='دقیقه‌آموزش' className='w-14 h-14 res4:w-10 res4:h-10 res3:w-7 res3:h-7 object-contain' />
                <h5 className='text-white text-2xl res3:text-base mt-3 mb-1 mr-2'>
                    <CountUp end={timeCourses} enableScrollSpy duration="1" /> +
                </h5>
                <h4 className='text-white text-base res3:text-xs'>دقیقه‌آموزش</h4>
            </div>
            <div className='py-4 flex items-center justify-center flex-col relative'>
                <div className='absolute w-32 h-32 res4:w-20 res4:h-20 rounded-bgCours4 bg-bgDataHamgo'></div>
                <Image src={Teachers} alt='اساتید' className='w-14 h-14 res4:w-10 res4:h-10 res3:w-7 res3:h-7 object-contain' />
                <h5 className='text-white text-2xl res3:text-base mt-3 mb-1 mr-2'>
                    <CountUp end={numberTeachers} enableScrollSpy duration="1" /> +
                </h5>
                <h4 className='text-white text-base res3:text-xs'>اساتید</h4>
            </div>
        </div>
    </div>
  )
}

export default DataHamgo

DataHamgo.defaultProps = {
    number: '2500',
    duration: '0.01',
    numberDanesh: 14826,
    numberCurses: 1100,
    timeCourses: 11028,
    numberTeachers: 246,
}