import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsChevronLeft } from 'react-icons/bs';
import style from './courses.module.css'

const CardCourse = ({ title, image, url, description }) => {
  return (
    <div className={`w-full h-auto flex items-center justify-between flex-col rounded-2xl overflow-hidden shadow-md bg-white ${style.card_course}`}>
      <div className='w-full flex items-center justify-start flex-col'>
        <div className={`${style.title}`}>
          <h3 className='text-white text-xl'>{title}</h3>
          <span className='absolute w-16 h-16 rounded-full overflow-hidden left-8 -bottom-8'>
              <Image src={image} alt={title} />
          </span>
        </div>

        <ul className='w-11/12 h-full flex items-start justify-start flex-col p-4 pt-8'>
          {description.map((item, index) => (
            <li key={index + 'cardCourse'} className='w-full text-neutral-800 text-xs res3:text-[.5rem] flex items-start justify-start my-3'>
              {item?.title}
            </li>
          ))}
        </ul>
      </div>

      <div className='w-full flex items-center justify-end'>
        <Link href={url}>
          <button className='text-bluelight text-sm res3:text-xs flex items-center p-4 [&>svg]:hover:mr-4'>
            موارد بیشتر  <BsChevronLeft className='mr-1 transition-all duration-400' />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CardCourse