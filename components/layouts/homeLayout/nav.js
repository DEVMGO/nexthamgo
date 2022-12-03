import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';


const Nav = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col'>
        <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center justify-start'>
                <h5 className='text-white text-sm ml-12'>تماس با همگو :88003027</h5>
                <h5 className='text-white text-sm'>ایمیل :axe7491@gmail.com</h5>
            </div>

            <div className='w-full flex items-center justify-end'>
                <BsLinkedin />
                <FaTwitter />
                <FaInstagram />
            </div>
        </div>

        <div className='w-full flex items-center justify-between'></div>
    </div>
  )
}

export default Nav