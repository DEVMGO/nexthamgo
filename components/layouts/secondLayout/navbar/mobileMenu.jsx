import React from 'react'
import Link from 'next/link'
//Icons
import { BiChevronDown } from 'react-icons/bi';

const MobileMenu = ({ Links }) => {
  return (
    <div className='w-full h-screen fixed top-20 right-0 bg-[rgba(16,46,70,1)]'>
        <ul className='w-full h-full flex items-start justify-start flex-col'>
            {Links.map((item ,index) => (
                <li key={index + "menulist"} className="min-w-[150px] min-h-0 px-3 ml-4 text-white text-xs flex items-center justify-start flex-col relative [&>ul]:hover:max-h-screen transition-all duration-300 ease-in-out hover:text-orangeHamgo">
                    <Link href={item.url} className="w-full h-12 flex items-center justify-between text-white">
                        {item.title}
                        {item.children.length !== 0 && <BiChevronDown className='mr-2'/>}
                    </Link>

                    {item.children.length !== 0 ? 
                        <ul className='w-full max-h-0 items-start justify-start flex-col flex overflow-hidden transition-all duration-500 ease-in-out'>
                            {item.children.map((itm,indx) => (
                                <li key={indx + "childrenlink"} className="w-full h-12 text-white hover:text-orangeHamgo py-3 px-2">
                                    <Link href={itm.url}>{itm.title}</Link>
                                </li>
                            ))}
                        </ul>
                    : null}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MobileMenu