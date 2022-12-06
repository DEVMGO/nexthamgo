import React, { useState } from 'react'
import Image from 'next/image'

import MobileMenu from './mobileMenu';
//Icons
import { BiChevronDown } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
// Images
import Logo from '../../../../public/assets/imgs/PER_logo.png'
import Link from 'next/link';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const Links = [
        {
            title: 'صفحه اصلی',
            url: '/',
            children: [],
        },
        {
            title: 'دوره‌های آموزشی',
            url: '#',
            children: [
                {
                    title: 'دوره 1',
                    url: '/packages/1'
                },
                {
                    title: 'دوره 2',
                    url: '/packages/2'
                },
                {
                    title: 'دوره 3',
                    url: '/packages/3'
                },
            ],
        },
        {
            title: 'فایل‌های آموزشی',
            url: '#',
            children: [
                {
                    title: 'فایل 1',
                    url: '/learningfiles/1'
                },
                {
                    title: 'فایل 2',
                    url: '/learningfiles/2'
                },
                {
                    title: 'فایل 3',
                    url: '/learningfiles/3'
                },
            ],
        },
        {
            title: 'انتشارات',
            url: '/publications',
            children: [],
        },
        {
            title: 'درباره ما',
            url: 'aboutus',
            children: [],
        },
        {
            title: 'تماس با‌ما',
            url: 'contactus',
            children: [],
        },
    ]

  return (
    <div className='relative w-full bg-blueHamgo flex items-stretch justify-between px-8 res4:px-4 h-20 bg-gradient-to-r from-[rgba(16,46,70,1)] via-[rgba(22,105,122,1)] to-[rgba(16,46,70,1)]'>
        <div className='flex items-center justify-start'>
            <button onClick={() => setShowMenu(!showMenu)} className='hidden res5:flex text-white text-3xl ml-2 transition-all duration-500'>
                {showMenu ? <MdOutlineClose /> : <HiMenu />}
            </button>
            {showMenu && <MobileMenu Links={Links} />}

            <div className='p-2 w-20 h-20 overflow-hidden'>
                <Link href="/"><Image src={Logo} alt="همگو" className='w-full h-full object-contain' /></Link>
            </div>

            <ul className='w-full h-full flex items-center justify-center res5:hidden'>
                {Links.map((item ,index) => (
                    <li key={index + "menulist"} className="h-full px-3 hover:bg-white ml-4 text-white text-xs flex items-center justify-center relative [&>ul]:hover:max-h-screen transition-all duration-300 ease-in-out hover:text-orangeHamgo">
                        <Link href={item.url} className="w-full h-full flex items-center justify-between">
                            {item.title}
                            {item.children.length !== 0 && <BiChevronDown className='mr-2'/>}
                        </Link>

                        {item.children.length !== 0 ? 
                            <ul className='absolute w-full bg-white top-20 right-0 items-start justify-center flex-col flex overflow-hidden transition-all duration-500 ease-in-out max-h-0'>
                                {item.children.map((itm,indx) => (
                                    <li key={indx + "childrenlink"} className="w-full text-zinc-800 hover:text-orangeHamgo py-3 px-2">
                                        <Link href={itm.url}>{itm.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        : null}
                    </li>
                ))}
            </ul>
        </div>

        <div className='flex items-center justify-center'>
            <button className='text-white text-xs hover:text-zinc-800 hover:bg-white rounded-md  py-3 px-8'>ورود / ثبت‌نام</button>
            {/* <button className='text-zinc-800 text-xs hover:text-white hover:bg-transparent rounded-md bg-white mr-2 py-3 px-8'>ثبت نام</button> */}
        </div>
    </div>
  )
}

export default Navbar