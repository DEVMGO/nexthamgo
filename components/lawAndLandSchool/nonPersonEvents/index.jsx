import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Img1 from '../../../public/assets/imgs/lawandland/BCi.jpg'
import Img2 from '../../../public/assets/imgs/lawandland/meett.jpg'
import Img3 from '../../../public/assets/imgs/lawandland/image3.jpg'

const NonPersonEvents = ({ images }) => {
  return (
      <div className='w-full flex items-center justify-start flex-col my-4 px-4'>
        <h5 className='text-[#3e4756] text-xl res4:text-sm text-center font-extrabold'>رویدادهای غیرحضوری همگو</h5>
        <div className='w-5/6 res6:w-full items-start justify-center my-8 p-4 res3:items-center grid grid-cols-3 gap-4 res6:grid-cols-2 res4:!grid-cols-1'>
            {images.map((item, index) => (
                <Link href={item.url} key={index + 'nonPersonEvents'} className='w-full overflow-hidden relative res6:my-4'>
                    {/* <div className='w-full flex items-start justify-center flex-col px-2'> */}
                        <Image src={item.image} alt={item.title} className='w-full h-56 res4:h-40 object-cover rounded-xl' />
                        <h4 className='text-xs mt-4'>{item.title}</h4>
                    {/* </div> */}
                </Link>
            ))}
        </div>
      </div>
  )
}

export default NonPersonEvents;

NonPersonEvents.defaultProps = {
    images: [
        {
            id: 1,
            image: Img1,
            title: 'دوره تربیت کوچ حرفه ای کسب و کار',
            url: '#'
        },
        {
            id: 2,
            image: Img2,
            title: 'کوچینگ راه اندازی کسب و کار اینترنتی',
            url: '#'
        },
        {
            id: 3,
            image: Img3,
            title: 'بیزینس کوچینگ غیر حضوری',
            url: '#'
        },
    ]
}