import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CartSliderPerofessor = ({ item }) => {
  return (
    <div className='w-full flex items-center justify-center flex-col rounded-md shadow-xl border border-white overflow-hidden pb-8 px-4'>
        <div className='w-full flex items-center justify-start overflow-hidden p-4'>
          <div className='w-24 h-24 rounded-full bg-white overflow-hidden'>
            <Image src={item?.image} alt={item?.name} className='w-full h-full object-fill' />
          </div>
          <h5 className='text-white text-base mr-6'>{item?.name}</h5>
        </div>
        <div className='w-full min-h-[200px] flex items-start justify-start flex-col overflow-hidden'>
          <p className='text-sm text-justify font-light leading-6 text-white m-3'>{item?.description}</p>
        </div>

        <Link href='#'>
          <button className='w-48 py-2 rounded-lg bg-white text-black33'>پروفایل</button>
        </Link>
    </div>
  )
}

export default CartSliderPerofessor