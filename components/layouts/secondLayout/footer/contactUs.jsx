import React, { Fragment } from 'react'

// Icons
import { AiOutlinePhone } from 'react-icons/ai';
import { TiLocationArrowOutline } from 'react-icons/ti';
import { GiEarthAmerica } from 'react-icons/gi';

const ContactUs = ({ phone, location, website }) => {
  return (
    <Fragment>
        <div className='min-w-[45rem] res4:min-w-[25rem] h-full flex items-center justify-start flex-col res6:order-1 res6:my-8'>
          <h1 className='text-orangeHamgo text-base res3:text-sm'>تماس با‌ما</h1>

          <div className='w-full flex items-start justify-between res5:items-center res5:justify-center res5:flex-col'>

            <div className='max-w-xs flex items-center justify-center flex-col res3:m-1'>
              <div className='max-w-xs flex items-center justify-center flex-col m-4 res3:m-1'>
                <span className='w-11 h-11 flex items-center justify-center text-orangeHamgo border-[3px] border-solid border-white rounded-full text-3xl p-1'>
                  <AiOutlinePhone />
                </span>
                <h5 className='text-white text-sm res3:text-xs mt-3'>تلفن</h5>
              </div>
              <div className='border-[2px] border-solid border-orangeHamgo rounded-[4rem] py-1 res3:py-1 px-4 res3:px-4 flex items-center justify-center'>
                <p className='text-white m-0 text-sm res3:text-xs text-center leading-[3rem]'>{phone}</p>
              </div>
            </div>

            <div className='max-w-xs flex items-center justify-center flex-col res3:m-1'>
              <div className='max-w-xs flex items-center justify-center flex-col m-4 res3:m-1'>
                <span className='w-11 h-11 flex items-center justify-center text-orangeHamgo border-[3px] border-solid border-white rounded-full text-3xl pt-1 pr-1 pb-2 pl-2'>
                  <TiLocationArrowOutline />
                </span>
                <h5 className='text-white text-sm res3:text-xs mt-3'>آدرس</h5>
              </div>
              <div className='border-[2px] border-solid border-orangeHamgo rounded-[4rem] py-3 res3:py-3 px-4 res3:px-4 flex items-center justify-center'>
                <p className='text-white m-0 text-sm res3:text-xs text-center leading-10	res3:leading-10'>{location}</p>
              </div>
            </div>

            <div className='max-w-xs flex items-center justify-center flex-col res3:m-1'>
              <div className='max-w-xs flex items-center justify-center flex-col m-4 res3:m-1'>
                <span className='w-11 h-11 flex items-center justify-center text-orangeHamgo border-[3px] border-solid border-white rounded-full text-3xl p-1'>
                  <GiEarthAmerica />
                </span>
                <h5 className='text-white text-sm res3:text-xs mt-3'>وب‌سایت</h5>
              </div>
              <div className='border-[2px] border-solid border-orangeHamgo rounded-[4rem] py-1 res3:py-1 px-4 res3:px-4 flex items-center justify-center'>
                <p className='text-white m-0 text-sm res3:text-xs text-center leading-[3rem]'>{website}</p>
              </div>
            </div>

          </div>
        </div>
    </Fragment>
  )
}

export default ContactUs