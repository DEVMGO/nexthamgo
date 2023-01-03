import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// Icons
import { TfiTimer } from 'react-icons/tfi';
import { FaGraduationCap } from 'react-icons/fa';

const CartSlider = ({ item }) => {
  return (
    <div className='w-full flex items-center justify-center flex-col border border-slate-500 rounded-md p-0 shadow-xl overflow-hidden'>
        <div className='w-full p-0 m-0 h-64 overflow-hidden'>
            <Image src={item?.image} alt={item?.title} className='w-full h-full' />
        </div>
        <div className='w-full flex items-start justify-center flex-col p-3'>
            <p className='flex items-center justify-center text-black66 text-sm'><TfiTimer className='text-2xl text-black33 ml-2' /> {item?.time} ساعت</p>
            <p className='flex items-center justify-center text-black66 text-sm'><FaGraduationCap className='text-2xl text-black33 ml-2' /> {item?.students} نفر</p>
        </div>
        <Link href={item?.url}><button className='bg-blueHamgo text-white text-sm my-3 py-2 w-48 rounded-md'>اطلاعات بیشتر</button></Link>
    </div>
  )
}

export default CartSlider