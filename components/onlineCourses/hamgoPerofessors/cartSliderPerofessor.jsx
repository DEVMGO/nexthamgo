import React from 'react'
import Image from 'next/image'

const CartSliderPerofessor = ({ item }) => {
  return (
    <div className='w-full flex items-center justify-center flex-col rounded-md shadow-xl border border-black66 overflow-hidden bg-white'>
        <div className='w-full h-64 p-0 overflow-hidden rounded-md'>
            <Image src={item?.image} alt={item?.name} className='w-full h-full' />
        </div>
        <h4 className='text-lg text-black33 m-3'>{item?.name}</h4>
    </div>
  )
}

export default CartSliderPerofessor