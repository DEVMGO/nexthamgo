import React, { Fragment } from 'react'

const HamgoCollection = ({ phones }) => {
  return (
    <Fragment>
        <div className='w-full h-full flex items-start justify-start flex-col res6:order-2 res7:items-center'>
            <h1 className='text-orangeHamgo text-base res3:text-sm'>مجموعه حقوقی همگو</h1>
            <ul className='w-full flex items-start justify-start flex-col res7:items-center'>
                {phones.map((item ,index) => (<li  key={index + "platfourm"} className='w-full flex items-center justify-start text-white text-sm res3:text-xs my-2 res7:justify-center'>
                    {item.title}
                </li>
                ))}
            </ul>
        </div>
    </Fragment>
  )
}

export default HamgoCollection