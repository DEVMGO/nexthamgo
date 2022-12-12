import React from 'react'
import Image from 'next/image'
import { FaChalkboardTeacher } from 'react-icons/fa';
import { IoTimeSharp } from 'react-icons/io5';

const CartFreeSlider = ({ item }) => {
  return (
    <div className='w-full max-w-sm flex items-center justify-between flex-col rounded-xl overflow-hidden bg-white'>
        <div className='w-full h-36'>
            <Image src={item?.image} alt={item?.title} className='w-full h-full object-cover' />
        </div>

        <div className='w-full flex items-start justify-between flex-col p-4'>
            <h3 className='my-2 text-black44 text-base'>{item?.title}</h3>
            <div className='w-full flex items-start justify-between flex-col border-b border-slate-400 border-solid py-2'>
                <h5 className='flex items-center text-black99 text-sm my-3 [&>svg]:ml-2'><FaChalkboardTeacher /> {item?.category}</h5>
                <h5 className='flex items-center text-black99 text-sm my-3 [&>svg]:ml-2'><IoTimeSharp /> {item?.time}</h5>
            </div>
            <div className='w-full flex items-center justify-start pt-3 p-2'>
                <button className={`text-white text-sm bg-courseBlue1 py-1 px-3 rounded-md cursor-pointer btnlayered`}>{item?.type === 'free' ? 'رایگان' : 'خرید'}</button>
            </div>
        </div>
    </div>
  )
}

export default CartFreeSlider;