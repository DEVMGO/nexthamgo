import React, { Fragment } from 'react'
import Image from 'next/dist/client/image'

// Images
import Enamad from '../../../../public/assets/imgs/enamad.png'

const Platfourm = ({ platfourms }) => {
  return (
    <Fragment>
        <div className='res7:w-full h-full flex items-start justify-start flex-col res6:order-2 res3:mt-8 res7:items-center'>
            <h1 className='text-orangeHamgo text-base res3:text-sm'>پلتفرم‌ها</h1>
            <ul className='w-full flex items-start justify-start flex-col res7:items-center'>
                {platfourms?.map((item ,index) => (
                    <li key={index + "platfourm"} className='w-full flex items-center justify-start text-white text-sm res3:text-xs my-2 res7:justify-center'>
                        {item.title}
                    </li>
                ))}
            </ul>

            <Image src={Enamad} alt="enamad" className='bg-white w-20 res3:w-14 my-6 mx-0' />
        </div>
    </Fragment>
  )
}

export default Platfourm