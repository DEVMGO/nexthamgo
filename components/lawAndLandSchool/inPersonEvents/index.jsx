import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlinePencil } from 'react-icons/hi';
import Img1 from '../../../public/assets/imgs/lawandland/BCi.jpg'
import Img2 from '../../../public/assets/imgs/lawandland/meett.jpg'

const InPersonEvents = ({ images }) => {
  return (
      <div className='w-full flex items-center justify-start flex-col my-8 px-4'>
        <h5 className='text-[#3e4756] text-xl res4:text-sm text-center font-extrabold'>رویدادهای حضوری همگو</h5>
        <div className='w-full flex items-center justify-center my-12 p-4 res4:flex-col'>
            {images.map((item, index) => (
                <div key={index + 'InPersonEvents'} className='w-1/3 res4:w-full  overflow-hidden relative mx-8 res4:m-4'>
                    <Image src={item.image} alt={item.title} className='w-full h-full object-cover rounded-xl' />
                    <Link href={item.url} className='w-full flex items-center justify-center absolute bottom-4 res6:bottom-2 left-0'>
                        <button className='text-white bg-blue-500 rounded-3xl text-xs res4:text-base res6:text-[.5rem] flex items-center justify-center res4:py-1 py-3 px-4'>
                            <HiOutlinePencil /> اطلاعات بیشتر
                        </button>
                    </Link>
                </div>
            ))}
        </div>
      </div>
  )
}

export default InPersonEvents;

InPersonEvents.defaultProps = {
    images: [
        {
            id: 1,
            image: Img1,
            title: 'title1',
            url: '#'
        },
        {
            id: 2,
            image: Img2,
            title: 'title2',
            url: '#'
        },
    ]
}