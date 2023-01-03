import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Icons
import { TfiTimer } from 'react-icons/tfi';
import { FaGraduationCap, FaChalkboardTeacher } from 'react-icons/fa';

// Images
import Img1 from '../../../public/assets/imgs/onlinecourses/1.jpg';
import Img2 from '../../../public/assets/imgs/onlinecourses/2.jpg';
import Img3 from '../../../public/assets/imgs/onlinecourses/3.jpg';
// Style
import style from './sectionOne.module.css'

const SectionOne = ({ time, students, courses }) => {
  return (
    <div className='w-full flex items-center justify-start flex-col p-0 before:w-4/12 relative before:absolute before:h-full before:-z-10 after:-z-10 before:left-0 before:top-0 before:bg-orangeHamgo after:absolute after:h-full after:bg-blueHamgo after:right-0 after:top-0 after:w-8/12 overflow-hidden'>
        <div className='w-full h-full z-50 flex items-stretch justify-center p-8 res4:p-3'>
            <div className='w-8/12 res6:w-full h-auto flex items-center justify-center flex-col z-40'>
                <div className='h-full flex items-start justify-center flex-col mt-20 transform translate-x-16 res6:translate-x-0'>
                    <h3 className='text-white font-extrabold text-4xl res3:text-2xl mb-8'>دوره های آنلاین همگو</h3>
                    <pre className='text-white text-sm res3:text-xs font-medium font-[IRANSans-Medium] text-start'>
                        {`
با دوره های آنلاین همگو بازار کار تو مشتته! \n
موفقیتتو سریعتر بدست بیار \n
اینجا یه تیم برای رسیدن به اهدافت پشتته
                        `}
                    </pre>
                    <div className='w-full flex items-center justify-start mt-8'>
                        <Link href='' className='ml-3 my-3'>
                            <button className='text-white bg-orangeHamgo w-52 res4:w-36 py-4 rounded-2xl shadow-md cursor-pointer'>پرفروش‌ترین‌ها</button>
                        </Link>
                        <Link href='' className='ml-3 my-3'>
                            <button className='text-white bg-orangeHamgo w-52 res4:w-36 py-4 rounded-2xl shadow-md cursor-pointer'>همه‌ی دوره‌ها</button>
                        </Link>
                    </div>
                </div>

                <div className='w-full flex items-center justify-center mt-20 translate-y-20  res6:translate-y-0'>
                    <div className='flex items-center justify-between flex-col w-48 m-4 res3:mx-0.5'>
                        <TfiTimer className='text-8xl res5:text-4xl my-3' />
                        <p className='text-white text-sm text-center'>بیش از <span>{time?.toLocaleString('fa-IR')}</span> ساعت آموزش مجازی</p>
                    </div>
                    <div className='flex items-center justify-between flex-col w-48 m-4 res3:mx-0.5'>
                        <FaGraduationCap className='text-8xl res5:text-4xl my-3' />
                        <p className='text-white text-sm text-center'>بیش از <span>{students?.toLocaleString('fa-IR')}</span> دانش آموخته</p>
                    </div>
                    <div className='flex items-center justify-between flex-col w-48 m-4 res3:mx-0.5'>
                        <FaChalkboardTeacher className='text-8xl res5:text-4xl my-3' />
                        <p className='text-white text-sm text-center'>بالغ بر <span>{courses?.toLocaleString('fa-IR')}</span> دوره آنلاین</p>
                    </div>
                </div>
            </div>

            <div className='w-4/12 h-auto flex items-end justify-center flex-col mt-20 res6:hidden z-30'>
                <div className={style.boxImage}>
                    <Image src={Img1} alt='onlineCourses-img1' className='w-full h-full object-cover z-30 relative' />
                </div>
                <div className={style.boxImage}>
                    <Image src={Img2} alt='onlineCourses-img2' className='w-full h-full object-cover z-50 relative' />
                </div>
                <div className={style.boxImage}>
                    <Image src={Img3} alt='onlineCourses-img3' className='w-full h-full object-cover z-50 relative' />
                </div>
            </div>
        </div>

        <div className='w-full h-72 z-50 border-l-[100vw] border-l-transparent border-solid border-b-[25vh] border-b-white'></div>
    </div>
  )
}

export default SectionOne;

SectionOne.defaultProps = {
    time: 2000,
    students: 300,
    courses: 50,
}